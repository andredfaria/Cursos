/*
SQLyog Professional v12.4.3 (64 bit)
MySQL - 10.1.37-MariaDB : Database - test
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`test` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `test`;

/*Table structure for table `products` */

DROP TABLE IF EXISTS `products`;

CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category_id` int(11) DEFAULT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `price` float(10,2) DEFAULT NULL,
  `amount` int(11) DEFAULT NULL,
  `description` text COLLATE utf8_unicode_ci,
  `slug` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `image` text COLLATE utf8_unicode_ci,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `products` */

insert  into `products`(`id`,`category_id`,`name`,`price`,`amount`,`description`,`slug`,`created_at`,`updated_at`,`image`) values 
(1,2,'Arroz',19.90,10,'Alimento','Arroz','2017-04-14 14:45:26','2017-04-14 15:56:56','https://i.pinimg.com/736x/c2/f5/f2/c2f5f2692a5c8ff1906895ffaf79473f.jpg'),
(8,2,'Feijão',49.90,10,'Alimento.','Feijão','2017-06-23 19:11:14','2017-06-24 14:04:31','https://img.itdg.com.br/tdg/images/recipes/000/169/692/146782/146782_original.jpg?mode=crop&width=710&height=400'),
(9,2,'Açucar',99.90,10,'Alimento.','Açucar','2017-06-23 19:11:14','2017-06-24 14:04:31','https://i2.wp.com/avozdacidade.com/wp/wp-content/uploads/2019/09/A-62-CF-TEM%C3%81TICA-O-que-acontece-com-o-seu-corpo-quando-voc%C3%AA-para-de-comer-a%C3%A7%C3%BAcar.jpg?fit=640%2C427&ssl=1'),
(10,2,'Sal',99.90,10,'Alimento.','Sal','2017-06-23 19:11:14','2017-06-24 14:04:31','https://www.tvcaete.com.br/images/noticias/1146/6c601bee6a52c34dce626986bcdd55e2.jpg'),
(11,2,'Farinha',99.90,10,'Alimento.','Farinha','2017-06-23 19:11:14','2017-06-24 14:04:31','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSf6c13WBXgh2d6TrQAmbpGNdr7wI_71k6f4uSQ2CFR7Bmupfff');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
