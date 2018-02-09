/*
 Navicat Premium Data Transfer

 Source Server         : localhost_3306
 Source Server Type    : MySQL
 Source Server Version : 50714
 Source Host           : localhost:3306
 Source Schema         : jiayouhui

 Target Server Type    : MySQL
 Target Server Version : 50714
 File Encoding         : 65001

 Date: 09/02/2018 16:41:57
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for buycar
-- ----------------------------
DROP TABLE IF EXISTS `buycar`;
CREATE TABLE `buycar`  (
  `userid` int(11) NOT NULL COMMENT '用户名',
  `id` int(11) DEFAULT NULL COMMENT '商品id',
  `qty` int(11) DEFAULT NULL COMMENT '商品数量',
  `price` decimal(10, 2) DEFAULT NULL COMMENT '商品价格',
  PRIMARY KEY (`userid`) USING BTREE
) ENGINE = MyISAM CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Fixed;

-- ----------------------------
-- Table structure for goods
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods`  (
  `id` int(6) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT COMMENT '商品Id',
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL COMMENT '商品名称',
  `price` int(10) DEFAULT NULL COMMENT '商品价格',
  `qty` int(10) DEFAULT NULL COMMENT '数量',
  `saleqty` int(10) DEFAULT NULL COMMENT '销售数量',
  `category` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '类别',
  `imgurl` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL COMMENT '图片路径',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 202 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES (000080, '三件套', 180, 3, 2, '床上用品', '../images/good1.jpg');
INSERT INTO `goods` VALUES (000151, '美国·GNC葡萄籽浓缩精华胶囊100粒*4瓶--0', 371, 100, 91, '创意家居', '../images/good1.jpg');
INSERT INTO `goods` VALUES (000152, '美国·GNC葡萄籽浓缩精华胶囊100粒*4瓶--01', 406, 100, 85, '收纳', '../images/good1.jpg');
INSERT INTO `goods` VALUES (000153, '美国·GNC葡萄籽浓缩精华胶囊100粒*4瓶--02', 188, 100, 91, '清洁用品', '../images/good1.jpg');
INSERT INTO `goods` VALUES (000154, '创意生活3', 250, 100, 115, '浴室用品', '../images/good1.jpg');
INSERT INTO `goods` VALUES (000155, '美国·GNC葡萄籽浓缩精华胶囊4', 427, 100, 55, '生活家居', '../images/good1.jpg');
INSERT INTO `goods` VALUES (000156, '美国·GNC葡萄籽浓缩精华胶囊5', 450, 100, 114, '生活家居', '../images/good1.jpg');
INSERT INTO `goods` VALUES (000157, '美国·GNC葡萄籽浓缩精华胶囊6', 233, 100, 92, '收纳', '../images/good1.jpg');
INSERT INTO `goods` VALUES (000158, '美国·GNC葡萄籽浓缩精华胶囊7', 204, 100, 36, '收纳', '../images/good1.jpg');
INSERT INTO `goods` VALUES (000159, '美国·GNC葡萄籽浓缩精华胶囊8', 390, 100, 26, '收纳', '../images/good1.jpg');
INSERT INTO `goods` VALUES (000160, '美国·GNC葡萄籽浓缩精华胶囊9', 250, 100, 61, '生活家居', '../images/good1.jpg');
INSERT INTO `goods` VALUES (000161, '美国·GNC葡萄籽浓缩精华胶囊100粒*4瓶10', 268, 100, 11, '床上用品', '../images/good1.jpg');
INSERT INTO `goods` VALUES (000162, '美国·GNC葡萄籽浓缩精华胶囊100粒*4瓶11', 373, 100, 60, '生活家居', '../images/good1.jpg');
INSERT INTO `goods` VALUES (000163, '美国·GNC葡萄籽浓缩精华胶囊100粒*4瓶12', 117, 100, 89, '生活家居', '../images/good1.jpg');
INSERT INTO `goods` VALUES (000164, '美国·GNC葡萄籽浓缩精华胶囊100粒*4瓶13', 452, 100, 57, '床上用品', '../images/good1.jpg');
INSERT INTO `goods` VALUES (000165, '美国·GNC葡萄籽浓缩精华胶囊100粒*4瓶14', 257, 100, 101, '生活家居', '../images/good1.jpg');
INSERT INTO `goods` VALUES (000166, '美国·GNC葡萄籽浓缩精华胶囊100粒*4瓶15', 90, 100, 95, '收纳', '../images/good1.jpg');
INSERT INTO `goods` VALUES (000167, '美国·GNC葡萄籽浓缩精华胶囊100粒*4瓶16', 479, 100, 127, '收纳', '../images/good1.jpg');
INSERT INTO `goods` VALUES (000168, '美国·GNC葡萄籽浓缩精华胶囊100粒*4瓶17', 218, 100, 109, '生活家居', '../images/good1.jpg');
INSERT INTO `goods` VALUES (000169, '美国·GNC葡萄籽浓缩精华胶囊100粒*4瓶18', 424, 100, 146, '创意生活', '../images/good1.jpg');
INSERT INTO `goods` VALUES (000170, '美国·GNC葡萄籽浓缩精华胶囊100粒*4瓶19', 376, 100, 96, '床上用品', '../images/good1.jpg');
INSERT INTO `goods` VALUES (000171, '美国·GNC葡萄籽浓缩精华胶囊100粒*4瓶20', 276, 100, 128, '生活家居', '../images/good1.jpg');
INSERT INTO `goods` VALUES (000172, '美国·GNC葡萄籽浓缩精华胶囊100粒*4瓶21', 156, 100, 98, '生活家居', '../images/good1.jpg');
INSERT INTO `goods` VALUES (000173, '美国·GNC葡萄籽浓缩精华胶囊100粒*4瓶22', 354, 100, 118, '浴室用品', '../images/good1.jpg');
INSERT INTO `goods` VALUES (000174, '美国·GNC葡萄籽浓缩精华胶囊100粒*4瓶', 463, 100, 136, '生活家居', '../images/good1.jpg');
INSERT INTO `goods` VALUES (000175, '美国·GNC葡萄籽浓缩精华胶囊100粒*4瓶', 250, 100, 68, '生活家居', '../images/good1.jpg');
INSERT INTO `goods` VALUES (000176, '美国·GNC葡萄籽浓缩精华胶囊100粒*4瓶', 218, 100, 128, '生活家居', '../images/good1.jpg');
INSERT INTO `goods` VALUES (000177, '美国·GNC葡萄籽浓缩精华胶囊100粒*4瓶', 373, 100, 130, '创意生活', '../images/good1.jpg');
INSERT INTO `goods` VALUES (000178, '美国·GNC葡萄籽浓缩精华胶囊100粒*4瓶', 392, 100, 4, '浴室用品', '../images/good1.jpg');
INSERT INTO `goods` VALUES (000179, '美国·GNC葡萄籽浓缩精华胶囊100粒*4瓶', 142, 100, 40, '创意生活', '../images/good1.jpg');
INSERT INTO `goods` VALUES (000180, '美国·GNC葡萄籽浓缩精华胶囊100粒*4瓶', 356, 100, 27, '浴室用品', '../images/good1.jpg');
INSERT INTO `goods` VALUES (000181, '美国·GNC葡萄籽浓缩精华胶囊100粒*4瓶', 479, 100, 126, '创意生活', '../images/good1.jpg');
INSERT INTO `goods` VALUES (000182, '美国·GNC葡萄籽浓缩精华胶囊100粒*4瓶', 479, 100, 66, '创意生活', '../images/good1.jpg');
INSERT INTO `goods` VALUES (000183, '美国·GNC葡萄籽浓缩精华胶囊100粒*4瓶', 473, 100, 132, '浴室用品', '../images/good1.jpg');
INSERT INTO `goods` VALUES (000184, '美国·GNC葡萄籽浓缩精华胶囊100粒*4瓶', 183, 100, 111, '创意生活', '../images/good1.jpg');
INSERT INTO `goods` VALUES (000185, '美国·GNC葡萄籽浓缩精华胶囊100粒*4瓶', 479, 100, 119, '浴室用品', '../images/good1.jpg');
INSERT INTO `goods` VALUES (000186, '美国·GNC葡萄籽浓缩精华胶囊100粒*4瓶', 321, 100, 30, '浴室用品', '../images/good1.jpg');
INSERT INTO `goods` VALUES (000187, '美国·GNC葡萄籽浓缩精华胶囊100粒*4瓶', 106, 100, 147, '创意生活', '../images/good1.jpg');
INSERT INTO `goods` VALUES (000188, '美国·GNC葡萄籽浓缩精华胶囊100粒*4瓶', 375, 100, 12, '浴室用品', '../images/good1.jpg');
INSERT INTO `goods` VALUES (000189, '美国·GNC葡萄籽浓缩精华胶囊100粒*4瓶', 424, 100, 125, '创意生活', '../images/good1.jpg');
INSERT INTO `goods` VALUES (000190, '美国·GNC葡萄籽浓缩精华胶囊100粒*4瓶', 305, 100, 69, '浴室用品', '../images/good1.jpg');
INSERT INTO `goods` VALUES (000191, '美国·GNC葡萄籽浓缩精华胶囊100粒*4瓶', 248, 100, 83, '创意生活', '../images/good1.jpg');
INSERT INTO `goods` VALUES (000192, '美国·GNC葡萄籽浓缩精华胶囊100粒*4瓶', 186, 100, 100, '清洁用品', '../images/good1.jpg');
INSERT INTO `goods` VALUES (000193, '美国·GNC葡萄籽浓缩精华胶囊100粒*4瓶', 277, 100, 67, '清洁用品', '../images/good1.jpg');
INSERT INTO `goods` VALUES (000194, '美国·GNC葡萄籽浓缩精华胶囊100粒*4瓶', 298, 100, 16, '浴室用品', '../images/good1.jpg');
INSERT INTO `goods` VALUES (000195, '美国·GNC葡萄籽浓缩精华胶囊100粒*4瓶', 235, 100, 146, '清洁用品', '../images/good1.jpg');
INSERT INTO `goods` VALUES (000196, '美国·GNC葡萄籽浓缩精华胶囊100粒*4瓶', 150, 100, 146, '浴室用品', '../images/good1.jpg');
INSERT INTO `goods` VALUES (000197, '美国·GNC葡萄籽浓缩精华胶囊100粒*4瓶', 133, 100, 33, '清洁用品', '../images/good1.jpg');
INSERT INTO `goods` VALUES (000198, '美国·GNC葡萄籽浓缩精华胶囊100粒*4瓶', 167, 100, 63, '清洁用品', '../images/good1.jpg');
INSERT INTO `goods` VALUES (000199, '美国·GNC葡萄籽浓缩精华胶囊100粒*4瓶', 406, 100, 60, '床上用品', '../images/good1.jpg');
INSERT INTO `goods` VALUES (000200, '美国·GNC葡萄籽浓缩精华胶囊100粒*4瓶', 356, 100, 22, '床上用品', '../images/good1.jpg');
INSERT INTO `goods` VALUES (000201, '美国·GNC葡萄籽浓缩精华胶囊100粒*4瓶', 200, 100, 20, '创意生活', '../images/good1.jpg');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `userid` varchar(11) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL COMMENT '用户名',
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL COMMENT '用户名称',
  `password` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL COMMENT '密码',
  PRIMARY KEY (`userid`) USING BTREE
) ENGINE = MyISAM CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('18358335640', NULL, 'chentian');
INSERT INTO `user` VALUES ('12312312312', NULL, '123456');
INSERT INTO `user` VALUES ('11111111111', NULL, 'e10adc3949ba59abbe56e057f20f883e');

SET FOREIGN_KEY_CHECKS = 1;
