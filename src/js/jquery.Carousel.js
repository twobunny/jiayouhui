;(function($){
    $.fn.carousel = function(options){
        //这里的this指的是jquery实例
        console.log(this);
        /*
            默认参数
                *为了防止别人使用时,没有传入特定参数时提供默认值
                *从需求进行填写
         */
        var defaults = {
            
            height:550,
            //添加空的img属性,防止报错
            img:[],

            //轮播图的时间间隔
            duration:3000,

            //轮播类型,默认为水平horizontal,垂直为vertical,淡入淡出fade
            type:'horizontal',

            //是否自动轮播
            auto:true,

             //是否需要生成左右按钮
            button:true,
            
            // 是否需要页码
            page:true,

            // 默认index,显示第一张
            index:0,

            // 无缝滚动
            marquee:true
        }


        return this.each(function(){
            console.log(this);
            //定义变量获取节点是 carousel
            var $this = $(this);
            
            //处理传入的参数，通过Object.assign()或者遍历for..in
            var opt = $.extend({},defaults,options);

            $this.css({
                height:opt.height
            })


            var carousel = {
                //初始化,创建节点,绑定事件
                init(){

                    //创建ul
                    this.$ul = $('<ul/>');
                    this.$ul.addClass('carousel').css({
                        width:$this.width(),
                        height:opt.height
                    });

                    //生成li和img
                    this.$lis = opt.img.map(function(item){
                        return `<li><img src=${item}></li>`;
                    }).join('');


                    //将li插入到ul
                    this.$ul.append(this.$lis);

                    this.$ul.find('img').css({
                        width:opt.width,
                        height:opt.height
                    })
                   
                    
                    //插入到显示的位置
                    $this.append(this.$ul);

                    //是否无缝滚动 
                    if(opt.marquee){
                      this.$ul.children().first().clone().appendTo(this.$ul); 
                    }
                    

                    //判断是否自动轮播
                    if(opt.auto){
                        this.start();
                    }
                    //给传入显示的位置绑定鼠标移入移出事件
                    //此时的this是指jQuery对象
                    $this.on('mousemove',()=>{
                        this.stop();
                    })
                    $this.on('mouseout',()=>{
                        this.start();
                    })

                    //判断是否需要生成左右按钮(默认是左右)
                    if(opt.button){
                        this.$prev = $('<div/>');
                        this.$next = $('<div/>');
                        this.$prev.addClass('carousel-prev');
                        this.$next.addClass('carousel-next');
                        $previmg=$('<img/>');$previmg.attr({'src':"./images/prev_bg.png"});
                        $nextimg=$('<img/>');$nextimg.attr({'src':"./images/next_bg.png"});
                        $this.append(this.$prev.append($previmg));
                        $this.append(this.$next.append($nextimg));
                    }

                    //给按钮绑定点事件
                    this.$prev.on('click',()=>{
                        opt.index--;
                        this.move();
                    })
                    this.$next.on('click',()=>{
                        opt.index++;
                        this.move();
                    })

                    //判断是否存在页码
                    if(opt.page){
                        //创建page
                        this.$page = $('<ul/>');
                        this.$page.addClass('img-index');
                        //根据图片生成按钮
                        for(var i=0;i<opt.img.length;i++){
                            this.$span = $('<li/>');
                            this.$span.text(i+1);
                             this.$page.append(this.$span);
                        }
                        //将page插入页面
                        $this.append(this.$page);
                    }
                     
                    //初始化.默认显示第一张
                    this.$page.children('li').eq(opt.index).addClass('on')

                    //利用事件委托实现点击按钮切换图片
                    this.$page.on('click','li',function(e){
                        // console.log($(e.target).text());
                        opt.index = $(e.target).text()-1;
                        this.move();
                    }.bind(this));

                    //获取li下的图片
                    this.$allImg = this.$ul.find('img');

                    if(opt.type === 'horizontal'){
                        //*水平时,需要给ul添加宽度,
                        this.$ul.css({
                            width:opt.width*(opt.img.length+1),
                        })
                        //通过遍历将所有的li浮动
                        this.$ul.children('li').css({
                            float:'left',
                        })
                    
                    }else if(opt.type === 'fade'){
                        //li添加定位,将所有图片汇聚到一起
                        this.$ul.children('li').css({
                            position:'absolute',
                            left:0,
                            top:0
                        })
                        //页面初始化时,将除了默认index的其他图片进行隐藏
                        this.$ul.find('li').eq(opt.index).siblings('li').css({
                            opacity:0,
                        })   
                    }

                    this.lastindex = 0;
                },
                //动画效果
                move(){
                    // console.log(opt.index,this.lastindex)
                    //index的判断
                    if(opt.index > this.$ul.children('li').length-1){
                        this.$ul.css({
                            left:0,
                        })
                        opt.index = 1;
                    }else if(opt.index < 0){
                        opt.index = this.$ul.children('li').length-1;
                    }

                    //*创建对象,储存目标值(left,top)
                    var target = {};
                    var lastTarget = {}
                    //判断传入的类型是否为水平
                    if(opt.type === 'horizontal'){
                        //改变目标的left值
                        target.left = -opt.index*opt.width;
                    }else if(opt.type === 'vertical'){
                        //改变目标的top值
                        target.top = -opt.index*opt.height;
                    //如果传入的是opacity,应该想让它前一张为0,后一张为1
                    }else if(opt.type === 'fade'){
                        target.opacity = 1;
                        lastTarget.opacity = 0;
                    }

                    //判断执行那个动画(水平还是垂直还是淡入淡出)
                    if(opt.type === 'vertical' || opt.type === 'horizontal'){
                        this.$ul.stop().animate(target);
                    }else if(opt.type === 'fade'){
                        //定义变量lastIndex控制前一张为透明
                        this.$ul.children('li').eq(opt.index).stop().animate(target);
                        this.$ul.children('li').eq(this.lastindex).stop().animate(lastTarget);
                        this.lastindex = opt.index;
                    }
                    //对页码存在问题执行判断,如果不存在时就不执行下面代码
                    if(!opt.page){
                        return;
                    }

                    //标签页高亮
                    // for(var i=0;i<this.$page.children('span').length;i++){
                        this.$page.children('li').removeClass('on');
                    // }
                    if(opt.index<this.$ul.children('li').length-1){
                        this.$page.children('li').eq(opt.index).addClass('on');
                    }else{
                        //默认第一个高亮
                        this.$page.children('li').first().addClass('on');
                    }
                },
                //启动
                start(){
                     clearInterval(this.$ul.timer)
                    //设置定时器,页面打开时自动启动
                    this.$ul.timer = setInterval(function(){
                        opt.index++;
                        this.move();
                    }.bind(this),opt.duration);
                },
                //停止
                stop(){
                    //鼠标移入时自动停止
                    clearInterval(this.$ul.timer)
                },
            }

            carousel.init();
        });
    }
})(jQuery);