-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: localhost    Database: warehouse
-- ------------------------------------------------------
-- Server version	8.0.40

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `inbound`
--

DROP TABLE IF EXISTS `inbound`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `inbound` (
  `inbound_id` int NOT NULL AUTO_INCREMENT,
  `reference` varchar(45) DEFAULT NULL,
  `date_received` datetime DEFAULT NULL,
  `product_sku` varchar(45) NOT NULL,
  `quantity` int DEFAULT NULL,
  `location` varchar(45) DEFAULT NULL,
  `remarks` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`inbound_id`),
  KEY `inventory_id_idx` (`product_sku`),
  CONSTRAINT `foreign_key` FOREIGN KEY (`product_sku`) REFERENCES `inventory` (`inventory_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inbound`
--

LOCK TABLES `inbound` WRITE;
/*!40000 ALTER TABLE `inbound` DISABLE KEYS */;
INSERT INTO `inbound` VALUES (1,'INBOUND001','2022-01-03 02:40:00','PRD001',100,'Storage A',NULL),(2,'INBOUND002','2022-01-03 02:40:00','PRD002',100,'Storage D',NULL),(3,'INBOUND003','2022-01-03 02:40:00','PRD003',100,'Storage B',NULL),(4,'INBOUND004','2022-01-03 02:40:00','PRD004',100,'Storage A',NULL),(5,'INBOUND005','2022-01-03 02:40:00','PRD005',20,'Storage C',NULL);
/*!40000 ALTER TABLE `inbound` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `inventory`
--

DROP TABLE IF EXISTS `inventory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `inventory` (
  `inventory_id` varchar(45) NOT NULL,
  `product_name` varchar(45) NOT NULL,
  `supplier` varchar(45) NOT NULL,
  PRIMARY KEY (`inventory_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inventory`
--

LOCK TABLES `inventory` WRITE;
/*!40000 ALTER TABLE `inventory` DISABLE KEYS */;
INSERT INTO `inventory` VALUES ('PRD0007','Mat','Mat House'),('PRD001','Apron','Apron House'),('PRD002','Gloves','Glove House'),('PRD003','Cap','Cap House'),('PRD004','Mask','Mask House'),('PRD005','Boots','Boot House');
/*!40000 ALTER TABLE `inventory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `outbound`
--

DROP TABLE IF EXISTS `outbound`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `outbound` (
  `outbound_id` int NOT NULL AUTO_INCREMENT,
  `reference` varchar(45) DEFAULT NULL,
  `date_shipped` timestamp NULL DEFAULT NULL,
  `product_sku` varchar(45) NOT NULL,
  `quantity` int DEFAULT NULL,
  `destination` varchar(45) DEFAULT NULL,
  `remarks` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`outbound_id`),
  KEY `inventory_id_idx` (`product_sku`),
  CONSTRAINT `inventory_id` FOREIGN KEY (`product_sku`) REFERENCES `inventory` (`inventory_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `outbound`
--

LOCK TABLES `outbound` WRITE;
/*!40000 ALTER TABLE `outbound` DISABLE KEYS */;
INSERT INTO `outbound` VALUES (1,'OUTBOUND001','2022-01-02 18:40:00','PRD001',200,'ABC Company',NULL),(2,'OUTBOUND002','2022-01-02 18:40:00','PRD002',80,'123 Store',NULL),(3,'OUTBOUND003','2022-01-02 18:40:00','PRD003',500,'987 Store',NULL),(4,'OUTBOUND004','2022-01-02 18:40:00','PRD004',50,'XYZ Company',NULL),(5,'OUTBOUND005','2022-01-02 18:40:00','PRD005',100,'JKL Store',NULL);
/*!40000 ALTER TABLE `outbound` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-12-09 13:30:48
