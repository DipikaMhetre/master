CREATE DATABASE  IF NOT EXISTS `purpleaid` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `purpleaid`;
-- MySQL dump 10.13  Distrib 5.6.23, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: purpleaid
-- ------------------------------------------------------
-- Server version	5.6.20

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `account`
--

DROP TABLE IF EXISTS `account`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `account` (
  `ID` double NOT NULL AUTO_INCREMENT,
  `acCode` varchar(50) DEFAULT NULL,
  `description` varchar(50) DEFAULT NULL,
  `acType` int(11) DEFAULT NULL,
  `flgActive` int(11) DEFAULT NULL,
  `CreatedBy` double DEFAULT NULL,
  `CreatedOn` datetime DEFAULT NULL,
  `ModifiedBy` double DEFAULT NULL,
  `ModifiedOn` datetime DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `account`
--

LOCK TABLES `account` WRITE;
/*!40000 ALTER TABLE `account` DISABLE KEYS */;
INSERT INTO `account` VALUES (1,'6501','desc1',1,1,NULL,NULL,NULL,NULL),(2,'6502','desc2',2,1,NULL,NULL,NULL,NULL),(3,'6503','desc3',1,0,NULL,NULL,NULL,NULL),(4,'6504','desc4',1,1,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `account` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `activeusers`
--

DROP TABLE IF EXISTS `activeusers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `activeusers` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `token` decimal(20,16) DEFAULT NULL,
  `userID` int(11) DEFAULT NULL,
  `IP` varchar(45) DEFAULT NULL,
  `createdOn` datetime DEFAULT NULL,
  `ModifiedOn` datetime DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=410 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `activeusers`
--

LOCK TABLES `activeusers` WRITE;
/*!40000 ALTER TABLE `activeusers` DISABLE KEYS */;
INSERT INTO `activeusers` VALUES (409,0.4309344612350077,10,NULL,'2015-10-31 15:25:53','2015-10-31 17:14:02');
/*!40000 ALTER TABLE `activeusers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `additionaldiscount`
--

DROP TABLE IF EXISTS `additionaldiscount`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `additionaldiscount` (
  `ID` int(11) NOT NULL,
  `CreatedBy` int(11) DEFAULT NULL,
  `CreatedOn` datetime DEFAULT NULL,
  `ModifiedBy` int(11) DEFAULT NULL,
  `ModifiedOn` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `additionaldiscount`
--

LOCK TABLES `additionaldiscount` WRITE;
/*!40000 ALTER TABLE `additionaldiscount` DISABLE KEYS */;
/*!40000 ALTER TABLE `additionaldiscount` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `addresssummery`
--

DROP TABLE IF EXISTS `addresssummery`;
/*!50001 DROP VIEW IF EXISTS `addresssummery`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `addresssummery` AS SELECT 
 1 AS `ID`,
 1 AS `summery`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `area`
--

DROP TABLE IF EXISTS `area`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `area` (
  `ID` double NOT NULL AUTO_INCREMENT,
  `code` varchar(40) NOT NULL DEFAULT '',
  `description` varchar(50) DEFAULT NULL,
  `pincode` varchar(50) DEFAULT NULL,
  `regionID` double DEFAULT NULL,
  `flgActive` int(11) DEFAULT NULL,
  `CreatedBy` double DEFAULT NULL,
  `CreatedOn` datetime DEFAULT NULL,
  `ModifiedBy` double DEFAULT NULL,
  `ModifiedOn` datetime DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `area`
--

LOCK TABLES `area` WRITE;
/*!40000 ALTER TABLE `area` DISABLE KEYS */;
INSERT INTO `area` VALUES (5,'K03','karve Road','411004',5,1,NULL,NULL,NULL,NULL),(6,'PACT','camp','411021',6,1,10,'2015-03-04 16:27:30',NULL,NULL),(31,'P09','baner updates','4332211',5,1,NULL,NULL,NULL,NULL),(32,'asdasupdate','asdUPDATE','34342244',5,1,NULL,NULL,NULL,NULL),(33,'K AREA','K DESCRIPTION','112233',7,1,NULL,NULL,NULL,NULL),(34,'asdas','asda','12312',7,1,NULL,NULL,NULL,NULL),(35,'a','aaa','1221',7,1,NULL,NULL,NULL,NULL),(36,'a','aaa','1221',7,1,NULL,NULL,NULL,NULL),(37,'ttt','tdesc','45678',7,1,NULL,NULL,NULL,NULL),(38,'322','df','0',29,1,NULL,NULL,NULL,NULL),(39,'3','3','0',6,1,NULL,NULL,NULL,NULL),(40,'123','dffdv',NULL,27,1,NULL,NULL,NULL,NULL),(41,'2','fdff','44',6,0,NULL,NULL,NULL,NULL),(42,'3333','hhgggggg','4564',7,1,NULL,NULL,NULL,NULL),(43,'sad','asd','1',7,1,NULL,NULL,NULL,NULL),(44,'zzzzzzxxxxxx','xxxxxxxxxxcc',NULL,8,1,NULL,NULL,NULL,NULL),(45,'zzzzzzxxxxxx','xxxxxxxxxxcc',NULL,8,1,NULL,NULL,NULL,NULL),(46,'vvvv','vvv',NULL,26,1,NULL,NULL,NULL,NULL),(47,'11111','111111111',NULL,29,1,NULL,NULL,NULL,NULL),(48,'11111','111111111',NULL,29,1,NULL,NULL,NULL,NULL),(49,'qwww11','qwe222',NULL,29,1,NULL,NULL,NULL,NULL),(50,'5656','5656',NULL,7,1,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `area` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `authtokens`
--

DROP TABLE IF EXISTS `authtokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `authtokens` (
  `tokenId` int(11) NOT NULL AUTO_INCREMENT,
  `userId` double DEFAULT NULL,
  `token` text,
  PRIMARY KEY (`tokenId`),
  KEY `authtokens.userId_idx` (`userId`),
  CONSTRAINT `authtokens.userId` FOREIGN KEY (`userId`) REFERENCES `user` (`ID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `authtokens`
--

LOCK TABLES `authtokens` WRITE;
/*!40000 ALTER TABLE `authtokens` DISABLE KEYS */;
INSERT INTO `authtokens` VALUES (1,10,'40406a92-346f-4ccd-9328-1d528e7e0f78');
/*!40000 ALTER TABLE `authtokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `batchscheme`
--

DROP TABLE IF EXISTS `batchscheme`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `batchscheme` (
  `ID` double NOT NULL AUTO_INCREMENT,
  `PBAID` double DEFAULT NULL,
  `startDate` date DEFAULT NULL,
  `endDate` date DEFAULT NULL,
  `minStock` double DEFAULT NULL,
  `remark` varchar(150) DEFAULT NULL,
  `flgSchemeLock` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `batchscheme`
--

LOCK TABLES `batchscheme` WRITE;
/*!40000 ALTER TABLE `batchscheme` DISABLE KEYS */;
INSERT INTO `batchscheme` VALUES (1,1,'2018-01-04','2009-02-05',1011,'test123',1),(2,2,'2018-01-04','2018-01-04',121,'asad',1),(3,3,'2018-01-09','2018-01-23',234,'asdas',0),(4,68,'0000-00-00','0000-00-00',0,NULL,0),(5,94,'2015-06-26','2015-06-30',0,NULL,0),(7,208,'2015-09-03','2015-09-17',0,'sa',0);
/*!40000 ALTER TABLE `batchscheme` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `batchschemedetails`
--

DROP TABLE IF EXISTS `batchschemedetails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `batchschemedetails` (
  `ID` double NOT NULL AUTO_INCREMENT,
  `schemeIndex` double DEFAULT NULL,
  `BSID` double DEFAULT NULL,
  `quantity` double DEFAULT NULL,
  `free` double DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `batchschemedetails`
--

LOCK TABLES `batchschemedetails` WRITE;
/*!40000 ALTER TABLE `batchschemedetails` DISABLE KEYS */;
INSERT INTO `batchschemedetails` VALUES (1,0,1,50,12),(2,1,1,100,23),(3,0,2,23,1),(4,1,2,222,23),(5,0,3,45,2),(6,1,3,455,67),(7,0,4,0,0),(8,1,4,0,0),(9,2,4,0,0),(10,0,5,0,0),(11,1,5,0,0),(12,2,5,0,0),(13,0,0,1,1),(14,1,0,111,111),(15,2,0,0,0);
/*!40000 ALTER TABLE `batchschemedetails` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `batchstockadjustments`
--

DROP TABLE IF EXISTS `batchstockadjustments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `batchstockadjustments` (
  `ID` double NOT NULL AUTO_INCREMENT,
  `PBAID` double DEFAULT NULL,
  `expiry` double DEFAULT NULL,
  `breakage` double DEFAULT NULL,
  `coTransfer` double DEFAULT NULL,
  `Remark` varchar(45) DEFAULT NULL,
  `CreatedBy` double DEFAULT NULL,
  `CreatedOn` datetime DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1 COMMENT='					';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `batchstockadjustments`
--

LOCK TABLES `batchstockadjustments` WRITE;
/*!40000 ALTER TABLE `batchstockadjustments` DISABLE KEYS */;
INSERT INTO `batchstockadjustments` VALUES (1,3,1,1,1,NULL,10,'2015-07-15 16:06:08'),(2,3,4,4,4,NULL,10,'2015-07-15 16:27:25'),(3,3,1,1,1,NULL,10,'2015-07-15 16:28:09'),(4,3,1,0,0,NULL,10,'2015-07-15 16:36:24'),(5,3,1,0,0,NULL,10,'2015-07-15 16:36:46'),(6,1,12,0,0,NULL,10,'2015-07-15 18:02:57'),(8,221,1,1,1,'qqqqq',10,'2015-09-09 19:15:39'),(9,221,1,1,1,'qqqqq',10,'2015-09-09 19:16:04'),(10,230,1,1,0,NULL,10,'2015-10-10 12:11:09');
/*!40000 ALTER TABLE `batchstockadjustments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `business`
--

DROP TABLE IF EXISTS `business`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `business` (
  `ID` double NOT NULL,
  `BusinessName` varchar(45) DEFAULT NULL,
  `BusinessDescription` varchar(45) DEFAULT NULL,
  `EdeCode` varchar(15) DEFAULT NULL,
  `Code` varchar(15) DEFAULT NULL,
  `AddressLine1` varchar(50) DEFAULT NULL,
  `AddressLine2` varchar(50) DEFAULT NULL,
  `City` varchar(20) DEFAULT NULL,
  `State` varchar(45) DEFAULT NULL,
  `Pincode` int(11) DEFAULT NULL,
  `ContactPerson` varchar(50) DEFAULT NULL,
  `Landline` varchar(20) DEFAULT NULL,
  `Mobile` varchar(20) DEFAULT NULL,
  `Fax` int(11) DEFAULT NULL,
  `Email` varchar(15) DEFAULT NULL,
  `FlgHideOwner` tinyint(3) DEFAULT NULL,
  `FlgHideLicence` tinyint(3) DEFAULT NULL,
  `OwnerContactPerson` varchar(45) DEFAULT NULL,
  `OwnerLandline` varchar(15) DEFAULT NULL,
  `OwnerMobile` varchar(15) DEFAULT NULL,
  `OwnerFax` int(11) DEFAULT NULL,
  `OwnerEmail` varchar(20) DEFAULT NULL,
  `CreatedBy` double DEFAULT NULL,
  `CreateOn` datetime DEFAULT NULL,
  `ModifiedBy` double DEFAULT NULL,
  `ModifiedOn` datetime DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `business`
--

LOCK TABLES `business` WRITE;
/*!40000 ALTER TABLE `business` DISABLE KEYS */;
INSERT INTO `business` VALUES (100,'hs pharma','q','sw','deepika','ds','qdqd','dq',NULL,0,'d','09','999',9,'csdd',1,1,'f','56','6',6,'gfg',10,NULL,10,'2015-10-26 11:54:42');
/*!40000 ALTER TABLE `business` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `businesslicence`
--

DROP TABLE IF EXISTS `businesslicence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `businesslicence` (
  `ID` double NOT NULL AUTO_INCREMENT,
  `BusinessID` double DEFAULT NULL,
  `BLindex` double DEFAULT NULL,
  `licenceType` int(11) DEFAULT NULL,
  `LicenceName` varchar(45) DEFAULT NULL,
  `LicenceNumber` double NOT NULL,
  `LicenceStartDate` datetime NOT NULL,
  `LicenceEndDate` datetime NOT NULL,
  `flgActive` int(11) DEFAULT NULL,
  `CreatedBy` double DEFAULT NULL,
  `CreatedOn` datetime DEFAULT NULL,
  `ModifiedBy` double DEFAULT NULL,
  `ModifiedOn` datetime DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `businesslicence`
--

LOCK TABLES `businesslicence` WRITE;
/*!40000 ALTER TABLE `businesslicence` DISABLE KEYS */;
INSERT INTO `businesslicence` VALUES (1,100,2,1,'Drug-Regular',23,'2012-12-12 00:00:00','2014-12-12 00:00:00',1,NULL,NULL,10,'2015-09-25 19:49:45'),(2,100,NULL,3,'Drug - Regular',122,'2015-09-25 00:00:00','2015-09-26 00:00:00',NULL,10,'2015-09-24 11:50:09',10,'2015-09-24 11:53:22'),(3,100,NULL,3,'fds',22222,'2013-12-12 00:00:00','2022-03-02 00:00:00',NULL,10,'2015-09-25 22:50:12',10,'2015-09-25 22:52:27');
/*!40000 ALTER TABLE `businesslicence` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `businesslicencedetails`
--

DROP TABLE IF EXISTS `businesslicencedetails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `businesslicencedetails` (
  `licenceType` double NOT NULL,
  `Name` varchar(50) DEFAULT NULL,
  `category` varchar(50) DEFAULT NULL,
  `Description` varchar(100) DEFAULT NULL,
  `Remark` varchar(150) DEFAULT NULL,
  `flgActive` int(11) DEFAULT NULL,
  `CreatedBy` double DEFAULT NULL,
  `CreatedOn` datetime DEFAULT NULL,
  `ModifiedBy` double DEFAULT NULL,
  `ModifiedOn` datetime DEFAULT NULL,
  PRIMARY KEY (`licenceType`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `businesslicencedetails`
--

LOCK TABLES `businesslicencedetails` WRITE;
/*!40000 ALTER TABLE `businesslicencedetails` DISABLE KEYS */;
INSERT INTO `businesslicencedetails` VALUES (1,'FDS',NULL,NULL,NULL,1,NULL,NULL,NULL,NULL),(2,'Schedule X',NULL,NULL,NULL,1,NULL,NULL,NULL,NULL),(3,'Drug - Regular',NULL,NULL,NULL,1,NULL,NULL,NULL,NULL),(4,'VAN',NULL,NULL,NULL,1,NULL,NULL,NULL,NULL),(5,'TAN',NULL,NULL,NULL,1,NULL,NULL,NULL,NULL),(6,'show act',NULL,NULL,NULL,1,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `businesslicencedetails` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `city`
--

DROP TABLE IF EXISTS `city`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `city` (
  `id` int(11) NOT NULL,
  `Name` varchar(45) DEFAULT NULL,
  `State` double DEFAULT NULL,
  `flgActive` int(11) DEFAULT NULL,
  `CreatedBy` double DEFAULT NULL,
  `CreatedOn` datetime DEFAULT NULL,
  `ModifiedBy` double DEFAULT NULL,
  `ModifiedOn` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `city`
--

LOCK TABLES `city` WRITE;
/*!40000 ALTER TABLE `city` DISABLE KEYS */;
INSERT INTO `city` VALUES (10,'Nagpur',1,1,10,'2015-03-04 16:27:30',NULL,NULL),(20,'Pune',1,1,10,'2015-03-04 16:27:30',NULL,NULL);
/*!40000 ALTER TABLE `city` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `company`
--

DROP TABLE IF EXISTS `company`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `company` (
  `ID` double NOT NULL AUTO_INCREMENT,
  `Name` varchar(60) NOT NULL,
  `EdeCode` varchar(15) DEFAULT NULL,
  `Code` varchar(50) DEFAULT NULL,
  `Remarks` varchar(150) DEFAULT NULL,
  `AddrLine1` varchar(50) DEFAULT NULL,
  `AddrLine2` varchar(50) DEFAULT NULL,
  `City` int(11) DEFAULT NULL,
  `ContactPerson` varchar(50) DEFAULT NULL,
  `Phone` varchar(15) DEFAULT NULL,
  `Fax` int(50) DEFAULT NULL,
  `Email` varchar(45) DEFAULT NULL,
  `StockcMode` int(11) NOT NULL,
  `OrderLimit` double DEFAULT NULL,
  `PayTerms` int(11) DEFAULT NULL,
  `PayDays` int(11) DEFAULT NULL,
  `flgActive` int(11) DEFAULT NULL,
  `flgEmail` int(11) DEFAULT NULL,
  `CreatedBy` double DEFAULT NULL,
  `CreatedOn` datetime DEFAULT NULL,
  `ModifiedBy` double DEFAULT NULL,
  `ModifiedOn` datetime DEFAULT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `cid_UNIQUE` (`ID`),
  KEY `city_idx` (`City`)
) ENGINE=InnoDB AUTO_INCREMENT=3030 DEFAULT CHARSET=utf8 COMMENT='Company Master';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `company`
--

LOCK TABLES `company` WRITE;
/*!40000 ALTER TABLE `company` DISABLE KEYS */;
INSERT INTO `company` VALUES (1000,'Unichem Labs','ede1002','UNI','first company','address line 12','address line 2',10,'Ramesh Panchal','324.0',2343224,'23',1,500000,0,0,1,0,10,'2015-03-04 16:27:30',NULL,NULL),(2000,'Cipla',NULL,'CIP','REmark123','Add Line 1','Add line 2',10,'Suresh Wahi','434324234',234234324,'ciplapune@cipla.gmail.com',1,1000000,1,21,1,1,10,'2015-03-04 16:27:30',NULL,NULL),(3000,'test2','11111','SAN',NULL,'asdasdasd',NULL,10,'asdasdasdas','1234567890',111111,'asdas@jhasgdjasd',2,0,0,0,0,1,10,'2015-03-04 16:27:30',NULL,NULL),(3001,'aa','edeUpdate','code','dgfasdg','ghfahgf','fh',10,'gfgh','43453.0',54354,'gfgdg',1,1111,1,1,0,1,NULL,NULL,NULL,NULL),(3002,'aa','aa','aa','aa','aa','aa',10,'aa','11.0',11,'aa',1,11,1,11,0,0,NULL,NULL,NULL,NULL),(3003,'aa','ZZ','121','132123','Add1','Add3',10,'asdasd','1321231231',1231231231,'asdasdasd@gmail.com',0,12122,0,123,1,1,NULL,NULL,NULL,NULL),(3004,'xyz','123123','123123',NULL,'123123','123123',10,'sdaasdsa','1231231.0',123123,'123123123',0,1231,0,1231,0,1,NULL,NULL,NULL,NULL),(3005,'Purpleaid','PPP','CCC',NULL,NULL,NULL,10,NULL,'0.0',0,NULL,0,0,0,0,1,0,NULL,NULL,NULL,NULL),(3006,'rt',NULL,NULL,NULL,NULL,NULL,10,NULL,'0.0',0,NULL,1,0,1,0,1,0,NULL,NULL,NULL,NULL),(3007,'new com','123','123','aaaassddd',NULL,NULL,10,NULL,'0.0',0,NULL,0,0,0,0,1,0,NULL,NULL,NULL,NULL),(3008,'acltest','ghgf','fyj','fhgf','fhhgf','gfghf',8,'jgv','fgf',87,'hgc',0,6,0,8,1,1,NULL,NULL,NULL,NULL),(3009,'suprabha','s123','x','remark','dip@ggg.con','dip@ggg.con',1,'jg','757.0',21,'ggh',4,4,1,1,0,0,NULL,NULL,NULL,NULL),(3010,'test','11111','SAN',NULL,'asdasdasd',NULL,10,'asdasdasdas','1234567890',111111,'asdas@jhasgdjasd',2,0,0,0,0,1,NULL,NULL,NULL,NULL),(3011,'sssss','ssss','sss','sss',NULL,NULL,10,NULL,'0.0',0,NULL,1,0,1,0,1,0,NULL,NULL,NULL,NULL),(3012,'aaaaaaaaaaaaaa1234','aaaaaaaaaaaa','aaaaaaaaaa','aaaaaaaaaaaaaa','aaaaaaaaaaaaa','aaaaaaaaaaaaaaaa',10,'aaaaaaaaaaa','0.0',0,NULL,1,0,1,0,1,0,NULL,NULL,NULL,NULL),(3013,'zzzzzzzzz','zzzzzzzzzzzzz','zzzzzzzzzzzzzz','zzzzzzzzzz',NULL,NULL,10,NULL,'0.0',0,NULL,1,0,1,0,1,0,NULL,NULL,NULL,NULL),(3014,'Satyajit Company test','Satyajit EDEtes','123',NULL,NULL,NULL,10,NULL,'0.0',0,NULL,0,0,0,0,1,0,NULL,NULL,NULL,NULL),(3028,'test111111','test111111','12233','test111111',NULL,NULL,10,NULL,'0.0',0,NULL,0,0,0,0,1,0,NULL,NULL,NULL,NULL),(3029,'qwertyu','qwer','qwer',NULL,NULL,NULL,10,NULL,'0.0',0,NULL,0,0,0,0,1,0,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `company` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `companyclaim`
--

DROP TABLE IF EXISTS `companyclaim`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `companyclaim` (
  `ID` double NOT NULL AUTO_INCREMENT,
  `companyID` double DEFAULT NULL,
  `supplierID` double DEFAULT NULL,
  `Date` date DEFAULT NULL,
  `Type` int(11) DEFAULT NULL,
  `Status` int(11) DEFAULT NULL,
  `RateOfCalculation` int(11) DEFAULT NULL,
  `CalculateVAT` int(11) DEFAULT NULL,
  `Remark` varchar(65) DEFAULT NULL,
  `TotalItem` double DEFAULT NULL,
  `GrossTotal` decimal(10,2) DEFAULT NULL,
  `VAT` decimal(10,2) DEFAULT NULL,
  `NetAmount` decimal(10,2) DEFAULT NULL,
  `createdByID` double DEFAULT NULL,
  `CreatedBy` double DEFAULT NULL,
  `CreatedOn` datetime DEFAULT NULL,
  `ModifiedBy` double DEFAULT NULL,
  `ModifiedOn` datetime DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=latin1 COMMENT='																																																																																																																		';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `companyclaim`
--

LOCK TABLES `companyclaim` WRITE;
/*!40000 ALTER TABLE `companyclaim` DISABLE KEYS */;
INSERT INTO `companyclaim` VALUES (1,1000,1,'2015-07-02',1,1,1,1,'remark',2,12.00,12.00,234.00,1,1,NULL,10,'2015-07-28 16:52:45'),(2,0,0,NULL,0,1,0,0,NULL,0,NULL,NULL,NULL,NULL,10,'2015-07-28 12:55:19',NULL,NULL),(3,1000,12,'2015-08-20',2,1,1,1,NULL,1,2038.00,0.00,2038.00,NULL,10,'2015-07-28 14:31:25',10,'2015-08-20 13:04:10'),(4,1000,13,'2015-08-20',0,1,0,0,NULL,0,NULL,NULL,NULL,NULL,10,'2015-07-28 14:36:56',10,'2015-08-20 13:04:01'),(5,1000,12,'2015-08-13',0,1,0,2,NULL,1,0.00,0.00,0.00,NULL,10,'2015-07-28 14:40:11',10,'2015-08-20 13:03:54'),(6,1000,0,NULL,0,2,0,0,NULL,0,NULL,NULL,NULL,NULL,10,'2015-07-28 16:46:45',NULL,NULL),(7,1000,0,'2015-07-30',0,1,1,1,NULL,1,1223.32,33.00,1190.00,NULL,10,'2015-07-30 18:06:05',10,'2015-07-30 18:06:15'),(8,1000,0,'2015-07-30',0,1,1,1,NULL,6,1936.07,107.00,1829.00,NULL,10,'2015-07-30 18:58:01',10,'2015-07-30 18:58:10'),(9,1000,13,'2015-08-20',0,1,1,1,NULL,1,0.00,0.00,0.00,NULL,10,'2015-07-30 18:58:20',10,'2015-08-20 13:03:11'),(10,1000,1,'2015-08-23',1,1,1,1,NULL,2,1458.05,94.00,1364.00,NULL,10,'2015-07-30 19:45:07',10,'2015-08-03 15:45:17'),(11,1000,0,'2015-08-20',0,1,1,1,NULL,1,395.78,11.00,385.00,NULL,10,'2015-07-31 10:24:29',10,'2015-08-03 15:47:42'),(12,1000,0,'2015-07-01',0,1,1,1,NULL,1,13.36,0.00,13.00,NULL,10,'2015-07-31 10:26:45',10,'2015-08-03 15:45:35'),(13,1000,0,'2015-07-31',0,1,1,1,NULL,1,0.00,0.00,0.00,NULL,10,'2015-07-31 10:30:26',NULL,NULL),(14,1000,0,'2015-07-30',0,1,1,1,NULL,1,68.88,2.00,67.00,NULL,10,'2015-07-31 10:44:33',10,'2015-07-31 10:44:43'),(15,1000,1,'2015-08-20',3,1,1,1,'remark',1,91.49,2.00,89.00,NULL,10,'2015-08-03 15:42:22',10,'2015-08-03 15:42:35'),(16,1000,2,'2015-08-27',1,1,1,1,'remark',2,91.49,2.00,89.00,NULL,10,'2015-08-03 15:43:12',10,'2015-08-12 16:41:13'),(17,1000,2,'2015-08-19',1,1,1,2,NULL,1,174.00,0.00,174.00,NULL,10,'2015-08-03 15:46:39',NULL,NULL),(18,1000,13,'2015-08-27',1,1,1,1,NULL,1,1223.32,33.00,1190.00,NULL,10,'2015-08-03 15:47:04',10,'2015-08-03 15:47:24'),(19,2000,3,'2015-08-26',1,1,1,1,NULL,3,132.00,0.00,132.00,NULL,10,'2015-08-03 16:03:23',10,'2015-08-03 16:29:11'),(20,2000,3,'2015-08-07',3,1,1,1,'aass',1,9.00,0.00,9.00,NULL,10,'2015-08-07 10:38:45',NULL,NULL),(21,2000,3,'2015-08-08',0,1,1,1,NULL,3,121.00,0.00,121.00,NULL,10,'2015-08-07 11:12:08',NULL,NULL),(22,1000,2,'2015-08-12',3,1,2,1,'fsv',3,80.18,2.00,78.00,NULL,10,'2015-08-12 16:43:33',10,'2015-08-12 17:34:47'),(23,1000,2,'2015-08-19',1,1,1,1,'remark',1,11.31,0.00,11.00,NULL,10,'2015-08-12 16:52:41',NULL,NULL),(24,1000,2,'2015-08-05',3,1,1,1,'asd',1,0.00,0.00,0.00,NULL,10,'2015-08-12 17:33:35',NULL,NULL),(25,1000,2,'2015-08-27',0,1,1,1,NULL,2,91.49,2.00,89.00,NULL,10,'2015-08-12 17:46:56',10,'2015-08-12 17:47:47'),(26,1000,13,'2015-08-28',1,1,1,1,NULL,2,11.31,0.00,11.00,NULL,10,'2015-08-12 17:52:03',10,'2015-08-12 17:53:48'),(28,1000,13,'2015-08-26',0,1,1,1,NULL,2,91.49,2.00,89.00,NULL,10,'2015-08-12 18:12:52',10,'2015-08-12 18:13:38'),(29,2000,7,'2015-08-20',1,1,1,1,NULL,1,0.00,0.00,0.00,NULL,10,'2015-08-13 13:03:37',NULL,NULL),(30,2000,3,'2015-08-26',1,1,1,1,NULL,1,121.00,0.00,121.00,NULL,10,'2015-08-13 13:05:09',NULL,NULL),(31,2000,7,'2015-08-27',0,1,1,1,NULL,1,0.00,0.00,0.00,NULL,10,'2015-08-13 13:06:40',NULL,NULL),(32,2000,7,'2015-08-21',0,1,1,1,NULL,1,0.00,0.00,0.00,NULL,10,'2015-08-13 13:07:07',NULL,NULL),(33,2000,3,'2015-08-28',2,1,1,1,NULL,1,0.00,0.00,0.00,NULL,10,'2015-08-13 13:09:27',NULL,NULL),(34,2000,7,'2015-08-21',0,1,1,1,NULL,1,0.00,0.00,0.00,NULL,10,'2015-08-13 13:11:51',NULL,NULL),(35,3000,6,'2015-08-19',3,1,1,1,'',1,89.00,0.00,89.00,NULL,10,'2015-08-17 12:11:14',10,'2015-08-17 12:11:33'),(36,1000,2,'2015-08-19',2,1,2,2,'',15,1219.00,0.00,1219.00,NULL,10,'2015-08-17 12:36:16',NULL,NULL),(37,2000,7,'2015-08-27',3,1,1,1,'',15,18.00,0.00,18.00,NULL,10,'2015-08-20 12:55:47',NULL,NULL),(38,1000,2,'2015-08-28',3,2,1,1,'',1,67.00,0.00,67.00,NULL,10,'2015-08-20 13:06:22',10,'2015-09-15 17:09:23'),(39,1000,1,'2015-08-20',2,1,1,1,'',1,174.00,0.00,174.00,NULL,10,'2015-08-20 15:15:15',NULL,NULL),(42,1000,1,'2015-09-16',2,1,1,1,'',1,89.00,0.00,89.00,NULL,10,'2015-09-11 11:15:21',10,'2015-09-15 17:09:55'),(43,1000,2,'2015-09-10',4,2,1,1,'',2,89.00,0.00,89.00,NULL,10,'2015-09-15 17:52:11',10,'2015-09-15 18:01:38'),(44,1000,1,'2015-09-10',2,2,1,1,'',2,0.00,0.00,0.00,NULL,10,'2015-09-15 18:10:10',10,'2015-09-15 18:12:47'),(45,1000,2,'2015-09-15',5,1,1,1,'',2,0.00,0.00,0.00,NULL,10,'2015-09-15 18:16:19',10,'2015-09-15 18:16:39'),(46,1000,1,'2015-09-10',2,2,1,1,'',3,189.00,0.00,189.00,NULL,10,'2015-09-15 18:17:43',10,'2015-09-15 18:25:56'),(47,1000,2,'2015-09-17',2,1,1,1,'',2,178.00,0.00,178.00,NULL,10,'2015-09-15 18:28:45',10,'2015-09-15 18:30:11'),(48,1000,1,'2015-09-09',2,2,1,1,'',2,178.00,0.00,178.00,NULL,10,'2015-09-15 18:57:25',10,'2015-09-15 18:57:54');
/*!40000 ALTER TABLE `companyclaim` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `companycreditnote`
--

DROP TABLE IF EXISTS `companycreditnote`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `companycreditnote` (
  `ID` double NOT NULL,
  `CID` double DEFAULT NULL,
  `GRID` double DEFAULT NULL,
  `date` date DEFAULT NULL,
  `VAT` decimal(10,2) DEFAULT NULL,
  `value` decimal(10,2) DEFAULT NULL,
  `vatAmt` decimal(10,2) DEFAULT NULL,
  `Remak` varchar(65) DEFAULT NULL,
  `CreatedBy` double DEFAULT NULL,
  `CreatedOn` datetime DEFAULT NULL,
  `ModifiedBy` double DEFAULT NULL,
  `ModifiedOn` datetime DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `companycreditnote`
--

LOCK TABLES `companycreditnote` WRITE;
/*!40000 ALTER TABLE `companycreditnote` DISABLE KEYS */;
INSERT INTO `companycreditnote` VALUES (2,1000,NULL,'2015-05-11',15.00,45.00,543.00,'remark002',NULL,NULL,NULL,NULL),(3,1000,17,'2015-05-17',34.00,21.00,111.00,'remark003',NULL,NULL,NULL,NULL),(4,1000,15,'2015-05-11',15.00,45.00,543.00,'remark002',NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `companycreditnote` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `companydebitnote`
--

DROP TABLE IF EXISTS `companydebitnote`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `companydebitnote` (
  `ID` double NOT NULL,
  `CID` double DEFAULT NULL,
  `GRID` double DEFAULT NULL,
  `date` date DEFAULT NULL,
  `VAT` decimal(10,2) DEFAULT NULL,
  `value` decimal(10,2) DEFAULT NULL,
  `vatAmt` decimal(10,2) DEFAULT NULL,
  `Remak` varchar(65) DEFAULT NULL,
  `CreatedBy` double DEFAULT NULL,
  `CreatedOn` datetime DEFAULT NULL,
  `ModifiedBy` double DEFAULT NULL,
  `ModifiedOn` datetime DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `companydebitnote`
--

LOCK TABLES `companydebitnote` WRITE;
/*!40000 ALTER TABLE `companydebitnote` DISABLE KEYS */;
INSERT INTO `companydebitnote` VALUES (1,1000,NULL,'0205-09-11',23.00,33.00,450.00,'remak001',NULL,NULL,NULL,NULL),(2,1000,14,'0205-09-11',23.00,33.00,450.00,'remak001',NULL,NULL,NULL,NULL),(3,1000,17,'0205-09-11',23.00,33.00,450.00,'remak001',NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `companydebitnote` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `consumptiondetails`
--

DROP TABLE IF EXISTS `consumptiondetails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `consumptiondetails` (
  `ID` double NOT NULL,
  `SalesDate` date DEFAULT NULL,
  `SalesID` double DEFAULT NULL,
  `CNID` double DEFAULT NULL,
  `CNbeforeAmt` decimal(10,2) DEFAULT NULL,
  `CNafterAmt` decimal(10,2) DEFAULT NULL,
  `CNdate` date DEFAULT NULL,
  `DNbeforeAmt` decimal(10,2) DEFAULT NULL,
  `DNafterAmt` decimal(10,2) DEFAULT NULL,
  `DNdate` date DEFAULT NULL,
  `NoteType` int(11) DEFAULT NULL,
  `ConsumptionAmt` decimal(10,2) DEFAULT NULL,
  `userId` double DEFAULT NULL,
  `createdBy` int(11) DEFAULT NULL,
  `createdOn` datetime DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `consumptiondetails`
--

LOCK TABLES `consumptiondetails` WRITE;
/*!40000 ALTER TABLE `consumptiondetails` DISABLE KEYS */;
INSERT INTO `consumptiondetails` VALUES (1,'2015-10-12',1,18,4556.00,0.00,'2015-10-01',NULL,NULL,NULL,1,4556.00,10,10,'2015-10-12 22:56:35'),(2,'2015-10-10',3,3,500.00,0.00,'2015-10-01',NULL,NULL,NULL,1,500.00,10,10,'2015-10-12 22:56:35'),(3,'2015-09-21',2,15,1000.00,500.00,'2015-09-12',NULL,NULL,NULL,1,500.00,10,19,'2015-10-12 22:56:35'),(4,'2015-09-22',4,15,500.00,0.00,'2015-09-12',NULL,NULL,NULL,1,500.00,19,19,'2015-10-12 22:56:35'),(5,'2015-09-29',4,16,566.00,500.00,'2015-09-19',NULL,NULL,NULL,1,66.00,10,10,NULL),(6,'2015-10-01',1,16,500.00,0.00,'2015-09-19',NULL,NULL,NULL,1,500.00,10,10,NULL),(7,'2015-10-02',2,4,400.00,0.00,'2015-09-19',NULL,NULL,NULL,1,400.00,10,10,NULL),(8,'2015-10-03',3,37,1255.00,1000.00,'2015-09-23',NULL,NULL,NULL,1,255.00,10,10,NULL),(9,'2015-10-03',1,37,1000.00,0.00,'2015-09-23',NULL,NULL,NULL,1,1000.00,10,10,NULL),(10,'2015-10-03',2,38,67.00,0.00,'2015-09-26',NULL,NULL,NULL,1,67.00,10,10,NULL),(11,'2015-10-27',3,39,123.00,0.00,'2015-09-25',NULL,NULL,NULL,1,123.00,10,10,NULL),(12,'2015-10-28',1,41,700.00,500.00,'2015-09-23',NULL,NULL,NULL,1,200.00,10,10,NULL),(13,'2015-10-29',2,41,500.00,0.00,'2015-09-23',NULL,NULL,NULL,1,500.00,10,10,NULL),(14,'2015-10-29',1,2,493.00,400.00,'2015-09-23',NULL,NULL,NULL,NULL,93.00,10,10,NULL),(15,'2015-10-30',2,2,400.00,0.00,'2015-09-23',NULL,NULL,NULL,NULL,400.00,10,10,NULL);
/*!40000 ALTER TABLE `consumptiondetails` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contact`
--

DROP TABLE IF EXISTS `contact`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `contact` (
  `ID` double NOT NULL AUTO_INCREMENT,
  `organization` varchar(50) DEFAULT NULL,
  `myContactID` double DEFAULT NULL,
  `contactTypeID` double DEFAULT NULL,
  `deleted` int(11) DEFAULT NULL,
  `userName` varchar(45) DEFAULT NULL,
  `userPassward` varchar(45) DEFAULT NULL,
  `userLock` int(11) DEFAULT NULL,
  `NameTitle` int(11) DEFAULT NULL,
  `FirstName` varchar(45) DEFAULT NULL,
  `MiddleName` varchar(45) DEFAULT NULL,
  `LastName` varchar(45) DEFAULT NULL,
  `NickName` varchar(45) DEFAULT NULL,
  `JobTitle` varchar(45) DEFAULT NULL,
  `label` varchar(45) DEFAULT NULL,
  `HQ` varchar(45) DEFAULT NULL,
  `Area` double DEFAULT NULL,
  `Route` double DEFAULT NULL,
  `Notes` varchar(180) DEFAULT NULL,
  `flgActive` int(11) DEFAULT NULL,
  `flgSendGeetings` int(11) DEFAULT NULL,
  `flgNotification` int(11) DEFAULT NULL,
  `flgLock` int(11) DEFAULT NULL,
  `flgStaff` int(11) DEFAULT NULL,
  `CreatedBy` double DEFAULT NULL,
  `CreatedOn` datetime DEFAULT NULL,
  `ModifiedBy` double DEFAULT NULL,
  `ModifiedOn` datetime DEFAULT NULL,
  `facebookUrl` varchar(95) DEFAULT NULL,
  `twitterUrl` varchar(95) DEFAULT NULL,
  `linkedinUrl` varchar(95) DEFAULT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `ID_UNIQUE` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=69 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contact`
--

LOCK TABLES `contact` WRITE;
/*!40000 ALTER TABLE `contact` DISABLE KEYS */;
INSERT INTO `contact` VALUES (-1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'SYSTEM',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(1,NULL,10,1,0,'kira34','kiran123',0,0,'Kiran','Jayesh','Salvi','abc','xyz','label','Pune',1,1,'notes',1,1,0,0,1,NULL,NULL,10,'2015-07-27 11:21:51',NULL,NULL,NULL),(2,'0',10,4,1,'sagarP','sagar123',NULL,0,'sagar','jayesh','Pawar','asd','sdf','label1','Thane',2,3,'notes',1,1,0,0,1,NULL,NULL,10,'2015-06-30 17:15:36',NULL,NULL,NULL),(3,NULL,10,2,1,'dipaliV','dipali123',NULL,0,'Dipali',NULL,'Vidahate','deepa','www','label','Kalyan',3,2,'notes',1,1,0,0,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(4,'0',10,1,0,'nikitaP','nikita123',NULL,0,'Nikita','S','Pise','abc','xyz','label','Delhi',1,1,'notes',1,1,0,0,1,NULL,NULL,10,'2015-06-30 18:10:42',NULL,NULL,NULL),(5,'0',10,1,1,'a',NULL,NULL,0,'Kajal',NULL,'Pawar',NULL,NULL,NULL,NULL,0,0,NULL,0,0,0,0,1,NULL,NULL,10,'2015-06-30 16:56:46',NULL,NULL,NULL),(6,'0',10,1,1,'b',NULL,NULL,0,'Vijay',NULL,'idhate',NULL,NULL,NULL,NULL,0,0,NULL,0,0,0,0,1,NULL,NULL,10,'2015-06-30 17:18:38',NULL,NULL,NULL),(7,'0',NULL,1,0,'c',NULL,NULL,0,'Rajesh',NULL,'Mahale',NULL,NULL,NULL,NULL,0,0,NULL,0,0,0,0,1,NULL,NULL,10,'2015-06-30 16:22:22',NULL,NULL,NULL),(8,NULL,10,1,0,'d',NULL,NULL,0,'Ketan',NULL,'Sakpal',NULL,NULL,NULL,NULL,0,0,NULL,0,0,0,0,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(9,'0.0',10,2,0,'ameya','123',1,0,'ameya','Rajesh','Mahale','ameya','asd','mylabel','f',6,18,'sdfdsfsdf',0,1,1,0,1,NULL,NULL,10,'2015-07-02 15:57:32',NULL,NULL,NULL),(10,'sadasda',NULL,1,0,'asd','asd123',NULL,0,'Rajesh','asd','Mahale','asd','Owner',NULL,'asdasd',6,18,NULL,0,0,0,0,1,NULL,NULL,10,'2015-10-24 14:53:03','akrickwow',NULL,NULL),(11,'0',10,1,1,NULL,NULL,NULL,1,'Satyajit',NULL,'Torsdfs','sdfs','dfssdf','sdfdsdf','Pune',6,17,NULL,0,0,0,0,1,NULL,NULL,10,'2015-06-30 18:52:59',NULL,NULL,NULL),(12,NULL,0,1,1,NULL,NULL,NULL,2,'kajal',NULL,'Pise2','asd','asd','sxsd','xs',5,17,'sxdcsd',0,0,0,0,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(13,'0',NULL,13,1,NULL,NULL,NULL,2,'Nikita',NULL,'Pise',NULL,NULL,NULL,NULL,0,0,NULL,0,0,0,0,1,NULL,NULL,10,'2015-06-30 12:25:46',NULL,NULL,NULL),(14,NULL,10,1,1,NULL,NULL,NULL,0,'xyz',NULL,'xyz',NULL,NULL,NULL,NULL,0,0,NULL,0,0,0,0,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(15,'0',10,7,0,NULL,NULL,NULL,2,'Acro',NULL,'Cas','SAS',NULL,NULL,NULL,0,0,NULL,0,0,0,0,1,NULL,NULL,10,'2015-10-26 15:22:11',NULL,NULL,NULL),(16,NULL,10,2,1,NULL,NULL,NULL,0,'zzzz','zzzzz','zzzzzz','zzzzzzzz','zz','zzzzz',NULL,0,0,NULL,0,0,0,0,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(17,'0',10,8,1,NULL,NULL,NULL,0,'qqqqqq','qqqqqqqq','qqqqq','qqqqqqqq','qqqqqqqq','qqqqqqqq',NULL,0,0,NULL,0,0,0,0,1,NULL,NULL,10,'2015-06-30 16:42:53',NULL,NULL,NULL),(18,'0',10,6,1,NULL,NULL,NULL,0,'sssssss','sssssss','ssssssssss','ssssss','sssss',NULL,NULL,0,0,NULL,0,0,0,0,1,NULL,NULL,10,'2015-06-30 18:47:54',NULL,NULL,NULL),(19,'0.0',10,6,1,NULL,NULL,NULL,2,'aaaaaaaaa','aaaaaaa','aaaaaaa','aaaaaa','aaaaaa','aaa','da',34,18,'cdsf',0,0,0,0,1,NULL,NULL,10,'2015-07-02 15:55:09',NULL,NULL,NULL),(20,NULL,10,1,1,NULL,NULL,NULL,0,'xxxxxxxx','xxxxxxx','xxxx','xxxxxxxxx','xxxxxx','xxxxxxx',NULL,0,0,NULL,0,0,0,0,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(21,'0',NULL,3,1,NULL,NULL,NULL,2,'gf','fg','fg','gf','fg','g','fg',35,18,'ffvd',0,0,0,0,1,10,'2015-06-30 10:52:44',10,'2015-06-30 19:13:22',NULL,NULL,NULL),(22,'0.0',NULL,1,0,NULL,NULL,NULL,2,'neha','jayesh','salvi',NULL,'gggg',NULL,NULL,0,0,NULL,0,0,0,0,1,10,'2015-07-02 10:52:14',10,'2015-07-16 12:37:09',NULL,NULL,NULL),(23,'0.0',NULL,4,1,NULL,NULL,NULL,2,'dipika','d','Mhetre','deep','fff','sdsds',NULL,0,0,NULL,0,1,0,0,1,10,'2015-07-02 16:12:56',NULL,NULL,NULL,NULL,NULL),(24,NULL,NULL,NULL,NULL,'deee',NULL,0,NULL,'Swati',NULL,'Pawar',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(25,NULL,NULL,NULL,NULL,'deee1',NULL,1,NULL,'Jaya',NULL,'Joshi',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(26,'0.0',NULL,4,1,NULL,NULL,NULL,2,'dipika','d','Mhetre','deep','fff','sdsds',NULL,0,0,NULL,0,1,0,0,1,10,'2015-07-02 16:13:36',NULL,NULL,NULL,NULL,NULL),(27,'0.0',NULL,1,1,NULL,NULL,NULL,2,'ff','ff','ff',NULL,NULL,NULL,NULL,0,0,NULL,0,0,0,0,1,10,'2015-07-02 16:14:12',NULL,NULL,NULL,NULL,NULL),(28,'0.0',NULL,1,1,NULL,NULL,NULL,2,'ff','ff','ff',NULL,NULL,NULL,NULL,0,0,NULL,0,0,0,0,1,10,'2015-07-02 16:14:22',NULL,NULL,NULL,NULL,NULL),(29,'0.0',NULL,6,1,NULL,NULL,NULL,0,'k','k','k',NULL,NULL,NULL,NULL,0,0,NULL,0,0,0,0,1,10,'2015-07-02 16:15:19',10,'2015-07-02 16:16:01',NULL,NULL,NULL),(30,'0.0',NULL,1,1,NULL,NULL,NULL,0,'df','rre','ddf',NULL,NULL,NULL,NULL,0,0,NULL,0,0,0,0,1,10,'2015-07-02 16:16:36',NULL,NULL,NULL,NULL,NULL),(31,'0.0',NULL,1,1,NULL,NULL,NULL,0,'df','rre','ddf',NULL,NULL,NULL,NULL,0,0,NULL,0,0,0,0,1,10,'2015-07-02 16:16:39',NULL,NULL,NULL,NULL,NULL),(32,'0.0',NULL,1,1,NULL,NULL,NULL,0,'df','rre','ddf',NULL,NULL,NULL,NULL,0,0,NULL,0,0,0,0,1,10,'2015-07-02 16:16:44',NULL,NULL,NULL,NULL,NULL),(33,'0.0',NULL,7,1,NULL,NULL,NULL,1,'c','cx','cx',NULL,'xcz','z',NULL,33,0,NULL,0,0,0,0,1,10,'2015-07-02 16:17:35',10,'2015-07-02 16:18:26',NULL,NULL,NULL),(34,'0.0',NULL,1,1,NULL,NULL,1,1,'dd','sd','sd','ds','ds','ds',NULL,37,0,NULL,0,0,1,0,1,10,'2015-07-02 16:20:23',10,'2015-07-02 16:21:00',NULL,NULL,NULL),(35,'0.0',10,7,0,'asd','asd',1,1,'sdsdds','ew','fweds',NULL,NULL,NULL,NULL,0,0,NULL,0,0,0,0,1,10,'2015-07-02 16:22:50',10,'2015-07-02 16:25:22',NULL,NULL,NULL),(36,'0.0',NULL,5,1,NULL,NULL,NULL,1,'dsd','sdcd','sdsd','dsc','sd','sd',NULL,0,0,NULL,0,0,0,0,1,10,'2015-07-02 16:26:16',NULL,NULL,NULL,NULL,NULL),(37,'0.0',NULL,5,1,NULL,NULL,NULL,1,'dsd','sdcd','sdsd','dsc','sd','sd',NULL,0,0,NULL,0,0,0,0,1,10,'2015-07-02 16:26:28',NULL,NULL,NULL,NULL,NULL),(38,'0.0',NULL,5,1,NULL,NULL,NULL,0,'ddv','fr','ddv','rf','rfe','rf',NULL,0,0,NULL,0,0,0,0,1,10,'2015-07-02 16:27:43',10,'2015-07-02 16:28:32',NULL,NULL,NULL),(39,'0.0',NULL,5,1,NULL,NULL,NULL,0,'ddv','fr','ddv','rf','rfe','rf',NULL,0,0,NULL,0,0,0,0,1,10,'2015-07-02 16:27:46',NULL,NULL,NULL,NULL,NULL),(40,'0.0',NULL,5,1,NULL,NULL,NULL,0,'ddv','fr','ddv','rf','rfe','rf',NULL,0,0,NULL,0,0,0,0,1,10,'2015-07-02 16:28:01',NULL,NULL,NULL,NULL,NULL),(41,'0.0',NULL,5,1,NULL,NULL,NULL,0,'ff',NULL,'ff',NULL,NULL,NULL,NULL,0,0,NULL,0,0,0,0,1,10,'2015-07-02 16:29:16',NULL,NULL,NULL,NULL,NULL),(42,'0.0',NULL,5,1,NULL,NULL,NULL,0,'ff',NULL,'ff',NULL,NULL,NULL,NULL,0,0,NULL,0,0,0,0,1,10,'2015-07-02 16:29:18',NULL,NULL,NULL,NULL,NULL),(43,'0.0',10,25,1,NULL,NULL,NULL,2,'aqaq','aqaq','aqq','aa','sasasa',NULL,'bnb',33,19,'bnbnb',0,0,1,0,1,10,'2015-07-02 16:30:10',10,'2015-07-02 16:31:11',NULL,NULL,NULL),(44,'0.0',10,12,1,NULL,NULL,NULL,1,'yuga','de','ddcf','ff',NULL,NULL,NULL,0,0,NULL,0,0,0,0,1,10,'2015-07-02 16:32:27',10,'2015-07-02 16:33:13',NULL,NULL,NULL),(45,'0.0',NULL,1,1,NULL,NULL,NULL,0,'Kajal',NULL,'Pawar',NULL,NULL,NULL,NULL,0,0,NULL,0,0,0,0,1,10,'2015-07-02 16:43:26',NULL,NULL,NULL,NULL,NULL),(46,'0.0',46,1,0,'ee','c',0,0,'Kajal',NULL,'Pawar',NULL,NULL,NULL,NULL,0,0,NULL,0,0,0,0,1,10,'2015-07-02 16:43:35',10,'2015-10-24 14:16:01',NULL,NULL,NULL),(47,'0.0',NULL,2,0,NULL,NULL,NULL,2,'kavita','j','karpe',NULL,NULL,NULL,NULL,0,0,NULL,0,0,0,0,1,10,'2015-07-02 16:44:44',10,'2015-07-02 16:46:56',NULL,NULL,NULL),(48,'0.0',NULL,10,1,NULL,NULL,NULL,2,'lll',NULL,'llll',NULL,NULL,NULL,NULL,0,0,NULL,0,0,0,0,1,10,'2015-07-02 17:08:45',NULL,NULL,NULL,NULL,NULL),(49,'asd',NULL,10,0,NULL,NULL,NULL,2,'Nikita','Suryakant','Pise',NULL,'asd','asd','1',5,1,'asda',0,0,0,0,NULL,10,'2015-07-28 15:24:16',NULL,NULL,NULL,NULL,NULL),(50,NULL,NULL,12,0,NULL,NULL,NULL,2,'Dipali',NULL,'Vidhate',NULL,NULL,NULL,NULL,0,0,NULL,0,0,0,0,NULL,10,'2015-07-28 16:02:14',NULL,NULL,NULL,NULL,NULL),(51,NULL,NULL,1,0,NULL,NULL,NULL,2,'aaa',NULL,'aaa',NULL,NULL,NULL,NULL,0,0,NULL,0,0,0,0,NULL,10,'2015-07-28 16:02:37',NULL,NULL,NULL,NULL,NULL),(52,'a',NULL,12,0,NULL,NULL,NULL,2,'aaa',NULL,'aaa',NULL,'a',NULL,'a',39,17,NULL,0,0,0,0,NULL,10,'2015-07-28 16:03:00',NULL,NULL,NULL,NULL,NULL),(53,NULL,NULL,10,1,NULL,NULL,NULL,1,'a','a','a',NULL,NULL,NULL,NULL,0,0,NULL,0,0,0,0,NULL,10,'2015-07-28 16:03:37',NULL,NULL,NULL,NULL,NULL),(55,NULL,NULL,1,0,NULL,NULL,NULL,0,'fffffff','fffffff','fffffff','fffffff',NULL,NULL,NULL,0,0,NULL,0,0,0,0,NULL,10,'2015-10-23 17:51:27',10,'2015-10-23 17:52:29',NULL,NULL,NULL),(56,NULL,NULL,2,0,'qwee','qwe123',0,1,'addafqqqqqq','fdf','zCZV',NULL,NULL,NULL,'sdfsd',33,20,'sdvfz',0,0,0,0,NULL,10,'2015-10-23 17:52:55',10,'2015-10-24 16:46:54','asd',NULL,'asd123'),(57,NULL,NULL,1,0,NULL,NULL,NULL,1,'Lata','D','Mangeshkar','LL',NULL,NULL,NULL,0,0,NULL,0,0,0,0,NULL,10,'2015-10-23 17:59:50',10,'2015-10-26 15:31:51','akrickwow',NULL,NULL),(58,NULL,NULL,1,0,NULL,NULL,NULL,2,'gggggg','ggggg','gggggggg','ggggggg',NULL,NULL,NULL,0,0,NULL,0,0,0,0,NULL,10,'2015-10-23 18:03:10',NULL,NULL,NULL,NULL,NULL),(59,NULL,NULL,1,0,NULL,NULL,NULL,1,'ooooooooo','oooooooo','ooooooooo','oooooooo',NULL,NULL,'Karve Putala',5,1,NULL,0,0,0,0,NULL,10,'2015-10-23 18:07:10',NULL,NULL,NULL,NULL,NULL),(60,'bb',NULL,1,0,NULL,NULL,NULL,0,'bbbbbbbbbbb','bbbbbbbbb','bbbbbbbbb','bbbbbbb','bbbbbb',NULL,NULL,0,0,NULL,0,0,0,0,NULL,10,'2015-10-23 18:14:31',NULL,NULL,NULL,NULL,NULL),(61,NULL,NULL,1,0,'p','p123',1,1,'pppppppp','ppppppppppp','ppppppppp','pppppp',NULL,NULL,'Pune',5,1,'Note',0,0,0,0,NULL,10,'2015-10-23 18:19:07',NULL,NULL,NULL,NULL,NULL),(62,NULL,NULL,1,0,NULL,NULL,NULL,0,'mmm',NULL,'mm',NULL,NULL,NULL,NULL,0,0,NULL,0,0,0,0,NULL,10,'2015-10-23 18:32:25',NULL,NULL,NULL,NULL,NULL),(63,NULL,NULL,1,0,'aaaa','123',0,1,'wdasda','sad','asdas',NULL,NULL,NULL,NULL,0,0,NULL,0,0,0,0,NULL,10,'2015-10-24 11:36:35',NULL,NULL,NULL,NULL,NULL),(64,NULL,NULL,1,0,'1','1',0,1,'qqqqqq',NULL,'qqqqqqqqqq',NULL,NULL,NULL,NULL,0,0,NULL,0,0,0,0,NULL,10,'2015-10-24 11:40:30',NULL,NULL,NULL,NULL,NULL),(65,NULL,NULL,1,0,'2','2',0,1,'afdf',NULL,'das',NULL,NULL,NULL,NULL,0,0,NULL,0,0,0,0,NULL,10,'2015-10-24 11:42:25',NULL,NULL,NULL,NULL,NULL),(66,NULL,NULL,1,0,'a','a',0,1,'uuuuuuu',NULL,'qqqqqqqqq',NULL,NULL,NULL,NULL,0,0,NULL,0,0,0,0,NULL,10,'2015-10-24 11:46:49',NULL,NULL,NULL,NULL,NULL),(67,NULL,NULL,1,0,'a','a',0,2,'aaaa',NULL,'aaaa',NULL,NULL,NULL,NULL,0,0,NULL,0,0,0,0,NULL,10,'2015-10-24 11:49:05',NULL,NULL,NULL,NULL,NULL),(68,NULL,NULL,1,0,'a','a',0,1,'aa',NULL,'aa',NULL,NULL,NULL,NULL,0,0,NULL,0,0,0,0,NULL,10,'2015-10-24 11:50:24',NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `contact` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contactdetails`
--

DROP TABLE IF EXISTS `contactdetails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `contactdetails` (
  `ID` double NOT NULL AUTO_INCREMENT,
  `CNID` double DEFAULT NULL,
  `EDID` double DEFAULT NULL,
  `otherID` double DEFAULT NULL,
  `deleted` int(11) DEFAULT NULL,
  `detail1` varchar(65) DEFAULT NULL,
  `detail2` varchar(65) DEFAULT NULL,
  `detail3` varchar(65) DEFAULT NULL,
  `detail4` varchar(65) DEFAULT NULL,
  `detail5` varchar(65) DEFAULT NULL,
  `detail6` varchar(65) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=194 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contactdetails`
--

LOCK TABLES `contactdetails` WRITE;
/*!40000 ALTER TABLE `contactdetails` DISABLE KEYS */;
INSERT INTO `contactdetails` VALUES (1,1,5,1,1,'assss',NULL,NULL,NULL,NULL,NULL),(2,1,19,NULL,0,'9898777777',NULL,NULL,NULL,NULL,NULL),(3,1,20,NULL,0,'09/09/2019',NULL,NULL,NULL,NULL,NULL),(4,3,14,NULL,1,NULL,'address1',NULL,NULL,NULL,NULL),(5,NULL,NULL,NULL,0,NULL,NULL,NULL,NULL,NULL,NULL),(7,9,19,NULL,1,'2355',NULL,NULL,NULL,NULL,NULL),(9,9,19,NULL,1,'98989899',NULL,NULL,NULL,NULL,NULL),(10,9,0,NULL,1,'abc@gmail.com',NULL,NULL,NULL,NULL,NULL),(11,9,0,NULL,1,'office@gmail.com',NULL,NULL,NULL,NULL,NULL),(12,9,0,NULL,1,'related name1',NULL,NULL,NULL,NULL,NULL),(21,9,17,NULL,1,'11111111',NULL,NULL,NULL,NULL,NULL),(26,1,5,0,1,'assss',NULL,NULL,NULL,NULL,NULL),(27,1,5,0,1,'assss',NULL,NULL,NULL,NULL,NULL),(28,9,18,NULL,1,'6666666',NULL,NULL,NULL,NULL,NULL),(29,9,17,NULL,1,'787878',NULL,NULL,NULL,NULL,NULL),(30,9,17,NULL,1,'787878',NULL,NULL,NULL,NULL,NULL),(32,9,18,NULL,0,'3333333',NULL,NULL,NULL,NULL,NULL),(34,9,23,NULL,0,'abc@gmail.com',NULL,NULL,NULL,NULL,NULL),(35,1,39,NULL,0,'kjhhgjg.com',NULL,NULL,NULL,NULL,NULL),(36,9,39,NULL,1,'toms.com',NULL,NULL,NULL,NULL,NULL),(37,9,38,NULL,1,'AK',NULL,NULL,NULL,NULL,NULL),(38,9,20,NULL,1,'',NULL,NULL,NULL,NULL,NULL),(39,9,26,NULL,0,'Purple',NULL,NULL,NULL,NULL,NULL),(40,9,20,NULL,1,'12/12/2013',NULL,NULL,NULL,NULL,NULL),(41,9,20,NULL,1,'12/12/2013',NULL,NULL,NULL,NULL,NULL),(42,9,21,NULL,1,'12/12/2013',NULL,NULL,NULL,NULL,NULL),(43,9,20,NULL,0,'11/11/2011',NULL,NULL,NULL,NULL,NULL),(44,9,39,NULL,0,'puple.com',NULL,NULL,NULL,NULL,NULL),(45,9,0,NULL,0,'asda','asdas','dasdasd','INDIA','asdas','asdasd'),(46,9,0,NULL,0,'asda','sdas','dasdas','INDIA','asdasd','dasdasd'),(47,9,0,NULL,0,'asd','asd','asd','INDIA','123123','asd'),(48,9,14,NULL,0,'add1','add2','pune','INDIA','44545','maha'),(49,12,43,2,0,'Uni - Global',NULL,NULL,NULL,NULL,NULL),(50,12,44,1,0,'Diabetics',NULL,NULL,NULL,NULL,NULL),(51,12,43,2,0,'Uni - Global',NULL,NULL,NULL,NULL,NULL),(52,12,42,1000,0,'Unichem Labs',NULL,NULL,NULL,NULL,NULL),(65,19,14,NULL,0,'as','as','as','INDIA','sa','sa'),(66,19,17,NULL,0,'3242',NULL,NULL,NULL,NULL,NULL),(67,19,23,NULL,0,'dcf',NULL,NULL,NULL,NULL,NULL),(68,19,39,NULL,0,'sdfc',NULL,NULL,NULL,NULL,NULL),(69,19,1,6,0,NULL,NULL,NULL,NULL,NULL,NULL),(70,19,42,1000,0,'Unichem Labs',NULL,NULL,NULL,NULL,NULL),(71,21,42,71,0,'Unichem Labs',NULL,NULL,NULL,NULL,NULL),(72,21,1,4,0,NULL,NULL,NULL,NULL,NULL,NULL),(73,21,3,21,0,NULL,NULL,NULL,NULL,NULL,NULL),(74,21,2,3,1,NULL,NULL,NULL,NULL,NULL,NULL),(84,17,1,1,0,NULL,NULL,NULL,NULL,NULL,NULL),(85,21,2,3,1,NULL,NULL,NULL,NULL,NULL,NULL),(86,21,2,3,1,NULL,NULL,NULL,NULL,NULL,NULL),(87,21,2,3,1,NULL,NULL,NULL,NULL,NULL,NULL),(88,17,1,4,0,NULL,NULL,NULL,NULL,NULL,NULL),(95,6,1,1,1,NULL,NULL,NULL,NULL,NULL,NULL),(96,6,1,1,1,NULL,NULL,NULL,NULL,NULL,NULL),(97,6,1,4,1,NULL,NULL,NULL,NULL,NULL,NULL),(98,6,1,6,1,NULL,NULL,NULL,NULL,NULL,NULL),(99,6,1,1,1,NULL,NULL,NULL,NULL,NULL,NULL),(100,6,1,1,1,NULL,NULL,NULL,NULL,NULL,NULL),(101,6,1,6,1,NULL,NULL,NULL,NULL,NULL,NULL),(102,6,1,5,1,NULL,NULL,NULL,NULL,NULL,NULL),(103,6,1,1,1,NULL,NULL,NULL,NULL,NULL,NULL),(104,6,1,1,1,NULL,NULL,NULL,NULL,NULL,NULL),(105,6,1,4,1,NULL,NULL,NULL,NULL,NULL,NULL),(106,6,2,3,1,NULL,NULL,NULL,NULL,NULL,NULL),(107,9,1,1,0,NULL,NULL,NULL,NULL,NULL,NULL),(108,9,1,4,0,NULL,NULL,NULL,NULL,NULL,NULL),(109,9,3,21,0,NULL,NULL,NULL,NULL,NULL,NULL),(110,9,43,2,0,'Uni - Global',NULL,NULL,NULL,NULL,NULL),(111,23,14,NULL,0,'aaa','aaa','aaa','INDIA',NULL,NULL),(112,23,17,NULL,0,'111111111111111ddddddddd',NULL,NULL,NULL,NULL,NULL),(113,23,23,NULL,0,'@vb',NULL,NULL,NULL,NULL,NULL),(114,23,39,NULL,0,'aaa.cfg',NULL,NULL,NULL,NULL,NULL),(115,23,3,21,0,NULL,NULL,NULL,NULL,NULL,NULL),(116,23,13,13,0,NULL,NULL,NULL,NULL,NULL,NULL),(117,23,20,NULL,0,'12/2/1990',NULL,NULL,NULL,NULL,NULL),(118,23,42,2000,0,'Cipla',NULL,NULL,NULL,NULL,NULL),(119,26,14,NULL,0,'aaa','aaa','aaa','INDIA',NULL,NULL),(120,26,17,NULL,0,'111111111111111ddddddddd',NULL,NULL,NULL,NULL,NULL),(121,26,23,NULL,0,'@vb',NULL,NULL,NULL,NULL,NULL),(122,26,39,NULL,0,'aaa.cfg',NULL,NULL,NULL,NULL,NULL),(123,26,3,21,0,NULL,NULL,NULL,NULL,NULL,NULL),(124,26,13,13,0,NULL,NULL,NULL,NULL,NULL,NULL),(125,26,20,NULL,0,'12/2/1990',NULL,NULL,NULL,NULL,NULL),(126,26,42,2000,0,'Cipla',NULL,NULL,NULL,NULL,NULL),(127,28,14,NULL,0,'a','a','a','INDIA','a','a'),(128,29,14,NULL,0,'df','df','d','INDIA','d','d'),(129,29,14,NULL,0,'df','df','d','INDIA','d','d'),(130,30,14,NULL,0,'r','er','re','INDIA','er','er'),(131,31,14,NULL,0,'r','er','re','INDIA','er','er'),(132,32,14,NULL,0,'r','er','re','INDIA','er','er'),(133,33,14,NULL,0,'zx','xzcx','czx','INDIA','xz','xz'),(134,33,23,NULL,0,'dddd',NULL,NULL,NULL,NULL,NULL),(135,33,23,NULL,0,'dddd',NULL,NULL,NULL,NULL,NULL),(136,34,14,NULL,0,'sdsd','g','g','INDIA','g','g'),(137,34,0,NULL,0,'rere@.',NULL,NULL,NULL,NULL,NULL),(138,34,14,NULL,0,'sdsd','g','g','INDIA','g','g'),(139,34,0,NULL,0,'rere@.',NULL,NULL,NULL,NULL,NULL),(140,34,14,NULL,0,'sdsd','g','g','INDIA','g','g'),(141,34,0,NULL,0,'rere@.',NULL,NULL,NULL,NULL,NULL),(142,34,14,NULL,0,'sdsd','g','g','INDIA','g','g'),(143,34,0,NULL,0,'rere@.',NULL,NULL,NULL,NULL,NULL),(144,35,14,NULL,0,'zx',NULL,'z','INDIA',NULL,NULL),(145,35,14,NULL,0,'zx',NULL,'z','INDIA',NULL,NULL),(146,35,23,NULL,0,'cddf',NULL,NULL,NULL,NULL,NULL),(147,35,23,NULL,0,'cddf',NULL,NULL,NULL,NULL,NULL),(148,36,1,32,0,NULL,NULL,NULL,NULL,NULL,NULL),(149,37,1,32,0,NULL,NULL,NULL,NULL,NULL,NULL),(150,37,8,17,0,NULL,NULL,NULL,NULL,NULL,NULL),(151,38,14,NULL,0,'3r','er','er','INDIA','e','e'),(152,38,5,36,0,NULL,NULL,NULL,NULL,NULL,NULL),(153,39,14,NULL,0,'3r','er','er','INDIA','e','e'),(154,39,5,36,0,NULL,NULL,NULL,NULL,NULL,NULL),(155,40,15,NULL,0,'3r','er','er','INDIA','e','e'),(156,40,5,36,0,NULL,NULL,NULL,NULL,NULL,NULL),(157,38,14,NULL,0,'fd',NULL,NULL,'INDIA',NULL,NULL),(158,38,14,NULL,0,'fd',NULL,NULL,'INDIA',NULL,NULL),(159,38,14,NULL,0,'fd',NULL,NULL,'INDIA',NULL,NULL),(160,43,0,NULL,0,'vhv',NULL,NULL,NULL,NULL,NULL),(161,43,0,NULL,0,'vhv',NULL,NULL,NULL,NULL,NULL),(162,44,7,15,0,NULL,NULL,NULL,NULL,NULL,NULL),(163,47,0,NULL,0,'asddf',NULL,NULL,NULL,NULL,NULL),(164,47,0,NULL,0,'asddf',NULL,NULL,NULL,NULL,NULL),(165,15,1,46,0,NULL,NULL,NULL,NULL,NULL,NULL),(166,22,21,NULL,0,'31/12/2015',NULL,NULL,NULL,NULL,NULL),(167,49,17,NULL,0,'9898989899',NULL,NULL,NULL,NULL,NULL),(168,49,40,NULL,0,'asd.com',NULL,NULL,NULL,NULL,NULL),(169,50,18,NULL,0,'9898989898',NULL,NULL,NULL,NULL,NULL),(170,50,40,NULL,0,'asd.in',NULL,NULL,NULL,NULL,NULL),(171,15,44,1,0,'ExtDiv',NULL,NULL,NULL,NULL,NULL),(172,55,23,NULL,0,'annn@gmail.com',NULL,NULL,NULL,NULL,NULL),(173,55,1,51,0,NULL,NULL,NULL,NULL,NULL,NULL),(174,55,21,NULL,0,'1/09/2012',NULL,NULL,NULL,NULL,NULL),(175,55,113,3005,0,'Purpleaid',NULL,NULL,NULL,NULL,NULL),(176,56,1,46,0,NULL,NULL,NULL,NULL,NULL,NULL),(177,56,15,NULL,0,'aa','aa','aa','INDIA','1111','aa'),(178,56,23,NULL,0,'aaa@fdsfs.com',NULL,NULL,NULL,NULL,NULL),(179,56,39,NULL,0,'sad.in',NULL,NULL,NULL,NULL,NULL),(180,56,1,46,0,NULL,NULL,NULL,NULL,NULL,NULL),(181,56,20,NULL,0,'1/09/1990',NULL,NULL,NULL,NULL,NULL),(182,56,44,12,0,'PurpDIv',NULL,NULL,NULL,NULL,NULL),(183,57,23,NULL,0,'saasda@jasgdjha.ashb',NULL,NULL,NULL,NULL,NULL),(184,57,24,NULL,0,'ak@gajshbd.com',NULL,NULL,NULL,NULL,NULL),(185,57,113,3005,0,'Purpleaid',NULL,NULL,NULL,NULL,NULL),(186,61,15,NULL,0,'eee','ee','ee','INDIA','1231','eee'),(187,61,17,NULL,0,'1234567890',NULL,NULL,NULL,NULL,NULL),(188,61,23,NULL,0,'asda@asjdas.com',NULL,NULL,NULL,NULL,NULL),(189,61,39,NULL,0,'asd.wasdas.casd',NULL,NULL,NULL,NULL,NULL),(190,61,1,22,0,NULL,NULL,NULL,NULL,NULL,NULL),(191,61,21,NULL,0,'1/03/1989',NULL,NULL,NULL,NULL,NULL),(192,61,113,1000,0,'Unichem Labs',NULL,NULL,NULL,NULL,NULL),(193,56,17,NULL,0,'9090909090',NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `contactdetails` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contacttyperolemap`
--

DROP TABLE IF EXISTS `contacttyperolemap`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `contacttyperolemap` (
  `ID` double NOT NULL AUTO_INCREMENT,
  `ContactTypeID` double DEFAULT NULL,
  `RoleID` double DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=252 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contacttyperolemap`
--

LOCK TABLES `contacttyperolemap` WRITE;
/*!40000 ALTER TABLE `contacttyperolemap` DISABLE KEYS */;
INSERT INTO `contacttyperolemap` VALUES (2,1,1),(4,2,1),(5,2,4),(7,4,1),(8,4,3),(9,40,4),(10,45,1),(239,108,3),(240,108,1),(241,2,3),(245,110,3),(248,111,5),(249,3,1),(250,111,1),(251,109,1);
/*!40000 ALTER TABLE `contacttyperolemap` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `content`
--

DROP TABLE IF EXISTS `content`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `content` (
  `ID` double NOT NULL AUTO_INCREMENT,
  `Name` varchar(45) DEFAULT NULL,
  `Description` varchar(100) DEFAULT NULL,
  `DPCOliquidRate` double DEFAULT NULL,
  `DPCOliquidUnit` double DEFAULT NULL,
  `DPCOtabletRate` double DEFAULT NULL,
  `DPCOtabletUnit` double DEFAULT NULL,
  `DPCOinjectionRate` double DEFAULT NULL,
  `DPCOinjectionUnit` double DEFAULT NULL,
  `ctID` double DEFAULT NULL,
  `flgActive` bit(1) DEFAULT b'0',
  `CreatedBy` double DEFAULT NULL,
  `CreatedOn` datetime DEFAULT NULL,
  `ModifiedBy` double DEFAULT NULL,
  `ModifiedOn` datetime DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `content`
--

LOCK TABLES `content` WRITE;
/*!40000 ALTER TABLE `content` DISABLE KEYS */;
INSERT INTO `content` VALUES (1,'Paracetamol','para_description',5,10,6,20,4,10,1,'',10,'2015-03-04 16:27:30',NULL,NULL),(2,'Ibrufen','Ibrufen_description',4,10,4,20,5,20,NULL,'',10,'2015-03-04 16:27:30',NULL,NULL),(3,'Caffine','Caffin_decsription',5,20,4,10,5,10,NULL,'',10,'2015-03-04 16:27:30',NULL,NULL),(4,'a','a',12,22,11,11,22,11,NULL,'',10,NULL,NULL,NULL),(5,'gg','gg',1,1,1,1,0,0,NULL,'\0',NULL,NULL,NULL,NULL),(6,'hghgh','ghh',20,20,22,2,20,20,NULL,'\0',NULL,NULL,NULL,NULL),(7,'yy','yyy',0,0,0,0,0,0,NULL,'\0',NULL,NULL,NULL,NULL),(8,'test','test',12,12,12,12,12,12,NULL,'\0',NULL,NULL,NULL,NULL),(9,'ss','ss',1,1,1,1,1,1,NULL,'',NULL,NULL,NULL,NULL),(10,'2','24',0,0,0,0,0,0,NULL,'',NULL,NULL,NULL,NULL),(13,'as','as',0,0,0,0,0,0,NULL,'',NULL,NULL,NULL,NULL),(14,'as','as',0,0,0,0,0,0,NULL,'',NULL,NULL,NULL,NULL),(15,'as','as',0,0,0,0,0,0,NULL,'',NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `content` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contenttype`
--

DROP TABLE IF EXISTS `contenttype`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `contenttype` (
  `ID` double NOT NULL AUTO_INCREMENT,
  `contentID` double DEFAULT NULL,
  `contentTypeID` double DEFAULT NULL,
  `contentFlag` int(11) DEFAULT NULL,
  `CreatedBy` double DEFAULT NULL,
  `CreatedOn` datetime DEFAULT NULL,
  `ModifiedBy` double DEFAULT NULL,
  `ModifiedOn` datetime DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contenttype`
--

LOCK TABLES `contenttype` WRITE;
/*!40000 ALTER TABLE `contenttype` DISABLE KEYS */;
INSERT INTO `contenttype` VALUES (29,15,1,NULL,NULL,NULL,NULL,NULL),(30,15,2,NULL,NULL,NULL,NULL,NULL),(31,1,2,NULL,NULL,NULL,NULL,NULL),(32,1,3,NULL,NULL,NULL,NULL,NULL),(33,2,3,NULL,NULL,NULL,NULL,NULL),(34,2,4,NULL,NULL,NULL,NULL,NULL),(35,3,1,NULL,NULL,NULL,NULL,NULL),(36,3,2,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `contenttype` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contenttypemaster`
--

DROP TABLE IF EXISTS `contenttypemaster`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `contenttypemaster` (
  `ID` double NOT NULL AUTO_INCREMENT,
  `Type` varchar(50) DEFAULT NULL,
  `Description` varchar(60) DEFAULT NULL,
  `flgActive` int(11) DEFAULT NULL,
  `CreatedBy` double DEFAULT NULL,
  `CreatedOn` datetime DEFAULT NULL,
  `ModifiedBy` double DEFAULT NULL,
  `ModifiedOn` datetime DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contenttypemaster`
--

LOCK TABLES `contenttypemaster` WRITE;
/*!40000 ALTER TABLE `contenttypemaster` DISABLE KEYS */;
INSERT INTO `contenttypemaster` VALUES (1,'H1','H1',1,NULL,NULL,NULL,NULL),(2,'DPCO','DPCO',1,NULL,NULL,NULL,NULL),(3,'Narcotics','Narcotics',1,NULL,NULL,NULL,NULL),(4,'NS','NS',1,NULL,NULL,NULL,NULL),(5,'S','S',1,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `contenttypemaster` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `creditnote`
--

DROP TABLE IF EXISTS `creditnote`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `creditnote` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Type` varchar(45) DEFAULT NULL,
  `TypeDescription` varchar(45) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `custID` int(11) DEFAULT NULL,
  `status` varchar(95) DEFAULT NULL,
  `statusDecription` varchar(45) DEFAULT NULL,
  `remark` varchar(95) DEFAULT NULL,
  `lockUser` int(11) DEFAULT NULL,
  `lockDate` datetime DEFAULT NULL,
  `flgLock` tinyint(11) DEFAULT NULL,
  `ledgerUser` int(11) DEFAULT NULL,
  `ledgerDate` datetime DEFAULT NULL,
  `flgLedgerLock` tinyint(11) DEFAULT NULL,
  `voidReason` varchar(65) DEFAULT NULL,
  `voidBy` int(11) DEFAULT NULL,
  `flgVoid` tinyint(11) DEFAULT NULL,
  `Amount` decimal(10,2) DEFAULT NULL,
  `Reason` varchar(95) DEFAULT NULL,
  `ReasonOther` varchar(95) DEFAULT NULL,
  `ApprovedBy` int(11) DEFAULT NULL,
  `ApprovedOn` datetime DEFAULT NULL,
  `flgApproved` tinyint(4) DEFAULT NULL,
  `CreatedBy` double DEFAULT NULL,
  `CreatedOn` datetime DEFAULT NULL,
  `ModifiedBy` double DEFAULT NULL,
  `ModifiedOn` datetime DEFAULT NULL,
  `flgVerified` tinyint(4) DEFAULT NULL,
  `verifiedBy` int(11) DEFAULT NULL,
  `verifiedOn` datetime DEFAULT NULL,
  `creditNoteProductTotalAmount` decimal(10,2) DEFAULT NULL,
  `creditNoteProductTotalVATAmount` decimal(10,2) DEFAULT NULL,
  `voidOn` datetime DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `creditnote`
--

LOCK TABLES `creditnote` WRITE;
/*!40000 ALTER TABLE `creditnote` DISABLE KEYS */;
INSERT INTO `creditnote` VALUES (1,'1','Goods Return','2015-09-18',1000,'1','Available','remark',NULL,NULL,0,NULL,NULL,0,NULL,NULL,0,2897.00,'1',NULL,4,'2015-09-23 00:00:00',NULL,1,'2015-10-12 18:47:51',10,'2015-10-19 14:55:51',0,NULL,NULL,2852.00,45.00,NULL),(2,'1','Goods Return','2015-09-23',1002,'1','Available','remark',NULL,NULL,0,NULL,NULL,0,'reason2',NULL,0,493.00,'1',NULL,5,'2015-09-23 00:00:00',NULL,1,'2015-10-12 18:47:51',10,'2015-10-17 18:14:08',0,NULL,NULL,493.00,0.00,NULL),(3,'2','Direct','2015-09-23',1000,'1','Available','remark',10,'2015-10-30 11:31:21',0,10,'2015-09-23 00:00:00',0,'reason3',10,1,500.00,'1','',6,'2015-09-23 00:00:00',NULL,2,'2015-10-12 18:47:51',10,'2015-10-30 11:31:21',NULL,NULL,NULL,NULL,NULL,NULL),(4,'2','Direct','2015-09-23',1002,'1','Available','remark',10,'2015-10-30 16:50:36',0,10,'2015-09-23 00:00:00',0,'reason4',10,0,400.00,'1','',7,'2015-09-23 00:00:00',NULL,10,'2015-10-30 16:50:36',10,'2015-10-30 15:19:05',NULL,NULL,NULL,NULL,NULL,NULL),(5,'4','Additional Discount','2015-09-23',1000,'1','Applied','remark',10,'2015-09-23 00:00:00',0,10,'2015-09-23 00:00:00',1,'reason5',10,0,500.00,'1',NULL,8,'2015-09-23 00:00:00',NULL,3,'2015-10-02 18:38:45',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(6,'3','Rate Difference','2015-09-23',1002,'1','Available','remark',10,'2015-10-31 16:26:33',1,10,'2015-10-31 16:26:33',1,'reason6',10,0,477.00,'1',NULL,10,'2015-10-31 16:26:33',1,-1,'2015-10-12 18:47:51',NULL,NULL,NULL,NULL,NULL,NULL,236.00,NULL),(7,'4','Additional Discount','2015-09-23',1000,'1','Available','remark',10,'2015-09-23 00:00:00',0,10,'2015-09-23 00:00:00',1,'reason7',10,0,700.00,'1',NULL,10,'2015-09-23 00:00:00',NULL,4,'2015-10-12 18:47:51',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(8,'4','Additional Discount','2015-09-23',1002,'1','Available','remark',10,'2015-09-23 00:00:00',0,10,'2015-09-23 00:00:00',1,'reason8',10,0,800.00,'1',NULL,2,'2015-09-23 00:00:00',NULL,4,'2015-10-12 18:47:51',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(10,'1','Goods Return','2015-10-02',1000,'1','Available','asdasdasdasd',0,NULL,0,0,NULL,1,NULL,0,0,NULL,NULL,NULL,NULL,'2015-09-23 00:00:00',NULL,10,'2015-10-02 18:38:45',NULL,NULL,0,NULL,'0000-00-00 00:00:00',NULL,NULL,NULL),(11,'1','Goods Return','2015-10-09',1000,'1','Available',NULL,NULL,NULL,0,10,'2015-10-13 10:52:13',1,NULL,0,1,3000.00,NULL,NULL,10,'2015-09-23 00:00:00',NULL,10,'2015-10-02 19:04:19',10,'2015-10-14 15:34:56',0,NULL,NULL,3000.00,0.00,NULL),(12,'4','Additional Discount','2015-10-08',1000,'1','Available','cn reamrk',0,NULL,0,0,NULL,1,NULL,0,0,NULL,NULL,NULL,10,'2015-09-23 00:00:00',NULL,10,'2015-10-05 11:36:29',NULL,NULL,0,NULL,'0000-00-00 00:00:00',NULL,NULL,NULL),(13,'4','Additional Discount',NULL,1000,'1','Available','df',NULL,NULL,0,0,NULL,1,NULL,NULL,0,NULL,NULL,NULL,10,'2015-09-23 00:00:00',1,10,'2015-10-05 12:17:31',10,'2015-10-17 18:45:35',0,NULL,NULL,NULL,NULL,NULL),(14,'1','Goods Return',NULL,1000,'2','Applied','rw',0,NULL,0,0,NULL,1,NULL,0,0,NULL,NULL,NULL,10,'2015-09-23 00:00:00',1,10,'2015-10-05 12:19:38',NULL,NULL,0,NULL,'0000-00-00 00:00:00',NULL,NULL,NULL),(15,'2',NULL,'2015-12-10',1000,'1',NULL,'my remark',10,'2015-10-12 18:49:03',1,0,NULL,1,NULL,NULL,0,1000.00,'0',NULL,NULL,NULL,NULL,10,'2015-10-12 18:49:03',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(16,'2',NULL,'2015-12-10',1000,'1',NULL,'MY remmmmmmm AK',10,'2015-10-12 18:54:07',0,0,NULL,1,NULL,NULL,NULL,566.00,'0',NULL,NULL,NULL,NULL,10,'2015-10-12 18:54:07',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(18,'2',NULL,'2015-12-10',1000,'1',NULL,'assadsdsass',10,'2015-10-12 19:10:06',1,0,NULL,1,NULL,NULL,0,4556.00,'0',NULL,NULL,NULL,NULL,10,'2015-10-12 19:10:06',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(20,'4','Additional Discount','2015-10-16',1000,'1','Available','zddf',0,'2015-10-16 15:32:36',0,0,'2015-10-16 15:32:36',0,NULL,0,0,NULL,NULL,NULL,NULL,NULL,NULL,10,'2015-10-16 15:32:36',NULL,NULL,0,0,'2015-10-16 15:32:36',NULL,NULL,'2015-10-16 15:32:36'),(21,'4','Additional Discount','2015-10-16',1000,'1','Available',NULL,0,'2015-10-16 15:46:45',0,0,'2015-10-16 15:46:45',0,NULL,0,0,NULL,NULL,NULL,NULL,NULL,NULL,10,'2015-10-16 15:46:45',NULL,NULL,0,0,'2015-10-16 15:46:45',NULL,NULL,'2015-10-16 15:46:45'),(22,'4','Additional Discount','2015-10-16',1000,'1','Available',NULL,0,'2015-10-16 15:47:22',0,0,'2015-10-16 15:47:22',0,NULL,0,0,NULL,NULL,NULL,NULL,NULL,NULL,10,'2015-10-16 15:47:22',NULL,NULL,0,0,'2015-10-16 15:47:22',NULL,NULL,'2015-10-16 15:47:22'),(23,'4','Additional Discount','2015-10-16',1000,'1','Available','1',0,'2015-10-16 15:48:15',0,0,'2015-10-16 15:48:15',0,NULL,0,0,NULL,NULL,NULL,NULL,NULL,NULL,10,'2015-10-16 15:48:15',NULL,NULL,0,0,'2015-10-16 15:48:15',NULL,NULL,'2015-10-16 15:48:15'),(24,'4','Additional Discount','2015-10-16',1000,'1','Available','d',0,'2015-10-16 15:51:29',0,0,'2015-10-16 15:51:29',0,NULL,0,0,NULL,NULL,NULL,NULL,NULL,NULL,10,'2015-10-16 15:51:29',NULL,NULL,0,0,'2015-10-16 15:51:29',NULL,NULL,'2015-10-16 15:51:29'),(25,'4','Additional Discount','2015-10-16',1000,'1','Available','d',0,'2015-10-16 15:57:39',0,0,'2015-10-16 15:57:39',0,NULL,0,0,NULL,NULL,NULL,NULL,NULL,NULL,10,'2015-10-16 15:57:39',NULL,NULL,0,0,'2015-10-16 15:57:39',NULL,NULL,'2015-10-16 15:57:39'),(26,'4','Additional Discount','2015-10-16',1000,'1','Available',NULL,0,'2015-10-16 16:09:06',0,0,'2015-10-16 16:09:06',0,NULL,0,0,NULL,NULL,NULL,NULL,NULL,NULL,10,'2015-10-16 16:09:06',NULL,NULL,0,0,'2015-10-16 16:09:06',NULL,NULL,'2015-10-16 16:09:06'),(27,'4','Additional Discount','2015-10-16',1000,'1','Available',NULL,0,'2015-10-16 16:10:12',0,0,'2015-10-16 16:10:12',0,NULL,0,0,NULL,NULL,NULL,NULL,NULL,NULL,10,'2015-10-16 16:10:12',NULL,NULL,0,0,'2015-10-16 16:10:12',NULL,NULL,'2015-10-16 16:10:12'),(28,'4','Additional Discount','2015-10-16',1000,'1','Available','ftfi',0,'2015-10-16 16:36:55',0,0,'2015-10-16 16:36:55',0,NULL,0,0,NULL,NULL,NULL,NULL,NULL,NULL,10,'2015-10-16 16:36:55',NULL,NULL,0,0,'2015-10-16 16:36:55',NULL,NULL,'2015-10-16 16:36:55'),(29,'4','Additional Discount','2015-10-16',1000,'1','Available','asdasd',NULL,NULL,0,NULL,NULL,0,NULL,NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,10,'2015-10-16 16:39:58',10,'2015-10-17 19:29:04',0,NULL,NULL,NULL,NULL,NULL),(30,'4','Additional Discount','2015-10-16',1000,'1','Available','111wdce',NULL,NULL,0,NULL,NULL,0,NULL,NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,10,'2015-10-16 17:25:49',10,'2015-10-17 17:58:20',0,NULL,NULL,NULL,NULL,NULL),(32,'1','Goods Return','2015-10-17',1000,'1','Available','asfa',NULL,NULL,0,10,'2015-10-31 11:55:48',1,NULL,NULL,0,3420.00,NULL,NULL,NULL,NULL,NULL,10,'2015-10-17 15:34:06',10,'2015-10-31 11:55:51',0,NULL,NULL,2970.00,450.00,NULL),(33,'4','Additional Discount','2015-10-17',1000,'1','Available','first ADD DISC cn',0,'2015-10-17 19:59:36',0,0,'2015-10-17 19:59:36',0,NULL,0,0,NULL,NULL,NULL,NULL,NULL,NULL,10,'2015-10-17 19:59:36',NULL,NULL,0,0,'2015-10-17 19:59:36',NULL,NULL,'2015-10-17 19:59:36'),(34,'1','Goods Return','2015-10-19',1002,'1','Available',NULL,NULL,NULL,0,NULL,NULL,0,NULL,NULL,0,414739.00,NULL,NULL,NULL,NULL,NULL,10,'2015-10-19 15:51:38',10,'2015-10-19 15:55:39',0,NULL,NULL,414739.00,0.00,NULL),(35,'4','Additional Discount',NULL,1000,'1','Available','SATYAJIT NEW ->1 ADED',NULL,NULL,0,NULL,NULL,0,NULL,NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,10,'2015-10-19 16:18:13',10,'2015-10-19 16:23:22',0,NULL,NULL,NULL,NULL,NULL),(36,'4','Additional Discount','2015-10-08',1000,'1','Available','SATYAJIT NEW->2 PRODUCT ADDED',NULL,NULL,0,10,'2015-10-20 12:17:13',1,NULL,NULL,0,158.00,NULL,NULL,NULL,NULL,NULL,10,'2015-10-19 16:30:35',10,'2015-10-20 12:18:03',0,NULL,NULL,158.00,0.00,NULL),(37,'2',NULL,NULL,1000,'1','Available','asdqwe',10,'2015-10-19 18:32:30',0,NULL,NULL,NULL,NULL,NULL,0,1255.00,'4','',NULL,NULL,NULL,10,'2015-10-19 18:32:30',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(38,'2',NULL,NULL,1000,'1','Available',NULL,10,'2015-10-19 18:40:29',0,NULL,NULL,NULL,NULL,NULL,0,67.00,'2','',NULL,NULL,NULL,10,'2015-10-19 18:40:29',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(39,'2','Direct',NULL,1000,'1','Available',NULL,10,'2015-10-20 10:32:25',0,NULL,NULL,NULL,NULL,NULL,0,123.00,'4','',NULL,NULL,NULL,10,'2015-10-20 10:32:25',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(40,'4','Additional Discount','2015-10-20',1000,'1','Available','asdffhtjh',NULL,NULL,0,NULL,NULL,0,NULL,NULL,0,6.96,NULL,NULL,NULL,NULL,NULL,10,'2015-10-20 12:22:23',10,'2015-10-30 21:18:10',0,NULL,NULL,6.96,0.00,NULL),(41,'2','Direct','2015-10-26',1000,'1','Available',NULL,10,'2015-10-30 15:37:07',0,NULL,NULL,NULL,NULL,NULL,0,700.00,'1','',NULL,NULL,NULL,10,'2015-10-26 12:01:34',10,'2015-10-30 15:37:07',NULL,NULL,NULL,NULL,NULL,NULL),(44,'1','Goods Return','2015-10-27',1000,'1','Available',NULL,NULL,NULL,0,NULL,NULL,0,NULL,NULL,0,0.00,NULL,NULL,NULL,NULL,NULL,10,'2015-10-27 15:38:23',10,'2015-10-31 15:57:37',0,NULL,NULL,0.00,0.00,NULL),(47,'1','Goods Return','2015-10-28',1000,'1','Available','aaaaa',0,'2015-10-28 10:47:25',0,0,'2015-10-28 10:47:25',0,NULL,0,0,2865.00,NULL,NULL,NULL,NULL,NULL,10,'2015-10-28 10:47:25',NULL,NULL,0,0,'2015-10-28 10:47:25',2820.00,45.00,'2015-10-28 10:47:25'),(48,'1','Goods Return','2015-10-28',1000,'1','Available','www',NULL,NULL,0,NULL,NULL,0,NULL,NULL,0,-1.00,NULL,NULL,NULL,NULL,NULL,10,'2015-10-28 10:51:07',10,'2015-10-30 11:49:25',1,10,'2015-10-30 11:49:15',-1.00,0.00,NULL),(49,'4','Additional Discount','2015-10-29',1002,'1','Available','Main Remark Test',NULL,NULL,0,10,'2015-10-29 09:01:39',1,NULL,NULL,0,0.00,NULL,NULL,NULL,NULL,NULL,10,'2015-10-29 09:01:39',10,'2015-10-30 11:54:23',0,NULL,NULL,0.00,0.00,NULL),(50,'2','Direct','2015-10-30',1002,'1','Available','asdasd',10,'2015-10-30 17:00:45',1,NULL,NULL,1,NULL,NULL,0,123.00,'2','',NULL,NULL,NULL,10,'2015-10-30 17:00:45',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(51,'2','Direct','2015-10-30',1000,'1','Available','ASD',10,'2015-10-30 20:42:24',1,10,'2015-10-30 20:42:24',1,NULL,NULL,0,4576.00,'2','',NULL,NULL,NULL,10,'2015-10-30 20:42:24',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(52,'2','Direct','2015-10-30',1000,'1','Available','aaa',10,'2015-10-30 20:40:02',0,10,'2015-10-30 20:40:02',1,NULL,NULL,1,321.00,'1','',NULL,NULL,NULL,10,'2015-10-30 20:40:02',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(53,'2','Direct','2015-10-30',1000,'1','Available','dsf',10,'2015-10-30 20:46:11',0,10,'2015-10-30 20:46:11',1,NULL,NULL,1,6666666.00,'5','',NULL,NULL,NULL,10,'2015-10-30 20:46:11',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(54,'2','Direct','2015-10-30',1002,'1','Available','asdasd',10,'2015-10-30 19:11:38',0,10,'2015-10-30 19:11:38',0,NULL,NULL,0,34.00,'-1','123',NULL,NULL,NULL,10,'2015-10-30 19:11:38',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(55,'2','Direct','2015-10-30',1000,'1','Available','123',10,'2015-10-30 19:13:37',0,10,'2015-10-30 19:13:37',1,NULL,NULL,0,190.00,'2','',NULL,NULL,NULL,10,'2015-10-30 19:13:37',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(56,'2','Direct','2015-10-30',1000,'1','Available',NULL,10,'2015-10-30 19:18:05',1,10,'2015-10-30 19:18:05',1,NULL,NULL,0,231.00,'2','',NULL,NULL,NULL,10,'2015-10-30 19:18:05',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(57,'2','Direct','2015-10-30',1002,'1','Available','123',10,'2015-10-30 20:39:15',1,10,'2015-10-30 20:39:15',1,NULL,NULL,0,4440.00,'4','',NULL,NULL,NULL,10,'2015-10-30 20:39:15',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(58,'4','Additional Discount','2015-10-30',1000,'1','Available',NULL,NULL,NULL,0,NULL,NULL,0,NULL,NULL,0,135.35,NULL,NULL,NULL,NULL,NULL,10,'2015-10-30 21:27:35',10,'2015-10-30 21:31:36',0,NULL,NULL,135.35,0.00,NULL),(60,'1','Goods Return','2015-10-31',1000,'1','Available',NULL,NULL,NULL,0,NULL,NULL,0,NULL,NULL,0,221.50,NULL,NULL,NULL,NULL,NULL,10,'2015-10-31 16:06:36',10,'2015-10-31 16:12:38',0,NULL,NULL,176.50,45.00,NULL);
/*!40000 ALTER TABLE `creditnote` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `creditnoteadditionaldiscount`
--

DROP TABLE IF EXISTS `creditnoteadditionaldiscount`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `creditnoteadditionaldiscount` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `CNID` int(11) DEFAULT NULL,
  `InvoiceNo` int(11) DEFAULT NULL,
  `additionalDisc` decimal(10,2) DEFAULT NULL,
  `additionalDiscAmt` decimal(10,2) DEFAULT NULL,
  `discountType` int(11) DEFAULT NULL,
  `Remark` varchar(45) DEFAULT NULL,
  `CreatedBy` double DEFAULT NULL,
  `CreatedOn` datetime DEFAULT NULL,
  `ModifiedBy` double DEFAULT NULL,
  `ModifiedOn` datetime DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `creditnoteadditionaldiscount`
--

LOCK TABLES `creditnoteadditionaldiscount` WRITE;
/*!40000 ALTER TABLE `creditnoteadditionaldiscount` DISABLE KEYS */;
INSERT INTO `creditnoteadditionaldiscount` VALUES (7,58,6,0.00,56.00,2,NULL,10,'2015-10-30 21:27:35',10,'2015-10-30 21:31:36'),(8,58,5,23.00,79.35,1,NULL,10,'2015-10-30 21:27:36',10,'2015-10-30 21:31:36');
/*!40000 ALTER TABLE `creditnoteadditionaldiscount` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `creditnoteadditionaldiscountproduct`
--

DROP TABLE IF EXISTS `creditnoteadditionaldiscountproduct`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `creditnoteadditionaldiscountproduct` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `CNADID` int(11) DEFAULT NULL,
  `SPID` int(11) DEFAULT NULL,
  `additionalDiscPercentage` decimal(10,2) DEFAULT NULL,
  `additionalDiscAmount` decimal(10,2) DEFAULT NULL,
  `Remark` varchar(65) DEFAULT NULL,
  `CreatedBy` double DEFAULT NULL,
  `CreatedOn` datetime DEFAULT NULL,
  `ModifiedBy` double DEFAULT NULL,
  `ModifiedOn` datetime DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `creditnoteadditionaldiscountproduct`
--

LOCK TABLES `creditnoteadditionaldiscountproduct` WRITE;
/*!40000 ALTER TABLE `creditnoteadditionaldiscountproduct` DISABLE KEYS */;
INSERT INTO `creditnoteadditionaldiscountproduct` VALUES (10,7,2,3.40,45.00,NULL,10,'2015-10-30 21:27:35',10,'2015-10-30 21:30:38'),(11,7,1,4.51,56.00,NULL,10,'2015-10-30 21:27:36',10,'2015-10-30 21:30:38'),(12,7,5,1.23,56.00,NULL,10,'2015-10-30 21:27:36',10,'2015-10-30 21:31:36');
/*!40000 ALTER TABLE `creditnoteadditionaldiscountproduct` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `creditnoteratedifference`
--

DROP TABLE IF EXISTS `creditnoteratedifference`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `creditnoteratedifference` (
  `ID` int(11) NOT NULL,
  `CNID` int(11) DEFAULT NULL,
  `PBAID` int(11) DEFAULT NULL,
  `PID` int(11) DEFAULT NULL,
  `purchaseRate` decimal(10,2) DEFAULT NULL,
  `saleRate` decimal(10,2) DEFAULT NULL,
  `oldSaleRate` decimal(10,2) DEFAULT NULL,
  `rateDifferenceAmount` decimal(10,2) DEFAULT NULL,
  `productRateDifferencePecentage` decimal(10,2) DEFAULT NULL,
  `MRP` decimal(10,2) DEFAULT NULL,
  `CreatedBy` double DEFAULT NULL,
  `CreatedOn` datetime DEFAULT NULL,
  `ModifiedBy` double DEFAULT NULL,
  `ModifiedOn` datetime DEFAULT NULL,
  `productRateDifferenceAmount` decimal(10,2) DEFAULT NULL COMMENT 'CN details Rate difference (rate difference popup)\n',
  `lessPecentage` decimal(10,2) DEFAULT NULL,
  `lessAmount` decimal(10,2) DEFAULT NULL,
  `returnAmount` decimal(10,2) DEFAULT NULL,
  `flgRefundVAT` tinyint(4) DEFAULT NULL,
  `VATpercentage` decimal(10,2) DEFAULT NULL,
  `VATamount` decimal(10,2) DEFAULT NULL,
  `VATrefund` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `creditnoteratedifference`
--

LOCK TABLES `creditnoteratedifference` WRITE;
/*!40000 ALTER TABLE `creditnoteratedifference` DISABLE KEYS */;
INSERT INTO `creditnoteratedifference` VALUES (1,6,1,1,14.00,43.00,34.00,23.00,12.00,24.00,10,NULL,10,NULL,NULL,8.70,2.00,21.00,NULL,NULL,NULL,456.00),(2,14,2,2,15.00,23.00,13.00,5.00,12.00,56.00,10,NULL,10,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `creditnoteratedifference` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `creditnoteratedifferenceinvoice`
--

DROP TABLE IF EXISTS `creditnoteratedifferenceinvoice`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `creditnoteratedifferenceinvoice` (
  `ID` int(11) NOT NULL,
  `CNRDID` int(11) DEFAULT NULL,
  `CNID` int(11) DEFAULT NULL,
  `InvoiceNo` int(11) DEFAULT NULL,
  `Qty` int(11) DEFAULT NULL,
  `FreeQty` int(11) DEFAULT NULL,
  `Amount` decimal(10,2) DEFAULT NULL,
  `productDiscount` decimal(10,2) DEFAULT NULL,
  `cashDiscont` decimal(10,2) DEFAULT NULL,
  `VATamt` decimal(10,2) DEFAULT NULL,
  `VATpercentage` decimal(10,2) DEFAULT NULL,
  `totalAmount` decimal(10,2) DEFAULT NULL,
  `rateDiffTotal` decimal(10,2) DEFAULT NULL,
  `InvoiceDate` date DEFAULT NULL,
  `CNamt` decimal(10,2) DEFAULT NULL,
  `DNamt` decimal(10,2) DEFAULT NULL,
  `additionalDiscAmt` decimal(10,2) DEFAULT NULL,
  `additionalDiscPercentage` decimal(10,2) DEFAULT NULL,
  `CreatedBy` double DEFAULT NULL,
  `CreatedOn` datetime DEFAULT NULL,
  `ModifiedBy` double DEFAULT NULL,
  `ModifiedOn` datetime DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `creditnoteratedifferenceinvoice`
--

LOCK TABLES `creditnoteratedifferenceinvoice` WRITE;
/*!40000 ALTER TABLE `creditnoteratedifferenceinvoice` DISABLE KEYS */;
/*!40000 ALTER TABLE `creditnoteratedifferenceinvoice` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `creditnoteratedifferenceproduct`
--

DROP TABLE IF EXISTS `creditnoteratedifferenceproduct`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `creditnoteratedifferenceproduct` (
  `ID` int(11) NOT NULL,
  `SPID` int(11) DEFAULT NULL,
  `CNID` int(11) DEFAULT NULL,
  `InvoiceNo` int(11) DEFAULT NULL,
  `Qty` int(11) DEFAULT NULL,
  `FreeQty` int(11) DEFAULT NULL,
  `Amount` decimal(10,2) NOT NULL,
  `productDiscount` decimal(10,2) DEFAULT NULL,
  `cashDiscont` decimal(10,2) DEFAULT NULL,
  `VATamt` decimal(10,2) DEFAULT NULL,
  `VATpercentage` decimal(10,2) DEFAULT NULL,
  `totalAmount` decimal(10,2) DEFAULT NULL,
  `rateDiffTotal` decimal(10,2) DEFAULT NULL,
  `InvoiceDate` date DEFAULT NULL,
  `CreatedBy` double DEFAULT NULL,
  `CreatedOn` datetime DEFAULT NULL,
  `ModifiedBy` double DEFAULT NULL,
  `ModifiedOn` datetime DEFAULT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `ID_UNIQUE` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `creditnoteratedifferenceproduct`
--

LOCK TABLES `creditnoteratedifferenceproduct` WRITE;
/*!40000 ALTER TABLE `creditnoteratedifferenceproduct` DISABLE KEYS */;
INSERT INTO `creditnoteratedifferenceproduct` VALUES (1,1,6,1,2,1,34.00,12.00,13.00,234.00,12.00,200.00,12.00,'2015-10-07',10,NULL,10,NULL),(2,2,6,2,3,1,23.00,16.00,22.00,13.00,22.00,276.00,14.00,'2015-10-07',10,NULL,10,NULL),(3,5,14,2,3,1,23.00,16.00,22.00,13.00,22.00,276.00,14.00,'2015-10-07',10,NULL,10,NULL);
/*!40000 ALTER TABLE `creditnoteratedifferenceproduct` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customer`
--

DROP TABLE IF EXISTS `customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `customer` (
  `ID` double NOT NULL AUTO_INCREMENT,
  `Other` varchar(15) DEFAULT NULL,
  `Name` varchar(50) DEFAULT NULL,
  `acCode` varchar(15) DEFAULT NULL,
  `acName` varchar(50) DEFAULT NULL,
  `Type` int(11) DEFAULT NULL,
  `Area` double DEFAULT NULL,
  `Salesman` double DEFAULT NULL,
  `Remark` varchar(100) DEFAULT NULL,
  `TaxID` double DEFAULT NULL,
  `LedgerType` varchar(45) DEFAULT NULL,
  `accGroup` varchar(45) DEFAULT NULL,
  `OpeningBalance` double DEFAULT NULL,
  `OpeningBalanceType` varchar(15) DEFAULT NULL,
  `CreditType` varchar(15) DEFAULT NULL,
  `CreditPeriod` double DEFAULT NULL,
  `AddrLine1` varchar(50) DEFAULT NULL,
  `AddrLine2` varchar(50) DEFAULT NULL,
  `City` double DEFAULT NULL,
  `ContactPerson` varchar(50) DEFAULT NULL,
  `Phone` varchar(15) DEFAULT NULL,
  `Fax` varchar(15) DEFAULT NULL,
  `Email` varchar(50) DEFAULT NULL,
  `flgActive` int(11) DEFAULT NULL,
  `flgEmail` int(11) DEFAULT NULL,
  `flgLock` int(11) DEFAULT NULL,
  `flgSubstockits` int(11) NOT NULL,
  `CreatedBy` double DEFAULT NULL,
  `CreatedOn` datetime DEFAULT NULL,
  `ModifiedBy` double DEFAULT NULL,
  `ModifiedOn` datetime DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=1066 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer`
--

LOCK TABLES `customer` WRITE;
/*!40000 ALTER TABLE `customer` DISABLE KEYS */;
INSERT INTO `customer` VALUES (1000,'other Info','Parth Medico','parth..','Parth Medico',0,32,1,'remark',5609999,'0',NULL,10000,'0','1',20,'puneupdate','pune2',10,'jayeshUpdate','989006000','5673333.0','jayeshUpdate@gmail.com',1,1,1,1,10,'2015-03-04 16:27:30',NULL,NULL),(1002,'other info','Prem Medicals','ac code','Prem Medicals',1,5,2,'remark',200,'0','acGroup',20000,'0','0',2,'pune addr1Update','pune addr2',10,'kishor','9896767677','87666.0','kishor@gmail.com',1,0,1,0,10,'2015-03-04 16:27:30',NULL,NULL),(1052,'test','test1234','test123','test1234',2,5,3,'test89',0,'1',NULL,3333,'1','0',3,NULL,NULL,10,NULL,'0.0','0.0',NULL,0,0,0,0,NULL,'2015-04-14 00:00:00',NULL,NULL),(1053,'sf','sd','fd','sd',0,31,3,'dfg',23,'1',NULL,234,'1','0',2,'dsf','dsf',10,'s','4132.0','13.0','sdfs',1,1,1,1,NULL,NULL,NULL,NULL),(1062,'yy','yyy','yy','yyy',0,31,3,NULL,0,'1',NULL,0,'0','0',6,NULL,NULL,10,NULL,'0.0','0.0',NULL,1,0,0,0,NULL,NULL,NULL,NULL),(1063,NULL,'tyhjj','66','tyhjj',0,NULL,NULL,'remark',0,'0',NULL,0,'0','0',66,NULL,NULL,10,NULL,'0.0','0.0',NULL,1,0,0,0,NULL,NULL,NULL,NULL),(1064,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,NULL,NULL,NULL,NULL),(1065,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,NULL,NULL,0,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `customer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customerlicences`
--

DROP TABLE IF EXISTS `customerlicences`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `customerlicences` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `CLindex` double DEFAULT NULL,
  `CustomerID` double DEFAULT NULL,
  `licenceType` int(11) DEFAULT NULL,
  `customerNumber` double NOT NULL,
  `LicenceStartDate` datetime NOT NULL,
  `LicenceEndDate` datetime NOT NULL,
  `flgActive` int(11) DEFAULT NULL,
  `CreatedBy` double DEFAULT NULL,
  `CreatedOn` datetime DEFAULT NULL,
  `ModifiedBy` double DEFAULT NULL,
  `ModifiedOn` datetime DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=313 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customerlicences`
--

LOCK TABLES `customerlicences` WRITE;
/*!40000 ALTER TABLE `customerlicences` DISABLE KEYS */;
INSERT INTO `customerlicences` VALUES (246,1,1064,1,11,'2015-04-17 00:00:00','2015-04-22 00:00:00',NULL,NULL,NULL,NULL,NULL),(247,1,1065,1,123,'2015-04-22 00:00:00','2015-04-23 00:00:00',NULL,NULL,NULL,NULL,NULL),(248,1,1066,2,34,'2015-04-22 00:00:00','2015-04-22 00:00:00',NULL,NULL,NULL,NULL,NULL),(249,1,1067,0,12,'2015-04-02 00:00:00','2015-04-15 00:00:00',NULL,NULL,NULL,NULL,NULL),(252,1,1068,0,12,'2015-04-02 00:00:00','2015-04-15 00:00:00',NULL,NULL,NULL,NULL,NULL),(254,1,1069,1,43,'2015-04-09 00:00:00','2015-04-23 00:00:00',NULL,NULL,NULL,NULL,NULL),(263,1,1000,1,67,'2015-04-01 00:00:00','2015-04-02 00:00:00',NULL,NULL,NULL,NULL,NULL),(264,2,1000,2,345,'2015-04-10 00:00:00','2015-04-30 00:00:00',NULL,NULL,NULL,NULL,NULL),(265,3,1000,0,11,'2015-04-09 00:00:00','2015-04-17 00:00:00',NULL,NULL,NULL,NULL,NULL),(275,1,1002,1,33,'2015-04-29 00:00:00','2015-04-30 00:00:00',NULL,NULL,NULL,NULL,NULL),(276,2,1002,2,55,'2015-04-30 00:00:00','2015-05-15 00:00:00',NULL,NULL,NULL,NULL,NULL),(284,1,1054,1,33,'2015-07-17 00:00:00','2015-07-24 00:00:00',NULL,NULL,NULL,NULL,NULL),(299,1,1052,0,324,'2015-04-24 00:00:00','2015-04-29 00:00:00',NULL,NULL,NULL,NULL,NULL),(300,2,1052,2,98,'1999-08-09 00:00:00','1999-08-09 00:00:00',NULL,NULL,NULL,NULL,NULL),(301,1,1053,2,798,'2015-07-14 00:00:00','2015-07-24 00:00:00',NULL,NULL,NULL,NULL,NULL),(302,2,1053,1,32,'2015-05-20 00:00:00','2015-05-20 00:00:00',NULL,NULL,NULL,NULL,NULL),(303,3,1053,0,3,'2015-05-20 00:00:00','2015-05-27 00:00:00',NULL,NULL,NULL,NULL,NULL),(306,1,1062,2,45,'2015-07-10 00:00:00','2015-07-22 00:00:00',NULL,NULL,NULL,NULL,NULL),(307,2,1062,0,33,'2015-07-24 00:00:00','2015-07-30 00:00:00',NULL,NULL,NULL,NULL,NULL),(308,3,1062,1,66,'2015-07-16 00:00:00','2015-07-31 00:00:00',NULL,NULL,NULL,NULL,NULL),(309,4,1062,0,453,'2015-07-10 00:00:00','2015-07-30 00:00:00',NULL,NULL,NULL,NULL,NULL),(310,1,1063,1,21,'2015-07-03 00:00:00','2015-07-16 00:00:00',NULL,NULL,NULL,NULL,NULL),(311,2,0,2,98,'1999-08-09 00:00:00','1999-08-09 00:00:00',NULL,NULL,NULL,NULL,NULL),(312,1,0,0,324,'2015-04-24 00:00:00','2015-04-29 00:00:00',NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `customerlicences` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `debitnote`
--

DROP TABLE IF EXISTS `debitnote`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `debitnote` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Type` varchar(45) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `custID` int(11) DEFAULT NULL,
  `status` varchar(95) DEFAULT NULL,
  `remark` varchar(95) DEFAULT NULL,
  `lockUser` int(11) DEFAULT NULL,
  `lockDate` datetime DEFAULT NULL,
  `flgLock` tinyint(11) DEFAULT NULL,
  `ledgerUser` int(11) NOT NULL,
  `ledgerDate` datetime DEFAULT NULL,
  `flgLedgerLock` tinyint(11) DEFAULT NULL,
  `Amount` decimal(10,2) DEFAULT NULL,
  `ApprovedBy` int(11) DEFAULT NULL,
  `ApprovedOn` datetime DEFAULT NULL,
  `flgApproved` tinyint(4) DEFAULT NULL,
  `CreatedBy` double DEFAULT NULL,
  `CreatedOn` datetime DEFAULT NULL,
  `ModifiedBy` double DEFAULT NULL,
  `ModifiedOn` datetime DEFAULT NULL,
  `voidReason` varchar(65) DEFAULT NULL,
  `voidBy` int(11) DEFAULT NULL,
  `flgVoid` tinyint(4) DEFAULT NULL,
  `voidOn` datetime DEFAULT NULL,
  `Reason` varchar(95) DEFAULT NULL,
  `ReasonOther` varchar(95) DEFAULT NULL,
  `debitNoteProductTotalAmount` decimal(10,2) DEFAULT NULL,
  `debitNoteProductTotalVATAmount` decimal(10,2) DEFAULT NULL,
  `TypeDescription` varchar(45) DEFAULT NULL,
  `statusDecription` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `debitnote`
--

LOCK TABLES `debitnote` WRITE;
/*!40000 ALTER TABLE `debitnote` DISABLE KEYS */;
INSERT INTO `debitnote` VALUES (1,'1','2015-10-13',1000,'1','remark ',10,'2015-10-13 18:33:56',1,10,'2015-10-13 18:33:56',1,100.00,11,'2015-10-13 18:33:56',1,12,'2015-10-13 18:33:56',NULL,NULL,NULL,NULL,0,NULL,'1','asd',NULL,NULL,NULL,'Available'),(2,'1','2015-10-12',1000,'1','remark',17,'2015-10-13 12:20:12',1,3,'2015-10-13 18:33:56',1,2678.00,2,'2015-10-13 18:33:56',1,4,'2015-10-13 18:33:56',NULL,NULL,NULL,NULL,0,NULL,'2','gfhgfhgf',NULL,NULL,NULL,'Available'),(3,'2','2015-10-11',1000,'1','remark',12,'2015-10-13 12:20:12',1,4,'2015-10-13 12:20:12',1,1333.00,14,'2015-10-13 18:33:56',1,10,'2015-10-13 18:33:56',NULL,NULL,NULL,NULL,0,NULL,'3','asd',NULL,NULL,'Discount Rollback','Available'),(4,'2','2015-10-19',1000,'1','remark',1,'2015-10-13 12:20:12',1,3,'2015-10-13 12:20:12',1,1333.00,21,'2015-10-13 18:33:56',1,10,'2015-10-13 18:33:56',NULL,NULL,NULL,NULL,0,NULL,'4','qqq',NULL,NULL,'Discount Rollback','Available');
/*!40000 ALTER TABLE `debitnote` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `directcreditnote`
--

DROP TABLE IF EXISTS `directcreditnote`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `directcreditnote` (
  `ID` int(11) NOT NULL,
  `CreatedBy` int(11) DEFAULT NULL,
  `CreatedOn` datetime DEFAULT NULL,
  `ModifiedBy` int(11) DEFAULT NULL,
  `ModifiedOn` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `directcreditnote`
--

LOCK TABLES `directcreditnote` WRITE;
/*!40000 ALTER TABLE `directcreditnote` DISABLE KEYS */;
/*!40000 ALTER TABLE `directcreditnote` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `division`
--

DROP TABLE IF EXISTS `division`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `division` (
  `ID` double NOT NULL AUTO_INCREMENT,
  `CID` double DEFAULT NULL,
  `Code` varchar(15) DEFAULT NULL,
  `Name` varchar(45) DEFAULT NULL,
  `Remark` varchar(150) DEFAULT NULL,
  `ContactPerson` varchar(50) DEFAULT NULL,
  `Phone` varchar(15) DEFAULT NULL,
  `Email` varchar(50) DEFAULT NULL,
  `flgActive` int(11) DEFAULT NULL,
  `CreatedBy` double DEFAULT NULL,
  `CreatedOn` datetime DEFAULT NULL,
  `ModifiedBy` double DEFAULT NULL,
  `ModifiedOn` datetime DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `division`
--

LOCK TABLES `division` WRITE;
/*!40000 ALTER TABLE `division` DISABLE KEYS */;
INSERT INTO `division` VALUES (1,1000,'qqq','ExtDiv','','','','',1,10,'2015-03-04 16:27:30',NULL,NULL),(2,1000,'CAN','Cancer',NULL,'Paresh Patil','123.0',NULL,1,10,'2015-03-04 16:27:30',NULL,NULL),(3,2000,'GEN','GEN',NULL,'Kumar Gaurav','0.0',NULL,1,10,'2015-03-04 16:27:30',NULL,NULL),(4,3000,'SANGEN','SANGEN',NULL,'Rupesh Keshto','908888888',NULL,1,10,'2015-03-04 16:27:30',NULL,NULL),(6,3000,'MYDIVISION','MYDIVISION','MYDIVISION','MYDIVISION','213445353','asdasdasda@asda.com',0,NULL,NULL,NULL,NULL),(7,3000,'DIVVVVVVVV','DIVVVVVVVV','DIVVVVVVVV','DIVVVVVVVV','123123.0','DIVVVVVVVV',0,NULL,NULL,NULL,NULL),(8,3000,'myDevCode','myDevName','myRemark','abc','9898980000','abc2gmail.com',1,NULL,NULL,NULL,NULL),(9,3001,'asd','safdgfdg','as','sa','12312.0','xff',1,NULL,NULL,NULL,NULL),(10,2000,'GEN2','GEN2Update','as',NULL,'0.0',NULL,1,NULL,NULL,NULL,NULL),(11,3004,'1233333333','MYDIVINST',NULL,'asdas','213123.0','asdasdasd',1,NULL,NULL,NULL,NULL),(12,3005,'DD','PurpDIv',NULL,NULL,'0.0',NULL,1,NULL,NULL,NULL,NULL),(13,3007,'ASAs','ererereerr','asas','sad','989899999',NULL,1,NULL,NULL,NULL,NULL),(14,2000,'aaa','aaaa2222','aaa','as','0.0',NULL,1,NULL,NULL,NULL,NULL),(15,2000,'d','ghghg','ds','ds','9999999999',NULL,1,NULL,NULL,NULL,NULL),(16,2000,'d','ghghg','ds','ds','9999999999',NULL,1,NULL,NULL,NULL,NULL),(17,1000,'xyz','xyz','rem','','','',1,NULL,NULL,NULL,NULL),(18,1000,'asss','dddd','','','','',1,NULL,NULL,NULL,NULL),(19,1000,'u','assssss','asd','nnnn','90909099999',NULL,1,NULL,NULL,NULL,NULL),(20,2000,'div','new dwww',NULL,NULL,'0.0',NULL,1,NULL,NULL,NULL,NULL),(21,3002,'asas','assas','sasa',NULL,'0.0',NULL,0,NULL,NULL,NULL,NULL),(22,3014,'123','asdDIv',NULL,NULL,'0.0',NULL,1,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `division` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `entities`
--

DROP TABLE IF EXISTS `entities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `entities` (
  `ID` double NOT NULL AUTO_INCREMENT,
  `Description` varchar(60) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `entities`
--

LOCK TABLES `entities` WRITE;
/*!40000 ALTER TABLE `entities` DISABLE KEYS */;
INSERT INTO `entities` VALUES (1,'contact Type'),(2,'address Type'),(3,'phone Type'),(4,'date Type'),(5,'email Type'),(6,'url type'),(7,'association type');
/*!40000 ALTER TABLE `entities` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `entitydetails`
--

DROP TABLE IF EXISTS `entitydetails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `entitydetails` (
  `ID` double NOT NULL AUTO_INCREMENT,
  `TypeID` double DEFAULT NULL,
  `Description` varchar(60) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=116 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `entitydetails`
--

LOCK TABLES `entitydetails` WRITE;
/*!40000 ALTER TABLE `entitydetails` DISABLE KEYS */;
INSERT INTO `entitydetails` VALUES (1,1,'company'),(2,1,'supplier'),(3,1,'ZMS'),(4,1,'MR'),(15,2,'Office'),(17,3,'Home'),(18,3,'Mobile'),(19,3,'Work'),(20,4,'Birthday'),(21,4,'Anniversary'),(22,4,'Graduation'),(23,5,'Office'),(24,5,'Personal'),(39,6,'Home Page'),(40,1,'Company Page'),(41,6,'Other'),(44,7,'Division'),(45,1,'ceo1'),(108,1,'new type'),(109,1,'new two'),(110,1,'newThree'),(111,1,'newFour'),(112,7,'Supplier'),(113,7,'Company'),(114,2,'Home'),(115,2,'Other');
/*!40000 ALTER TABLE `entitydetails` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `favouritecontacts`
--

DROP TABLE IF EXISTS `favouritecontacts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `favouritecontacts` (
  `userID` double NOT NULL,
  `contactID` double NOT NULL,
  PRIMARY KEY (`userID`,`contactID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `favouritecontacts`
--

LOCK TABLES `favouritecontacts` WRITE;
/*!40000 ALTER TABLE `favouritecontacts` DISABLE KEYS */;
INSERT INTO `favouritecontacts` VALUES (10,3),(10,11),(10,15),(10,18),(10,19),(10,21),(10,35),(10,47),(10,48),(10,189);
/*!40000 ALTER TABLE `favouritecontacts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `financialyear`
--

DROP TABLE IF EXISTS `financialyear`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `financialyear` (
  `ID` double NOT NULL,
  `FromYear` date DEFAULT NULL,
  `ToYear` date DEFAULT NULL,
  `FlgLock` tinyint(3) DEFAULT NULL,
  `FlgActive` tinyint(3) DEFAULT NULL,
  `CreatedBy` double DEFAULT NULL,
  `CreatedOn` datetime DEFAULT NULL,
  `RemarkLock` varchar(45) DEFAULT NULL,
  `RemarkActive` varchar(45) DEFAULT NULL,
  `ModifiedBy` double DEFAULT NULL,
  `ModifiedOn` datetime DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `financialyear`
--

LOCK TABLES `financialyear` WRITE;
/*!40000 ALTER TABLE `financialyear` DISABLE KEYS */;
INSERT INTO `financialyear` VALUES (1,'2014-01-01','2015-01-01',0,1,10,'2015-09-09 12:00:00','e','q',1,'2015-09-15 01:05:51'),(2,'2015-01-01','2016-01-01',0,1,10,NULL,'rrrrrrqqq123','sfasdfs334',10,'2015-10-31 04:40:02');
/*!40000 ALTER TABLE `financialyear` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `goodsreceived`
--

DROP TABLE IF EXISTS `goodsreceived`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `goodsreceived` (
  `ID` double NOT NULL AUTO_INCREMENT,
  `CID` double DEFAULT NULL,
  `SID` double DEFAULT NULL,
  `deleted` int(11) DEFAULT NULL,
  `goodsReceiptDate` date DEFAULT NULL,
  `billNo` varchar(50) DEFAULT NULL,
  `billDate` date DEFAULT NULL,
  `billAmt` decimal(10,1) DEFAULT NULL,
  `LRNo` varchar(50) DEFAULT NULL,
  `LRDate` date DEFAULT NULL,
  `LRDueDate` date DEFAULT NULL,
  `Remark` varchar(60) DEFAULT NULL,
  `payment` int(11) DEFAULT NULL,
  `transporter` int(11) DEFAULT NULL,
  `billDiscount` double DEFAULT NULL,
  `cases` double DEFAULT NULL,
  `quantity` double DEFAULT NULL,
  `free` double DEFAULT NULL,
  `VAT` double DEFAULT NULL,
  `additionExcise` decimal(10,1) DEFAULT NULL,
  `additionEducationCess` decimal(10,1) DEFAULT NULL,
  `additionDebitNote` decimal(10,1) DEFAULT NULL,
  `additionCST` decimal(10,1) DEFAULT NULL,
  `additionOther` decimal(10,1) DEFAULT NULL,
  `deductionTradeDiscount` decimal(10,1) DEFAULT NULL,
  `deductionSpecialDiscount` decimal(10,1) DEFAULT NULL,
  `deductionOctroiReimb` decimal(10,1) DEFAULT NULL,
  `deductionCreditNote` decimal(10,1) DEFAULT NULL,
  `deductionBillDiscount` decimal(10,1) DEFAULT NULL,
  `deductionOther` decimal(10,1) DEFAULT NULL,
  `totalItems` decimal(10,1) DEFAULT NULL,
  `roundOff` decimal(10,1) DEFAULT NULL,
  `freeVAT` decimal(10,1) DEFAULT NULL,
  `netAmount` decimal(10,1) DEFAULT NULL,
  `flgUpdateToAC` int(11) NOT NULL,
  `flgVerified` int(11) DEFAULT NULL,
  `verifiedByID` double DEFAULT NULL,
  `verifiedOn` datetime DEFAULT NULL,
  `CreatedBy` double DEFAULT NULL,
  `CreatedOn` datetime DEFAULT NULL,
  `ModifiedBy` double DEFAULT NULL,
  `ModifiedOn` datetime DEFAULT NULL,
  `flgLedger` tinyint(4) DEFAULT NULL,
  `ledgerBy` double DEFAULT NULL,
  `ledgerOn` datetime DEFAULT NULL,
  `flgStock` tinyint(4) DEFAULT NULL,
  `stockBy` double DEFAULT NULL,
  `stockOn` datetime DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=96 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `goodsreceived`
--

LOCK TABLES `goodsreceived` WRITE;
/*!40000 ALTER TABLE `goodsreceived` DISABLE KEYS */;
INSERT INTO `goodsreceived` VALUES (13,1000,1,0,'2015-05-11','12','2015-09-12',13.0,'12','2015-09-12','2015-09-12','remark',1,2,343,42,0,0,12,1212.0,12.0,NULL,12.0,1.0,21.0,1.0,12.0,NULL,1.0,12.0,NULL,112.0,21.0,21.0,0,0,NULL,NULL,10,'2015-05-18 18:55:23',NULL,NULL,NULL,1,NULL,NULL,NULL,NULL),(14,1000,1,0,'2015-05-11','12','2015-09-12',13.0,'12','2015-09-12','2015-09-12','remark',1,2,343,42,0,0,12,1212.0,12.0,NULL,12.0,1.0,21.0,1.0,12.0,NULL,1.0,12.0,NULL,112.0,21.0,21.0,0,0,NULL,NULL,10,'2015-05-18 19:05:28',NULL,NULL,NULL,2,NULL,NULL,NULL,NULL),(15,1000,1,0,'2015-05-11','12','2015-09-12',13.0,'12','2015-09-12','2015-09-12','remark',1,2,343,42,0,0,12,1212.0,12.0,NULL,12.0,1.0,21.0,1.0,12.0,NULL,1.0,12.0,NULL,112.0,21.0,21.0,0,0,NULL,NULL,10,'2015-05-18 19:10:35',NULL,NULL,NULL,2,NULL,NULL,NULL,NULL),(16,1000,1,0,'2015-05-19','32','2015-07-02',231.0,'12','2015-07-02','2015-07-02',NULL,0,2,12,1,0,0,2,2.0,2.0,NULL,1.0,1.0,2.0,2.0,2.0,NULL,1.0,1.0,NULL,2.0,2.0,2.0,1,0,NULL,NULL,10,'2015-05-19 10:25:28',NULL,NULL,NULL,3,NULL,NULL,10,NULL),(17,1000,1,0,'2015-05-12','11','2015-07-02',22.0,'112','2015-07-02','2015-07-02','test',1,2,11,1,0,0,1,1.0,1.0,NULL,12.0,1.0,1.0,1.0,1.0,NULL,1.0,1.0,NULL,1.0,1.0,1.0,0,0,NULL,NULL,10,'2015-05-19 10:48:45',NULL,NULL,NULL,4,NULL,NULL,10,NULL),(18,1000,1,0,'2015-05-21',NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,3,0,0,0,0,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,1,10,NULL,10,'2015-05-21 11:29:30',10,'2015-10-31 12:36:59',0,NULL,NULL,0,NULL,NULL),(22,1000,1,0,'2015-06-08','122',NULL,NULL,NULL,NULL,NULL,'wwe',1,1,0,0,0,0,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,1,NULL,NULL,10,'2015-05-21 14:47:02',NULL,NULL,NULL,5,NULL,NULL,10,NULL),(23,1000,1,0,'2015-06-08','12344',NULL,NULL,NULL,NULL,NULL,'sf',1,2,0,0,0,0,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,1,NULL,NULL,10,'2015-05-21 14:55:29',NULL,NULL,NULL,5,NULL,NULL,10,NULL),(24,1000,1,0,'2015-06-08','12344',NULL,NULL,NULL,NULL,NULL,'sf',0,2,0,0,0,0,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,1,NULL,NULL,10,'2015-05-21 14:56:20',NULL,NULL,NULL,5,NULL,NULL,10,NULL),(25,1000,1,0,'2015-05-20','12344',NULL,NULL,NULL,NULL,NULL,'sf',1,3,0,0,0,0,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,1,NULL,NULL,10,'2015-05-21 15:02:23',NULL,NULL,NULL,5,NULL,NULL,10,NULL),(26,1000,1,0,'2015-06-08','222',NULL,NULL,NULL,NULL,NULL,NULL,0,1,0,0,0,0,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,0,NULL,NULL,10,'2015-05-21 15:36:15',NULL,NULL,NULL,5,NULL,NULL,10,NULL),(27,1000,1,0,'2015-05-21','222',NULL,NULL,NULL,NULL,NULL,NULL,0,2,0,0,0,0,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,0,NULL,NULL,10,'2015-05-21 15:37:21',NULL,NULL,NULL,5,NULL,NULL,10,NULL),(28,1000,1,0,'2015-05-21','222',NULL,NULL,NULL,NULL,NULL,NULL,0,1,0,0,0,0,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,1,NULL,NULL,10,'2015-05-21 15:49:20',NULL,NULL,NULL,5,NULL,NULL,10,NULL),(29,1000,1,0,'2015-05-21','222',NULL,NULL,NULL,NULL,NULL,NULL,0,1,0,0,0,0,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,1,NULL,NULL,10,'2015-05-21 15:51:10',NULL,NULL,NULL,5,NULL,NULL,10,NULL),(30,1000,1,0,'2015-05-21','222',NULL,NULL,NULL,NULL,NULL,NULL,0,1,0,0,0,0,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,1,NULL,NULL,10,'2015-05-21 15:55:40',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(31,1000,1,0,'2015-05-21','222',NULL,NULL,NULL,NULL,NULL,NULL,0,1,0,0,0,0,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,1,NULL,NULL,10,'2015-05-21 17:16:53',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(32,1000,1,0,'2015-05-21','222',NULL,NULL,NULL,NULL,NULL,NULL,0,1,0,0,0,0,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,1,NULL,NULL,10,'2015-05-21 17:18:36',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(33,1000,1,0,'2015-05-21','222',NULL,NULL,NULL,NULL,NULL,NULL,0,2,0,0,0,0,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,1,NULL,NULL,10,'2015-05-21 17:19:34',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(34,1000,1,0,'2015-05-21','2144','2015-04-21',1000.0,'21','2015-04-21','2015-04-21','remark',0,1,22,1,0,0,1,1.0,1.0,NULL,1.0,1.0,1.0,1.0,1.0,NULL,1.0,1.0,NULL,1.0,1.0,NULL,1,1,NULL,NULL,10,'2015-05-21 18:12:11',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(35,1000,1,0,'2015-05-21','2133','2015-04-21',1000.0,'21','2015-04-21','2015-04-21','remark',0,1,22,1,0,0,1,1.0,1.0,NULL,1.0,1.0,1.0,1.0,1.0,NULL,1.0,1.0,NULL,1.0,1.0,NULL,1,1,NULL,NULL,10,'2015-05-21 18:19:44',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(36,1000,1,0,'2015-05-21','2133','2015-04-21',1000.0,'21','2015-04-21','2015-04-21','remark',0,1,22,1,0,0,1,1.0,1.0,NULL,1.0,1.0,1.0,1.0,1.0,NULL,1.0,1.0,NULL,1.0,1.0,NULL,1,1,NULL,NULL,10,'2015-05-21 18:36:53',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(37,1000,1,0,'2015-05-21','2133','2015-04-21',1000.0,'21','2015-04-21','2015-04-21','remark',0,1,22,1,0,0,1,1.0,1.0,NULL,1.0,1.0,1.0,1.0,1.0,NULL,1.0,1.0,NULL,1.0,1.0,NULL,1,1,NULL,NULL,10,'2015-05-21 18:37:41',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(38,1000,1,0,'2015-05-21','2133','2015-04-21',1000.0,'21','2015-04-21','2015-04-21','remark',0,1,22,1,0,0,1,1.0,1.0,NULL,1.0,1.0,1.0,1.0,1.0,NULL,1.0,1.0,NULL,1.0,1.0,NULL,0,1,NULL,NULL,10,'2015-05-21 18:46:35',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(39,1000,1,0,'2015-05-21','2133','2015-04-21',1000.0,'21','2015-04-21','2015-04-21','remark',0,1,22,1,0,0,1,1.0,1.0,NULL,1.0,1.0,1.0,1.0,1.0,NULL,1.0,1.0,NULL,1.0,1.0,NULL,0,1,NULL,NULL,10,'2015-05-21 18:47:59',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(40,1000,1,0,NULL,'4000',NULL,450.0,'214',NULL,NULL,'remark',0,1,228,11,0,0,221,331.0,441.0,NULL,551.0,661.0,221.0,331.0,441.0,NULL,551.0,661.0,NULL,881.0,771.0,NULL,0,1,NULL,NULL,10,'2015-05-22 10:47:34',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(41,1000,1,0,'2015-05-22','34555',NULL,234.0,'222',NULL,NULL,'adsdas',0,1,21,21,0,0,110,22.0,33.0,NULL,44.0,55.0,11.0,22.0,33.0,NULL,44.0,55.0,NULL,77.0,66.0,NULL,1,1,NULL,NULL,10,'2015-05-22 10:49:10',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(42,1000,1,0,'2015-05-22','34555','2015-09-22',234.0,'222','2015-09-22','2015-09-22','adsdas',0,1,21,21,0,0,110,22.0,33.0,NULL,44.0,55.0,11.0,22.0,33.0,NULL,44.0,55.0,NULL,77.0,66.0,NULL,0,1,NULL,NULL,10,'2015-05-22 10:52:06',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(43,1000,1,0,'2015-05-22','43',NULL,NULL,'43',NULL,NULL,'cfv',0,1,12,2,0,0,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,1,NULL,NULL,10,'2015-05-22 14:20:36',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(44,1000,1,0,'2015-05-22','43',NULL,NULL,'43',NULL,NULL,'cfvdas123',0,1,12,2,0,0,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,1,10,NULL,10,'2015-05-22 14:35:22',10,'2015-10-28 22:19:19',NULL,NULL,NULL,NULL,NULL,NULL),(45,1000,1,0,'2015-05-22','123',NULL,NULL,'123',NULL,NULL,'3df',1,3,213,23,0,0,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,1,10,'2015-10-29 10:37:48',10,'2015-05-22 15:36:32',10,'2015-10-29 10:37:50',NULL,NULL,NULL,NULL,NULL,NULL),(46,1000,1,0,'2015-05-22','222',NULL,NULL,'11',NULL,NULL,NULL,0,1,0,0,0,0,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,1,0,NULL,10,'2015-05-22 15:49:19',10,'2015-10-29 11:04:56',NULL,NULL,NULL,NULL,NULL,NULL),(47,1000,1,0,'2015-05-22','11',NULL,NULL,NULL,NULL,NULL,NULL,1,1,0,0,0,0,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,1,NULL,NULL,10,'2015-05-22 19:40:08',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(48,1000,2,0,'2015-05-22','33',NULL,NULL,NULL,NULL,NULL,'dsf',0,1,0,0,0,0,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,1,NULL,NULL,10,'2015-05-22 19:51:42',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(49,1000,1,0,'2015-05-22','12',NULL,NULL,'12',NULL,NULL,NULL,1,3,0,0,0,0,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,1,NULL,NULL,10,'2015-05-22 19:58:29',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(50,1000,2,0,'2015-06-05','3434','2013-02-12',9000.0,'4433','2015-09-19','2018-09-07','remark',0,1,767,7,0,0,3,3.0,3.0,NULL,3.0,3.0,3.0,3.0,3.0,NULL,3.0,3.0,NULL,3.0,3.0,NULL,1,1,NULL,NULL,10,'2015-06-05 15:06:57',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(51,1000,2,0,'2015-06-08','112233',NULL,12.0,NULL,NULL,NULL,NULL,0,1,23,2,0,0,1,1.0,1.0,NULL,1.0,1.0,1.0,1.0,NULL,NULL,NULL,1.0,NULL,1.0,1.0,NULL,1,1,NULL,NULL,10,'2015-06-08 10:36:25',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(52,1000,2,0,'2015-06-08','566566',NULL,NULL,NULL,NULL,NULL,'safds',0,1,0,0,0,0,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,1,NULL,NULL,10,'2015-06-08 10:53:49',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(53,1000,2,0,'2015-06-06',NULL,NULL,NULL,NULL,NULL,NULL,'aaa',0,2,0,0,0,0,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,0,NULL,NULL,10,'2015-06-08 17:42:13',10,'2015-10-29 08:25:37',NULL,NULL,NULL,NULL,NULL,NULL),(54,1000,2,0,'2015-06-04',NULL,NULL,NULL,NULL,NULL,NULL,'sad',0,1,0,0,0,0,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,0,NULL,NULL,10,'2015-06-08 18:02:00',10,'2015-10-29 08:25:02',NULL,NULL,NULL,NULL,NULL,NULL),(55,1000,2,0,'2015-06-04',NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,1,0,0,0,0,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,0,NULL,NULL,10,'2015-06-08 18:02:52',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(56,1000,1,0,'2015-06-07',NULL,NULL,NULL,NULL,NULL,NULL,'asd',0,1,0,0,0,0,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,1,10,NULL,10,'2015-06-08 18:12:29',10,'2015-10-28 22:19:35',NULL,NULL,NULL,NULL,NULL,NULL),(57,1000,1,0,'2015-06-08','22','2015-10-29',1300.0,'22','2015-10-29','2015-10-31','aad',1,3,123,12,0,0,13,11.0,11.0,NULL,11.0,11.0,33.0,11.0,11.0,NULL,11.0,11.0,NULL,45.0,234.0,66.0,1,0,NULL,NULL,10,'2015-06-08 19:24:31',10,'2015-10-29 00:15:30',NULL,NULL,NULL,NULL,NULL,NULL),(58,1000,2,0,'2015-06-10','1111',NULL,NULL,NULL,NULL,NULL,'saa878',0,1,23,3,0,0,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,0,NULL,NULL,10,'2015-06-10 12:27:55',10,'2015-10-29 08:22:45',NULL,NULL,NULL,NULL,NULL,NULL),(59,1000,1,0,'2015-06-10','4444',NULL,NULL,NULL,NULL,NULL,NULL,0,1,0,0,0,0,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,1,10,'2015-10-29 10:43:17',10,'2015-06-10 12:57:13',10,'2015-10-29 10:46:58',NULL,NULL,NULL,NULL,NULL,NULL),(60,1000,1,0,'2015-06-10','99',NULL,666666.0,NULL,NULL,NULL,NULL,0,1,66,66,0,0,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,1,NULL,NULL,10,'2015-06-10 14:33:48',10,'2015-06-10 14:37:37',NULL,NULL,NULL,NULL,NULL,NULL),(61,1000,2,0,'2015-06-10','89899',NULL,NULL,NULL,NULL,NULL,NULL,0,1,0,0,0,0,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,1,NULL,NULL,10,'2015-06-10 14:40:47',10,'2015-06-12 15:03:06',NULL,NULL,NULL,NULL,NULL,NULL),(62,1000,2,0,'2015-06-11','3453',NULL,NULL,NULL,NULL,NULL,'ds',0,1,0,0,0,0,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,1,0,NULL,10,'2015-06-11 11:13:07',10,'2015-06-16 15:30:50',NULL,NULL,NULL,NULL,NULL,NULL),(63,1000,1,0,'2015-06-11','555','2015-06-11',NULL,NULL,'2015-09-12','2015-09-12','sd',0,1,0,0,0,0,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,1,NULL,NULL,10,'2015-06-11 11:16:58',10,'2015-06-12 13:09:30',NULL,NULL,NULL,NULL,NULL,NULL),(64,1000,1,0,'2015-06-11','5555',NULL,NULL,NULL,NULL,NULL,'sdfg',0,1,0,0,0,0,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,1,NULL,NULL,10,'2015-06-11 12:20:20',10,'2015-06-11 12:23:38',NULL,NULL,NULL,NULL,NULL,NULL),(65,2000,2,0,'2015-06-11','32','2015-06-11',3334.0,'222','0000-00-00','2015-06-11','wdf',0,1,11,1,0,0,1,1.0,1.0,NULL,1.0,1.0,1.0,1.0,1.0,NULL,1.0,1.0,NULL,1.0,1.0,NULL,0,1,10,NULL,10,'2015-06-11 19:12:53',10,'2015-08-06 15:29:12',NULL,NULL,NULL,NULL,NULL,NULL),(68,3000,5,0,'2015-06-12','21','2015-06-12',NULL,NULL,NULL,'2015-06-12','ad',0,1,2,2,0,0,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,1,10,'2015-06-17 10:42:29',10,'2015-06-12 17:54:49',10,'2015-06-17 10:42:34',NULL,NULL,NULL,NULL,NULL,NULL),(69,1000,2,NULL,'2015-06-18','1','2015-06-11',12.0,'334','2015-06-11','2015-06-17','dsgf',0,1,2,2,0,0,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,1,10,NULL,10,'2015-06-17 10:44:02',10,'2015-08-06 15:34:22',NULL,NULL,NULL,NULL,NULL,NULL),(70,1000,2,NULL,'2015-06-17','342','2015-06-17',NULL,'34','2015-06-17','2015-06-17','sdf',0,1,65,6,0,0,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,1,10,NULL,10,'2015-06-17 10:52:07',10,'2015-07-10 14:12:18',NULL,NULL,NULL,NULL,NULL,NULL),(71,1000,2,NULL,'2015-07-10','30000','2015-07-10',234.0,'45','2015-07-10','2015-07-09','sdfs',1,1,33,3,0,0,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,0,NULL,NULL,10,'2015-07-10 13:01:52',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(72,2000,7,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,1,0,0,0,0,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,0,NULL,NULL,10,'2015-07-16 11:36:28',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(73,0,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,0,0,0,0,0,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,0,NULL,NULL,10,'2015-07-16 15:24:33',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(74,0,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,0,0,0,0,0,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,0,NULL,NULL,10,'2015-07-16 15:36:40',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(75,0,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,0,0,0,0,0,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,0,NULL,NULL,10,'2015-07-16 15:41:12',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(76,3005,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,1,0,0,0,0,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,1,10,NULL,10,'2015-07-16 16:05:39',10,'2015-07-17 12:21:03',NULL,NULL,NULL,NULL,NULL,NULL),(77,1000,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,1,0,0,0,0,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,0,NULL,NULL,10,'2015-07-16 16:26:09',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(78,3005,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,0,0,0,0,0,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,0,NULL,NULL,10,'2015-07-16 16:31:46',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(79,1000,2,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,1,0,0,0,0,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,0,NULL,NULL,10,'2015-07-16 16:58:24',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(80,1000,2,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,0,0,0,0,0,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,1,10,NULL,10,'2015-07-16 17:06:24',10,'2015-08-06 15:35:36',NULL,NULL,NULL,NULL,NULL,NULL),(81,1000,0,NULL,'2015-07-17','21','2015-07-16',NULL,'22','2015-07-25','2015-07-23',NULL,2,1,0,0,0,0,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,1,10,NULL,10,'2015-07-17 12:22:32',10,'2015-07-17 16:33:06',NULL,NULL,NULL,NULL,NULL,NULL),(82,2000,7,NULL,'2015-07-17','1','2015-07-10',111.0,'11','2015-07-23','2015-07-01',NULL,2,1,0,0,0,0,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,1,10,NULL,10,'2015-07-17 12:27:01',10,'2015-07-17 12:31:34',NULL,NULL,NULL,NULL,NULL,NULL),(83,2000,0,NULL,'2015-07-17','1','2015-07-17',11.0,'1','2015-07-10','2015-07-03',NULL,0,0,0,0,0,0,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,1,10,NULL,10,'2015-07-17 17:31:36',10,'2015-07-17 17:33:19',NULL,NULL,NULL,NULL,NULL,NULL),(84,2000,7,NULL,'2015-07-16','6','2015-07-17',6.0,'6','2015-07-25','2015-07-16',NULL,2,2,0,0,0,0,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,1,10,NULL,10,'2015-07-17 17:38:47',10,'2015-07-17 17:39:13',NULL,NULL,NULL,NULL,NULL,NULL),(85,2000,10,NULL,'2015-07-17',NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,0,0,0,0,0,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,0,NULL,NULL,10,'2015-07-17 17:53:19',10,'2015-07-17 17:53:36',NULL,NULL,NULL,NULL,NULL,NULL),(86,2000,7,NULL,'2015-07-17',NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,0,0,0,0,0,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,1,10,NULL,10,'2015-07-17 17:54:46',10,'2015-10-29 09:25:06',NULL,NULL,NULL,NULL,NULL,NULL),(87,2000,7,NULL,'2015-07-11',NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,0,0,0,0,0,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,1,10,'2015-08-06 15:51:00',10,'2015-07-17 18:08:11',10,'2015-08-06 15:51:09',NULL,NULL,NULL,NULL,NULL,NULL),(88,1000,1,NULL,'2015-10-29','123','2015-10-29',123.0,'11','2015-10-29','2015-10-29','123',2,1,123,11,0,0,1,2.0,3.0,NULL,4.0,5.0,1.0,2.0,3.0,NULL,4.0,5.0,NULL,6.0,5.0,6.0,1,0,NULL,NULL,10,'2015-10-29 17:38:58',10,'2015-10-29 17:40:30',NULL,NULL,NULL,NULL,NULL,NULL),(89,1000,2,NULL,'2015-10-29','123','2015-10-29',4444.0,'3333','2015-10-31','2015-10-29','wqwq',2,1,12,2,0,0,23,22.0,2.0,NULL,22.0,22.0,123.0,22.0,22.0,NULL,22.0,22.0,NULL,222.0,22.0,22.0,1,0,NULL,NULL,10,'2015-10-29 17:53:32',10,'2015-10-29 18:07:00',NULL,NULL,NULL,NULL,NULL,NULL),(90,1000,1,NULL,NULL,'3','2015-10-30',3.0,'3','2015-10-30','2015-10-30',NULL,2,1,33,33,0,0,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,0,NULL,NULL,10,'2015-10-30 09:52:15',10,'2015-10-30 09:52:43',NULL,NULL,NULL,NULL,NULL,NULL),(91,1000,1,NULL,NULL,'444',NULL,444.0,'444',NULL,'0000-00-00','444',1,1,444,444,0,0,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,0,NULL,NULL,10,'2015-10-30 09:54:47',10,'2015-10-30 09:55:37',NULL,NULL,NULL,NULL,NULL,NULL),(92,1000,1,NULL,'2015-10-30','11','2015-10-30',11.0,'11','2015-10-30','2015-10-30','11',2,1,11,11,0,0,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,0,NULL,NULL,10,'2015-10-30 10:00:29',10,'2015-10-30 10:01:32',NULL,NULL,NULL,NULL,NULL,NULL),(93,1000,1,NULL,'2015-10-30',NULL,'2015-10-30',NULL,NULL,'2015-10-15',NULL,NULL,0,0,0,0,0,0,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,0,NULL,NULL,10,'2015-10-30 10:59:02',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(94,1000,1,NULL,'2015-10-15',NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,0,0,0,0,0,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,0,NULL,NULL,10,'2015-10-31 14:46:48',10,'2015-10-31 14:51:28',1,0,NULL,0,NULL,NULL),(95,1000,1,NULL,'2015-10-16',NULL,NULL,NULL,NULL,NULL,NULL,NULL,2,2,0,0,0,0,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,1,10,'2015-10-31 03:36:10',10,'2015-10-31 15:27:01',10,'2015-10-31 15:47:12',1,0,NULL,1,10,'2015-10-31 15:47:10');
/*!40000 ALTER TABLE `goodsreceived` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `licence`
--

DROP TABLE IF EXISTS `licence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `licence` (
  `licenceType` double NOT NULL AUTO_INCREMENT,
  `Name` varchar(50) DEFAULT NULL,
  `category` varchar(50) DEFAULT NULL,
  `Description` varchar(100) DEFAULT NULL,
  `Remark` varchar(150) DEFAULT NULL,
  `flgActive` int(11) DEFAULT NULL,
  `CreatedBy` double DEFAULT NULL,
  `CreatedOn` datetime DEFAULT NULL,
  `ModifiedBy` double DEFAULT NULL,
  `ModifiedOn` datetime DEFAULT NULL,
  PRIMARY KEY (`licenceType`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `licence`
--

LOCK TABLES `licence` WRITE;
/*!40000 ALTER TABLE `licence` DISABLE KEYS */;
INSERT INTO `licence` VALUES (0,'Drug - Regular','Medicine','Prescription Medicine',NULL,1,10,'2015-03-04 16:27:30',NULL,NULL),(1,'FDS','Food','Food Drug',NULL,1,10,'2015-03-04 16:27:30',NULL,NULL),(2,'Schedule X','Medicine','Schedule Drugs',NULL,1,10,'2015-03-04 16:27:30',NULL,NULL);
/*!40000 ALTER TABLE `licence` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `managereceipt`
--

DROP TABLE IF EXISTS `managereceipt`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `managereceipt` (
  `ID` double NOT NULL AUTO_INCREMENT,
  `SalesmanID` double DEFAULT NULL,
  `Date` date DEFAULT NULL,
  `ReceiptFrom` int(11) DEFAULT NULL,
  `ReceiptTo` int(11) DEFAULT NULL,
  `Remark` varchar(45) DEFAULT NULL,
  `IssuedBy` double DEFAULT NULL,
  `IssuedOn` datetime DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `managereceipt`
--

LOCK TABLES `managereceipt` WRITE;
/*!40000 ALTER TABLE `managereceipt` DISABLE KEYS */;
INSERT INTO `managereceipt` VALUES (9,1,'2015-09-15',12,30,'rr',1,'2015-09-15 11:55:00'),(10,2,'2015-09-15',31,40,'remark',1,'2015-09-15 11:57:38'),(11,3,'2015-10-31',3123,12312,'adasd',10,'2015-10-31 16:51:24');
/*!40000 ALTER TABLE `managereceipt` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `menu`
--

DROP TABLE IF EXISTS `menu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `menu` (
  `ID` int(11) NOT NULL,
  `Description` varchar(60) DEFAULT NULL,
  `Position` int(11) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `menu`
--

LOCK TABLES `menu` WRITE;
/*!40000 ALTER TABLE `menu` DISABLE KEYS */;
INSERT INTO `menu` VALUES (1,'menu 1',1),(2,'menu 2',2),(3,'menu 3',3),(4,'menu 4',4),(5,'menu 5',5);
/*!40000 ALTER TABLE `menu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `menumaster`
--

DROP TABLE IF EXISTS `menumaster`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `menumaster` (
  `menu_id` int(11) NOT NULL,
  `PID` int(11) DEFAULT NULL,
  `menu_name` varchar(100) DEFAULT NULL,
  `menu_parent_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`menu_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `menumaster`
--

LOCK TABLES `menumaster` WRITE;
/*!40000 ALTER TABLE `menumaster` DISABLE KEYS */;
INSERT INTO `menumaster` VALUES (0,NULL,NULL,NULL),(1,NULL,'Sales',NULL),(2,NULL,'Stock Management',NULL),(3,NULL,'Return Management',NULL),(4,NULL,'Accounting',NULL),(5,NULL,'Utility',NULL),(6,NULL,'Reporting Centre',NULL),(7,NULL,'Masters',NULL),(8,NULL,'Bookmarks',NULL),(9,6,'Create or Modify Invoice',1),(10,67,'Create or Modify Challan',1),(13,1,'Create or Modify PO',2),(14,44,'Goods Receipt',2),(15,48,'Stock Manager',2),(16,52,'Return Register',3),(17,53,'Goods Return',3),(18,57,'Company Claim',3),(23,65,'Locksmith',5),(24,61,'People Manager',5),(25,NULL,'Control Panel',5),(26,88,'System Value',25),(28,80,'Report Manger',6),(29,15,'Company',7),(30,20,'Supplier',7),(31,24,'Division ',7),(32,28,'Product',7),(33,32,'Content Master',7),(34,11,'Customer',7),(35,36,'Area',7),(36,40,'Route',7),(38,82,'Release Notes',9),(39,83,'FAQs',9),(40,84,'Known Issues',9),(41,85,'Site Map',9),(42,86,'About Us',9),(43,87,'Contact Us',9),(44,92,'Manage Active Users',5),(45,93,'System Permissions & Role',5),(46,95,'Miscellaneous',25),(50,126,'Credit Note Register',4),(51,122,'Bussiness Details',7),(52,NULL,'Help',NULL),(53,136,'About Us',52),(54,137,'FAQs',52),(55,138,'Known Issues',52),(56,139,'Release Notes',52),(57,140,'Site Map',52),(58,141,'Debit Note Register',4),(59,142,' Accounting Master',4),(60,143,'Accounting Group',4),(61,144,'Receipts and Payments',4),(62,145,'Cheque Printing',4),(63,146,' Bank Deposite Slip',4),(64,147,'Cheque Bounce Return Entry',4),(65,151,'Stock Audit',2),(66,126,'Credit Note Register',1),(67,126,'Credit Note Register',3),(68,124,'Purchase Order Register',2),(69,157,'Goods Receipt Register',2),(70,161,'Help',52),(71,159,'System Parameter',25);
/*!40000 ALTER TABLE `menumaster` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `menuorder`
--

DROP TABLE IF EXISTS `menuorder`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `menuorder` (
  `ID` int(11) NOT NULL,
  `MID` int(11) DEFAULT NULL,
  `PID` int(11) DEFAULT NULL,
  `SMID` int(11) DEFAULT NULL,
  `Main` int(11) DEFAULT NULL,
  `Position` int(11) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `menuorder`
--

LOCK TABLES `menuorder` WRITE;
/*!40000 ALTER TABLE `menuorder` DISABLE KEYS */;
INSERT INTO `menuorder` VALUES (1,1,NULL,NULL,1,1),(2,1,1,NULL,0,1),(3,1,2,NULL,0,2),(4,1,3,NULL,0,3),(5,NULL,4,NULL,1,2),(6,2,NULL,NULL,1,3),(7,2,NULL,3,0,1),(8,2,7,NULL,0,2),(9,5,NULL,NULL,1,4),(10,5,10,NULL,0,1),(11,5,NULL,4,0,2),(12,3,NULL,NULL,0,NULL),(13,3,5,NULL,0,1),(14,3,6,NULL,0,2),(15,3,NULL,4,0,3),(16,3,9,NULL,0,4),(17,4,NULL,NULL,0,NULL),(18,4,1,NULL,0,1),(19,4,8,NULL,0,2);
/*!40000 ALTER TABLE `menuorder` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mr`
--

DROP TABLE IF EXISTS `mr`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mr` (
  `ID` double NOT NULL AUTO_INCREMENT,
  `DID` double NOT NULL,
  `CID` double NOT NULL,
  `Name` varchar(50) DEFAULT NULL,
  `Remark` varchar(150) DEFAULT NULL,
  `Phone` varchar(15) DEFAULT NULL,
  `Email` varchar(50) DEFAULT NULL,
  `Manager` varchar(50) DEFAULT NULL,
  `mgrPhone` varchar(15) DEFAULT NULL,
  `mgrEmail` varchar(50) DEFAULT NULL,
  `flgActive` int(11) DEFAULT NULL,
  `flgEmail` int(11) DEFAULT NULL,
  `CreatedBy` double DEFAULT NULL,
  `CreatedOn` datetime DEFAULT NULL,
  `ModifiedBy` double DEFAULT NULL,
  `ModifiedOn` datetime DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mr`
--

LOCK TABLES `mr` WRITE;
/*!40000 ALTER TABLE `mr` DISABLE KEYS */;
INSERT INTO `mr` VALUES (1,1,1000,'Tushar',NULL,'0.0','tushars@mail.com',NULL,'0.0','TmanagerId@gmail.com',1,1,10,'2015-03-04 16:27:30',NULL,NULL),(2,2,1000,'Kishor',NULL,'0.0',NULL,NULL,'0.0',NULL,1,0,10,'2015-03-04 16:27:30',NULL,NULL),(3,4,3000,'Rahul',NULL,NULL,NULL,NULL,NULL,NULL,1,0,10,'2015-03-04 16:27:30',NULL,NULL),(4,3,2000,'Sachin',NULL,NULL,NULL,NULL,NULL,NULL,1,1,10,NULL,NULL,NULL);
/*!40000 ALTER TABLE `mr` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `narration`
--

DROP TABLE IF EXISTS `narration`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `narration` (
  `ID` double NOT NULL AUTO_INCREMENT,
  `Narration` varchar(90) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=137 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `narration`
--

LOCK TABLES `narration` WRITE;
/*!40000 ALTER TABLE `narration` DISABLE KEYS */;
INSERT INTO `narration` VALUES (132,'efffffddddddd'),(133,'qqqzzzz'),(135,'aeed'),(136,'test');
/*!40000 ALTER TABLE `narration` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `owner`
--

DROP TABLE IF EXISTS `owner`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `owner` (
  `ID` double NOT NULL,
  `Product` varchar(95) DEFAULT NULL,
  `NoOfUsers` int(11) DEFAULT NULL,
  `ProductType` int(11) NOT NULL COMMENT '0 - silver , 1-  Gold  , 2 - Platinum ',
  `ProductVersion` varchar(15) NOT NULL,
  `BusinessName` varchar(100) NOT NULL,
  `Owner` varchar(50) DEFAULT NULL,
  `Remarks` varchar(150) DEFAULT NULL,
  `AddrLine1` varchar(50) DEFAULT NULL,
  `AddrLine2` varchar(50) DEFAULT NULL,
  `City` int(11) DEFAULT NULL,
  `ContactPerson` varchar(50) DEFAULT NULL,
  `Phone` varchar(15) DEFAULT NULL,
  `Fax` int(11) DEFAULT NULL,
  `Email` varchar(45) DEFAULT NULL,
  `CreatedBy` double DEFAULT NULL,
  `CreatedOn` datetime DEFAULT NULL,
  `ModifiedBy` double DEFAULT NULL,
  `ModifiedOn` datetime DEFAULT NULL,
  `Passkey` varchar(45) DEFAULT NULL,
  `flgSystemLock` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Only single record per installation.';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `owner`
--

LOCK TABLES `owner` WRITE;
/*!40000 ALTER TABLE `owner` DISABLE KEYS */;
INSERT INTO `owner` VALUES (1001,'Purpleaid Wholesale',2,2,'1.0.10','Suprabha Enterprises','Ketan Sapkal',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `owner` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `permission`
--

DROP TABLE IF EXISTS `permission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `permission` (
  `ID` int(11) NOT NULL,
  `permissionGroupID` double DEFAULT NULL,
  `Description` varchar(90) DEFAULT NULL,
  `Type` int(11) DEFAULT NULL,
  `Permission` varchar(90) DEFAULT NULL,
  `flgActive` tinyint(11) DEFAULT NULL,
  `url` varchar(95) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `permission`
--

LOCK TABLES `permission` WRITE;
/*!40000 ALTER TABLE `permission` DISABLE KEYS */;
INSERT INTO `permission` VALUES (1,1,' Purchase Order',0,'View Purchase Order',1,'partials/purchase_2.jsp'),(2,1,'Create Purchase Order',1,'Create new purchase order',1,'partials/purchase_2.jsp'),(3,1,'Modify Purchase Order',1,'Mark a purchase as VOID',1,'partials/purchase_2.jsp'),(4,1,'Delete Purchase Order',1,'Change purchase date',1,'partials/purchase_2.jsp'),(5,1,'Modify Purchase Date',1,'Allow changes to purchase date',1,'partials/purchase_2.jsp'),(6,2,'View Invoice',0,'Sale Invoice',1,NULL),(7,2,'New Invoice',1,'Create new Invoice',1,NULL),(8,2,'Delete Invoice',1,'Mark a Invoice as VOID',1,NULL),(9,2,'Invoice Date',1,'Change Invoice date',1,NULL),(10,2,'Edit Invoice',1,'Edit existing Invoice',1,NULL),(11,3,'Customer',0,'View Customer module',1,'partials/master_customer.jsp'),(12,3,'New Customer',1,'Create new Customer',1,'partials/master_customer.jsp'),(13,3,'Delete Customer',1,'Mark a Customer as VOID',1,'partials/master_customer.jsp'),(14,3,'Edit Customer',1,'Edit existing Customer',1,'partials/master_customer.jsp'),(15,4,'Company',0,'View Company module',1,'partials/master_company.jsp'),(16,4,'New Company',1,'Create new Company',1,'partials/master_company.jsp'),(17,4,'Delete Company',1,'Mark a Company as VOID',1,'partials/master_company.jsp'),(18,4,'Edit Company',1,'Edit existing Company',1,'partials/master_company.jsp'),(20,5,'Supplier',0,'View Supplier module',1,'partials/master_supplier.jsp'),(21,5,'New Supplier',1,'Create new Supplier',1,'partials/master_supplier.jsp'),(22,5,'Delete Supplier',1,'Mark a Supplier as VOID',1,'partials/master_supplier.jsp'),(23,5,'Edit Supplier',1,'Edit existing Supplier',1,'partials/master_supplier.jsp'),(24,6,'Division',0,'View Division module',1,'partials/master_division.jsp'),(25,6,'New Division',1,'Create new Division',1,'partials/master_division.jsp'),(26,6,'Delete Division',1,'Mark a Division as VOID',1,'partials/master_division.jsp'),(27,6,'Edit Division',1,'Edit existing Division',1,'partials/master_division.jsp'),(28,7,'Product',0,'View Product module',1,'partials/master_product.jsp'),(29,7,'New Product',1,'Create new Product',1,'partials/master_product.jsp'),(30,7,'Delete Product',1,'Mark a Product as VOID',1,'partials/master_product.jsp'),(31,7,'Edit Product',1,'Edit existing Product',1,'partials/master_product.jsp'),(32,8,'Content Manager',0,'View Content Manager module',1,'partials/master_product_content.jsp'),(33,8,'New Content Manager',1,'Create new Content Manager ',1,'partials/master_product_content.jsp'),(34,8,'Delete Content Manager',1,'Mark a Content Manager as VOID',1,'partials/master_product_content.jsp'),(35,8,'Edit Content Manager',1,'Edit existing Content Manager',1,'partials/master_product_content.jsp'),(36,9,'Area',0,'View Area  module',1,'partials/master_area.jsp'),(37,9,'New Area',1,'Create new Area',1,'partials/master_area.jsp'),(38,9,'Delete Area',1,'Mark a Area as VOID',1,'partials/master_area.jsp'),(39,9,'Edit Area',1,'Edit existing Area',1,'partials/master_area.jsp'),(40,10,'Route',0,'View Route  module',1,'partials/master_route.jsp'),(41,10,'New Route',1,'Create new Route',1,'partials/master_route.jsp'),(42,10,'Delete Route',1,'Mark a Route as VOID',1,'partials/master_route.jsp'),(43,10,'Edit Route',1,'Edit existing Route',1,'partials/master_route.jsp'),(44,11,'Good Receipt',0,'View Good Receipt module',1,'partials/goodsreceipt.jsp'),(45,11,'New Good Receipt',1,'Create new Good Receipt',1,'partials/goodsreceipt.jsp'),(46,11,'Delete Good Receipt',1,'Mark a Good Receipt as VOID',1,'partials/goodsreceipt.jsp'),(47,11,'Edit Good Receipt',1,'Edit existing Good Receipt',1,'partials/goodsreceipt.jsp'),(48,12,'Stock Manager',0,'View Stock Manager module',1,'partials/stock_manager.jsp'),(49,12,'New Stock Manager',1,'Create new Stock Manager',1,'partials/stock_manager.jsp'),(50,12,'Delete Stock Manager',1,'Mark a Stock Manager as VOID',1,'partials/stock_manager.jsp'),(51,12,'Edit Stock Manager',1,'Edit existing Stock Manager',1,'partials/stock_manager.jsp'),(52,24,'Return Register',0,'View Return Register Module',1,'partials/return_management/return_register.jsp'),(53,13,'Good Return',0,'View Good Return module',1,'partials/return_management/goods_return.jsp'),(54,13,'New Good Return',1,'Create new Good Return',1,'partials/return_management/goods_return.jsp'),(55,13,'Delete Good Return',1,'Mark a Good Return as VOID',1,'partials/return_management/goods_return.jsp'),(56,13,'Edit Good Return',1,'Edit existing Good Return',1,'partials/return_management/goods_return.jsp'),(57,14,'Company Claim',0,'View Company Claim module',1,'partials/return_management/company_claim.jsp'),(58,14,'New Company Claim',1,'Create new Company Claim',1,'partials/return_management/company_claim.jsp'),(59,14,'Delete Company Claim',1,'Mark a Company Claim as VOID',1,'partials/return_management/company_claim.jsp'),(60,14,'Edit Company Claim',1,'Edit existing Company Claim',1,'partials/return_management/company_claim.jsp'),(61,15,'People Manager',0,'View People Manager',1,'partials/utility/contacts_manager.jsp'),(62,15,'New People ',1,'Create new People ',1,'partials/utility/contacts_manager.jsp'),(63,15,'Delete People',1,'Mark a People as VOID',1,'partials/utility/contacts_manager.jsp'),(64,15,'Edit People ',1,'Edit existing People',1,'partials/utility/contacts_manager.jsp'),(65,16,'Locksmith',0,'View Locksmith',1,'partials/utility/utility_locksmith.jsp'),(66,16,'Edit Locksmith',1,'Edit existing Locksmith',1,'partials/utility/utility_locksmith.jsp'),(67,17,'Create or Modify Challan',0,'View Challan module',1,NULL),(68,18,'New Challan',1,'Create new Challan',1,NULL),(69,18,'Delete Challan',1,'Mark a Challan as VOID',1,NULL),(70,18,'Challan Date',1,'Change Challan date',1,NULL),(71,18,'Edit Challan',1,'Edit existing Challan',1,NULL),(72,19,'Credit Note',0,'View Credit Note module',1,NULL),(73,19,'New Credit Note',1,'Edit existing  Credit Note',1,NULL),(74,19,'Delete Credit Note',1,'Create Credit Note',1,NULL),(75,19,'Challan Credit Note',1,'Mark a Credit Note as VOID',1,NULL),(76,20,'Debit  Note',0,'View Debit Note module',1,NULL),(77,20,'New Debit Note',1,'Edit existing  Debit Note',1,NULL),(78,20,'Delete Debit Note',1,'Create Debit Note',1,NULL),(79,20,'Challan Debit Note',1,'Mark a Debit Note as VOID',1,NULL),(80,21,'Report Manager',0,'View Report Manger Module',1,NULL),(81,22,'About',0,'View About Module',1,NULL),(82,22,'Release Notes',1,'View Release Notes Module',1,NULL),(83,22,'FAQs',1,'View FAQs Module',1,NULL),(84,22,'Known Issues',1,'View Known Issues Module',1,NULL),(85,22,'Site Map',1,'View Site Map Module',1,NULL),(86,22,'About Us',1,'View About Us Module',1,NULL),(87,22,'Contact Us',1,'View Contact Us Module',1,NULL),(88,23,'System Value',0,'View System Value',NULL,NULL),(89,23,'Create System Value		',1,NULL,NULL,NULL),(90,23,'Modify System Value	',1,NULL,NULL,NULL),(91,23,'Edit System Value',1,NULL,NULL,NULL),(92,47,'Manage Users',0,'View Manage Users',1,'partials/utility/user_manager.jsp'),(93,26,'System Permission',0,'View System Permission',1,'partials/utility/system_permission.jsp'),(94,26,'Modify System Value',1,'Edit ',1,'partials/utility/system_permission.jsp'),(95,28,'Control Panel Misc',0,'View Control Panel Misc',1,'partials/utility/controlpanelMisc.jsp'),(96,29,'Contact Type',0,'View Contact Type',1,'partials/utility/contactyType.jsp'),(97,29,'New Contact Type',1,'Create Contact Type',1,'partials/utility/contactyType.jsp'),(98,29,'Delete Contact Type',1,'Delete Contact Type',1,'partials/utility/contactyType.jsp'),(99,29,'Edit Contact Type',1,'Modify Contact Type',1,'partials/utility/contactyType.jsp'),(100,30,'Reason Control',0,'View Reason Control',1,'partials/utility/credebitReason.jsp'),(101,30,'New Reason',1,'Create Reason',1,'partials/utility/credebitReason.jsp'),(102,30,'Delete Reasom',1,'Delete Reason',1,'partials/utility/credebitReason.jsp'),(103,30,'Edit Reason',1,'Modify Reason',1,'partials/utility/credebitReason.jsp'),(104,31,'Narration ',0,'View Narration',1,'partials/utility/narrtionmisc.jsp'),(105,31,'New Narration',1,'Create Narration',1,'partials/utility/narrtionmisc.jsp'),(106,31,'Delete Narration',1,'Delete Narration',1,'partials/utility/narrtionmisc.jsp'),(107,31,'Edit Narration',1,'Modify Narration',1,'partials/utility/narrtionmisc.jsp'),(108,32,'Manage Financial Year',0,'View Finacial Year',1,'partials/utility/ManageFinacialYear.jsp'),(109,32,'New Finacial Year',1,'New Finacial Year',1,'partials/utility/ManageFinacialYear.jsp'),(110,32,'Edit Financial Year',1,'Edit Financial Year',1,'partials/utility/ManageFinacialYear.jsp'),(111,33,'Salesman Receipt',0,'View Salesman Receipt',1,'partials/utility/SalesmanReciept.jsp'),(112,33,'New Salesman Receipt',1,'New Salesman Receipt',1,'partials/utility/SalesmanReciept.jsp'),(113,33,'Delete Salesman Receipt',1,'Delete Salesman Receipt',1,'partials/utility/SalesmanReciept.jsp'),(114,33,'Edit Saleman Receipt',1,'Edit Saleman Receipt',1,'partials/utility/SalesmanReciept.jsp'),(115,35,'My profile',0,'view my Profile',1,'partials/utility/myprofile.jsp'),(117,34,'System Role',0,'view system Role',1,'partials/utility/system_role.jsp'),(118,34,'edit system role',1,'edit system role',1,'partials/utility/system_role.jsp'),(119,35,'update my profile',1,'update my profile',1,'partials/utility/myprofile.jsp'),(120,36,'View Advanced Setting',0,'View Ad.Settings',1,'partials/utility/advanced_settings.jsp'),(121,36,' ModifyAdvanced Setting',1,' ModifyAdvanced Setting',1,'partials/utility/advanced_settings.jsp'),(122,37,'View Bussiness details',0,'View Bussiness details',1,'partials/master_business_detail.jsp'),(123,37,'New Bussiness Details',1,'Create Bussiness Details',1,'partials/master_business_detail.jsp'),(124,38,'View Purchase Register',0,'View Purchase Register',1,'partials/purchase_register.jsp'),(125,38,'New Purchase Register',1,'Create Purchase Register',1,'partials/purchase_register.jsp'),(126,39,'View Credit Note Register',0,'View Credit Note Register',1,'partials/credit_note.jsp'),(127,40,'View Credit NOte Product',0,'View Credit Note Product',1,'partials/credit_note_product.jsp'),(128,40,'New Credit Note Product',1,'New Credit Note Product',1,'partials/credit_note_product.jsp'),(129,40,'Edit Credit Note Product',1,'Edit Credit Note Product',1,'partials/credit_note_product.jsp'),(130,40,'void Credit Note Product',1,'void Credit Note Product',1,'partials/credit_note_product.jsp'),(131,41,'View additional Credit discount',0,'View additional Credit discount',1,'partials/credit_note_additional_discount.jsp'),(132,41,'New additional Credit discount',1,'New additional Credit discount',1,'partials/credit_note_additional_discount.jsp'),(133,41,'EDit additional Credit discount',1,'EDit additional Credit discount',1,'partials/credit_note_additional_discount.jsp'),(134,41,'Delete additional Credit discount',1,'Delete additional Credit discount',1,'partials/credit_note_additional_discount.jsp'),(135,34,'New System role',1,'New System role',1,'partials/utility/system_role.jsp'),(136,42,'View About Us',0,'View About Us',1,'partials/about_us/about_us.html'),(137,43,'View FAQ',0,'View FAQ',1,'partials/about_us/faqs.html'),(138,44,'View Known Issues',0,'View Known Issues',1,'partials/about_us/known_issues.html'),(139,45,'View Release Notes',0,'View Release Notes',1,'partials/about_us/release_notes.html'),(140,46,'View Site Map',0,'View Site Map',1,'partials/about_us/site_map.html'),(141,48,'View Debit Note Regitser',0,'View Debit Note Regitser',1,'partials/debit_note.jsp'),(142,49,'View Accounting Master',0,'View Accounting Master',1,'partials/accounting/accounting_master.jsp'),(143,50,'View Accounting Group',0,'View Accounting Group',1,'partials/accounting/accounting_group.jsp'),(144,51,'View Receipts and Payments',0,'View Receipts and Payments',1,'partials/accounting/receipts_and_payments.jsp'),(145,52,'View Cheque Printing',0,'View Cheque Printing',1,'partials/accounting/cheque_printing.jsp'),(146,53,'View Bank Deposite Slip',0,'View Bank Deposite Slip',1,'partials/accounting/bank_deposit_slips.jsp'),(147,54,'View Cheque Bounce Return Entry',0,'View Cheque Bounce Return Entry',1,'partials/accounting/cheque_bounce_entry.jsp'),(148,47,'Delete  Manage users',1,'Delete  Manage users',1,'partials/utility/user_manager.jsp'),(149,15,'View user & advanced setting',1,'Allow user & advanced setting',1,'partials/utility/contacts_manager.jsp'),(150,15,'Ediit user & advanced setting',1,'Ediit user & advanced setting',1,'partials/utility/contacts_manager.jsp'),(151,58,'View Stock Audit',0,'View Stock Audit',1,'partials/stock_audit.jsp'),(152,58,'New Stock Audit',1,'New Stock Audit',1,'partials/stock_audit.jsp'),(153,58,'Edit Stock Audit',1,'Edit Stock Audit',1,'partials/stock_audit.jsp'),(154,58,'Lock Stock Audit',1,'Lock Stock Audit',1,'partials/stock_audit.jsp'),(155,58,'Lock Stock Audit Data Entry',1,'Lock Stock Audit Data Entry',1,'partials/stock_audit.jsp'),(156,58,'Delete Stock Audit',1,'Delete Stock Audit',1,'partials/stock_audit.jsp'),(157,59,'Good Reciept Register',0,'View Good Reciept Register',1,'partials/goodsreceipt_register.jsp'),(158,59,'New Good Reciept Register',1,'New Good Reciept Register',1,'partials/goodsreceipt_register.jsp'),(159,60,'View System Parameter',0,'View System Parameter',1,'partials/utility/controlpanel_systemvalue.jsp'),(160,60,'Update System Parameter',1,'Update system parametesr',1,'partials/utility/controlpanel_systemvalue.jsp'),(161,61,'View Help In Help ',0,'View Help In Help ',1,'partials/about_us/help.html');
/*!40000 ALTER TABLE `permission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `permissiongroup`
--

DROP TABLE IF EXISTS `permissiongroup`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `permissiongroup` (
  `ID` int(11) NOT NULL,
  `Description` varchar(65) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `permissiongroup`
--

LOCK TABLES `permissiongroup` WRITE;
/*!40000 ALTER TABLE `permissiongroup` DISABLE KEYS */;
INSERT INTO `permissiongroup` VALUES (1,'Purchase'),(2,'Sale'),(3,'Customer'),(4,'Company'),(5,'Supplier'),(6,'Division'),(7,'Product'),(8,'Content'),(9,'Area'),(10,'Route'),(11,'Good Receipt'),(12,'Stock Manager'),(13,'Return Register'),(14,'Company Claim'),(15,'People Manager'),(16,'Locksmith'),(18,'Challan'),(19,'Credit Note'),(20,'Debit Note'),(21,'Report Manager'),(22,'About Us'),(23,'System Value'),(24,'Return Register'),(26,'System Permission'),(28,'Control Panel Misc'),(29,'Contact Type'),(30,'Reason Control'),(31,'Naration'),(32,'Manage Financial Year'),(33,'Salesman Receipt'),(34,'System Role'),(35,'My Profile'),(36,'Advanced Setting'),(37,'Bussiness Details'),(38,'Purchase Register'),(39,'Credit Note Register'),(40,'Credit Note Product'),(41,NULL),(42,'About Us'),(43,'FAQ'),(44,'Known Issues'),(45,'Release Notes'),(46,'Site Map'),(47,'Manage User'),(48,'Debit Note Register'),(49,'Accounting Master'),(50,'Accounting Group'),(51,'Receipts and Payments'),(52,'Cheque Printing'),(53,'Bank Deposite Slip'),(54,'Cheque Bounce Return Entry'),(55,'Journal Voucher'),(56,'Bank Reconciliation '),(57,'Unallotted Receipt and Payments'),(58,'Stock Audit'),(59,'Good Reciept Register'),(60,'System Parameter'),(61,'Help');
/*!40000 ALTER TABLE `permissiongroup` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product` (
  `ID` double NOT NULL AUTO_INCREMENT,
  `upcID` varchar(45) DEFAULT NULL,
  `Other` varchar(45) DEFAULT NULL,
  `Name` varchar(60) DEFAULT NULL,
  `Description` varchar(50) DEFAULT NULL,
  `Type` int(11) DEFAULT NULL,
  `ShelfID` varchar(15) DEFAULT NULL,
  `CID` double DEFAULT NULL,
  `DID` double DEFAULT NULL,
  `taxCodeID` double DEFAULT NULL,
  `Pack` double DEFAULT NULL,
  `Box` double DEFAULT NULL,
  `MRP` decimal(10,2) DEFAULT NULL,
  `PurchaseRate` decimal(10,2) DEFAULT NULL,
  `SaleRate` decimal(10,2) DEFAULT NULL,
  `ProductDiscount` int(11) DEFAULT NULL,
  `TaxID1` int(11) DEFAULT NULL,
  `TaxID2` int(11) DEFAULT NULL,
  `TaxID3` int(11) DEFAULT NULL,
  `TaxID4` int(11) DEFAULT NULL,
  `TaxID5` int(11) DEFAULT NULL,
  `prodCategory` int(11) DEFAULT NULL,
  `DPCOrate` double DEFAULT NULL,
  `Remark` varchar(150) DEFAULT NULL,
  `flgLocked` tinyint(1) DEFAULT NULL,
  `flgActive` tinyint(1) DEFAULT NULL,
  `flgDPCO` tinyint(1) DEFAULT NULL,
  `flgManualDPCO` int(11) DEFAULT NULL,
  `flgNarcotics` tinyint(1) DEFAULT NULL,
  `flgGeneric` tinyint(1) DEFAULT NULL,
  `flgLock` tinyint(11) DEFAULT NULL,
  `CreatedBy` double DEFAULT NULL,
  `CreatedOn` datetime DEFAULT NULL,
  `ModifiedBy` double DEFAULT NULL,
  `ModifiedOn` datetime DEFAULT NULL,
  `Discount` decimal(10,2) DEFAULT NULL,
  `flgStockAuditLock` tinyint(11) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,'3232',NULL,'Nova',NULL,1,'0',2000,10,100,10,10,10.00,1000.00,NULL,0,100,NULL,NULL,NULL,NULL,1,0,NULL,NULL,1,1,NULL,0,NULL,0,10,'2015-03-04 16:27:30',NULL,NULL,NULL,0),(2,'myupcID','asdasda','product 2','asdaaa',1,'0',1000,1,200,20,40,20.00,12.00,34.00,0,100,NULL,NULL,NULL,NULL,1,0,'remark',NULL,1,1,NULL,0,NULL,0,10,'2015-03-04 16:27:30',NULL,NULL,NULL,0),(3,NULL,NULL,'product 3',NULL,1,NULL,3000,4,100,10,40,30.00,NULL,NULL,NULL,100,NULL,NULL,NULL,NULL,2,NULL,NULL,NULL,1,0,NULL,0,NULL,0,10,'2015-03-04 16:27:30',NULL,NULL,NULL,NULL),(4,'lol',NULL,'product 4',NULL,1,'0',1000,2,100,10,50,40.00,NULL,NULL,0,100,NULL,NULL,NULL,NULL,3,0,'lolRemark',NULL,1,0,NULL,1,NULL,1,10,'2015-03-04 16:27:30',NULL,NULL,NULL,0),(5,'asdd1','other','product 5','desc',1,'0',1000,2,200,10,10,50.00,12.00,45.00,0,100,NULL,NULL,NULL,NULL,1,0,'MYremark',NULL,1,0,NULL,0,NULL,0,10,'2015-03-04 16:27:30',NULL,NULL,NULL,0),(6,NULL,NULL,'Rabicip',NULL,1,NULL,2000,2,NULL,10,10,60.00,NULL,NULL,NULL,200,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,1,0,NULL,0,NULL,0,10,'2015-03-04 16:27:30',NULL,NULL,NULL,NULL),(7,NULL,NULL,'Urisoda ',NULL,1,'0',2000,3,200,10,10,70.00,NULL,NULL,10,100,NULL,NULL,NULL,NULL,2,NULL,NULL,NULL,1,0,NULL,0,NULL,0,10,'2015-03-04 16:27:30',NULL,NULL,NULL,0),(8,NULL,NULL,'Amlopres',NULL,1,'0',2000,3,NULL,10,100,80.00,NULL,NULL,0,100,NULL,NULL,NULL,NULL,2,NULL,NULL,NULL,1,0,NULL,0,NULL,0,10,'2015-03-04 16:27:30',NULL,NULL,NULL,0),(9,NULL,NULL,'Amlopres L',NULL,1,'0',3000,4,NULL,10,10,90.00,NULL,NULL,0,100,NULL,NULL,NULL,NULL,3,NULL,NULL,NULL,1,1,NULL,1,NULL,0,10,'2015-03-04 16:27:30',NULL,NULL,NULL,NULL),(10,NULL,NULL,'Amlopres Z',NULL,1,'0',3000,4,NULL,10,10,100.00,NULL,NULL,0,100,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,1,0,NULL,0,NULL,0,10,'2015-03-04 16:27:30',NULL,NULL,NULL,NULL),(11,NULL,NULL,'product 33',NULL,1,NULL,3000,4,NULL,10,10,110.00,NULL,NULL,NULL,200,NULL,NULL,NULL,NULL,3,NULL,NULL,NULL,1,0,NULL,0,NULL,0,10,'2015-03-04 16:27:30',NULL,NULL,NULL,NULL),(12,'asdas','asdas','Product 34',NULL,1,'123',3000,4,NULL,123,234,2367.00,454.00,NULL,234,NULL,NULL,NULL,NULL,NULL,1,NULL,'asda',NULL,1,1,NULL,1,NULL,0,NULL,NULL,NULL,NULL,NULL,NULL),(13,'12123','123123','Inhalex Respules','123123',1,'12312',2000,3,NULL,123123,12312,312123.00,12312.00,12312.00,12312,NULL,NULL,NULL,NULL,NULL,2,NULL,'13123',NULL,1,1,NULL,1,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL),(14,'12312','12312','Axalin Expectorant','12312',1,'123',2000,3,NULL,1231,123,123.00,1231.00,123123.00,123,NULL,NULL,NULL,NULL,NULL,3,NULL,'123123',NULL,1,1,NULL,1,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL),(15,'aa','aa','Amplopres-AT','a',1,'11',2000,3,NULL,11,11,11.00,11.00,1122.00,11,NULL,NULL,NULL,NULL,NULL,1,NULL,'111',NULL,1,1,NULL,1,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL),(16,'1231','1231','Flomex Eye Drops','1231',1,'123123',2000,3,NULL,12,123,123.00,123.00,12312.00,123,NULL,NULL,NULL,NULL,NULL,0,0,'12312',NULL,1,1,NULL,1,NULL,0,NULL,NULL,NULL,NULL,NULL,0),(17,NULL,NULL,'test','hgjhg',1,'34',2000,3,NULL,34,44,NULL,NULL,NULL,0,NULL,NULL,NULL,NULL,NULL,2,0,NULL,NULL,1,0,NULL,0,NULL,0,NULL,NULL,NULL,NULL,NULL,NULL),(18,NULL,NULL,'asd',NULL,0,'0',2000,3,100,45,55,NULL,NULL,NULL,0,NULL,NULL,NULL,NULL,NULL,2,0,NULL,NULL,1,0,NULL,0,NULL,0,NULL,NULL,NULL,NULL,NULL,NULL),(19,NULL,NULL,'aaaa','aaa',0,'23',2000,3,NULL,22,22,NULL,NULL,NULL,0,NULL,NULL,NULL,NULL,NULL,2,0,NULL,NULL,1,0,NULL,0,NULL,0,NULL,NULL,NULL,NULL,NULL,NULL),(20,'88','ss','ww','as',2,'0',2000,3,NULL,45,5,33.00,23.00,3.00,33,NULL,NULL,NULL,NULL,NULL,1,0,NULL,NULL,1,0,NULL,0,NULL,0,NULL,NULL,NULL,NULL,NULL,NULL),(21,NULL,NULL,'new product','a',0,'hh',1000,2,NULL,1,1,NULL,NULL,NULL,0,NULL,NULL,NULL,NULL,NULL,2,0,NULL,NULL,1,0,NULL,0,NULL,0,NULL,NULL,NULL,NULL,NULL,NULL),(22,NULL,NULL,'ee',NULL,0,'0',2000,3,NULL,23,11,NULL,NULL,NULL,0,NULL,NULL,NULL,NULL,NULL,1,0,NULL,NULL,1,0,NULL,0,NULL,0,NULL,NULL,NULL,NULL,NULL,NULL),(23,NULL,NULL,'test',NULL,1,NULL,1000,2,NULL,5,5,NULL,NULL,NULL,0,NULL,NULL,NULL,NULL,NULL,1,0,NULL,NULL,1,1,NULL,1,NULL,0,NULL,NULL,NULL,NULL,NULL,NULL),(24,NULL,NULL,'product22',NULL,0,NULL,1000,2,NULL,1,11,NULL,NULL,NULL,0,NULL,NULL,NULL,NULL,NULL,0,0,NULL,NULL,1,0,NULL,0,NULL,0,NULL,NULL,NULL,NULL,NULL,NULL),(25,NULL,NULL,'Asd',NULL,0,NULL,3005,12,NULL,12,12,NULL,NULL,NULL,0,NULL,NULL,NULL,NULL,NULL,0,0,NULL,NULL,1,0,NULL,0,NULL,0,NULL,NULL,NULL,NULL,NULL,NULL),(26,NULL,NULL,'qqqq',NULL,0,NULL,1000,2,NULL,1,1,NULL,NULL,NULL,0,NULL,NULL,NULL,NULL,NULL,0,0,NULL,NULL,1,0,NULL,0,NULL,0,NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productbatch`
--

DROP TABLE IF EXISTS `productbatch`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `productbatch` (
  `ID` double NOT NULL AUTO_INCREMENT,
  `batchNo` varchar(45) DEFAULT NULL,
  `grID` double DEFAULT NULL,
  `deleted` int(11) DEFAULT NULL,
  `expiryDate` date DEFAULT NULL,
  `MRP` decimal(10,2) DEFAULT NULL,
  `trade` decimal(10,2) DEFAULT NULL,
  `purchaseRate` decimal(10,2) DEFAULT NULL,
  `purchaseDate` date DEFAULT NULL,
  `tradeDiscount` decimal(10,2) DEFAULT NULL,
  `tradeDiscountAmt` decimal(10,2) DEFAULT NULL,
  `specialDiscountAmt` decimal(10,2) DEFAULT NULL,
  `specialDiscount` decimal(10,2) DEFAULT NULL,
  `sellRate` decimal(10,2) DEFAULT NULL,
  `Remark` varchar(45) DEFAULT NULL,
  `flgActive` int(11) DEFAULT NULL,
  `flgLock` int(11) DEFAULT NULL,
  `CreatedBy` double DEFAULT NULL,
  `CreatedOn` datetime DEFAULT NULL,
  `ModifiedBy` double DEFAULT NULL,
  `ModifiedOn` datetime DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=66 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productbatch`
--

LOCK TABLES `productbatch` WRITE;
/*!40000 ALTER TABLE `productbatch` DISABLE KEYS */;
INSERT INTO `productbatch` VALUES (1,'batch1',69,0,NULL,34.00,35.00,30.00,'2015-08-06',4.00,23.00,34.00,3.00,35.00,'batch1_remark',1,1,NULL,NULL,NULL,'2015-05-08 00:00:00'),(2,'xyz',94,0,NULL,56.00,59.00,50.00,'2015-10-31',4.00,43.00,0.00,0.00,58.00,'batch2_remark 34',1,1,NULL,NULL,NULL,'2015-04-15 00:00:00'),(3,'batch3',13,0,'2016-07-24',54.00,58.00,45.00,'2015-06-11',6.00,12.00,76.00,11.00,78.00,'batch3_remark',1,1,NULL,NULL,NULL,'2015-08-12 00:00:00'),(4,'batch4',42,0,'2016-07-24',24.00,12.00,13.00,'2015-06-11',3.00,21.00,12.00,19.00,34.00,'batch4_remark',1,1,NULL,NULL,NULL,'2015-08-12 00:00:00'),(5,'batch5',45,0,'2016-07-24',45.00,13.00,34.00,'2015-06-11',6.00,6.00,12.00,25.00,35.00,'batch5_remark',1,1,NULL,NULL,NULL,NULL),(6,'Batch5',53,0,'2012-12-20',55.00,57.00,40.00,'2015-06-11',3.00,NULL,NULL,NULL,50.00,NULL,0,0,NULL,NULL,NULL,NULL),(7,'Batch 5 new',54,0,'2016-07-24',34.00,34.00,34.00,'2015-06-11',34.00,NULL,NULL,NULL,34.00,NULL,0,0,NULL,NULL,NULL,NULL),(8,'Batch 5 new 1',55,0,'2016-07-24',44.00,55.00,55.00,'2015-06-11',34.00,NULL,NULL,NULL,55.00,NULL,0,0,NULL,NULL,NULL,NULL),(9,'Batch 4 New',56,0,'2016-07-24',65.00,60.00,50.00,'2015-08-06',4.00,NULL,NULL,NULL,60.00,NULL,0,0,NULL,NULL,NULL,NULL),(10,'Batch 444',57,0,'2016-07-24',33.00,33.00,33.00,'2017-06-20',3.00,NULL,NULL,NULL,33.00,NULL,0,0,NULL,NULL,NULL,NULL),(11,'batch1new123',70,0,NULL,34.00,35.00,30.00,'2015-06-17',4.00,NULL,NULL,NULL,35.00,NULL,1,1,NULL,NULL,NULL,NULL),(12,'batch1asd',45,0,'2016-07-24',34.00,35.00,30.00,'2015-05-22',4.00,NULL,NULL,NULL,35.00,NULL,1,1,NULL,NULL,NULL,NULL),(13,'batch1asd',94,0,NULL,34.00,35.00,30.00,'2015-10-31',4.00,NULL,0.00,23.00,35.00,'12 Remark',1,1,NULL,NULL,NULL,NULL),(14,'batch1asdwww',66,0,NULL,34.00,35.00,30.00,'2015-06-12',4.00,NULL,NULL,NULL,35.00,NULL,1,1,NULL,NULL,NULL,NULL),(15,'batch2testtt',95,0,'2015-10-09',56.00,59.00,50.00,'2015-10-31',4.00,NULL,0.00,34.00,58.00,'',1,1,NULL,NULL,NULL,NULL),(16,'testbatch',62,0,'2016-07-24',34.00,35.00,30.00,'2015-06-11',4.00,NULL,NULL,NULL,35.00,NULL,1,1,NULL,NULL,NULL,NULL),(17,'UBatchtest',63,0,'2016-07-24',34.00,35.00,30.00,'2015-06-11',4.00,NULL,NULL,NULL,35.00,NULL,1,1,NULL,NULL,NULL,NULL),(18,'originalBatch',63,0,'2016-07-24',34.00,35.00,30.00,'2015-06-11',4.00,NULL,NULL,NULL,35.00,NULL,1,1,NULL,NULL,NULL,NULL),(19,'originalBatch',63,0,'2016-07-24',34.00,35.00,30.00,'2015-06-11',4.00,NULL,NULL,NULL,35.00,NULL,1,1,NULL,NULL,NULL,NULL),(20,'asd123',63,0,'2016-07-24',34.00,35.00,30.00,'2015-06-11',4.00,NULL,NULL,NULL,35.00,NULL,1,1,NULL,NULL,NULL,NULL),(21,'rrrr',63,0,'2016-07-24',34.00,35.00,30.00,'2015-06-11',4.00,NULL,NULL,NULL,35.00,NULL,1,1,NULL,NULL,NULL,NULL),(22,'rrrr123',63,0,'2016-07-24',34.00,35.00,30.00,'2015-06-11',4.00,NULL,NULL,NULL,35.00,NULL,1,1,NULL,NULL,NULL,NULL),(23,'wwwww',63,0,'2016-07-24',34.00,35.00,30.00,'2015-06-11',4.00,NULL,NULL,NULL,35.00,NULL,1,1,NULL,NULL,NULL,NULL),(24,'ssddsd',63,0,'2016-07-24',34.00,35.00,30.00,'2015-06-11',4.00,NULL,NULL,NULL,35.00,NULL,1,1,NULL,NULL,NULL,NULL),(25,'dddd',63,0,'2016-07-24',34.00,35.00,30.00,'2015-06-11',4.00,NULL,NULL,NULL,35.00,NULL,1,1,NULL,NULL,NULL,NULL),(26,'dddd',63,0,'2015-06-08',34.00,35.00,30.00,'2015-06-11',4.00,NULL,NULL,NULL,35.00,NULL,1,1,NULL,NULL,NULL,NULL),(27,'batch1new1231',63,0,'2015-06-04',34.00,35.00,30.00,'2015-06-11',4.00,NULL,NULL,NULL,35.00,NULL,1,1,NULL,NULL,NULL,NULL),(28,'batch1asd',62,0,'2016-07-24',34.00,35.00,30.00,'2015-06-11',4.00,NULL,NULL,NULL,35.00,NULL,1,1,NULL,NULL,NULL,NULL),(29,'batch1asd',62,0,NULL,34.00,35.00,30.00,'2015-06-11',4.00,NULL,NULL,NULL,35.00,NULL,1,1,NULL,NULL,NULL,NULL),(30,'batchProd3',68,0,NULL,11.00,1.00,33.00,'2015-06-12',3.00,NULL,NULL,NULL,3.00,NULL,0,0,NULL,NULL,NULL,NULL),(31,'batch23Prod3',68,0,'2016-08-13',33.00,44.00,4.00,'2015-06-12',4.00,NULL,NULL,NULL,4.00,NULL,0,0,NULL,NULL,NULL,NULL),(32,'myBatchProd4',62,0,'2015-06-17',22.00,2.00,22.00,'2015-06-11',22.00,NULL,NULL,NULL,22.00,NULL,0,0,NULL,NULL,NULL,NULL),(33,'bNEWP3UPDATE',68,0,'2015-06-27',22.00,2.00,2.00,'2015-06-12',2.00,NULL,NULL,NULL,2.00,NULL,0,0,NULL,NULL,NULL,NULL),(34,'asdPRODUCT3',68,0,'2015-06-27',22.00,2.00,2.00,'2015-06-12',2.00,NULL,NULL,NULL,2.00,NULL,0,0,NULL,NULL,NULL,NULL),(35,'as',72,0,'2015-07-11',12.00,12.00,12.00,NULL,12.00,NULL,NULL,NULL,12.00,NULL,0,0,NULL,NULL,NULL,NULL),(36,'myAsd',76,0,'2015-07-10',11.00,11.00,11.00,NULL,11.00,NULL,NULL,NULL,11.00,NULL,0,0,NULL,NULL,NULL,NULL),(37,'myAsd',76,0,'2015-07-18',11.00,11.00,11.00,'2015-06-11',11.00,NULL,NULL,NULL,11.00,NULL,0,0,NULL,NULL,NULL,NULL),(38,'myAsd',76,0,'2015-07-18',11.00,11.00,11.00,'2015-06-11',11.00,NULL,NULL,NULL,11.00,NULL,1,0,NULL,NULL,NULL,NULL),(39,'myAsd',76,0,'2015-07-18',11.00,11.00,11.00,'2015-06-11',11.00,NULL,NULL,NULL,11.00,NULL,1,0,NULL,NULL,NULL,NULL),(40,'myAsd',76,0,'2015-07-18',11.00,11.00,11.00,'2015-06-11',11.00,NULL,NULL,NULL,11.00,NULL,1,0,NULL,NULL,NULL,NULL),(41,'myAsd',76,0,'2015-07-18',11.00,11.00,11.00,'2015-06-11',11.00,NULL,NULL,NULL,11.00,NULL,1,0,NULL,NULL,NULL,NULL),(42,'qrrrr',76,0,'2015-07-18',11.00,11.00,11.00,'2015-06-11',11.00,NULL,NULL,NULL,11.00,NULL,1,0,NULL,NULL,NULL,NULL),(43,'newASD',76,0,'2015-07-17',0.00,0.00,0.00,'2015-06-11',0.00,NULL,NULL,NULL,0.00,NULL,1,0,NULL,NULL,NULL,NULL),(44,'ttyytyty',76,0,'2015-07-17',0.00,0.00,0.00,'2015-06-11',0.00,NULL,NULL,NULL,0.00,NULL,1,0,NULL,NULL,NULL,NULL),(45,'www',76,0,'2015-07-18',0.00,0.00,0.00,'2015-06-11',0.00,NULL,NULL,NULL,0.00,NULL,1,0,NULL,NULL,NULL,NULL),(46,'xyzMOD',81,0,'2015-07-18',56.00,59.00,50.00,'2015-06-11',4.00,NULL,NULL,NULL,58.00,NULL,1,1,NULL,NULL,NULL,NULL),(47,'cipla batch',82,0,'2015-07-17',11.00,11.00,11.00,'2015-06-11',NULL,NULL,NULL,NULL,11.00,NULL,1,0,NULL,NULL,NULL,NULL),(48,'cipla batch MOd',82,0,'2015-07-17',11.00,11.00,11.00,'2015-06-11',0.00,NULL,NULL,NULL,11.00,NULL,1,0,NULL,NULL,NULL,NULL),(49,'cipla batch MOd',82,0,'2015-07-17',11.00,11.00,11.00,'2015-06-11',0.00,NULL,NULL,NULL,11.00,NULL,1,0,NULL,NULL,NULL,NULL),(50,'aaa',81,0,'2015-07-17',0.00,0.00,0.00,'2015-07-17',0.00,NULL,NULL,NULL,0.00,NULL,0,0,NULL,NULL,NULL,NULL),(51,'q',83,0,'2015-07-18',11.00,11.00,11.00,'2015-07-17',NULL,NULL,NULL,NULL,11.00,NULL,0,0,NULL,NULL,NULL,NULL),(52,'q',83,0,'2015-07-18',11.00,11.00,11.00,'2015-07-17',NULL,NULL,NULL,NULL,11.00,NULL,0,0,NULL,NULL,NULL,NULL),(53,'trtrt',84,0,'2015-07-18',1.00,1.00,111.00,'2015-07-17',NULL,NULL,NULL,NULL,1.00,NULL,1,0,NULL,NULL,NULL,NULL),(54,'trtrt12',84,0,'2015-07-18',1.00,1.00,111.00,'2015-07-17',0.00,NULL,NULL,NULL,1.00,NULL,1,0,NULL,NULL,NULL,NULL),(55,'test1',85,0,'2015-07-17',22.00,22.00,22.00,'2015-07-17',NULL,NULL,NULL,NULL,22.00,NULL,1,0,NULL,NULL,NULL,NULL),(56,'we3',85,0,'2015-07-17',23.00,33.00,3.00,'2015-07-17',0.00,NULL,NULL,NULL,3.00,NULL,1,0,NULL,NULL,NULL,NULL),(57,'test134',85,0,'2015-07-17',22.00,22.00,22.00,'2015-07-17',0.00,NULL,NULL,NULL,22.00,NULL,1,0,NULL,NULL,NULL,NULL),(58,'feASD',86,0,'2015-07-17',23.00,2.00,1.00,'2015-07-17',NULL,NULL,NULL,NULL,1.00,NULL,1,0,NULL,NULL,NULL,NULL),(59,'feASDMOD',86,0,'2015-07-17',23.00,2.00,1.00,'2015-07-17',0.00,NULL,NULL,NULL,1.00,NULL,1,0,NULL,NULL,NULL,NULL),(60,'feASDMOD2',86,0,'2015-07-17',23.00,2.00,1.00,'2015-07-17',0.00,NULL,NULL,NULL,1.00,NULL,1,0,NULL,NULL,NULL,NULL),(61,'feASDMOD28',86,0,'2015-07-17',23.00,2.00,1.00,'2015-07-17',0.00,NULL,NULL,NULL,1.00,NULL,1,0,NULL,NULL,NULL,NULL),(62,'weweqw',87,0,'2015-07-17',44.00,44.00,4.00,'2015-07-17',NULL,NULL,NULL,NULL,4.00,NULL,1,0,NULL,NULL,NULL,NULL),(63,'weweqwMOD',87,0,'2015-07-17',44.00,44.00,4.00,'2015-08-06',0.00,NULL,NULL,NULL,4.00,NULL,1,0,NULL,NULL,NULL,NULL),(64,'SatyajitBAtch',57,0,'2016-07-24',33.00,33.00,33.00,'2015-10-29',3.00,NULL,NULL,NULL,33.00,NULL,1,0,NULL,NULL,NULL,NULL),(65,'dddd',63,0,'2015-06-08',34.00,35.00,31.00,'2015-10-29',4.00,NULL,NULL,NULL,35.00,NULL,1,1,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `productbatch` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productbatchactive`
--

DROP TABLE IF EXISTS `productbatchactive`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `productbatchactive` (
  `ID` double NOT NULL AUTO_INCREMENT,
  `batchNo` varchar(45) DEFAULT NULL,
  `grID` double DEFAULT NULL,
  `PBID` double DEFAULT NULL,
  `deleted` int(11) DEFAULT NULL,
  `expiryDate` date DEFAULT NULL,
  `MRP` decimal(10,2) DEFAULT NULL,
  `trade` decimal(10,2) DEFAULT NULL,
  `purchaseRate` decimal(10,2) DEFAULT NULL,
  `purchaseDate` date DEFAULT NULL,
  `tradeDiscount` decimal(10,2) DEFAULT NULL,
  `tradeDiscountAmt` decimal(10,2) DEFAULT NULL,
  `specialDiscountAmt` decimal(10,2) DEFAULT NULL,
  `specialDiscount` decimal(10,2) DEFAULT NULL,
  `sellRate` decimal(10,2) DEFAULT NULL,
  `Remark` varchar(45) DEFAULT NULL,
  `schemeLock` int(11) DEFAULT NULL,
  `flgActive` int(11) DEFAULT NULL,
  `flgLock` int(11) DEFAULT NULL,
  `CreatedBy` double DEFAULT NULL,
  `CreatedOn` datetime DEFAULT NULL,
  `ModifiedBy` double DEFAULT NULL,
  `ModifiedOn` datetime DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=244 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productbatchactive`
--

LOCK TABLES `productbatchactive` WRITE;
/*!40000 ALTER TABLE `productbatchactive` DISABLE KEYS */;
INSERT INTO `productbatchactive` VALUES (1,'batch1test',1,1,0,'2015-08-12',34.00,35.00,30.00,NULL,4.00,NULL,NULL,NULL,35.00,'batch1_remarktest',NULL,1,1,NULL,NULL,NULL,'2015-05-08 00:00:00'),(2,'batch2TEST',1,2,0,'2015-08-12',34.00,35.00,30.00,NULL,4.00,NULL,NULL,NULL,35.00,'wrw',NULL,1,1,NULL,NULL,NULL,'2015-04-15 00:00:00'),(3,'batch3',1,3,0,'2015-08-12',154.00,58.00,45.00,NULL,6.00,NULL,NULL,NULL,78.00,'reamrk',NULL,1,1,NULL,NULL,NULL,'2015-08-12 00:00:00'),(4,'batch4',1,4,0,'2015-08-12',24.00,12.00,13.00,'2015-10-08',3.00,NULL,NULL,NULL,34.00,'batch4_remark',NULL,1,1,NULL,NULL,NULL,'2015-08-12 00:00:00'),(5,'batch5',1,5,0,'2015-08-12',45.00,55.00,12.00,'2015-10-08',56.00,24.00,32.00,332.00,32.00,'batch5_remark',NULL,1,1,NULL,NULL,NULL,NULL),(6,'batch1',50,1,0,'2015-08-12',34.00,35.00,30.00,NULL,4.00,NULL,NULL,NULL,35.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(7,'batch2',50,2,0,'2015-08-12',56.00,59.00,50.00,NULL,4.00,NULL,NULL,NULL,58.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(8,'batch1',51,1,0,'2015-08-12',34.00,35.00,30.00,NULL,4.00,NULL,NULL,NULL,35.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(9,'batch1',52,1,0,'2015-08-12',34.00,35.00,30.00,NULL,4.00,NULL,NULL,NULL,35.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(23,'batch1',45,1,0,'2015-08-12',34.00,35.00,30.00,NULL,4.00,NULL,NULL,NULL,35.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(24,'batch2',45,2,0,'2015-08-12',56.00,59.00,50.00,NULL,4.00,NULL,NULL,NULL,58.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(25,'batch1',45,1,0,'2015-08-12',34.00,35.00,30.00,NULL,4.00,NULL,NULL,NULL,35.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(26,'batch2',45,2,0,'2015-08-12',56.00,59.00,50.00,NULL,4.00,NULL,NULL,NULL,58.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(27,'batch1',58,1,0,'2015-08-12',34.00,35.00,30.00,NULL,4.00,NULL,NULL,NULL,35.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(28,'batch2',58,2,0,'2015-08-12',56.00,59.00,50.00,NULL,4.00,NULL,NULL,NULL,58.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(29,'batch1',58,1,0,'2015-08-12',34.00,35.00,30.00,NULL,4.00,NULL,NULL,NULL,35.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(30,'batch2',58,2,0,'2015-08-12',56.00,59.00,50.00,NULL,4.00,NULL,NULL,NULL,58.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(31,'batch1new123',58,11,0,'2015-08-12',34.00,35.00,30.00,NULL,4.00,NULL,NULL,NULL,35.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(32,'batch2',58,2,0,'2015-08-12',56.00,59.00,50.00,NULL,4.00,NULL,NULL,NULL,58.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(33,'batch1asd',45,12,0,'2015-08-12',34.00,35.00,30.00,NULL,4.00,NULL,NULL,NULL,35.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(34,'batch2',45,2,0,'2015-08-12',56.00,59.00,50.00,NULL,4.00,NULL,NULL,NULL,58.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(35,'batch1asd',59,12,0,'2015-08-12',34.00,35.00,30.00,NULL,4.00,NULL,NULL,NULL,35.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(36,'batch1asd',59,13,0,'2015-08-12',34.00,35.00,30.00,NULL,4.00,NULL,NULL,NULL,35.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(37,'batch1asd',59,12,0,'2015-08-12',34.00,35.00,30.00,NULL,4.00,NULL,NULL,NULL,35.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(38,'batch1asd',59,13,0,'2015-08-12',34.00,35.00,30.00,NULL,4.00,NULL,NULL,NULL,35.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(39,'batch1asdwww',59,14,0,'2015-08-12',34.00,35.00,30.00,NULL,4.00,NULL,NULL,NULL,35.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(40,'batch1asd',59,13,0,'2015-08-12',34.00,35.00,30.00,NULL,4.00,NULL,NULL,NULL,35.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(41,'batch2',60,2,0,'2015-08-12',56.00,59.00,50.00,NULL,4.00,NULL,NULL,NULL,58.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(42,'batch1',60,1,0,'2015-08-12',34.00,35.00,30.00,NULL,4.00,NULL,NULL,NULL,35.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(43,'batch2',60,2,0,'2015-08-12',56.00,59.00,50.00,NULL,4.00,NULL,NULL,NULL,58.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(44,'batch1',60,1,0,'2015-08-12',34.00,35.00,30.00,NULL,4.00,NULL,NULL,NULL,35.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(45,'batch2',60,2,0,'2015-08-12',56.00,59.00,50.00,NULL,4.00,NULL,NULL,NULL,58.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(46,'batch1',60,1,0,'2015-08-12',34.00,35.00,30.00,NULL,4.00,NULL,NULL,NULL,35.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(47,'batch2',60,2,0,'2015-08-12',56.00,59.00,50.00,NULL,4.00,NULL,NULL,NULL,58.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(48,'batch1',60,1,0,'2015-08-12',34.00,35.00,30.00,NULL,4.00,NULL,NULL,NULL,35.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(49,'batch2testtt',60,15,0,'2015-08-12',56.00,59.00,50.00,NULL,4.00,NULL,NULL,NULL,58.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(50,'batch1',60,1,0,'2015-08-12',34.00,35.00,30.00,NULL,4.00,NULL,NULL,NULL,35.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(51,'batch1',61,1,0,'2015-08-12',34.00,35.00,30.00,NULL,4.00,NULL,NULL,NULL,35.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(52,'batch2',61,2,0,'2015-08-12',56.00,59.00,50.00,NULL,4.00,NULL,NULL,NULL,58.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(53,'batch1',61,1,0,'2015-08-12',34.00,35.00,30.00,NULL,4.00,NULL,NULL,NULL,35.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(54,'batch2',61,2,0,'2015-08-12',56.00,59.00,50.00,NULL,4.00,NULL,NULL,NULL,58.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(55,'batch1',61,1,0,'2015-08-12',34.00,35.00,30.00,NULL,4.00,NULL,NULL,NULL,35.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(56,'batch2',61,2,0,'2015-08-12',56.00,59.00,50.00,NULL,4.00,NULL,NULL,NULL,58.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(57,'batch1',61,1,0,'2015-08-12',34.00,35.00,30.00,NULL,4.00,NULL,NULL,NULL,35.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(58,'batch2',61,2,0,'2015-08-12',56.00,59.00,50.00,NULL,4.00,NULL,NULL,NULL,58.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(59,'batch1',61,1,0,'2015-08-12',34.00,35.00,30.00,NULL,4.00,NULL,NULL,NULL,35.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(63,'batch1',61,1,0,'2015-08-12',34.00,35.00,30.00,NULL,4.00,NULL,NULL,NULL,35.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(64,'batch2',61,2,0,'2015-08-12',56.00,59.00,50.00,NULL,4.00,NULL,NULL,NULL,58.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(65,'batch1',61,1,0,'2015-08-12',34.00,35.00,30.00,NULL,4.00,NULL,NULL,NULL,35.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(66,'batch1',61,1,0,'2015-08-12',34.00,35.00,30.00,NULL,4.00,NULL,NULL,NULL,35.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(67,'batch2',61,2,0,'2015-08-12',56.00,59.00,50.00,NULL,4.00,NULL,NULL,NULL,58.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(68,'batch1',61,1,0,'2015-08-12',34.00,35.00,30.00,NULL,4.00,NULL,NULL,NULL,35.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(69,'batch1',61,1,0,'2015-08-12',34.00,35.00,30.00,NULL,4.00,NULL,NULL,NULL,35.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(70,'batch2',61,2,0,'2015-08-12',56.00,59.00,50.00,NULL,4.00,NULL,NULL,NULL,58.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(71,'batch1',61,1,0,'2015-08-12',34.00,35.00,30.00,NULL,4.00,NULL,NULL,NULL,35.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(72,'batch1',62,1,0,'2015-08-12',34.00,35.00,30.00,NULL,4.00,NULL,NULL,NULL,35.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(73,'batch1asd',62,13,0,'2015-08-12',34.00,35.00,30.00,NULL,4.00,NULL,NULL,NULL,35.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(74,'batch1asd',62,12,0,'2015-08-12',34.00,35.00,30.00,NULL,4.00,NULL,NULL,NULL,35.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(75,'batch1',62,1,0,'2015-08-12',34.00,35.00,30.00,NULL,4.00,NULL,NULL,NULL,35.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(76,'batch1asd',62,13,0,'2015-08-12',34.00,35.00,30.00,NULL,4.00,NULL,NULL,NULL,35.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(77,'testbatch',62,16,0,'2015-08-12',34.00,35.00,30.00,NULL,4.00,NULL,NULL,NULL,35.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(78,'batch1new123',63,11,0,'2015-08-12',34.00,35.00,30.00,NULL,4.00,NULL,NULL,NULL,35.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(79,'batch2',63,2,0,'2015-08-12',56.00,59.00,50.00,NULL,4.00,NULL,NULL,NULL,58.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(80,'batch1asdwww',63,14,0,'2015-08-12',34.00,35.00,30.00,NULL,4.00,NULL,NULL,NULL,35.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(83,'batch1new123',63,11,0,'2015-08-12',34.00,35.00,30.00,NULL,4.00,NULL,NULL,NULL,35.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(84,'batch2',63,2,0,'2015-08-12',56.00,59.00,50.00,NULL,4.00,NULL,NULL,NULL,58.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(85,'UBatchtest',63,17,0,'2015-08-12',34.00,35.00,30.00,NULL,4.00,NULL,NULL,NULL,35.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(86,'batch1new123',63,11,0,'2015-08-12',34.00,35.00,30.00,NULL,4.00,NULL,NULL,NULL,35.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(87,'batch2',63,2,0,'2015-08-12',56.00,59.00,50.00,NULL,4.00,NULL,NULL,NULL,58.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(88,'originalBatch',63,18,0,'2015-08-12',34.00,35.00,30.00,NULL,4.00,NULL,NULL,NULL,35.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(89,'batch1new123',63,11,0,'2015-08-12',34.00,35.00,30.00,NULL,4.00,NULL,NULL,NULL,35.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(90,'batch2',63,2,0,'2015-08-12',56.00,59.00,50.00,NULL,4.00,NULL,NULL,NULL,58.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(91,'originalBatch',63,19,0,'2015-08-12',34.00,35.00,30.00,NULL,4.00,NULL,NULL,NULL,35.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(92,'batch1new123',63,11,0,'2015-08-12',34.00,35.00,30.00,NULL,4.00,NULL,NULL,NULL,35.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(93,'batch2',63,2,0,'2015-08-12',56.00,59.00,50.00,NULL,4.00,NULL,NULL,NULL,58.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(94,'asd123',63,20,0,'2015-08-12',34.00,35.00,30.00,NULL,4.00,NULL,NULL,NULL,35.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(95,'batch1new123',63,11,0,'2015-08-12',34.00,35.00,30.00,NULL,4.00,NULL,NULL,NULL,35.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(96,'batch2',63,2,0,'2015-08-12',56.00,59.00,50.00,NULL,4.00,NULL,NULL,NULL,58.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(97,'rrrr',63,21,0,'2015-08-12',34.00,35.00,30.00,NULL,4.00,NULL,NULL,NULL,35.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(98,'batch1new123',63,11,0,'2015-08-12',34.00,35.00,30.00,NULL,4.00,NULL,NULL,NULL,35.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(99,'batch2',63,2,0,'2015-08-12',56.00,59.00,50.00,NULL,4.00,NULL,NULL,NULL,58.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(100,'rrrr123',63,22,0,'2015-08-12',34.00,35.00,30.00,NULL,4.00,NULL,NULL,NULL,35.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(101,'batch1new123',63,11,0,'2015-08-12',34.00,35.00,30.00,NULL,4.00,NULL,NULL,NULL,35.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(102,'batch2',63,2,0,'2015-08-12',56.00,59.00,50.00,NULL,4.00,NULL,NULL,NULL,58.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(103,'wwwww',63,23,0,'2015-08-12',34.00,35.00,30.00,NULL,4.00,NULL,NULL,NULL,35.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(104,'batch1new123',63,11,0,'2015-08-12',34.00,35.00,30.00,NULL,4.00,NULL,NULL,NULL,35.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(105,'batch2',63,2,0,'2015-08-12',56.00,59.00,50.00,NULL,4.00,NULL,NULL,NULL,58.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(106,'ssddsd',63,24,0,'2015-08-12',34.00,35.00,30.00,NULL,4.00,NULL,NULL,NULL,35.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(107,'batch1new123',63,11,0,'2015-08-12',34.00,35.00,30.00,NULL,4.00,NULL,NULL,NULL,35.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(108,'batch2',63,2,0,'2015-08-12',56.00,59.00,50.00,NULL,4.00,NULL,NULL,NULL,58.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(109,'dddd',63,25,0,'2015-08-12',34.00,35.00,30.00,NULL,4.00,NULL,NULL,NULL,35.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(110,'batch1new123',63,11,0,'2015-08-12',34.00,35.00,30.00,NULL,4.00,NULL,NULL,NULL,35.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(111,'batch2',63,2,0,'2015-08-12',56.00,59.00,50.00,NULL,4.00,NULL,NULL,NULL,58.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(112,'dddd',63,26,0,'2015-08-12',34.00,35.00,30.00,NULL,4.00,NULL,NULL,NULL,35.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(113,'batch1new123',63,11,0,'2015-08-12',34.00,35.00,30.00,NULL,4.00,NULL,NULL,NULL,35.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(114,'batch2',63,2,0,'2015-08-12',56.00,59.00,50.00,NULL,4.00,NULL,NULL,NULL,58.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(115,'dddd',63,26,0,'2015-08-12',34.00,35.00,30.00,NULL,4.00,NULL,NULL,NULL,35.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(116,'batch1new123',63,11,0,'2015-08-12',34.00,35.00,30.00,NULL,4.00,NULL,NULL,NULL,35.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(117,'batch2',63,2,0,'2015-08-12',56.00,59.00,50.00,NULL,4.00,NULL,NULL,NULL,58.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(118,'dddd',63,26,0,'2015-08-12',34.00,35.00,30.00,NULL,4.00,NULL,NULL,NULL,35.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(119,'batch1new123',63,11,0,'2015-08-12',34.00,35.00,30.00,NULL,4.00,NULL,NULL,NULL,35.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(120,'batch2',63,2,0,'2015-08-12',56.00,59.00,50.00,NULL,4.00,NULL,NULL,NULL,58.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(121,'dddd',63,26,0,'2015-08-12',34.00,35.00,30.00,NULL,4.00,NULL,NULL,NULL,35.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(122,'batch1',64,1,0,'2015-08-12',34.00,35.00,30.00,NULL,4.00,NULL,NULL,NULL,35.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(123,'batch2',64,2,0,'2015-08-12',56.00,59.00,50.00,NULL,4.00,NULL,NULL,NULL,58.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(124,'batch2testtt',64,15,0,'2015-08-12',56.00,59.00,50.00,NULL,4.00,NULL,NULL,NULL,58.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(125,'batch1',64,1,0,'2015-08-12',34.00,35.00,30.00,NULL,4.00,NULL,NULL,NULL,35.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(126,'batch2',64,2,0,'2015-08-12',56.00,59.00,50.00,NULL,4.00,NULL,NULL,NULL,58.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(127,'batch2testtt',64,15,0,'2015-08-12',56.00,59.00,50.00,NULL,4.00,NULL,NULL,NULL,58.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(128,'batch1',64,1,0,'2015-08-12',34.00,35.00,30.00,NULL,4.00,NULL,NULL,NULL,35.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(129,'batch2',64,2,0,'2015-08-12',56.00,59.00,50.00,NULL,4.00,NULL,NULL,NULL,58.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(130,'batch2testtt',64,15,0,'2015-08-12',56.00,59.00,50.00,NULL,4.00,NULL,NULL,NULL,58.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(131,'batch1new1231',63,27,0,'2015-08-12',34.00,35.00,30.00,NULL,4.00,NULL,NULL,NULL,35.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(132,'batch2',63,2,0,'2015-08-12',56.00,59.00,50.00,NULL,4.00,NULL,NULL,NULL,58.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(133,'dddd',63,26,0,'2015-08-12',34.00,35.00,30.00,NULL,4.00,NULL,NULL,NULL,35.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(134,'batch1',62,1,0,'2015-08-12',34.00,35.00,30.00,NULL,4.00,NULL,NULL,NULL,35.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(135,'batch1asd',62,28,0,'2015-08-12',34.00,35.00,30.00,NULL,4.00,NULL,NULL,NULL,35.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(136,'batch1asd',62,12,0,'2015-08-12',34.00,35.00,30.00,NULL,4.00,NULL,NULL,NULL,35.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(137,'batch1',62,1,0,'2015-08-12',34.00,35.00,30.00,NULL,4.00,NULL,NULL,NULL,35.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(138,'batch1asd',62,29,0,'2015-08-12',34.00,35.00,30.00,NULL,4.00,NULL,NULL,NULL,35.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(139,'batch1asd',62,12,0,'2015-08-12',34.00,35.00,30.00,NULL,4.00,NULL,NULL,NULL,35.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(140,'batch1new1231',63,27,0,'2015-08-12',34.00,35.00,30.00,NULL,4.00,NULL,NULL,NULL,35.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(141,'batch2',63,2,0,'2015-08-12',56.00,59.00,50.00,NULL,4.00,NULL,NULL,NULL,58.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(142,'dddd',63,26,0,'2015-08-12',34.00,35.00,30.00,NULL,4.00,NULL,NULL,NULL,35.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(143,'batch1new1231',63,27,0,'2015-06-04',34.00,35.00,30.00,'2015-06-11',4.00,NULL,NULL,NULL,35.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(144,'batch2',63,2,0,'2015-06-08',56.00,59.00,50.00,'2015-06-11',4.00,NULL,NULL,NULL,58.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(145,'dddd',63,26,0,'2015-06-08',34.00,35.00,30.00,'2015-06-11',4.00,NULL,NULL,NULL,35.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(147,'batch2',63,2,0,'2015-06-08',56.00,59.00,50.00,'2015-06-11',4.00,NULL,NULL,NULL,58.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(148,'batch1',66,1,0,'2015-08-12',34.00,35.00,30.00,NULL,4.00,NULL,NULL,NULL,35.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(149,'batch1asd',66,13,0,'2015-08-12',34.00,35.00,30.00,NULL,4.00,NULL,NULL,NULL,35.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(150,'batch1asdwww',66,14,0,'2015-08-12',34.00,35.00,30.00,NULL,4.00,NULL,NULL,NULL,35.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(151,'batch1',66,1,0,'2015-08-12',34.00,35.00,30.00,'2015-06-12',4.00,NULL,NULL,NULL,35.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(152,'batch1asd',66,13,0,'2015-08-12',34.00,35.00,30.00,'2015-06-12',4.00,NULL,NULL,NULL,35.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(153,'batch1',67,1,0,'2015-08-12',34.00,35.00,30.00,NULL,4.00,NULL,NULL,NULL,35.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(154,'batch2',67,2,0,'2015-08-12',56.00,59.00,50.00,NULL,4.00,NULL,NULL,NULL,58.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(155,'batch1asd',67,29,0,'2015-08-12',34.00,35.00,30.00,NULL,4.00,NULL,NULL,NULL,35.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(156,'batch1',67,1,0,'2015-08-12',34.00,35.00,30.00,'2015-06-12',4.00,NULL,NULL,NULL,35.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(157,'batch2',67,2,0,'2015-08-12',56.00,59.00,50.00,'2015-06-12',4.00,NULL,NULL,NULL,58.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(158,'batch1asd',67,29,0,'2015-08-12',34.00,35.00,30.00,'2015-06-12',4.00,NULL,NULL,NULL,35.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(159,'batch1new123',67,11,0,'2015-08-12',34.00,35.00,30.00,NULL,4.00,NULL,NULL,NULL,35.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(160,'batch1',61,1,0,'2015-08-12',34.00,35.00,30.00,'2015-06-12',4.00,NULL,NULL,NULL,35.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(161,'batch2',61,2,0,'2015-08-12',56.00,59.00,50.00,'2015-06-12',4.00,NULL,NULL,NULL,58.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(162,'batchProd3',68,30,0,'2018-09-12',11.00,1.00,33.00,NULL,3.00,NULL,NULL,NULL,3.00,NULL,NULL,0,0,NULL,NULL,NULL,NULL),(163,'batch23Prod3',68,31,0,'2016-08-13',33.00,44.00,4.00,NULL,4.00,NULL,NULL,NULL,4.00,NULL,NULL,0,0,NULL,NULL,NULL,NULL),(164,NULL,NULL,NULL,0,'2015-08-12',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(165,NULL,NULL,NULL,NULL,'2015-08-12',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(166,'batch2',45,2,0,'2015-07-18',56.00,59.00,50.00,NULL,4.00,NULL,NULL,NULL,58.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(167,'batch2',45,2,0,'2015-07-18',56.00,59.00,50.00,'2015-05-22',4.00,NULL,NULL,NULL,58.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(168,'batch1',62,1,0,'2015-07-18',34.00,35.00,30.00,'2015-06-10',4.00,NULL,NULL,NULL,35.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(169,'batch1asd',62,12,0,'2016-07-24',34.00,35.00,30.00,'2015-06-11',4.00,NULL,NULL,NULL,35.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(170,'batch1',62,1,0,'2015-07-18',34.00,35.00,30.00,'2015-06-11',4.00,NULL,NULL,NULL,35.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(171,'batch1asd',62,12,0,'2016-07-24',34.00,35.00,30.00,'2015-06-11',4.00,NULL,NULL,NULL,35.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(172,'batch1asd',62,29,0,'2015-07-18',34.00,35.00,30.00,'2015-06-12',4.00,NULL,NULL,NULL,35.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(173,'myBatchProd4',62,32,0,'2015-06-17',22.00,2.00,22.00,NULL,22.00,NULL,NULL,NULL,22.00,NULL,NULL,0,0,NULL,NULL,NULL,NULL),(174,'batchProd3',68,30,0,'2015-07-18',11.00,1.00,33.00,'2015-06-12',3.00,NULL,NULL,NULL,3.00,NULL,0,0,0,NULL,NULL,NULL,NULL),(175,'batch23Prod3',68,31,0,'2016-08-13',33.00,44.00,4.00,'2015-06-12',4.00,NULL,NULL,NULL,4.00,NULL,0,0,0,NULL,NULL,NULL,NULL),(176,'bNEWP3UPDATE',68,33,0,'2015-06-27',22.00,2.00,2.00,NULL,2.00,NULL,NULL,NULL,2.00,NULL,0,0,0,NULL,NULL,NULL,NULL),(177,'batchProd3',68,30,0,'2015-07-18',11.00,1.00,33.00,'2015-06-12',3.00,NULL,NULL,NULL,3.00,NULL,0,0,0,NULL,NULL,NULL,NULL),(178,'batch23Prod3',68,31,0,'2016-08-13',33.00,44.00,4.00,'2015-06-12',4.00,NULL,NULL,NULL,4.00,NULL,0,0,0,NULL,NULL,NULL,NULL),(179,'asdPRODUCT3',68,34,0,'2015-06-27',22.00,2.00,2.00,'2015-06-12',2.00,NULL,NULL,NULL,2.00,NULL,0,0,0,NULL,NULL,NULL,NULL),(180,'batchProd3',68,30,0,'2015-07-18',11.00,1.00,33.00,'2015-06-12',3.00,NULL,NULL,NULL,3.00,NULL,NULL,0,0,NULL,NULL,NULL,NULL),(181,'batch23Prod3',68,31,0,'2016-08-13',33.00,44.00,4.00,'2015-06-12',4.00,NULL,NULL,NULL,4.00,NULL,NULL,0,0,NULL,NULL,NULL,NULL),(182,'asdPRODUCT3',68,34,0,'2015-06-27',22.00,2.00,2.00,'2015-06-12',2.00,NULL,NULL,NULL,2.00,NULL,NULL,0,0,NULL,NULL,NULL,NULL),(183,'batch1',69,1,0,'2015-07-18',34.00,35.00,30.00,'2015-06-18',4.00,NULL,NULL,NULL,35.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(184,'batch1',69,1,0,'2015-07-18',34.00,35.00,30.00,'2015-06-18',4.00,NULL,NULL,NULL,35.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(185,'batch1new123',70,11,0,'2015-07-18',34.00,35.00,30.00,'2015-06-17',4.00,NULL,NULL,NULL,35.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(186,'batch1asd',45,12,0,'2016-07-24',34.00,35.00,30.00,'2015-06-11',4.00,NULL,NULL,NULL,35.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(187,'batch2',45,2,0,'2015-07-18',56.00,59.00,50.00,'2015-05-22',4.00,NULL,NULL,NULL,58.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(188,'batch1asd',45,12,0,'2016-07-24',34.00,35.00,30.00,'2015-05-22',4.00,NULL,NULL,NULL,35.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(189,'batch2',45,2,0,'2015-07-18',56.00,59.00,50.00,'2015-05-22',4.00,NULL,NULL,NULL,58.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(190,'batch1asd',45,12,0,'2016-07-24',34.00,35.00,30.00,'2015-05-22',4.00,NULL,NULL,NULL,35.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(191,'batch2',45,2,0,'2015-07-18',56.00,59.00,50.00,'2015-05-22',4.00,NULL,NULL,NULL,58.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(192,'batch1asd',45,12,0,'2016-07-24',34.00,35.00,30.00,'2015-05-22',4.00,NULL,NULL,NULL,35.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(193,'batch2',45,2,0,'2015-07-18',56.00,59.00,50.00,'2015-05-22',4.00,NULL,NULL,NULL,58.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(194,'batch1asd',45,12,0,'2016-07-24',34.00,35.00,30.00,'2015-05-22',4.00,NULL,NULL,NULL,35.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(195,'batch2',45,2,0,'2015-07-18',56.00,59.00,50.00,'2015-05-22',4.00,NULL,NULL,NULL,58.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(196,'batch1asd',45,12,0,'2016-07-24',34.00,35.00,30.00,'2015-05-22',4.00,NULL,NULL,NULL,35.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(197,'batch2',45,2,0,'2015-07-18',56.00,59.00,50.00,'2015-05-22',4.00,NULL,NULL,NULL,58.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(198,'batch1new123',70,11,0,'2015-07-18',34.00,35.00,30.00,'2015-06-17',4.00,NULL,NULL,NULL,35.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(199,'batch1new123',70,11,0,'2015-07-18',34.00,35.00,30.00,'2015-06-17',4.00,NULL,NULL,NULL,35.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(200,'batch1',44,1,0,'2015-07-18',34.00,35.00,30.00,'2015-06-18',4.00,NULL,NULL,NULL,35.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(201,'batch2',44,2,0,'2015-07-18',56.00,59.00,50.00,'2015-05-22',4.00,NULL,NULL,NULL,58.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(202,'batch1',44,1,0,'2015-07-18',34.00,35.00,30.00,'2015-05-22',4.00,NULL,NULL,NULL,35.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(203,'batch2',44,2,0,'2015-07-18',56.00,59.00,50.00,'2015-05-22',4.00,NULL,NULL,NULL,58.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(204,'myAsd',76,41,0,'2015-07-18',11.00,11.00,11.00,NULL,11.00,NULL,NULL,NULL,11.00,NULL,NULL,1,0,NULL,NULL,NULL,NULL),(205,'batch1',44,1,0,'2015-07-18',34.00,35.00,30.00,'2015-05-22',4.00,NULL,NULL,NULL,35.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(206,'batch2',44,2,0,'2015-07-18',56.00,59.00,50.00,'2015-05-22',4.00,NULL,NULL,NULL,58.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(207,'batch2',44,2,0,'2015-07-18',56.00,59.00,50.00,'2015-05-22',4.00,NULL,NULL,NULL,58.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(208,'batch1',44,1,0,'2015-07-18',34.00,35.00,30.00,'2015-05-22',4.00,NULL,NULL,NULL,35.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(209,'asdBatch',44,2,0,'2015-07-17',56.00,59.00,50.00,'2015-05-22',4.00,NULL,NULL,NULL,58.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(210,'asdBatch12',44,2,0,'2015-07-17',56.00,59.00,50.00,'2015-05-22',4.00,NULL,NULL,NULL,58.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(211,'xyz',44,2,0,'2015-07-17',56.00,59.00,50.00,'2015-05-22',4.00,NULL,NULL,NULL,58.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(212,'qrrrr',76,42,0,'2015-07-18',11.00,11.00,11.00,NULL,11.00,NULL,NULL,NULL,11.00,NULL,NULL,0,0,NULL,NULL,NULL,NULL),(213,'newASD',76,43,0,'2015-07-17',0.00,0.00,0.00,NULL,0.00,NULL,NULL,NULL,0.00,NULL,NULL,0,0,NULL,NULL,NULL,NULL),(214,'ttyytyty',76,44,0,'2015-07-17',0.00,0.00,0.00,NULL,0.00,NULL,NULL,NULL,0.00,NULL,NULL,0,0,NULL,NULL,NULL,NULL),(215,'www',76,45,0,'2015-07-18',0.00,0.00,0.00,NULL,0.00,NULL,NULL,NULL,0.00,NULL,NULL,0,0,NULL,NULL,NULL,NULL),(216,'xyz',81,2,0,'2015-07-18',56.00,59.00,50.00,NULL,4.00,NULL,NULL,NULL,58.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(217,'xyzMOD',81,46,0,'2015-07-18',56.00,59.00,50.00,'2015-07-17',4.00,NULL,NULL,NULL,58.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(218,'cipla batch',82,47,0,'2015-07-17',11.00,11.00,11.00,NULL,NULL,NULL,NULL,NULL,11.00,NULL,NULL,0,0,NULL,NULL,NULL,NULL),(219,'cipla batch MOd',82,48,0,'2015-07-17',11.00,11.00,11.00,'2015-07-17',0.00,NULL,NULL,NULL,11.00,NULL,NULL,0,0,NULL,NULL,NULL,NULL),(220,'cipla batch MOd',82,49,0,'2015-07-17',11.00,11.00,11.00,'2015-07-17',0.00,NULL,NULL,NULL,11.00,NULL,NULL,0,0,NULL,NULL,NULL,NULL),(221,'aaa',81,50,0,'2015-07-17',0.00,0.00,0.00,NULL,0.00,NULL,NULL,NULL,0.00,'qqqqq',NULL,0,0,NULL,NULL,NULL,NULL),(222,'q',83,51,0,'2015-07-18',11.00,11.00,11.00,NULL,NULL,NULL,NULL,NULL,11.00,NULL,NULL,0,0,NULL,NULL,NULL,NULL),(223,'q',83,52,0,'2015-07-18',11.00,11.00,11.00,NULL,NULL,NULL,NULL,NULL,11.00,NULL,NULL,0,0,NULL,NULL,NULL,NULL),(224,'trtrt',84,53,0,'2015-07-18',1.00,1.00,111.00,NULL,NULL,NULL,NULL,NULL,1.00,NULL,NULL,1,0,NULL,NULL,NULL,NULL),(225,'trtrt12',84,54,0,'2015-07-18',1.00,1.00,111.00,'2015-07-17',0.00,NULL,NULL,NULL,1.00,NULL,NULL,1,0,NULL,NULL,NULL,NULL),(226,'feASDMOD2',86,60,0,'2015-07-17',23.00,2.00,1.00,'2015-07-17',0.00,NULL,NULL,NULL,1.00,NULL,NULL,1,0,NULL,NULL,NULL,NULL),(227,'feASDMOD28',86,61,0,'2015-07-17',23.00,2.00,1.00,'2015-07-17',0.00,NULL,NULL,NULL,1.00,NULL,NULL,1,0,NULL,NULL,NULL,NULL),(228,'batch1',69,1,0,NULL,34.00,35.00,30.00,'2015-05-22',4.00,NULL,NULL,NULL,35.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(229,'weweqwMOD',87,63,0,'2015-07-17',44.00,44.00,4.00,'2015-07-17',0.00,NULL,NULL,NULL,4.00,NULL,NULL,1,0,NULL,NULL,NULL,NULL),(230,'Batch 4 New',56,9,0,'2016-07-24',65.00,60.00,50.00,'2017-06-20',4.00,NULL,NULL,NULL,60.00,NULL,NULL,0,0,NULL,NULL,NULL,NULL),(231,'weweqwMOD',87,63,0,'2015-07-17',44.00,44.00,4.00,'2015-08-06',0.00,NULL,NULL,NULL,4.00,NULL,NULL,1,0,NULL,NULL,NULL,NULL),(232,'batch1asd',88,88,0,'2015-10-02',34.00,35.00,30.00,NULL,4.00,NULL,NULL,NULL,35.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(233,'xyz',89,89,0,'2015-10-09',56.00,59.00,50.00,NULL,4.00,NULL,NULL,NULL,58.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(234,'xyz',0,0,0,'2015-10-09',56.00,59.00,50.00,'2015-10-28',4.00,NULL,NULL,NULL,58.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(235,'SatyajitBAtch',57,64,0,'2016-07-24',33.00,33.00,33.00,'2017-06-20',3.00,NULL,NULL,NULL,33.00,NULL,NULL,1,0,NULL,NULL,NULL,NULL),(236,'dddd',63,65,0,'2015-06-08',34.00,35.00,31.00,'2015-06-11',4.00,NULL,NULL,NULL,35.00,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(237,'batch2testtt',95,15,0,'2015-10-09',56.00,59.00,50.00,'2015-10-31',4.00,NULL,0.00,34.00,58.00,'',NULL,1,1,NULL,NULL,NULL,NULL),(238,'batch2testtt',95,15,0,'2015-10-09',56.00,59.00,50.00,'2015-10-31',4.00,NULL,0.00,34.00,58.00,'',NULL,1,1,NULL,NULL,NULL,NULL),(239,'batch2testtt',95,15,0,'2015-10-09',56.00,59.00,50.00,'2015-10-31',4.00,NULL,0.00,34.00,58.00,'',NULL,1,1,NULL,NULL,NULL,NULL),(240,'batch2testtt',95,15,0,'2015-10-09',56.00,59.00,50.00,'2015-10-31',4.00,NULL,0.00,34.00,58.00,'',NULL,1,1,NULL,NULL,NULL,NULL),(241,'batch2testtt',95,15,0,'2015-10-09',56.00,59.00,50.00,'2015-10-31',4.00,NULL,0.00,34.00,58.00,'',NULL,1,1,NULL,NULL,NULL,NULL),(242,'batch2testtt',95,15,0,'2015-10-09',56.00,59.00,50.00,'2015-10-31',4.00,NULL,0.00,34.00,58.00,'',NULL,1,1,NULL,NULL,NULL,NULL),(243,'batch2testtt',95,15,0,'2015-10-09',56.00,59.00,50.00,'2015-10-31',4.00,NULL,0.00,34.00,58.00,'',NULL,1,1,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `productbatchactive` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productbatchold`
--

DROP TABLE IF EXISTS `productbatchold`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `productbatchold` (
  `id` double NOT NULL,
  `GoodsReceiptID` double DEFAULT NULL,
  `PID` double DEFAULT NULL,
  `BatchNumber` varchar(45) DEFAULT NULL,
  `MRP` double DEFAULT NULL,
  `PurchaseRate` double DEFAULT NULL,
  `SaleRate` double DEFAULT NULL,
  `MfgDate` date DEFAULT NULL,
  `ExpiryDate` date DEFAULT NULL,
  `Stock` double DEFAULT NULL,
  `Sold` double DEFAULT NULL,
  `Damaged` double DEFAULT NULL,
  `Expired` double DEFAULT NULL,
  `Returned` double DEFAULT NULL,
  `BatchStatus1` double DEFAULT NULL,
  `BatchStatus2` double DEFAULT NULL,
  `BatchStatus3` double DEFAULT NULL,
  `Free` double DEFAULT NULL,
  `flgLock` tinyint(1) DEFAULT NULL,
  `flgActive` tinyint(1) DEFAULT NULL,
  `CreatedBy` double DEFAULT NULL,
  `CreatedOn` datetime DEFAULT NULL,
  `ModifiedBy` double DEFAULT NULL,
  `ModifiedOn` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productbatchold`
--

LOCK TABLES `productbatchold` WRITE;
/*!40000 ALTER TABLE `productbatchold` DISABLE KEYS */;
INSERT INTO `productbatchold` VALUES (1,1000,1,'wewqeqw',50,40,45,'0002-02-14','0002-01-18',5,20,NULL,NULL,NULL,NULL,NULL,NULL,10,0,1,10,'2015-03-04 16:27:30',NULL,NULL);
/*!40000 ALTER TABLE `productbatchold` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productcontents`
--

DROP TABLE IF EXISTS `productcontents`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `productcontents` (
  `ID` double NOT NULL AUTO_INCREMENT,
  `productID` double DEFAULT NULL,
  `contentID` double DEFAULT NULL,
  `contentStrength` double DEFAULT NULL,
  `contUnit` varchar(30) DEFAULT NULL,
  `DPCOrate` double DEFAULT NULL,
  `CreatedBy` double DEFAULT NULL,
  `CreatedOn` datetime DEFAULT NULL,
  `ModifiedBy` double DEFAULT NULL,
  `ModifiedOn` datetime DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=206 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productcontents`
--

LOCK TABLES `productcontents` WRITE;
/*!40000 ALTER TABLE `productcontents` DISABLE KEYS */;
INSERT INTO `productcontents` VALUES (3,3,2,1,NULL,NULL,NULL,NULL,NULL,NULL),(6,6,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(11,11,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(51,0,3,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(114,9,3,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(118,10,2,2,NULL,NULL,NULL,NULL,NULL,NULL),(120,12,3,2,NULL,NULL,NULL,NULL,NULL,NULL),(127,8,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(128,8,3,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(146,7,1,12,NULL,NULL,NULL,NULL,NULL,NULL),(169,16,2,67,NULL,NULL,NULL,NULL,NULL,NULL),(170,16,3,45,NULL,NULL,NULL,NULL,NULL,NULL),(189,5,2,22,NULL,NULL,NULL,NULL,NULL,NULL),(190,5,1,21,NULL,NULL,NULL,NULL,NULL,NULL),(191,2,3,0,NULL,NULL,NULL,NULL,NULL,NULL),(192,2,2,0,NULL,NULL,NULL,NULL,NULL,NULL),(195,1,4,0,NULL,NULL,NULL,NULL,NULL,NULL),(196,1,2,0,NULL,NULL,NULL,NULL,NULL,NULL),(197,1,1,55,NULL,NULL,NULL,NULL,NULL,NULL),(198,17,1,0,NULL,NULL,NULL,NULL,NULL,NULL),(200,23,1,111,NULL,NULL,NULL,NULL,NULL,NULL),(201,20,1,22,NULL,NULL,NULL,NULL,NULL,NULL),(202,2,3,0,NULL,NULL,NULL,NULL,NULL,NULL),(203,2,2,0,NULL,NULL,NULL,NULL,NULL,NULL),(204,2,15,0,NULL,NULL,NULL,NULL,NULL,NULL),(205,4,15,0,NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `productcontents` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productscheme`
--

DROP TABLE IF EXISTS `productscheme`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `productscheme` (
  `id` double NOT NULL,
  `productID` double NOT NULL,
  `BatchNumber` varchar(45) NOT NULL,
  `Quantity` int(11) NOT NULL,
  `scheme` int(11) DEFAULT NULL,
  `flgLock` int(11) DEFAULT NULL,
  `LockedBy` double DEFAULT NULL,
  `LockedOn` datetime DEFAULT NULL,
  `flgActive` int(11) DEFAULT NULL,
  `CreatedBy` double DEFAULT NULL,
  `CreatedOn` datetime DEFAULT NULL,
  `ModifiedBy` double DEFAULT NULL,
  `ModifiedOn` datetime DEFAULT NULL,
  PRIMARY KEY (`id`,`productID`,`Quantity`,`BatchNumber`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productscheme`
--

LOCK TABLES `productscheme` WRITE;
/*!40000 ALTER TABLE `productscheme` DISABLE KEYS */;
INSERT INTO `productscheme` VALUES (1,1,'0',10,1,0,NULL,NULL,1,10,'2015-03-04 18:37:05',NULL,NULL),(2,3,'0',30,2,1,10,'2015-03-04 18:37:05',1,10,'2015-03-04 18:37:05',NULL,NULL),(3,10,'0',20,1,0,NULL,NULL,1,10,'2015-03-04 18:37:05',NULL,NULL);
/*!40000 ALTER TABLE `productscheme` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `producttype`
--

DROP TABLE IF EXISTS `producttype`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `producttype` (
  `ID` int(11) NOT NULL,
  `Description` varchar(45) DEFAULT NULL,
  `CreatedBy` double DEFAULT NULL,
  `CreatedOn` datetime DEFAULT NULL,
  `ModifiedBy` double DEFAULT NULL,
  `ModifiedOn` datetime DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `producttype`
--

LOCK TABLES `producttype` WRITE;
/*!40000 ALTER TABLE `producttype` DISABLE KEYS */;
INSERT INTO `producttype` VALUES (1,'NS',NULL,NULL,NULL,NULL),(2,'SD',NULL,NULL,NULL,NULL),(3,'H1',NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `producttype` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `purchaseorder`
--

DROP TABLE IF EXISTS `purchaseorder`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `purchaseorder` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `OrderNum` decimal(10,0) DEFAULT NULL,
  `CID` double DEFAULT NULL,
  `SID` double DEFAULT NULL,
  `MID` double DEFAULT NULL,
  `goodsReceived` int(11) DEFAULT NULL,
  `OrderDate` date DEFAULT NULL,
  `OrderAmt` decimal(10,0) DEFAULT NULL,
  `Remark` varchar(150) DEFAULT NULL,
  `flgEmail` int(11) DEFAULT NULL,
  `flgCancelPending` int(11) DEFAULT NULL,
  `flgScheme` int(11) DEFAULT NULL,
  `flgUrgent` int(11) DEFAULT NULL,
  `flgVoid` int(11) DEFAULT NULL,
  `VoidReason` varchar(150) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `CreatedBy` double DEFAULT NULL,
  `CreatedOn` datetime DEFAULT NULL,
  `ModifiedBy` double DEFAULT NULL,
  `ModifiedOn` datetime DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=12408 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `purchaseorder`
--

LOCK TABLES `purchaseorder` WRITE;
/*!40000 ALTER TABLE `purchaseorder` DISABLE KEYS */;
INSERT INTO `purchaseorder` VALUES (3,NULL,1000,2,3,2,'2015-11-03',15,NULL,0,0,0,0,0,'',1,10,NULL,NULL,NULL),(7890,NULL,0,0,0,2,'1998-08-01',0,'',0,0,0,0,0,'',1,10,NULL,NULL,NULL),(12346,NULL,1000,NULL,NULL,2,'1998-08-01',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,10,NULL,NULL,NULL),(12347,NULL,1000,NULL,NULL,2,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,10,NULL,NULL,NULL),(12348,NULL,1000,NULL,NULL,2,'2015-11-03',12,NULL,1,NULL,NULL,NULL,NULL,NULL,1,10,NULL,NULL,NULL),(12349,NULL,2000,NULL,NULL,2,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,10,NULL,NULL,NULL),(12350,NULL,2000,NULL,NULL,2,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,10,NULL,NULL,NULL),(12351,NULL,2000,NULL,NULL,2,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,10,NULL,NULL,NULL),(12352,NULL,2000,NULL,NULL,2,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,10,NULL,NULL,NULL),(12353,NULL,2000,3,1,2,'2016-04-03',0,NULL,0,0,0,0,0,'',1,10,NULL,NULL,NULL),(12354,NULL,3000,4,1,2,'2016-04-03',0,NULL,0,0,0,0,0,'',2,10,NULL,NULL,NULL),(12355,NULL,1000,1,2,2,'2015-03-16',0,NULL,0,0,0,0,0,'',1,10,NULL,NULL,NULL),(12356,NULL,2000,3,1,2,'2015-03-16',0,NULL,0,0,0,0,0,'',2,10,NULL,NULL,NULL),(12357,NULL,1000,2,2,2,NULL,450,NULL,0,0,0,0,0,'',0,10,NULL,NULL,NULL),(12358,NULL,1000,1,2,2,NULL,2380,NULL,0,0,0,0,0,'',0,10,NULL,NULL,NULL),(12359,NULL,1000,2,3,2,NULL,680,NULL,1,0,0,0,0,'',0,10,NULL,NULL,NULL),(12360,NULL,1000,2,1,2,NULL,230,NULL,0,0,0,0,0,'',0,10,NULL,NULL,NULL),(12361,NULL,1000,2,1,2,'2015-03-22',1480,NULL,0,0,1,1,0,'',0,10,NULL,NULL,NULL),(12362,NULL,2000,3,4,2,'2015-03-25',1840,NULL,1,1,0,1,1,'xyzReason',0,10,NULL,NULL,NULL),(12363,NULL,2000,3,4,2,'2015-03-25',2380,'xyzRemark',0,1,0,0,0,'',NULL,10,NULL,NULL,NULL),(12364,NULL,2000,3,4,2,'2015-03-26',16380,NULL,0,0,0,0,1,'MyVoidText',2,10,NULL,NULL,NULL),(12365,NULL,2000,3,4,2,NULL,4590,'Remark I Have entered',1,0,1,1,1,'My VoidText reasdasjdkajshdkja',2,10,NULL,10,'2015-10-30 19:59:35'),(12366,NULL,2000,3,4,2,'2015-03-26',2720,'',0,0,0,0,0,'',2,10,NULL,NULL,NULL),(12367,NULL,1000,1,1,2,'2015-03-26',450,'',0,0,0,0,0,'',NULL,10,NULL,NULL,NULL),(12368,NULL,3000,4,5,2,'2015-03-26',300,'',0,0,0,0,0,'',NULL,10,NULL,NULL,NULL),(12369,NULL,3000,4,3,2,'2015-03-27',8980,'sanofi remark',1,1,1,1,1,'sanofi...',2,10,NULL,NULL,NULL),(12370,NULL,2000,3,4,2,'2015-03-27',770,'asd',0,0,0,0,1,'asd',2,10,NULL,NULL,NULL),(12371,NULL,2000,0,4,2,'2015-03-27',0,'',1,1,1,1,0,'',NULL,10,NULL,NULL,NULL),(12372,NULL,1000,2,1,2,NULL,640,'xyzRemark',1,1,1,1,0,'',2,10,NULL,NULL,NULL),(12373,NULL,1000,2,1,2,'2015-03-27',400,'xyzRemark',1,1,1,1,0,'',NULL,10,NULL,NULL,NULL),(12374,NULL,3000,4,3,2,'2015-03-27',9000,'test.....',1,0,0,0,0,'',NULL,10,NULL,NULL,NULL),(12375,NULL,2000,3,4,2,'2015-04-04',1840,'',0,0,0,0,0,'',NULL,10,NULL,NULL,NULL),(12376,NULL,1000,1,2,2,'2015-04-13',120,'',0,0,0,0,0,'',NULL,10,NULL,NULL,NULL),(12377,NULL,1000,2,2,1,'2015-06-08',360,'',0,0,0,0,0,'',99,10,NULL,NULL,NULL),(12378,NULL,3000,4,3,2,'2015-04-27',1320,'',1,1,1,1,0,'',NULL,10,NULL,NULL,NULL),(12381,NULL,1000,1,2,1,'2015-06-08',330,'qdsa',1,1,0,1,0,'',NULL,10,NULL,NULL,NULL),(12382,NULL,1000,1,2,1,'2015-06-08',830,'efwr',0,0,0,0,0,'',NULL,10,NULL,NULL,NULL),(12383,NULL,3000,4,3,NULL,'2015-06-12',2100,'',0,0,0,0,0,'',NULL,10,NULL,NULL,NULL),(12384,NULL,1000,2,2,NULL,NULL,220,'ssa',0,0,0,0,0,'',NULL,10,NULL,NULL,NULL),(12385,NULL,1000,2,2,NULL,NULL,120,'',0,0,0,0,0,'',NULL,10,NULL,NULL,NULL),(12386,NULL,1000,1,2,NULL,NULL,110,'',0,0,0,0,0,'',NULL,10,NULL,NULL,NULL),(12387,NULL,1000,2,2,NULL,NULL,600,'',0,1,0,1,0,'',NULL,10,NULL,NULL,NULL),(12388,NULL,1000,2,0,NULL,NULL,0,'csacas',0,0,0,0,0,NULL,NULL,10,NULL,NULL,NULL),(12389,NULL,1000,2,0,NULL,NULL,0,'ttttttttttt',0,0,0,0,0,NULL,NULL,10,NULL,NULL,NULL),(12390,NULL,1000,2,0,NULL,NULL,960,'safda',0,0,0,0,0,'',NULL,10,NULL,NULL,NULL),(12391,NULL,1000,2,0,NULL,NULL,0,'da',0,0,0,0,0,NULL,NULL,10,NULL,NULL,NULL),(12392,NULL,1000,2,0,NULL,NULL,0,'',1,0,0,0,0,'',NULL,10,NULL,NULL,NULL),(12393,NULL,1000,2,0,NULL,NULL,2180,'asdasd',0,0,0,0,0,NULL,NULL,10,NULL,NULL,NULL),(12394,NULL,1000,2,0,NULL,NULL,480,'',0,0,0,0,0,NULL,NULL,10,NULL,NULL,NULL),(12395,NULL,2000,7,0,NULL,NULL,0,'',0,0,0,0,0,NULL,NULL,10,NULL,NULL,NULL),(12396,NULL,2000,3,0,NULL,NULL,15606150,'',0,0,0,0,0,NULL,NULL,10,NULL,NULL,NULL),(12397,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,10,NULL,NULL,NULL),(12398,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,10,NULL,NULL,NULL),(12399,NULL,1000,2,0,NULL,NULL,0,'',0,1,0,0,0,'',NULL,10,'2015-10-30 20:00:16',10,'2015-10-30 20:29:24'),(12400,NULL,1000,2,0,NULL,NULL,0,'123',0,0,0,0,0,NULL,NULL,10,'2015-10-30 20:06:09',NULL,NULL),(12401,NULL,1000,1,0,NULL,'2015-10-30',680,'',0,0,0,0,0,NULL,NULL,10,'2015-10-30 23:24:32',NULL,NULL),(12402,NULL,1000,2,0,NULL,'2015-10-30',680,'',0,0,0,0,0,NULL,1,10,'2015-10-30 23:39:53',NULL,NULL),(12403,NULL,1000,2,0,NULL,'2015-10-30',0,'',0,0,0,0,0,NULL,1,10,'2015-10-30 23:48:17',NULL,NULL),(12404,NULL,1000,2,0,NULL,'2015-10-31',60,'',0,0,0,0,1,NULL,1,10,'2015-10-31 13:48:37',NULL,NULL),(12405,NULL,1000,2,0,NULL,'2015-10-31',680,'',0,0,0,0,1,NULL,1,10,'2015-10-31 13:53:34',10,'2015-10-31 13:57:42'),(12406,NULL,1000,2,0,NULL,'2015-10-31',0,'',0,0,0,0,1,'qwe',1,10,'2015-10-31 13:59:01',NULL,NULL),(12407,NULL,1000,1,0,NULL,'2015-10-31',0,'',0,0,0,0,1,'345',1,10,'2015-10-31 14:27:07',NULL,NULL);
/*!40000 ALTER TABLE `purchaseorder` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `purchaseproducts`
--

DROP TABLE IF EXISTS `purchaseproducts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `purchaseproducts` (
  `CompanyOrderID` double NOT NULL,
  `CID` double NOT NULL,
  `PID` double NOT NULL,
  `Quantity` double DEFAULT NULL,
  `Scheme` double DEFAULT NULL,
  `Value` double DEFAULT NULL,
  `Remark` varchar(150) DEFAULT NULL,
  `flgReceived` int(11) DEFAULT NULL,
  `CreatedBy` double DEFAULT NULL,
  `CreatedOn` datetime DEFAULT NULL,
  `ModifiedBy` double DEFAULT NULL,
  `ModifiedOn` datetime DEFAULT NULL,
  PRIMARY KEY (`CompanyOrderID`,`CID`,`PID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `purchaseproducts`
--

LOCK TABLES `purchaseproducts` WRITE;
/*!40000 ALTER TABLE `purchaseproducts` DISABLE KEYS */;
INSERT INTO `purchaseproducts` VALUES (0,2000,1,123,45,1230,'',NULL,NULL,NULL,NULL,NULL),(0,2000,6,34,0,2040,'',NULL,NULL,NULL,NULL,NULL),(3,10,1,3,1,NULL,NULL,1,NULL,NULL,NULL,NULL),(3,1000,2,23,2,345,NULL,1,NULL,NULL,NULL,NULL),(12343,10,0,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL),(12343,10,2,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL),(12346,1000,1,10,0,0,NULL,1,NULL,NULL,NULL,NULL),(12346,1000,2,20,0,0,NULL,1,NULL,NULL,NULL,NULL),(12347,1000,4,34,0,0,NULL,1,NULL,NULL,NULL,NULL),(12347,1000,5,3,0,0,NULL,1,NULL,NULL,NULL,NULL),(12348,1000,1,10,0,100,NULL,1,NULL,NULL,NULL,NULL),(12348,1000,2,20,0,200,NULL,0,NULL,NULL,NULL,NULL),(12349,2000,6,10,0,0,NULL,1,NULL,NULL,NULL,NULL),(12349,2000,7,12,0,0,NULL,1,NULL,NULL,NULL,NULL),(12350,2000,6,10,0,0,NULL,1,NULL,NULL,NULL,NULL),(12350,2000,7,12,0,0,NULL,1,NULL,NULL,NULL,NULL),(12351,2000,6,10,0,0,NULL,1,NULL,NULL,NULL,NULL),(12351,2000,7,12,0,0,NULL,1,NULL,NULL,NULL,NULL),(12352,2000,6,12,0,0,NULL,1,NULL,NULL,NULL,NULL),(12353,2000,6,10,0,0,NULL,1,NULL,NULL,NULL,NULL),(12353,2000,7,12,0,0,NULL,1,NULL,NULL,NULL,NULL),(12354,3000,10,12,0,0,NULL,1,NULL,NULL,NULL,NULL),(12355,1000,3,12,0,0,'',1,NULL,NULL,NULL,NULL),(12355,1000,4,120,0,0,'',1,NULL,NULL,NULL,NULL),(12356,2000,6,12,0,0,NULL,0,NULL,NULL,NULL,NULL),(12356,2000,8,12,0,0,NULL,0,NULL,NULL,NULL,NULL),(12357,1000,1,45,0,450,NULL,1,NULL,NULL,NULL,NULL),(12358,1000,3,34,0,1020,NULL,1,NULL,NULL,NULL,NULL),(12358,1000,4,34,0,1360,NULL,1,NULL,NULL,NULL,NULL),(12359,1000,2,34,0,680,NULL,1,NULL,NULL,NULL,NULL),(12360,1000,1,23,0,230,NULL,1,NULL,NULL,NULL,NULL),(12361,1000,2,23,0,460,'',1,NULL,NULL,NULL,NULL),(12361,1000,3,34,0,1020,'',0,NULL,NULL,NULL,NULL),(12362,2000,8,23,0,1840,NULL,0,NULL,NULL,NULL,NULL),(12363,2000,7,34,0,2380,NULL,0,NULL,NULL,NULL,NULL),(12364,2000,7,234,0,16380,NULL,0,NULL,NULL,NULL,NULL),(12365,2000,1,123,45,1230,'',NULL,NULL,NULL,NULL,NULL),(12365,2000,6,56,0,3360,'',NULL,NULL,NULL,NULL,NULL),(12366,2000,8,34,0,2720,NULL,0,NULL,NULL,NULL,NULL),(12367,1000,1,45,0,450,NULL,1,NULL,NULL,NULL,NULL),(12368,3000,10,3,0,300,NULL,0,NULL,NULL,NULL,NULL),(12369,3000,9,22,0,1980,'',1,NULL,NULL,NULL,NULL),(12369,3000,10,70,0,7000,'',1,NULL,NULL,NULL,NULL),(12370,2000,7,11,0,770,'',1,NULL,NULL,NULL,NULL),(12372,1000,2,12,3,240,'',NULL,NULL,NULL,NULL,NULL),(12372,1000,4,10,0,400,'',NULL,NULL,NULL,NULL,NULL),(12373,1000,4,10,0,400,NULL,2,NULL,NULL,NULL,NULL),(12374,3000,10,90,0,9000,NULL,1,NULL,NULL,NULL,NULL),(12375,2000,8,23,34,1840,NULL,1,NULL,NULL,NULL,NULL),(12376,1000,1,12,43,120,NULL,1,NULL,NULL,NULL,NULL),(12377,1000,1,12,12,360,NULL,1,NULL,NULL,NULL,NULL),(12378,3000,11,12,22,1320,NULL,0,NULL,NULL,NULL,NULL),(12381,1000,1,11,0,330,NULL,1,NULL,NULL,NULL,NULL),(12381,1000,2,23,2,231,NULL,1,NULL,NULL,NULL,NULL),(12382,1000,1,10,10,100,NULL,1,NULL,NULL,NULL,NULL),(12382,1000,2,20,10,400,NULL,1,NULL,NULL,NULL,NULL),(12382,1000,3,11,1,330,NULL,1,NULL,NULL,NULL,NULL),(12383,3000,3,10,10,300,NULL,NULL,NULL,NULL,NULL,NULL),(12383,3000,9,20,20,1800,NULL,NULL,NULL,NULL,NULL,NULL),(12384,1000,2,11,11,220,NULL,NULL,NULL,NULL,NULL,NULL),(12385,1000,1,12,0,120,NULL,NULL,NULL,NULL,NULL,NULL),(12386,1000,1,11,1,110,NULL,NULL,NULL,NULL,NULL,NULL),(12387,1000,5,12,2,600,NULL,NULL,NULL,NULL,NULL,NULL),(12388,1000,2,12,2,240,NULL,NULL,NULL,NULL,NULL,NULL),(12389,1000,5,22,2,1100,NULL,NULL,NULL,NULL,NULL,NULL),(12390,1000,2,2,1,40,'',NULL,NULL,NULL,NULL,NULL),(12390,1000,4,23,0,920,'',NULL,NULL,NULL,NULL,NULL),(12391,1000,2,3240,0,64800,NULL,NULL,NULL,NULL,NULL,NULL),(12392,1000,2,34,0,680,'',NULL,NULL,NULL,NULL,NULL),(12392,1000,4,34,0,1360,'',NULL,NULL,NULL,NULL,NULL),(12392,1000,5,12,0,600,'',NULL,NULL,NULL,NULL,NULL),(12393,1000,4,12,34,480,NULL,NULL,NULL,NULL,NULL,NULL),(12393,1000,5,34,0,1700,NULL,NULL,NULL,NULL,NULL,NULL),(12393,1000,21,34,0,0,NULL,NULL,NULL,NULL,NULL,NULL),(12394,1000,4,12,0,480,NULL,NULL,NULL,NULL,NULL,NULL),(12396,2000,13,50,1,15606150,NULL,NULL,NULL,NULL,NULL,NULL),(12401,1000,2,34,45,680,NULL,NULL,NULL,NULL,NULL,NULL),(12402,1000,2,34,0,680,NULL,NULL,NULL,NULL,NULL,NULL),(12404,1000,2,3,0,60,NULL,NULL,NULL,NULL,NULL,NULL),(12405,1000,2,34,0,680,NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `purchaseproducts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `purpleaidsettings`
--

DROP TABLE IF EXISTS `purpleaidsettings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `purpleaidsettings` (
  `ID` double NOT NULL AUTO_INCREMENT,
  `Name` varchar(100) DEFAULT NULL,
  `CategoryGroupID` double DEFAULT NULL,
  `CategoryGroup` varchar(45) DEFAULT NULL,
  `Description` varchar(45) DEFAULT NULL,
  `Value` varchar(50) DEFAULT NULL,
  `Unit` varchar(45) DEFAULT NULL,
  `DefaultValue` varchar(45) DEFAULT NULL,
  `ValidationType` int(5) DEFAULT NULL,
  `MinimumValue` int(5) DEFAULT NULL,
  `MaximumValue` int(5) DEFAULT NULL,
  `ValueSet` int(5) DEFAULT NULL,
  `DisplayOrder` int(5) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=81 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `purpleaidsettings`
--

LOCK TABLES `purpleaidsettings` WRITE;
/*!40000 ALTER TABLE `purpleaidsettings` DISABLE KEYS */;
INSERT INTO `purpleaidsettings` VALUES (10,'GR_PO_Window',2,'purchase',NULL,'1',NULL,'1',1,2,5,NULL,2),(20,'GR_BATCH_Window',1,'sale',NULL,'34',NULL,'1',1,1,4,NULL,5),(30,'RR_window',2,'purchase ',NULL,'34',NULL,'1',1,2,5,NULL,3),(40,'addNearExpiry',4,'Return Register',NULL,'56',NULL,'90',1,1,2,NULL,4),(50,'CloudAPIpath',3,'accounts',NULL,'http://localhost:8081/Purple/restCloud/apiPurpleai',NULL,'http://localhost:8081/Purple/restCloud/apiPur',1,1,2,NULL,1),(60,'salesVelocity',5,'Sale',NULL,'6',NULL,'6',1,1,2,NULL,7),(70,'sessionTime',6,'System Settings',NULL,'30',NULL,'30',1,1,2,NULL,8),(80,'salesHistory',7,'Sale',NULL,'12',NULL,'12',1,1,2,NULL,6);
/*!40000 ALTER TABLE `purpleaidsettings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `purpleaidsettingsold`
--

DROP TABLE IF EXISTS `purpleaidsettingsold`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `purpleaidsettingsold` (
  `ID` double NOT NULL AUTO_INCREMENT,
  `Name` varchar(100) DEFAULT NULL,
  `CategoryGroupID` double DEFAULT NULL,
  `CategoryGroup` varchar(45) DEFAULT NULL,
  `Description` varchar(45) DEFAULT NULL,
  `Value` varchar(50) DEFAULT NULL,
  `Unit` varchar(45) DEFAULT NULL,
  `DefaultValue` varchar(45) DEFAULT NULL,
  `ValidationType` int(5) DEFAULT NULL,
  `MinimumValue` int(5) DEFAULT NULL,
  `MaximumValue` int(5) DEFAULT NULL,
  `ValueSet` int(5) DEFAULT NULL,
  `DisplayOrder` int(5) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `purpleaidsettingsold`
--

LOCK TABLES `purpleaidsettingsold` WRITE;
/*!40000 ALTER TABLE `purpleaidsettingsold` DISABLE KEYS */;
INSERT INTO `purpleaidsettingsold` VALUES (10,'GR_PO_Window',2,'purchase',NULL,'13',NULL,'1',1,2,5,NULL,1),(20,'GR_BATCH_Window',1,'sale',NULL,'300',NULL,'2',1,1,4,NULL,1),(30,'RR_window',2,'purchase ',NULL,'200',NULL,'2',1,2,5,NULL,3),(50,'http://localhost:8081/Purple/restCloud/apiPurpleaidCloud/setData',3,'accounts',NULL,'111',NULL,'2',NULL,NULL,NULL,NULL,1),(60,'dddddddddd',2,'purchase',NULL,'100',NULL,'2',NULL,NULL,NULL,NULL,2);
/*!40000 ALTER TABLE `purpleaidsettingsold` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ratedifference`
--

DROP TABLE IF EXISTS `ratedifference`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ratedifference` (
  `ID` int(11) NOT NULL,
  `CreatedBy` int(11) DEFAULT NULL,
  `CreatedOn` datetime DEFAULT NULL,
  `ModifiedBy` int(11) DEFAULT NULL,
  `ModifiedOn` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ratedifference`
--

LOCK TABLES `ratedifference` WRITE;
/*!40000 ALTER TABLE `ratedifference` DISABLE KEYS */;
/*!40000 ALTER TABLE `ratedifference` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reason`
--

DROP TABLE IF EXISTS `reason`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `reason` (
  `ID` double NOT NULL AUTO_INCREMENT,
  `Reason` varchar(45) DEFAULT NULL,
  `flgSystemValue` int(11) DEFAULT NULL,
  `flgReturn` int(11) DEFAULT NULL,
  `flgCreditNote` int(11) DEFAULT NULL,
  `flgDebitNote` int(11) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reason`
--

LOCK TABLES `reason` WRITE;
/*!40000 ALTER TABLE `reason` DISABLE KEYS */;
INSERT INTO `reason` VALUES (1,'saleable return',1,1,1,1),(2,'Expiry',1,1,1,1),(3,'Damaged',1,1,1,0),(4,'DPCO',1,1,1,1),(5,'Rate Difference',1,1,1,0),(7,'n1',0,1,1,1),(8,'new',0,1,1,1),(9,'new1',0,1,1,1),(10,'qwqw',0,1,1,0),(11,'new3',0,1,1,0),(12,'newReason',0,0,1,1),(13,'n',0,1,1,0),(14,'n1',0,0,0,0);
/*!40000 ALTER TABLE `reason` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `region`
--

DROP TABLE IF EXISTS `region`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `region` (
  `ID` double NOT NULL AUTO_INCREMENT,
  `description` varchar(30) DEFAULT NULL,
  `CreatedBy` double DEFAULT NULL,
  `CreatedOn` datetime DEFAULT NULL,
  `ModifiedBy` double DEFAULT NULL,
  `ModifiedOn` datetime DEFAULT NULL,
  `code` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `region`
--

LOCK TABLES `region` WRITE;
/*!40000 ALTER TABLE `region` DISABLE KEYS */;
INSERT INTO `region` VALUES (1,'chinchwadUpdate',NULL,NULL,NULL,NULL,'chinchwadReg'),(5,'Pune',NULL,'2015-04-09 00:00:00',NULL,'2015-04-09 00:00:00','R1'),(6,'Jalgaon',NULL,NULL,NULL,NULL,'R2'),(7,'Katraj',NULL,NULL,NULL,NULL,'katrajReg'),(8,'shivane',NULL,NULL,NULL,NULL,'shivaneReg'),(26,'asd',NULL,NULL,NULL,NULL,'asd'),(27,'uu',NULL,NULL,NULL,NULL,'yy'),(28,'n',NULL,NULL,NULL,NULL,'hh'),(29,'pp',NULL,NULL,NULL,NULL,'oo'),(30,'asd',NULL,NULL,NULL,NULL,'asd');
/*!40000 ALTER TABLE `region` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reportcategory`
--

DROP TABLE IF EXISTS `reportcategory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `reportcategory` (
  `ID` double NOT NULL,
  `Name` varchar(45) DEFAULT NULL,
  `Description` varchar(45) DEFAULT NULL,
  `Position` double DEFAULT NULL,
  `flgActive` tinyint(10) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reportcategory`
--

LOCK TABLES `reportcategory` WRITE;
/*!40000 ALTER TABLE `reportcategory` DISABLE KEYS */;
INSERT INTO `reportcategory` VALUES (1,'Summary','Summary report Description',1,1),(2,'Sales','Sales REport Description',2,1);
/*!40000 ALTER TABLE `reportcategory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reportlist`
--

DROP TABLE IF EXISTS `reportlist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `reportlist` (
  `ID` double NOT NULL,
  `RCID` double DEFAULT NULL,
  `RMID` double DEFAULT NULL,
  `RCCID` double DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reportlist`
--

LOCK TABLES `reportlist` WRITE;
/*!40000 ALTER TABLE `reportlist` DISABLE KEYS */;
INSERT INTO `reportlist` VALUES (1,1,1,NULL),(2,1,2,NULL),(3,1,1,3),(4,1,1,4),(5,1,1,5);
/*!40000 ALTER TABLE `reportlist` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reportmaster`
--

DROP TABLE IF EXISTS `reportmaster`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `reportmaster` (
  `ID` double NOT NULL,
  `Name` varchar(45) DEFAULT NULL,
  `Description` varchar(45) DEFAULT NULL,
  `reportURL` varchar(45) DEFAULT NULL,
  `uiURL` varchar(45) DEFAULT NULL,
  `flgActive` tinyint(14) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reportmaster`
--

LOCK TABLES `reportmaster` WRITE;
/*!40000 ALTER TABLE `reportmaster` DISABLE KEYS */;
INSERT INTO `reportmaster` VALUES (1,'Summary Report1','Report 1 Desc','Report 1 URL','Report 1 uiURL',1),(2,'Summary Report2','Report 1 Desc','Report 1 URL','Report 1 uiURL',1),(3,'Summary SubReport1','SubReport1Desc','SubReport1 URL',NULL,1),(4,'Summary SubReport2','SubReport2Desc',NULL,NULL,1),(5,'Summary SubReport3','SubReport3Desc',NULL,NULL,1);
/*!40000 ALTER TABLE `reportmaster` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `returnregister`
--

DROP TABLE IF EXISTS `returnregister`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `returnregister` (
  `ID` double NOT NULL AUTO_INCREMENT,
  `custID` double NOT NULL,
  `creditNoteID` double DEFAULT NULL,
  `QtyReturn` double DEFAULT NULL,
  `FreeReturn` double DEFAULT NULL,
  `RRDcount` int(11) DEFAULT NULL,
  `CCcount` int(11) DEFAULT NULL,
  `Date` date DEFAULT NULL,
  `Type` int(11) DEFAULT NULL,
  `TotalType` int(11) DEFAULT NULL,
  `Remark` varchar(45) DEFAULT NULL,
  `Total` decimal(10,2) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `TotalProduct` double DEFAULT NULL,
  `LockReason` varchar(65) DEFAULT NULL,
  `voidReason` varchar(65) DEFAULT NULL,
  `flgVoid` tinyint(1) DEFAULT NULL,
  `flgLock` tinyint(1) DEFAULT NULL,
  `flgVerified` int(11) DEFAULT NULL,
  `verifiedByID` double DEFAULT NULL,
  `verifiedOn` datetime DEFAULT NULL,
  `CreatedBy` double DEFAULT NULL,
  `CreatedOn` datetime DEFAULT NULL,
  `ModifiedBy` double DEFAULT NULL,
  `ModifiedOn` datetime DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=72 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `returnregister`
--

LOCK TABLES `returnregister` WRITE;
/*!40000 ALTER TABLE `returnregister` DISABLE KEYS */;
INSERT INTO `returnregister` VALUES (1,1000,1,NULL,NULL,NULL,2,'2015-05-11',1,1,'remark',1.00,1,12,'',NULL,0,0,1,10,'0000-00-00 00:00:00',NULL,NULL,10,'2015-08-03 10:38:40'),(2,1000,1,NULL,NULL,1,NULL,'2015-04-12',1,1,'remark',44.00,1,1,'reason2',NULL,0,0,0,NULL,NULL,NULL,NULL,10,'2015-08-14 14:23:54'),(3,1000,3,NULL,NULL,NULL,NULL,'2015-07-12',1,1,'remark123',78.00,2,56,'reason3',NULL,0,0,0,NULL,NULL,NULL,NULL,10,'2015-07-24 14:21:46'),(4,1000,4,NULL,NULL,NULL,NULL,'2015-04-12',1,1,'remark',78.00,1,56,'',NULL,0,0,0,NULL,NULL,NULL,NULL,10,'2015-07-24 16:45:04'),(5,1000,0,NULL,NULL,NULL,1,'2015-04-12',1,2,'remark',9778.00,1,45,'',NULL,0,0,0,NULL,NULL,NULL,NULL,10,'2015-08-03 15:33:51'),(6,1000,NULL,NULL,NULL,NULL,NULL,'2015-04-12',2,2,'remark',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(7,1000,0,NULL,NULL,NULL,NULL,'2015-07-16',1,0,NULL,NULL,0,0,NULL,NULL,0,0,0,NULL,NULL,10,'2015-07-24 14:36:34',10,'2015-07-24 15:30:08'),(8,1000,0,NULL,NULL,NULL,NULL,NULL,2,0,NULL,NULL,0,0,NULL,NULL,0,0,0,NULL,NULL,10,'2015-07-24 15:16:11',NULL,NULL),(9,1000,0,NULL,NULL,NULL,NULL,'2015-07-24',1,1,NULL,NULL,0,0,'',NULL,0,0,0,NULL,NULL,10,'2015-07-24 16:57:31',10,'2015-07-24 17:02:04'),(10,0,0,NULL,NULL,NULL,NULL,'2015-07-24',1,1,NULL,NULL,0,0,'',NULL,0,0,0,NULL,NULL,10,'2015-07-24 18:32:09',10,'2015-07-24 18:32:48'),(11,1002,0,NULL,NULL,NULL,2,'2015-08-22',1,1,'remark',100.00,0,0,NULL,NULL,1,1,0,NULL,NULL,10,'2015-08-03 15:34:43',10,'2015-08-03 15:40:31'),(12,1002,0,NULL,NULL,NULL,NULL,'2015-08-20',1,2,NULL,8.00,0,0,NULL,NULL,1,0,0,NULL,NULL,10,'2015-08-03 16:26:06',NULL,NULL),(13,1052,0,NULL,NULL,NULL,NULL,'2015-08-29',1,2,NULL,11.00,0,0,NULL,NULL,1,0,0,NULL,NULL,10,'2015-08-03 16:30:26',NULL,NULL),(14,1052,0,NULL,NULL,NULL,NULL,'2015-08-21',1,1,NULL,9.00,0,0,NULL,NULL,0,0,0,NULL,NULL,10,'2015-08-03 16:32:26',NULL,NULL),(15,1002,0,NULL,NULL,NULL,NULL,'2015-08-22',1,1,NULL,9.00,0,0,NULL,NULL,0,0,0,NULL,NULL,10,'2015-08-03 16:33:05',NULL,NULL),(21,0,0,NULL,NULL,NULL,NULL,'2015-08-06',2,2,NULL,1.00,0,0,NULL,NULL,0,0,0,NULL,NULL,10,'2015-08-06 11:44:54',NULL,NULL),(22,0,0,NULL,NULL,NULL,NULL,'2015-08-07',2,0,NULL,NULL,0,0,NULL,NULL,0,0,0,NULL,NULL,10,'2015-08-06 11:51:35',NULL,NULL),(23,0,0,NULL,NULL,2,NULL,'2015-08-06',2,2,NULL,100.00,1,2,NULL,NULL,0,0,1,10,NULL,10,'2015-08-06 12:01:52',10,'2015-08-14 13:03:15'),(24,0,0,NULL,NULL,NULL,NULL,'2015-08-06',2,2,'aaa',30.00,0,0,NULL,NULL,0,0,1,10,'2015-08-07 12:56:39',10,'2015-08-06 12:05:35',10,'2015-08-07 12:56:43'),(27,1052,0,NULL,NULL,NULL,NULL,'2015-08-21',1,0,NULL,NULL,0,0,NULL,NULL,0,0,0,NULL,NULL,10,'2015-08-06 16:54:27',NULL,NULL),(28,0,0,NULL,NULL,NULL,NULL,'2015-08-06',2,2,'as',1.00,0,0,NULL,NULL,0,0,0,NULL,NULL,10,'2015-08-06 16:55:10',NULL,NULL),(29,1053,0,NULL,NULL,NULL,NULL,'2015-08-07',1,1,'as',NULL,0,0,NULL,NULL,0,0,1,10,NULL,10,'2015-08-06 17:57:49',10,'2015-08-06 18:34:23'),(30,0,0,NULL,NULL,NULL,NULL,'2015-08-07',2,2,NULL,11.00,0,0,'',NULL,0,0,0,NULL,NULL,10,'2015-08-07 16:22:54',10,'2015-08-07 17:02:29'),(33,0,0,NULL,NULL,1,1,'2015-08-13',1,1,'asd',0.00,3,1,NULL,NULL,0,0,0,NULL,NULL,10,'2015-08-13 11:42:12',10,'2015-08-13 13:14:24'),(34,1052,0,NULL,NULL,3,NULL,'2015-08-13',1,2,'qq',164.00,0,2,NULL,NULL,0,0,0,NULL,NULL,10,'2015-08-13 12:58:51',NULL,NULL),(35,0,0,NULL,NULL,2,2,'2015-08-13',1,1,'aaa',0.00,3,2,NULL,NULL,0,0,0,NULL,NULL,10,'2015-08-13 13:00:28',10,'2015-09-09 19:43:45'),(36,0,0,NULL,NULL,1,NULL,'2015-08-14',1,0,NULL,NULL,0,1,NULL,NULL,0,0,0,NULL,NULL,10,'2015-08-14 14:26:03',NULL,NULL),(37,0,0,NULL,NULL,1,NULL,'2015-08-14',2,0,NULL,NULL,0,1,NULL,NULL,0,0,0,NULL,NULL,10,'2015-08-14 14:28:39',NULL,NULL),(38,0,0,NULL,NULL,1,NULL,'2015-08-14',2,0,NULL,0.00,1,1,NULL,NULL,0,0,0,NULL,NULL,10,'2015-08-14 14:30:39',10,'2015-08-14 14:39:39'),(39,0,0,NULL,NULL,1,NULL,'2015-08-14',2,0,NULL,0.00,1,1,NULL,NULL,0,0,0,NULL,NULL,10,'2015-08-14 14:44:18',10,'2015-08-14 14:45:50'),(40,0,0,NULL,NULL,1,NULL,'2015-08-14',2,2,NULL,11.00,0,1,NULL,NULL,0,0,0,NULL,NULL,10,'2015-08-14 14:49:46',10,'2015-08-14 14:52:36'),(41,0,0,NULL,NULL,1,NULL,'2015-08-14',2,0,NULL,NULL,0,1,NULL,NULL,0,0,0,NULL,NULL,10,'2015-08-14 15:01:47',NULL,NULL),(42,0,0,NULL,NULL,1,NULL,'2015-08-14',2,0,NULL,0.00,1,1,NULL,NULL,0,0,0,NULL,NULL,10,'2015-08-14 15:13:27',10,'2015-08-14 15:14:34'),(43,0,0,NULL,NULL,1,NULL,'2015-08-14',2,2,'sd',30.00,1,1,NULL,NULL,0,0,0,NULL,NULL,10,'2015-08-14 15:19:35',10,'2015-08-14 15:39:08'),(44,0,0,NULL,NULL,2,16,'2015-08-14',2,2,'as',50.00,1,1,NULL,NULL,0,0,0,NULL,NULL,10,'2015-08-14 16:00:58',10,'2015-08-14 16:02:06'),(45,0,0,NULL,NULL,1,NULL,'2015-08-14',2,0,'sf',0.00,1,1,NULL,NULL,0,0,0,NULL,NULL,10,'2015-08-14 16:04:07',10,'2015-10-10 14:00:56'),(46,0,0,NULL,NULL,2,NULL,'2015-08-14',2,0,NULL,0.00,1,1,NULL,NULL,0,0,0,NULL,NULL,10,'2015-08-14 16:10:29',10,'2015-08-14 16:11:34'),(47,0,0,NULL,NULL,2,NULL,'2015-08-14',2,0,NULL,0.00,1,1,NULL,NULL,0,0,0,NULL,NULL,10,'2015-08-14 16:17:39',10,'2015-08-14 16:18:39'),(48,0,0,NULL,NULL,2,NULL,'2015-08-14',2,0,NULL,0.00,1,1,NULL,NULL,0,0,0,NULL,NULL,10,'2015-08-14 16:20:08',10,'2015-08-14 16:21:38'),(49,0,0,NULL,NULL,1,NULL,'2015-08-14',2,0,NULL,NULL,0,1,NULL,NULL,0,0,0,NULL,NULL,10,'2015-08-14 16:31:46',NULL,NULL),(50,0,0,NULL,NULL,1,16,'2015-08-14',2,0,NULL,NULL,0,1,NULL,NULL,0,0,0,NULL,NULL,10,'2015-08-14 16:36:20',NULL,NULL),(57,0,0,1,1,1,NULL,'2015-09-09',2,2,'da',22.00,1,1,NULL,NULL,0,0,0,NULL,NULL,10,'2015-09-09 13:19:08',10,'2015-09-09 13:21:52'),(58,0,0,1,1,2,NULL,'2015-09-09',2,2,NULL,23.00,1,2,NULL,NULL,0,0,0,NULL,NULL,10,'2015-09-09 13:24:23',10,'2015-09-09 13:28:50'),(59,0,0,1,1,2,NULL,'2015-09-09',2,2,'sdf',50.00,1,2,NULL,NULL,0,0,0,NULL,NULL,10,'2015-09-09 14:19:11',10,'2015-09-09 14:19:45'),(60,0,0,1,1,1,NULL,'2015-09-09',2,0,NULL,0.00,1,2,NULL,NULL,0,0,0,NULL,NULL,10,'2015-09-09 21:12:02',10,'2015-09-09 21:13:52'),(61,0,0,1,1,2,NULL,'2015-09-09',2,0,NULL,0.00,1,2,NULL,NULL,0,0,0,NULL,NULL,10,'2015-09-09 21:28:57',NULL,NULL),(62,0,0,1,1,3,NULL,'2015-09-10',2,2,'aS',56.00,1,2,NULL,NULL,0,0,0,NULL,NULL,10,'2015-09-10 14:24:23',10,'2015-09-10 14:47:06'),(63,0,0,6,6,1,NULL,'2015-09-10',2,2,'remark',66.00,0,1,NULL,NULL,0,0,0,NULL,NULL,10,'2015-09-10 14:59:44',NULL,NULL),(64,0,0,6,6,1,NULL,'2015-09-11',2,0,NULL,NULL,0,1,NULL,NULL,0,0,0,NULL,NULL,10,'2015-09-10 15:01:24',NULL,NULL),(65,0,0,5,5,1,NULL,'2015-09-10',2,2,NULL,5.00,0,1,NULL,NULL,0,0,0,NULL,NULL,10,'2015-09-10 15:12:21',NULL,NULL),(66,0,0,1,1,1,NULL,'2015-09-10',2,0,NULL,NULL,0,1,NULL,NULL,0,0,0,NULL,NULL,10,'2015-09-10 15:16:02',NULL,NULL),(68,0,0,1,1,3,NULL,'2015-09-03',2,0,NULL,0.00,1,1,NULL,NULL,0,0,0,NULL,NULL,10,'2015-09-10 15:21:32',10,'2015-09-10 15:24:33'),(69,0,0,1,1,3,NULL,'2015-09-10',2,2,'add',22.00,1,1,NULL,NULL,0,0,0,NULL,NULL,10,'2015-09-10 15:25:44',10,'2015-09-10 15:29:06'),(71,0,0,2,2,4,NULL,'2015-09-10',2,2,'xc',160.00,1,2,NULL,NULL,0,0,0,NULL,NULL,10,'2015-09-10 16:39:51',10,'2015-09-10 16:44:41');
/*!40000 ALTER TABLE `returnregister` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `returnregisterdetails`
--

DROP TABLE IF EXISTS `returnregisterdetails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `returnregisterdetails` (
  `ID` double NOT NULL AUTO_INCREMENT,
  `RRID` double DEFAULT NULL,
  `SAID` double DEFAULT NULL,
  `productID` double DEFAULT NULL,
  `CCID` double DEFAULT NULL,
  `deleted` double DEFAULT NULL,
  `Amount` decimal(10,2) DEFAULT NULL,
  `conditions` int(11) DEFAULT NULL,
  `conditionName` varchar(95) DEFAULT NULL,
  `Remark` varchar(65) DEFAULT NULL,
  `batchNo` varchar(45) DEFAULT NULL,
  `Rate` decimal(10,2) DEFAULT NULL,
  `MRP` decimal(10,2) DEFAULT NULL,
  `purchaseRate` decimal(10,2) DEFAULT NULL,
  `sellRate` decimal(10,2) DEFAULT NULL,
  `Qty` double DEFAULT NULL,
  `QtyReturn` int(11) DEFAULT NULL,
  `FreeReturn` int(11) DEFAULT NULL,
  `expiryDate` datetime DEFAULT NULL,
  `CreatedBy` double DEFAULT NULL,
  `CreatedOn` datetime DEFAULT NULL,
  `ModifiedBy` double DEFAULT NULL,
  `ModifiedOn` datetime DEFAULT NULL,
  `companyID` double DEFAULT NULL,
  `CNID` int(11) DEFAULT NULL,
  `CNamt` decimal(10,2) DEFAULT NULL,
  `CNvat` decimal(10,2) DEFAULT NULL,
  `CNremark` varchar(55) DEFAULT NULL,
  `CNrate` double DEFAULT NULL,
  `lessPercentage` decimal(10,2) DEFAULT NULL,
  `lessAmount` decimal(10,2) DEFAULT NULL,
  `NetCredit` decimal(10,2) DEFAULT NULL,
  `flgRefundVAT` tinyint(4) DEFAULT NULL,
  `VATpercentage` decimal(10,2) DEFAULT NULL,
  `VATamt` decimal(10,2) DEFAULT NULL,
  `VATrefund` decimal(10,2) DEFAULT NULL,
  `CNreturnAmount` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=94 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `returnregisterdetails`
--

LOCK TABLES `returnregisterdetails` WRITE;
/*!40000 ALTER TABLE `returnregisterdetails` DISABLE KEYS */;
INSERT INTO `returnregisterdetails` VALUES (1,1,1,1,38,0,67.00,1,NULL,'remark','batch1test',67.00,78.00,45.00,67.00,1,3,NULL,NULL,NULL,NULL,10,'2015-10-30 11:49:25',1000,48,-1.00,NULL,NULL,2,NULL,1.00,NULL,0,3.00,0.00,0.00,-1.00),(2,1,2,2,39,0,174.00,2,NULL,'remark','2',58.00,22.00,34.00,58.00,3,4,NULL,NULL,NULL,NULL,10,'2015-10-31 16:12:38',1000,60,77.00,NULL,NULL,1,11.00,5.00,NULL,1,34.90,34.00,34.00,43.00),(3,3,1,3,0,0,300.00,1,NULL,'remark','3',NULL,89.00,45.00,28.00,3,5,NULL,'2015-12-12 00:00:00',NULL,NULL,10,'2015-10-31 16:12:38',1000,60,144.50,0.00,'remak',3,11.00,16.50,NULL,1,2.80,11.00,11.00,133.50),(4,3,3,1,0,0,13.00,2,NULL,'remark','7',13.00,89.00,34.00,13.00,1,4,NULL,'2015-12-12 00:00:00',NULL,NULL,10,'2015-10-31 15:57:37',1000,44,NULL,0.00,'remark',2,0.00,0.00,NULL,0,3.00,0.00,0.00,0.00),(5,3,NULL,25,0,0,NULL,34,NULL,NULL,'qwe',NULL,12.00,12.00,12.00,56,1,NULL,'2015-12-12 00:00:00',10,'2015-07-24 14:21:46',10,'2015-10-19 14:55:51',1000,NULL,NULL,NULL,NULL,0,NULL,NULL,NULL,0,NULL,NULL,NULL,NULL),(6,4,NULL,1,0,1,1020.00,112,NULL,NULL,'batch1asd',30.00,34.00,30.00,35.00,34,7,NULL,NULL,10,'2015-07-24 14:36:59',10,'2015-10-06 17:13:44',1000,15,NULL,NULL,NULL,0,NULL,NULL,NULL,0,3.00,NULL,NULL,NULL),(7,4,NULL,1,0,0,385.00,1,NULL,NULL,'batch1asd',35.00,34.00,30.00,35.00,11,3,NULL,NULL,10,'2015-07-24 16:41:59',10,'2015-10-31 11:55:51',1000,32,3420.00,NULL,NULL,1,1.00,30.00,NULL,1,3.00,450.00,450.00,2970.00),(8,4,NULL,8,0,0,0.00,0,NULL,NULL,'we3',3.00,23.00,3.00,3.00,0,2,NULL,NULL,10,'2015-07-24 16:45:04',10,'2015-10-09 17:00:38',1000,22,159.00,NULL,NULL,3,2.00,3.00,NULL,1,NULL,2.00,2.00,157.00),(9,9,NULL,1,0,1,0.00,0,NULL,NULL,'batch1asd',30.00,34.00,30.00,35.00,0,11,NULL,NULL,10,'2015-07-24 17:01:47',10,'2015-10-06 16:18:05',1000,16,NULL,0.00,NULL,3,NULL,0.00,NULL,0,3.00,NULL,0.00,0.00),(10,10,NULL,1,0,1,0.00,0,NULL,NULL,'batch1asdwww',30.00,34.00,30.00,35.00,0,34,NULL,NULL,10,'2015-07-24 18:32:33',10,'2015-08-17 12:36:16',1000,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(11,8,NULL,1,0,0,11.00,0,NULL,NULL,'batch1',11.00,11.00,11.00,11.00,1,3,NULL,NULL,NULL,NULL,10,'2015-10-14 15:34:56',1000,11,3000.00,0.00,NULL,1,0.00,0.00,NULL,0,3.00,0.00,0.00,3000.00),(12,5,NULL,4,6,1,89.00,1,NULL,NULL,'q',89.00,111.00,78.00,89.00,1,2,NULL,NULL,10,'2015-08-03 10:51:06',10,'2015-10-06 16:18:05',NULL,16,NULL,12.00,NULL,0,NULL,NULL,NULL,0,3.00,NULL,12.00,0.00),(13,5,NULL,8,0,0,121.00,1,NULL,NULL,'cipla batch MOd',11.00,11.00,11.00,11.00,11,7,NULL,NULL,10,'2015-08-03 10:59:59',10,'2015-10-08 02:09:04',NULL,17,NULL,NULL,NULL,0,NULL,NULL,NULL,0,NULL,NULL,NULL,NULL),(14,5,NULL,9,0,0,NULL,1,NULL,NULL,'asd',NULL,123.00,86.00,98.00,11,8,NULL,'2015-08-13 00:00:00',10,'2015-08-03 10:59:59',10,'2015-10-08 02:09:04',NULL,17,NULL,NULL,NULL,0,NULL,NULL,NULL,0,NULL,NULL,NULL,NULL),(15,5,NULL,4,6,0,89.00,11,NULL,NULL,'ww',89.00,111.00,78.00,89.00,1,7,NULL,NULL,10,'2015-08-03 15:33:51',10,'2015-10-08 02:09:04',NULL,17,NULL,0.00,NULL,0,NULL,NULL,NULL,0,3.00,NULL,0.00,NULL),(16,11,NULL,8,0,0,11.00,1,NULL,NULL,'cipla batch MOd',11.00,11.00,11.00,11.00,1,8,NULL,'2015-08-28 00:00:00',10,'2015-08-03 15:34:43',10,'2015-10-17 18:14:08',NULL,2,493.00,NULL,NULL,3,23.00,147.00,NULL,0,NULL,0.00,0.00,493.00),(17,11,NULL,9,0,0,89.00,1,NULL,NULL,'a Batch',89.00,111.00,78.00,89.00,1,4,NULL,NULL,10,'2015-08-03 15:36:47',10,'2015-10-19 15:55:39',NULL,34,317.00,NULL,NULL,3,12.00,43.00,NULL,0,NULL,0.00,0.00,317.00),(18,12,NULL,13,0,0,9.00,1,NULL,NULL,'a',9.00,11.00,8.00,9.00,1,34,NULL,NULL,10,'2015-08-03 16:26:06',10,'2015-10-19 15:55:40',NULL,34,414422.00,NULL,NULL,2,1.00,4186.00,NULL,0,NULL,0.00,0.00,414422.00),(19,13,NULL,21,38,0,11.00,1,NULL,NULL,'ooo',11.00,11.00,11.00,11.00,1,1,NULL,NULL,10,'2015-08-03 16:30:26',10,'2015-09-16 11:22:36',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(20,14,NULL,13,0,0,9.00,1,NULL,NULL,'new',9.00,11.00,8.00,9.00,1,22,NULL,NULL,10,'2015-08-03 16:32:26',10,'2015-08-20 12:55:48',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(21,15,NULL,4,0,0,9.00,1,NULL,NULL,'4',9.00,11.00,8.00,9.00,1,1,NULL,NULL,10,'2015-08-03 16:33:05',10,'2015-09-16 11:16:06',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(23,21,NULL,16,0,0,0.00,3,NULL,'asd','feASDMOD2',1.00,23.00,1.00,1.00,3,4,NULL,NULL,10,'2015-08-06 11:44:59',10,'2015-08-20 12:55:48',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(24,22,NULL,2,3,0,0.00,2,NULL,'asd','asdBatch12',58.00,56.00,50.00,58.00,3,34,NULL,NULL,10,'2015-08-06 11:53:38',10,'2015-09-16 11:24:27',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(25,23,0,1,0,0,0.00,2,NULL,'asd','batch1',30.00,34.00,30.00,35.00,3,43,NULL,NULL,10,'2015-08-06 12:01:53',10,'2015-08-17 12:36:16',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(26,24,0,5,4,0,0.00,3,NULL,'ww','batch2TEST',35.00,34.00,30.00,35.00,33,34,NULL,NULL,10,'2015-08-06 12:05:51',10,'2015-09-16 11:24:45',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(29,27,0,2,0,0,0.00,1,NULL,'zx','batch2testtt',50.00,56.00,50.00,58.00,3,1,NULL,NULL,10,'2015-08-06 16:54:37',10,'2015-08-17 12:36:16',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(33,30,10,25,0,0,NULL,1,NULL,NULL,'myAsd',NULL,11.00,11.00,11.00,3,98,NULL,'2015-07-18 00:00:00',10,'2015-08-07 16:48:29',10,'2015-08-07 17:02:29',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(38,33,0,8,0,1,0.00,1,'Saleable Returns','a','cipla batch MOd',11.00,11.00,11.00,11.00,33,2,NULL,NULL,10,'2015-08-13 11:42:13',10,'2015-08-13 13:14:24',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(39,33,0,2,0,0,NULL,3,'Near Expiry','aa','xyz',NULL,56.00,50.00,58.00,33,2,NULL,NULL,10,'2015-08-13 11:42:13',10,'2015-08-13 13:14:24',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(40,34,0,4,0,0,0.00,1,'Saleable Returns','as','p4',164.00,234.00,164.00,187.00,3,4,NULL,NULL,10,'2015-08-13 12:58:51',10,'2015-08-17 12:36:16',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(41,34,0,1,0,0,0.00,2,'Expiry','aaa','batch1',30.00,34.00,30.00,35.00,3,4,NULL,NULL,10,'2015-08-13 12:58:51',10,'2015-08-17 12:36:16',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(42,0,0,15,0,0,0.00,2,'Expiry','sa','test134',22.00,22.00,22.00,22.00,3,4,NULL,NULL,10,'2015-08-13 13:00:29',10,'2015-09-09 19:43:45',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(43,0,0,8,0,0,0.00,2,'Expiry','da','cipla batch MOd',11.00,11.00,11.00,11.00,3,4,NULL,NULL,10,'2015-08-13 13:00:29',10,'2015-09-09 19:43:45',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(45,23,35,18,0,1,0.00,0,NULL,NULL,'weweqwMOD',4.00,44.00,4.00,4.00,3,4,NULL,NULL,10,'2015-08-13 16:54:08',10,'2015-08-20 12:55:48',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(46,23,15,2,0,1,0.00,0,NULL,NULL,'asdBatch',50.00,56.00,50.00,58.00,3,4,NULL,NULL,10,'2015-08-13 16:55:02',10,'2015-08-17 12:36:16',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(48,2,0,15,0,0,0.00,2,'Expiry','a','test134',22.00,22.00,22.00,22.00,3,44,NULL,NULL,10,'2015-08-14 14:24:00',10,'2015-10-08 02:09:04',NULL,17,NULL,0.00,NULL,0,NULL,NULL,NULL,0,NULL,NULL,0.00,NULL),(49,36,0,8,0,0,0.00,2,'Expiry','a','we3',3.00,23.00,3.00,3.00,3,44,NULL,NULL,10,'2015-08-14 14:26:06',10,'2015-08-20 12:55:48',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(50,37,24,8,0,0,0.00,3,'Near Expiry','as','cipla batch',11.00,11.00,11.00,11.00,3,4,NULL,NULL,10,'2015-08-14 14:28:42',10,'2015-08-20 12:55:48',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(51,38,32,16,0,1,0.00,1,'Saleable Returns','rer','feASDMOD2',1.00,23.00,1.00,1.00,3,4,NULL,NULL,10,'2015-08-14 14:30:41',10,'2015-08-20 12:55:48',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(52,39,10,25,0,1,NULL,3,'Near Expiry','w','myAsd',NULL,11.00,11.00,11.00,3,4,NULL,'2015-07-18 00:00:00',10,'2015-08-14 14:44:21',10,'2015-08-14 14:45:53',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(53,40,10,25,0,0,NULL,2,'Expiry',NULL,'myAsd',NULL,11.00,11.00,11.00,3,44,NULL,'2015-07-18 00:00:00',10,'2015-08-14 14:50:34',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(54,40,18,25,0,0,NULL,2,'Expiry','s','qrrrr',NULL,11.00,11.00,11.00,3,4,NULL,'2015-07-18 00:00:00',10,'2015-08-14 14:52:38',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(55,41,15,2,0,0,0.00,2,'Expiry','as','asdBatch',50.00,56.00,50.00,58.00,3,4,NULL,NULL,10,'2015-08-14 15:01:50',10,'2015-08-17 12:36:16',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(56,42,32,16,0,1,0.00,3,'Near Expiry','aaa','feASDMOD2',1.00,23.00,1.00,1.00,3,4,NULL,NULL,10,'2015-08-14 15:13:31',10,'2015-08-20 12:55:48',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(57,43,1,1,0,1,0.00,2,'Expiry','sd','batch1test',30.00,34.00,30.00,35.00,3,NULL,NULL,NULL,10,'2015-08-14 15:19:37',10,'2015-08-17 12:36:16',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(58,44,9,2,0,0,0.00,2,'Expiry',NULL,'batch2',50.00,56.00,50.00,58.00,3,4,NULL,NULL,10,'2015-08-14 16:00:58',10,'2015-08-17 12:36:16',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(59,45,35,18,0,0,0.00,2,'Expiry','sdz','weweqwMOD',4.00,44.00,4.00,4.00,3,0,0,NULL,10,'2015-08-14 16:04:09',10,'2015-10-10 14:00:56',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(60,46,35,18,0,0,0.00,2,'Expiry','a','weweqwMOD',4.00,44.00,4.00,4.00,3,4,NULL,NULL,10,'2015-08-14 16:10:31',10,'2015-08-20 12:55:48',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(61,47,35,18,0,0,0.00,2,'Expiry','as','weweqwMOD',4.00,44.00,4.00,4.00,3,4,NULL,NULL,10,'2015-08-14 16:17:40',10,'2015-08-20 12:55:48',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(62,48,35,18,0,0,0.00,3,'Near Expiry','q','weweqwMOD',4.00,44.00,4.00,4.00,3,4,NULL,NULL,10,'2015-08-14 16:20:10',10,'2015-08-20 12:55:48',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(63,49,37,18,0,0,0.00,3,'Near Expiry','wa','weweqwMOD',4.00,44.00,4.00,4.00,3,4,NULL,NULL,10,'2015-08-14 16:31:48',10,'2015-08-20 12:55:48',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(64,50,37,18,0,0,0.00,3,'Near Expiry','es','weweqwMOD',4.00,44.00,4.00,4.00,3,4,NULL,NULL,10,'2015-08-14 16:36:22',10,'2015-08-20 12:55:48',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(65,0,NULL,0,9,0,0.00,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,4,NULL,NULL,10,'2015-08-20 13:03:11',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(66,0,NULL,0,5,0,NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,3,4,NULL,NULL,10,'2015-08-20 13:03:54',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(67,0,NULL,0,4,0,NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,1,NULL,NULL,10,'2015-08-20 13:04:01',10,'2015-09-16 11:24:45',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(68,0,NULL,0,3,0,0.00,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,3,1,NULL,NULL,10,'2015-08-20 13:04:10',10,'2015-09-16 11:24:27',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(70,0,26,8,0,0,NULL,2,'Expiry','wsd','cipla batch MOd',NULL,11.00,11.00,11.00,0,NULL,NULL,'2015-07-17 00:00:00',10,'2015-09-09 13:19:13',10,'2015-09-09 13:21:52',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(71,0,25,8,0,0,NULL,2,'Expiry','vss','cipla batch MOd',NULL,11.00,11.00,11.00,3,NULL,NULL,'2015-07-17 00:00:00',10,'2015-09-09 13:24:23',10,'2015-09-09 13:28:50',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(72,0,33,16,0,0,NULL,2,'Expiry','s','feASDMOD28',NULL,23.00,1.00,1.00,0,NULL,NULL,'2015-07-17 00:00:00',10,'2015-09-09 13:24:23',10,'2015-09-09 13:28:50',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(73,0,19,25,0,0,NULL,5,'Damaged','d','newASD',NULL,0.00,0.00,0.00,0,NULL,NULL,'2015-07-17 00:00:00',10,'2015-09-09 14:19:11',10,'2015-09-09 14:19:45',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(74,0,36,4,0,0,NULL,5,'Damaged','1','Batch 4 New',NULL,65.00,50.00,60.00,0,NULL,NULL,'2016-07-24 00:00:00',10,'2015-09-09 14:19:11',10,'2015-09-09 14:19:45',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(75,61,26,8,0,0,NULL,3,'Near Expiry',NULL,'cipla batch MOd',NULL,11.00,11.00,11.00,0,NULL,NULL,'2015-07-17 00:00:00',10,'2015-09-09 21:12:02',10,'2015-09-09 21:28:58',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(76,0,37,18,0,0,NULL,1,'Saleable Returns','a','weweqwMOD',NULL,44.00,4.00,4.00,0,NULL,NULL,'2015-07-17 00:00:00',10,'2015-09-09 21:14:15',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(77,61,37,18,0,0,NULL,1,'Saleable Returns','a','weweqwMOD',NULL,44.00,4.00,4.00,0,NULL,NULL,'2015-07-17 00:00:00',10,'2015-09-09 21:28:58',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(78,62,25,8,0,0,NULL,2,'Expiry','as','cipla batch MOd',NULL,11.00,11.00,11.00,0,NULL,NULL,'2015-07-17 00:00:00',10,'2015-09-10 14:24:23',10,'2015-09-10 14:47:06',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(79,62,33,16,0,0,NULL,3,'Near Expiry',NULL,'feASDMOD28',NULL,23.00,1.00,1.00,0,NULL,NULL,'2015-07-17 00:00:00',10,'2015-09-10 14:24:55',10,'2015-09-10 14:47:06',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(80,63,25,8,0,0,NULL,4,'Damaged','damaged','cipla batch MOd',NULL,11.00,11.00,11.00,0,NULL,NULL,'2015-07-17 00:00:00',10,'2015-09-10 14:59:44',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(81,64,25,8,0,0,NULL,4,'Damaged','damaged','cipla batch MOd',NULL,11.00,11.00,11.00,0,NULL,NULL,'2015-07-17 00:00:00',10,'2015-09-10 15:01:41',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(82,65,32,16,0,0,NULL,2,'Expiry','as','feASDMOD2',NULL,23.00,1.00,1.00,0,NULL,NULL,'2015-07-17 00:00:00',10,'2015-09-10 15:12:28',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(83,66,33,16,0,0,NULL,6,'Recall','as','feASDMOD28',NULL,23.00,1.00,1.00,0,NULL,NULL,'2015-07-17 00:00:00',10,'2015-09-10 15:16:02',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(85,68,19,25,0,0,NULL,2,'Expiry','sasd','newASD',NULL,0.00,0.00,0.00,0,NULL,NULL,'2015-07-17 00:00:00',10,'2015-09-10 15:21:37',10,'2015-09-10 15:24:33',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(86,69,18,25,0,0,NULL,1,'Saleable Returns','asd','qrrrr',NULL,11.00,11.00,11.00,0,NULL,NULL,'2015-07-18 00:00:00',10,'2015-09-10 15:25:49',10,'2015-09-10 15:29:12',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(88,71,18,25,0,1,NULL,2,'Expiry','ds','qrrrr',NULL,11.00,11.00,11.00,0,NULL,NULL,'2015-07-18 00:00:00',10,'2015-09-10 16:39:51',10,'2015-09-10 16:44:41',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(89,71,11,1,0,1,NULL,2,'Expiry','xfc','batch1',NULL,34.00,30.00,35.00,0,NULL,NULL,'2015-07-18 00:00:00',10,'2015-09-10 16:43:11',10,'2015-09-10 16:44:41',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(90,71,11,1,0,1,NULL,2,'Expiry','xfc','batch1',NULL,34.00,30.00,35.00,0,NULL,NULL,'2015-07-18 00:00:00',10,'2015-09-10 16:43:49',10,'2015-09-10 16:44:41',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(91,71,1,1,0,0,NULL,2,'Expiry','ws','batch1test',NULL,34.00,30.00,35.00,0,NULL,NULL,'2015-08-12 00:00:00',10,'2015-09-10 16:43:49',10,'2015-09-10 16:44:41',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(92,71,36,4,0,0,NULL,2,'Expiry','d','Batch 4 New',NULL,65.00,50.00,60.00,0,NULL,NULL,'2016-07-24 00:00:00',10,'2015-09-10 16:43:49',10,'2015-09-10 16:44:41',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(93,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,10,'2015-10-27 15:38:23',NULL,NULL,NULL,44,0.00,NULL,NULL,3,1.00,0.00,NULL,0,NULL,0.00,0.00,0.00);
/*!40000 ALTER TABLE `returnregisterdetails` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rolepermission`
--

DROP TABLE IF EXISTS `rolepermission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `rolepermission` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `roleID` double DEFAULT NULL,
  `permissionID` double DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=179 DEFAULT CHARSET=latin1 COMMENT='																																																																																																																																					';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rolepermission`
--

LOCK TABLES `rolepermission` WRITE;
/*!40000 ALTER TABLE `rolepermission` DISABLE KEYS */;
INSERT INTO `rolepermission` VALUES (1,2,1),(2,2,2),(3,2,3),(4,2,4),(5,2,5),(6,2,6),(7,2,7),(8,2,8),(9,2,9),(10,2,10),(11,2,11),(12,2,12),(13,2,13),(14,2,14),(15,2,15),(16,2,16),(17,2,17),(18,2,18),(20,2,20),(21,2,21),(22,2,22),(23,2,23),(24,2,24),(25,2,25),(26,2,26),(27,2,27),(28,2,28),(29,2,29),(30,2,30),(31,2,31),(32,2,32),(33,2,33),(34,2,34),(35,2,35),(36,2,36),(37,2,37),(38,2,38),(39,2,39),(40,2,40),(41,2,41),(42,2,42),(43,2,43),(44,2,44),(45,2,45),(46,2,46),(47,2,47),(48,2,48),(49,2,49),(50,2,50),(51,2,51),(52,2,52),(53,2,53),(54,2,54),(55,2,55),(56,2,56),(57,2,57),(58,2,58),(59,2,59),(60,2,60),(61,2,61),(62,2,62),(63,2,63),(64,2,64),(65,2,65),(66,2,66),(67,1,1),(68,1,2),(69,1,3),(70,1,4),(71,1,5),(72,3,2),(73,3,3),(74,4,1),(75,5,1),(76,1,6),(77,5,2),(78,5,2),(79,3,1),(80,4,3),(81,5,3),(82,5,4),(83,5,4),(84,8,1),(85,9,2),(86,9,3),(87,10,4),(88,11,3),(89,12,3),(90,12,4),(91,13,5),(92,14,1),(93,15,2),(94,16,2),(95,17,2),(96,18,1),(97,19,1),(98,20,1),(99,21,1),(100,22,1),(101,14,2),(104,9,4),(105,23,1),(106,24,2),(107,25,1),(108,25,2),(109,9,5),(110,2,67),(111,2,68),(112,2,69),(113,2,70),(114,2,71),(115,2,72),(116,2,73),(117,2,74),(118,2,75),(119,2,76),(120,2,77),(121,2,78),(122,2,79),(123,2,80),(124,2,81),(125,2,82),(126,2,83),(127,2,84),(128,2,85),(129,2,86),(130,2,87),(131,2,92),(132,2,93),(133,2,94),(134,2,95),(135,2,98),(136,2,100),(137,2,102),(138,2,103),(139,2,104),(140,2,101),(141,2,99),(142,2,105),(143,2,106),(144,2,107),(145,2,108),(146,2,109),(147,2,110),(148,2,111),(149,2,112),(150,2,114),(151,2,113),(152,2,115),(153,2,117),(154,2,118),(155,2,119),(156,2,120),(157,2,121),(158,2,122),(159,2,123),(160,2,124),(161,2,125),(162,2,126),(163,2,127),(164,2,128),(165,2,129),(166,2,130),(167,2,131),(168,2,132),(169,2,133),(170,2,134),(171,2,135),(172,2,136),(173,2,137),(174,2,138),(175,2,140),(177,9,1),(178,2,139);
/*!40000 ALTER TABLE `rolepermission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `route`
--

DROP TABLE IF EXISTS `route`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `route` (
  `ID` double NOT NULL AUTO_INCREMENT,
  `routeID` varchar(15) NOT NULL DEFAULT '',
  `description` varchar(30) DEFAULT NULL,
  `flgActive` int(11) DEFAULT NULL,
  `CreatedBy` double DEFAULT NULL,
  `CreatedOn` datetime DEFAULT NULL,
  `ModifiedBy` double DEFAULT NULL,
  `ModifiedOn` datetime DEFAULT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `ID` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `route`
--

LOCK TABLES `route` WRITE;
/*!40000 ALTER TABLE `route` DISABLE KEYS */;
INSERT INTO `route` VALUES (1,'r1','route1',0,NULL,NULL,NULL,NULL),(17,'r2','route2',1,NULL,NULL,NULL,NULL),(18,'r3','route3',0,NULL,NULL,NULL,NULL),(19,'r4','route4',1,NULL,NULL,NULL,NULL),(20,'r5','route5',1,NULL,NULL,NULL,NULL),(21,'r6','route6',1,NULL,NULL,NULL,NULL),(28,'sd','sd',1,NULL,NULL,NULL,NULL),(29,'www','qwwww',1,NULL,NULL,NULL,NULL),(30,'ww','ww',1,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `route` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `routearea`
--

DROP TABLE IF EXISTS `routearea`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `routearea` (
  `ID` double NOT NULL AUTO_INCREMENT,
  `rID` double DEFAULT NULL,
  `aID` double DEFAULT NULL,
  `CreatedBy` double DEFAULT NULL,
  `CreatedOn` datetime DEFAULT NULL,
  `ModifiedBy` double DEFAULT NULL,
  `ModifiedOn` datetime DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=210 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `routearea`
--

LOCK TABLES `routearea` WRITE;
/*!40000 ALTER TABLE `routearea` DISABLE KEYS */;
INSERT INTO `routearea` VALUES (209,30,5,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `routearea` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `saleorder`
--

DROP TABLE IF EXISTS `saleorder`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `saleorder` (
  `ID` double NOT NULL,
  `OrderNum` double NOT NULL,
  `CID` double DEFAULT NULL,
  `SID` double DEFAULT NULL,
  `MID` double DEFAULT NULL,
  `OrderDate` datetime DEFAULT NULL,
  `OrderAmt` double DEFAULT NULL,
  `Remarks` varchar(150) DEFAULT NULL,
  `Status` varchar(45) DEFAULT NULL,
  `Items` int(11) DEFAULT NULL,
  `flgEmail` int(11) DEFAULT NULL,
  `flgScheme` int(11) DEFAULT NULL,
  `flgUrgent` int(11) DEFAULT NULL,
  `flgCancelPending` int(11) DEFAULT NULL,
  `flgDelayAlert` int(11) DEFAULT NULL,
  `flgVoid` int(11) DEFAULT NULL,
  `VoidReason` varchar(150) DEFAULT NULL,
  `flgCreditNote` int(11) DEFAULT NULL,
  `ETA` date DEFAULT NULL,
  `CreatedBy` double DEFAULT NULL,
  `CreatedOn` datetime DEFAULT NULL,
  `ModifiedBy` double DEFAULT NULL,
  `ModifiedOn` datetime DEFAULT NULL,
  PRIMARY KEY (`ID`,`OrderNum`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `saleorder`
--

LOCK TABLES `saleorder` WRITE;
/*!40000 ALTER TABLE `saleorder` DISABLE KEYS */;
/*!40000 ALTER TABLE `saleorder` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sales`
--

DROP TABLE IF EXISTS `sales`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sales` (
  `ID` int(11) NOT NULL,
  `Date` varchar(45) DEFAULT NULL,
  `CustID` double DEFAULT NULL,
  `productCount` int(11) DEFAULT NULL,
  `productAmount` decimal(10,2) DEFAULT NULL,
  `productVAT` decimal(10,2) DEFAULT NULL,
  `Amount` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sales`
--

LOCK TABLES `sales` WRITE;
/*!40000 ALTER TABLE `sales` DISABLE KEYS */;
INSERT INTO `sales` VALUES (1,'2015-09-25',1000,1,332.00,32443.00,345.00),(2,'2015-09-24',1000,2,2332.00,545.00,534.00),(3,'2015-09-23',1000,2,43.00,646.00,345.00),(4,'2015-09-23',1002,2,5.00,665.00,35.00),(5,'2015-09-25',1000,1,332.00,32443.00,345.00),(6,'2015-09-24',1000,2,2332.00,545.00,534.00);
/*!40000 ALTER TABLE `sales` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `salesman`
--

DROP TABLE IF EXISTS `salesman`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `salesman` (
  `ID` double NOT NULL AUTO_INCREMENT,
  `Name` varchar(50) DEFAULT NULL,
  `Phone` varchar(15) DEFAULT NULL,
  `Fax` varchar(15) DEFAULT NULL,
  `AddrLine1` varchar(50) DEFAULT NULL,
  `AddrLine2` varchar(50) DEFAULT NULL,
  `landlineNumber` int(12) DEFAULT NULL,
  `Email` varchar(40) DEFAULT NULL,
  `city` double DEFAULT NULL,
  `salesmanRouteID` varchar(40) DEFAULT NULL,
  `emergencyContactPerson` varchar(30) DEFAULT NULL,
  `emergencyAddressLine1` varchar(40) DEFAULT NULL,
  `emergencyAddressLine2` varchar(40) DEFAULT NULL,
  `emergencyPhone` varchar(40) DEFAULT NULL,
  `emergencyLandline` int(15) DEFAULT NULL,
  `emergencyFax` varchar(30) DEFAULT NULL,
  `emergencyEmail` varchar(40) DEFAULT NULL,
  `flgActive` int(11) DEFAULT NULL,
  `flgLock` int(11) DEFAULT NULL,
  `CreatedBy` double DEFAULT NULL,
  `CreatedOn` datetime DEFAULT NULL,
  `ModifiedBy` double DEFAULT NULL,
  `ModifiedOn` datetime DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `salesman`
--

LOCK TABLES `salesman` WRITE;
/*!40000 ALTER TABLE `salesman` DISABLE KEYS */;
INSERT INTO `salesman` VALUES (1,'Mr. Salvi','9890002321','1213131.0','address11','address22',205443322,'salvi@gmail.com',10,'1','abcUpdate','emergencyAddress1','emergencyAddress2','9323334452',204332211,'1234.0','abc@gmail.com',1,1,10,'2015-03-04 16:27:30',NULL,NULL),(2,'Mr. Koparikar','9766221155','1123.0','address1','address2',2025442233,'koparikar@gmail.com',10,'18','xyzUpadare','emergency','emergencyAddress2','33445533',203434990,'4321.0','xyz@gmail.com',1,1,10,'2015-03-04 16:27:30',NULL,NULL),(3,'Mr.Pawar','9879000677','45213.0','addr1','addr2',5461122,'xyz@gmail.com',10,'19','pawar','addr1','addr2','8809876542',25443322,'34000.0','abc@gmail.com',1,1,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `salesman` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `salesproducts`
--

DROP TABLE IF EXISTS `salesproducts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `salesproducts` (
  `ID` int(11) NOT NULL,
  `saleID` double DEFAULT NULL,
  `SAID` double DEFAULT NULL,
  `PBAID` double DEFAULT NULL,
  `CID` double DEFAULT NULL,
  `PID` double DEFAULT NULL,
  `Qty` double DEFAULT NULL,
  `FreeQty` double DEFAULT NULL,
  `saleRate` double DEFAULT NULL,
  `netRate` double DEFAULT NULL,
  `VAT` decimal(10,2) DEFAULT NULL,
  `TotalAmount` decimal(10,2) DEFAULT NULL,
  `productAmount` decimal(10,2) DEFAULT NULL,
  `productVATAmount` decimal(10,2) DEFAULT NULL,
  `discount` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `salesproducts`
--

LOCK TABLES `salesproducts` WRITE;
/*!40000 ALTER TABLE `salesproducts` DISABLE KEYS */;
INSERT INTO `salesproducts` VALUES (1,6,1,1,1000,1,12,2,12,23,12.98,1243.00,23.00,236.00,12.00),(2,6,2,2,1000,2,3,3,33,12,34.67,1324.00,23.00,435.00,22.00),(3,7,3,3,1000,3,24,1,11,1,12.70,441.00,434.00,656.00,56.00),(4,3,4,4,2000,4,121,2,4,2,42.00,1454.00,444.00,13.00,56.00),(5,6,4,4,1000,21,56,4,4,1,4.00,4564.00,123.00,637.00,443.00),(6,7,5,1,3000,15,1,1,2,55,78.00,123.00,123.00,334.00,96.00),(7,7,6,3,3000,6,2,7,7,5,55.00,34.00,22.00,245.00,9.00),(8,7,7,5,3000,12,13,3,8,4,8.00,675.00,424.00,43.00,57.00),(9,7,9,4,3000,13,23,4,9,3,33.00,67.00,345.00,57.00,76.00),(10,5,12,13,1000,14,12,2,1,11,12.00,43232.00,234.00,25.00,54.00),(11,8,13,8,2000,7,14,34,15,34,13.00,234.00,145.00,13.00,14.00),(12,3,14,6,1000,1,12,2,4,5,42.00,12.00,444.00,13.00,33.00),(13,3,15,2,1000,2,15,4,5,2,23.00,1454.00,45.00,132.00,56.00);
/*!40000 ALTER TABLE `salesproducts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `securityrolemaster`
--

DROP TABLE IF EXISTS `securityrolemaster`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `securityrolemaster` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Role` varchar(95) DEFAULT NULL,
  `flgActive` tinyint(11) DEFAULT NULL,
  `Description` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `securityrolemaster`
--

LOCK TABLES `securityrolemaster` WRITE;
/*!40000 ALTER TABLE `securityrolemaster` DISABLE KEYS */;
INSERT INTO `securityrolemaster` VALUES (1,'Normal User',1,'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum'),(2,'Power User',1,'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum'),(3,'Retricted User',1,'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum'),(4,'Supplier',1,'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum'),(5,'Accountant',1,'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum loooooooooool'),(6,'ghjkl',1,'ghjk'),(7,'new',1,'asdsadsd'),(8,'neeeeeeeew',0,'asdasdjaksdkasd'),(9,'TAzz',1,'Tzz'),(10,'lol',1,'lol'),(11,'new2',1,'new2'),(12,'asdasd',1,'asdasdas'),(13,'Hard Try',0,'Hard Try'),(14,'Last try',0,'last Try'),(15,'Last try2',1,'Last try2'),(16,'Last 4',1,''),(17,'last5',1,'asdasd'),(18,'eee',1,'gbgrs'),(19,'hkk',1,'kv'),(20,'hkk',1,'kv'),(21,'qqqw',1,'etbc'),(22,'effff',1,'sdva'),(23,'Lasttyuiop[',1,'tyuiop'),(24,'erw',1,'asdasda'),(25,'weweUpdate',1,'dsfv zghsrgb');
/*!40000 ALTER TABLE `securityrolemaster` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `state`
--

DROP TABLE IF EXISTS `state`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `state` (
  `ID` double NOT NULL,
  `Name` varchar(50) DEFAULT NULL,
  `flgActive` int(11) DEFAULT NULL,
  `CreatedBy` double DEFAULT NULL,
  `CreatedOn` datetime DEFAULT NULL,
  `ModifiedBy` double DEFAULT NULL,
  `ModifiedOn` datetime DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `state`
--

LOCK TABLES `state` WRITE;
/*!40000 ALTER TABLE `state` DISABLE KEYS */;
INSERT INTO `state` VALUES (1,'Maharashtra',1,10,'2015-03-04 16:27:30',NULL,NULL);
/*!40000 ALTER TABLE `state` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stockactive`
--

DROP TABLE IF EXISTS `stockactive`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `stockactive` (
  `ID` double NOT NULL AUTO_INCREMENT,
  `PID` double DEFAULT NULL,
  `POID` double DEFAULT NULL,
  `grID` double DEFAULT NULL,
  `SIID` double DEFAULT NULL,
  `PBAID` double DEFAULT NULL,
  `deleted` int(11) DEFAULT NULL,
  `storage` int(11) DEFAULT NULL,
  `receipttype` int(11) DEFAULT NULL,
  `Quantity` double DEFAULT NULL,
  `free` double DEFAULT NULL,
  `QtyReturn` double DEFAULT NULL,
  `FreeReturn` double DEFAULT NULL,
  `QtySold` double DEFAULT NULL,
  `FreeSold` double DEFAULT NULL,
  `QtyAvailable` double DEFAULT NULL,
  `FreeAvailable` double DEFAULT NULL,
  `CreatedBy` double DEFAULT NULL,
  `CreatedOn` datetime DEFAULT NULL,
  `ModifiedBy` double DEFAULT NULL,
  `ModifiedOn` datetime DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=50 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stockactive`
--

LOCK TABLES `stockactive` WRITE;
/*!40000 ALTER TABLE `stockactive` DISABLE KEYS */;
INSERT INTO `stockactive` VALUES (1,1,0,1,NULL,1,NULL,2,1,10,2,3,3,5,2,8,30,2014,'2014-09-08 00:00:00',NULL,NULL),(2,5,0,1,NULL,2,NULL,1,2,50,5,1,1,20,2,29,2,2014,'2014-09-08 00:00:00',NULL,NULL),(3,2,0,1,NULL,3,NULL,2,2,30,5,NULL,NULL,10,2,1,2,2014,'2014-09-08 00:00:00',NULL,NULL),(4,1,0,1,5,4,NULL,2,1,0,0,NULL,NULL,10,2,24,15,2014,NULL,NULL,NULL),(5,1,0,18,6,5,NULL,2,2,0,0,NULL,NULL,50,2,22,21,2014,NULL,NULL,NULL),(6,1,NULL,44,55,200,0,2,1,1,1,1,1,NULL,NULL,15,16,2014,NULL,NULL,NULL),(7,2,NULL,44,56,201,0,2,2,2,1,NULL,NULL,NULL,NULL,3,2,2014,NULL,NULL,NULL),(8,1,NULL,44,55,202,0,2,1,1,1,NULL,NULL,NULL,NULL,1,1,2014,NULL,NULL,NULL),(9,2,NULL,44,56,203,0,2,2,2,1,0,0,NULL,NULL,2,1,2014,NULL,NULL,NULL),(10,25,NULL,76,108,204,0,2,2,11,11,3,3,NULL,NULL,6,6,NULL,NULL,NULL,NULL),(11,1,NULL,44,55,205,0,2,1,1,1,6,6,NULL,NULL,-5,-5,NULL,NULL,NULL,NULL),(12,2,NULL,44,56,206,0,2,2,2,1,NULL,NULL,NULL,NULL,2,1,NULL,NULL,NULL,NULL),(13,2,NULL,44,56,207,0,2,2,2,1,NULL,NULL,NULL,NULL,2,1,NULL,NULL,NULL,NULL),(14,1,NULL,44,55,208,1,2,1,1,1,NULL,NULL,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(15,2,NULL,44,56,209,0,2,2,2,1,NULL,NULL,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(16,2,NULL,44,56,210,0,2,2,2,1,2,1,NULL,NULL,16,66,NULL,NULL,NULL,NULL),(17,2,NULL,44,56,211,0,2,2,2,1,NULL,NULL,NULL,NULL,2,1,NULL,NULL,NULL,NULL),(18,25,NULL,76,108,212,0,2,2,11,11,13,13,NULL,NULL,-3,-3,NULL,NULL,NULL,NULL),(19,25,NULL,76,108,213,0,2,2,11,11,2,2,NULL,NULL,9,9,NULL,NULL,NULL,NULL),(20,25,NULL,76,108,214,0,2,2,11,11,NULL,NULL,NULL,NULL,11,11,NULL,NULL,NULL,NULL),(21,25,NULL,76,108,215,0,2,2,11,11,NULL,NULL,NULL,NULL,11,11,NULL,NULL,NULL,NULL),(22,2,NULL,81,109,216,0,2,2,0,0,NULL,NULL,NULL,NULL,33,33,NULL,NULL,NULL,NULL),(23,2,NULL,81,109,217,0,2,2,0,0,NULL,NULL,NULL,NULL,23,23,NULL,NULL,NULL,NULL),(24,8,NULL,82,110,218,0,2,1,0,0,1,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(25,8,NULL,82,110,219,0,2,1,0,0,7,6,NULL,NULL,16,26,NULL,NULL,NULL,NULL),(26,8,NULL,82,110,220,0,2,1,0,0,0,0,NULL,NULL,4,2,NULL,NULL,NULL,NULL),(27,2,NULL,81,109,221,0,2,2,0,0,NULL,NULL,NULL,NULL,6,13,NULL,NULL,NULL,NULL),(28,7,NULL,83,111,222,0,0,0,0,0,NULL,NULL,NULL,NULL,14,13,NULL,NULL,NULL,NULL),(29,7,NULL,83,112,223,0,0,0,22,22,NULL,NULL,NULL,NULL,22,22,NULL,NULL,NULL,NULL),(30,7,NULL,84,113,224,0,0,0,11,11,NULL,NULL,NULL,NULL,11,11,NULL,NULL,NULL,NULL),(31,7,NULL,84,113,225,0,0,0,11,11,NULL,NULL,NULL,NULL,11,11,NULL,NULL,NULL,NULL),(32,16,NULL,86,117,226,0,0,0,11,11,0,0,NULL,NULL,17,17,NULL,NULL,NULL,NULL),(33,16,NULL,86,117,227,0,0,0,11,11,6,7,NULL,NULL,20,10,NULL,NULL,NULL,NULL),(34,1,NULL,69,105,228,0,2,1,1,1,NULL,NULL,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(35,18,NULL,87,118,229,0,0,0,40,40,0,0,NULL,NULL,40,40,NULL,NULL,NULL,NULL),(36,4,NULL,56,71,230,0,0,0,12,12,4,4,NULL,NULL,6,8,NULL,NULL,NULL,NULL),(37,18,NULL,87,118,231,0,0,0,40,40,1,1,NULL,NULL,38,38,NULL,NULL,NULL,NULL),(38,2,NULL,88,119,232,0,2,2,0,0,NULL,NULL,NULL,NULL,0,0,NULL,NULL,NULL,NULL),(39,2,NULL,89,120,233,0,2,2,0,0,NULL,NULL,NULL,NULL,0,0,NULL,NULL,NULL,NULL),(40,2,NULL,0,0,234,0,2,2,0,0,NULL,NULL,NULL,NULL,0,0,NULL,NULL,NULL,NULL),(41,4,NULL,57,64,235,0,1,1,33,33,NULL,NULL,NULL,NULL,33,33,NULL,NULL,NULL,NULL),(42,1,NULL,63,65,236,0,2,1,44,4,NULL,NULL,NULL,NULL,44,4,NULL,NULL,NULL,NULL),(43,2,NULL,95,0,237,0,2,2,0,0,NULL,NULL,NULL,NULL,0,0,NULL,NULL,NULL,NULL),(44,2,NULL,95,0,238,0,2,2,0,0,NULL,NULL,NULL,NULL,0,0,NULL,NULL,NULL,NULL),(45,2,NULL,95,0,239,0,2,2,0,0,NULL,NULL,NULL,NULL,0,0,NULL,NULL,NULL,NULL),(46,2,NULL,95,0,240,0,2,2,0,0,NULL,NULL,NULL,NULL,0,0,NULL,NULL,NULL,NULL),(47,2,NULL,95,0,241,0,2,2,0,0,NULL,NULL,NULL,NULL,0,0,NULL,NULL,NULL,NULL),(48,2,NULL,95,0,242,0,2,2,0,0,NULL,NULL,NULL,NULL,0,0,NULL,NULL,NULL,NULL),(49,2,NULL,95,0,243,0,2,2,0,0,NULL,NULL,NULL,NULL,0,0,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `stockactive` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stockauditcompany`
--

DROP TABLE IF EXISTS `stockauditcompany`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `stockauditcompany` (
  `ID` double NOT NULL AUTO_INCREMENT,
  `AuditID` double DEFAULT NULL,
  `CID` double DEFAULT NULL,
  `DID` double DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=328 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stockauditcompany`
--

LOCK TABLES `stockauditcompany` WRITE;
/*!40000 ALTER TABLE `stockauditcompany` DISABLE KEYS */;
INSERT INTO `stockauditcompany` VALUES (325,522,1000,2),(326,523,2000,3),(327,524,1000,2);
/*!40000 ALTER TABLE `stockauditcompany` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stockauditmaster`
--

DROP TABLE IF EXISTS `stockauditmaster`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `stockauditmaster` (
  `ID` double NOT NULL AUTO_INCREMENT,
  `AuditDate` date DEFAULT NULL,
  `AuditLabel` varchar(60) DEFAULT NULL,
  `AuditSnapshot` int(11) DEFAULT NULL,
  `SnapshotCreatedOn` datetime DEFAULT NULL,
  `Result` int(11) DEFAULT NULL,
  `OutCome` int(11) DEFAULT NULL,
  `FlgSaleLock` tinyint(3) DEFAULT NULL,
  `FlgSaleLockHistory` tinyint(3) DEFAULT NULL,
  `FlgDataEntryLock` tinyint(3) DEFAULT NULL,
  `FlgAuditLock` tinyint(3) DEFAULT NULL,
  `AuditTotalQuantity` double DEFAULT NULL,
  `SystemTotalQuantity` double DEFAULT NULL,
  `MissMatchTotalQuantity` double DEFAULT NULL,
  `TotalProduct` int(11) DEFAULT NULL,
  `ProductSelected` int(11) DEFAULT NULL,
  `TotalBatch` int(11) DEFAULT NULL,
  `BatchSelected` int(11) DEFAULT NULL,
  `AuditEnteredBy` varchar(45) DEFAULT NULL,
  `FindProductSelected` tinyint(3) DEFAULT NULL,
  `AuditRemark` varchar(80) DEFAULT NULL,
  `PhysicalStockEntry` tinyint(3) DEFAULT NULL,
  `SelectLockDataEntry` tinyint(3) DEFAULT NULL,
  `CreatedBy` double DEFAULT NULL,
  `CreatedOn` datetime DEFAULT NULL,
  `ModifiedBy` double DEFAULT NULL,
  `ModifiedOn` datetime DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=525 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stockauditmaster`
--

LOCK TABLES `stockauditmaster` WRITE;
/*!40000 ALTER TABLE `stockauditmaster` DISABLE KEYS */;
INSERT INTO `stockauditmaster` VALUES (522,'2015-10-26','zxzc',2,'2015-10-26 12:19:27',1,0,0,0,1,0,0,0,0,3,2,13,2,'',1,' ',0,0,10,'2015-10-26 12:08:09',10,'2015-10-26 12:19:27'),(523,'2015-10-26',NULL,1,'2015-10-26 12:14:34',0,0,0,0,0,0,0,0,0,4,1,17,1,NULL,1,'0',0,1,10,'2015-10-26 12:14:34',NULL,NULL),(524,'2015-10-28','',2,'2015-10-28 18:39:37',0,0,0,0,1,0,0,0,0,3,1,13,2,'',1,' ',0,0,10,'2015-10-26 13:30:41',10,'2015-10-28 18:39:37');
/*!40000 ALTER TABLE `stockauditmaster` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stockauditproduct`
--

DROP TABLE IF EXISTS `stockauditproduct`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `stockauditproduct` (
  `ID` double NOT NULL AUTO_INCREMENT,
  `PID` double DEFAULT NULL,
  `PBID` double DEFAULT NULL,
  `AuditID` double DEFAULT NULL,
  `AuditQuantity` double DEFAULT NULL,
  `SystemQuantity` double DEFAULT NULL,
  `MissMatchQuantity` double DEFAULT NULL,
  `Remark` varchar(45) DEFAULT NULL,
  `AuditBy` varchar(45) DEFAULT NULL,
  `ProductRemark` varchar(45) DEFAULT NULL,
  `IsProductBatchSelected` int(11) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=4898 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stockauditproduct`
--

LOCK TABLES `stockauditproduct` WRITE;
/*!40000 ALTER TABLE `stockauditproduct` DISABLE KEYS */;
INSERT INTO `stockauditproduct` VALUES (4829,2,0,522,12,91,0,'qw',' ',NULL,1),(4830,2,3,522,2,1,0,NULL,NULL,NULL,1),(4831,2,201,522,0,3,0,NULL,NULL,NULL,0),(4832,2,203,522,0,2,0,NULL,NULL,NULL,0),(4833,2,206,522,0,2,0,NULL,NULL,NULL,0),(4834,2,207,522,0,2,0,NULL,NULL,NULL,0),(4835,2,209,522,0,1,0,NULL,NULL,NULL,0),(4836,2,210,522,0,16,0,NULL,NULL,NULL,0),(4837,2,211,522,0,2,0,NULL,NULL,NULL,0),(4838,2,216,522,0,33,0,NULL,NULL,NULL,0),(4839,2,217,522,0,23,0,NULL,NULL,NULL,0),(4840,2,221,522,0,6,0,NULL,NULL,NULL,0),(4841,4,0,522,0,8,0,'',' ',NULL,1),(4842,4,230,522,0,8,0,NULL,NULL,NULL,1),(4843,5,0,522,0,29,0,'',' ',NULL,0),(4844,5,2,522,0,29,0,NULL,NULL,NULL,0),(4845,1,0,523,0,67,0,NULL,NULL,NULL,1),(4846,1,1,523,0,8,0,NULL,NULL,NULL,1),(4847,1,4,523,0,24,0,NULL,NULL,NULL,0),(4848,1,5,523,0,22,0,NULL,NULL,NULL,0),(4849,1,200,523,0,15,0,NULL,NULL,NULL,0),(4850,1,202,523,0,1,0,NULL,NULL,NULL,0),(4851,1,205,523,0,-5,0,NULL,NULL,NULL,0),(4852,1,208,523,0,1,0,NULL,NULL,NULL,0),(4853,1,228,523,0,1,0,NULL,NULL,NULL,0),(4854,7,0,523,0,58,0,NULL,NULL,NULL,0),(4855,7,222,523,0,14,0,NULL,NULL,NULL,0),(4856,7,223,523,0,22,0,NULL,NULL,NULL,0),(4857,7,224,523,0,11,0,NULL,NULL,NULL,0),(4858,7,225,523,0,11,0,NULL,NULL,NULL,0),(4859,8,0,523,0,20,0,NULL,NULL,NULL,0),(4860,8,218,523,0,0,0,NULL,NULL,NULL,0),(4861,8,219,523,0,16,0,NULL,NULL,NULL,0),(4862,8,220,523,0,4,0,NULL,NULL,NULL,0),(4863,16,0,523,0,37,0,NULL,NULL,NULL,0),(4864,16,226,523,0,17,0,NULL,NULL,NULL,0),(4865,16,227,523,0,20,0,NULL,NULL,NULL,0),(4882,2,0,524,0,91,0,NULL,NULL,NULL,1),(4883,2,3,524,0,1,0,NULL,NULL,NULL,1),(4884,2,201,524,0,3,0,NULL,NULL,NULL,1),(4885,2,203,524,0,2,0,NULL,NULL,NULL,0),(4886,2,206,524,0,2,0,NULL,NULL,NULL,0),(4887,2,207,524,0,2,0,NULL,NULL,NULL,0),(4888,2,209,524,0,1,0,NULL,NULL,NULL,0),(4889,2,210,524,0,16,0,NULL,NULL,NULL,0),(4890,2,211,524,0,2,0,NULL,NULL,NULL,0),(4891,2,216,524,0,33,0,NULL,NULL,NULL,0),(4892,2,217,524,0,23,0,NULL,NULL,NULL,0),(4893,2,221,524,0,6,0,NULL,NULL,NULL,0),(4894,4,0,524,0,6,0,NULL,NULL,NULL,0),(4895,4,230,524,0,6,0,NULL,NULL,NULL,0),(4896,5,0,524,0,29,0,NULL,NULL,NULL,0),(4897,5,2,524,0,29,0,NULL,NULL,NULL,0);
/*!40000 ALTER TABLE `stockauditproduct` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stockauditproducttype`
--

DROP TABLE IF EXISTS `stockauditproducttype`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `stockauditproducttype` (
  `ID` double NOT NULL AUTO_INCREMENT,
  `AuditID` double DEFAULT NULL,
  `ProductTypeID` double DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=315 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stockauditproducttype`
--

LOCK TABLES `stockauditproducttype` WRITE;
/*!40000 ALTER TABLE `stockauditproducttype` DISABLE KEYS */;
INSERT INTO `stockauditproducttype` VALUES (312,522,2),(313,523,2),(314,524,3);
/*!40000 ALTER TABLE `stockauditproducttype` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stockinward`
--

DROP TABLE IF EXISTS `stockinward`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `stockinward` (
  `ID` double NOT NULL AUTO_INCREMENT,
  `recid` double DEFAULT NULL,
  `PID` double DEFAULT NULL,
  `PBID` double DEFAULT NULL,
  `grID` double DEFAULT NULL,
  `deleted` int(11) DEFAULT NULL,
  `storage` int(11) DEFAULT NULL,
  `receipttype` int(11) DEFAULT NULL,
  `quantity` double DEFAULT NULL,
  `free` double DEFAULT NULL,
  `difference` double DEFAULT NULL,
  `CreatedBy` double DEFAULT NULL,
  `CreatedOn` datetime DEFAULT NULL,
  `ModifiedBy` double DEFAULT NULL,
  `ModifiedOn` datetime DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=128 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stockinward`
--

LOCK TABLES `stockinward` WRITE;
/*!40000 ALTER TABLE `stockinward` DISABLE KEYS */;
INSERT INTO `stockinward` VALUES (55,1,1,1,44,1,2,1,1,1,NULL,NULL,NULL,NULL,NULL),(56,1,2,2,44,0,2,2,2,1,NULL,NULL,NULL,NULL,NULL),(57,1,1,12,45,0,2,1,12,3,NULL,NULL,NULL,NULL,NULL),(58,1,2,2,45,0,2,2,12,12,NULL,NULL,NULL,NULL,NULL),(59,1,1,1,46,0,2,1,1,1,NULL,NULL,NULL,NULL,NULL),(60,2,2,2,46,0,2,2,22,1,NULL,NULL,NULL,NULL,NULL),(61,1,1,1,47,0,2,1,12,2,NULL,NULL,NULL,NULL,NULL),(62,1,1,1,48,0,2,1,22,2,NULL,NULL,NULL,NULL,NULL),(63,1,1,1,49,0,2,1,0,0,NULL,NULL,NULL,NULL,NULL),(64,1,1,1,50,0,2,1,34,23,NULL,NULL,NULL,NULL,NULL),(65,2,2,2,50,0,2,2,3,3,NULL,NULL,NULL,NULL,NULL),(66,1,1,1,51,0,2,1,34,33,NULL,NULL,NULL,NULL,NULL),(67,1,1,1,52,0,2,1,66,77,NULL,NULL,NULL,NULL,NULL),(68,1,5,6,53,0,1,2,12,12,NULL,NULL,NULL,NULL,NULL),(69,1,5,7,54,0,1,2,34,43,NULL,NULL,NULL,NULL,NULL),(70,1,5,8,55,0,1,2,55,55,NULL,NULL,NULL,NULL,NULL),(71,1,4,9,56,0,0,0,12,12,NULL,NULL,NULL,NULL,NULL),(72,1,4,0,57,0,1,1,33,33,NULL,NULL,NULL,NULL,NULL),(73,1,1,11,58,0,2,1,12,1,NULL,NULL,NULL,NULL,NULL),(74,2,2,2,58,0,2,2,22,2,NULL,NULL,NULL,NULL,NULL),(75,1,1,14,59,0,2,1,11,1,NULL,NULL,NULL,NULL,NULL),(76,2,2,13,59,0,2,2,22,2,NULL,NULL,NULL,NULL,NULL),(77,1,2,15,60,0,2,2,33,3,NULL,NULL,NULL,NULL,NULL),(78,2,1,1,60,0,2,1,22,1,NULL,NULL,NULL,NULL,NULL),(79,1,1,1,61,1,2,1,11,1,NULL,NULL,NULL,NULL,NULL),(80,2,2,2,61,1,2,2,11,3,NULL,NULL,NULL,NULL,NULL),(81,3,1,1,61,0,2,1,22,2,NULL,NULL,NULL,NULL,NULL),(82,1,1,1,62,0,2,1,33,3,NULL,NULL,NULL,NULL,NULL),(83,2,2,29,62,0,2,2,33,22,NULL,NULL,NULL,NULL,NULL),(84,2,1,12,62,0,2,1,111,11,NULL,NULL,NULL,NULL,NULL),(88,1,1,27,63,1,2,1,44,4,NULL,NULL,NULL,NULL,NULL),(89,1,2,2,63,1,2,2,33,3,NULL,NULL,NULL,NULL,NULL),(90,2,1,0,63,0,2,1,44,4,NULL,NULL,NULL,NULL,NULL),(91,1,1,1,64,0,2,1,22,2,NULL,NULL,NULL,NULL,NULL),(92,2,2,2,64,0,2,2,44,44,NULL,NULL,NULL,NULL,NULL),(93,3,2,15,64,0,2,2,66,4,NULL,NULL,NULL,NULL,NULL),(101,1,3,30,68,0,0,0,1,1,NULL,NULL,NULL,NULL,NULL),(102,2,3,31,68,0,0,0,4,4,NULL,NULL,NULL,NULL,NULL),(103,4,4,32,62,0,0,0,20,20,NULL,NULL,NULL,NULL,NULL),(104,3,3,34,68,0,0,0,20,20,NULL,NULL,NULL,NULL,NULL),(105,1,1,1,69,0,2,1,1,1,NULL,NULL,NULL,NULL,NULL),(106,1,1,11,70,1,2,1,11,11,NULL,NULL,NULL,NULL,NULL),(107,1,6,35,72,0,0,0,12,12,NULL,NULL,NULL,NULL,NULL),(108,1,25,0,76,0,2,2,11,11,NULL,NULL,NULL,NULL,NULL),(109,1,2,50,81,0,2,2,0,0,NULL,NULL,NULL,NULL,NULL),(110,1,8,49,82,0,2,1,0,0,NULL,NULL,NULL,NULL,NULL),(111,1,7,51,83,0,0,0,0,0,NULL,NULL,NULL,NULL,NULL),(112,1,7,52,83,0,0,0,22,22,NULL,NULL,NULL,NULL,NULL),(113,1,7,54,84,0,0,0,11,11,NULL,NULL,NULL,NULL,NULL),(114,2,7,53,84,0,0,0,11,11,NULL,NULL,NULL,NULL,NULL),(115,1,15,57,85,0,0,0,0,0,NULL,NULL,NULL,NULL,NULL),(116,2,8,56,85,0,2,1,33,33,NULL,NULL,NULL,NULL,NULL),(117,1,16,61,86,0,0,0,11,11,NULL,NULL,NULL,NULL,NULL),(118,1,18,63,87,0,0,0,40,40,NULL,NULL,NULL,NULL,NULL),(119,1,2,13,88,0,2,2,0,0,NULL,NULL,NULL,NULL,NULL),(120,1,2,2,0,0,2,2,0,0,NULL,NULL,NULL,NULL,NULL),(121,1,2,13,90,0,2,2,0,0,NULL,NULL,NULL,NULL,NULL),(122,1,2,2,91,0,2,2,0,0,NULL,NULL,NULL,NULL,NULL),(123,1,2,13,92,0,2,2,0,0,NULL,NULL,NULL,NULL,NULL),(124,1,2,2,93,0,2,2,0,0,NULL,NULL,NULL,NULL,NULL),(125,1,2,2,94,0,2,2,0,0,NULL,NULL,NULL,NULL,NULL),(126,1,2,13,94,0,2,2,0,0,NULL,NULL,NULL,NULL,NULL),(127,1,2,15,95,0,2,2,0,0,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `stockinward` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stockinwardpolink`
--

DROP TABLE IF EXISTS `stockinwardpolink`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `stockinwardpolink` (
  `SIID` double NOT NULL DEFAULT '0',
  `POID` double NOT NULL DEFAULT '0',
  `PID` double NOT NULL DEFAULT '0',
  `GRID` double NOT NULL DEFAULT '0',
  `Quantity` double NOT NULL,
  `CreatedBy` double DEFAULT NULL,
  `CreatedOn` datetime DEFAULT NULL,
  `ModifiedBy` double DEFAULT NULL,
  `ModifiedOn` datetime DEFAULT NULL,
  PRIMARY KEY (`SIID`,`POID`,`PID`,`GRID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stockinwardpolink`
--

LOCK TABLES `stockinwardpolink` WRITE;
/*!40000 ALTER TABLE `stockinwardpolink` DISABLE KEYS */;
/*!40000 ALTER TABLE `stockinwardpolink` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `supplier`
--

DROP TABLE IF EXISTS `supplier`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `supplier` (
  `ID` double NOT NULL AUTO_INCREMENT,
  `Other` varchar(15) DEFAULT NULL,
  `CID` double DEFAULT NULL,
  `Name` varchar(50) DEFAULT NULL,
  `accCode` varchar(45) DEFAULT NULL,
  `accName` varchar(45) DEFAULT NULL,
  `Remark` varchar(150) DEFAULT NULL,
  `TaxID` varchar(45) DEFAULT NULL,
  `LedgerType` varchar(15) DEFAULT NULL,
  `accGroup` varchar(15) DEFAULT NULL,
  `OpeningBalance` double DEFAULT NULL,
  `OpeningBalanceTYpe` int(11) DEFAULT NULL,
  `CreditPeriod` int(11) DEFAULT NULL,
  `AddrLine1` varchar(50) DEFAULT NULL,
  `AddrLine2` varchar(50) DEFAULT NULL,
  `City` double DEFAULT NULL,
  `ContactPerson` varchar(50) DEFAULT NULL,
  `Phone` varchar(15) DEFAULT NULL,
  `Fax` varchar(15) DEFAULT NULL,
  `Email` varchar(50) DEFAULT NULL,
  `DeliveryTime` int(11) DEFAULT NULL,
  `flgActive` tinyint(1) DEFAULT NULL,
  `flgOutState` tinyint(1) DEFAULT NULL,
  `flgEmail` tinyint(1) DEFAULT NULL,
  `flgDefault` tinyint(1) DEFAULT NULL,
  `CreatedBy` double DEFAULT NULL,
  `CreatedOn` datetime DEFAULT NULL,
  `ModifiedBy` double DEFAULT NULL,
  `ModifiedOn` datetime DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `supplier`
--

LOCK TABLES `supplier` WRITE;
/*!40000 ALTER TABLE `supplier` DISABLE KEYS */;
INSERT INTO `supplier` VALUES (1,'First SUpp',1000,'Uni - Saga','Code','Uni - Saga','FirstUni','TAXID','1','N/A',10000,1,0,'AddUni1','AddUni1',10,'Ramesh','808808088080','123123.0','saas@gmail.com',21,1,0,1,0,10,'2015-03-04 16:27:30',NULL,NULL),(2,NULL,1000,'Uni - Global',NULL,'Uni - Globa',NULL,NULL,'0',NULL,5000,0,0,NULL,NULL,10,NULL,NULL,NULL,NULL,NULL,1,NULL,0,0,10,'2015-03-04 16:27:30',NULL,NULL),(3,NULL,2000,'Cipla',NULL,'Cipla',NULL,NULL,'1',NULL,7000,1,0,NULL,NULL,10,NULL,NULL,NULL,NULL,NULL,0,NULL,1,0,10,'2015-03-04 16:27:30',NULL,NULL),(4,'',3000,'Sanofi','','Sanofi','','','0','N/A',4000,0,0,'','',10,'','0.0','0.0','',21,1,0,0,0,10,'2015-03-04 16:27:30',NULL,NULL),(5,'My Supp',3000,'My Supp','My Supp','My Supp','My Supp','My Supp','0','N/A',1231,0,0,'My Supp','My Supp',10,'My Supp','123123.0','123123.0','My Supp',21,1,1,0,0,NULL,NULL,NULL,NULL),(6,'asdasd',3000,'EDITED2','1232123','EDITED2','asdas','taxID','0','N/A',0,0,0,'asdas','dasdasd',10,'asdasd','123213.0','123123.0','asdasd',1,1,0,0,1,NULL,NULL,NULL,NULL),(7,'sa',2000,'change','as','change','sa','21','1','N/A',12,1,12,'ads','sda',10,'sad','21.0','21.0','zcx',2,1,0,1,0,NULL,NULL,NULL,NULL),(8,'hb',3001,'hb','gf','hb','asd','b','0','N/A',67565,0,5,'dads','dsd',10,'ds','23434.0','32.0','sdfsd',2,1,1,1,1,NULL,NULL,NULL,NULL),(9,'123123',3004,'My Supplier Inserted','123123','My Supplier Inserted','123123','12312','1','N/A',123123,1,21,'123123','123123',10,'adasdsada','12312123','123123.0','asdasdasdasd',12,1,1,1,1,NULL,NULL,NULL,NULL),(10,'sa',2000,'as','sa','as','sa','','1','N/A',0,1,0,'','',10,'','0.0','0.0','',2,1,0,0,1,NULL,NULL,NULL,NULL),(11,'ds',1000,'sd','sd','sd','','','0','N/A',0,0,0,'','',10,'','0.0','0.0','',0,0,0,0,0,NULL,NULL,NULL,NULL),(12,NULL,1000,'d','d','d',NULL,NULL,'0','N/A',0,0,0,NULL,NULL,10,NULL,'0.0','0.0',NULL,0,1,0,0,1,NULL,NULL,NULL,NULL),(13,'bbb',1000,'bbbbbb','bbbbbbbb','bbbbbb',NULL,NULL,'1','N/A',0,1,0,NULL,NULL,10,NULL,'0.0','0.0',NULL,0,0,0,0,0,NULL,NULL,NULL,NULL),(14,NULL,2000,'asd','asd','asd',NULL,NULL,'1','N/A',0,1,0,NULL,NULL,10,NULL,'0.0','0.0',NULL,0,1,0,0,0,NULL,NULL,NULL,NULL),(15,NULL,2000,'asd','asd','asd',NULL,NULL,'1','N/A',0,1,0,NULL,NULL,10,NULL,'0.0','0.0',NULL,0,1,0,0,0,NULL,NULL,NULL,NULL),(16,'aaa',3005,'aaa','aaa','aaa','aaa','32','1','N/A',2,1,2,NULL,NULL,10,NULL,'0.0','0.0',NULL,0,1,0,0,0,NULL,NULL,NULL,NULL),(17,'ad',3007,'sad','a','sad','ad','23','0','N/A',23,1,2,NULL,NULL,10,NULL,'0.0','0.0',NULL,0,0,0,0,0,NULL,NULL,NULL,NULL),(18,'ad',3007,'sad','a','sad','ad','23','0','N/A',23,1,2,NULL,NULL,10,NULL,'0.0','0.0',NULL,0,0,0,0,0,NULL,NULL,NULL,NULL),(19,'ad',3007,'sad','a','sad','ad','23','0','N/A',23,1,2,NULL,NULL,10,NULL,'0.0','0.0',NULL,0,0,0,0,0,NULL,NULL,NULL,NULL),(20,'ad',3007,'sad','a','sad','ad','23','0','N/A',23,1,2,NULL,NULL,10,NULL,'0.0','0.0',NULL,0,0,0,0,0,NULL,NULL,NULL,NULL),(21,'ad',3007,'sad','a','sad','ad','23','0','N/A',23,1,2,NULL,NULL,10,NULL,'0.0','0.0',NULL,0,0,0,0,0,NULL,NULL,NULL,NULL),(22,NULL,3007,'sa','asd','sa',NULL,NULL,'0','N/A',0,1,0,NULL,NULL,10,NULL,'0.0','0.0',NULL,0,1,0,0,0,NULL,NULL,NULL,NULL),(23,NULL,3005,'asdName','asdcode','asdName',NULL,NULL,'1','N/A',0,1,0,NULL,NULL,10,NULL,'0.0','0.0',NULL,0,1,0,0,0,NULL,NULL,NULL,NULL),(24,NULL,3005,'asdName','asdcode','asdName',NULL,NULL,'1','N/A',0,1,0,NULL,NULL,10,NULL,'0.0','0.0',NULL,0,1,0,0,0,NULL,NULL,NULL,NULL),(25,NULL,3005,'asdName','asdcode','asdName',NULL,NULL,'1','N/A',0,1,0,NULL,NULL,10,NULL,'0.0','0.0',NULL,0,1,0,0,0,NULL,NULL,NULL,NULL),(26,NULL,3005,'asdName','asdcode','asdName',NULL,NULL,'1','N/A',0,1,0,NULL,NULL,10,NULL,'0.0','0.0',NULL,0,1,0,0,0,NULL,NULL,NULL,NULL),(27,NULL,3005,'asdName','asdcode','asdName',NULL,NULL,'1','N/A',0,1,0,NULL,NULL,10,NULL,'0.0','0.0',NULL,0,1,0,0,0,NULL,NULL,NULL,NULL),(28,NULL,3005,'asdName','asdcode','asdName',NULL,NULL,'1','N/A',0,1,0,NULL,NULL,10,NULL,'0.0','0.0',NULL,0,1,0,0,0,NULL,NULL,NULL,NULL),(29,NULL,3005,'asdName','asdcode','asdName',NULL,NULL,'1','N/A',0,1,0,NULL,NULL,10,NULL,'0.0','0.0',NULL,0,1,0,0,0,NULL,NULL,NULL,NULL),(30,NULL,3014,'sat supp','sat supp','sat supp',NULL,NULL,'1','N/A',0,1,0,NULL,NULL,10,NULL,'0.0','0.0',NULL,0,0,0,0,0,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `supplier` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `taxtable`
--

DROP TABLE IF EXISTS `taxtable`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `taxtable` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `TaxCode` varchar(50) DEFAULT NULL,
  `TaxDescription` varchar(45) DEFAULT NULL,
  `vatTax` decimal(10,2) DEFAULT NULL,
  `centralSalesTax` decimal(10,2) DEFAULT NULL,
  `localTax` decimal(10,2) DEFAULT NULL,
  `generalSalesTax` decimal(10,2) DEFAULT NULL,
  `TaxPercentageRate` int(11) DEFAULT NULL,
  `flgSalesSeperateVAT` int(11) DEFAULT NULL,
  `flgSalesVATonFree` int(11) DEFAULT NULL,
  `SalesVATChargeOn` int(11) DEFAULT NULL,
  `flgPurchaseSeperateVAT` int(11) DEFAULT NULL,
  `flgPurchaseVATonFree` int(11) DEFAULT NULL,
  `PurchaseVATChargeOn` int(11) DEFAULT NULL,
  `SaleACid` double DEFAULT NULL,
  `SaleVATACid` double DEFAULT NULL,
  `SaleReturnVATACid` double DEFAULT NULL,
  `PurchaseACid` double DEFAULT NULL,
  `PurchaseVATACid` double DEFAULT NULL,
  `PurchaseReturnVATACid` double DEFAULT NULL,
  `flgActive` tinyint(1) DEFAULT NULL,
  `CreatedBy` double DEFAULT NULL,
  `CreatedOn` datetime DEFAULT NULL,
  `ModifiedBy` double DEFAULT NULL,
  `ModifiedOn` datetime DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=502 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `taxtable`
--

LOCK TABLES `taxtable` WRITE;
/*!40000 ALTER TABLE `taxtable` DISABLE KEYS */;
INSERT INTO `taxtable` VALUES (100,'tcode1','VAT 5%',2.80,11.50,2.70,2.33,5,1,1,1,1,1,2,1,2,1,3,1,1,1,10,'2015-03-04 16:27:30',NULL,NULL),(200,'tcode2','VAT 10%',34.90,1.50,7.40,1.22,10,1,1,2,1,0,3,2,3,4,4,1,1,1,10,'2015-03-04 16:27:30',NULL,NULL),(300,'tcode3','VAT 17%',2.70,4.70,4.70,3.44,17,0,1,3,0,0,3,3,3,1,2,3,4,1,10,'2015-03-04 16:27:30',NULL,NULL),(400,'tcode4','Service Tax',11.40,6.78,1.20,4.11,5,1,0,3,0,0,4,2,3,1,1,3,1,1,10,'2015-03-04 16:27:30',NULL,NULL),(500,'tcode5','Education cess',23.45,2.34,9.10,1.33,2,0,0,1,1,1,1,4,2,2,3,4,3,1,10,'2015-03-04 16:27:30',NULL,NULL),(501,'test','desc',0.00,0.00,0.00,0.00,0,0,1,0,0,0,0,1,2,3,1,0,0,0,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `taxtable` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `temp`
--

DROP TABLE IF EXISTS `temp`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `temp` (
  `ID` int(11) NOT NULL,
  `token` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `temp`
--

LOCK TABLES `temp` WRITE;
/*!40000 ALTER TABLE `temp` DISABLE KEYS */;
INSERT INTO `temp` VALUES (1,'H764T844'),(2,'OUZ36CYFX29VAKL1');
/*!40000 ALTER TABLE `temp` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transporter`
--

DROP TABLE IF EXISTS `transporter`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `transporter` (
  `ID` double NOT NULL DEFAULT '0',
  `Name` varchar(60) DEFAULT NULL,
  `flgActive` int(11) DEFAULT NULL,
  `CreatedBy` double DEFAULT NULL,
  `CreatedOn` datetime DEFAULT NULL,
  `ModifiedBy` double DEFAULT NULL,
  `ModifiedOn` datetime DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transporter`
--

LOCK TABLES `transporter` WRITE;
/*!40000 ALTER TABLE `transporter` DISABLE KEYS */;
INSERT INTO `transporter` VALUES (1,'ARCO',1,NULL,NULL,NULL,NULL),(2,'First Flight',1,NULL,NULL,NULL,NULL),(3,'DTDC',1,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `transporter` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `ID` double NOT NULL AUTO_INCREMENT,
  `userID` varchar(45) DEFAULT NULL,
  `userPassword` varchar(40) DEFAULT NULL,
  `FirstName` varchar(40) DEFAULT NULL,
  `LastName` varchar(40) DEFAULT NULL,
  `AddrLine1` varchar(50) DEFAULT NULL,
  `AddrLine2` varchar(50) DEFAULT NULL,
  `Phone` varchar(15) DEFAULT NULL,
  `Fax` varchar(15) DEFAULT NULL,
  `Email` varchar(50) DEFAULT NULL,
  `flgActive` int(11) DEFAULT NULL,
  `flgLock` int(11) DEFAULT NULL,
  `CreatedBy` double DEFAULT NULL,
  `CreatedOn` datetime DEFAULT NULL,
  `ModifiedBy` double DEFAULT NULL,
  `ModifiedOn` datetime DEFAULT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `UID` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,NULL,'dipali123','Dipali','Vidhate',NULL,NULL,NULL,NULL,NULL,1,0,10,'2015-03-04 16:27:30',NULL,NULL),(2,NULL,'ketan123','Ketan','Sakpal',NULL,NULL,NULL,NULL,NULL,1,0,10,'2015-03-04 16:27:30',NULL,NULL),(3,'aaa','aa','aa','aa','','','','','',0,0,10,'2015-03-04 16:27:30',NULL,NULL),(4,NULL,'rajesh123','Rajesh','Mahale',NULL,NULL,NULL,NULL,NULL,1,0,10,'2015-03-04 16:27:30',NULL,NULL),(5,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,0,10,'2015-03-04 16:27:30',NULL,NULL),(6,'nikita','nikita123','nikita','pise','addr1','addr2','979676','7678','sadsasda',1,1,NULL,NULL,NULL,NULL),(10,'satyajit','satyajit123','Satyajit','Toradmal','addr1',NULL,NULL,NULL,NULL,1,0,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_old`
--

DROP TABLE IF EXISTS `user_old`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_old` (
  `ID` double NOT NULL AUTO_INCREMENT,
  `userID` varchar(45) DEFAULT NULL,
  `userPassword` varchar(40) DEFAULT NULL,
  `FirstName` varchar(40) DEFAULT NULL,
  `LastName` varchar(40) DEFAULT NULL,
  `AddrLine1` varchar(50) DEFAULT NULL,
  `AddrLine2` varchar(50) DEFAULT NULL,
  `Phone` varchar(15) DEFAULT NULL,
  `Fax` varchar(15) DEFAULT NULL,
  `Email` varchar(50) DEFAULT NULL,
  `flgActive` int(11) DEFAULT NULL,
  `flgLock` int(11) DEFAULT NULL,
  `CreatedBy` double DEFAULT NULL,
  `CreatedOn` datetime DEFAULT NULL,
  `ModifiedBy` double DEFAULT NULL,
  `ModifiedOn` datetime DEFAULT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `UID` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_old`
--

LOCK TABLES `user_old` WRITE;
/*!40000 ALTER TABLE `user_old` DISABLE KEYS */;
INSERT INTO `user_old` VALUES (1,NULL,'dipali123','Dipali','Vidhate',NULL,NULL,NULL,NULL,NULL,1,0,10,'2015-03-04 16:27:30',NULL,NULL),(2,NULL,'ketan123','Ketan','Sakpal',NULL,NULL,NULL,NULL,NULL,1,0,10,'2015-03-04 16:27:30',NULL,NULL),(3,'aaa','aa','aa','aa','','','','','',0,0,10,'2015-03-04 16:27:30',NULL,NULL),(4,NULL,'rajesh123','Rajesh','Mahale',NULL,NULL,NULL,NULL,NULL,1,0,10,'2015-03-04 16:27:30',NULL,NULL),(5,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,0,10,'2015-03-04 16:27:30',NULL,NULL),(6,'nikita','nikita123','nikita','pise','addr1','addr2','979676','7678','sadsasda',1,1,NULL,NULL,NULL,NULL),(10,'satyajit','satyajit123','Satyajit','Toradmal','addr1',NULL,NULL,NULL,NULL,1,0,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `user_old` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `userlog`
--

DROP TABLE IF EXISTS `userlog`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `userlog` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `userID` int(11) DEFAULT NULL,
  `loginDate` datetime DEFAULT NULL,
  `IP` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=428 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userlog`
--

LOCK TABLES `userlog` WRITE;
/*!40000 ALTER TABLE `userlog` DISABLE KEYS */;
INSERT INTO `userlog` VALUES (186,10,'2015-10-10 11:34:59',NULL),(187,10,'2015-10-10 11:56:39',NULL),(188,10,'2015-10-10 13:14:07',NULL),(189,10,'2015-10-10 14:09:14',NULL),(190,10,'2015-10-10 14:49:38',NULL),(191,10,'2015-10-10 14:51:21',NULL),(192,10,'2015-10-10 14:59:37',NULL),(193,10,'2015-10-10 15:03:02',NULL),(194,10,'2015-10-10 15:08:04',NULL),(195,10,'2015-10-10 15:15:37',NULL),(196,10,'2015-10-10 15:16:11',NULL),(197,10,'2015-10-10 16:42:39',NULL),(198,10,'2015-10-10 18:41:49',NULL),(199,10,'2015-10-11 17:05:44',NULL),(200,10,'2015-10-11 20:47:50',NULL),(201,10,'2015-10-11 21:15:20',NULL),(202,10,'2015-10-11 21:34:41',NULL),(203,10,'2015-10-11 23:57:09',NULL),(204,10,'2015-10-12 09:11:16',NULL),(205,10,'2015-10-12 10:24:30',NULL),(206,10,'2015-10-12 11:32:01',NULL),(207,10,'2015-10-12 13:23:29',NULL),(208,10,'2015-10-12 14:10:43',NULL),(209,10,'2015-10-12 18:00:20',NULL),(210,10,'2015-10-12 18:38:29',NULL),(211,10,'2015-10-13 07:42:55',NULL),(212,10,'2015-10-13 08:34:59',NULL),(213,10,'2015-10-13 08:49:15',NULL),(214,10,'2015-10-13 10:32:04',NULL),(215,10,'2015-10-13 10:35:00',NULL),(216,10,'2015-10-13 13:06:30',NULL),(217,10,'2015-10-13 14:08:36',NULL),(218,10,'2015-10-13 15:26:45',NULL),(219,10,'2015-10-13 16:10:13',NULL),(220,10,'2015-10-13 17:57:56',NULL),(221,10,'2015-10-13 22:32:14',NULL),(222,10,'2015-10-14 00:00:43',NULL),(223,10,'2015-10-14 10:05:25',NULL),(224,10,'2015-10-14 13:46:38',NULL),(225,10,'2015-10-14 15:44:11',NULL),(226,10,'2015-10-14 15:45:31',NULL),(227,10,'2015-10-15 00:00:50',NULL),(228,10,'2015-10-15 00:33:19',NULL),(229,10,'2015-10-15 00:37:29',NULL),(230,10,'2015-10-15 10:13:52',NULL),(231,10,'2015-10-15 13:02:37',NULL),(232,10,'2015-10-15 14:49:36',NULL),(233,10,'2015-10-15 16:30:40',NULL),(234,10,'2015-10-15 17:31:05',NULL),(235,10,'2015-10-15 18:12:41',NULL),(236,10,'2015-10-15 19:41:46',NULL),(237,10,'2015-10-15 22:51:29',NULL),(238,10,'2015-10-16 10:08:32',NULL),(239,10,'2015-10-16 11:14:56',NULL),(240,10,'2015-10-16 13:48:10',NULL),(241,10,'2015-10-16 18:31:41',NULL),(242,10,'2015-10-16 18:33:03',NULL),(243,10,'2015-10-16 18:34:20',NULL),(244,10,'2015-10-16 23:45:46',NULL),(245,10,'2015-10-17 11:27:00',NULL),(246,10,'2015-10-17 14:55:49',NULL),(247,10,'2015-10-18 15:31:49',NULL),(248,10,'2015-10-19 10:37:32',NULL),(249,10,'2015-10-19 11:32:07',NULL),(250,10,'2015-10-19 12:18:48',NULL),(251,10,'2015-10-19 14:03:24',NULL),(252,10,'2015-10-19 18:27:49',NULL),(253,10,'2015-10-19 23:19:44',NULL),(254,10,'2015-10-19 23:41:11',NULL),(255,10,'2015-10-20 00:06:22',NULL),(256,10,'2015-10-20 10:07:24',NULL),(257,10,'2015-10-20 10:29:52',NULL),(258,10,'2015-10-20 10:31:13',NULL),(259,10,'2015-10-20 10:34:20',NULL),(260,10,'2015-10-20 11:24:14',NULL),(261,10,'2015-10-20 13:40:38',NULL),(262,10,'2015-10-20 13:47:21',NULL),(263,10,'2015-10-20 16:15:09',NULL),(264,10,'2015-10-20 17:36:09',NULL),(265,10,'2015-10-20 18:56:20',NULL),(266,10,'2015-10-20 18:56:47',NULL),(267,10,'2015-10-20 18:57:54',NULL),(268,10,'2015-10-20 19:29:47',NULL),(269,10,'2015-10-20 19:40:56',NULL),(270,10,'2015-10-21 10:57:28',NULL),(271,10,'2015-10-21 11:13:32',NULL),(272,10,'2015-10-21 11:34:59',NULL),(273,10,'2015-10-21 11:51:44',NULL),(274,10,'2015-10-21 12:03:07',NULL),(275,10,'2015-10-21 12:08:58',NULL),(276,10,'2015-10-21 12:09:14',NULL),(277,10,'2015-10-21 12:14:58',NULL),(278,10,'2015-10-21 12:17:51',NULL),(279,10,'2015-10-21 12:19:32',NULL),(280,10,'2015-10-21 12:22:23',NULL),(281,10,'2015-10-21 12:26:07',NULL),(282,10,'2015-10-21 12:28:34',NULL),(283,10,'2015-10-21 12:29:49',NULL),(284,10,'2015-10-21 12:39:09',NULL),(285,10,'2015-10-21 12:59:02',NULL),(286,10,'2015-10-21 14:19:40',NULL),(287,10,'2015-10-21 14:55:50',NULL),(288,10,'2015-10-21 15:10:40',NULL),(289,10,'2015-10-21 16:48:02',NULL),(290,10,'2015-10-21 17:59:05',NULL),(291,10,'2015-10-21 17:59:13',NULL),(292,10,'2015-10-21 18:05:02',NULL),(293,10,'2015-10-23 12:11:17',NULL),(294,10,'2015-10-23 14:11:38',NULL),(295,10,'2015-10-23 14:59:01',NULL),(296,10,'2015-10-23 17:03:28',NULL),(297,10,'2015-10-23 19:44:12',NULL),(298,10,'2015-10-24 10:32:21',NULL),(299,10,'2015-10-24 10:59:09',NULL),(300,10,'2015-10-24 13:24:03',NULL),(301,10,'2015-10-24 14:11:06',NULL),(302,10,'2015-10-24 16:38:55',NULL),(303,10,'2015-10-24 16:56:47',NULL),(304,10,'2015-10-24 17:53:59',NULL),(305,10,'2015-10-24 18:34:31',NULL),(306,10,'2015-10-25 11:15:00',NULL),(307,10,'2015-10-25 18:25:54',NULL),(308,10,'2015-10-25 20:25:49',NULL),(309,10,'2015-10-25 21:10:28',NULL),(310,10,'2015-10-25 22:31:22',NULL),(311,10,'2015-10-25 22:43:41',NULL),(312,10,'2015-10-26 10:47:35',NULL),(313,10,'2015-10-26 10:47:48',NULL),(314,10,'2015-10-26 10:48:07',NULL),(315,10,'2015-10-26 11:33:56',NULL),(316,10,'2015-10-26 11:36:00',NULL),(317,10,'2015-10-26 11:52:21',NULL),(318,10,'2015-10-26 11:55:12',NULL),(319,10,'2015-10-26 12:56:59',NULL),(320,10,'2015-10-26 13:24:35',NULL),(321,10,'2015-10-26 14:24:51',NULL),(322,10,'2015-10-26 15:39:29',NULL),(323,10,'2015-10-26 16:06:34',NULL),(324,10,'2015-10-26 16:11:43',NULL),(325,10,'2015-10-26 16:39:16',NULL),(326,10,'2015-10-26 16:47:09',NULL),(327,10,'2015-10-26 17:14:27',NULL),(328,10,'2015-10-26 17:37:24',NULL),(329,10,'2015-10-26 17:37:46',NULL),(330,10,'2015-10-26 17:59:03',NULL),(331,35,'2015-10-26 17:59:32',NULL),(332,10,'2015-10-26 18:38:45',NULL),(333,10,'2015-10-26 18:39:12',NULL),(334,10,'2015-10-26 19:18:49',NULL),(335,10,'2015-10-26 19:19:34',NULL),(336,10,'2015-10-26 19:38:51',NULL),(337,10,'2015-10-26 19:39:51',NULL),(338,10,'2015-10-26 19:41:20',NULL),(339,10,'2015-10-26 19:41:33',NULL),(340,10,'2015-10-26 19:41:43',NULL),(341,10,'2015-10-26 19:42:05',NULL),(342,10,'2015-10-26 19:42:31',NULL),(343,10,'2015-10-26 19:43:04',NULL),(344,10,'2015-10-26 19:43:18',NULL),(345,10,'2015-10-26 19:43:37',NULL),(346,10,'2015-10-26 19:44:10',NULL),(347,10,'2015-10-26 19:45:40',NULL),(348,10,'2015-10-26 19:46:32',NULL),(349,10,'2015-10-26 19:50:25',NULL),(350,10,'2015-10-26 19:51:55',NULL),(351,10,'2015-10-26 19:52:54',NULL),(352,10,'2015-10-26 19:54:14',NULL),(353,10,'2015-10-26 19:56:21',NULL),(354,10,'2015-10-26 19:57:59',NULL),(355,10,'2015-10-26 19:59:04',NULL),(356,10,'2015-10-26 19:59:36',NULL),(357,10,'2015-10-27 00:13:50',NULL),(358,10,'2015-10-27 10:01:59',NULL),(359,10,'2015-10-27 10:10:53',NULL),(360,10,'2015-10-27 10:28:00',NULL),(361,10,'2015-10-27 10:34:00',NULL),(362,10,'2015-10-27 12:11:23',NULL),(363,10,'2015-10-27 14:56:53',NULL),(364,10,'2015-10-27 15:00:28',NULL),(365,10,'2015-10-27 16:21:47',NULL),(366,10,'2015-10-27 16:29:57',NULL),(367,10,'2015-10-27 16:35:55',NULL),(368,10,'2015-10-27 16:36:36',NULL),(369,10,'2015-10-27 16:39:56',NULL),(370,10,'2015-10-27 16:44:09',NULL),(371,10,'2015-10-27 17:29:12',NULL),(372,10,'2015-10-27 17:41:34',NULL),(373,10,'2015-10-27 23:21:19',NULL),(374,10,'2015-10-28 10:20:56',NULL),(375,10,'2015-10-28 10:35:20',NULL),(376,10,'2015-10-28 10:41:20',NULL),(377,10,'2015-10-28 12:10:41',NULL),(378,10,'2015-10-28 14:11:49',NULL),(379,10,'2015-10-28 14:41:18',NULL),(380,10,'2015-10-28 15:02:51',NULL),(381,10,'2015-10-28 15:10:55',NULL),(382,10,'2015-10-28 15:14:49',NULL),(383,10,'2015-10-28 15:15:13',NULL),(384,10,'2015-10-28 15:17:38',NULL),(385,10,'2015-10-28 15:19:06',NULL),(386,10,'2015-10-28 15:21:16',NULL),(387,10,'2015-10-28 15:21:48',NULL),(388,10,'2015-10-28 15:23:44',NULL),(389,10,'2015-10-28 15:33:38',NULL),(390,10,'2015-10-28 15:34:00',NULL),(391,10,'2015-10-28 15:35:50',NULL),(392,10,'2015-10-28 17:03:08',NULL),(393,10,'2015-10-28 17:24:41',NULL),(394,10,'2015-10-28 17:27:24',NULL),(395,10,'2015-10-28 19:01:32',NULL),(396,10,'2015-10-28 19:18:43',NULL),(397,10,'2015-10-28 20:05:45',NULL),(398,10,'2015-10-28 20:08:01',NULL),(399,10,'2015-10-28 20:31:23',NULL),(400,10,'2015-10-28 20:31:57',NULL),(401,10,'2015-10-28 23:02:15',NULL),(402,10,'2015-10-28 23:19:55',NULL),(403,10,'2015-10-29 08:41:25',NULL),(404,10,'2015-10-29 09:02:52',NULL),(405,10,'2015-10-29 11:16:35',NULL),(406,10,'2015-10-29 13:00:38',NULL),(407,10,'2015-10-29 14:23:40',NULL),(408,10,'2015-10-29 15:54:14',NULL),(409,10,'2015-10-29 17:25:52',NULL),(410,10,'2015-10-29 17:34:26',NULL),(411,10,'2015-10-29 17:36:03',NULL),(412,10,'2015-10-29 21:35:17',NULL),(413,10,'2015-10-29 22:40:55',NULL),(414,10,'2015-10-29 23:09:48',NULL),(415,10,'2015-10-29 23:14:22',NULL),(416,10,'2015-10-30 09:06:34',NULL),(417,10,'2015-10-30 09:59:06',NULL),(418,10,'2015-10-30 10:27:48',NULL),(419,10,'2015-10-30 16:32:15',NULL),(420,10,'2015-10-30 17:43:48',NULL),(421,10,'2015-10-30 19:09:14',NULL),(422,10,'2015-10-30 22:55:21',NULL),(423,10,'2015-10-31 01:26:17',NULL),(424,10,'2015-10-31 10:09:23',NULL),(425,10,'2015-10-31 11:54:27',NULL),(426,10,'2015-10-31 13:40:04',NULL),(427,10,'2015-10-31 15:25:53',NULL);
/*!40000 ALTER TABLE `userlog` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `userpermission`
--

DROP TABLE IF EXISTS `userpermission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `userpermission` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `userID` int(11) DEFAULT NULL,
  `userRoleID` int(11) DEFAULT NULL,
  `permissionID` int(11) DEFAULT NULL,
  `CreatedOn` datetime DEFAULT NULL,
  `CreatedBy` int(11) DEFAULT NULL,
  `ModifiedOn` datetime DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=776 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userpermission`
--

LOCK TABLES `userpermission` WRITE;
/*!40000 ALTER TABLE `userpermission` DISABLE KEYS */;
INSERT INTO `userpermission` VALUES (1,10,2,1,NULL,NULL,NULL),(2,10,2,2,NULL,NULL,NULL),(3,10,2,3,NULL,NULL,NULL),(4,10,2,4,NULL,NULL,NULL),(5,10,2,5,NULL,NULL,NULL),(6,10,2,6,NULL,NULL,NULL),(7,10,2,7,NULL,NULL,NULL),(8,10,2,8,NULL,NULL,NULL),(9,10,2,9,NULL,NULL,NULL),(10,10,2,10,NULL,NULL,NULL),(11,10,2,11,NULL,NULL,NULL),(12,10,2,12,NULL,NULL,NULL),(13,10,2,13,NULL,NULL,NULL),(14,10,2,14,NULL,NULL,NULL),(15,10,2,15,NULL,NULL,NULL),(18,10,2,18,NULL,NULL,NULL),(19,10,2,19,NULL,NULL,NULL),(20,10,2,20,NULL,NULL,NULL),(21,10,2,21,NULL,NULL,NULL),(22,10,2,22,NULL,NULL,NULL),(23,10,2,23,NULL,NULL,NULL),(24,10,2,24,NULL,NULL,NULL),(25,10,2,25,NULL,NULL,NULL),(26,10,2,26,NULL,NULL,NULL),(27,10,2,27,NULL,NULL,NULL),(28,10,2,28,NULL,NULL,NULL),(29,10,2,29,NULL,NULL,NULL),(30,10,2,30,NULL,NULL,NULL),(31,10,2,31,NULL,NULL,NULL),(32,10,2,32,NULL,NULL,NULL),(33,10,2,33,NULL,NULL,NULL),(34,10,2,34,NULL,NULL,NULL),(35,10,2,35,NULL,NULL,NULL),(36,10,2,36,NULL,NULL,NULL),(37,10,2,37,NULL,NULL,NULL),(38,10,2,38,NULL,NULL,NULL),(39,10,2,39,NULL,NULL,NULL),(40,10,2,40,NULL,NULL,NULL),(41,10,2,41,NULL,NULL,NULL),(42,10,2,42,NULL,NULL,NULL),(43,10,2,43,NULL,NULL,NULL),(44,10,2,44,NULL,NULL,NULL),(45,10,2,45,NULL,NULL,NULL),(46,10,2,46,NULL,NULL,NULL),(47,10,2,47,NULL,NULL,NULL),(48,10,2,48,NULL,NULL,NULL),(49,10,2,49,NULL,NULL,NULL),(50,10,2,50,NULL,NULL,NULL),(51,10,2,51,NULL,NULL,NULL),(52,10,2,52,NULL,NULL,NULL),(53,10,2,53,NULL,NULL,NULL),(54,10,2,54,NULL,NULL,NULL),(55,10,2,55,NULL,NULL,NULL),(56,10,2,56,NULL,NULL,NULL),(57,10,2,57,NULL,NULL,NULL),(58,10,2,58,NULL,NULL,NULL),(59,10,2,59,NULL,NULL,NULL),(60,10,2,60,NULL,NULL,NULL),(61,10,2,61,NULL,NULL,NULL),(62,10,2,62,NULL,NULL,NULL),(63,10,2,63,NULL,NULL,NULL),(64,10,2,64,NULL,NULL,NULL),(65,10,2,65,NULL,NULL,NULL),(66,10,2,66,NULL,NULL,NULL),(77,10,2,67,NULL,NULL,NULL),(78,10,2,68,NULL,NULL,NULL),(79,10,2,69,NULL,NULL,NULL),(80,10,2,70,NULL,NULL,NULL),(81,10,2,71,NULL,NULL,NULL),(82,10,2,72,NULL,NULL,NULL),(83,10,2,73,NULL,NULL,NULL),(84,10,2,74,NULL,NULL,NULL),(85,10,2,75,NULL,NULL,NULL),(86,10,2,78,NULL,NULL,NULL),(87,10,2,79,NULL,NULL,NULL),(88,10,2,80,NULL,NULL,NULL),(89,10,2,81,NULL,NULL,NULL),(90,10,2,82,NULL,NULL,NULL),(91,10,2,83,NULL,NULL,NULL),(92,10,2,84,NULL,NULL,NULL),(93,10,2,85,NULL,NULL,NULL),(94,10,2,87,NULL,NULL,NULL),(95,1,1,1,NULL,NULL,NULL),(96,10,1,16,NULL,NULL,NULL),(97,1,1,3,NULL,NULL,NULL),(98,1,1,4,NULL,NULL,NULL),(99,10,2,92,NULL,NULL,NULL),(100,10,2,93,NULL,NULL,NULL),(101,10,2,94,NULL,NULL,NULL),(102,10,2,95,NULL,NULL,NULL),(103,10,2,96,NULL,NULL,NULL),(104,10,2,97,NULL,NULL,NULL),(105,10,2,98,NULL,NULL,NULL),(106,10,2,99,NULL,NULL,NULL),(107,10,2,100,NULL,NULL,NULL),(108,10,2,101,NULL,NULL,NULL),(109,10,2,102,NULL,NULL,NULL),(110,10,2,103,NULL,NULL,NULL),(111,10,2,104,NULL,NULL,NULL),(112,10,2,105,NULL,NULL,NULL),(113,10,2,106,NULL,NULL,NULL),(114,10,2,107,NULL,NULL,NULL),(115,10,2,108,NULL,NULL,NULL),(116,10,2,109,NULL,NULL,NULL),(117,10,2,110,NULL,NULL,NULL),(118,10,2,111,NULL,NULL,NULL),(119,10,2,112,NULL,NULL,NULL),(120,10,2,113,NULL,NULL,NULL),(121,10,2,114,NULL,NULL,NULL),(122,10,2,115,NULL,NULL,NULL),(123,10,2,119,NULL,NULL,NULL),(124,10,2,122,NULL,NULL,NULL),(125,10,2,124,NULL,NULL,NULL),(126,10,2,128,NULL,NULL,NULL),(127,10,2,129,NULL,NULL,NULL),(128,10,2,131,NULL,NULL,NULL),(129,10,2,132,NULL,NULL,NULL),(130,10,2,133,NULL,NULL,NULL),(131,10,2,134,NULL,NULL,NULL),(132,10,2,135,NULL,NULL,NULL),(133,10,2,136,NULL,NULL,NULL),(605,10,2,137,NULL,NULL,NULL),(727,10,2,138,NULL,NULL,NULL),(728,10,2,139,NULL,NULL,NULL),(729,10,2,140,NULL,NULL,NULL),(730,10,2,17,NULL,NULL,NULL),(731,10,2,77,NULL,NULL,NULL),(732,10,2,76,NULL,NULL,NULL),(733,10,2,86,NULL,NULL,NULL),(734,10,2,88,NULL,NULL,NULL),(735,10,2,89,NULL,NULL,NULL),(736,10,2,90,NULL,NULL,NULL),(737,10,2,91,NULL,NULL,NULL),(738,10,2,116,NULL,NULL,NULL),(739,10,2,117,NULL,NULL,NULL),(740,10,2,118,NULL,NULL,NULL),(741,10,2,120,NULL,NULL,NULL),(742,10,2,121,NULL,NULL,NULL),(743,10,2,123,NULL,NULL,NULL),(744,10,2,125,NULL,NULL,NULL),(745,10,2,126,NULL,NULL,NULL),(746,10,2,127,NULL,NULL,NULL),(747,10,2,130,NULL,NULL,NULL),(748,10,2,141,NULL,NULL,NULL),(749,10,2,142,NULL,NULL,NULL),(750,10,2,143,NULL,NULL,NULL),(751,10,2,144,NULL,NULL,NULL),(752,10,2,145,NULL,NULL,NULL),(753,10,2,146,NULL,NULL,NULL),(754,10,2,147,NULL,NULL,NULL),(755,10,2,148,NULL,NULL,NULL),(756,10,2,149,NULL,NULL,NULL),(757,10,2,150,NULL,NULL,NULL),(765,10,2,151,NULL,NULL,NULL),(766,10,2,152,NULL,NULL,NULL),(767,10,2,153,NULL,NULL,NULL),(768,10,2,154,NULL,NULL,NULL),(769,10,2,155,NULL,NULL,NULL),(770,10,2,156,NULL,NULL,NULL),(771,10,2,157,NULL,NULL,NULL),(772,10,2,158,NULL,NULL,NULL),(773,10,2,159,NULL,NULL,NULL),(774,10,2,160,NULL,NULL,NULL),(775,10,2,161,NULL,NULL,NULL);
/*!40000 ALTER TABLE `userpermission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `userrights`
--

DROP TABLE IF EXISTS `userrights`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `userrights` (
  `ID` float NOT NULL,
  `userID` double DEFAULT NULL,
  `rightID` double DEFAULT NULL,
  `flgActive` int(11) DEFAULT NULL,
  `CreatedBy` double DEFAULT NULL,
  `CreatedOn` datetime DEFAULT NULL,
  `ModifiedBy` double DEFAULT NULL,
  `ModifiedOn` datetime DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userrights`
--

LOCK TABLES `userrights` WRITE;
/*!40000 ALTER TABLE `userrights` DISABLE KEYS */;
INSERT INTO `userrights` VALUES (1,10,-1,1,10,'2015-03-04 16:27:30',NULL,NULL),(2,20,-1,1,10,'2015-03-04 16:27:30',NULL,NULL),(3,30,-1,1,10,'2015-03-04 16:27:30',NULL,NULL),(4,40,-1,1,10,'2015-03-04 16:27:30',NULL,NULL),(5,50,-1,1,10,'2015-03-04 16:27:30',NULL,NULL);
/*!40000 ALTER TABLE `userrights` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `view_batch_stock`
--

DROP TABLE IF EXISTS `view_batch_stock`;
/*!50001 DROP VIEW IF EXISTS `view_batch_stock`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `view_batch_stock` AS SELECT 
 1 AS `SAID`,
 1 AS `productID`,
 1 AS `batchID`,
 1 AS `QtyAvailableTotal`,
 1 AS `FreeAvailableTotal`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `view_controlpaneldefaultrole`
--

DROP TABLE IF EXISTS `view_controlpaneldefaultrole`;
/*!50001 DROP VIEW IF EXISTS `view_controlpaneldefaultrole`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `view_controlpaneldefaultrole` AS SELECT 
 1 AS `ContactType`,
 1 AS `DefaultRole`,
 1 AS `ContactTypeID`,
 1 AS `RoleID`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `view_pendingorders`
--

DROP TABLE IF EXISTS `view_pendingorders`;
/*!50001 DROP VIEW IF EXISTS `view_pendingorders`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `view_pendingorders` AS SELECT 
 1 AS `PID`,
 1 AS `purchaseQtyAvlTotal`,
 1 AS `purchaseFreeAvlTotal`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `view_poproduct_received`
--

DROP TABLE IF EXISTS `view_poproduct_received`;
/*!50001 DROP VIEW IF EXISTS `view_poproduct_received`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `view_poproduct_received` AS SELECT 
 1 AS `POID`,
 1 AS `PID`,
 1 AS `SIID`,
 1 AS `sum`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `view_product_contents`
--

DROP TABLE IF EXISTS `view_product_contents`;
/*!50001 DROP VIEW IF EXISTS `view_product_contents`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `view_product_contents` AS SELECT 
 1 AS `PID`,
 1 AS `Name`,
 1 AS `contentName`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `view_product_contents_types`
--

DROP TABLE IF EXISTS `view_product_contents_types`;
/*!50001 DROP VIEW IF EXISTS `view_product_contents_types`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `view_product_contents_types` AS SELECT 
 1 AS `ContentID`,
 1 AS `contentName`,
 1 AS `contenttypeMasterName`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `view_purchase_history`
--

DROP TABLE IF EXISTS `view_purchase_history`;
/*!50001 DROP VIEW IF EXISTS `view_purchase_history`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `view_purchase_history` AS SELECT 
 1 AS `POID`,
 1 AS `PID`,
 1 AS `productName`,
 1 AS `poDate`,
 1 AS `supplierId`,
 1 AS `quantity`,
 1 AS `free`,
 1 AS `MRP`,
 1 AS `purchaseRate`,
 1 AS `tradeDiscount`,
 1 AS `tradeDiscountAmt`,
 1 AS `specialDiscount`,
 1 AS `specialDiscountAmt`,
 1 AS `GRID`,
 1 AS `grDate`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `view_rolelist`
--

DROP TABLE IF EXISTS `view_rolelist`;
/*!50001 DROP VIEW IF EXISTS `view_rolelist`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `view_rolelist` AS SELECT 
 1 AS `Role`,
 1 AS `roleID`,
 1 AS `userID`,
 1 AS `permissionID`,
 1 AS `RoleDescription`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `view_stock`
--

DROP TABLE IF EXISTS `view_stock`;
/*!50001 DROP VIEW IF EXISTS `view_stock`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `view_stock` AS SELECT 
 1 AS `PID`,
 1 AS `storageID`,
 1 AS `receiptTypeID`,
 1 AS `QtyAvailableTotal`,
 1 AS `FreeAvailableTotal`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `voucher1`
--

DROP TABLE IF EXISTS `voucher1`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `voucher1` (
  `ID` double NOT NULL AUTO_INCREMENT,
  `voucherTypeID` double DEFAULT NULL,
  `VoucherType` varchar(45) DEFAULT NULL,
  `NarrationID` double DEFAULT NULL,
  `Narration` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=87 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `voucher1`
--

LOCK TABLES `voucher1` WRITE;
/*!40000 ALTER TABLE `voucher1` DISABLE KEYS */;
INSERT INTO `voucher1` VALUES (81,5,'Bank Payment',132,'efffffddddddd'),(83,5,'Bank Payment',133,'qqqzzzz'),(85,3,'Cash Payment',135,'aeed'),(86,3,'Cash Payment',136,'test');
/*!40000 ALTER TABLE `voucher1` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'purpleaid'
--

--
-- Dumping routines for database 'purpleaid'
--
/*!50003 DROP PROCEDURE IF EXISTS `a` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `a`(
IN uid int,
IN token varchar(30)

)
BEGIN


DECLARE employee_is_too_young CONDITION FOR SQLSTATE '99001';
 select count(userID) from activeusers where (activeusers.userID = uid and activeusers.createdBy >= now() - INTERVAL 30 MINUTE) and 
activeusers.token = token;

if count(userID) = 0 then  
 SIGNAL employee_is_too_young;
          
 ELSE
select  'fd';
end if;


END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `ClearAllSaleLock` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `ClearAllSaleLock`(
IN  uid  int,
IN  token varchar(30),
IN UpdatepermissionID int,
OUT status int 
 
)
BEGIN

call purpleaid.sp_authorization(uid,  token, UpdatepermissionID ,  @auth_status);


 set status= @auth_status;

 if @auth_status = 2 then 
 
	update stockauditmaster
    set stockauditmaster.FlgSaleLock = 0;
    
    update product 
	set product.flgStockAuditLock =  0 
	where product.id in
		(select stockauditproduct.PID 
		from stockauditproduct 
		join stockauditmaster on stockauditproduct.AuditID = stockauditmaster.id); 
 
	-- set status
 end if;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `contactTypeList` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `contactTypeList`( 
IN  uid  int,
 IN  token varchar(30),
 IN InsertpermissionID int,
 OUT status int )
BEGIN


call purpleaid.sp_authorization(uid,  token, InsertpermissionID , @auth_status);

    set status= @auth_status;

	if @auth_status = 2 then
select * from entitydetails where TypeID = 1;

end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `delectActiveUsersMenu` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `delectActiveUsersMenu`(
IN activeuserid int,
IN uid  int,
IN token varchar(30),
IN viewPermissionID int,
OUT status int

)
BEGIN
call purpleaid.sp_authorization(uid,  token, viewPermissionID , @auth_status);

    set status= @auth_status;

 if @auth_status = 2 then 


Delete from activeusers where ID = activeuserid;

end if;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `deleteActiveUsers` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `deleteActiveUsers`(
IN activeuserid int,
IN userName varchar(50),
IN userPassword varchar(50),
out status int
)
BEGIN

set status =0;

if exists (select contact.ID from contact
left join userpermission on userpermission.userID = contact.ID
left join permission on permission.ID = userpermission.permissionID
where contact.userName = userName and contact.userPassward = userPassword and permission.ID = 92) then

Delete from activeusers where ID = activeuserid;

set status =1;
end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `deleteADandADP` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `deleteADandADP`(

IN creditNoteADID double,
IN uid  int,
IN token varchar(30),
IN viewPermissionID int,
OUT status int
)
BEGIN

call purpleaid.sp_authorization(uid,  token, viewPermissionID , @auth_status);

    set status= @auth_status;

 if @auth_status = 2 then 
    
    delete from creditnoteadditionaldiscount where ID = creditNoteADID;

    delete from creditnoteadditionaldiscountproduct where CNADID = creditNoteADID;
           
end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `deleteADP` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `deleteADP`(
IN creditNoteADID double,
IN uid  int,
IN token varchar(30),
IN viewPermissionID int,
OUT status int
)
BEGIN


call purpleaid.sp_authorization(uid,  token, viewPermissionID , @auth_status);

    set status= @auth_status;

 if @auth_status = 2 then 
    
      delete from creditnoteadditionaldiscountproduct where CNADID = creditNoteADID;
           
end if;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `deleteContentType` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `deleteContentType`(
IN contentid int,
 IN uid int,
 IN token varchar(30),
 IN viewPermissionID int,
 OUT status int

)
BEGIN
call purpleaid.sp_authorization(uid,  token, viewPermissionID , @auth_status);

set status= @auth_status;

if @auth_status = 2 then 

Delete from contenttype where contentID = contentid;

end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `deleteCustomerLicence` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `deleteCustomerLicence`(
IN custID double,
IN uid int,
 IN token varchar(30),
 IN viewPermissionID int,
 OUT status int

)
BEGIN
call purpleaid.sp_authorization(uid,  token, viewPermissionID , @auth_status);

set status= @auth_status;

if @auth_status = 2 then 

Delete from customerlicences where CustomerID = custID;

end if;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `deleteNonActiveUsers` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `deleteNonActiveUsers`()
BEGIN
declare seesiontime int;

select value into seesiontime from purpleaidsettings where Name ='sessionTime';

delete from activeusers where  ModifiedOn <= now() - INTERVAL seesiontime MINUTE;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `deletePBA` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `deletePBA`(

IN pbaid double,
 IN  uid  int,
 IN  token varchar(30),
 IN InsertpermissionID int,
 OUT status int  
)
BEGIN
	call purpleaid.sp_authorization(uid,  token, InsertpermissionID , @auth_status);

    set status= @auth_status;

	if @auth_status = 2 then 
    
    delete from productbatchactive where ID = pbaid;
    
    end if;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `DeleteProductContents` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `DeleteProductContents`(IN PID double,
IN uid int,
 IN token varchar(30),
 IN viewPermissionID int,
 OUT status int

)
BEGIN
call purpleaid.sp_authorization(uid,  token, viewPermissionID , @auth_status);

set status= @auth_status;

if @auth_status = 2 then 

Delete from productcontents where productcontents.productID = PID;

end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `deletePurchaseProducts` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `deletePurchaseProducts`(
IN cpoID int,
IN  uid  int,
IN  token varchar(30),
IN DeletepermissionID int,
OUT status int 

)
BEGIN
    
    call purpleaid.sp_authorization(uid,  token, DeletepermissionID , @auth_status);

    set status= @auth_status;

	if @auth_status = 2 then 

            Delete from purchaseproducts where CompanyOrderID = cpoID;
            
     end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `deleteRouteArea` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `deleteRouteArea`(
in rid int,
 IN uid int,
 IN token varchar(30),
 IN viewPermissionID int,
 OUT status int
)
BEGIN
call purpleaid.sp_authorization(uid,  token, viewPermissionID , @auth_status);

set status= @auth_status;

if @auth_status = 2 then 
Delete from routearea where rID = rid;
end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `deleteSA` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `deleteSA`(

IN said double,
 IN  uid  int,
 IN  token varchar(30),
 IN InsertpermissionID int,
 OUT status int  

)
BEGIN
	call purpleaid.sp_authorization(uid,  token, InsertpermissionID , @auth_status);

    set status= @auth_status;

	if @auth_status = 2 then 
    
    delete from stockactive where ID = said;
    
    end if;



END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `deleteSAProducts` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `deleteSAProducts`(


IN SAID double,
IN uid  int,
IN  token  varchar(30),
IN DeletepermissionID int,
 OUT status  int
)
BEGIN



call purpleaid.sp_authorization(uid,  token, DeletepermissionID , @auth_status);

 set status= @auth_status;

	 if @auth_status = 2 then
	 
		delete from stockauditproduct where AuditID = SAID;

	
end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `deleteSIPO` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `deleteSIPO`(IN grid double,
IN uid int,
 IN token varchar(30),
 IN viewPermissionID int,
 OUT status int
)
BEGIN
call purpleaid.sp_authorization(uid,  token, viewPermissionID , @auth_status);

set status= @auth_status;

if @auth_status = 2 then 
delete from stockinwardpolink where GRID = grid;
end if;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `divisionUpdate` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `divisionUpdate`(
          INOUT  divisionId                         int, 
          IN  divisionCompanyId                     double, 
          IN  divisionCode                          VARCHAR(60), 
          IN  divisionName                          VARCHAR(30), 
          IN  divisionRemark                        VARCHAR(20), 
          IN  divisionContactName                   VARCHAR(15),
          IN  divisionContactPhone                  VARCHAR(60), 
          IN  divisionContactEmail                  VARCHAR(60),
          IN  divisionActiveFlag                    INT(11),
          IN  uid                                   int,
		  IN  token                                 varchar(30),
          IN  InsertpermissionID                    int,
		  IN  UpdatepermissionID                    int,
		  IN  DeletepermissionID                    int,
		  OUT status                                int 

)
BEGIN

declare oldFlgActive int;


if divisionId != 0 then

select flgActive into oldFlgActive from division where ID = divisionId ;

if (oldFlgActive != divisionActiveFlag ) AND divisionActiveFlag = 1 then 

 call purpleaid.sp_authorization(uid,  token, DeletepermissionID ,  @auth_status);
  
else

 call purpleaid.sp_authorization(uid,  token, UpdatepermissionID ,  @auth_status);
 
end if;

 set status= @auth_status;

 if @auth_status = 2 then 

     UPDATE division

      SET 
      ID = divisionId,
      CID    = divisionCompanyId,
      Code    = divisionCode,
      Name = divisionName,
      Remark= divisionRemark,
      ContactPerson= divisionContactName,
      Phone = divisionContactPhone,
      Email= divisionContactEmail,
      flgActive=divisionActiveFlag
      
      WHERE ID = divisionId;

    set divisionId = LAST_INSERT_ID();

      End if;
End if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getAccountList` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getAccountList`(

 IN uid int,
 IN token varchar(30),
 IN viewPermissionID int,
 OUT status int 

)
BEGIN
call purpleaid.sp_authorization(uid,  token, viewPermissionID , @auth_status);

set status= @auth_status;

if @auth_status = 2 then 

select * from account;

end if;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getActiveProductBatchList` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getActiveProductBatchList`(
In PID double,
IN uid  int,
IN token varchar(30),
IN viewPermissionID int,
OUT status int 


)
BEGIN
call purpleaid.sp_authorization(uid,  token, viewPermissionID , @auth_status);

    set status= @auth_status;

	if @auth_status = 2 then 



select productbatchactive.ID,batchNo, MRP , purchaseRate , sellRate , sa.QtyAvailable , sa.FreeAvailable ,
date_format(expiryDate , '%d/%m/%Y') as expiryDate,sa.ID as SAID
from productbatchactive  left join stockactive sa on sa.PBAID= productbatchactive.ID 
where sa.PID = PID and productbatchactive.deleted = 0 
order by batchNo;


end if;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getActiveUsersList` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getActiveUsersList`(
IN uid  int,
IN token varchar(30),
IN viewPermissionID int,
OUT status int 

)
BEGIN
call purpleaid.sp_authorization(uid,  token, viewPermissionID , @auth_status);

    set status= @auth_status;

 if @auth_status = 2 then 

select activeusers.ID as ID, contact.userName as userID , activeusers.IP ,concat(contact.FirstName , ' ', contact.LastName) as name, 
DATE_FORMAT(activeusers.createdOn, '%d %b %Y %h:%i %p') as loginTime ,
DATE_FORMAT(activeusers.ModifiedOn, '%d %b %Y %h:%i %p') as lastActivityTime ,
time_format(timediff(activeusers.ModifiedOn,activeusers.createdOn) ,'%H : %i : %s' ) as activityTime , NULL as NoOfUsers, NULL as flgSystemLock
from activeusers left join contact on contact.ID = activeusers.userID

union all

 select 
NULL as ID, NULL as userID , NULL as IP ,NULL as name, 
NULL as loginTime ,
NULL as lastActivityTime ,
NULL as activityTime ,
 
 NoOfUsers , flgSystemLock from owner;
 


end if;


END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getAdditionalDiscCN` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getAdditionalDiscCN`(

IN creditNoteID int,
IN cID int,
IN fromDate varchar(40),
IN toDate varchar(40),
IN salesid int,
IN uid  int,
IN token varchar(30),
IN viewPermissionID int,
OUT status int,
OUT action int,
IN salescid int,
IN salespid int

)
BEGIN

declare custid double;
declare cnstatus int;

set custid =0 ;
set cnstatus = 0;

call purpleaid.sp_authorization(uid,  token, viewPermissionID , @auth_status);

    set status= @auth_status;

	if @auth_status = 2 then 
    
    
    
    if creditNoteID = 0 then 
    
    set action = 1;
	
		set @strQuery = 'Select';

		 set @strQuery = concat(@strQuery,  '  * from (select sales.ID as salesID , date_format(sales.Date , "%d/%m/%Y") as salesadte ,sales.productCount,	sales.productAmount as InvoiceProductAmount, sales.productVAT as invoiceVAT, ifnull(sales.Amount, 0 ) as InvoiceAmount,	salesproducts.ID as SPID , salesproducts.Qty as productQty , salesproducts.FreeQty as poductFreeQty, salesproducts.discount as productDiscount, salesproducts.TotalAmount as productTotalAmount,salesproducts.VAT as CNproductVAT ,	product.Name as productName , product.Discount ,product.MRP ,product.purchaseRate,product.saleRate,company.Name as companyName	from sales 	left join salesproducts on salesproducts.saleID = sales.ID left join product on product.ID = salesproducts.PID	left join company on company.ID = salesproducts.CID	where sales.custID = ',  cast(cID as char) ,' and sales.ID not in (select distinct creditnoteadditionaldiscount.InvoiceNo from creditnoteadditionaldiscount left join creditnote on creditnote.ID = creditnoteadditionaldiscount.CNID  where creditnote.custID = ' ,  cast(cID as char) , ' ) and sales.ID < 9999999999999999999  ) a order by  a.salesID desc ');


    else
 
          select creditnote.custID, creditnote.status into @custid , @cnstatus from creditnote 
       
           where creditnote.ID = creditNoteID;
        
          set custid = @custid, cnstatus = @cnstatus ;
         
        if cnstatus  = 1  then  -- available 
      
			set action = 2;
            
		   set @strQuery = 'Select';


		  set @strQuery = concat(@strQuery,  '  * from ( ( select creditnoteadditionaldiscount.Remark as salesRemark ,creditnote.flgVoid , creditnote.flgVerified ,  date_format( creditnote.ledgerDate ,"%d/%m/%Y %h:%i:%s") as cnledgerOn , concat(c2.firstName , " " , c2.LastName ) as  ledgerUserName , creditnote.ledgerUser as cnledgerUserID,date_format( creditnote.voidOn ,"%d/%m/%Y %h:%i:%s") as cnVoidOn , concat(contact.firstName , " " , contact.LastName ) as voidByName  , concat(c4.firstName , " " , c4.LastName ) as  VoidUser ,creditnote.voidBy as cnVoidByID,date_format( creditnote.verifiedOn ,"%d/%m/%Y %h:%i:%s") as cnVerifiedOn , concat(c3.firstName , " " , c3.LastName ) as  VerifiedByUser ,  creditnote.verifiedBy as cnverifiedByID,  date_format( creditnote.CreatedOn ,"%d/%m/%Y %h:%i:%s") as cnCreatedOn ,  concat(contact.firstName , " " , contact.LastName ) as createdByName   ,  creditnote.CreatedBy as cnCreatedByID,   date_format( creditnote.lockDate ,"%d/%m/%Y %h:%i:%s") as cnlockDate ,  concat(c.firstName , " " , c.LastName ) as lockUserName , creditnote.lockUser as cnlockUserID,  creditnoteadditionaldiscountproduct.ID as CNADPID , ifnull(creditnoteadditionaldiscount.DiscountType , 1) as discType ,ifnull(creditnoteadditionaldiscount.additionalDisc , 0 ) as invoiceADAmount, creditnoteadditionaldiscount.additionalDiscAmt as invoiceADPercentage,  creditnoteadditionaldiscountproduct.additionalDiscPercentage as cnProductDiscPercentage, creditnoteadditionaldiscountproduct.additionalDiscAmount as cnProductDiscAmount,creditnote.statusDecription , creditnote.TypeDescription , creditnote.remark as cnRemark, creditnote.flgLedgerLock, creditnote.flgApproved ,  creditnote.ApprovedOn , customer.ID  as custID, customer.Name as custName,   sales.ID as salesID , date_format(sales.Date , "%d/%m/%Y") as salesadte ,sales.productCount, sales.productAmount as InvoiceProductAmount,  sales.productVAT as invoiceVAT, ifnull(sales.Amount, 0 ) as InvoiceAmount,  salesproducts.ID as SPID , salesproducts.Qty as productQty ,  salesproducts.FreeQty as poductFreeQty, salesproducts.discount as productDiscount,  salesproducts.TotalAmount as productTotalAmount, salesproducts.VAT as CNproductVAT ,  product.Name as productName , product.Discount , product.MRP , product.purchaseRate,product.saleRate,  company.Name as companyName,	 creditnoteadditionaldiscount.ID as CNADID, 	creditnote.ID as CNID , creditnote.Type as creditNoteType,	creditnote.status as cnStatus, creditnote.Amount as cnAmount, creditnote.custID as cnCustID , date_format(creditnote.date ,"%d/%m/%Y")as cnDate , creditnote.lockDate , creditnote.lockUser , creditnote.flgLock, creditnote.verifiedBy , creditnote.verifiedOn , creditnote.voidBy , creditnote.voidOn , creditnote.voidReason,	creditnote.ledgerDate ,  creditnote.ledgerUser from creditnote  left join creditnoteadditionaldiscount on creditnote.ID = creditnoteadditionaldiscount.CNID	 left join sales on sales.ID = creditnoteadditionaldiscount.InvoiceNo   left join salesproducts on salesproducts.saleID = sales.ID	    left join creditnoteadditionaldiscountproduct creditnoteadditionaldiscountproduct on creditnoteadditionaldiscountproduct.SPID = salesproducts.ID left join product on product.ID = salesproducts.PID left join company on company.ID = salesproducts.CID    left join contact on contact.ID = creditnote.createdBy 	 left join contact c on c.ID = creditnote.lockUser  left join contact c4 on c4.ID = creditnote.voidBy left join contact c3 on c3.ID = creditnote.verifiedBy left join contact c2 on c2.ID = creditnote.ledgerUser  left join customer on customer.ID = creditnote.CustID	 where creditnote.ID =  ' , cast( creditNoteID as char ) ,' )	  union 	(	select     NULL as salesRemark , NULL as flgVoid , NULL as flgVerified , NULL as cnledgerOn , NULL as  ledgerUserName , NULL as cnledgerUserID,NULL as cnVoidOn ,NULL as voidByName  , NULL as  VoidUser ,NULL as cnVoidByID,NULL as cnVerifiedOn ,NULL as  VerifiedByUser , NULL as cnverifiedByID,NULL as cnCreatedOn ,NULL as createdByName   ,NULL as cnCreatedByID,NULL as cnlockDate ,NULL as lockUserName ,NULL as cnlockUserID,  NULL as CNADPID , NULL as discType , 0 as invoiceADAmount,  NULL as invoiceADPercentage,    NULL as cnProductDiscPercentage, NULL as statusDecription ,  NULL as cnProductDiscAmount, NULL as TypeDescription , NULL as cnRemark, NULL as flgLedgerLock, NULL as flgApproved, NULL as custID, 	NULL as approvedBy , NULL as custName,  sales.ID as salesID , date_format(sales.Date , "%d/%m/%Y") as salesadte ,sales.productCount, sales.productAmount as InvoiceProductAmount,  sales.productVAT as invoiceVAT,  ifnull(sales.Amount , 0) as InvoiceAmount, salesproducts.ID as SPID , salesproducts.Qty as productQty ,  salesproducts.FreeQty as poductFreeQty, salesproducts.discount as productDiscount,  salesproducts.TotalAmount as productTotalAmount,  salesproducts.VAT as CNproductVAT , product.Name as productName , product.Discount ,product.MRP ,product.purchaseRate, product.saleRate, company.Name as companyName, NULL as CNADID,	null as CNID , 4 as creditNoteType,	null as cnStatus, null as cnAmount, null as cnCustID ,	 null as cnDate ,  null as lockDate , null as lockUser , null as  flgLock, null as verifiedBy ,  null as verifiedOn ,  null as voidBy ,   null asvoidOn ,  null as voidReason, null as ledgerDate , null as ledgerUser from sales   left join salesproducts on salesproducts.saleID = sales.ID left join product on product.ID = salesproducts.PID left join company on company.ID = salesproducts.CID  where sales.custID = ' , cast(custid as char) ,' and sales.ID  not in ( select distinct creditnoteadditionaldiscount.InvoiceNo from creditnoteadditionaldiscount  left join creditnote on creditnote.ID = creditnoteadditionaldiscount.CNID  where creditnote.custID = ', cast(custid as char) , ')	and sales.ID < 9999999999999999999 ')	;
          
         

			   IF (length(fromDate) > 0) then 
			 
					 SET @strQuery = concat(@strQuery, ' and  sales.Date >=  str_to_date("', fromDate , '" ,"%d/%m/%Y") ') ;
					 
				end if; 
				
				IF (length(toDate) > 0) then 
			 
					 SET @strQuery = concat(@strQuery, ' and  sales.Date <=  str_to_date("', toDate , '" ,"%d/%m/%Y") ') ;
					 
				end if; 
				
					 
				IF salesid > 0 then 
			 
					 SET @strQuery = concat(@strQuery, ' and salesproducts.saleID = ' , cast(salesid as char)) ;
					 
				end if; 
          
          
            IF salescid > 0 and salespid  = 0 then 
			 
					 SET @strQuery = concat(@strQuery, '  and sales.ID in(select salesproduct.salesID from salesproducts where CID = ', cast(salescid as char) ) ;
					 
			end if; 
          
           IF salescid = 0 and salespid  > 0 then 
			 
					 SET @strQuery = concat(@strQuery, '  and sales.ID in(select salesproduct.salesID from salesproducts where PID = ', cast(salespid as char) ) ;
					 
			end if; 
            
           IF salescid > 0 and salespid > 0 then 
			 
					 SET @strQuery = concat(@strQuery, '  and sales.ID in(select salesproduct.salesID from salesproducts where CID = ', cast(salescid as char) , ', and PID =  ' , cast(salespid as char) , ' ) ') ;
					 
			end if; 
        
        
        
        
        set @strQuery = concat(@strQuery,  ')  ) a order by a.CNID desc , a.CNADID desc , a.salesID desc  ');
       
       else -- applied
			
            set action = 2;
    
			set @strQuery = 'Select';


			-- set @strQuery = concat(@strQuery,  '  creditnote.flgVoid , creditnote.flgVerified , date_format( creditnote.ledgerDate ,"%d/%m/%Y %h:%i:%s") as cnledgerOn ,concat(c2.firstName , " " , c2.LastName ) as  ledgerUserName , creditnote.ledgerUser as cnledgerUserID,date_format( creditnote.voidOn ,"%d/%m/%Y %h:%i:%s") as cnVoidOn , concat(contact.firstName , " " , contact.LastName ) as voidByName  , concat(c4.firstName , " " , c4.LastName ) as  VoidUser ,creditnote.voidBy as cnVoidByID,date_format( creditnote.verifiedOn ,"%d/%m/%Y %h:%i:%s") as cnVerifiedOn , concat(c3.firstName , " " , c3.LastName ) as  VerifiedByUser ,  creditnote.verifiedBy as cnverifiedByID,  date_format( creditnote.CreatedOn ,"%d/%m/%Y %h:%i:%s") as cnCreatedOn ,  concat(contact.firstName , " " , contact.LastName ) as createdByName   ,  creditnote.CreatedBy as cnCreatedByID,   date_format( creditnote.lockDate ,"%d/%m/%Y %h:%i:%s") as cnlockDate ,  concat(c.firstName , " " , c.LastName ) as lockUserName , creditnote.lockUser as cnlockUserID,  creditnoteadditionaldiscountproduct.ID as CNADPID , ifnull(creditnoteadditionaldiscount.DiscountType , 1) as discType ,ifnull(creditnoteadditionaldiscount.additionalDisc , 0 ) as invoiceADAmount, creditnoteadditionaldiscount.additionalDiscAmt as invoiceADPercentage,  creditnoteadditionaldiscountproduct.additionalDiscPercentage as cnProductDiscPercentage, creditnoteadditionaldiscountproduct.additionalDiscAmount as cnProductDiscAmount,creditnote.statusDecription , creditnote.TypeDescription , creditnote.remark as cnRemark, creditnote.flgLedgerLock, creditnote.flgApproved ,  creditnote.ApprovedOn , customer.ID  as custID, customer.Name as custName,   sales.ID as salesID , date_format(sales.Date , "%d/%m/%Y") as salesadte ,sales.productCount, sales.productAmount as InvoiceProductAmount,  sales.productVAT as invoiceVAT, ifnull(sales.Amount, 0 ) as InvoiceAmount,  salesproducts.ID as SPID , salesproducts.Qty as productQty ,  salesproducts.FreeQty as poductFreeQty, salesproducts.discount as productDiscount,  salesproducts.TotalAmount as productTotalAmount, salesproducts.VAT as CNproductVAT ,  product.Name as productName , product.Discount , product.MRP , product.purchaseRate,product.saleRate,  company.Name as companyName,	 creditnoteadditionaldiscount.ID as CNADID, 	creditnote.ID as CNID , creditnote.Type as creditNoteType,	creditnote.status as cnStatus, creditnote.Amount as cnAmount, creditnote.custID as cnCustID , creditnote.date as cnDate , creditnote.lockDate , creditnote.lockUser , creditnote.flgLock, creditnote.verifiedBy , creditnote.verifiedOn , creditnote.voidBy , creditnote.voidOn , creditnote.voidReason,	creditnote.ledgerDate ,  creditnote.ledgerUser from creditnoteadditionaldiscount   left join creditnoteadditionaldiscountproduct on creditnoteadditionaldiscountproduct.CNADID = creditnoteadditionaldiscount.ID	 left join sales on sales.ID = creditnoteadditionaldiscount.InvoiceNo  left join salesproducts on salesproducts.saleID = sales.ID	 left join creditnote on creditnote.ID = creditnoteadditionaldiscount.CNID	 left join product on product.ID = salesproducts.PID	 left join company on company.ID = salesproducts.CID   left join contact on contact.ID = creditnote.createdBy 	 left join contact c on c.ID = creditnote.lockUser  left join contact c4 on c4.ID = creditnote.voidBy left join contact c3 on c3.ID = creditnote.verifiedBy left join contact c2 on c2.ID = creditnote.ledgerUser  left join customer on customer.ID = creditnote.CustID	 where creditnotea.CNID = ', cast(creditNoteID as char) );
   
			set @strQuery = concat(@strQuery,  ' creditnoteadditionaldiscount.Remark as salesRemark , creditnote.flgVoid , creditnote.flgVerified ,  date_format( creditnote.ledgerDate ,"%d/%m/%Y %h:%i:%s") as cnledgerOn , concat(c2.firstName , " " , c2.LastName ) as  ledgerUserName , creditnote.ledgerUser as cnledgerUserID,date_format( creditnote.voidOn ,"%d/%m/%Y %h:%i:%s") as cnVoidOn , concat(contact.firstName , " " , contact.LastName ) as voidByName  , concat(c4.firstName , " " , c4.LastName ) as  VoidUser ,creditnote.voidBy as cnVoidByID,date_format( creditnote.verifiedOn ,"%d/%m/%Y %h:%i:%s") as cnVerifiedOn , concat(c3.firstName , " " , c3.LastName ) as  VerifiedByUser ,  creditnote.verifiedBy as cnverifiedByID,  date_format( creditnote.CreatedOn ,"%d/%m/%Y %h:%i:%s") as cnCreatedOn ,  concat(contact.firstName , " " , contact.LastName ) as createdByName   ,  creditnote.CreatedBy as cnCreatedByID,   date_format( creditnote.lockDate ,"%d/%m/%Y %h:%i:%s") as cnlockDate ,  concat(c.firstName , " " , c.LastName ) as lockUserName , creditnote.lockUser as cnlockUserID,  creditnoteadditionaldiscountproduct.ID as CNADPID , ifnull(creditnoteadditionaldiscount.DiscountType , 1) as discType ,ifnull(creditnoteadditionaldiscount.additionalDisc , 0 ) as invoiceADAmount, creditnoteadditionaldiscount.additionalDiscAmt as invoiceADPercentage,  creditnoteadditionaldiscountproduct.additionalDiscPercentage as cnProductDiscPercentage, creditnoteadditionaldiscountproduct.additionalDiscAmount as cnProductDiscAmount,creditnote.statusDecription , creditnote.TypeDescription , creditnote.remark as cnRemark, creditnote.flgLedgerLock, creditnote.flgApproved ,  creditnote.ApprovedOn , customer.ID  as custID, customer.Name as custName,   sales.ID as salesID , date_format(sales.Date , "%d/%m/%Y") as salesadte ,sales.productCount, sales.productAmount as InvoiceProductAmount,  sales.productVAT as invoiceVAT, ifnull(sales.Amount, 0 ) as InvoiceAmount,  salesproducts.ID as SPID , salesproducts.Qty as productQty ,  salesproducts.FreeQty as poductFreeQty, salesproducts.discount as productDiscount,  salesproducts.TotalAmount as productTotalAmount, salesproducts.VAT as CNproductVAT ,  product.Name as productName , product.Discount , product.MRP , product.purchaseRate,product.saleRate,  company.Name as companyName,	 creditnoteadditionaldiscount.ID as CNADID, 	creditnote.ID as CNID , creditnote.Type as creditNoteType,	creditnote.status as cnStatus, creditnote.Amount as cnAmount, creditnote.custID as cnCustID ,  date_format(creditnote.date ,"%d/%m/%Y")as cnDate , creditnote.lockDate , creditnote.lockUser , creditnote.flgLock, creditnote.verifiedBy , creditnote.verifiedOn , creditnote.voidBy , creditnote.voidOn , creditnote.voidReason,	creditnote.ledgerDate ,  creditnote.ledgerUser from creditnote  left join creditnoteadditionaldiscount on creditnote.ID = creditnoteadditionaldiscount.CNID	 left join sales on sales.ID = creditnoteadditionaldiscount.InvoiceNo   left join salesproducts on salesproducts.saleID = sales.ID	    left join creditnoteadditionaldiscountproduct creditnoteadditionaldiscountproduct on creditnoteadditionaldiscountproduct.SPID = salesproducts.ID left join product on product.ID = salesproducts.PID left join company on company.ID = salesproducts.CID    left join contact on contact.ID = creditnote.createdBy 	 left join contact c on c.ID = creditnote.lockUser  left join contact c4 on c4.ID = creditnote.voidBy left join contact c3 on c3.ID = creditnote.verifiedBy left join contact c2 on c2.ID = creditnote.ledgerUser  left join customer on customer.ID = creditnote.CustID	 where creditnote.ID =  ' , cast( creditNoteID as char ) );
   
   end if;
    
    end if;
 
   PREPARE stmt FROM @strQuery ;
    Execute stmt ;
    deallocate prepare stmt;

  
  select @strQuery ;
  end if;
  

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getAllActiveNonActiveCompanyList` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getAllActiveNonActiveCompanyList`(
 IN uid int,
 IN token varchar(30),
 IN viewPermissionID int,
 OUT status int 
)
BEGIN

call purpleaid.sp_authorization(uid,  token, viewPermissionID , @auth_status);

set status= @auth_status;

if @auth_status = 2 then 

select com.*, c.id as cityId,c.Name cityName,c.flgActive as cityActiveFlag,s.ID stateId,s.Name stateName,s.flgActive as stateActiveFlag from company com join city c on com.City=c.id join state s on c.State=s.ID where com.flgActive = 1 ORDER BY com.Name ASC;

end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getAllActiveSupplierList` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getAllActiveSupplierList`(


 IN uid int,
 IN token varchar(30),
 IN viewPermissionID int,
 OUT status int
)
BEGIN
call purpleaid.sp_authorization(uid,  token, viewPermissionID , @auth_status);

set status= @auth_status;

if @auth_status = 2 then

select s.ID as supplierId,IFNULL(s.Other, '' ) as supplierOtherInfo,s.CID as supplierCompanyId,s.Name as supplierName,IFNULL(s.accCode, '' ) as supplierAccCode,IFNULL(s.accName, '' ) as supplierAccName,IFNULL(s.Remark, '' ) as supplierRemark,IFNULL(s.TaxID, '' ) as supplierTaxId,
IFNULL(s.LedgerType, '' ) as supplierLedgerType,IFNULL(s.accGroup, '' ) as supplierAccGroup,
IFNULL(s.OpeningBalance, '' ) as supplierOpeningBalance,
IFNULL(s.OpeningBalanceTYpe, '' ) as supplierOpeningBalanceType,
IFNULL(s.CreditPeriod, '' ) as supplierCreditPeriod,IFNULL(s.AddrLine1, '' ) as supplierAddrLine1,
IFNULL(s.AddrLine2, '' ) as supplierAddrLine2,IFNULL(s.ContactPerson, '' ) as supplierContactPerson,
IFNULL(s.Phone, '' ) as supplierPhone,IFNULL(s.Fax, '' ) as supplierFax,
IFNULL(s.Email, '' ) as supplierEmail,s.DeliveryTime as supplierDeliveryTime,
IFNULL(s.flgActive, '' ) as supplierActiveFlag,IFNULL(s.flgOutState, '' ) as supplierOutStateFlag,
IFNULL(s.flgEmail, '' ) as supplierEmailFlag,s.flgDefault as supplierDefaultFlag,
 c.id as cityId,c.Name cityName,c.flgActive as cityActiveFlag,s.ID stateId,s.Name stateName,
 s.flgActive as stateActiveFlag,company.Name as supplierCompanyName
 from supplier s join city c on s.City=c.id join state st on c.State=st.ID 
 join company on s.CID=company.ID where s.flgActive = 1 ORDER BY s.Name ASC;
end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getAllAreaList` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getAllAreaList`(
 IN uid int,
 IN token varchar(30),
 IN viewPermissionID int,
 OUT status int 

)
BEGIN


call purpleaid.sp_authorization(uid,  token, viewPermissionID , @auth_status);

set status= @auth_status;

if @auth_status = 2 then 

select area.*,ifnull(area.pincode , '')as areaPincode, r.description as regionDescription,
r.code as regionCode from area left join region as r on area.regionID= r.ID;

end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getAllBatches` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getAllBatches`(IN productId double,
IN uid  int,
IN token varchar(30),
IN viewPermissionID int,
OUT status int )
BEGIN


call purpleaid.sp_authorization(uid,  token, viewPermissionID , @auth_status);

    set status= @auth_status;

	if @auth_status = 2 then 

select distinct productbatch.*,p.ID as productId from productbatch 
 left join stockinward si on si.PBID = productbatch.ID 
 left join product p on p.ID = si.PID
 where p.ID= productId ;

end if;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getAllCategoryReportList` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getAllCategoryReportList`()
BEGIN
select * from 
(select reportcategory.id, reportcategory.CategoryName  , reportcategory.Position ,
reportmaster.Name , reportmaster.Description , reportmaster.Report_Url ,reportmaster.UI_Url,
reportlist.RCID , reportlist.RMID , reportlist.RCCID from reportcategory
left outer join reportlist on reportlist.RCID = reportcategory.id 
left outer join reportmaster on reportlist.RMID = reportmaster.ID
where Position  > 0 ) a
left join (
select reportcategory.id as ID2 , reportcategory.CategoryName as subCategoryName, 
reportmaster.Name as ReportName , reportmaster.Description as ReportDescription, reportmaster.Report_Url as subReport_Url,
reportmaster.UI_Url as subUI_Url,
reportlist.RCID as subRCID, reportlist.RMID as subRMID from reportcategory
left outer join reportlist on reportlist.RCID = reportcategory.id 
left join reportmaster on reportlist.RMID = reportmaster.ID 
where Position = 0) b on a.RCCID = b.subRCID
where not (b.ID2 is null and a.RMID is null)
order by a.Position
;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getAllCompanyDivisionList` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getAllCompanyDivisionList`(
IN uid  int,
IN token varchar(30),
IN viewPermissionID int,
OUT status int
)
BEGIN

call purpleaid.sp_authorization(uid,  token, viewPermissionID , @auth_status);

    set status= @auth_status;

 if @auth_status = 2 then 

   select division.cid as "companyID" ,
   ifnull(company.name," ")as "CompanyName" ,
   division.id as "divisionID" , 
   ifnull(division.name ,"") as "DivisionName"
   from division 
   left join company on company.id = division.CID 
   where division.flgActive =1 order by division.cid;
            
 end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getAllcompanyList` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getAllcompanyList`(
 IN uid int,
 IN token varchar(30),
 IN viewPermissionID int,
 OUT status int 

)
BEGIN

call purpleaid.sp_authorization(uid,  token, viewPermissionID , @auth_status);

set status= @auth_status;

if @auth_status = 2 then 


select com.*, c.id as cityId,c.Name cityName,c.flgActive as cityActiveFlag,s.ID stateId,
s.Name stateName,s.flgActive as stateActiveFlag from company com
join city c on com.City=c.id join state s on c.State=s.ID  
ORDER BY com.Name ASC;


end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getallcontent` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getallcontent`(IN uid  int,
IN token varchar(30),
IN viewPermissionID int,
OUT status int)
BEGIN
call purpleaid.sp_authorization(uid,  token, viewPermissionID , @auth_status);

    set status= @auth_status;

	if @auth_status = 2 then 
select content.*, view_product_contents_types.contenttypeMasterName  as contentTypes from content left join view_product_contents_types on view_product_contents_types.contentID = content.ID;
end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getAllContentList` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getAllContentList`(
 IN uid int,
 IN token varchar(30),
 IN viewPermissionID int,
 OUT status int )
BEGIN
call purpleaid.sp_authorization(uid,  token, viewPermissionID , @auth_status);

set status= @auth_status;

if @auth_status = 2 then 

SELECT con.*,contType.ID as CTID ,contType.contentFlag as contentFlag, contType.contentID as contentID,
contType.contentTypeID as contentTypeID,contenttypemaster.Type as contentTypeName,
contenttypemaster.Description as contentTypeDescription from content con 
left join contenttype contType on con.ID = contType.contentID
 left join contenttypemaster on contType.contentTypeID=contenttypemaster.ID;

end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getAllContentTypeList` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getAllContentTypeList`(


 IN uid int,
 IN token varchar(30),
 IN viewPermissionID int,
 OUT status int 
)
BEGIN
call purpleaid.sp_authorization(uid,  token, viewPermissionID , @auth_status);

set status= @auth_status;

if @auth_status = 2 then 

SELECT * from contenttypemaster;



end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getAllCustomerList` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getAllCustomerList`( IN uid int,
 IN token varchar(30),
 IN viewPermissionID int,
 OUT status int)
BEGIN
call purpleaid.sp_authorization(uid,  token, viewPermissionID , @auth_status);

set status= @auth_status;

if @auth_status = 2 then 

select cust.*,cl.CLindex as CLindex ,cl.customerNumber as cnum, 
DATE_FORMAT(cl.LicenceStartDate, '%d/%m/%Y') as startDate ,
 DATE_FORMAT(cl.LicenceEndDate,'%d/%m/%Y') as EndDate ,cl.ID as custID, cl.CustomerID as clID,
 l.Name as lname , l.licenceType as ltype , cl.licenceType as licenceType, 
 c.id as cityId,c.Name cityName,c.flgActive as cityActiveFlag, s.ID stateId,s.Name stateName,
 s.flgActive as stateActiveFlag from customer cust 
 join city c on cust.City=c.id join state s on c.State=s.ID 
 left join customerlicences cl on cust.ID = cl.CustomerID 
left join licence l on cl.licenceType = l.licenceType order by cust.ID;


end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getAllCustomerListForCN` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getAllCustomerListForCN`(
IN  uid  int,
 IN  token varchar(30),
 IN InsertpermissionID int,
 OUT status int

)
BEGIN

call purpleaid.sp_authorization(uid,  token, InsertpermissionID , @auth_status);

    set status= @auth_status;

	if @auth_status = 2 then

select customer.ID as customerID,  customer.ContactPerson as customerName , area.description as area ,customer.Phone , 
concat(customer.Name , ' ( ' , customer.ID , ' )') as custAccountName,customer.Type as CustType,

concat(customer.AddrLine1 , ' , ' , customer.AddrLine2 ) as CustAddress,
salesman.Name as salesman from customer
left join area on customer.Area = area.ID 
left join salesman on salesman.ID = customer.Salesman where customer.flgActive = 1;

end if;


END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getAllDivisionList` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getAllDivisionList`(
 IN uid int,
 IN token varchar(30),
 IN viewPermissionID int,
 OUT status int

)
BEGIN
call purpleaid.sp_authorization(uid,  token, viewPermissionID , @auth_status);

set status= @auth_status;

if @auth_status = 2 then 

SELECT division.* , company.Name as divisionCompanyName from division 
join company on company.Id = division.CID Order by division.Name;

end if;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getAllGRList` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getAllGRList`(
in lastID double,
INOUT GRID double,
 IN listlimit  int,
 IN companyID double,
 IN supplierID double,
 IN TransporterID double,
 IN fromDate varchar(40),
 IN LRDate varchar(40),
 IN DueDate varchar(40),
 In FlgLedger int,
 IN item int(11),
 IN fromAmt double,
 IN toAmt double,
 IN verifiedByID double,
 IN createdByFilterId double,
 IN  uid  int,
 IN  token  varchar(30),
 IN ViewpermissionID int,
 OUT status  int
)
BEGIN

call purpleaid.sp_authorization(uid,  token, viewPermissionID , @auth_status);

    set status= @auth_status;

    if @auth_status = 2 then 
    
  set @strQuery = 'Select ';

   set @strQuery = concat(@strQuery, '  good.*,good.id as "goodreceivedId", ifnull(p.Name, "") as "productName", ifnull(p.Pack,0) as"productPack" ,ifnull(p.MRP,0) as "productMRP", ifnull(c.Name,"") as "companyName", p.ID as "productID",  ifnull(s.Name,"") as "supplierName", transporter.id as "transporterID", ifnull(transporter.name," ") as "TransporterName", date_format( good.verifiedOn ,"%d/%m/%Y %h:%i:%s") as "grverifiedOn", ifnull(good.verifiedByID,0) as grverifiedByID, date_format(good.goodsReceiptDate , "%d/%m/%Y") as "grDate", date_format(good.billDate , "%d/%m/%Y")as "grbillDate", date_format(good.LRDate , "%d/%m/%Y")  as "grLRDate", date_format(good.LRDueDate , "%d/%m/%Y")  as "grLRDueDate", pb.ID as "productBatchId",  ifnull(pb.batchNo, " ") as "productBatchNo", pb.grID as "productBatchGrId", date_format( pb.expiryDate , "%d/%m/%Y")  as "productBatchExpiryDate", ifnull(pb.MRP,0) as "productBathMRP", ifnull(pb.trade,0) as "productBatchTrade", ifnull(pb.purchaseRate,0) as "productBatchPurchaseRate",  ifnull(pb.tradeDiscount,0) as "productBatchTradeDiscount", ifnull(pb.tradeDiscountAmt,0) as "productBatchTradeDiscountAmount", ifnull(pb.sellRate,0) as "productBatchSellRate", date_format(  pb.purchaseDate , "%d/%m/%Y")   as "productBatchPurchaseDate", pb.flgActive as "productBatchActiveFlag", pb.flgLock as "productBatchLockFlag", ifnull(pb.Remark," ") as "productBatchRemark", ifnull(pb.specialDiscount,0) as "productBatchSpecialDiscount", ifnull(pb.specialDiscountAmt,0) as "productBatchSpecialDiscountAmt", ifnull( view_product_contents.contentName , " ")as "contentName", ifnull( pt.Description, " ") as "productType", si.recid as "recid", ifnull(si.quantity,0) as "QuantityProduct", ifnull( si.free,0) as "FreeProduct", ifnull(si.difference,0) as "Difference", si.storage as "storageId", si.receipttype as "receipttypeId",  si.ID as "SIID", si.deleted as "deleted" , concat( ifnull(contact.FirstName , " " ) , "  " , ifnull(contact.LastName , " ") ) as "VerifiedByUserName", concat( ifnull(contact.FirstName , " " ) , "  " , ifnull(contact.LastName , " ") ) as "CreatedByUserName", ifnull(tc.centralSalesTax,0) as "CST", ifnull(tc.localTax,0) as "LT" , ifnull( tc.vatTax,0) as "VAT" , ifnull(tc.PurchaseVATChargeOn,0) as "vatChargeOn" , purchaseorder.id as "PONumber" from goodsreceived good left join purchaseorder on purchaseorder.goodsReceived = good.id left join (select * from stockinward where stockinward.deleted = 0 ) si on si.grID = good.ID  left join (select * from productbatch where productbatch.deleted = 0 )  pb on pb.ID = si.PBID left join transporter on transporter.ID = good.transporter left join product p on p.ID = si.PID left join taxtable tc on tc.ID = p.taxCodeID left join company c on c.ID = good.CID  left join view_product_contents on view_product_contents.PID = p.ID left join producttype pt on p.Type = pt.ID  left join supplier s on s.ID = good.SID left join contact on contact.id = good.verifiedByID and good.CreatedBy   where  good.ID >= ' , cast(lastID as char)); 
  
  if fromDate > 0  then
  
   set @strQuery = concat(@strQuery , ' and good.goodsReceiptDate >= str_to_date("', fromDate , '" ,"%d/%m/%Y") ');
  
  end if;
        
        if fromAmt > 0 then 
  
   set @strQuery = concat(@strQuery , ' and good.billAmt =' , cast(fromAmt as char));
   
  end if;
  
  if toAmt > 0 then 
  
   set @strQuery = concat(@strQuery , 'and good.billAmt = ' , cast(toAmt as char));
   
  end if;

  if LRDate > 0  then
  
   set @strQuery = concat(@strQuery , ' and good.LRDate = str_to_date("', LRDate , '" ,"%d/%m/%Y") ');
  
  end if;

  if DueDate > 0  then
  
	set @strQuery = concat(@strQuery , ' and LRDueDate = str_to_date("', LRDate , '" ,"%d/%m/%Y") ');
  
  END IF;
  
  if companyID > 0 then
  
   set @strQuery = concat(@strQuery , ' and good.CID = ', cast(companyID as char));
   
  end if;  
  
   if supplierID > 0 then
  
   set @strQuery = concat(@strQuery , ' and good.SID = ' , cast(supplierID as char));
   
  end if;  
  
  if TransporterID > 0 then
  
   set @strQuery = concat(@strQuery , ' and good.transporter = ' , cast(TransporterID as char));
   
  end if;  
  
  if GRID > 0 then 
  
 set @strQuery = concat(@strQuery , ' and good.id = ' , cast(GRID as char));
    
 end if;
  
  if FlgLedger > 0 then
  
   set @strQuery = concat(@strQuery , ' and good.flgUpdateToAC = ' , cast(FlgLedger as char));
  
  end if;
  
  IF createdByFilterId > 0  then 
   
     SET @strQuery = concat(@strQuery, ' and good.CreatedBy = ' , cast(createdByFilterId as char)) ;
     
  end if;
   
   IF verifiedByID > 0  then 
   
     SET @strQuery = concat(@strQuery, ' and good.verifiedByID = ' , cast(verifiedByID as char)) ;
     
  end if;
  
  if item > 0 then
    
    set @strQuery = concat(@strQuery, ' and purchaseproducts.Quantity ' , cast(item as char));
    
   end if;
  
   set @strQuery = concat(@strQuery, ' order by good.id asc , good.goodsReceiptDate desc' , ' limit ',  cast(listLimit as char));


   PREPARE stmt FROM @strQuery ;
   Execute stmt ;
   deallocate prepare stmt;
   select @strQuery ;
  
  end if;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getAllProdctList` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getAllProdctList`(

IN uid  int,
IN token varchar(30),
IN viewPermissionID int,
OUT status int
)
BEGIN

-- --------------------------------------------------------------------------------------------------- --
-- --------------------------------------------------------------------------------------------------- --

-- Name : getAllProdctList
-- Author : Nikita Pise
-- Date : 02 July 2015
-- Description : To retrieve all related records of Product for Return Register( product )
-- 	 			

-- ------------------------------------------CHANGE LOG ---------------------------------------------- --

-- VersionNo.        Date                 Change                                           Author
--        
--                                     
--                                      

-- --------------------------------------------------------------------------------------------------- --
-- --------------------------------------------------------------------------------------------------- --
call purpleaid.sp_authorization(uid,  token, viewPermissionID , @auth_status);

    set status= @auth_status;

	if @auth_status = 2 then 
select product.ID , product.Name ,pack ,company.ID as cID ,company.Name as companyName from product
 left join company on company.ID = product.CID order by product.Name;
 end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getAllReasons` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getAllReasons`(
 IN  uid  int,
 IN  token  varchar(30),
 IN ViewpermissionID int,
 OUT status  int
)
BEGIN

call purpleaid.sp_authorization(uid,  token, ViewpermissionID , @auth_status);

 set status= @auth_status;

 if @auth_status = 2 then

	SELECT * FROM reason
	order by Reason , flgSystemValue asc;
    
end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getAllRegion` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getAllRegion`(
 IN uid int,
 IN token varchar(30),
 IN viewPermissionID int,
 OUT status int

)
BEGIN
call purpleaid.sp_authorization(uid,  token, viewPermissionID , @auth_status);

set status= @auth_status;

if @auth_status = 2 then 
select * from region;
end if;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getAllReportBycategory` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getAllReportBycategory`(in categoryID double,

IN uid  int,
IN token varchar(30),
IN viewPermissionID int,
OUT status int
)
BEGIN
call purpleaid.sp_authorization(uid,  token, viewPermissionID , @auth_status);

    set status= @auth_status;

	if @auth_status = 2 then 

select  reportcategory.id,reportcategory.categoryname ,reportcategory.position,
reportmaster.id as 'sub report id' ,reportmaster.name,reportmaster.description ,reportlist.rccid , 
reportmaster.name as 'sub category'-- (if reportmaster.rccid is not null)
  from reportlist
right outer join reportmaster on reportmaster.id = reportlist.rmid or reportmaster.rccid = reportlist.rccid
left outer join  reportcategory on reportcategory.ID = reportmaster.rcid -- 
where reportmaster.flgActive =1 and reportcategory.flgActive = 1
and reportcategory.id = categoryID;
 
 end if;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getAllRolePermissionList` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getAllRolePermissionList`(

IN uid  int,
IN token varchar(30),
IN viewPermissionID int,
OUT status int
)
BEGIN
call purpleaid.sp_authorization(uid,  token, viewPermissionID , @auth_status);

    set status= @auth_status;

	if @auth_status = 2 then 
    
		select securityrolemaster.*,
		rolepermission.permissionID as rpid, permission.ID as permissionID ,
		permission.Description as permission , 
		permission.permissionGroupID  as groupID , permission.Type as permissionType,
		if( rolepermission.permissionID is null , 0 ,1) as permissionFlag
		from securityrolemaster
		left join rolepermission on rolepermission.roleID = securityrolemaster.ID
		left join permission on permission.ID = rolepermission.permissionID
		left join permissiongroup on permissiongroup.ID = permission.permissionGroupID
		where securityrolemaster.flgActive = 1 
		order by securityrolemaster.ID asc , permissiongroup.Description asc ,permission.ID asc ;


   end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getAllRouteList` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getAllRouteList`(

 IN uid int,
 IN token varchar(30),
 IN viewPermissionID int,
 OUT status int
)
BEGIN
call purpleaid.sp_authorization(uid,  token, viewPermissionID , @auth_status);

set status= @auth_status;

if @auth_status = 2 then


select rou.*, ra.aID as areaID ,a.code as areaCode, a.description as Areadescription , a.regionID as regionID , r.description as rDescription,r.ID as rID ,r.code as regionCode from route as rou left join routearea ra on rou.ID = ra.rID left join area a on ra.aID = a.ID left join region r on a.regionID= r.ID order by rou.ID;
end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getAllSupplierList` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getAllSupplierList`(
 IN uid int,
 IN token varchar(30),
 IN viewPermissionID int,
 OUT status int 

)
BEGIN
call purpleaid.sp_authorization(uid,  token, viewPermissionID , @auth_status);

set status= @auth_status;

if @auth_status = 2 then

select s.ID as supplierId,IFNULL(s.Other, '' ) as supplierOtherInfo,s.CID as supplierCompanyId,
s.Name as supplierName,IFNULL(s.accCode, '' ) as supplierAccCode,IFNULL(s.accName, '' ) as supplierAccName,
IFNULL(s.Remark, '' ) as supplierRemark,IFNULL(s.TaxID, '' ) as supplierTaxId,
IFNULL(s.LedgerType, '' ) as supplierLedgerType,IFNULL(s.accGroup, '' ) as supplierAccGroup,
IFNULL(s.OpeningBalance, '' ) as supplierOpeningBalance,
IFNULL(s.OpeningBalanceTYpe, '' ) as supplierOpeningBalanceType,
IFNULL(s.CreditPeriod, '' ) as supplierCreditPeriod,IFNULL(s.AddrLine1, '' ) as supplierAddrLine1,
IFNULL(s.AddrLine2, '' ) as supplierAddrLine2,IFNULL(s.ContactPerson, '' ) as supplierContactPerson,
IFNULL(s.Phone, '' ) as supplierPhone,IFNULL(s.Fax, '' ) as supplierFax,
IFNULL(s.Email, '' ) as supplierEmail,s.DeliveryTime as supplierDeliveryTime,
IFNULL(s.flgActive, '' ) as supplierActiveFlag,IFNULL(s.flgOutState, '' ) as supplierOutStateFlag,
IFNULL(s.flgEmail, '' ) as supplierEmailFlag,s.flgDefault as supplierDefaultFlag, c.id as cityId,
c.Name cityName,c.flgActive as cityActiveFlag,s.ID stateId,s.Name stateName,
s.flgActive as stateActiveFlag,company.Name as supplierCompanyName from supplier s 
join city c on s.City=c.id 
join state st on c.State=st.ID join company on s.CID=company.ID ORDER BY s.Name ASC;


end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getAllsystemVariableList` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getAllsystemVariableList`(

IN uid  int,
IN token varchar(30),
IN viewPermissionID int,
OUT status int
)
BEGIN


call purpleaid.sp_authorization(uid,  token, viewPermissionID , @auth_status);

    set status= @auth_status;

	if @auth_status = 2 then 

 select purpleaidsettings.ID,
 purpleaidsettings.Name ,
 purpleaidsettings.CategoryGroupID,
 
 purpleaidsettings.CategoryGroup ,
 ifnull(purpleaidsettings.Description,'') as Description,
 ifnull(purpleaidsettings.Value,'') as Value,
 ifnull(purpleaidsettings.Unit,'') as Unit ,
 purpleaidsettings.DefaultValue,
 purpleaidsettings.ValidationType,
 ifnull(purpleaidsettings.MinimumValue,'') as MinimumValue,
 ifnull(purpleaidsettings.MaximumValue,'') as MaximumValue,
 ifnull(purpleaidsettings.ValueSet,'') as ValueSet,
 purpleaidsettings.DisplayOrder as DisplayOrder
 from purpleaidsettings  order by CategoryGroupID, DisplayOrder asc;
 
 
 end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getAllTaxCode` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getAllTaxCode`(

 IN uid int,
 IN token varchar(30),
 IN viewPermissionID int,
 OUT status int 

)
BEGIN
call purpleaid.sp_authorization(uid,  token, viewPermissionID , @auth_status);

set status= @auth_status;

if @auth_status = 2 then

SELECT t.*, saleAc.description as saleAcDesc, AcID.ID as accID, AcCode.acCode as accCode, 
salevat.description as saleVatAcDesc, saleRetVat.description as saleReturnAccDesc,
 purchaseAc.description as PurchaseAcDesc, purchasevat.description as PurchaseVatAcDesc,
 purchaseRetVat.description as PurchaseReturnAccDesc FROM purpleaid.taxtable t 
 join account saleAc on t.SaleACid=saleAc.ID 
 join account AcID on t.SaleACid = AcID.ID 
 join account AcCode on t.SaleACid = AcCode.ID 
 join account salevat on t.SaleVATACid=salevat.ID 
 join account saleRetVat on t.SaleReturnVATACid=saleRetVat.ID 
 join account purchaseAc on t.PurchaseACid=purchaseAc.ID 
 join account purchasevat on t.PurchaseVATACid = purchasevat.ID 
 join account purchaseRetVat on t.PurchaseReturnVATACid = purchaseRetVat.ID;

end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getAllVoucherTypes` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getAllVoucherTypes`(
IN  uid  int,
 IN  token  varchar(30),
 IN ViewpermissionID int,
 OUT status  int

)
BEGIN

call purpleaid.sp_authorization(uid,  token, ViewpermissionID , @auth_status);

 set status= @auth_status;

 if @auth_status = 2 then

/*select voucher1.voucherTypeID as 'voucherid',
voucher1.VoucherType, narration.ID as 'narrationID', narration.Narration from narration
join voucher on narration.ID = voucher.NarrationID;*/
select * from voucher1 order by voucher1.VoucherType asc;

end if;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getBatchDetails` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getBatchDetails`(IN `productId` DOUBLE,
IN uid  int,
IN token varchar(30),
IN viewPermissionID int,
OUT status int


)
    DETERMINISTIC
BEGIN
  declare yvalue varchar(20);
call purpleaid.sp_authorization(uid,  token, viewPermissionID , @auth_status);

    set status= @auth_status;

	if @auth_status = 2 then 
    

  

    select value into yvalue from purpleaidsettings 

    where Name ='GR_BATCH_Window';


select productbatch.*, 
date_format(productbatch.expiryDate , '%d/%m/%Y') as expiryDate,

 ifnull(tc.centralSalesTax,0) as CST ,
 ifnull(tc.localTax,0) as LT, 
 ifnull(tc.vatTax,0) as VAT ,
 p.ID as productID, si.recid as recid,
 ifnull(view_batch_stock.QtyAvailableTotal,0) as QtyAvailableTotal,
 ifnull(view_batch_stock.FreeAvailableTotal,0)as FreeAvailableTotal
 from product p
 left join stockinward  si on si.PID = p.ID
 left join productbatch on si.PBID = productbatch.ID
 left join taxtable tc on tc.ID = p.taxCodeID
 left join view_batch_stock on (view_batch_stock.productID = p.ID and view_batch_stock.batchID = si.PBID)
 where PID = productId
 and 
(productbatch.flgActive = 1 and productbatch.purchaseDate >= date_sub(current_date(), interval yvalue year))
group by productbatch.ID ;

end if;
 

 END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getBatchScheme` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getBatchScheme`(
IN productBatchActiveId double,

IN uid  int,
IN token varchar(30),
IN viewPermissionID int,
OUT status int
)
BEGIN
call purpleaid.sp_authorization(uid,  token, viewPermissionID , @auth_status);

    set status= @auth_status;

	if @auth_status = 2 then 
    
 select b.ID as BID, b.PBAID as bPBAID, 
 
 date_format(b.startDate,'%d/%m/%Y') as startDate, 
 date_format(b.endDate ,'%d/%m/%Y') as endDate,
 b.minStock as minStock , b.remark as remark ,  b.flgSchemeLock as flgSchemeLock,
 -- pba.schemeLock as flgSchemeLock,
 bd.ID as bsdID, bd.BSID as bsdBSID  , bd.quantity as bsdQuantity , bd.free as bsdFree ,
 
 bd.schemeIndex as bsdIndex
from batchscheme as b 
join batchschemedetails bd on bd.BSID = b.ID 
join productbatchactive  pba on pba.ID = b.PBAID
where b.PBAID = productBatchActiveId order by bd.quantity ;
end if;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getBusinessDetails` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getBusinessDetails`(
IN uid double,
IN token varchar(30),
IN viewPermissionID int,
OUT status int 

)
BEGIN

call purpleaid.sp_authorization(uid,  token, viewPermissionID , @auth_status);

    set status= @auth_status;

    if @auth_status = 2 then 
    
		select business.ID ,
        
		ifnull(business.BusinessName ,' ') as BusinessName ,
        
		ifnull(business.BusinessDescription , ' ') as BusinessDescription ,
        
		ifnull(business.EdeCode , ' ') as EdeCode ,
        
		ifnull(business.Code , ' ') as Code ,
        
		ifnull(business.AddressLine1 , ' ') as AddressLine1 ,
        
		ifnull(business.AddressLine2 , ' ') as AddressLine2 , 
        
		ifnull(business.City , ' ') as City ,
        
		ifnull(business.State , ' ') as State ,
        
		ifnull(business.Pincode , ' ') as Pincode , 
        
		ifnull(business.ContactPerson , ' ') as BusinessContactPerson ,
        
		ifnull(business.Landline , ' ') as BusinessLandline , 
        
		ifnull(business.Mobile , ' ') as BusinessMobile ,
        
		ifnull(business.Fax , ' ') as BusinessFax , 
        
		ifnull(business.Email , ' ') as BusinessEmail , 
        
		ifnull(business.FlgHideOwner , ' ' ) as FlgHideOwner ,
        
		ifnull(business.FlgHideLicence , ' ' ) as FlgHideLicence ,
        
		 businesslicence.ID as BusinesslicenceID,
		 businesslicence.BusinessID,
		-- businesslicence.BLindex,
        
		  businesslicence.licenceType,
         
         businesslicence.licenceName ,
        
		 businesslicence.LicenceNumber,
        
         DATE_FORMAT(businesslicence.LicenceStartDate, '%d/%m/%Y') as BusinessLicenceStartDate ,
        
		 DATE_FORMAT(businesslicence.LicenceEndDate,'%d/%m/%Y') as BusinessLicenceEndDate ,
        
		-- businesslicence.flgActive,
        
        -- licence.licenceType ,
        
       --  licence.Name as LIcenceName , 
        
        ifnull( business.OwnerContactPerson ,' ') as OwnerContactperson,
        
        ifnull(business.OwnerLandline,' ') as OwnerLandlineNumber,
        
        ifnull(business.OwnerMobile,' ') as OwnermobileNumber,
        
        ifnull(business.OwnerFax, ' ') as OwnerFaxNumber,
        
        ifnull(business.OwnerEmail, ' ') as Owneremail
        
        from business  join businesslicence on business.id = businesslicence.BusinessID
         join businesslicencedetails on businesslicencedetails.licenceType =  businesslicence.licenceType;
        
		
    end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getBusinessLicenceList` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getBusinessLicenceList`(
-- inout BID double ,
IN uid double,
IN token varchar(30),
IN viewPermissionID int,
OUT status int 

)
BEGIN

call purpleaid.sp_authorization(uid,  token, viewPermissionID , @auth_status);

    set status= @auth_status;

    if @auth_status = 2 then 
    
  /*select businesslicence.ID as `LicenceID` ,
        
  -- businesslicence.BusinessID,
 
   businesslicence.licenceType,
         
         businesslicence.licenceName ,
        
  businesslicence.LicenceNumber,
        
        DATE_FORMAT(businesslicence.LicenceStartDate, '%d/%m/%Y') as `BusinessLicenceStartDate` ,
        
  DATE_FORMAT(businesslicence.LicenceEndDate,'%d/%m/%Y') as `BusinessLicenceEndDate` 
        
        from businesslicence join business 
        on businesslicence.BusinessID   = business.id 
        
        order by BusinessLicenceEndDate desc;*/
        
        select businesslicencedetails.licenceType as "licenceType",
        businesslicencedetails.name as "licenceName" from businesslicencedetails
        where businesslicencedetails.flgActive = 1 order by businesslicencedetails.licenceType;
 end if;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getCDProductList` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getCDProductList`(IN `companyId` DOUBLE,
IN uid  int,
IN token varchar(30),
IN viewPermissionID int,
OUT status int

)
    DETERMINISTIC
BEGIN

call purpleaid.sp_authorization(uid,  token, viewPermissionID , @auth_status);

    set status= @auth_status;

	if @auth_status = 2 then 

 select p.*,c.Name as companyName,d.Name as divisionName,pt.Description as TypeName, 
 productcontents.contentID,
 
  -- contenttypemaster.Type as contentType, commented and replaced by concatinated 
  -- by view content type name string
  
  view_product_contents_types.contenttypeMasterName  as contentTypes,
  -- contenttype.contentID as ccID,
 productcontents.productID as contentProductId,
  -- contenttype.ID as contetntTypeId, 
 content.Description as contentDesc ,content.Name as contentName,
 productcontents.contentStrength as contentStrength,
 productcontents.contUnit as contentUnit from product p 

 join company c on p.CID=c.ID 
 join division d on p.DID=d.ID
 left join producttype pt on p.Type = pt.ID 
 left outer join productcontents on p.ID = productcontents.productID
 left join content on productcontents.contentID = content.ID
-- left join contenttype on contenttype.contentID = content.ID 
 -- left join contenttypemaster on contenttypemaster.ID = contenttype.contentTypeID
 left join view_product_contents_types on view_product_contents_types.contentID = content.ID
 where p.CID=companyId And (content.flgActive = 1 or ifnull(content.flgActive,1)) 
 
 order by p.Name,contentName ;
 -- ,contentType ; 
end if;


END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getCompanyByDivisionProduct` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getCompanyByDivisionProduct`(
IN uid  int,
IN token varchar(30),
IN viewPermissionID int,
OUT status int

)
BEGIN

call purpleaid.sp_authorization(uid,  token, viewPermissionID , @auth_status);

    set status= @auth_status;

	if @auth_status = 2 then 

select c.ID as cID , d.ID as dID , c.Name as cName, d.Name as dName  from company c
left join division d on c.ID = d.CID 

where c.flgActive = 1 and d.flgActive = 1
order by c.ID, d.ID 

;

end if;


END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getCompanyClaimList` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getCompanyClaimList`(
IN CID double,
IN listlimit  int,
IN fromDate varchar(40),
IN toDate varchar(40)  ,
IN status1 double,
IN fromAmt double,
IN toAmt double,
IN createdByFilterId double,
IN uid  int,
IN token varchar(30),
IN viewPermissionID int,
OUT status int
)
BEGIN
call purpleaid.sp_authorization(uid,  token, viewPermissionID , @auth_status);

    set status= @auth_status;

	if @auth_status = 2 then 
    
set @strQuery = 'Select ';

set @strQuery = concat(@strQuery, ' cclist.ID ,ifnull(cclist.ID, "-1") as tempID, ifnull(date_format(cclist.Date,"%d/%m/%Y"),"NA") as ccDate,if(returnregister.custID > 0 , customer.Name ,"SELF") as source, cclist.companyID, cclist.supplierID, ifnull(cclist.Date , "NA") as Date, cclist.Type, cclist.Status, cclist.RateOfCalculation, cclist.CalculateVAT, cclist.Remark, cclist.TotalItem, cclist.GrossTotal, cclist.VAT, cclist.NetAmount, cclist.createdBy,concat( ifnull(c1.FirstName , " " ) , " " , ifnull(c1.LastName , " ") ) as CreatedByUserName, c1.ID as createdByID, returnregisterdetails.ID as returnregisterdetailsID , returnregisterdetails.RRID as returnregisterdetailsRRID,returnregisterdetails.SAID as returnregisterdetailsSAID , returnregisterdetails.productID as returnregisterdetailsPID ,returnregisterdetails.CCID as returnregisterdetailsCCID,returnregisterdetails.Amount as returnregisterdetailsAmount , returnregisterdetails.conditions as returnregisterdetailsCondition , returnregisterdetails.Remark as returnregisterdetailsRemark,returnregisterdetails.batchNo as returnregisterdetailsBatchNo , returnregisterdetails.MRP as returnregisterdetailsMRP , returnregisterdetails.purchaseRate as returnregisterdetailsPurchaseRate, returnregisterdetails.deleted as deleted,returnregisterdetails.sellRate as returnregisterdetailsSellRate , returnregisterdetails.Qty as returnregisterdetailsQty , returnregisterdetails.Rate as Rate , date_format(returnregisterdetails.expiryDate , "%d/%m/%Y" )as returnregisterdetailsExpiryDate,product.Name as productName ,product.pack as productPack,taxtable.vatTax as returnRegisterProductVAT  from (select companyclaim.*  from companyclaim where companyclaim.companyID = ' , cast(CID as char));


	IF (length(fromDate) > 0) then 
 
         SET @strQuery = concat(@strQuery, ' and  companyclaim.Date >=  str_to_date("', fromDate , '" ,"%d/%m/%Y") ') ;
         
    end if; 
    
    IF (length(toDate) > 0) then 
 
         SET @strQuery = concat(@strQuery, ' and  companyclaim.Date <=  str_to_date("', toDate , '" ,"%d/%m/%Y") ') ;
         
    end if; 
    
         
      IF status1 > 0 then 
 
         SET @strQuery = concat(@strQuery, ' and companyclaim.status = ' , cast(status1 as char)) ;
         
     end if; 
           IF fromAmt > 0  then 
 
         SET @strQuery = concat(@strQuery, ' and companyclaim.NetAmount >= ' , cast(fromAmt as char)) ;
         
     end if; 
     
     
      IF toAmt > 0  then 
 
         SET @strQuery = concat(@strQuery, ' and companyclaim.NetAmount <= ' , cast(toAmt as char)) ;
         
     end if;
     
     IF createdByFilterId > 0  then 
 
         SET @strQuery = concat(@strQuery, ' and companyclaim.CreatedBy = ' , cast(createdByFilterId as char)) ;
         
     end if;
    
    
     SET @strQuery = concat(@strQuery, ' ) cclist right join returnregisterdetails on returnregisterdetails.CCID = cclist.ID left join contact c1 on c1.ID = cclist.createdBy left join product on product.ID = returnregisterdetails.productID left join taxtable on taxtable.ID = product.taxCodeID  left join returnregister on returnregister.ID = returnregisterdetails.RRID  left join customer on returnregister.custID = customer.ID where  product.CID  = ', cast(CID as char)  ,' and returnregister.flgVoid = 0 order by cclist.ID desc   limit ', cast(listLimit as char)) ;

	PREPARE stmt FROM @strQuery ;
   Execute stmt ;
   deallocate prepare stmt;

  select @strQuery ;
	end if;



END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getCompanyClaimListNew` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getCompanyClaimListNew`(
IN CID double,
IN listlimit  int,
IN fromDate varchar(40),
IN toDate varchar(40)  ,
IN status1 double,
IN fromAmt double,
IN toAmt double,
IN createdByFilterId double,
IN lastId double,
IN uid  int,
IN token varchar(30),
IN viewPermissionID int,
OUT status int

)
BEGIN

call purpleaid.sp_authorization(uid,  token, viewPermissionID , @auth_status);

    set status= @auth_status;

	if @auth_status = 2 then 

if( lastId = 0 ) then

set @strQuery = 'Select ';

set @strQuery = concat(@strQuery, 'cclaims.*,returnregisterdetails.* from ( select companyclaim.ID as ccID, taxtable.vatTax as returnRegisterProductVAT, product.Name as productName ,product.pack as productPack,if(returnregister.custID > 0 , customer.Name ,"SELF") as source , concat( ifnull(c1.FirstName , " " ) , " " , ifnull(c1.LastName , " ") ) as CreatedByUserName, companyclaim.companyID as companyclaimCID, companyclaim.ID as companyclaimID , companyclaim.supplierID as companyclaimsupplierID, ifnull(date_format(companyclaim.Date,"%d/%m/%Y"),"NA") as ccDate, companyclaim.Type as companyclaimType, companyclaim.Status as companyclaimStatus,  companyclaim.RateOfCalculation as companyclaimRateOfCalculation,  companyclaim.CalculateVAT as companyclaimCalculateVAT, companyclaim.Remark as companyclaimRemark,  companyclaim.TotalItem as companyclaimTotalItem, companyclaim.GrossTotal as companyclaimGrossTotal,  companyclaim.VAT as companyclaimVAT, companyclaim.NetAmount as companyclaimNetAmount, companyclaim.CreatedByID as companyclaimCreatedByID, companyclaim.CreatedBy as companyclaimCreatedBy,  companyclaim.CreatedOn as companyclaimCreatedOn, companyclaim.ModifiedBy as companyclaimModifiedBy,  companyclaim.ModifiedOn as companyclaimModifiedOn from companyclaim   left join contact c1 on c1.ID = companyclaim.createdBy  left join returnregisterdetails on returnregisterdetails.CCID = companyclaim.ID  left join returnregister on returnregister.ID =  returnregisterdetails.RRID  left join customer on returnregister.custID = customer.ID  left join product on product.ID = returnregisterdetails.productID  left join taxtable on taxtable.ID = product.taxCodeID  where companyclaim.companyID = ', cast(CID as char) , ' and companyclaim.ID > ', cast(lastId as char));


	IF (length(fromDate) > 0) then 
 
         SET @strQuery = concat(@strQuery, ' and  companyclaim.Date >=  str_to_date("', fromDate , '" ,"%d/%m/%Y") ') ;
         
    end if; 
    
    IF (length(toDate) > 0) then 
 
         SET @strQuery = concat(@strQuery, ' and  companyclaim.Date <=  str_to_date("', toDate , '" ,"%d/%m/%Y") ') ;
         
    end if; 
    
         
      IF status1 > 0 then 
 
         SET @strQuery = concat(@strQuery, ' and companyclaim.status = ' , cast(status1 as char)) ;
         
     end if; 
           IF fromAmt > 0  then 
 
         SET @strQuery = concat(@strQuery, ' and companyclaim.NetAmount >= ' , cast(fromAmt as char)) ;
         
     end if; 
     
     
      IF toAmt > 0  then 
 
         SET @strQuery = concat(@strQuery, ' and companyclaim.NetAmount <= ' , cast(toAmt as char)) ;
         
     end if;
     
     
     IF createdByFilterId > 0  then 
 
         SET @strQuery = concat(@strQuery, ' and companyclaim.CreatedBy = ' , cast(createdByFilterId as char)) ;
         
     end if;
    
    
     SET @strQuery = concat(@strQuery, ' limit ', cast(listlimit as char) ,') cclaims left join returnregisterdetails on returnregisterdetails.CCID = companyclaimID  union select  -1 as ccID,  NULL as returnRegisterProductVAT,   product.Name as productName, product.pack as productPack, if(returnregister.custID > 0 , customer.Name ,"SELF") as source , NULL as CreatedByUserName , NULL as companyclaimCID , NULL as companyclaimID , NULL as companyclaimsupplierID, NULL as companyclaimDate, NULL as companyclaimType, NULL as companyclaimStatus,  Null as companyclaimRateOfCalculation,  NULL as companyclaimCalculateVAT, "" as companyclaimRemark,  NULL as companyclaimTotalItem, NULL as companyclaimGrossTotal,  Null as companyclaimVAT, NULL as companyclaimNetAmount, NULL as companyclaimCreatedByID, NULL as companyclaimCreatedBy, NULL as companyclaimCreatedOn, NULL as companyclaimModifiedBy,  NULL as companyclaimModifiedOn,    returnregisterdetails.* from returnregisterdetails  left join product on  product.ID = returnregisterdetails.productID  left join returnregister on returnregister.ID =  returnregisterdetails.RRID  left join customer on returnregister.custID = customer.ID   where product.CID = ', cast(CID as char) ,' and returnregisterdetails.CCID = 0 order by companyclaimID desc , ID ') ;
 

end if;


if (lastId > 0) then 



set @strQuery = 'Select ';

set @strQuery = concat(@strQuery, 'cclaims.*,returnregisterdetails.* from ( select  companyclaim.ID as ccID , taxtable.vatTax as returnRegisterProductVAT, product.Name as productName ,product.pack as productPack,if(returnregister.custID > 0 , customer.Name ,"SELF") as source , concat( ifnull(c1.FirstName , " " ) , " " , ifnull(c1.LastName , " ") ) as CreatedByUserName, companyclaim.companyID as companyclaimCID, companyclaim.ID as companyclaimID , companyclaim.supplierID as companyclaimsupplierID, ifnull(date_format(companyclaim.Date,"%d/%m/%Y"),"NA") as ccDate, companyclaim.Type as companyclaimType, companyclaim.Status as companyclaimStatus,  companyclaim.RateOfCalculation as companyclaimRateOfCalculation,  companyclaim.CalculateVAT as companyclaimCalculateVAT, companyclaim.Remark as companyclaimRemark,  companyclaim.TotalItem as companyclaimTotalItem, companyclaim.GrossTotal as companyclaimGrossTotal,  companyclaim.VAT as companyclaimVAT, companyclaim.NetAmount as companyclaimNetAmount, companyclaim.CreatedByID as companyclaimCreatedByID, companyclaim.CreatedBy as companyclaimCreatedBy,  companyclaim.CreatedOn as companyclaimCreatedOn, companyclaim.ModifiedBy as companyclaimModifiedBy,  companyclaim.ModifiedOn as companyclaimModifiedOn from companyclaim   left join contact c1 on c1.ID = companyclaim.createdBy  left join returnregisterdetails on returnregisterdetails.CCID = companyclaim.ID  left join returnregister on returnregister.ID =  returnregisterdetails.RRID  left join customer on returnregister.custID = customer.ID  left join product on product.ID = returnregisterdetails.productID  left join taxtable on taxtable.ID = product.taxCodeID  where companyclaim.companyID = ', cast(CID as char) , ' and companyclaim.ID > ', cast(lastId as char));

	IF (length(fromDate) > 0) then 
 
         SET @strQuery = concat(@strQuery, ' and  companyclaim.Date >=  str_to_date("', fromDate , '" ,"%d/%m/%Y") ') ;
         
    end if; 
    
    IF (length(toDate) > 0) then 
 
         SET @strQuery = concat(@strQuery, ' and  companyclaim.Date <=  str_to_date("', toDate , '" ,"%d/%m/%Y") ') ;
         
    end if; 
    
         
      IF status1 > 0 then 
 
         SET @strQuery = concat(@strQuery, ' and companyclaim.status = ' , cast(status1 as char)) ;
         
     end if; 
           IF fromAmt > 0  then 
 
         SET @strQuery = concat(@strQuery, ' and companyclaim.NetAmount >= ' , cast(fromAmt as char)) ;
         
     end if; 
     
     
      IF toAmt > 0  then 
 
         SET @strQuery = concat(@strQuery, ' and companyclaim.NetAmount <= ' , cast(toAmt as char)) ;
         
     end if;
     
     IF createdByFilterId > 0  then 
 
         SET @strQuery = concat(@strQuery, ' and companyclaim.CreatedBy = ' , cast(createdByFilterId as char)) ;
         
     end if;
    
    
     SET @strQuery = concat(@strQuery, ' limit ', cast(listlimit as char) ,') cclaims ');
     
  end if;


 PREPARE stmt FROM @strQuery ;
    Execute stmt ;
    deallocate prepare stmt;

   select @strQuery ;



end if;




END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getCompanyDivision` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getCompanyDivision`(
IN uid  int,
IN token varchar(30),
IN viewPermissionID int,
OUT status int

)
BEGIN

call purpleaid.sp_authorization(uid,  token, viewPermissionID , @auth_status);

    set status= @auth_status;

	if @auth_status = 2 then 

select c.ID as cID , d.ID as dID , c.Name as cName, d.Name as dName 
from company c
left join division d on c.ID = d.CID 
where c.flgActive = 1 and d.flgActive = 1
order by c.ID, d.ID ;
end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getCompanyList` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getCompanyList`(
 IN uid int,
 IN token varchar(30),
 IN viewPermissionID int,
 OUT status int 

)
BEGIN


-- --------------------------------------------------------------------------------------------------- --
-- --------------------------------------------------------------------------------------------------- --

-- Name : getCompanyList
-- Author : Nikita Pise
-- Date : 
-- Description : To retrieve all companies
-- ------------------------------------------CHANGE LOG ---------------------------------------------- --

-- VersionNo.        Date                 Change                                           Author
-- 1.0           12 June 2015            converted inline retrieve to SP                 Nikita Pise 
--                                          
--                                       

-- --------------------------------------------------------------------------------------------------- --
-- --------------------------------------------------------------------------------------------------- --



call purpleaid.sp_authorization(uid,  token, viewPermissionID , @auth_status);

set status= @auth_status;

if @auth_status = 2 then 

 select com.*, c.id as cityId,c.Name cityName,
 c.flgActive as cityActiveFlag,s.ID stateId,
 s.Name stateName,s.flgActive as stateActiveFlag
 from company com 
 left join city c on com.City=c.id
 left join state s on c.State=s.ID
 where com.flgActive=1
 ORDER BY com.Name ASC;
 
 end if;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getConsumptionDetails` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getConsumptionDetails`(

IN creditNoteId double,
IN uid  int,
IN token varchar(30),
IN viewPermissionID int,
OUT status int


)
BEGIN

call purpleaid.sp_authorization(uid,  token, viewPermissionID , @auth_status);

    set status= @auth_status;

 if @auth_status = 2 then 
 
select concat(contact.FirstName  ,' ',contact.LastName) as SaleUser , date_format(consumptiondetails.SalesDate  , "%d/%m/%Y" ) as sDate, consumptiondetails.* ,
sales.productCount from consumptiondetails 

left join sales on sales.Id = consumptiondetails.SalesID
left join contact on contact.Id = consumptiondetails.createdBy where CNID = creditNoteId order by sales.Date desc;
 
 end if;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getContact` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getContact`(
 
 IN contTypeID double,
 IN uid double,
 IN filterType double,
 IN lastID double,
 IN listLimit double,
 IN userName varchar(30),
 IN userLock INT(11),
 IN contHQ varchar(40),
 IN contArea double,
 IN contRoute double,
 IN contlabel varchar(40),
 IN contPhone varchar(40),
 IN contEmail varchar(60),
 IN contURL varchar(60),
 IN contactMyFavoritesFlag INT(11),
 IN contCity varchar(40),
 IN contDate varchar(40) ,
 IN contactName varchar(50),
 IN flgMyContact INT(11),
 IN contactSystemUser INT(11),
 IN DetailsFilterCount INT(11),
 IN token varchar(30),
 IN viewPermissionID int,
 OUT status int


)
BEGIN

declare orCondition int(20);

call purpleaid.sp_authorization(uid,  token, viewPermissionID , @auth_status);

set status= @auth_status;

if @auth_status = 2 then 
 -- set DetailsFilterCount = 2; -- temp
  set @strContactQuery = 'Select ';

  set @strContactQuery = concat(@strContactQuery, ' contactlist.*,contactdetails.deleted as deleted, contactdetails.CNID as contactDetailsCNID, contactdetails.ID as contactDetailsId, contactdetails.EDID as contactDetailsEDID, contactdetails.otherID as contactDetailsOtherID, contactdetails.detail1 as contactDetailsDetails1, contactdetails.detail2 as contactDetailsDetails2, contactdetails.detail3 as contactDetailsDetails3, contactdetails.detail4 as contactDetailsDetails4,contactdetails.detail5 as contactDetailsDetails5, contactdetails.detail6 as contactDetailsDetails6,entitydetails.ID as entityDetailsID , entitydetails.TypeID as entityDetailsTypeID,  entitydetails.Description as entityDetailsDescription  from ( select concat(ifnull(contact.FirstName," "), " ", ifnull(contact.LastName, " "), contact.id) as PersonNameID, contact.*,if (favouritecontacts.userID is null, 0,1)  as flgMyFavoriteNew , if (contact.myContactID =  ', cast(uid as char) ,', 1, 0 ) as  flgMyContactNew FROM purpleaid.contact  left join favouritecontacts on favouritecontacts.contactID = contact.ID  where contact.deleted = 0 and concat(ifnull(contact.FirstName," "), " ", ifnull(contact.LastName, " "), contact.id) >  ifnull((select concat(ifnull(contact.FirstName," "), " ", ifnull(contact.LastName, " "), contact.id) from contact where id =',  cast(lastID as char) , ' ), " ")'  );


	if (contTypeID = -200) then -- favourites
      set @strContactQuery = concat(@strContactQuery, ' and  favouritecontacts.userID = ', cast(uid as char));
	end if;
   
	if (contTypeID = -100) then -- my contact
      set @strContactQuery = concat(@strContactQuery, ' and  contact.myContactID = ', cast(uid as char));
 	end if;
  
	if (contTypeID = -300) then -- system user
		set @strContactQuery = concat(@strContactQuery, ' and contact.userName is not null ');
 	end if;

	if contTypeID > 0 then -- system user
		set @strContactQuery = concat(@strContactQuery, ' and contact.contactTypeID = ' , cast(contTypeID as char));
 	end if;


	
    

  IF filterType = 1 or filterType = 3 then 



		 IF (length(userName) > 0) then 
		 
		 
				 SET @strContactQuery = concat(@strContactQuery, ' AND lower(contact.userName) like "', lower(userName), '%"') ;
				 
			end if; 
			
		   
			
			 IF userLock > 0  then 

				 SET @strContactQuery = concat(@strContactQuery , ' AND contact.userLock = ' , cast(userLock as char)) ;
				 
			 end if; 
		 
			
			 
		   IF @showcontTypeID > 0 then 

				 SET @strContactQuery = concat(@strContactQuery , ' AND contact.contactTypeID = ' , cast(@showcontTypeID as char));
				 
			end if; 
			
			IF flgMyContact > 0 then 

				 SET @strContactQuery = concat(@strContactQuery ,' and  contact.myContactID = ', cast(uid as char));
				 
			end if; 
			   
		 
				  
			IF contactSystemUser = 1  then 

				 SET @strContactQuery = concat(@strContactQuery ,' and contact.userName is not null');
				 
			end if; 
            
            IF contactMyFavoritesFlag = 1  then 

				 SET @strContactQuery = concat(@strContactQuery ,' and favouritecontacts.userID  = ' , cast(uid as char));
				 
			end if; 
            
		   
			
		  
		  IF contArea > 0 then 

				 SET @strContactQuery = concat(@strContactQuery , ' AND contact.Area =' , cast(contArea as char));
				 
			end if; 
			
			IF contRoute > 0 then 

				 SET @strContactQuery = concat(@strContactQuery , ' AND contact.Route = ' , cast(contRoute as char));
				 
			end if; 
			
		   
		   IF (length(contHQ) > 0) then 

				 SET @strContactQuery =concat( @strContactQuery , ' AND lower(contact.HQ) like "' , lower(contHQ) , '%"' );
				 
			end if;     

			IF (length(contlabel) > 0) then 

				 SET @strContactQuery =concat( @strContactQuery , ' AND lower(contact.label) like "%' , lower(contlabel) , '%"') ;
			 
			 end if;  
			 
			 IF (length(contactName) > 0 ) then 

				 SET @strContactQuery = concat(@strContactQuery , ' AND lower(concat(ifnull(contact.FirstName, " " ) , " " ,  ifnull(contact.MiddleName," ") , " " , ifnull(contact.LastName," ") ) ) like "%' ,  lower(contactName) , '%" ') ;  
				  end if; 
                  
		          
  end if;  
  
  
   IF filterType = 2 or filterType = 3 then 
  
  
    SET @strContactQuery =concat(@strContactQuery ,' and contact.ID in (Select CNID from  (Select CNID from contactdetails  left join entitydetails on entitydetails.ID = contactdetails.EDID   where contactdetails.deleted = 0  and (');

	set orCondition =  0 ;
		
        IF (length(contPhone) > 0) then 
            
				 SET @strContactQuery =concat(@strContactQuery , ' contactdetails.detail1 like "' , contPhone , '%" AND entitydetails.TypeID = 3 ') ;    
                 
                set orCondition = orCondition + 1;
		 end if;  
		   
			IF (length(contURL) > 0 ) then 

				if ( orCondition > 0) then
					SET @strContactQuery = concat(@strContactQuery , ' or ');
					
				end if;
				set orCondition = orCondition + 1;
				 SET @strContactQuery = concat(@strContactQuery , '  (lower(contactdetails.detail1)  like "%' , lower(contURL) , '%" AND entitydetails.TypeID = 6)') ;
		 end if;  
				 
		   IF (length(contCity) > 0 ) then 
				
              if ( orCondition > 0) then
					SET @strContactQuery = concat(@strContactQuery , ' or ');
					
				end if;
				set orCondition = orCondition + 1;
                
				 SET @strContactQuery = concat(@strContactQuery , '  (lower(contactdetails.detail3)  like "' , lower(contCity) , '%" AND entitydetails.TypeID = 2)') ;
		  end if;  
		   
		   IF (length(contDate) > 0 ) then 
				if ( orCondition > 0) then
					SET @strContactQuery = concat(@strContactQuery , ' or ');
					
				end if;

                set orCondition = orCondition + 1;
				 SET @strContactQuery = concat(@strContactQuery , '  ( str_to_date(contactdetails.detail1 , "%d/%m/%Y" ) like "' , str_to_date(contDate , "%d/%m/%Y") , '%" AND entitydetails.TypeID = 4)') ;
				  end if;  
		   
			  
		   IF (length(contEmail) > 0 ) then 
					if ( orCondition > 0) then
					SET @strContactQuery = concat(@strContactQuery , ' or ');
					
				end if;

                set orCondition = orCondition + 1;
				 SET @strContactQuery = concat(@strContactQuery , '  (lower(contactdetails.detail1) like "' ,  lower(contEmail) , '%" AND entitydetails.TypeID = 5) ') ;

		   end if;  
           
           
           set @strContactQuery = concat(@strContactQuery, ' ) ');

	end if;


IF filterType = 2 or filterType = 3 then 
  set @strContactQuery = concat(@strContactQuery,' group by CNID    having count(TypeID) = ' , DetailsFilterCount , ' ) filteredcontactdetails  )' );

end if;


 set @strContactQuery = concat(@strContactQuery, ' order by PersonNameID limit ',  cast(listLimit as char), '  )   contactlist  left join (select * from contactdetails where contactdetails.deleted = 0 ) contactdetails  on contactlist.ID =  contactdetails.CNID left join entitydetails on entitydetails.ID = contactdetails.EDID  order by PersonNameID asc ' );
   
  PREPARE stmt FROM @strContactQuery ;
   Execute stmt ;
   deallocate prepare stmt ;

 select @strContactQuery ;
 
-- select contactSystemUser;
-- select filterType;
end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getContactHistorydetails` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getContactHistorydetails`(in CID double)
BEGIN
select contacthistory.id as 'HistoryID',

 contacthistory.HistoryDate,
 contacthistory.Name,
 contacthistory.Subject,
contacthistory.Message,
contacthistory.Status , 

owner.id as 'organization ID'  ,
owner.BusinessName as 'organizationName'
from  contacthistory 

left join owner on 1 = 1 where contacthistory.CreatedBy = CID 
order by contacthistory.createdOn desc limit 50 ;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getContactList` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getContactList`(

 IN contTypeID double,
 IN userId double,
 IN lastID double,
 IN userName varchar(30),
 IN userLock INT(11),
 IN listLimit int,
 IN contHQ varchar(40),
 IN contArea double,
 IN contRoute double,
 IN contlabel varchar(40),
 IN contPhone varchar(40),
 IN contEmail varchar(60),
 IN contURL varchar(60),
 IN contactMyFavoritesFlag INT(11),
 IN contCity varchar(40),
 IN contDate varchar(40) ,
 IN contactName varchar(50),
 IN flgMyContact INT(11),
 IN contactSystemUser INT(11)
)
BEGIN

 set @showcontTypeID =contTypeID;
   
   if (contTypeID = 100 or contTypeID = 200 or contTypeID = 300) then 
  set @showcontTypeID =0;
   end if;

  set @strContactQuery = 'Select ';

set @strContactQuery = concat(@strContactQuery, ' contactlist.* , if (favouritecontacts.userID is null, 0,1)  as flgMyFavoriteNew ,if (contactlist.myContactID =  ', cast(userId as char) ,', 1, 0 ) as  flgMyContactNew , contactdetails.EID, contactdetails.entityDetailsID , contactdetails.entityDetailsTypeID ,contactdetails.entityDetailsDescription ,contactdetails.deleted as deleted, contactdetails.CNID as contactDetailsCNID, contactdetails.ID as contactDetailsId, contactdetails.EDID as contactDetailsEDID, contactdetails.otherID as contactDetailsOtherID, contactdetails.detail1 as contactDetailsDetails1, contactdetails.detail2 as contactDetailsDetails2, contactdetails.detail3 as contactDetailsDetails3, contactdetails.detail4 as contactDetailsDetails4,contactdetails.detail5 as contactDetailsDetails5, contactdetails.detail6 as contactDetailsDetails6 from (select contact.* from  contact left join favouritecontacts on favouritecontacts.contactID = contact.ID where contact.ID > ' , cast(lastID as char) );

	if (contTypeID = 200) then -- favourites
      set @strContactQuery = concat(@strContactQuery, ' and  favouritecontacts.userID = ', cast(userId as char));
	end if;
   
	if (contTypeID = 100) then -- my contact
      set @strContactQuery = concat(@strContactQuery, ' and  contact.myContactID = ', cast(userId as char));
 	end if;
  
	if (contTypeID = 300) then -- system user
		set @strContactQuery = concat(@strContactQuery, ' and contact.userName is not null ');
 	end if;



 IF (length(userName) > 0) then 
 
 
         SET @strContactQuery = concat(@strContactQuery, ' AND lower(contact.userName) like "', lower(userName), '%"') ;
         
    end if; 
    
   
    
     IF userLock > 0  then 

         SET @strContactQuery = concat(@strContactQuery , ' AND contact.userLock = ' , cast(userLock as char)) ;
         
     end if; 
 
	
     
   IF @showcontTypeID > 0 then 

         SET @strContactQuery = concat(@strContactQuery , ' AND contact.contactTypeID = ' , cast(@showcontTypeID as char));
         
    end if; 
    
    IF flgMyContact > 0 then 

         SET @strContactQuery = concat(@strContactQuery ,' and  contact.myContactID = ', cast(userId as char));
         
    end if; 
       
 
          
    IF contactSystemUser = 1  then 

         SET @strContactQuery = concat(@strContactQuery ,' and contact.userName is not null');
         
    end if; 
   
    
  
  IF contArea > 0 then 

         SET @strContactQuery = concat(@strContactQuery , ' AND contact.Area =' , cast(contArea as char));
         
    end if; 
    
    IF contRoute > 0 then 

         SET @strContactQuery = concat(@strContactQuery , ' AND contact.Route = ' , cast(contRoute as char));
         
    end if; 
    
   
   IF (length(contHQ) > 0) then 

         SET @strContactQuery =concat( @strContactQuery , ' AND lower(contact.HQ) like "' , lower(contHQ) , '%"' );
         
    end if;     

    IF (length(contlabel) > 0) then 

         SET @strContactQuery =concat( @strContactQuery , ' AND lower(contact.label) like "%' , lower(contlabel) , '%"') ;
     
     end if;  
     
     IF (length(contactName) > 0 ) then 

         SET @strContactQuery = concat(@strContactQuery , ' AND lower(concat(ifnull(contact.FirstName, " " ) , " " ,  ifnull(contact.MiddleName," ") , " " , ifnull(contact.LastName," ") ) ) like "%' ,  lower(contactName) , '%" ') ;  
          end if; 
          
 
 SET @strContactQuery = concat(@strContactQuery , ' and contact.deleted = 0  order by contact.ID asc ,contact.FirstName asc, contact.lastName asc limit ', cast(listLimit as char), ') contactlist ');

set @strContacyDetailsQuery = concat('select  contactdetails.*,  entities.ID as EID, entities.Description as entityDescription,  entitydetails.ID as entityDetailsID , entitydetails.TypeID as entityDetailsTypeID,  entitydetails.Description as entityDetailsDescription  from  contactdetails  left join entitydetails on entitydetails.ID = contactdetails.EDID   left join entities on entities.ID = entitydetails.TypeID where contactdetails.deleted != 1 '); 


 IF (length(contPhone) > 0) then 

         SET @strContacyDetailsQuery =concat(@strContacyDetailsQuery , ' AND (contactdetails.detail1 like "' , contPhone , '%" AND entities.ID = 3)') ;    
          end if;  
   
    IF (length(contURL) > 0 ) then 

         SET @strContacyDetailsQuery = concat(@strContacyDetailsQuery , ' AND (lower(contactdetails.detail1)  like "%' , lower(contURL) , '%" AND entities.ID = 6)') ;
          end if;  
         
   IF (length(contCity) > 0 ) then 

         SET @strContacyDetailsQuery = concat(@strContacyDetailsQuery , ' AND (lower(contactdetails.detail3)  like "' , lower(contCity) , '%" AND entities.ID = 2)') ;
          end if;  
   
   IF (length(contDate) > 0 ) then 

         SET @strContacyDetailsQuery = concat(@strContacyDetailsQuery , ' AND (contactdetails.detail1  like "' , contDate , '%" AND entities.ID = 4)') ;
          end if;  
   
      
   IF (length(contEmail) > 0 ) then 

         SET @strContacyDetailsQuery = concat(@strContacyDetailsQuery , ' AND (lower(contactdetails.detail1) like "' ,  lower(contEmail) , '%" AND entities.ID = 5)') ;
          end if;  
          
        
    set @strMainQuery = concat( @strContactQuery , ' left join ( ' , @strContacyDetailsQuery , ' ) contactdetails on contactlist.ID = contactdetails.CNID left join favouritecontacts on favouritecontacts.contactID = contactlist.ID where 1=1 ');
   
      IF contactMyFavoritesFlag = 1 then 

         SET @strMainQuery = concat(@strMainQuery ,' And  favouritecontacts.userID = ', cast(userId as char) );
         
    end if; 
  
  IF (length(contPhone) > 0) then 

         SET @strMainQuery =concat(@strMainQuery , ' AND (contactdetails.detail1 like "' , contPhone , '%" AND contactdetails.EID = 3)') ;    
          end if;  
   
    IF (length(contURL) > 0 ) then 

         SET @strMainQuery = concat(@strMainQuery , ' AND (lower(contactdetails.detail1)  like "%' , lower(contURL) , '%" AND contactdetails.EID = 6)') ;
          end if;  
         
   IF (length(contCity) > 0 ) then 

         SET @strMainQuery = concat(@strMainQuery , ' AND (lower(contactdetails.detail3)  like "' , lower(contCity) , '%" AND contactdetails.EID = 2)') ;
          end if;  
         
      
   IF (length(contEmail) > 0 ) then 

         SET @strMainQuery = concat(@strMainQuery , ' AND (lower(contactdetails.detail1) like "' ,  lower(contEmail) , '%" AND contactdetails.EID = 5)') ;
          end if;  
    IF (length(contDate) > 0 ) then 

         SET @strMainQuery = concat(@strMainQuery , ' AND (contactdetails.detail1  like "' , contDate , '%" AND contactdetails.EID = 4)') ;
          end if;  

  PREPARE stmt FROM @strMainQuery ;
   Execute stmt ;
   deallocate prepare stmt;

 select @strMainQuery ;



END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getContactListOLD` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getContactListOLD`(

 IN contTypeID double,
 IN userId double,
 IN lastID double,
 IN userName varchar(30),
 IN userLock INT(11),
 IN listLimit int,
 IN contHQ varchar(40),
 IN contArea double,
 IN contRoute double,
 IN contlabel varchar(40),
 IN contPhone varchar(40),
 IN contEmail varchar(60),
 IN contURL varchar(60),
 IN contactMyFavoritesFlag INT(11),
 IN contCity varchar(40),
 IN contDate varchar(40) ,
 IN contactName varchar(50),
 IN flgMyContact INT(11),
 IN contactSystemUser INT(11)
)
BEGIN

 set @showcontTypeID =contTypeID;
   
   if (contTypeID = 100 or contTypeID = 200 or contTypeID = 300) then 
  set @showcontTypeID =0;
   end if;

  set @strContactQuery = 'Select ';

set @strContactQuery = concat(@strContactQuery, ' contactlist.* , if (favouritecontacts.userID is null, 0,1)  as flgMyFavoriteNew ,if (contactlist.myContactID =  ', cast(userId as char) ,', 1, 0 ) as  flgMyContactNew , contactdetails.EID, contactdetails.entityDetailsID , contactdetails.entityDetailsTypeID ,contactdetails.entityDetailsDescription ,contactdetails.deleted as deleted, contactdetails.CNID as contactDetailsCNID, contactdetails.ID as contactDetailsId, contactdetails.EDID as contactDetailsEDID, contactdetails.otherID as contactDetailsOtherID, contactdetails.detail1 as contactDetailsDetails1, contactdetails.detail2 as contactDetailsDetails2, contactdetails.detail3 as contactDetailsDetails3, contactdetails.detail4 as contactDetailsDetails4,contactdetails.detail5 as contactDetailsDetails5, contactdetails.detail6 as contactDetailsDetails6 from (select contact.* from  contact left join favouritecontacts on favouritecontacts.contactID = contact.ID where contact.ID > ' , cast(lastID as char) );

	if (contTypeID = 200) then -- favourites
      set @strContactQuery = concat(@strContactQuery, ' and  favouritecontacts.userID = ', cast(userId as char));
	end if;
   
	if (contTypeID = 100) then -- my contact
      set @strContactQuery = concat(@strContactQuery, ' and  contact.myContactID = ', cast(userId as char));
 	end if;
  
	if (contTypeID = 300) then -- system user
		set @strContactQuery = concat(@strContactQuery, ' and contact.userName is not null ');
 	end if;



 IF (length(userName) > 0) then 
 
 
         SET @strContactQuery = concat(@strContactQuery, ' AND lower(contact.userName) like "', lower(userName), '%"') ;
         
    end if; 
    
   
    
     IF userLock > 0  then 

         SET @strContactQuery = concat(@strContactQuery , ' AND contact.userLock = ' , cast(userLock as char)) ;
         
     end if; 
 
	
     
   IF @showcontTypeID > 0 then 

         SET @strContactQuery = concat(@strContactQuery , ' AND contact.contactTypeID = ' , cast(@showcontTypeID as char));
         
    end if; 
    
    IF flgMyContact > 0 then 

         SET @strContactQuery = concat(@strContactQuery ,' and  contact.myContactID = ', cast(userId as char));
         
    end if; 
       
 
          
    IF contactSystemUser = 1  then 

         SET @strContactQuery = concat(@strContactQuery ,' and contact.userName is not null');
         
    end if; 
   
    
  
  IF contArea > 0 then 

         SET @strContactQuery = concat(@strContactQuery , ' AND contact.Area =' , cast(contArea as char));
         
    end if; 
    
    IF contRoute > 0 then 

         SET @strContactQuery = concat(@strContactQuery , ' AND contact.Route = ' , cast(contRoute as char));
         
    end if; 
    
   
   IF (length(contHQ) > 0) then 

         SET @strContactQuery =concat( @strContactQuery , ' AND lower(contact.HQ) like "' , lower(contHQ) , '%"' );
         
    end if;     

    IF (length(contlabel) > 0) then 

         SET @strContactQuery =concat( @strContactQuery , ' AND lower(contact.label) like "%' , lower(contlabel) , '%"') ;
     
     end if;  
     
     IF (length(contactName) > 0 ) then 

         SET @strContactQuery = concat(@strContactQuery , ' AND lower(concat(ifnull(contact.FirstName, " " ) , " " ,  ifnull(contact.MiddleName," ") , " " , ifnull(contact.LastName," ") ) ) like "%' ,  lower(contactName) , '%" ') ;  
          end if; 
          
 
 SET @strContactQuery = concat(@strContactQuery , ' and contact.deleted = 0  order by contact.ID asc ,contact.FirstName asc, contact.lastName asc limit ', cast(listLimit as char), ') contactlist ');

set @strContacyDetailsQuery = concat('select  contactdetails.*,  entities.ID as EID, entities.Description as entityDescription,  entitydetails.ID as entityDetailsID , entitydetails.TypeID as entityDetailsTypeID,  entitydetails.Description as entityDetailsDescription  from  contactdetails  left join entitydetails on entitydetails.ID = contactdetails.EDID   left join entities on entities.ID = entitydetails.TypeID where contactdetails.deleted != 1 '); 


 IF (length(contPhone) > 0) then 

         SET @strContacyDetailsQuery =concat(@strContacyDetailsQuery , ' AND (contactdetails.detail1 like "' , contPhone , '%" AND entities.ID = 3)') ;    
          end if;  
   
    IF (length(contURL) > 0 ) then 

         SET @strContacyDetailsQuery = concat(@strContacyDetailsQuery , ' AND (lower(contactdetails.detail1)  like "%' , lower(contURL) , '%" AND entities.ID = 6)') ;
          end if;  
         
   IF (length(contCity) > 0 ) then 

         SET @strContacyDetailsQuery = concat(@strContacyDetailsQuery , ' AND (lower(contactdetails.detail3)  like "' , lower(contCity) , '%" AND entities.ID = 2)') ;
          end if;  
   
   IF (length(contDate) > 0 ) then 

         SET @strContacyDetailsQuery = concat(@strContacyDetailsQuery , ' AND (contactdetails.detail1  like "' , contDate , '%" AND entities.ID = 4)') ;
          end if;  
   
      
   IF (length(contEmail) > 0 ) then 

         SET @strContacyDetailsQuery = concat(@strContacyDetailsQuery , ' AND (lower(contactdetails.detail1) like "' ,  lower(contEmail) , '%" AND entities.ID = 5)') ;
          end if;  
          
        
    set @strMainQuery = concat( @strContactQuery , ' left join ( ' , @strContacyDetailsQuery , ' ) contactdetails on contactlist.ID = contactdetails.CNID left join favouritecontacts on favouritecontacts.contactID = contactlist.ID where 1=1 ');
   
      IF contactMyFavoritesFlag = 1 then 

         SET @strMainQuery = concat(@strMainQuery ,' And  favouritecontacts.userID = ', cast(userId as char) );
         
    end if; 
  
  IF (length(contPhone) > 0) then 

         SET @strMainQuery =concat(@strMainQuery , ' AND (contactdetails.detail1 like "' , contPhone , '%" AND contactdetails.EID = 3)') ;    
          end if;  
   
    IF (length(contURL) > 0 ) then 

         SET @strMainQuery = concat(@strMainQuery , ' AND (lower(contactdetails.detail1)  like "%' , lower(contURL) , '%" AND contactdetails.EID = 6)') ;
          end if;  
         
   IF (length(contCity) > 0 ) then 

         SET @strMainQuery = concat(@strMainQuery , ' AND (lower(contactdetails.detail3)  like "' , lower(contCity) , '%" AND contactdetails.EID = 2)') ;
          end if;  
         
      
   IF (length(contEmail) > 0 ) then 

         SET @strMainQuery = concat(@strMainQuery , ' AND (lower(contactdetails.detail1) like "' ,  lower(contEmail) , '%" AND contactdetails.EID = 5)') ;
          end if;  
    IF (length(contDate) > 0 ) then 

         SET @strMainQuery = concat(@strMainQuery , ' AND (contactdetails.detail1  like "' , contDate , '%" AND contactdetails.EID = 4)') ;
          end if;  

  PREPARE stmt FROM @strMainQuery ;
   Execute stmt ;
   deallocate prepare stmt;

 select @strMainQuery ;



END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getContactListOLD2` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getContactListOLD2`(
 
 IN contTypeID double,
 IN userId double,
 IN lastID double,
 IN userName varchar(15),
 IN userLock INT(11),
 IN listLimit int,
 IN contHQ varchar(40),
 IN contArea double,
 IN contRoute double,
 IN contlabel varchar(40),
 IN contPhone varchar(40),
 IN contEmail varchar(60),
 IN contURL varchar(60),
 IN contactMyFavoritesFlag INT(11),
 IN contCity varchar(40),
 IN contDate varchar(40) ,
 IN contactName varchar(50),
 IN flgMyContact INT(11)
 )
BEGIN

 	
  SET @strQuery = concat(' select * from (select contact.*, company.Name as companyName ,contactdetails.deleted as deleted, contactdetails.CNID as contactDetailsCNID, contactdetails.ID as contactDetailsId, contactdetails.EDID as contactDetailsEDID, contactdetails.otherID as contactDetailsOtherID, contactdetails.detail1 as contactDetailsDetails1, contactdetails.detail2 as contactDetailsDetails2, contactdetails.detail3 as contactDetailsDetails3, contactdetails.detail4 as contactDetailsDetails4,contactdetails.detail5 as contactDetailsDetails5, contactdetails.detail6 as contactDetailsDetails6 , entities.ID as EID, entities.Description as entityDescription, entitydetails.ID as entityDetailsID , entitydetails.TypeID as entityDetailsTypeID,entitydetails.Description as entityDetailsDescription,favouritecontacts.* from contact  left join (select * from contactdetails where contactdetails.deleted = 0 )contactdetails on contact.ID = contactdetails.CNID  left join entitydetails on entitydetails.ID = contactdetails.EDID left join entities on entities.ID = entitydetails.TypeID left join favouritecontacts on favouritecontacts.contactID = contact.ID left join company on company.ID = contact.companyID  WHERE contact.ID > ', cast(lastID as char)) ;
                
   --  add all conditions here - begin --------------------
	
     IF (length(userName) > 0) then 
	

         SET @strQuery = concat(@strQuery, ' AND lower(contact.userName) like "', lower(userName), '%"') ;
         
    end if; 
    
     IF userLock > 0  then 

         SET @strQuery = concat(@strQuery , ' AND contact.userLock = ' , cast(userLock as char)) ;
         
     end if; 
 

   IF contTypeID > 0 then 

         SET @strQuery = concat(@strQuery , ' AND contact.contactTypeID = ' , cast(contTypeID as char));
         
    end if; 
    
    IF flgMyContact > 0 then 

         SET @strQuery = concat(@strQuery ,' AND contact.myContactID =' , cast(flgMyContact as char));
         
    end if; 
    
    IF contactMyFavoritesFlag > 0 then 

         SET @strQuery = concat(@strQuery ,' AND contact.flgMyfavourite =' , cast(contactMyFavoritesFlag as char));
         
    end if;
    
     IF contArea > 0 then 

         SET @strQuery = concat(@strQuery , ' AND contact.Area =' , cast(contArea as char));
         
    end if; 
    
    IF contRoute > 0 then 

         SET @strQuery = concat(@strQuery , ' AND contact.Route = ' , cast(contRoute as char));
         
    end if; 
    
   
   IF (length(contHQ) > 0) then 

         SET @strQuery =concat( @strQuery , ' AND lower(contact.HQ) like "' , lower(contHQ) , '%"' );
         
    end if;     

    IF (length(contlabel) > 0) then 

         SET @strQuery =concat( @strQuery , ' AND lower(contact.label) like "%' , lower(contlabel) , '%"') ;
     
     end if;  
    
    IF (length(contPhone) > 0) then 

         SET @strQuery =concat(@strQuery , ' AND (contactdetails.detail1 like "' , contPhone , '%" AND entities.ID = 3)') ;    
          end if;  
   
    IF (length(contURL) > 0 ) then 

         SET @strQuery = concat(@strQuery , ' AND (lower(contactdetails.detail1)  like "%' , lower(contURL) , '%" AND entities.ID = 6)') ;
          end if;  
         
   IF (length(contCity) > 0 ) then 

         SET @strQuery = concat(@strQuery , ' AND (lower(contactdetails.detail1)  like "' , lower(contCity) , '%" AND entities.ID = 2)') ;
          end if;  
         
      
   IF (length(contEmail) > 0 ) then 

         SET @strQuery = concat(@strQuery , ' AND (lower(contactdetails.detail1) like "' ,  lower(contEmail) , '%" AND entities.ID = 5)') ;
          end if;  

	IF (length(contactName) > 0 ) then 

         SET @strQuery = concat(@strQuery , ' AND lower(contact.FirstName + contact.MiddleName + contact.LastName)  like "%' ,  lower(contactName) , '%"') ;  
          end if;  

  
--  add all conditions here - end --------------------
   SET @strQuery = concat(@strQuery , ' order by ID asc,FirstName asc, lastName asc  limit ', cast(listLimit as char) , ') contact');
  
   PREPARE stmt FROM @strQuery ;
   Execute stmt ;
   
  --  select @strQuery ;
    deallocate prepare stmt;
  
 END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getContactListUpdated` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getContactListUpdated`(

 IN contTypeID double,
 IN userId double,
 IN lastID double,
 IN userName varchar(30),
 IN userLock INT(11),
 IN listLimit int,
 IN contHQ varchar(40),
 IN contArea double,
 IN contRoute double,
 IN contlabel varchar(40),
 IN contPhone varchar(40),
 IN contEmail varchar(60),
 IN contURL varchar(60),
 IN contactMyFavoritesFlag INT(11),
 IN contCity varchar(40),
 IN contDate varchar(40) ,
 IN contactName varchar(50),
 IN flgMyContact INT(11)
)
BEGIN

 set @showcontTypeID =contTypeID;
   
   if (contTypeID = 100 or contTypeID = 200) then 
  set @showcontTypeID =0;
   end if;

set @strContactQuery = 'Select ';
   if (contTypeID = 200) then 
      set @strContactQuery = concat(@strContactQuery, 'contactlist.flgMyFavoriteNew, ');
   end if;


set @strContactQuery = concat(@strContactQuery, 'contactlist.* , company.Name as companyName, entities.ID as EID, entities.Description as entityDescription,  entitydetails.ID as entityDetailsID , entitydetails.TypeID as entityDetailsTypeID,  entitydetails.Description as entityDetailsDescription ,contactdetails.deleted as deleted, contactdetails.CNID as contactDetailsCNID, contactdetails.ID as contactDetailsId, contactdetails.EDID as contactDetailsEDID, contactdetails.otherID as contactDetailsOtherID, contactdetails.detail1 as contactDetailsDetails1, contactdetails.detail2 as contactDetailsDetails2, contactdetails.detail3 as contactDetailsDetails3, contactdetails.detail4 as contactDetailsDetails4,contactdetails.detail5 as contactDetailsDetails5, contactdetails.detail6 as contactDetailsDetails6 from (select contact.* ');

 if (contTypeID = 200) then 
      set @strContactQuery = concat(@strContactQuery, ', myFavContact.* from  contact left join (select contactID, if (favouritecontacts.userID is null, 0,1)  as flgMyFavoriteNew from favouritecontacts where userID = ', cast(userId as char) ,') myFavContact on myFavContact.contactID = contact.ID where myFavContact.flgMyFavoriteNew = 1 and contact.ID > ' , cast(lastID as char));
   end if;
   
if (contTypeID = 100) then 
      set @strContactQuery = concat(@strContactQuery, 'from  contact where contact.myContactID = ', cast(userId as char) ,' and contact.ID > ' , cast(lastID as char));
 
 end if;

if (contTypeID != 100 and contTypeID != 200) then 
 set @strContactQuery = concat(@strContactQuery, ' from  contact where contact.ID > ' , cast(lastID as char) );
end if;

 IF (length(userName) > 0) then 
 
 
         SET @strContactQuery = concat(@strContactQuery, ' AND lower(contact.userName) like "', lower(userName), '%"') ;
         
    end if; 
    
   
    
     IF userLock > 0  then 

         SET @strContactQuery = concat(@strContactQuery , ' AND contact.userLock = ' , cast(userLock as char)) ;
         
     end if; 
 
	
     
   IF @showcontTypeID > 0 then 

         SET @strContactQuery = concat(@strContactQuery , ' AND contact.contactTypeID = ' , cast(@showcontTypeID as char));
         
    end if; 
    
    IF flgMyContact > 0 then 

         SET @strContactQuery = concat(@strContactQuery ,' AND contact.myContactID =' , cast(flgMyContact as char));
         
    end if; 
    
   
    
     IF contArea > 0 then 

         SET @strContactQuery = concat(@strContactQuery , ' AND contact.Area =' , cast(contArea as char));
         
    end if; 
    
    IF contRoute > 0 then 

         SET @strContactQuery = concat(@strContactQuery , ' AND contact.Route = ' , cast(contRoute as char));
         
    end if; 
    
   
   IF (length(contHQ) > 0) then 

         SET @strContactQuery =concat( @strContactQuery , ' AND lower(contact.HQ) like "' , lower(contHQ) , '%"' );
         
    end if;     

    IF (length(contlabel) > 0) then 

         SET @strContactQuery =concat( @strContactQuery , ' AND lower(contact.label) like "%' , lower(contlabel) , '%"') ;
     
     end if;  
     
     IF (length(contactName) > 0 ) then 

         SET @strContactQuery = concat(@strContactQuery , ' AND lower(contact.FirstName + " "' , ' + contact.MiddleName " "' , ' + contact.LastName)  like "%' ,  lower(contactName) , '%" ') ;  
          end if; 
          
 
 SET @strContactQuery = concat(@strContactQuery , '  order by contact.ID asc ,contact.FirstName asc, contact.lastName asc limit ', cast(listLimit as char), ') contactlist');

set @strContacyDetailsQuery = concat('select * from contactdetails  where contactdetails.deleted != 1 '); 


 IF (length(contPhone) > 0) then 

         SET @strContacyDetailsQuery =concat(@strContacyDetailsQuery , ' AND (contactdetails.detail1 like "' , contPhone , '%" AND entities.ID = 3)') ;    
          end if;  
   
    IF (length(contURL) > 0 ) then 

         SET @strContacyDetailsQuery = concat(@strContacyDetailsQuery , ' AND (lower(contactdetails.detail1)  like "%' , lower(contURL) , '%" AND entities.ID = 6)') ;
          end if;  
         
   IF (length(contCity) > 0 ) then 

         SET @strContacyDetailsQuery = concat(@strContacyDetailsQuery , ' AND (lower(contactdetails.detail1)  like "' , lower(contCity) , '%" AND entities.ID = 2)') ;
          end if;  
         
      
   IF (length(contEmail) > 0 ) then 

         SET @strContacyDetailsQuery = concat(@strContacyDetailsQuery , ' AND (lower(contactdetails.detail1) like "' ,  lower(contEmail) , '%" AND entities.ID = 5)') ;
          end if;  
          
        
    set @strMainQuery = concat( @strContactQuery , ' left join ( ' , @strContacyDetailsQuery , ' ) contactdetails on contactlist.ID = contactdetails.CNID   left join entitydetails on entitydetails.ID = contactdetails.EDID   left join entities on entities.ID = entitydetails.TypeID  left join company on company.ID = contactlist.companyID ');
   
  
  -- /* 
 
   PREPARE stmt FROM @strMainQuery ;
   Execute stmt ;
   deallocate prepare stmt;
-- */
 -- select @strMainQuery ;



END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getContactNameList` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getContactNameList`(
  IN uid int,
 IN token varchar(30),
 IN viewPermissionID int,
 OUT status int

)
BEGIN


call purpleaid.sp_authorization(uid,  token, viewPermissionID , @auth_status);

set status= @auth_status;

if @auth_status = 2 then 

select ID , FirstName , LastName , contactTypeID from contact where deleted = 0;

end if;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getContactOld` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getContactOld`(
 
 IN contTypeID double,
 IN userId double,
 IN filterType double,
 IN lastID double,
 IN listLimit double,
 IN userName varchar(30),
 IN userLock INT(11),
 IN contHQ varchar(40),
 IN contArea double,
 IN contRoute double,
 IN contlabel varchar(40),
 IN contPhone varchar(40),
 IN contEmail varchar(60),
 IN contURL varchar(60),
 IN contactMyFavoritesFlag INT(11),
 IN contCity varchar(40),
 IN contDate varchar(40) ,
 IN contactName varchar(50),
 IN flgMyContact INT(11),
 IN contactSystemUser INT(11)


)
BEGIN
  
  set @strContactQuery = 'Select ';

  set @strContactQuery = concat(@strContactQuery, 'concat(ifnull(contact.FirstName," "), " ", ifnull(contact.LastName, " "), contact.id) as PersonNameID, contact.*,if (favouritecontacts.userID is null, 0,1)  as flgMyFavoriteNew ,if (contact.myContactID =  ', cast(userId as char) ,', 1, 0 ) as  flgMyContactNew FROM purpleaid.contact  left join favouritecontacts on favouritecontacts.contactID = contact.ID  where contact.deleted = 0 and concat(ifnull(contact.FirstName," "), " ", ifnull(contact.LastName, " "), contact.id) >  ifnull((select concat(ifnull(contact.FirstName," "), " ", ifnull(contact.LastName, " "), contact.id) from contact where id =',  cast(lastID as char) , ' ), " ")'  );


	if (contTypeID = 200) then -- favourites
      set @strContactQuery = concat(@strContactQuery, ' and  favouritecontacts.userID = ', cast(userId as char));
	end if;
   
	if (contTypeID = 100) then -- my contact
      set @strContactQuery = concat(@strContactQuery, ' and  contact.myContactID = ', cast(userId as char));
 	end if;
  
	if (contTypeID = 300) then -- system user
		set @strContactQuery = concat(@strContactQuery, ' and contact.userName is not null ');
 	end if;


  IF filterType = 1 or filterType =3 then 



		 IF (length(userName) > 0) then 
		 
		 
				 SET @strContactQuery = concat(@strContactQuery, ' AND lower(contact.userName) like "', lower(userName), '%"') ;
				 
			end if; 
			
		   
			
			 IF userLock > 0  then 

				 SET @strContactQuery = concat(@strContactQuery , ' AND contact.userLock = ' , cast(userLock as char)) ;
				 
			 end if; 
		 
			
			 
		   IF @showcontTypeID > 0 then 

				 SET @strContactQuery = concat(@strContactQuery , ' AND contact.contactTypeID = ' , cast(@showcontTypeID as char));
				 
			end if; 
			
			IF flgMyContact > 0 then 

				 SET @strContactQuery = concat(@strContactQuery ,' and  contact.myContactID = ', cast(userId as char));
				 
			end if; 
			   
		 
				  
			IF contactSystemUser = 1  then 

				 SET @strContactQuery = concat(@strContactQuery ,' and contact.userName is not null');
				 
			end if; 
		   
			
		  
		  IF contArea > 0 then 

				 SET @strContactQuery = concat(@strContactQuery , ' AND contact.Area =' , cast(contArea as char));
				 
			end if; 
			
			IF contRoute > 0 then 

				 SET @strContactQuery = concat(@strContactQuery , ' AND contact.Route = ' , cast(contRoute as char));
				 
			end if; 
			
		   
		   IF (length(contHQ) > 0) then 

				 SET @strContactQuery =concat( @strContactQuery , ' AND lower(contact.HQ) like "' , lower(contHQ) , '%"' );
				 
			end if;     

			IF (length(contlabel) > 0) then 

				 SET @strContactQuery =concat( @strContactQuery , ' AND lower(contact.label) like "%' , lower(contlabel) , '%"') ;
			 
			 end if;  
			 
			 IF (length(contactName) > 0 ) then 

				 SET @strContactQuery = concat(@strContactQuery , ' AND lower(concat(ifnull(contact.FirstName, " " ) , " " ,  ifnull(contact.MiddleName," ") , " " , ifnull(contact.LastName," ") ) ) like "%' ,  lower(contactName) , '%" ') ;  
				  end if; 
                  
		          
  end if;  
  
  
   IF filterType = 2 or filterType =3 then 
  
  
    SET @strContactQuery =concat(@strContactQuery ,' and contact.ID in (Select CNID from contactdetails left join entitydetails on entitydetails.ID = contactdetails.EDID   left join entities on entities.ID = entitydetails.TypeID where contactdetails.deleted = 0');

		 IF (length(contPhone) > 0) then 

				 SET @strContactQuery =concat(@strContactQuery , 'and contactdetails.detail1 like "' , contPhone , '%" AND entities.ID = 3 ') ;    
				  end if;  
		   
			IF (length(contURL) > 0 ) then 

				 SET @strContactQuery = concat(@strContactQuery , ' AND (lower(contactdetails.detail1)  like "%' , lower(contURL) , '%" AND entities.ID = 6)') ;
				  end if;  
				 
		   IF (length(contCity) > 0 ) then 

				 SET @strContactQuery = concat(@strContactQuery , ' AND (lower(contactdetails.detail3)  like "' , lower(contCity) , '%" AND entities.ID = 2)') ;
				  end if;  
		   
		   IF (length(contDate) > 0 ) then 

				 SET @strContactQuery = concat(@strContactQuery , ' AND (contactdetails.detail1  like "' , contDate , '%" AND entities.ID = 4)') ;
				  end if;  
		   
			  
		   IF (length(contEmail) > 0 ) then 

				 SET @strContactQuery = concat(@strContactQuery , ' AND (lower(contactdetails.detail1) like "' ,  lower(contEmail) , '%" AND entities.ID = 5) )') ;
				  end if;  

	end if;

-- SET @strContactQuery = concat(@strContactQuery , 'left join (select * from contactDetails)  as PeopleDetails on contact.ID = PeopleDetails.CNID ') ;
 set @strContactQuery = concat(@strContactQuery, '  order by PersonNameID asc limit ', cast(listLimit as char) );

  PREPARE stmt FROM @strContactQuery ;
   Execute stmt ;
   deallocate prepare stmt;
 select @strContactQuery ;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getContactType` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getContactType`(

 IN  uid int,
 IN  token  varchar(30),
 IN ViewpermissionID int,
 OUT status  int

)
BEGIN

call purpleaid.sp_authorization(uid,  token, ViewpermissionID , @auth_status);

 set status= @auth_status;

 if @auth_status = 2 then
 
		select id as contactTypeId ,
		entitydetails.description as 'contactType' 
		from entitydetails where typeid = 1 order by entitydetails.description;
        
end if;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getContactTypeList` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getContactTypeList`(

  IN uid int,
 IN token varchar(30),
 IN viewPermissionID int,
 OUT status int

)
BEGIN
call purpleaid.sp_authorization(uid,  token, viewPermissionID , @auth_status);

set status= @auth_status;

if @auth_status = 2 then 
select * from entitydetails order by Description asc;

set status= @auth_status;
end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getContactUs` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getContactUs`(in CID double)
BEGIN
select  contact.id as contactID ,

    ifnull(concat(ifnull(contact.firstname ,'')  ,' ',  ifnull(contact.LastName,'') ) , '') as contactName, 
    
    ifnull(owner.id,0) as businessID, ifnull(owner.businessName,'') as businessName, 
    
    ifnull(t1.detail1 ,'') as email, 
    
    ifnull(t2.detail1, '') as phone from contact left join owner 
    on 1 = 1 
    left join 
    
    ( select contactdetails.CNID, contactdetails.detail1 from contactdetails 
   left join entitydetails on contactdetails.EDID = entitydetails.id
   left join entities on entities.id = entitydetails.typeID 
   where contactdetails.CNID = CID
      and 
      entitydetails.TypeID = 5 and  contactdetails.deleted = 0 
      order by contactdetails.ID desc limit 1) t1 on t1.CNID = contact.id
      
  left join 
    ( select contactdetails.CNID, contactdetails.detail1 from contactdetails 
      left join entitydetails on contactdetails.EDID = entitydetails.id
      left join entities on entities.id = entitydetails.typeID 
      where contactdetails.CNID = CID and 
      entitydetails.TypeID = 3 and contactdetails.deleted = 0 
      order by contactdetails.ID desc limit 1) t2 on t2.CNID = contact.id
    
    where contact.id = CID;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getControlPanelMiscList` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getControlPanelMiscList`(

 IN  uid int,
 IN  token varchar(30),
 IN ViewpermissionID int,
 OUT status  int

)
BEGIN

call purpleaid.sp_authorization(uid,  token, ViewpermissionID , @auth_status);

 set status= @auth_status;

 if @auth_status = 2 then
 
		select 
		contacttyperolemap.ContactTypeID ,
		view_controlpaneldefaultrole.ContactType,
		securityrolemaster.ID as RoleID,
		securityrolemaster.Role ,
		view_controlpaneldefaultrole.DefaultRole as DefaultRole
		from entitydetails 
		join contacttyperolemap on entitydetails.ID = contacttyperolemap.ContactTypeID
		join securityrolemaster  on securityrolemaster.id =contacttyperolemap.RoleID
		join view_controlpaneldefaultrole on view_controlpaneldefaultrole.ContactTypeID = entitydetails.id
		where entitydetails.TypeID = 1 order by view_controlpaneldefaultrole.ContactType asc;

end if;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getCreatedByNameListRR` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getCreatedByNameListRR`(
  IN uid int,
 IN token varchar(30),
 IN viewPermissionID int,
 OUT status int

)
BEGIN

call purpleaid.sp_authorization(uid,  token, viewPermissionID , @auth_status);

set status= @auth_status;

if @auth_status = 2 then 

select concat(ifnull(FirstName, '') ,'  ', ifnull(LastName, '') ) as createdByName , ID from contact where deleted =0 and flgStaff = 1;

end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getCreditNote` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getCreditNote`(IN companyId double, IN grID double,
  IN uid int,
 IN token varchar(30),
 IN viewPermissionID int,
 OUT status int
 )
BEGIN

call purpleaid.sp_authorization(uid,  token, viewPermissionID , @auth_status);

set status= @auth_status;

if @auth_status = 2 then 

select companycreditnote.* , company.ID as CID , goodsreceived.ID as GRID from companycreditnote left join company on company.ID = companycreditnote.CID 
left join goodsreceived on  goodsreceived.ID = companycreditnote.GRID 
where company.ID = companyId and (goodsreceived.ID is null or goodsreceived.ID = grID);
end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getCreditNoteList` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getCreditNoteList`(
IN CreditNoteType int,
IN custID int,
IN listlimit int,
IN fromDate varchar(40),
IN toDate varchar(40),
IN ledger int,
IN approved int,
IN createdById int,
IN status1 int,
IN creditNoteFromAmount double,
IN creditNoteToAmount double,
IN lastId int,
IN uid  int,
IN token varchar(30),
IN viewPermissionID int,
OUT status int,
IN voidFlag int,
IN creditNoteId double

)
BEGIN



 call purpleaid.sp_authorization(uid,  token, viewPermissionID , @auth_status);

    set status= @auth_status;

 if @auth_status = 2 then 

 
    set @strQuery = 'Select ';

 if CreditNoteType > 0 then

	if custID > 0 then 

		set @strQuery = concat(@strQuery, ' creditnote.* , concat(c5.firstName , " " , c5.LastName ) as cnLedgerUserName , date_format( creditnote.ledgerDate ,"%d/%m/%Y %h:%i:%s") as cnLedgertime , date_format(creditnote.CreatedOn , "%d/%m/%Y %H:%i:%s")  as cnCreatedOn , concat(date_format( creditnote.ledgerDate ,"%d/%m/%Y %h:%i:%s") , " ", concat(c5.firstName , " " , c5.LastName ) ) as legderInfo ,  date_format( creditnote.voidOn ,"%d/%m/%Y %h:%i:%s") as cnVoidOn , concat(c4.firstName , " " , c4.LastName ) as  VoidUser , concat(c.firstName , " " , c.LastName ) as lockUserName  , date_format( creditnote.lockDate ,"%d/%m/%Y %h:%i:%s") as cnlockOn , reason.Reason as cnReason , concat(ifnull(contact.firstName," ") , " " , ifnull(contact.LastName," ")) as createdByName , date_format(creditnote.Date ,"%d/%m/%Y" ) as CNDATE , customer.Name as customerName from creditnote left join customer on customer.ID = creditnote.custID left join contact on contact.ID  = creditnote.CreatedBy left join contact c4 on c4.ID = creditnote.voidBy left join contact c on c.ID = creditnote.lockUser  left join contact c5 on c5.ID = creditnote.ledgerUser left join reason on reason.ID = creditnote.Reason where creditnote.Type = ', cast(CreditNoteType as char) , ' and custID = ', cast(custID as char), ' and creditnote.ID > ', cast(lastId as char) );

		if voidFlag = -1 then 

		set @strQuery = concat(@strQuery, ' and creditnote.flgVoid = 0 ' );
        
        end if;
	else
    
		set @strQuery = concat(@strQuery, ' creditnote.* , concat(c5.firstName , " " , c5.LastName ) as cnLedgerUserName , date_format( creditnote.ledgerDate ,"%d/%m/%Y %h:%i:%s") as cnLedgertime , date_format(creditnote.CreatedOn , "%d/%m/%Y %H:%i:%s")  as cnCreatedOn , concat(date_format( creditnote.ledgerDate ,"%d/%m/%Y %h:%i:%s") , " ", concat(c4.firstName , " " , c4.LastName ) ) as legderInfo , date_format( creditnote.voidOn ,"%d/%m/%Y %h:%i:%s") as cnVoidOn , concat(c4.firstName , " " , c4.LastName ) as  VoidUser , concat(c.firstName , " " , c.LastName ) as lockUserName  , date_format( creditnote.lockDate ,"%d/%m/%Y %h:%i:%s") as cnlockOn , reason.Reason as cnReason ,concat(ifnull(contact.firstName," ") , " " , ifnull(contact.LastName," ")) as createdByName , date_format(creditnote.Date ,"%d/%m/%Y" ) as CNDATE , customer.Name as customerName from creditnote left join customer on customer.ID = creditnote.custID left join contact on contact.ID  = creditnote.CreatedBy left join reason on reason.ID = creditnote.Reason left join contact c4 on c4.ID = creditnote.voidBy left join contact c on c.ID = creditnote.lockUser  left join contact c5 on c5.ID = creditnote.ledgerUser where creditnote.Type = ', cast(CreditNoteType as char) , ' and creditnote.ID > ', cast(lastId as char) );

		if voidFlag = -1 then 

		set @strQuery = concat(@strQuery, ' and creditnote.flgVoid = 0 ' );
        
        end if;
        
	end if;
 
 else
	
    if custID > 0 then 
    
		set @strQuery = concat(@strQuery, ' creditnote.* , concat(c5.firstName , " " , c5.LastName ) as cnLedgerUserName , date_format( creditnote.ledgerDate ,"%d/%m/%Y %h:%i:%s") as cnLedgertime , date_format(creditnote.CreatedOn , "%d/%m/%Y %H:%i:%s")  as cnCreatedOn , concat(date_format( creditnote.ledgerDate ,"%d/%m/%Y %h:%i:%s") , " ", concat(c4.firstName , " " , c4.LastName ) ) as legderInfo , date_format( creditnote.voidOn ,"%d/%m/%Y %h:%i:%s") as cnVoidOn , concat(c4.firstName , " " , c4.LastName ) as  VoidUser , concat(c.firstName , " " , c.LastName ) as lockUserName  , date_format( creditnote.lockDate ,"%d/%m/%Y %h:%i:%s") as cnlockOn ,  reason.Reason as cnReason , concat(ifnull(contact.firstName," ") , " " , ifnull(contact.LastName," ")) as createdByName , date_format(creditnote.Date ,"%d/%m/%Y" ) as CNDATE , customer.Name as customerName from creditnote left join customer on customer.ID = creditnote.custID left join contact on contact.ID  = creditnote.CreatedBy left join reason on reason.ID = creditnote.Reason left join contact c4 on c4.ID = creditnote.voidBy left join contact c on c.ID = creditnote.lockUser  left join contact c5 on c5.ID = creditnote.ledgerUser where custID = ', cast(custID as char), ' and creditnote.ID > ', cast(lastId as char));
        
        if voidFlag = -1 then 

		set @strQuery = concat(@strQuery, ' and creditnote.flgVoid = 0 ' );
        
        end if;
        
    else
    
		set @strQuery = concat(@strQuery, ' creditnote.* ,concat(c5.firstName , " " , c5.LastName ) as cnLedgerUserName , date_format( creditnote.ledgerDate ,"%d/%m/%Y %h:%i:%s") as cnLedgertime , date_format(creditnote.CreatedOn , "%d/%m/%Y %H:%i:%s")  as cnCreatedOn ,  concat(date_format( creditnote.ledgerDate ,"%d/%m/%Y %h:%i:%s") , " ", concat(c4.firstName , " " , c4.LastName ) ) as legderInfo , date_format( creditnote.voidOn ,"%d/%m/%Y %h:%i:%s") as cnVoidOn , concat(c4.firstName , " " , c4.LastName ) as  VoidUser , concat(c.firstName , " " , c.LastName ) as lockUserName  , date_format( creditnote.lockDate ,"%d/%m/%Y %h:%i:%s") as cnlockOn ,  reason.Reason as cnReason , concat(ifnull(contact.firstName," ") , " " , ifnull(contact.LastName," ")) as createdByName , date_format(creditnote.Date ,"%d/%m/%Y" ) as CNDATE , customer.Name as customerName from creditnote left join customer on customer.ID = creditnote.custID left join contact on contact.ID  = creditnote.CreatedBy left join reason on reason.ID = creditnote.Reason left join contact c4 on c4.ID = creditnote.voidBy left join contact c on c.ID = creditnote.lockUser  left join contact c5 on c5.ID = creditnote.ledgerUser where creditnote.ID > ', cast(lastId as char));
    
		if voidFlag = -1 then 

		set @strQuery = concat(@strQuery, ' and creditnote.flgVoid = 0 ' );
        
        end if;
        
    end if;
        
end if; 
 
 
 
 IF (length(fromDate) > 0) then 
 
         SET @strQuery = concat(@strQuery, ' and  creditnote.Date >=  str_to_date("', fromDate , '" ,"%d/%m/%Y") ') ;
         
    end if; 
    
    IF (length(toDate) > 0) then 
 
         SET @strQuery = concat(@strQuery, ' and  creditnote.Date <=  str_to_date("', toDate , '" ,"%d/%m/%Y") ') ;
         
    end if; 
    
         
    IF ledger > -1 then 
 
         SET @strQuery = concat(@strQuery, ' and creditnote.flgLedgerLock = ' , cast(ledger as char)) ;
         
    end if; 
     
    IF approved > 0  then 
 
         SET @strQuery = concat(@strQuery, ' and creditnote.flgApproved >= ' , cast(approved as char)) ;
         
    end if; 
     
     
      IF createdById > 0  then 
 
         SET @strQuery = concat(@strQuery, ' and creditnote.CreatedBy <= ' , cast(createdById as char)) ;
         
     end if;
     
     IF status1 > 0  then 
 
         SET @strQuery = concat(@strQuery, ' and creditnote.status = ' , cast(status1 as char)) ;
         
     end if;
    
     IF creditNoteFromAmount > 0  then 
 
         SET @strQuery = concat(@strQuery, ' and creditnote.Amount >= ' , cast(creditNoteFromAmount as char)) ;
         
     end if; 
     
     
      IF creditNoteToAmount > 0  then 
 
         SET @strQuery = concat(@strQuery, ' and creditnote.Amount <= ' , cast(creditNoteToAmount as char)) ;
         
     end if;
     
     
     IF voidFlag > -1 then 
      
		SET @strQuery = concat(@strQuery, ' and creditnote.flgVoid = ' , cast(voidFlag as char)) ;
         
     end if;
     
     
      IF creditNoteId > 0 then 
      
		SET @strQuery = concat(@strQuery, ' and creditnote.ID = ' , cast(creditNoteId as char)) ;
         
     end if;
     
     SET @strQuery = concat(@strQuery, ' order by  date desc ,  creditnote.ID asc limit ', cast(listlimit as char) );
     
  end if;


 PREPARE stmt FROM @strQuery ;
    Execute stmt ;
    deallocate prepare stmt;

   select @strQuery ;



END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getCreditNoteSalesHistory` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getCreditNoteSalesHistory`(
IN rrdid int,
IN custID int,
IN uid  int,
IN token varchar(30),
IN viewPermissionID int,
OUT status int

)
BEGIN

declare salesvalue varchar(20);

call purpleaid.sp_authorization(uid,  token, viewPermissionID , @auth_status);

    set status= @auth_status;

	if @auth_status = 2 then 
    
      

    select value into salesvalue from purpleaidsettings 

    where Name ='salesHistory';

select  productbatchactive.batchNo , a.salesID, date_format(a.saleDate , '%d/%m/%Y') as saleDate, a.TotalAmount, a.Qty, a.FreeQty, a.saleRate, a.netRate, a.VAT, a.salesSAID
from returnregisterdetails 

left join(select sales.ID as salesID , sales.Date as saleDate,  salesproducts.TotalAmount, 
salesproducts.Qty, salesproducts.FreeQty,salesproducts.saleRate, salesproducts.netRate, salesproducts.VAT,
salesproducts.SAID as salesSAID , salesproducts.PBAID from sales 
left join salesproducts on salesproducts.saleID = sales.ID 
where sales.custID = custID and date_sub(current_date() , interval salesvalue month) < sales.Date) a
on a.salesSAID = returnregisterdetails.SAID
left join productbatchactive on productbatchactive.ID = a.PBAID
where returnregisterdetails.ID = rrdid  and productbatchactive.batchNo like returnregisterdetails.batchNo  ;

end if;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getCSProductList` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getCSProductList`(IN CID double,IN SID double,

 IN uid int,
 IN token varchar(30),
 IN viewPermissionID int,
 OUT status int


)
BEGIN
call purpleaid.sp_authorization(uid,  token, viewPermissionID , @auth_status);

set status= @auth_status;

if @auth_status = 2 then 

	Select 

c.ID as companyId,

c.Name as companyName,

c.edeCode as companyEdeCode,

c.Code as companyCode,

c.Remarks as companyRemarks,

c.AddrLine1 as companyAddressLine1,

c.AddrLine2 as companyAddressLine2,

c.City as companyCity,

c.ContactPerson as companyContactPerson,

c.Phone as companyPhone,

c.Fax as companyFax,

c.Email as companyEmail,

c.StockcMode as companyStockMode,

c.OrderLimit as companyOrderLimit,

c.PayTerms as companyPayterms,

c.flgActive as companyActiveFlag,

c.flgEmail as companyEmailFlag,

p.ID as productId,p.upcID,

p.Other as productOtherInfo,

p.Name as productName,

p.Description as productDescription,

p.Remark as productRemark,

p.Type as productType,p.Pack as productPack,

p.Box as productBox,

p.flgActive as productActiveFlag,

p.flgDPCO as productDPCO,

p.flgNarcotics as productNarcoticsFlag,

p.mrp,

s.ID as supplierId,

s.Other as supplierOtherInfo,

s.CID as supplierCompanyId,

s.Name as supplierName,

s.accCode as supplierAccCode,

s.accName as supplierAccName,

s.Remark as supplierRemark,

s.TaxID as supplierTaxId,

s.LedgerType as supplierLedgerType,

s.accGroup as supplierAccGroup,

s.OpeningBalance as supplierOpeningBalance,

s.OpeningBalanceTYpe as supplierOpeningBalanceType,

s.CreditPeriod as supplierCreditPeriod,

s.AddrLine1 as supplierAddrLine1,

s.AddrLine2 as supplierAddrLine2,

s.ContactPerson as supplierContactPerson,

s.Phone as supplierPhone,

s.Fax as supplierFax,

s.Email as supplierEmail,

s.DeliveryTime as supplierDeliveryTime,

s.flgActive as supplierActiveFlag,

s.flgOutState as supplierOutStateFlag,

s.flgEmail as supplierEmailFlag,

s.flgDefault as supplierDefaultFlag

from company c 

join supplier s 

on c.id = s.CID 

join product p 

on c.id = p.CID

where c.id = CID 

and s.id=SID;

end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getCustomerForRR` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getCustomerForRR`(

 IN uid int,
 IN token varchar(30),
 IN viewPermissionID int,
 OUT status int

)
BEGIN

-- --------------------------------------------------------------------------------------------------- --
-- --------------------------------------------------------------------------------------------------- --

-- Name : getCustomerForRR
-- Author : Nikita Pise
-- Date : 02 July 2015
-- Description : To retrieve all related records of Customer for Return Register( customer, area
-- 	 			 salesman ) 

-- ------------------------------------------CHANGE LOG ---------------------------------------------- --

-- VersionNo.        Date                 Change                                           Author
--        
--                                     
--                                      

-- --------------------------------------------------------------------------------------------------- --
-- --------------------------------------------------------------------------------------------------- --
 	call purpleaid.sp_authorization(uid,  token, viewPermissionID , @auth_status);

set status= @auth_status;

if @auth_status = 2 then 

select customer.ID as CustID, customer.Name as cname ,
area.description as areadescription ,area.ID as areaID , 
salesman.Name as SalesmanName, salesman.ID as salesmanID
from customer
left join area on area.ID = customer.Area  
left join salesman on salesman.ID = customer.Salesman 
order by customer.ID desc
;
end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getCustomerList` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getCustomerList`(
 IN uid int,
 IN token varchar(30),
 IN viewPermissionID int,
 OUT status int
)
BEGIN
 	call purpleaid.sp_authorization(uid,  token, viewPermissionID , @auth_status);

set status= @auth_status;

if @auth_status = 2 then 
select customer.ID as ID , customer.Name as cname from customer where customer.flgActive = 1;
end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getDefaultRoleList` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getDefaultRoleList`(
 IN  uid int,
 IN  token varchar(30),
 IN ViewpermissionID  int,
 OUT status int
)
BEGIN

call purpleaid.sp_authorization(uid,  token, ViewpermissionID , @auth_status);

 set status= @auth_status;

 if @auth_status = 2 then

       select securityrolemaster.Id as RoleId ,securityrolemaster.role as DefaultRole
		from securityrolemaster
       order by Role ;
       
	end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getDivisionList` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getDivisionList`(

 IN uid int,
 IN token varchar(30),
 IN viewPermissionID int,
 OUT status int
)
BEGIN

 	call purpleaid.sp_authorization(uid,  token, viewPermissionID , @auth_status);

set status= @auth_status;

if @auth_status = 2 then 

SELECT division.* , company.Name as divisionCompanyName 
from division join company on company.Id = division.CID 
where division.flgActive = 1
Order by division.Name;
end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getFinancialyearList` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getFinancialyearList`(

 IN uid int,
 IN token varchar(30),
 IN viewPermissionID int,
 OUT status int
)
BEGIN

call purpleaid.sp_authorization(uid,  token, viewPermissionID , @auth_status);

    set status= @auth_status;

    if @auth_status = 2 then 


		select financialyear.ID,
        
		(date_format(financialyear.FromYear,"%Y")) as FromYear,
        
		concat((date_format(financialyear.FromYear,"%Y")),'-',(date_format(financialyear.ToYear,"%y"))) as ToYear,
        
		financialyear.FlgLock, financialyear.FlgActive, ifnull(financialyear.RemarkLock,' ') as RemarkLock,
        
		ifnull(financialyear.RemarkActive,' ') as RemarkActive, date_format(financialyear.CreatedOn, '%d/%m/%Y %h:%i:%s') as CreatedOn ,
		
        financialyear.CreatedBy,
        
		concat( ifnull(contact.FirstName , '' ) , ' ' , ifnull(contact.LastName , '') ) as CreatedByUserName,
        
		date_format(financialyear.ModifiedOn, '%d/%m/%Y %h:%i:%s') as ModifiedOn,
        
		financialyear.ModifiedBy,
        
		concat( ifnull(contact.FirstName , '' ) , ' ' , ifnull(contact.LastName , '') ) as ModifiedByUserName
		 
		from contact
        
		 join financialyear on contact.id = financialyear.createdBy  and financialyear.ModifiedBy
         
		 where financialyear.CreatedBy = uid order by financialyear.ToYear desc;
         
	end if;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getGRproductList` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getGRproductList`(IN companyId double,
 IN uid int,
 IN token varchar(30),
 IN viewPermissionID int,
 OUT status int

)
BEGIN

-- --------------------------------------------------------------------------------------------------- --
-- --------------------------------------------------------------------------------------------------- --

-- Name : getGRproductList
-- Author : Nikita Pise
-- Date : 
-- Description : To retrieve all product related to given GR id
-- ------------------------------------------CHANGE LOG ---------------------------------------------- --

-- VersionNo.        Date                 Change                                           Author
-- 1.0           12 June 2015            Inserted "only active product condition"         Nikita Pise 
--                                       

-- --------------------------------------------------------------------------------------------------- --
-- --------------------------------------------------------------------------------------------------- --
	call purpleaid.sp_authorization(uid,  token, viewPermissionID , @auth_status);

set status= @auth_status;

if @auth_status = 2 then 

select p.ID as productId , p.Name as productName,
p.Pack as productPack, C.ID as companyId, C.Name as companyName, 
ifnull(view_stock.QtyAvailableTotal,0) as QtyAvailableTotal, 
ifnull(view_stock.FreeAvailableTotal,0) as FreeAvailableTotal,
ifnull(view_pendingorders.purchaseQtyAvlTotal,0) as purchaseQtyAvlTotal, 
ifnull(view_pendingorders.purchaseFreeAvlTotal,0) as purchaseFreeAvlTotal,
ifnull(view_stock.storageID,0) as storageID, 
ifnull(view_stock.receiptTypeID,0) as receiptTypeID,
pt.Description as productType,
view_product_contents.contentName as productContents,
 ifnull(tc.centralSalesTax,0) as CST ,
 ifnull(tc.localTax,0) as LT, 
 ifnull(tc.vatTax,0) as VAT ,
 tc.PurchaseVATChargeOn as vatChargeOn

from product p 
 left join producttype pt on p.Type = pt.ID 
left join taxtable tc on tc.ID = p.taxCodeID
left join company c on p.CID = c.ID
left join view_stock on p.ID = view_stock.PID 
left join view_pendingorders on p.ID = view_pendingorders.PID
left join view_product_contents on p.ID = view_product_contents.PID
where p.CID=companyId and p.flgActive = 1;
end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getGRsaleStatus` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getGRsaleStatus`(
IN goodrID double,
OUT saleFlag int

)
BEGIN

set saleFlag =0;

if exists(select ID from stockactive where grID = goodrID and (ifnull(QtySold , 0 ) > 0 or ifnull(FreeSold , 0 ) > 0)) then

set saleFlag = 1;

end if;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getLabelList` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getLabelList`(IN  uid  int,
 IN  token varchar(30),
 IN InsertpermissionID int,
 OUT status int)
BEGIN
call purpleaid.sp_authorization(uid,  token, InsertpermissionID , @auth_status);

    set status= @auth_status;

	if @auth_status = 2 then
    
    select label from contact where deleted = 0;
    
    end if;
    
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getMaxID` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getMaxID`(
 IN contTypeID double,
 IN userId double,
 IN lastID double,
 IN userName varchar(30),
 IN userLock INT(11),
 IN listLimit int,
 IN contHQ varchar(40),
 IN contArea double,
 IN contRoute double,
 IN contlabel varchar(40),
 IN contPhone varchar(40),
 IN contEmail varchar(60),
 IN contURL varchar(60),
 IN contactMyFavoritesFlag INT(11),
 IN contCity varchar(40),
 IN contDate varchar(40) ,
 IN contactName varchar(50),
 IN flgMyContact INT(11),
 IN contactSystemUser INT(11)
)
BEGIN

 set @showcontTypeID =contTypeID;
   
   if (contTypeID = 100 or contTypeID = 200 or contTypeID = 300) then 
  set @showcontTypeID =0;
   end if;

  set @strContactQuery = 'Select ';

set @strContactQuery = concat(@strContactQuery, ' contactlist.* , if (favouritecontacts.userID is null, 0,1)  as flgMyFavoriteNew ,if (contactlist.myContactID =  ', cast(userId as char) ,', 1, 0 ) as  flgMyContactNew , company.Name as companyName, entities.ID as EID, entities.Description as entityDescription,  entitydetails.ID as entityDetailsID , entitydetails.TypeID as entityDetailsTypeID,  entitydetails.Description as entityDetailsDescription ,contactdetails.deleted as deleted, contactdetails.CNID as contactDetailsCNID, contactdetails.ID as contactDetailsId, contactdetails.EDID as contactDetailsEDID, contactdetails.otherID as contactDetailsOtherID, contactdetails.detail1 as contactDetailsDetails1, contactdetails.detail2 as contactDetailsDetails2, contactdetails.detail3 as contactDetailsDetails3, contactdetails.detail4 as contactDetailsDetails4,contactdetails.detail5 as contactDetailsDetails5, contactdetails.detail6 as contactDetailsDetails6 from (select contact.* from  contact left join favouritecontacts on favouritecontacts.contactID = contact.ID where contact.ID > ' , cast(lastID as char) );

	if (contTypeID = 200) then -- favourites
      set @strContactQuery = concat(@strContactQuery, ' and  favouritecontacts.userID = ', cast(userId as char));
	end if;
   
	if (contTypeID = 100) then -- my contact
      set @strContactQuery = concat(@strContactQuery, ' and  contact.myContactID = ', cast(userId as char));
 	end if;
  
	if (contTypeID = 300) then -- system user
		set @strContactQuery = concat(@strContactQuery, ' and contact.userName is not null ');
 	end if;



 IF (length(userName) > 0) then 
 
 
         SET @strContactQuery = concat(@strContactQuery, ' AND lower(contact.userName) like "', lower(userName), '%"') ;
         
    end if; 
    
   
    
     IF userLock > 0  then 

         SET @strContactQuery = concat(@strContactQuery , ' AND contact.userLock = ' , cast(userLock as char)) ;
         
     end if; 
 
	
     
   IF @showcontTypeID > 0 then 

         SET @strContactQuery = concat(@strContactQuery , ' AND contact.contactTypeID = ' , cast(@showcontTypeID as char));
         
    end if; 
    
    IF flgMyContact > 0 then 

         SET @strContactQuery = concat(@strContactQuery ,' and  contact.myContactID = ', cast(userId as char));
         
    end if; 
       
 
          
    IF contactSystemUser = 1  then 

         SET @strContactQuery = concat(@strContactQuery ,' and contact.userName is not null');
         
    end if; 
   
    
  
  IF contArea > 0 then 

         SET @strContactQuery = concat(@strContactQuery , ' AND contact.Area =' , cast(contArea as char));
         
    end if; 
    
    IF contRoute > 0 then 

         SET @strContactQuery = concat(@strContactQuery , ' AND contact.Route = ' , cast(contRoute as char));
         
    end if; 
    
   
   IF (length(contHQ) > 0) then 

         SET @strContactQuery =concat( @strContactQuery , ' AND lower(contact.HQ) like "' , lower(contHQ) , '%"' );
         
    end if;     

    IF (length(contlabel) > 0) then 

         SET @strContactQuery =concat( @strContactQuery , ' AND lower(contact.label) like "%' , lower(contlabel) , '%"') ;
     
     end if;  
     
     IF (length(contactName) > 0 ) then 

         SET @strContactQuery = concat(@strContactQuery , ' AND lower(contact.FirstName + " "' , ' + contact.MiddleName " "' , ' + contact.LastName)  like "%' ,  lower(contactName) , '%" ') ;  
          end if; 
          
 
 SET @strContactQuery = concat(@strContactQuery , '  order by contact.ID asc  limit ', cast(listLimit as char), ') contactlist ');

set @strContacyDetailsQuery = concat('select * from contactdetails  where contactdetails.deleted != 1 '); 


 IF (length(contPhone) > 0) then 

         SET @strContacyDetailsQuery =concat(@strContacyDetailsQuery , ' AND (contactdetails.detail1 like "' , contPhone , '%" AND entities.ID = 3)') ;    
          end if;  
   
    IF (length(contURL) > 0 ) then 

         SET @strContacyDetailsQuery = concat(@strContacyDetailsQuery , ' AND (lower(contactdetails.detail1)  like "%' , lower(contURL) , '%" AND entities.ID = 6)') ;
          end if;  
         
   IF (length(contCity) > 0 ) then 

         SET @strContacyDetailsQuery = concat(@strContacyDetailsQuery , ' AND (lower(contactdetails.detail1)  like "' , lower(contCity) , '%" AND entities.ID = 2)') ;
          end if;  
         
      
   IF (length(contEmail) > 0 ) then 

         SET @strContacyDetailsQuery = concat(@strContacyDetailsQuery , ' AND (lower(contactdetails.detail1) like "' ,  lower(contEmail) , '%" AND entities.ID = 5)') ;
          end if;  
          
        
    set @strMainQuery = concat( @strContactQuery , ' left join ( ' , @strContacyDetailsQuery , ' ) contactdetails on contactlist.ID = contactdetails.CNID left join favouritecontacts on favouritecontacts.contactID = contactlist.ID  left join entitydetails on entitydetails.ID = contactdetails.EDID   left join entities on entities.ID = entitydetails.TypeID  left join company on company.ID = contactlist.companyID ');
   
      IF contactMyFavoritesFlag = 1 then 

         SET @strMainQuery = concat(@strMainQuery ,' where  favouritecontacts.userID = ', cast(userId as char));
         
    end if; 
  
  set @strMainQuery = concat( @strMainQuery , ' order by contactlist.ID asc , contactlist.FirstName asc, contactlist.LastName asc');

   PREPARE stmt FROM @strMainQuery ;
   Execute stmt ;
   deallocate prepare stmt;

 -- select @strMainQuery ;



END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getMenu` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getMenu`(IN UID int)
BEGIN
select distinct (userpermission.permissionID), 
permission.ID, permission.permission, permission.Description, 
menumaster.* from userpermission 
left join permission on permission.ID = userpermission.permissionID
left join menumaster on menumaster.PID = userpermission.permissionID
where permission.Type = 0 and permission.flgActive = 1 and userpermission.userID = UID


union 

SELECT null as permissionID, null as ID, null as permission,
null as Description , menumaster.* FROM purpleaid.menumaster 
where PID is null 
order by menu_id asc ;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getMyProfileDetails` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getMyProfileDetails`(
inout userid double,
in token varchar(30),
in viewPermissionID int,
out status int
)
BEGIN

call purpleaid.sp_authorization(userid,  token, viewPermissionID , @auth_status);

    set status= @auth_status;

	if @auth_status = 2 then 
    
		select
		contact.id as 'ContactID',
		
		ifnull(contact.FirstName,' ') as 'FirstName'  ,
		
		ifnull(contact.MiddleName , ' ') as 'MiddleName' ,
		
		ifnull(contact.LastName, ' ') as 'LastName'  ,
		
		ifnull(contact.JobTitle , ' ') as 'JobTitle',
		
		ifnull(contact.organization ,' ') as 'Organization',
		
		ifnull(entitydetails.Description, ' ') as 'ContactType'
		
		from entitydetails
		
		join contact on contact.contactTypeID = entitydetails.id where contact.id = userid;
	end if;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getNarrationList` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getNarrationList`(

IN  uid int,
 IN  token  varchar(30),
 IN ViewpermissionID int,
 OUT status  int

)
BEGIN

call purpleaid.sp_authorization(uid,  token, ViewpermissionID , @auth_status);

 set status= @auth_status;

 if @auth_status = 2 then
 
		 select ID as 'narrationID',
		 Narration from
		 narration 
		 order by Narration asc;
         
 end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getNearExpiryProductList` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getNearExpiryProductList`(
 IN uid int,
 IN token varchar(30),
 IN viewPermissionID int,
 OUT status int

)
BEGIN

  declare nearExpiry varchar(20);

	call purpleaid.sp_authorization(uid,  token, viewPermissionID , @auth_status);

    set status= @auth_status;

if @auth_status = 2 then 


  

    select value into nearExpiry from purpleaidsettings 

     where ID = 40;


select distinct PID,product.Name , product.Pack ,
company.ID as cID ,company.Name as companyName  
from stockactive 
left join product on product.ID = stockactive.PID
left join company on company.ID = product.CID 
left join productbatchactive on productbatchactive.ID = stockactive.PBAID
where (stockactive.QtyAvailable > 0 or stockactive.FreeAvailable > 0)
and datediff(productbatchactive.expiryDate , current_date()) between 0 and nearExpiry
order by product.Name ;


end if;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getNearExpiryProducts` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getNearExpiryProducts`(
 IN uid int,
 IN token varchar(30),
 IN viewPermissionID int,
 OUT status int

)
BEGIN


	call purpleaid.sp_authorization(uid,  token, viewPermissionID , @auth_status);

    set status= @auth_status;

    if @auth_status = 2 then 

		select distinct PID,product.Name , product.Pack ,
		company.ID as cID ,company.Name as companyName  ,
		productbatchactive.ID,batchNo, productbatchactive.MRP , productbatchactive.purchaseRate ,
		 productbatchactive.sellRate, sa.QtyAvailable , sa.FreeAvailable ,
		date_format(expiryDate , '%d/%m/%Y') as expiryDate,  sa.ID as SAID ,
		datediff(productbatchactive.expiryDate , current_date())  as Days_to_expiry,
		cast(datediff(productbatchactive.expiryDate , current_date()) as char) as DTE
		from stockactive sa
		left join product on product.ID = sa.PID
		left join company on company.ID = product.CID 
		left join productbatchactive on productbatchactive.ID = sa.PBAID
		where (sa.QtyAvailable > 0 or sa.FreeAvailable > 0)
		and datediff(productbatchactive.expiryDate , current_date()) <= 90 and productbatchactive.deleted = 0 
		order by Days_to_expiry asc ;

 end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getNotification` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getNotification`()
BEGIN
select notification.id, 
        
        notification.date ,
        
        notification.Priority , 
        
        
		notification.Notification,

		notification.flgactive 
 
		from notification 
 
		where   notification.Date<=curdate() and notification.flgactive=1   

		order by (notification.Priority) 
 
		 limit 10;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getPermission` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getPermission`(
 IN  uid  int,
 IN  token varchar(30),
 IN InsertpermissionID int,
 OUT status int 

)
BEGIN

call purpleaid.sp_authorization(uid,  token, InsertpermissionID , @auth_status);

    set status= @auth_status;

 if @auth_status = 2 then 

select permission.ID , permission.Permission ,permission.Type ,
permission.Description as permissionDescription,
permission.permissionGroupID,
permissiongroup.Description,permissiongroup.ID as groupID, userpermission.userID,
userpermission.userRoleID as userRoleID from permission 
left join userpermission on userpermission.permissionID = permission.ID 
left join permissiongroup on permissiongroup.ID = permission.permissionGroupID
order by permissiongroup.Description asc, permission.ID asc;

end if;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getPermissionForSysRole` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getPermissionForSysRole`(
 IN  uid  int,
 IN  token varchar(30),
 IN InsertpermissionID int,
 OUT status int 

)
BEGIN
	call purpleaid.sp_authorization(uid,  token, InsertpermissionID , @auth_status);

    set status= @auth_status;

	if @auth_status = 2 then 
    
    
    select permission.ID as permissionID , permission.Permission , permissiongroup.Description as permissionGroup
	from permission
	left join permissiongroup on permissiongroup.ID = permission.permissionGroupID where permission.flgActive =1;
 
 end if;
 
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getPO` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getPO`(IN `grDate` varchar(20), IN `grCompanyID` DOUBLE,
 IN uid int,
 IN token varchar(30),
 IN viewPermissionID int,
 OUT status int
)
    DETERMINISTIC
BEGIN

	declare pvalue varchar(20);
    call purpleaid.sp_authorization(uid,  token, viewPermissionID , @auth_status);

    set status= @auth_status;

    if @auth_status = 2 then 
    
    
    select value into pvalue from purpleaidsettings 

    where Name ='GR_PO_Window';

    

set @grDatedmy = str_to_date(grDate , '%d/%m/%Y');

  select po.ID as purchaseOrderId, po.OrderDate as purchaseOrderDate,
  pp.Scheme as productScheme,product.ID as productId, pp.Quantity as productQuantity from purchaseorder po 
  join purchaseproducts pp on po.ID = pp.CompanyOrderID
  join product on pp.PID = product.ID
  where 
  CAST(DATE_SUB(@grDatedmy, interval pvalue MONTH) AS DATE)  <= po.OrderDate
  and po.OrderDate <= cast(@grDatedmy as DATE)
  And po.CID = grCompanyID
  order by po.ID;
  
  end if;
     

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getProductBatch` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getProductBatch`(IN companyID double,
 IN uid int,
 IN token varchar(30),
 IN viewPermissionID int,
 OUT status int
)
BEGIN
call purpleaid.sp_authorization(uid,  token, viewPermissionID , @auth_status);

    set status= @auth_status;

    if @auth_status = 2 then 
    
select distinct pba.*, sa.PID as saPID , p.ID as PID ,
p.Name as productName,
 t.ID as TID ,
sa.ID as SAID,sa.Quantity as Quantity , sa.free as free ,
view_batch_stock.QtyAvailableTotal as Stock ,
view_batch_stock.FreeAvailableTotal as freeStock,

t.vatTax as VAT from productbatchactive pba
left join stockactive sa on sa.PBAID = pba.ID
left join product p on p.ID = sa.PID 
left join company c on c.ID = p.CID
left join taxtable t on t.ID = p.taxCodeID 
join view_batch_stock on view_batch_stock.SAID =  sa.ID
where view_batch_stock.QtyAvailableTotal != 0 and view_batch_stock.FreeAvailableTotal !=0 
and c.ID =companyID
order by pba.ID
;

end if;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getProductCreditNote` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getProductCreditNote`(

IN creditNoteID int,
IN customerid int,
IN fromDate varchar(40),
IN toDate varchar(40),
IN rrid int,
IN uid  int,
IN token varchar(30),
IN viewPermissionID int,
OUT status int,
OUT action int

)
BEGIN

declare custid double;
declare cnstatus int;
declare tempCnId double;

set custid = 0 ;
set cnstatus = 0;

call purpleaid.sp_authorization(uid,  token, viewPermissionID , @auth_status);

    set status= @auth_status;

 if @auth_status = 2 then 
    
    
    
    if creditNoteID = 0 then 
    
    set action = 1;
    
 
  set @strQuery = 'Select';

   set @strQuery = concat(@strQuery,  ' returnregisterdetails.flgRefundVAT ,  returnregisterdetails.lessPercentage  as lessPercentage , returnregisterdetails.lessAmount as lessAmount  , returnregisterdetails.CNrate as UseRate , returnregisterdetails.VATrefund as vatRefund ,  returnregisterdetails.CNreturnAmount as returnAmount ,  returnregisterdetails.expiryDate as expiry , returnregisterdetails.ID as RRDID, returnregisterdetails.QtyReturn as Qty , returnregisterdetails.FreeReturn as Free , returnregisterdetails.CNamt as CreditNoteAmount ,returnregisterdetails.CNvat as CreditNoteVat ,returnregisterdetails.CNremark as CreditNoteRemark,returnregisterdetails.batchNo,ifnull(product.MRP , 0) MRP , ifnull(product.PurchaseRate , 0)  PurchaseRate,  ifnull(product.SaleRate ,0) SaleRate, returnregister.ID as RRID ,returnregister.Date as rrDate, returnregisterdetails.productID as productID,product.Name as productName, product.Pack  as pack ,(returnregisterdetails.QtyReturn * product.SaleRate) as Amount,taxtable.flgSalesVATonFree , taxtable.SalesVATChargeOn , ifnull(taxtable.vatTax ,0) vatTax from returnregister left join returnregisterdetails on returnregisterdetails.RRID = returnregister.ID left join product on product.ID = returnregisterdetails.productID left join taxtable on taxtable.ID = product.taxCodeID where returnregister.custID = ' , cast(customerid as char) ,' and returnregisterdetails.CNID is NULL and returnregisterdetails.ID is not null ');


    else
    
 
          select creditnote.custID, creditnote.status into @custid , @cnstatus from creditnote 
       
           where creditnote.ID = creditNoteID;
        
          set custid = @custid, cnstatus = @cnstatus ;
         
        if cnstatus  = 1  then  -- available 
      
   set action = 2;
           
           set tempCnId = cast(creditNoteID as char);
        
            set @strQuery = 'Select';


    set @strQuery = concat(@strQuery,  '  * from (select 1 as cnType , ' , cast(creditNoteID as char) , ' as tempCnId    , date_format(creditnote.date , "%d/%m/%Y" ) cnDate ,				 date_format( creditnote.lockDate ,"%d/%m/%Y %h:%i:%s") as cnlockOn , creditnote.*,				  date_format( creditnote.ledgerDate ,"%d/%m/%Y %h:%i:%s") as cnledgerOn , date_format( creditnote.voidOn ,"%d/%m/%Y %h:%i:%s") as cnVoidOn ,				 date_format( creditnote.verifiedOn ,"%d/%m/%Y %h:%i:%s") as cnVerifiedOn , concat(c4.firstName , " " , c4.LastName ) as  VoidUser , 				 concat(c3.firstName , " " , c3.LastName ) as  VerifiedByUser , concat(c2.firstName , " " , c2.LastName ) as  ledgerUserName , 				 concat(c1.firstName , " " , c1.LastName ) as cnapprovedBy ,  concat(c.firstName , " " , c.LastName ) as lockUserName ,	 concat(contact.firstName , " " , contact.LastName ) as createdByName   from creditnote   left join contact on contact.ID = creditnote.createdBy  left join contact c on c.ID = creditnote.lockUser  left join contact c1 on c1.ID = creditnote.ApprovedBy 				 left join contact c2 on c2.ID = creditnote.ledgerUser 				 left join contact c3 on c3.ID = creditnote.verifiedBy 				 left join contact c4 on c4.ID = creditnote.voidBy 	 where creditnote.ID = '  , cast(creditNoteID as char) ,  ' ) creditnote				left join ( select '  , cast(creditNoteID as char) ,  ' as myCNID,				returnregisterdetails.flgRefundVAT as flgRefundVAT ,				 returnregisterdetails.lessPercentage  as lessPercentage , returnregisterdetails.lessAmount as lessAmount ,			returnregister.ID as RRID ,	 returnregisterdetails.CNrate as UseRate , returnregisterdetails.VATrefund as vatRefund , returnregisterdetails.CNreturnAmount as returnAmount ,				 date_format(returnregisterdetails.expiryDate ,  "%d/%m/%Y" ) as expiry, returnregisterdetails.ID as RRDID, ifnull(returnregisterdetails.QtyReturn , 0 ) as Qty ,				 ifnull(returnregisterdetails.FreeReturn ,0 ) as Free , returnregisterdetails.CNamt as CreditNoteAmount ,returnregisterdetails.CNvat as CreditNoteVat ,				 returnregisterdetails.CNremark as CreditNoteRemark,returnregisterdetails.batchNo as batchNO, ifnull(product.MRP , 0 ) as MRP , ifnull(product.PurchaseRate , 0) PurchaseRate, 				 ifnull(product.SaleRate , 0 ) SaleRate, returnregister.ID as returnregisterID ,date_format(returnregister.Date , "%d/%m/%Y" )as rrDate, 				 returnregisterdetails.productID as productID,product.Name as productName, product.Pack  as pack ,				   returnregisterdetails.CNID as CNID, customer.Name as custName  ,				 (ifnull(returnregisterdetails.QtyReturn , 0)  * ifnull(product.SaleRate, 0)) as productAmount,taxtable.flgSalesVATonFree ,				 taxtable.SalesVATChargeOn , ifnull(taxtable.vatTax, 0) as vatTax   from returnregisterdetails 				left join returnregister on returnregister.ID = returnregisterdetails.RRID				 left join product on product.ID = returnregisterdetails.productID 				 left join taxtable on taxtable.ID = product.taxCodeID 				 left join customer on customer.ID = returnregister.custID 				where returnregister.custID = ', cast(custid as char) , ' and (returnregisterdetails.CNID is null or returnregisterdetails.CNID = ' , cast(creditNoteID as char) , ' ) ) returnregisterdetails on returnregisterdetails.myCNID = ' , cast(creditNoteID as char) );

        
        
     /*set @strQuery = 'Select';


    set @strQuery = concat(@strQuery,  '   1 as cnType , ' , cast(creditNoteID as char) , ' as tempCnId  , date_format(creditnote.date , "%d/%m/%Y" ) cnDate , date_format( creditnote.lockDate ,"%d/%m/%Y %h:%i:%s") as cnlockOn , returnregisterdetails.flgRefundVAT , returnregisterdetails.lessPercentage  as lessPercentage , returnregisterdetails.lessAmount as lessAmount , returnregisterdetails.CNrate as UseRate , returnregisterdetails.VATrefund as vatRefund , returnregisterdetails.CNreturnAmount as returnAmount ,  date_format( creditnote.ledgerDate ,"%d/%m/%Y %h:%i:%s") as cnledgerOn , date_format( creditnote.voidOn ,"%d/%m/%Y %h:%i:%s") as cnVoidOn , date_format( creditnote.verifiedOn ,"%d/%m/%Y %h:%i:%s") as cnVerifiedOn , concat(c4.firstName , " " , c4.LastName ) as  VoidUser , concat(c3.firstName , " " , c3.LastName ) as  VerifiedByUser , concat(c2.firstName , " " , c2.LastName ) as  ledgerUserName ,  concat(c1.firstName , " " , c1.LastName ) as approvedBy ,  concat(c.firstName , " " , c.LastName ) as lockUserName , concat(contact.firstName , " " , contact.LastName ) as createdByName  , customer.Name as custName ,  returnregisterdetails.CNID , date_format(returnregisterdetails.expiryDate ,  "%d/%m/%Y" ) as expiry, returnregisterdetails.ID as RRDID, ifnull(returnregisterdetails.QtyReturn , 0 ) as Qty , ifnull(returnregisterdetails.FreeReturn ,0 ) as Free , returnregisterdetails.CNamt as CreditNoteAmount ,returnregisterdetails.CNvat as CreditNoteVat ,returnregisterdetails.CNremark as CreditNoteRemark,returnregisterdetails.batchNo, ifnull(product.MRP , 0 ) as MRP , ifnull(product.PurchaseRate , 0) PurchaseRate, ifnull(product.SaleRate , 0 ) SaleRate, returnregister.ID as RRID ,date_format(returnregister.Date , "%d/%m/%Y" )as rrDate, returnregisterdetails.productID as productID,product.Name as productName, product.Pack  as pack ,(ifnull(returnregisterdetails.QtyReturn , 0)  * ifnull(product.SaleRate, 0)) as Amount,taxtable.flgSalesVATonFree , taxtable.SalesVATChargeOn , ifnull(taxtable.vatTax, 0) as vatTax  ,creditnote.* from returnregisterdetails left join creditnote on returnregisterdetails.CNID = creditnote.ID left join returnregister on returnregister.ID = returnregisterdetails.RRID left join product on product.ID = returnregisterdetails.productID left join taxtable on taxtable.ID = product.taxCodeID left join customer on customer.ID = returnregister.custID left join contact on contact.ID = creditnote.createdBy left join contact c on c.ID = creditnote.lockUser left join contact c1 on c1.ID = creditnote.ApprovedBy left join contact c2 on c2.ID = creditnote.ledgerUser left join contact c3 on c3.ID = creditnote.verifiedBy left join contact c4 on c4.ID = creditnote.voidBy  where returnregister.custID = ', cast(custid as char) , ' and (returnregisterdetails.CNID = ' , cast(creditNoteID as char) , ' or returnregisterdetails.CNID is null) order by creditnote.ID desc ');
*/
    IF (length(fromDate) > 0) then 
    
      SET @strQuery = concat(@strQuery, ' and  returnregister.Date >=  str_to_date("', fromDate , '" ,"%d/%m/%Y") ') ;
      
    end if; 
    
    IF (length(toDate) > 0) then 
    
      SET @strQuery = concat(@strQuery, ' and  returnregister.Date <=  str_to_date("', toDate , '" ,"%d/%m/%Y") ') ;
      
    end if; 
    
      
    IF rrid > 0 then 
    
      SET @strQuery = concat(@strQuery, ' and returnregister.ID = ' , cast(rrid as char)) ;
      
    end if; 
                
                
        else -- applied
   
            set action = 2;
    
   set @strQuery = 'Select';


   set @strQuery = concat(@strQuery,  ' 1 as cnType , ' , cast(creditNoteID as char) , ' as tempCnId  , date_format(creditnote.date , "%d/%m/%Y" ) cnDate , date_format( creditnote.lockDate ,"%d/%m/%Y %h:%i:%s") as cnlockOn , returnregisterdetails.flgRefundVAT , returnregisterdetails.lessPercentage  as lessPercentage , returnregisterdetails.lessAmount as lessAmount , returnregisterdetails.CNrate as UseRate , returnregisterdetails.VATrefund as vatRefund , returnregisterdetails.CNreturnAmount as returnAmount ,  date_format( creditnote.ledgerDate ,"%d/%m/%Y %h:%i:%s") as cnledgerOn , date_format( creditnote.voidOn ,"%d/%m/%Y %h:%i:%s") as cnVoidOn , date_format( creditnote.verifiedOn ,"%d/%m/%Y %h:%i:%s") as cnVerifiedOn , concat(c4.firstName , " " , c4.LastName ) as  VoidUser , concat(c3.firstName , " " , c3.LastName ) as  VerifiedByUser , concat(c2.firstName , " " , c2.LastName ) as  ledgerUserName ,  concat(c1.firstName , " " , c1.LastName ) as approvedBy ,  concat(c.firstName , " " , c.LastName ) as lockUserName , concat(contact.firstName , " " , contact.LastName ) as createdByName  , customer.Name as custName ,  returnregisterdetails.CNID , date_format(returnregisterdetails.expiryDate ,  "%d/%m/%Y" ) as expiry, returnregisterdetails.ID as RRDID, ifnull(returnregisterdetails.QtyReturn , 0 ) as Qty , ifnull(returnregisterdetails.FreeReturn ,0 ) as Free , returnregisterdetails.CNamt as CreditNoteAmount ,returnregisterdetails.CNvat as CreditNoteVat ,returnregisterdetails.CNremark as CreditNoteRemark,returnregisterdetails.batchNo, ifnull(product.MRP , 0 ) as MRP , ifnull(product.PurchaseRate , 0) PurchaseRate, ifnull(product.SaleRate , 0 ) SaleRate, returnregister.ID as RRID ,date_format(returnregister.Date , "%d/%m/%Y" )as rrDate, returnregisterdetails.productID as productID,product.Name as productName, product.Pack  as pack ,(ifnull(returnregisterdetails.QtyReturn , 0)  * ifnull(product.SaleRate, 0)) as Amount,taxtable.flgSalesVATonFree , taxtable.SalesVATChargeOn , ifnull(taxtable.vatTax, 0) as vatTax ,creditnote.* from creditnote left join returnregisterdetails on returnregisterdetails.CNID = creditnote.ID left join returnregister on returnregister.ID = returnregisterdetails.RRID left join product on product.ID = returnregisterdetails.productID left join taxtable on taxtable.ID = product.taxCodeID left join customer on customer.ID = returnregister.custID left join contact on contact.ID = creditnote.createdBy left join contact c on c.ID = creditnote.lockUser left join contact c1 on c1.ID = creditnote.ApprovedBy left join contact c2 on c2.ID = creditnote.ledgerUser left join contact c3 on c3.ID = creditnote.verifiedBy left join contact c4 on c4.ID = creditnote.voidBy  where creditnote.ID = ', cast(creditNoteID as char) );







 
    end if;
    
    end if;
    
    PREPARE stmt FROM @strQuery ;
    Execute stmt ;
    deallocate prepare stmt;
   select @strQuery ;
  
  end if;
  
   

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getProductCreditNoteOld` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getProductCreditNoteOld`(
IN creditNoteID int,
IN custID int,
IN fromDate varchar(40),
IN toDate varchar(40),
IN rrid int,
IN uid  int,
IN token varchar(30),
IN viewPermissionID int,
OUT status int

)
BEGIN

call purpleaid.sp_authorization(uid,  token, viewPermissionID , @auth_status);

    set status= @auth_status;

	if @auth_status = 2 then 

 
  set @strQuery = 'Select';


 set @strQuery = concat(@strQuery,  ' returnregisterdetails.expiry as expiry , returnregisterdetails.ID as RRDID, returnregisterdetails.QtyReturn as Qty , returnregisterdetails.FreeReturn as Free , returnregisterdetails.CNamt as CreditNoteAmount ,returnregisterdetails.CNvat as CreditNoteVat ,returnregisterdetails.CNremark as CreditNoteRemark,returnregisterdetails.batchNo,product.MRP , product.PurchaseRate , product.SaleRate , returnregister.ID as RRID ,returnregister.Date as rrDate, returnregisterdetails.productID as productID,product.Name as productName, product.Pack  as pack ,(returnregisterdetails.QtyReturn * product.SaleRate) as Amount,taxtable.flgSalesVATonFree , taxtable.SalesVATChargeOn , taxtable.vatTax,creditnote.* from creditnote left join returnregisterdetails on returnregisterdetails.CNID = creditnote.ID left join returnregister on returnregister.ID = returnregisterdetails.RRID left join product on product.ID = returnregisterdetails.productID left join taxtable on taxtable.ID = product.taxCodeID where creditnote.ID = ', cast(creditNoteID as char) ,  ' or NULL and returnregister.custID = ', cast(custID as char));

 
	IF (length(fromDate) > 0) then 
 
         SET @strQuery = concat(@strQuery, ' and  returnregister.Date >=  str_to_date("', fromDate , '" ,"%d/%m/%Y") ') ;
         
    end if; 
    
    IF (length(toDate) > 0) then 
 
         SET @strQuery = concat(@strQuery, ' and  returnregister.Date <=  str_to_date("', toDate , '" ,"%d/%m/%Y") ') ;
         
    end if; 
    
         
    IF rrid > 0 then 
 
         SET @strQuery = concat(@strQuery, ' and returnregister.ID = ' , cast(rrid as char)) ;
         
    end if; 

 /*PREPARE stmt FROM @strQuery ;
    Execute stmt ;
    deallocate prepare stmt;
*/
   select @strQuery ;

end if;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getProductListForStockAudit` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getProductListForStockAudit`(

IN companyArray varchar(300),
IN divisionArray varchar(300),
IN productTypeArray varchar(300),
IN uid  int,
IN  token  varchar(30),
IN ViewpermissionID int,
OUT status  int
)
BEGIN

call purpleaid.sp_authorization(uid,  token, ViewpermissionID , @auth_status);

 set status= @auth_status;

 if @auth_status = 2 then

 set @str = 'select ';
    
  set @str = concat( @str,' product.id as "productID" , ifnull(product.name ," ") as "ProductName", productbatchactive.id as "ProductBatchID" , ifnull(productbatchactive.batchNo , " ")  as "ProductBatchName", company.id as "CompanyID", ifnull(company.name, " ") as "compamyName" , division.id as "divisionId",  ifnull(division.name, " ") as "DivisionName", producttype.id as "ProductTypeId" , ifnull(producttype.description, " ") as "ProductTypeName",   stockactive.QtyAvailable from stockactive join productbatchactive on stockactive.PBAID = productbatchactive.ID join product on stockactive.pid = product.id join company on product.CID = company.id join division on product.DID = division.id  join producttype on product.type = producttype.id where company.id  IN( ',  companyArray , ') or division.id IN(' , divisionArray , ') or product.type IN(', productTypeArray , ')  and  stockactive.QtyAvailable > 0' );
  set @str = concat(@str, ' order by product.id , productbatchactive.id ' );
 
    PREPARE stmt FROM @str ;
 Execute stmt ;
 deallocate prepare stmt;
 select @str ;
end if;


END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getProductPO` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getProductPO`(

-- --------------------------------------------------------------------------------------------------- --
-- --------------------------------------------------------------------------------------------------- --

-- Name : getProductPO
-- Author : Nikita Pise
-- Date : 
-- Description : To retrieve all PO for product which are present in given GR
-- ------------------------------------------CHANGE LOG ---------------------------------------------- --

-- VersionNo.        Date                 Change                                           Author
-- 1.0           12 June 2015            Inserted condition for                          Nikita Pise 
--                                      "PO which are not void (status!=99)"        
--                                       

-- --------------------------------------------------------------------------------------------------- --
-- --------------------------------------------------------------------------------------------------- --


IN `grDate` varchar(20), 
IN `grID` DOUBLE,
 IN uid int,
 IN token varchar(30),
 IN viewPermissionID int,
 OUT status int

  )
BEGIN

	declare pvalue varchar(20);
    
call purpleaid.sp_authorization(uid,  token, viewPermissionID , @auth_status);

    set status= @auth_status;

    if @auth_status = 2 then 
    
    select value into pvalue from purpleaidsettings 
    where Name ='GR_PO_Window';

	set @grDatedmy = str_to_date(grDate , '%d/%m/%Y');
    set @fromDate = DATE_SUB(@grDatedmy , interval pvalue MONTH);
  
 select po.ID as POID, si.PID as siPID , si.ID as SIID  , 
  
  po.OrderDate as poOrderDate, po.OrderAmt as poOrderAmt, 
  
  (ifnull(view_poproduct_received.sum , 0 ) - ifnull(sipo.Quantity , 0) ) as QuantityReceivedOther,
 
 pp.Scheme as productScheme , pp.Quantity as productQuantity,
 
 ifnull(sipo.Quantity , 0) as sipoQuantity

from 
( select * from stockinward where stockinward.grID = grID and stockinward.deleted = 0) 

si

join purchaseproducts pp on pp.PID = si.PID

join purchaseorder po on po.ID = pp.CompanyOrderID

left join view_poproduct_received on (view_poproduct_received.PID = si.PID and view_poproduct_received.POID = po.ID  and view_poproduct_received.SIID = si.ID )

 left join stockinwardpolink sipo on (sipo.GRID = grID  and sipo.SIID = si.ID and sipo.POID = po.ID and sipo.PID = si.PID)

 where 
 ((@fromDate  <= po.OrderDate) and (po.OrderDate <= @grDatedmy) )
 and po.goodsReceived != 2 
 and ifnull(po.status,0) != 99

order by po.ID , pp.PID, si.ID;
  end if;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getProductTypeList` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getProductTypeList`(
 IN uid  int,
  IN  token  varchar(30),
 IN ViewpermissionID int,
 OUT status  int
)
BEGIN

call purpleaid.sp_authorization(uid,  token, ViewpermissionID , @auth_status);

 set status= @auth_status;

 if @auth_status = 2 then

		select producttype.id as "typeId" ,
		ifnull(producttype.description," ") as "ProductType" from producttype;
end if;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getPurchaseHistory` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getPurchaseHistory`(IN poLimit INT , IN productId double,
 IN uid int,
 IN token varchar(30),
 IN viewPermissionID int,
 OUT status int

)
BEGIN
call purpleaid.sp_authorization(uid,  token, viewPermissionID , @auth_status);

    set status= @auth_status;

    if @auth_status = 2 then 
 
 SELECT 
        `po`.`ID` AS `POID`,
        `p`.`ID` AS `PID`,
        `p`.`Name` AS `productName`,
         ifnull(`po`.`OrderDate`,'00-00-0000') AS `poDate`,
        `po`.`SID` AS `supplierId`,
        ifnull(`pp`.`Quantity`,0) AS `quantity`,
        ifnull(`pp`.`Scheme`,0) AS `free`,
        ifnull(`pb`.`MRP`,0) AS `MRP`,
        ifnull(`pb`.`purchaseRate`,0) AS `purchaseRate`,
        ifnull(`pb`.`tradeDiscount`,0) AS `tradeDiscount`,
        ifnull(`pb`.`tradeDiscountAmt`,0) AS `tradeDiscountAmt`,
        ifnull(`pb`.`specialDiscount`,0) AS `specialDiscount`,
        ifnull(`pb`.`specialDiscountAmt`,0) AS `specialDiscountAmt`,
        `gr`.`ID` AS `GRID`,
        ifnull(`gr`.`goodsReceiptDate`,'00-00-0000') AS `grDate`
    FROM
        (((((`purchaseorder` `po`
        JOIN `purchaseproducts` `pp` ON ((`pp`.`CompanyOrderID` = `po`.`ID`)))
        LEFT JOIN `stockinward` `si` ON ((`pp`.`PID` = `si`.`PID`)))
        LEFT JOIN `productbatch` `pb` ON ((`si`.`PBID` = `pb`.`ID`)))
        LEFT JOIN `goodsreceived` `gr` ON ((`gr`.`ID` = `pb`.`grID`)))
        LEFT JOIN `product` `p` ON ((`p`.`ID` = `pp`.`PID`)))
        where pp.PID = productId
    ORDER BY `gr`.`goodsReceiptDate` DESC , gr.ID desc
    LIMIT poLimit ;
end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getRateDifferenCreditNote` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getRateDifferenCreditNote`(
IN CNID double,
IN  uid  int,
IN  token varchar(30),
IN InsertpermissionID int,
OUT status int 	

)
BEGIN


call purpleaid.sp_authorization(uid,  token, InsertpermissionID , @auth_status);

    set status= @auth_status;

 if @auth_status = 2 then 


SELECT  
salesproducts.Qty , salesproducts.FreeQty,
salesproducts.discount as DiscountType, 
salesproducts.TotalAmount as TotalAmt ,
salesproducts.productAmount as Amount ,
salesproducts.productVATAmount as VATamount,
salesproducts.VAT as VAT ,
creditnoteratedifferenceproduct.InvoiceNo,
date_format(creditnoteratedifferenceproduct.InvoiceDate, "%d/%m/%Y") as InvoiceDate, 
product.Name as productName,productbatchactive.batchNo ,
"SYSTEM" as cnCreadtedByName,
creditnote.remark as cnRemark,
creditnote.Type as cnType , 
creditnote.custID as cnCustID,
 date_format(creditnote.date , "%d/%m/%Y") as cnDate , creditnote.status as cnStatus , 
 creditnote.statusDecription , creditnote.TypeDescription , 
 date_format(creditnote.CreatedOn , "%d/%m/%Y %H:%i:%s")  as cnCreatedOn ,
 
 concat(c6.firstName , " " , c6.LastName ) as cnLedgerUserName , 
 date_format( creditnote.ledgerDate ,"%d/%m/%Y %h:%i:%s") as cnLedgertime ,
 creditnote.flgLedgerLock,
creditnote.flgApproved , creditnote.ledgerUser,
concat( concat(c.FirstName , ' ' , c.LastName ) , '  ' ,
date_format(creditnote.ApprovedOn , "%d/%m/%Y %H:%i:%s") ) as approvedDetails ,
creditnote.lockUser as cnlockuserID,

concat(c1.FirstName , ' ' , c1.LastName ) as cnlockName, 
date_format(creditnote.ApprovedOn , "%d/%m/%Y %H:%i:%s") as cnLockdatetime, 


creditnote.flgLock, creditnoteratedifference.*  
FROM purpleaid.creditnoteratedifference
left join creditnote on creditnote.ID = creditnoteratedifference.CNID 
left join contact c on c.ID = creditnote.ApprovedBy
left join contact c1 on c1.ID = creditnote.lockUser
left join contact c6 on c6.ID = creditnote.ledgerUser
left join product on product.ID = creditnoteratedifference.PID
left join productbatchactive on productbatchactive.ID  = creditnoteratedifference.PBAID
left join creditnoteratedifferenceproduct  on creditnote.Id = creditnoteratedifferenceproduct.CNID
left join salesproducts on salesproducts.ID = creditnoteratedifferenceproduct.SPID 
where creditnote.ID = CNID;

end if;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getReasonListForCN` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getReasonListForCN`(

IN uid  int,
IN token varchar(30),
IN viewPermissionID int,
OUT status int

)
BEGIN

 call purpleaid.sp_authorization(uid,  token, viewPermissionID , @auth_status);

    set status= @auth_status;

 if @auth_status = 2 then 
 
 select ID , Reason from reason where flgCreditNote = 1;
 
 end if;
 

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getRoleList` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getRoleList`(
 IN uid int,
 IN token varchar(30),
 IN viewPermissionID int,
 OUT status int 

)
BEGIN

call purpleaid.sp_authorization(uid,  token, viewPermissionID , @auth_status);

set status= @auth_status;

if @auth_status = 2 then 

select securityrolemaster.*, permission.Permission as permission  , permission.Type , permission.Description ,
permission.ID as PermissionID from securityrolemaster
left join rolepermission on rolepermission.roleID = securityrolemaster.ID
left join permission on permission.ID = rolepermission.permissionID
where securityrolemaster.flgActive =1 order by securityrolemaster.Role asc , permission.ID asc;


end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getRolePermissionForAdvSetting` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getRolePermissionForAdvSetting`(
 IN userid int,
 IN uid int,
 IN token varchar(30),
 IN viewPermissionID int,
 OUT status int 

)
BEGIN
call purpleaid.sp_authorization(uid,  token, viewPermissionID , @auth_status);

    set status= @auth_status;

	if @auth_status = 2 then 
    
select securityrolemaster.Role , securityrolemaster.ID as roleID , rolepermission.permissionID 
,if(a.userRoleID is null , 0 , 1) as isRolePermission
from rolepermission 
right join securityrolemaster on rolepermission.roleID = securityrolemaster.ID 
left join (select distinct userpermission.userRoleID 
 from userpermission
where userpermission.userID = userid ) a on a.userRoleID =  securityrolemaster.ID
where securityrolemaster.flgActive = 1
order by securityrolemaster.ID asc , rolepermission.permissionID asc;


end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getRR` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getRR`(
IN custId double,
IN lastId double,
IN listlimit  int,
IN fromDate varchar(40),
IN toDate varchar(40)  ,
IN creditNoteId double,
IN status double,
IN fromAmt double,
IN toAmt double,
IN createdByFilterId double
)
BEGIN

 set @strQuery = 'Select ';

set @strQuery = concat(@strQuery, 'rrlist.*,customer.Name as custName , concat( ifnull(c.FirstName , " " ) , " " , ifnull(c.LastName , " ") ) as VerifiedByUserName,concat( ifnull(c1.FirstName , " " ) , " " , ifnull(c1.LastName , " ") ) as CreatedByUserName,  returnregisterdetails.ID as returnregisterdetailsID , returnregisterdetails.RRID as returnregisterdetailsRRID,returnregisterdetails.SAID as returnregisterdetailsSAID , returnregisterdetails.productID as returnregisterdetailsPID , returnregisterdetails.CCID as returnregisterdetailsCCID,returnregisterdetails.Amount as returnregisterdetailsAmount , returnregisterdetails.conditions as returnregisterdetailsCondition , returnregisterdetails.Remark as returnregisterdetailsRemark,returnregisterdetails.batchNo as returnregisterdetailsBatchNo , returnregisterdetails.MRP as returnregisterdetailsMRP , returnregisterdetails.purchaseRate as returnregisterdetailsPurchaseRate,returnregisterdetails.sellRate as returnregisterdetailsSellRate , returnregisterdetails.Qty as returnregisterdetailsQty , returnregisterdetails.expiryDate as returnregisterdetailsExpiryDate ,companyclaim.ID as companyClaimID ,product.Name as productName ,product.pack as productPack from ( select returnregister.* from returnregister ');

  
    IF custId = -1  then   -- all

         SET @strQuery = concat(@strQuery , ' where  returnregister.ID > ' , cast(lastID as char)) ;
         
     end if; 
 
	IF custId > 0 then -- customer

         SET @strQuery = concat(@strQuery , ' where returnregister.custID = ', cast(custID as char) ,' and returnregister.ID > ' , cast(lastID as char)) ;
         
     end if; 
 
    IF custId = 0 then -- self

         SET @strQuery = concat(@strQuery , ' where returnregister.Type = 2 and returnregister.ID > ' , cast(lastID as char)) ;
         
     end if; 
     

	IF (length(fromDate) > 0) then 
 
         SET @strQuery = concat(@strQuery, ' and  returnregister.Date >=  str_to_date("', fromDate , '" ,"%d/%m/%Y") ') ;
         
    end if; 
    
    IF (length(toDate) > 0) then 
 
         SET @strQuery = concat(@strQuery, ' and  returnregister.Date <=  str_to_date("', toDate , '" ,"%d/%m/%Y") ') ;
         
    end if; 
    
    IF creditNoteId = 2 then 
 
         SET @strQuery = concat(@strQuery, ' and returnregister.creditNoteID is null') ;
         
    end if; 
    
      IF creditNoteId = 1 then 
 
         SET @strQuery = concat(@strQuery, ' and returnregister.creditNoteID is not null') ;
         
     end if; 
     
         
      IF status > 0 then 
 
         SET @strQuery = concat(@strQuery, ' and returnregister.status = ' , cast(status as char)) ;
         
     end if; 
     
      IF fromAmt > 0  then 
 
         SET @strQuery = concat(@strQuery, ' and returnregister.Total >= ' , cast(fromAmt as char)) ;
         
     end if; 
     
     
      IF toAmt > 0  then 
 
         SET @strQuery = concat(@strQuery, ' and returnregister.Total <= ' , cast(toAmt as char)) ;
         
     end if;
     
     IF createdByFilterId > 0  then 
 
         SET @strQuery = concat(@strQuery, ' and returnregister.createdByID = ' , cast(createdByFilterId as char)) ;
         
     end if;
    
     SET @strQuery = concat(@strQuery, ' limit ', cast(listLimit as char), ' ) rrlist left join returnregisterdetails on rrlist.ID = returnregisterdetails.RRID left join companyclaim on companyclaim.ID = returnregisterdetails.CCID left join product on product.ID = returnregisterdetails.productID  left join contact c on c.ID = rrlist.verifiedByID left join contact c1 on c1.ID = rrlist.createdByID left join customer on customer.ID = rrlist.custID') ;

	PREPARE stmt FROM @strQuery ;
   Execute stmt ;
   deallocate prepare stmt;

 -- select @strQuery ;
	




END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getRRList` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getRRList`(
IN custId double,
IN lastId double,
IN listlimit  int,
IN fromDate varchar(40),
IN toDate varchar(40)  ,
IN creditNoteId double,
IN status double,
IN fromAmt double,
IN toAmt double,
IN createdByFilterId double
)
BEGIN

 set @strQuery = 'Select ';

set @strQuery = concat(@strQuery, 'rrlist.*, date_format(rrlist.Date ,"%d/%m/%Y") as rrDate, customer.Name as custName , concat( ifnull(c.FirstName , " " ) , " " , ifnull(c.LastName , " ") ) as VerifiedByUserName,concat( ifnull(c1.FirstName , " " ) , " " , ifnull(c1.LastName , " ") ) as CreatedByUserName,  returnregisterdetails.ID as returnregisterdetailsID ,returnregisterdetails.deleted as deleted, returnregisterdetails.RRID as returnregisterdetailsRRID,returnregisterdetails.SAID as returnregisterdetailsSAID , returnregisterdetails.productID as returnregisterdetailsPID , returnregisterdetails.CCID as returnregisterdetailsCCID,returnregisterdetails.Amount as returnregisterdetailsAmount , returnregisterdetails.conditions as returnregisterdetailsCondition , returnregisterdetails.Remark as returnregisterdetailsRemark,returnregisterdetails.batchNo as returnregisterdetailsBatchNo , returnregisterdetails.MRP as returnregisterdetailsMRP , returnregisterdetails.purchaseRate as returnregisterdetailsPurchaseRate,returnregisterdetails.sellRate as returnregisterdetailsSellRate , returnregisterdetails.Qty as returnregisterdetailsQty , date_format(returnregisterdetails.expiryDate , "%d/%m/%Y" )as returnregisterdetailsExpiryDate,companyclaim.ID as companyClaimID ,product.Name as productName ,product.pack as productPack from ( select returnregister.* from returnregister');

  
    IF custId = -1  then   -- all

         SET @strQuery = concat(@strQuery , ' where  returnregister.ID > ' , cast(lastID as char)) ;
         
     end if; 
 
	IF custId > 0 then -- customer

         SET @strQuery = concat(@strQuery , ' where returnregister.custID = ', cast(custID as char) ,' and returnregister.ID > ' , cast(lastID as char)) ;
         
     end if; 
 
    IF custId = 0 then -- self

         SET @strQuery = concat(@strQuery , ' where returnregister.Type = 2 and returnregister.ID > ' , cast(lastID as char)) ;
         
     end if; 
     

	IF (length(fromDate) > 0) then 
 
         SET @strQuery = concat(@strQuery, ' and  returnregister.Date >=  str_to_date("', fromDate , '" ,"%Y-%m-%d") ') ;
         
    end if; 
    
    IF (length(toDate) > 0) then 
 
         SET @strQuery = concat(@strQuery, ' and  returnregister.Date <=  str_to_date("', toDate , '" ,"%Y-%m-%d") ') ;
         
    end if; 
    
    IF creditNoteId = 2 then 
 
         SET @strQuery = concat(@strQuery, ' and returnregister.creditNoteID is null') ;
         
    end if; 
    
      IF creditNoteId = 1 then 
 
         SET @strQuery = concat(@strQuery, ' and returnregister.creditNoteID is not null') ;
         
     end if; 
     
         
      IF status > 0 then 
 
         SET @strQuery = concat(@strQuery, ' and returnregister.status = ' , cast(status as char)) ;
         
     end if; 
           IF fromAmt > 0  then 
 
         SET @strQuery = concat(@strQuery, ' and returnregister.Total >= ' , cast(fromAmt as char)) ;
         
     end if; 
     
     
      IF toAmt > 0  then 
 
         SET @strQuery = concat(@strQuery, ' and returnregister.Total <= ' , cast(toAmt as char)) ;
         
     end if;
     
     IF createdByFilterId > 0  then 
 
         SET @strQuery = concat(@strQuery, ' and returnregister.createdByID = ' , cast(createdByFilterId as char)) ;
         
     end if;
    
    
     SET @strQuery = concat(@strQuery, ' limit ', cast(listLimit as char), ' ) rrlist left join (select * from returnregisterdetails left join returnregister on returnregister.ID = returnregisterdetails.RRID  where returnregisterdetails.deleted =0 )left join companyclaim on companyclaim.ID = returnregisterdetails.CCID left join product on product.ID = returnregisterdetails.productID  left join contact c on c.ID = rrlist.verifiedByID left join contact c1 on c1.ID = rrlist.createdByID left join customer on customer.ID = rrlist.custID  order by rrlist.ID asc, returnregisterdetails.ID asc ') ;

	PREPARE stmt FROM @strQuery ;
   Execute stmt ;
   deallocate prepare stmt;

select @strQuery ;
	




END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getRRListNew` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getRRListNew`(
IN custId double,
IN lastId double,
IN listlimit  int,
IN fromDate varchar(40),
IN toDate varchar(40)  ,
IN creditNoteId double,
IN status1 double,
IN fromAmt double,
IN toAmt double,
IN createdByFilterId double,
 IN uid int,
 IN token varchar(30),
 IN viewPermissionID int,
 OUT status int

)
BEGIN
call purpleaid.sp_authorization(uid,  token, viewPermissionID , @auth_status);

    set status= @auth_status;

    if @auth_status = 2 then 
 set @strQuery = 'Select ';

 set @strQuery = concat(@strQuery, 'rrlist.*,date_format(rrlist.createdOn , "%d/%m/%Y %H:%i:%s") as  returnregistercreatedOn, date_format(rrlist.verifiedOn , "%d/%m/%Y %H:%i:%s") as  returnregisterverifiedOn, date_format(rrlist.Date ,"%d/%m/%Y") as rrDate from  ( select returnregister.* ,customer.Name as custName , concat( ifnull(c.FirstName , " " ) , " " , ifnull(c.LastName , " ") ) as VerifiedByUserName,concat( ifnull(c1.FirstName , " " ) , " " , ifnull(c1.LastName , " ") ) as CreatedByUserName , stockactive.ID as SAID, stockactive.QtyAvailable , stockactive.FreeAvailable, returnregisterdetails.ID as returnregisterdetailsID ,returnregisterdetails.deleted as deleted, returnregisterdetails.RRID as returnregisterdetailsRRID,returnregisterdetails.SAID as returnregisterdetailsSAID , returnregisterdetails.productID as returnregisterdetailsPID , returnregisterdetails.conditionName as returnRegisterProductConditionName, returnregisterdetails.CCID as returnregisterdetailsCCID, returnregisterdetails.Amount as returnregisterdetailsAmount , returnregisterdetails.conditions as returnregisterdetailsCondition , returnregisterdetails.Remark as returnregisterdetailsRemark,returnregisterdetails.batchNo as returnregisterdetailsBatchNo , returnregisterdetails.MRP as returnregisterdetailsMRP , returnregisterdetails.purchaseRate as returnregisterdetailsPurchaseRate, returnregisterdetails.sellRate as returnregisterdetailsSellRate , returnregisterdetails.Qty as returnregisterdetailsQty , date_format(returnregisterdetails.expiryDate , "%d/%m/%Y" )as returnregisterdetailsExpiryDate,companyclaim.ID as companyClaimID ,CAST(companyclaim.ID AS CHAR) as CCID , product.Name as productName ,product.pack as productPack from returnregister left join  (select * from returnregisterdetails where deleted =0 ) returnregisterdetails on returnregister.ID = returnregisterdetails.RRID  left join stockactive on stockactive.ID = returnregisterdetails.SAID  left join companyclaim on companyclaim.ID = returnregisterdetails.CCID left join product on product.ID = returnregisterdetails.productID  left join contact c on c.ID = returnregister.verifiedByID left join contact c1 on c1.ID = returnregister.createdBy left join customer on customer.ID = returnregister.custID '); 
 
    IF custId = -1  then   -- all

         SET @strQuery = concat(@strQuery , ' where  returnregister.ID > ' , cast(lastID as char)) ;
         
    end if; 
 
	IF custId > 0 then -- customer

         SET @strQuery = concat(@strQuery , ' where returnregister.custID = ', cast(custID as char) ,' and returnregister.ID > ' , cast(lastID as char)) ;
         
    end if; 
 
    IF custId = 0 then -- self

         SET @strQuery = concat(@strQuery , ' where returnregister.Type = 2 and returnregister.ID > ' , cast(lastID as char)) ;
         
    end if; 
     

	IF (length(fromDate) > 0) then 
 
         SET @strQuery = concat(@strQuery, ' and  returnregister.Date >=  str_to_date("', fromDate , '" ,"%d/%m/%Y") ') ;
         
    end if; 
    
    IF (length(toDate) > 0) then 
 
         SET @strQuery = concat(@strQuery, ' and  returnregister.Date <=  str_to_date("', toDate , '" ,"%d/%m/%Y") ') ;
         
    end if; 
    
    IF creditNoteId = 2 then 
 
         SET @strQuery = concat(@strQuery, ' and returnregister.creditNoteID is null') ;
         
    end if; 
    
    IF creditNoteId = 1 then 
 
         SET @strQuery = concat(@strQuery, ' and returnregister.creditNoteID is not null') ;
         
    end if; 
     
         
    IF status1 > 0 then 
 
         SET @strQuery = concat(@strQuery, ' and returnregister.status = ' , cast(status1 as char)) ;
         
    end if; 
     
    IF fromAmt > 0  then 
 
         SET @strQuery = concat(@strQuery, ' and returnregister.Total >= ' , cast(fromAmt as char)) ;
         
    end if; 
     
     
    IF toAmt > 0  then 
 
         SET @strQuery = concat(@strQuery, ' and returnregister.Total <= ' , cast(toAmt as char)) ;
         
    end if;
     
    IF createdByFilterId > 0  then 
 
         SET @strQuery = concat(@strQuery, ' and returnregister.createdBy = ' , cast(createdByFilterId as char)) ;
         
    end if;
    
 SET @strQuery = concat(@strQuery, ' limit ', cast(listLimit as char), ' ) rrlist  order by rrlist.ID desc ') ;

	PREPARE stmt FROM @strQuery ;
    Execute stmt ;
    deallocate prepare stmt;

 select @strQuery ;
	end if;


END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getSalesmanList` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getSalesmanList`(
IN uid int,
IN token varchar(30),
IN viewPermissionID int,
OUT status int

)
BEGIN

call purpleaid.sp_authorization(uid,  token, viewPermissionID , @auth_status);

    set status= @auth_status;

    if @auth_status = 2 then 


		select salesman.id as 'SalesmanID', 
		salesman.name as 'SalesmanName' from salesman order by salesman.name asc;
        
	end if;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getSalesmanReceiptList` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getSalesmanReceiptList`(
IN sid int,
IN rid int,
IN lastID int,
In listLimit int,
IN uid double,
IN token varchar(30),
IN viewPermissionID int,
OUT status int 

)
BEGIN
declare andCondition int;

call purpleaid.sp_authorization(uid,  token, viewPermissionID , @auth_status);

    set status= @auth_status;

    if @auth_status = 2 then 


set @strQuery = 'Select ';

set @strQuery = concat(@strQuery, ' managereceipt.id as "receiptID" ,	managereceipt.salesmanID,ifnull(salesman.Name,"" )  as "salesmanName" ,date_format(managereceipt.date , "%d/%m/%Y") as ReceiptDate,   managereceipt.ReceiptFrom, managereceipt.ReceiptTo, managereceipt.Remark,managereceipt.IssuedBy ,  date_format(managereceipt.IssuedOn, "%d/%m/%Y %T") as IssuedOn, concat( ifnull(contact.FirstName , "" ) , " " , ifnull(contact.LastName , "") ) as "IssuedByUserName" from managereceipt left join salesman on  salesman.id = managereceipt.SalesmanID left join contact on contact.id = issuedBy  where managereceipt.id > ',  cast(lastID as char) );
set andCondition = 0 ;

 IF sid > 0 then 
 
 
         SET @strQuery = concat(@strQuery, ' and managereceipt.salesmanID  = ' , cast(sid as char)) ;
         
      -- set  andCondition = andCondition + 1;
     end if; 


 IF rid > 0 then 
 
         SET @strQuery = concat(@strQuery , ' and ' , cast(rid as char) , ' BETWEEN  managereceipt.ReceiptFrom and managereceipt.ReceiptTo ' ) ;
         
     end if; 
     
     
      set @strQuery = concat(@strQuery, '  order by managereceipt.id asc , managereceipt.date desc ' , ' limit ' , cast(listLimit as char));
    PREPARE stmt FROM @strQuery ;
   Execute stmt ;
   deallocate prepare stmt;

  select @strQuery ;
end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getStockActiveDetails` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getStockActiveDetails`(
 IN uid int,
 IN token varchar(30),
 IN viewPermissionID int,
 OUT status int

)
BEGIN

call purpleaid.sp_authorization(uid,  token, viewPermissionID , @auth_status);

    set status= @auth_status;

    if @auth_status = 2 then 
select 
p.ID as productId, p.Name as productName , p.flgActive as productActiveFlag,
p.flgLock as productLockFlag , p.DID as productDivisionID ,
p.taxCodeID as productTaxCodeId,

t.TaxDescription as taxDescription , t.vatTax as taxVaT ,

d.Name as divisionName , 

pba.ID as productBatchActiveID,
pba.batchNo as productBatchName,
pba.MRP as productBatchActiveMRP, pba.purchaseRate as productBatchActivePurchaseRate,
pba.sellRate as productBatchActiveSellRate ,pba.tradeDiscount as productBatchActiveTradeDiscount,
pba.tradeDiscountAmt as productBatchActiveTradeDiscountAmt,
pba.specialDiscount as productBatchActiveSpecialDiscount, pba.specialDiscountAmt as productBatchActiveSpecialDiscountAmt,
pba.flgActive as productBatchActiveFlagActive,
pba.flgLock as productBatchActiveLockFlag,

sa.Quantity as stockActiveQuantity,
sa.QtyAvailable as  stockActiveQuantityAvaiable,
sa.QtySold as stockActiveQuantitySold,

sa.free as stockActiveFree,
sa.FreeAvailable as stockActiveFreeAvailable,
sa.FreeSold as stockActiveFreeSold,

sa.ID as stockActiveId

from stockactive sa
join productbatchactive pba on (sa.grID = pba.grID and sa.PBAID = pba.ID)
join product p on p.ID = sa.PID
join taxtable t on t.ID = p.taxCodeID
join division d on d.ID = p.DID

where sa.QtyAvailable > 0 or sa.FreeAvailable >0 
order by p.Name , pba.batchNo 
; 
 end if;
 

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getStockAuditCompanyList` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getStockAuditCompanyList`(

IN SAID double,
IN  uid  int,
IN  token  varchar(30),
IN ViewpermissionID int,
OUT status  int 

)
BEGIN

call purpleaid.sp_authorization(uid,  token, viewPermissionID , @auth_status);

    set status= @auth_status;

    if @auth_status = 2 then 
    
		select -- stockauditcompany.auditID as "AuditID" ,
        stockauditcompany.CID as "companyID" , ifnull(company.name," ") as "companyName",
		stockauditcompany.DID as "DivisionID" , ifnull(division.name," ") as "DivisionName" 
        from stockauditcompany
        join stockauditmaster on stockauditmaster.id = stockauditcompany.auditID
        left join company on company.id = stockauditcompany.CID
        left join division on division.id = stockauditcompany.DID 
        where stockauditmaster.id = SAID order by stockauditmaster.id desc, stockauditcompany.CID asc;
        
    end if;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getStockAuditList` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getStockAuditList`(

in lastID double,
IN listLimit  int,
IN SAID double,
IN Soutcome int ,
IN Sresult int,
IN SLockSale int ,
IN frmDate varchar(30),
IN toDate varchar(30),
IN  uid  int,
IN  token  varchar(30),
IN ViewpermissionID int,
OUT status  int 

)
BEGIN

call purpleaid.sp_authorization(uid,  token, viewPermissionID , @auth_status);

    set status= @auth_status;

    if @auth_status = 2 then 
    
		set @str = 'select ';
     
		set @str = concat(@str , ' stockauditmaster.ID , date_format(stockauditmaster.AuditDate, "%d/%m/%Y" ) as "auditdate" , ifnull(stockauditmaster.AuditLabel,"") as "auditLabel" , stockauditmaster.AuditSnapshot , date_format(stockauditmaster.SnapshotCreatedOn,"%d/%m/%Y %r") as  "SnapshotCreatedOn", stockauditmaster.Result , stockauditmaster.OutCome , stockauditmaster.FlgSaleLock as "salelock", stockauditmaster.FlgSaleLockHistory, stockauditmaster.FlgAuditLock ,  stockauditmaster.FlgDataEntryLock , stockauditmaster.AuditTotalQuantity as "AuditTotalQuantity", stockauditmaster.SystemTotalQuantity as "SystemTotalQuantity",stockauditmaster.MissMatchTotalQuantity as "MissMatchTotalQuantity", concat(stockauditmaster.ProductSelected , "/" ,stockauditmaster.TotalProduct ) as " ProductStock",  stockauditmaster.TotalProduct as "TotalProduct", stockauditmaster.ProductSelected as "ProductSelected", stockauditmaster.TotalBatch  as "TotalBatch", stockauditmaster.BatchSelected as "BatchSelected", concat(stockauditmaster.BatchSelected , "/" ,stockauditmaster.TotalBatch) as "BatchStock", stockauditmaster.FindproductSelected , ifnull(stockauditmaster.AuditRemark, " ") as "AuditRemark" , stockauditmaster.PhysicalStockEntry , stockauditmaster.SelectLockDataEntry , stockauditmaster.CreatedBy , concat( ifnull(contact.FirstName , " ") , " " , ifnull(contact.LastName , " ") ) as "StockAuditCreatedByUserName", date_format(stockauditmaster.SnapshotCreatedOn,"%d/%m/%Y  %h:%m:%s") as "stockAuditCreatedOn"  , ifnull(stockauditmaster.auditEnteredBy , "") as "AuditEnteredBy" from stockauditmaster left join contact on contact.id = stockauditmaster.CreatedBy where stockauditmaster.ID >=  ' , cast(lastID as char));
        
        if SAID > 0 then 
        
			set @str = concat(@str,' and stockauditmaster.ID = ' , cast(SAID as char));
            
		end if;
        
        
        if Soutcome > -1 then
        
			set @str = concat(@str, ' and stockauditmaster.OutCome = ' , cast(Soutcome as char));
            
		end if;
        
        if Sresult > -1 then
		
			set @str = concat(@str, ' and stockauditmaster.Result = ' , cast(Sresult as char));
	
		end if;
        
		if SLockSale > -1 then
			
            set @str = concat(@str, ' and stockauditmaster.FlgSaleLock = ' , cast(SLockSale as char));
		
        end if;
        
        if frmDate > 0 then 
		
			set @str = concat(@str, ' and stockauditmaster.AuditDate >= str_to_date ("', frmDate, '" ,"%d/%m/%Y")');
		
        end if;
  
		if toDate > 0 then 
			
            set @str = concat(@str, ' and stockauditmaster.AuditDate <= str_to_date ("', toDate, '" ,"%d/%m/%Y")');
		
        end if;
     
  
       set @str = concat(@str, ' order by stockauditmaster.ID desc ' , ' limit ' , cast(listLimit as char)); 
       
	prepare stmt from @str;
	execute stmt;
	deallocate prepare stmt;
	select @str;
        
    
    end if;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getStockAuditProductList` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getStockAuditProductList`(

IN SAID double,
IN  uid  int,
IN  token  varchar(30),
IN ViewpermissionID int,
OUT status  int

)
BEGIN

call purpleaid.sp_authorization(uid,  token, viewPermissionID , @auth_status);

    set status= @auth_status;

    if @auth_status = 2 then 


	select stockauditproduct.AuditID as "AuditID" ,
    stockauditproduct.PID as "productID"  , 
    ifnull(product.name," ") as "productName" ,stockauditproduct.PBID as "PBID"  ,
	ifnull(productbatchactive.batchNo," ") as "batchName",
    company.id as "CompanyID",
 ifnull(company.name, " ") as "compamyName" , division.id as "divisionId",  
 ifnull(division.name, " ") as "DivisionName",
    stockauditproduct.AuditQuantity as "AuditQuantity", 
    stockauditproduct.SystemQuantity as "SystemQuantity", 
	stockauditproduct.MissMatchQuantity as "MissMatchQuantity",  
    ifnull(stockauditproduct.Remark, "") as "ProductRemark",
	ifnull(stockauditproduct.AuditBy," ") as AuditByName ,
    stockauditproduct.IsProductBatchSelected from stockauditproduct 
    
    left join stockauditmaster on stockauditproduct.AuditID = stockauditmaster.ID 
	left join product on product.id = stockauditproduct.PID  
    join company on company.id = product.CID
    join division on division.id = product.did 
	left join productbatchactive on productbatchactive.id = stockauditproduct.PBID  
    where stockauditproduct.AuditID = SAID order by stockauditproduct.AuditID desc ,
    stockauditproduct.PID asc ,  stockauditproduct.PBID asc ; 
	end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getStockAuditProductTypeList` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getStockAuditProductTypeList`(

IN SAID double,
IN  uid  int,
IN  token  varchar(30),
IN ViewpermissionID int,
OUT status  int 

)
BEGIN

call purpleaid.sp_authorization(uid,  token, viewPermissionID , @auth_status);

    set status= @auth_status;

    if @auth_status = 2 then 
    
		select stockauditproducttype.AuditID as "AuditID" ,
        stockauditproducttype.ProductTypeID as "ProductTypeID", 
        producttype.description as "productTypeName" from stockauditproducttype
        
        
        left join stockauditmaster on stockauditproducttype.AuditID = stockauditmaster.ID 
		left join producttype on producttype.ID = stockauditproducttype.ProductTypeID   
        where stockauditproducttype.AuditID = SAID order by stockauditproducttype.AuditID desc ,
        stockauditproducttype.AuditID asc ;
    
    end if;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getStockBatches` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getStockBatches`(IN companyID double,
 IN uid int,
 IN token varchar(30),
 IN viewPermissionID int,
 OUT status int
)
BEGIN
call purpleaid.sp_authorization(uid,  token, viewPermissionID , @auth_status);

    set status= @auth_status;

    if @auth_status = 2 then 
select distinct pba.ID as ID, 
 pba.batchNo as batchNo, 
 pba.grID as grID,
 pba.PBID as PBID ,
 date_format(pba.expiryDate, '%d/%m/%Y') as expiryDate,
 ifnull(pba.MRP,0) as MRP,
 ifnull(pba.trade,0)  as trade,
 ifnull(pba.purchaseRate,0) as purchaseRate,
 pba.purchaseDate  as purchaseDate,
 ifnull(pba.tradeDiscount,0) as tradeDiscount,
 ifnull(pba.tradeDiscountAmt,0) as tradeDiscountAmt,
 ifnull(pba.specialDiscountAmt,0) as specialDiscountAmt,
 ifnull(pba.specialDiscount,0) as specialDiscount,
 ifnull(pba.sellRate,0) as sellRate,
 pba.Remark as Remark,
 -- ifnull(pba.Expiry,0) as Expiry, moved in new log table batchstockadjustments
 -- ifnull(pba.Breakage,0) as Breakage,
 -- ifnull(pba.CoTransfer,0) as CoTransfer,
 pba.flgActive as flgActive, 
 pba.flgLock  as flgLock ,
 pba.CreatedBy as CreatedBy,
 pba.CreatedOn as CreatedOn,
 pba.ModifiedBy as ModifiedBy,
 pba.ModifiedOn  as ModifiedOn, 
 pba.deleted as deleted,
 
 sa.PID as saPID , p.ID as PID ,
 c.ID as CID,
p.Name as productName, p.Pack as Pack, 
d.ID as DID , d.Name as divisionName,
t.ID as TID ,
sa.ID as SAID, sa.Quantity as Quantity , sa.free as free ,
view_batch_stock.QtyAvailableTotal as Stock ,
view_batch_stock.FreeAvailableTotal as freeStock,
t.vatTax as VAT, t.TaxDescription as taxDescription,

if(ifnull(bs.ID , 0) , 'YES', 'NO') as scheme
-- case when bs.ID then 'NO' else 'YES' end 

 from productbatchactive pba
left join stockactive sa on sa.PBAID = pba.ID
left join product p on p.ID = sa.PID 
left join company c on c.ID = p.CID
join division d on d.ID = p.DID
left join batchscheme bs on bs.PBAID = pba.ID 
left join taxtable t on t.ID = p.taxCodeID 
join view_batch_stock on view_batch_stock.SAID =  sa.ID
where (view_batch_stock.QtyAvailableTotal != 0 or view_batch_stock.FreeAvailableTotal !=0 )
and c.ID = companyID
order by p.Name , pba.batchNo ;

end if;


END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getStockProduct` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getStockProduct`(IN companyId double,

 IN uid int,
 IN token varchar(30),
 IN viewPermissionID int,
 OUT status int

)
BEGIN

call purpleaid.sp_authorization(uid,  token, viewPermissionID , @auth_status);

    set status= @auth_status;

    if @auth_status = 2 then 


select distinct sa.PID as saPID , p.ID as PID ,c.ID as CID,
p.Name as productName, 
p.flgActive as productActiveFlag,
p.flgLock as productLockFlag,
d.ID as DID , d.Name as divisionName,
 t.ID as TID ,
sa.ID as SAID,
sum(sa.Quantity) as Quantity , 
sum(sa.free) as free ,
sum(sa.QtyAvailable) as Stock ,
sum(sa.FreeAvailable) as freeStock,
t.vatTax as VAT, t.TaxDescription as taxDescription,

if(ifnull(bs.ID , 0) , 'YES', 'NO') as scheme

from
stockactive sa 
left join product p on p.ID = sa.PID 
left join company c on c.ID = p.CID
left join division d on d.ID = p.DID
left join batchscheme bs on bs.PBAID = sa.PBAID 
left join taxtable t on t.ID = p.taxCodeID 
where  ( sa.QtyAvailable != 0 or sa.FreeAvailable !=0 ) 
and c.ID = companyId
group by p.Name ;

end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getSupplierBycompany` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getSupplierBycompany`(
 IN uid int,
 IN token varchar(30),
 IN viewPermissionID int,
 OUT status int

)
BEGIN
call purpleaid.sp_authorization(uid,  token, viewPermissionID , @auth_status);

    set status= @auth_status;

    if @auth_status = 2 then 


select c.Name as companyName ,c.ID as CID , s.Name as supplierName, s.ID as SID from  company c 
left join supplier s on s.CID = c.ID order by c.ID ;

end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getSupplierList` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getSupplierList`(
 IN uid int,
 IN token varchar(30),
 IN viewPermissionID int,
 OUT status int


)
BEGIN
call purpleaid.sp_authorization(uid,  token, viewPermissionID , @auth_status);

    set status= @auth_status;

    if @auth_status = 2 then 

select s.ID as supplierId,IFNULL(s.Other, '' ) as supplierOtherInfo,s.CID 
as supplierCompanyId,s.Name as supplierName,IFNULL(s.accCode, '' )
 as supplierAccCode,IFNULL(s.accName, '' ) 
 as supplierAccName,IFNULL(s.Remark, '' )
 as supplierRemark,IFNULL(s.TaxID, '' ) 
 as supplierTaxId,IFNULL(s.LedgerType, '' ) 
 as supplierLedgerType,IFNULL(s.accGroup, '' ) 
 as supplierAccGroup,IFNULL(s.OpeningBalance, '' )
 as supplierOpeningBalance,IFNULL(s.OpeningBalanceTYpe, '' )
 as supplierOpeningBalanceType,IFNULL(s.CreditPeriod, '' ) 
 as supplierCreditPeriod,IFNULL(s.AddrLine1, '' ) 
 as supplierAddrLine1,IFNULL(s.AddrLine2, '' ) 
 as supplierAddrLine2,IFNULL(s.ContactPerson, '' )
 as supplierContactPerson,IFNULL(s.Phone, '' ) 
 as supplierPhone,IFNULL(s.Fax, '' )
 as supplierFax,IFNULL(s.Email, '' ) as supplierEmail,IFNULL(s.DeliveryTime, '' )
 as supplierDeliveryTime,IFNULL(s.flgActive, '' ) as supplierActiveFlag,IFNULL(s.flgOutState, '' )
 as supplierOutStateFlag,IFNULL(s.flgEmail, '' ) as supplierEmailFlag,s.flgDefault as supplierDefaultFlag,
 c.id as cityId,c.Name cityName,c.flgActive as cityActiveFlag,s.ID stateId,
 s.Name stateName,s.flgActive as stateActiveFlag,company.Name as supplierCompanyName from supplier s 

join city c on s.City=c.id 
join state st on c.State=st.ID
 join company on s.CID=company.ID
  where s.flgActive = 1
 ORDER BY s.Name ASC;
 
 end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getSystemRoles` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getSystemRoles`(
 IN  uid  int,
 IN  token varchar(30),
 IN InsertpermissionID int,
 OUT status int 

)
BEGIN

call purpleaid.sp_authorization(uid,  token, InsertpermissionID , @auth_status);

    set status= @auth_status;

	if @auth_status = 2 then 
    
   
(select securityrolemaster.Description , securityrolemaster.flgActive , securityrolemaster.Role ,securityrolemaster.ID as roleID , rolepermission.permissionID , 0 as userID from securityrolemaster
left join rolepermission on securityrolemaster.ID = rolepermission.roleID where securityrolemaster.flgActive = 1 ) 
union
(select  securityrolemaster.Description , 1 as flgActive , securityrolemaster.Role as role , securityrolemaster.ID as roleID , 0 as permissionID , userpermission.userID from securityrolemaster 
left join userpermission on securityrolemaster.ID = userpermission.userRoleID where securityrolemaster.flgActive = 1  )

order by roleID asc,permissionID asc, userID asc ;


end if;


END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getSystemRoles2` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getSystemRoles2`(

 IN  uid  int,
 IN  token varchar(30),
 IN InsertpermissionID int,
 OUT status int 

)
BEGIN

call purpleaid.sp_authorization(uid,  token, InsertpermissionID , @auth_status);

    set status= @auth_status;

	if @auth_status = 2 then 

select * from (
select NULL as flgActive , NULL as role , userpermission.userRoleID as roleID , 0 as permissionID , userpermission.userID from securityrolemaster 
left join userpermission on securityrolemaster.ID = userpermission.userRoleID where securityrolemaster.flgActive = 1 order by securityrolemaster.ID asc) b;

end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getTransporterList` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getTransporterList`(
 IN uid int,
 IN token varchar(30),
 IN viewPermissionID int,
 OUT status int 

)
BEGIN
call purpleaid.sp_authorization(uid,  token, viewPermissionID , @auth_status);

set status= @auth_status;

if @auth_status = 2 then 

select * from transporter;

end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getUser` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getUser`(

IN uid int,
 IN token varchar(30),
 IN viewPermissionID int,
 OUT status int
)
BEGIN
call purpleaid.sp_authorization(uid,  token, viewPermissionID , @auth_status);

set status= @auth_status;

if @auth_status = 2 then 

select   contact.ID as userID , 
contact.label , contact.userName as userName, entitydetails.Description ,
contact.flgStaff , contact.organization , 
concat(contact.FirstName , ' ' , contact.LastName) as FullName from contact 
left join entitydetails on entitydetails.ID = contact.contactTypeID
where deleted = 0 order by FullName asc
;


end if;



END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getUserLog` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getUserLog`( 
IN lastID int,
IN listLimit double,
inout userid int(11),
in token varchar(30),
in viewPermissionID int,
out status int
)
BEGIN

declare andCondition int;


call purpleaid.sp_authorization(userid,  token, viewPermissionID , @auth_status);

    set status= @auth_status;

	if @auth_status = 2 then 
    
		set @strQuery = 'select' ;
		
		set @strQuery = concat(@strQuery, ' userlog.ID as "userLogID" , userlog.userID  as "contactID" , SUBSTRING_INDEX(SUBSTRING_INDEX(userlog.loginDate , " " ,1) ," ", -1)  as "LoginDate" ,  SUBSTRING_INDEX(SUBSTRING_INDEX(userlog.loginDate , " " , 2)," ", -1) as  "LoginTime" , ifnull(userlog.IP,0) as "IPaddress"  from contact left join userlog on contact.id = userlog.userID  where contact.id = userid  and  userlog.ID > ', cast(lastID as char) );
		set andCondition = 0 ;
        
		set @strQuery = concat(@strQuery, ' order by userlog.ID  asc , userlog.loginDate desc' , ' limit ',  cast(listLimit as char));
		   
		   PREPARE stmt FROM @strQuery ;
		   Execute stmt ;
		   deallocate prepare stmt;

		  select @strQuery ;
    
	end if;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getUserPermissions` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getUserPermissions`(
IN userID double
)
BEGIN

 select permission.* , securityrolemaster.ID as securityRoleID , securityrolemaster.Role as  securityRole
 from userpermission
 left join contact on contact.ID = userpermission.userID 
 left join  securityrolemaster on securityrolemaster.ID = userpermission.userRoleID
 left join permission on permission.ID = userpermission.permissionID 
 where contact.ID = 1 and permission.flgActive = 1
 and permission.Type = 'Menu';
 


END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getUserPermissionsOld` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getUserPermissionsOld`(
IN userID double
)
BEGIN

 select permission.* , securityrolemaster.ID as securityRoleID , securityrolemaster.Role as  securityRole
 from userpermission
 left join contact on contact.ID = userpermission.userID 
 left join  securityrolemaster on securityrolemaster.ID = userpermission.userRoleID
 left join permission on permission.ID = userpermission.permissionID 
 where contact.ID = userID and permission.flgActive = 1
 and permission.Type = 'Menu';
 


END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getUserRoleList` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getUserRoleList`(
in uid int,
IN token varchar(30),
IN viewPermissionID int,
OUT status int
)
BEGIN
call purpleaid.sp_authorization(uid,  token, viewPermissionID , @auth_status);

    set status= @auth_status;

 if @auth_status = 2 then 
select distinct 
    userpermission.userID as 'contactID',
    contact.userName as 'userID',
    userpermission.userRoleID ,
    ifnull(securityrolemaster.Role,' ') as 'UserRole' 
    from userpermission
    join securityrolemaster on userpermission.userRoleID = securityrolemaster.ID
    join contact on contact.id = userpermission.userID where contact.id = uid
    and securityrolemaster.flgActive = 1;
end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getUserRolePermissionList` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getUserRolePermissionList`(
IN userid int,
 IN uid int,
 IN token varchar(30),
 IN viewPermissionID int,
 OUT status int 

)
BEGIN

call purpleaid.sp_authorization(uid,  token, viewPermissionID , @auth_status);

set status= @auth_status;

if @auth_status = 2 then 

select permissiongroup.Description  as permissionGroupDescription, permission.ID as permissionID ,
b.ID as UPID,
permission.permission as permission,permission.permissionGroupID,
permission.Type as permissionType, b.userID, b.userRoleID,
if( b.userID is null , 0 ,1) as permissionFlag from  permission 
left  join (select * from userpermission where  userpermission.userID = userid ) b 
on b.permissionID = permission.ID
left join permissiongroup on permissiongroup.ID = permission.permissionGroupID
order by  permission.ID asc ;

end if;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `InsertActiveUsers` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `InsertActiveUsers`(
INOUT activeUID int,
IN userid int,
OUT activetoken varchar(50)
 


)
BEGIN

insert into activeusers (

ID, token, userID, createdOn , ModifiedOn



)

values (

activeUID , rand() , userid , now() , now()

);
set activeUID = last_insert_id();
set activetoken = (select token from activeusers where ID = activeUID);

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `insertBatchStockAdjustments` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `insertBatchStockAdjustments`(
IN batchStckAdjustmentsId double,
IN batchStckAdjustmentsPBAID double,
IN batchStckAdjustmentsExpiry	double,
IN batchStckAdjustmentsBreakage double,
IN batchStckAdjustmentsCoTransfer double,
IN batchStckAdjustmentsRemark varchar(60),
IN uid  int,
IN token varchar(30),
IN InsertpermissionID int,
OUT status int 

)
BEGIN

if batchStckAdjustmentsId = 0 then -- insert

	call purpleaid.sp_authorization(uid,  token, InsertpermissionID , @auth_status);

    set status= @auth_status;

	if @auth_status = 2 then 
    
		    INSERT INTO batchstockadjustments

		         (

						ID, 
                        PBAID,
                        expiry,
                        breakage,
                        coTransfer,
                        Remark,
                        CreatedBy,
                        CreatedOn
					

		         )

		    VALUES 

		          ( 
	
						 batchStckAdjustmentsId ,
						 batchStckAdjustmentsPBAID ,
						 batchStckAdjustmentsExpiry	,
						 batchStckAdjustmentsBreakage ,
						 batchStckAdjustmentsCoTransfer ,
						 batchStckAdjustmentsRemark,
						 uid,
						 now()
					             

                     );
		end if;
        
end if;



END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `insertCL` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `insertCL`(IN `clID` DOUBLE,
 IN `customerId` DOUBLE,
 IN `customerLicenceType` VARCHAR(30), 
 IN `customerLicenceNumber` DOUBLE,
 IN `customerLicenceStartDate` VARCHAR(10),
 IN `customerLicenceEndDate` VARCHAR(10),
 IN customerLicenceIndex DOUBLE,
 IN  uid  int,
 IN  token varchar(30),
 IN InsertpermissionID int,
 OUT status int 
 )
    DETERMINISTIC
BEGIN 


if clID = 0 then -- insert

	call purpleaid.sp_authorization(uid,  token, InsertpermissionID , @auth_status);

    set status= @auth_status;

	if @auth_status = 2 then 
		   
           INSERT INTO customerlicences

		         (

						ID,

					   CustomerID, 

					   licenceType, 

					   customerNumber,

					   LicenceStartDate, 

					   LicenceEndDate,
                       CLindex
                       

					

		         )

		    VALUES 

		         ( 

		           clID,

					customerId ,

					customerLicenceType    , 

					

					customerLicenceNumber,

					str_to_date(customerLicenceStartDate , '%d/%m/%Y') ,

					str_to_date(customerLicenceEndDate , '%d/%m/%Y') ,
                    customerLicenceIndex

					             

                     );

                		end if;
        
end if; 

			END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `InsertCompanyPurchaseOrder` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `InsertCompanyPurchaseOrder`(
INOUT `cpoId` DOUBLE,
 IN `cpoCompanyId` DOUBLE,
 IN `cpoSupplierId` DOUBLE,
 IN `cpoMrId` DOUBLE,
 IN cpoDate VARCHAR(20),
 IN `cpoAmount` DOUBLE,
 IN `cpoRemark` VARCHAR(60),
 IN `cpoEmailFlag` INT(11),
 IN `cpoCancelPending` INT(11),
 IN `cpoSchemeFlag` INT(11),
 IN `cpoUrgentFlag` INT(11), 
 IN `cpoVoidFlag` INT(11),
 IN `cpoVoidText` VARCHAR(45),
 IN  uid  int,
 IN  token varchar(30),
 IN InsertpermissionID int,
 IN UpdatepermissionID int,
 IN DeletepermissionID int,
 IN changeDatePermissionID int,
 OUT status1 int ,
 IN cpostatus int
 )
BEGIN 
-- declare oldFlgActive int;
-- declare cpodate varchar(90);

if cpoId = 0 then -- insert

	call purpleaid.sp_authorization(uid,  token, InsertpermissionID , @auth_status);

    set status1 = @auth_status;

	if @auth_status = 2 then 

    INSERT INTO purchaseorder

    (

        ID,  

        CID, 

        SID, 

        MID, 

        OrderDate, 

        OrderAmt,

        Remark, 

        flgEmail,

        flgCancelPending, 

        flgScheme, 

        flgUrgent,

        flgVoid,

        VoidReason,
        CreatedBy,
        CreatedOn,
        status
        
           
     )

      VALUES 

      ( 
            cpoId ,

            cpoCompanyId    , 

            cpoSupplierId  ,

            cpoMrId    , 

            str_to_date(cpoDate , '%d/%m/%Y') ,

            cpoAmount  ,

            cpoRemark    ,

            cpoEmailFlag , 

            cpoCancelPending,

            cpoSchemeFlag   , 

            cpoUrgentFlag , 

            cpoVoidFlag   ,     

            cpoVoidText ,
            uid,
            now(),
            cpostatus

                

        );
    
    set cpoId = LAST_INSERT_ID();

end if;
set cpoId = LAST_INSERT_ID();
    ELSE

     
/*
select flgVoid into oldFlgActive from purchaseorder where ID = cpoId ;

 SELECT OrderDate into cpodate FROM purpleaid.purchaseorder where  ID = cpoId ;
 
if (oldFlgActive != cpoVoidFlag ) AND cpoVoidFlag = 1 then 

 call purpleaid.sp_authorization(uid,  token, DeletepermissionID ,  @auth_status);
 

 else if (cpodate !=  str_to_date(cpoDate , '%d/%m/%Y')) then 
 
 call purpleaid.sp_authorization(uid,  token, changeDatePermissionID ,  @auth_status);
 
else
*/
 call purpleaid.sp_authorization(uid,  token, UpdatepermissionID ,  @auth_status);



 set status1= @auth_status;

 if @auth_status = 2 then 


     UPDATE purchaseorder

      SET ID = cpoId,

      CID    = cpoCompanyId,

      SID    = cpoSupplierId ,

      MID = cpoMrId ,

      OrderDate = str_to_date(cpoDate , '%d/%m/%Y') ,

      OrderAmt= cpoAmount ,

      Remark= cpoRemark ,

      flgEmail= cpoEmailFlag ,

      flgCancelPending=cpoCancelPending ,

      flgScheme= cpoSchemeFlag ,

      flgUrgent = cpoUrgentFlag ,

      flgVoid= cpoVoidFlag ,

      VoidReason= cpoVoidText,
      ModifiedBy = uid,
      ModifiedOn = now(),
      status = cpostatus

      WHERE ID = cpoId;

     

      End if;

  End if;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `insertContactTypeRole` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `insertContactTypeRole`(
 
inout mycontactTypeId int ,
 inout myroleId int  ,
 out status1 int ,
 IN  uid   int,
 IN  token   varchar(30),
 IN InsertpermissionID  int,
 OUT status  int
)
BEGIN

 call purpleaid.sp_authorization(uid,  token, InsertpermissionID , @auth_status);

 set status= @auth_status;

 if @auth_status = 2 then


		if  not exists(select RoleID from contactTyperolemap where ContactTypeID = mycontactTypeId and RoleID = myroleId) then

				insert into contactTyperolemap (

				ContactTypeID, RoleID
				)

				values (
					
					mycontactTypeId,
					myroleId
				);
			
				set status1 = 0;
		   
				   else
					set status1 = 10; -- duplicate record
				end if;
	end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `insertContactTypeRoleMap` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `insertContactTypeRoleMap`(
 inout mycontactTypeId int ,
 inout myroleId int  ,
out status1 int ,
 IN  uid  int,
 IN  token  varchar(30),
 IN InsertpermissionID  int,
 OUT status  int
)
BEGIN

declare user double;
 call purpleaid.sp_authorization(uid,  token, InsertpermissionID , @auth_status);

 set status= @auth_status;

 if @auth_status = 2 then
 
		/*insert into userpermission
		select 0 as ID, contact.ID as userID,  rolepermission.RoleID as userRoleID, rolepermission.permissionID from contact 
		join entitydetails on contactTypeID = entitydetails.id
		join rolepermission on rolepermission.RoleID = myroleId
		where contactTypeID = mycontactTypeId;*/
        
        select distinct activeusers.userID from activeusers into user ;
        
        insert into userpermission
		select 0 as ID, contact.ID as userID, 
        rolepermission.RoleID as userRoleID, 
        rolepermission.permissionID ,
        now() as CreatedOn , user as CreatedBy ,
        current_date() as  ModifiedOn from
        contact 
		join entitydetails on contactTypeID = entitydetails.id
		join rolepermission on rolepermission.RoleID = myroleId
		where contactTypeID =mycontactTypeId;
        
        
        

		if found_rows() > 0 then
			set status1 = 0;
		 else
			set status1 = 13;
	 end if;
end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `insertContentType` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `insertContentType`(   
IN Id  						DOUBLE,
IN contentId   				DOUBLE,
IN contentTypeId			DOUBLE,
 IN  uid  int,
 IN  token varchar(30),
 IN InsertpermissionID int,
 OUT status int 
		

	)
BEGIN



if Id = 0 then -- insert

	call purpleaid.sp_authorization(uid,  token, InsertpermissionID , @auth_status);

    set status= @auth_status;

	if @auth_status = 2 then 

      INSERT INTO contenttype



           (



             ID ,  



             contentID    , 



             contentTypeID  



           )



      VALUES 



           ( 

			    Id , 	

				contentId   ,

				contentTypeId	



             );

	end if;
        
end if; 

      



   END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `insertDeleteStockAuditCompany` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `insertDeleteStockAuditCompany`(

-- IN recid int,
in isChecked int,
IN SID int,
INOUT SACID int ,
INOUT SADID int,
IN uid  int,
IN  token  varchar(30),
IN InsertpermissionID int,
 -- IN DeletePermissionID int,
OUT status  int,
out status1 int
)
BEGIN



if isChecked = 1 then 

call purpleaid.sp_authorization(uid,  token, InsertpermissionID , @auth_status);

	 set status= @auth_status;

	 if @auth_status = 2 then
     
     
    /* if not exists(select stockauditcompany.cid , stockauditcompany.did from stockauditcompany 
     where stockauditcompany.auditID = SID ) then */
		
        insert into stockauditcompany
				(
        
					-- ID, 
					AuditID,
					CID,
					DID
				)
                
                values
                (
					-- recid,
                    SID,
                    SACID,
                    SADID
                );
                
                -- set SACID = last_insert_id();
                set status1 = 0;                  -- new insert
     end if;
   -- end if; 
else

if isChecked = 0 then 
call purpleaid.sp_authorization(uid,  token, InsertpermissionID , @auth_status);

	 set status= @auth_status;

	 if @auth_status = 2 then
     
            delete  from stockauditcompany 
            where AuditID = SID and CID = SACID and DID =SADID ;
             set status1 = 1;       
	  end if;
    end if;
end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `insertDeleteStockAuditProducyType` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `insertDeleteStockAuditProducyType`(

-- IN recid int,
in isChecked int,
IN SID int,
INOUT PtypeID int ,
IN uid  int,
IN  token  varchar(30),
IN InsertpermissionID int,
 OUT status  int,
 out status1 int

)
BEGIN

if isChecked = 1 then  

call purpleaid.sp_authorization(uid, token, InsertpermissionID , @auth_status);

	 set status= @auth_status;

	 if @auth_status = 2 then
     
		-- if not exists(select stockauditproducttype.producttypeID from stockauditproducttype where
        
      --  stockauditproducttype.auditID = sid) then 
			insert into stockauditproducttype
            (
            -- ID,
            AuditID, 
            ProductTypeID
            )
			
            values
            (
            -- recid,
            SID,
            PtypeID
            );
			
			-- set PtypeID = last_insert_id();
            set status1 = 0;   -- new insert
     end if;
   --  end if;
else

	if isChecked = 0 then
  
	call purpleaid.sp_authorization(uid,  token, InsertpermissionID , @auth_status);

		 set status= @auth_status;

		 if @auth_status = 2 then
		 
			delete from stockauditproducttype 
			where AuditID = SID and  ProductTypeID = PtypeID;
			set status1 = 1;
		   
		end if;	
	end if;
 end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `InsertGoodsReceived` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `InsertGoodsReceived`(
INOUT `goodsReceiptId` DOUBLE, 
IN `goodsReceiptCID` double,
IN `goodsReceiptSID` double,
IN `goodsReceiptDate` varchar(20), 
IN `goodsReceiptBillNo` VARCHAR(50), 
IN `goodsReceiptBillDate` VARCHAR(20), 
IN `goodsReceiptBillAmount` DECIMAL, 
IN `goodsReceiptLRNo` VARCHAR(50), 
IN `goodsReceiptLRDate` VARCHAR(20), 
IN `goodsReceiptLRDueDate` VARCHAR(20), 
IN `goodsReceiptRemark`  VARCHAR(50), 
IN `goodsReceiptPayment` INT(11), 
IN `goodsReceiptTransporter` INT(11), 
IN `goodsReceiptBillDiscount` double,
IN `goodsReceiptCases` DOUBLE, 
IN `goodsReceiptQuantity` DOUBLE, 
IN `goodsReceiptFree` DOUBLE, 
IN `goodsReceiptVAT` DOUBLE, 
IN `goodsReceiptAdditionExcise` DECIMAL, 
IN `goodsReceiptAdditionEducationCess` DECIMAL, 
IN `goodsReceiptAdditionDebitNote` DECIMAL, 
IN `goodsReceiptAdditionCST` DECIMAL, 
IN `goodsReceiptAdditionOther` DECIMAL, 
IN `goodsReceiptDeductionTradeDiscount` DECIMAL, 
IN `goodsReceiptDeductionSpecialDiscount` DECIMAL, 
IN `goodsReceiptDeductionOctroiReimb` DECIMAL, 
IN `goodsReceiptDeductionCreditNote` DECIMAL, 
IN `goodsReceiptDeductionBillDiscount` DECIMAL, 
IN `goodsReceiptDeductionOther` DECIMAL, 
IN `goodsReceiptTotalItems` DECIMAL, 
IN `goodsReceiptRoundOff` DECIMAL, 
IN `goodsReceiptFreeVAT` DECIMAL, 
IN `goodsReceiptNetAmount` DECIMAL, 
IN `goodsReceiptUpdateToACFlag` INT(11),
IN `goodsReceiptVerifiedFlag` INT(11),
IN  goodsReceiptVerifiedByID double, 
IN  goodsReceiptVerifiedOn varchar(50),
IN  uid  int,
IN  token varchar(30),
IN  InsertpermissionID int,
IN  UpdatepermissionID int,
OUT status int ,
IN lflag int,
IN sflag int,
IN lid double,
in sid double,
IN lon varchar(50),
IN son varchar(50)

)
BEGIN 

declare lastVerifiedOn datetime;
declare lastVerifiedByID double;

declare lastLedgerOn datetime;
declare lastLedgerByID double;

declare lastStockOn datetime;
declare lastStockByID double;

if goodsReceiptId = 0 then -- insert

	call purpleaid.sp_authorization(uid,  token, InsertpermissionID , @auth_status);

    set status= @auth_status;

	if @auth_status = 2 then 


	if(goodsReceiptVerifiedFlag = 0)  then
		 set goodsReceiptVerifiedOn = null;
		 set goodsReceiptVerifiedByID = null;
	else
		 set goodsReceiptVerifiedOn = now();
	end if;
    
    if(lflag = 0)  then
		 set lon = null;
		 set lid = null;
	else
		 set lon = now();
	end if;
    
    
    if(sflag = 0)  then
		 set son = null;
		 set sid = null;
	else
		 set son = now();
	end if;

  INSERT INTO goodsreceived

	(
			ID, 
            CID,
            SID,

			goodsReceiptDate,

			billNo,

			billDate,

			billAmt,

			LRNo,

			LRDate,

			LRDueDate,

			Remark,

			payment,

			transporter,

			billDiscount,

			cases,

			quantity,

			free,

			VAT,

			additionExcise,

			additionEducationCess,

			additionDebitNote,

			additionCST,

			additionOther,

			deductionTradeDiscount,

			deductionSpecialDiscount,

			deductionOctroiReimb,

			deductionCreditNote,

			deductionBillDiscount,

			deductionOther,

			totalItems,

			roundOff,

			freeVAT,

			netAmount,

			flgUpdateToAC,

			flgVerified,

			verifiedByID,
            
            verifiedOn,
            
            CreatedBy,
           
            CreatedOn,
                        
            flgLedger,
            
            ledgerBy,
            
            ledgerOn,
            
            flgStock,
            
            stockBy,
            
            stockOn
            

      )



      VALUES 



           ( 



            goodsReceiptId ,
            
            goodsReceiptCID ,
			
            goodsReceiptSID ,

            str_to_date(goodsReceiptDate , '%d/%m/%Y') ,

            goodsReceiptBillNo,

            
			str_to_date(goodsReceiptBillDate, '%d/%m/%Y') ,

			goodsReceiptBillAmount,

			goodsReceiptLRNo,

			str_to_date(goodsReceiptLRDate, '%d/%m/%Y') ,

			str_to_date(goodsReceiptLRDueDate, '%d/%m/%Y') ,

			goodsReceiptRemark,

			goodsReceiptPayment,

			goodsReceiptTransporter,

            goodsReceiptBillDiscount,

			goodsReceiptCases,

            

			goodsReceiptQuantity,

            

			goodsReceiptFree,

            

			goodsReceiptVAT,

            

			goodsReceiptAdditionExcise,

			goodsReceiptAdditionEducationCess,

			goodsReceiptAdditionDebitNote,

            goodsReceiptAdditionCST,

			goodsReceiptAdditionOther,

			goodsReceiptDeductionTradeDiscount,

			goodsReceiptDeductionSpecialDiscount,

			goodsReceiptDeductionOctroiReimb,

			goodsReceiptDeductionCreditNote ,

			goodsReceiptDeductionBillDiscount,

			goodsReceiptDeductionOther,

			goodsReceiptTotalItems,

			goodsReceiptRoundOff,

			goodsReceiptFreeVAT,

			goodsReceiptNetAmount,

			goodsReceiptUpdateToACFlag,

			goodsReceiptVerifiedFlag,

            goodsReceiptVerifiedByID,
            
           str_to_date(goodsReceiptVerifiedOn, '%d/%m/%Y %H:%i:%s') ,
            
            uid,
            
            now(),
            
             lflag,
            
            lid,
            
             str_to_date(lon, '%d/%m/%Y %H:%i:%s') ,
            
            sflag,
            
            sid,
            
             str_to_date(son, '%d/%m/%Y %H:%i:%s') 
            
            
            

            

       );

 set goodsReceiptId = LAST_INSERT_ID();

    
   
end if;
 set goodsReceiptId = LAST_INSERT_ID();
 else
 

 call purpleaid.sp_authorization(uid,  token, UpdatepermissionID ,  @auth_status);


 set status = @auth_status;

 if @auth_status = 2 then 


			if(goodsReceiptVerifiedFlag = 1)  then
				 set lastVerifiedOn =  (SELECT  verifiedOn from goodsreceived where ID = goodsReceiptId);
				 set lastVerifiedByID = (SELECT  verifiedByID from goodsreceived where ID = goodsReceiptId);
				 
					 
				 if ((lastVerifiedOn != str_to_date(goodsReceiptVerifiedOn, '%d/%m/%Y %H:%i:%s')) and (lastVerifiedByID != goodsReceiptVerifiedByID)) then   
					set	goodsReceiptVerifiedOn  = date_format(now(),'%d/%m/%Y %H:%i:%s');
				  end if;

			else
				 set goodsReceiptVerifiedOn = null;
				 set goodsReceiptVerifiedByID = null;
				
			end if;
            
            
            if(lflag = 1)  then
				 set lastLedgerOn =  (SELECT  ledgerOn from goodsreceived where ID = goodsReceiptId);
				 set lastLedgerByID = (SELECT  ledgerBy from goodsreceived where ID = goodsReceiptId);
				 
					 
				 if ((lastLedgerOn != str_to_date(lon, '%d/%m/%Y %H:%i:%s')) and (lastLedgerByID != lid)) then   
					set	lon  = date_format(now(),'%d/%m/%Y %H:%i:%s');
				  end if;

			else
				 set lon = null;
				 set lid = null;
				
			end if;
            
            
            
            if(sflag = 1)  then
				 set lastStockOn =  (SELECT  stockOn from goodsreceived where ID = goodsReceiptId);
				 set lastStockByID = (SELECT  stockBy from goodsreceived where ID = goodsReceiptId);
				 
					 
				 if ((lastStockOn != str_to_date(son, '%d/%m/%Y %H:%i:%s')) and (lastStockByID != sid)) then   
					set	son  = date_format(now(),'%d/%m/%Y %H:%i:%s');
				  end if;

			else
				 set son = null;
				 set sid = null;
				
			end if;
    
    UPDATE goodsreceived

     SET 

      	CID  = goodsReceiptCID,
         
        SID = goodsReceiptSID,
     
		goodsReceiptDate= str_to_date(goodsReceiptDate , '%d/%m/%Y') ,

		billNo= goodsReceiptBillNo ,

		billDate = str_to_date(goodsReceiptBillDate , '%d/%m/%Y') ,

	    billAmt = goodsReceiptBillAmount,

        LRNo=goodsReceiptLRNo,

		LRDate = str_to_date(goodsReceiptLRDate, '%d/%m/%Y') ,

        LRDueDate = str_to_date(goodsReceiptLRDueDate, '%d/%m/%Y') ,

        Remark=goodsReceiptRemark,

        payment=goodsReceiptPayment,

        transporter=goodsReceiptTransporter,

        billDiscount=goodsReceiptBillDiscount,

        cases=	goodsReceiptCases,

        quantity=goodsReceiptQuantity,

        free = goodsReceiptFree,

        VAT=goodsReceiptVAT,

		additionExcise=goodsReceiptAdditionExcise,

		additionEducationCess=goodsReceiptAdditionEducationCess,

        additionDebitNote=goodsReceiptAdditionDebitNote,

        additionCST=goodsReceiptAdditionCST,

        additionOther=goodsReceiptAdditionOther,

        deductionTradeDiscount=goodsReceiptDeductionTradeDiscount,

        deductionSpecialDiscount=goodsReceiptDeductionSpecialDiscount,

        deductionOctroiReimb=goodsReceiptDeductionOctroiReimb, 

        deductionCreditNote=goodsReceiptDeductionCreditNote ,

        deductionBillDiscount=goodsReceiptDeductionBillDiscount,

        deductionOther=goodsReceiptDeductionOther,

        totalItems=goodsReceiptTotalItems,

        roundOff=goodsReceiptRoundOff,

        freeVAT=goodsReceiptFreeVAT,

        netAmount=	goodsReceiptNetAmount,

        flgUpdateToAC=goodsReceiptUpdateToACFlag,

        flgVerified = goodsReceiptVerifiedFlag,

        verifiedByID =goodsReceiptVerifiedByID,
        
        verifiedOn = str_to_date(goodsReceiptVerifiedOn, '%d/%m/%Y %H:%i:%s'),
        
        ModifiedBy = uid,
        
        ModifiedOn = now(),
        
         flgLedger = lflag,
            
            ledgerBy = lid,
            
            ledgerOn = str_to_date(lon, '%d/%m/%Y %H:%i:%s'),
            
            flgStock = sflag ,
            
            stockBy = sid,
            
            stockOn = str_to_date(son, '%d/%m/%Y %H:%i:%s')
        
        WHERE ID = goodsReceiptId;
       
	 End if;
   End if;

   END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `InsertProductContents` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `InsertProductContents`(IN PID double,
IN contentid double,
in contentunit double,
in cotentStrength double,
IN uid int,
 IN token varchar(30),
 IN InsertpermissionID int,
 OUT status int
)
BEGIN

call purpleaid.sp_authorization(uid,  token, InsertpermissionID , @auth_status);

    set status= @auth_status;

	if @auth_status = 2 then 
INSERT INTO productcontents(productID,contentID,contUnit,contentStrength)
VALUES(PID,contentid, contentunit, cotentStrength);
end if;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `InsertPurchaseproducts` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `InsertPurchaseproducts`(
IN cpoID int,
IN companyId int,
In productId int,
IN pQuantity double,
IN pScheme double,
IN pValue double,
In remark varchar(50),
IN  uid  int,
IN  token varchar(30),
IN InsertpermissionID int,
OUT status int 

)
BEGIN
 call purpleaid.sp_authorization(uid,  token, InsertpermissionID , @auth_status);

    set status= @auth_status;

	if @auth_status = 2 then 
    
INSERT INTO purchaseproducts
(CompanyOrderID,CID,PID,Quantity,Scheme,Value,Remark)
VALUES(cpoID,companyId,productId,pQuantity,pScheme,pValue,remark);

end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `InsertRouteAreaMaster` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `InsertRouteAreaMaster`(
IN `routeID` DOUBLE,
IN `areaID` DOUBLE,
IN uid  int,
IN token varchar(30),
IN InsertpermissionID int,
OUT status int 
 )
    DETERMINISTIC
BEGIN 




	call purpleaid.sp_authorization(uid,  token, InsertpermissionID , @auth_status);

    set status= @auth_status;

	if @auth_status = 2 then 

  INSERT INTO routearea

		         (

						

						rID, 

						aID  

					  

		         )

		    VALUES 

		         ( 		

					  routeID,  

					   areaID

			  

                

                     );
	end if;

                

       END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `InsertSAProducts` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `InsertSAProducts`(

IN SAID double,
INOUT ProductID int ,
INOUT ProductBatchID int ,
IN SAProductBatchSelected int ,
IN SaProductSystemQty double ,
IN SaBatchSystemQty double ,
IN uid  int,
IN  token  varchar(30),
IN InsertpermissionID int,
OUT status  int,
out status1 int
)
BEGIN

if ProductBatchID > 0 then   -- batch level insert
 
	call purpleaid.sp_authorization(uid,  token, InsertpermissionID , @auth_status);

	set status= @auth_status;

	if @auth_status = 2 then
	 
		  insert into stockauditproduct
				(
					
					AuditID,
					PID,
					PBID,
                    IsProductBatchSelected,
                    AuditQuantity,
                    SystemQuantity,
                    MissMatchQuantity
                   -- Remark,
                  --  AuditBy
					
				)
		
			values
				(
					SAID,
					ProductID,
					ProductBatchID,
                    SAProductBatchSelected,
					0,				-- audit qty  (on first save all these values are default to 0)
					SaBatchSystemQty,
					0				-- mismatch qty
					-- null,				-- remark
                  --  null				-- audit by
					
				);
			set status1 = 1;
	end if;
    
else

-- if batch id = 0      -- product level insert
call purpleaid.sp_authorization(uid,  token, InsertpermissionID , @auth_status);

	set status= @auth_status;

	if @auth_status = 2 then
	 
		  insert into stockauditproduct
				(
					
					AuditID,
					PID,
					PBID,
                    IsProductBatchSelected,
                    AuditQuantity,
                    SystemQuantity,
                    MissMatchQuantity
                  --  Remark,
                   -- AuditBy
					
				)
		
			values
				(
					SAID,
					ProductID,
					ProductBatchID,
                    SAProductBatchSelected,
					0,
					SaProductSystemQty,
					0
					-- null,
                    -- null
					
				);
			set status1 = 1;
	end if;
end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `insertSIPO` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `insertSIPO`(
IN siid double,
IN poid double,
IN pid double,
IN grid  double,
IN quantity double,
IN uid  int,
IN token varchar(30),
IN InsertpermissionID int,
OUT status int 
)
BEGIN

if siid = 0 then -- insert

	call purpleaid.sp_authorization(uid,  token, InsertpermissionID , @auth_status);

    set status= @auth_status;

	if @auth_status = 2 then 
    
 INSERT INTO stockinwardpolink

	(
		SIID,
        POID,
        PID,
        GRID,
        Quantity,
        CreatedBy,
        CreatedOn
    
			
      )

      VALUES 

           ( 

            siid,
			poid ,
			pid ,
			grid  ,
			quantity ,
			uid , 
            now()
           
           );
      		end if;
        
end if; 

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `InsertUpdateAD` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `InsertUpdateAD`(INOUT creditNoteADid double,
IN creditNoteID double,
IN salesID double,
IN salesADpercentage decimal(10,2),
IN salesADAmount decimal(10,2),
IN discountType int,
IN uid  int,
IN token varchar(30),
IN InsertpermissionID int,
OUT status int ,
IN salesremark varchar(100)

)
BEGIN

if creditNoteADid = 0 then -- insert

 call purpleaid.sp_authorization(uid,  token, InsertpermissionID , @auth_status);

    set status= @auth_status;

 if @auth_status = 2 then 

      INSERT INTO creditnoteadditionaldiscount

           (

			  ID, 
			  CNID, 
			  InvoiceNo,
			  additionalDisc,
			  additionalDiscAmt,
			  discountType,
			  CreatedBy,
			  CreatedOn,
              Remark
			 

           )

      VALUES 

           (  
           creditNoteADid,
           creditNoteID,
           salesID,
           salesADpercentage ,
			salesADAmount ,
            discountType,
            uid,
            now(),
            salesremark

    
                );

      
                  
  end if;                
                  
 set creditNoteADid = LAST_INSERT_ID();
  ELSE

 call purpleaid.sp_authorization(uid,  token, InsertpermissionID ,  @auth_status);

 set status= @auth_status;

 if @auth_status = 2 then 
     
     
  UPDATE creditnoteadditionaldiscount

    SET 

   
			  CNID = creditNoteID, 
			  InvoiceNo = salesID,
			  additionalDisc = salesADpercentage,
			  additionalDiscAmt = salesADAmount,
			  discountType = discountType,
			  ModifiedBy = uid,
			  ModifiedOn = now(),
              Remark = salesremark
   

    WHERE ID = creditNoteADid;

  End if;
    
 end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `InsertUpdateADP` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `InsertUpdateADP`(

INOUT creditNoteADPid double,
IN creditNoteID double,
IN salesProductsID double,
IN salesADpercentage decimal(10,2),
IN salesADAmount decimal(10,2),
IN uid  int,
IN token varchar(30),
IN InsertpermissionID int,
OUT status int 

)
BEGIN


if creditNoteADPid = 0 then -- insert

 call purpleaid.sp_authorization(uid,  token, InsertpermissionID , @auth_status);

    set status= @auth_status;

 if @auth_status = 2 then 

      INSERT INTO creditnoteadditionaldiscountproduct

           (

			 ID,
             CNADID,
             SPID,
             additionalDiscPercentage,
             additionalDiscAmount,
             CreatedBy,
             CreatedOn
           
            
            

           )

      VALUES 

           (  
           creditNoteADPid,
           creditNoteID,
           salesProductsID,
           salesADpercentage ,
			salesADAmount ,
            
            uid,
            now()

    
                );

      
                  
  end if;                
                  
 set creditNoteADPid = LAST_INSERT_ID();
  ELSE

 call purpleaid.sp_authorization(uid,  token, InsertpermissionID ,  @auth_status);

 set status= @auth_status;

 if @auth_status = 2 then 
     
     
  UPDATE creditnoteadditionaldiscountproduct

    SET 

   
			  CNADID = creditNoteID, 
			 
			  SPID  = salesProductsID,
             additionalDiscPercentage = salesADpercentage,
             additionalDiscAmount = salesADAmount,
           
			  ModifiedBy = uid,
			  ModifiedOn = now()
   

    WHERE ID = creditNoteADPid;

  End if;
    
 end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `InsertUpdateAreaMaster` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `InsertUpdateAreaMaster`(
 INOUT `areaID` INT(20),
 IN `areaCode` VARCHAR(40),
 IN `areaDescription` VARCHAR(40),
 IN `pincode` VARCHAR(40),
 IN `areaRegionID` DOUBLE,
 IN `areaActiveFlag` INT(20),
 IN  uid  int,
 IN  token varchar(30),
 IN InsertpermissionID int,
 IN UpdatepermissionID int,
 IN DeletepermissionID int,
 OUT status int 
 
 
 )
    DETERMINISTIC
BEGIN 

declare oldFlgActive int;


if areaID = 0 then -- insert

	call purpleaid.sp_authorization(uid,  token, InsertpermissionID , @auth_status);

    set status= @auth_status;

	if @auth_status = 2 then 

		    INSERT INTO area

		         (

				   ID,

				   code,  

				   description, 

				   pincode, 

				   regionID, 

				   flgActive

		         )

		    VALUES 

		         ( 	

					areaID,      

					areaCode, 

					areaDescription, 

					pincode,

					areaRegionID, 

					areaActiveFlag    	  
                );

       set areaID = LAST_INSERT_ID();
                  
  end if;                
                  
set areaID = LAST_INSERT_ID();
  ELSE

    	

/*
select flgActive into oldFlgActive from area where ID = areaID ;

if (oldFlgActive != areaActiveFlag ) AND areaActiveFlag = 1 then 

 call purpleaid.sp_authorization(uid,  token, DeletepermissionID ,  @auth_status);
 
else*/

 call purpleaid.sp_authorization(uid,  token, UpdatepermissionID ,  @auth_status);

 set status= @auth_status;

 if @auth_status = 2 then 
     
     
		UPDATE area

				SET 

				ID = areaID,

				code = areaCode,

				description    = areaDescription,

				pincode    = pincode ,

				regionID = areaRegionID ,

				flgActive = areaActiveFlag

				WHERE ID = areaID;

			
		End if;
				
	end if;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `InsertUpdateBatchScheme` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `InsertUpdateBatchScheme`(

 INOUT  batchSchemeId                 		 DOUBLE , 

 IN  batchSchemePBAID                      DOUBLE   ,

 IN  batchSchemeStartDate                 VARCHAR(60)   , 

 IN  batchSchemeEndDate                   VARCHAR(60)    , 

 IN  batchSchemeMinStock                  DOUBLE  ,

 IN  batchSchemeRemark     			     VARCHAR(60),

 IN batchSchemeLockFlag                  INT(11),
 IN  uid                                  int,
 IN  token                               varchar(30),
 IN InsertpermissionID                    int,
 IN UpdatepermissionID                    int,
 OUT status                                int 
)
BEGIN



if batchSchemeId = 0 then -- insert

	call purpleaid.sp_authorization(uid,  token, InsertpermissionID , @auth_status);

    set status= @auth_status;

	if @auth_status = 2 then 

    				

					INSERT INTO batchscheme

					 (

					   ID,

					   PBAID,

					   startDate,

					   endDate,

					   minStock,

					   remark,
                       
                      flgSchemeLock

					  

					  

					 )

					VALUES 

					 ( 

					 batchSchemeId  , 

		             batchSchemePBAID   ,

					str_to_date(batchSchemeStartDate,'%d/%m/%Y'), 

					str_to_date(batchSchemeEndDate ,'%d/%m/%Y'),  

					batchSchemeMinStock ,

					batchSchemeRemark ,
                    
                     batchSchemeLockFlag

					  

					 ) ; 



			set batchSchemeId = LAST_INSERT_ID();
end if;
			
            ELSE

			
 call purpleaid.sp_authorization(uid,  token, UpdatepermissionID ,  @auth_status);


 set status= @auth_status;

 if @auth_status = 2 then 		

					UPDATE batchscheme

					

						SET 

						
                        PBAID = batchSchemePBAID,

						startDate = str_to_date(batchSchemeStartDate,'%d/%m/%Y'),

						endDate = str_to_date(batchSchemeEndDate ,'%d/%m/%Y'),

						minStock = batchSchemeMinStock,

						remark = batchSchemeRemark	,		

						 flgSchemeLock = batchSchemeLockFlag

					

						WHERE ID = batchSchemeId ;
                        
                        set batchSchemeId = LAST_INSERT_ID();

                        End if;
                        
                         End if;

			END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `InsertUpdateBatchSchemeDetails` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `InsertUpdateBatchSchemeDetails`(

		        IN  batchSchemeDetailsId                        DOUBLE       , 

		        IN  batchSchemeDetailsBSID                      DOUBLE   ,

		        IN  batchSchemeDetailsQuantity                 DOUBLE   , 

		        IN  batchSchemeDetailsFree                  DOUBLE  ,
                IN batchSchemeDetailsIndex 					double,
                 IN  uid                                  int,
 IN  token                               varchar(30),
 IN InsertpermissionID                    int,
 
 OUT status                                int 

		     )
BEGIN
if batchSchemeDetailsId = 0 then -- insert

	call purpleaid.sp_authorization(uid,  token, InsertpermissionID , @auth_status);

    set status= @auth_status;

	if @auth_status = 2 then 

				

					INSERT INTO batchSchemedetails

					 (

										   

						  ID,

						  BSID,

						  quantity,

						  free,
                          schemeIndex

					 )

					VALUES 

					 ( 

						 batchSchemeDetailsId   , 

						 batchSchemeDetailsBSID  ,

						 batchSchemeDetailsQuantity  , 

						 batchSchemeDetailsFree ,
                         batchSchemeDetailsIndex

					 ) ; 



					set batchSchemeDetailsId = LAST_INSERT_ID();
end if;
			ELSE

				 call purpleaid.sp_authorization(uid,  token, InsertpermissionID ,  @auth_status);


 set status= @auth_status;

 if @auth_status = 2 then 		

					UPDATE batchSchemedetails

					

						SET 

						BSID = batchSchemeDetailsBSID,

						quantity = batchSchemeDetailsQuantity,

						free = batchSchemeDetailsFree,

						schemeIndex = batchSchemeDetailsIndex	
                        

						WHERE ID = batchSchemeDetailsId ;
set batchSchemeDetailsId = LAST_INSERT_ID();
                        End if;
                        
                         End if;

			END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `InsertUpdateBusinessDetails` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `InsertUpdateBusinessDetails`(

inout BID double,
in BName varchar(45),
in BDescription varchar(45),
in BEdeCode varchar(15),
in BCode varchar(15), 
in BAddress1 varchar(50),
in BAddress2 varchar(50),
in BCity varchar(20),
in BPincode int(11),
in BContactperson varchar(45),
in BLandline varchar(45),
in BMobile varchar(45),
in BFax int(11),
in BEmail varchar(20),
in BFlgOwner int(3),
in BFlgLicence int(3),
in BOwnerContactPerson varchar(45),
in BOwnerLandline varchar(15),
in BOwnerMobile varchar(15),
in BOwnerFax int(11),
in BOwneremail varchar(20),
IN uid double,
IN token varchar(30),
IN InsertpermissionID int,
-- IN UpdatepermissionID int,
OUT status int ,
out status1 int

)
BEGIN

if BID = 0 then 
 
    call purpleaid.sp_authorization(uid,  token, InsertpermissionID , @auth_status);

    set status= @auth_status;

 if @auth_status = 2 then 

  insert into business(
    ID,
    BusinessName,
    BusinessDescription,
    EdeCode,
    Code,
    AddressLine1,
    AddressLine2,
    City,
    Pincode, 
    ContactPerson,
    Landline,
    Mobile, 
    Fax, 
    Email, 
    FlgHideOwner,
    FlgHideLicence,
    OwnerContactPerson,
    OwnerLandline, 
    OwnerMobile,
    OwnerFax,
    OwnerEmail, 
    CreatedBy,
    CreateOn
        )
        
        values(
			BID,
			BName,
			BDescription,
			BEdeCode,
			BCode,
			BAddress1,
			BAddress2,
			BCity,
			BPincode,
			BContactperson,
			BLandline,
			BMobile,
			BFax,
			BEmail,
			BFlgOwner,
			BFlgLicence,
			BOwnerContactPerson,
			BOwnerLandline,
			BOwnerMobile,
			BOwnerFax,
			BOwneremail,
			uid,
			now()
        );
        
          set BID = LAST_INSERT_ID();
		 set status1 = 0;
 end if;

else

call purpleaid.sp_authorization(uid,  token, InsertpermissionID , @auth_status);

    set status= @auth_status;

 if @auth_status = 2 then 
    
  update business
        set
		business.BusinessName = BName ,
        
        business.BusinessDescription = BDescription ,
        
        business.EdeCode = BEdeCode ,
        
        business.Code = BCode, 
        
        business.AddressLine1 = BAddress1 ,
        
        business.AddressLine2 = BAddress2 ,
        
        business.City = BCity ,
        
        business.Pincode = BPincode,
        
        business.ContactPerson = BContactperson ,
        
        business.Landline = BLandline ,
        
        business.Mobile = BMobile ,
        
        business.Fax = BFax , 
        
        business.Email = BEmail ,
        
		business.FlgHideOwner = BFlgOwner , 
        
        business.FlgHideLicence = BFlgLicence, 
        
        business.OwnerContactPerson = BOwnerContactPerson,
        
        business.OwnerLandline = BOwnerLandline,
        
        business.OwnerMobile = BOwnerMobile,
        
        business.OwnerFax = BOwnerFax,
        
        business.OwnerEmail = BOwneremail,
       
        business.CreatedBy = uid,
        
        business.ModifiedBy = uid , 
        
        business.ModifiedOn = now()
        
        where business.ID = BID;
        set status1 = 1;
        
 end if;
end if;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `insertUpdateBusinessLicence` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `insertUpdateBusinessLicence`(
inout BLid double,
in BID double,
in BLicenceType int(11),
 in BLicenceName varchar(20),
in BLicencenumber double,
in BLicenceStartDate varchar(10),
in BLicenceEndDate varchar(10),
IN  uid  int,
IN  token varchar(30),
IN InsertpermissionID int,
OUT status int  ,
out status1 int
)
BEGIN

if BLid = 0 then   -- insert

	call purpleaid.sp_authorization(uid,  token, InsertpermissionID , @auth_status);

    set status= @auth_status;

	if @auth_status = 2 then 
    
			insert into businesslicence
				(
					ID, 
					BusinessID,
					licenceType,
                    LicenceName,
					LicenceNumber,
					LicenceStartDate,
					LicenceEndDate,
                    CreatedBy,
                    CreatedOn
				)
				
			values
				(
					BLid,
					BID,
					BLicenceType,
                    BLicenceName,
					BLicencenumber,
					str_to_date(BLicenceStartDate , '%d/%m/%Y') ,
					str_to_date(BLicenceEndDate , '%d/%m/%Y'),
                    uid,
                    now()
				);
                
                  set BLid = LAST_INSERT_ID();
				  set status1 = 0;
	end if;
    
else
	
    call purpleaid.sp_authorization(uid,  token, InsertpermissionID , @auth_status);

    set status= @auth_status;

	if @auth_status = 2 then 
    
		update businesslicence
        
			set
			
            BusinessID = BID ,
            licenceType = BLicenceType ,
            LicenceName = BLicenceName ,
			LicenceNumber = BLicencenumber ,
            LicenceStartDate = str_to_date(BLicenceStartDate , '%d/%m/%Y') ,
            LicenceEndDate =  str_to_date(BLicenceEndDate , '%d/%m/%Y') ,
            ModifiedBy = uid,
            ModifiedOn = now()
            where ID = BLid;
            
            set status1 = 1;
		
	end if;
end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `InsertUpdateCompanyClaim` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `InsertUpdateCompanyClaim`(

	INOUT companyClaimId double,
	IN companyClaimCID varchar(30),
	IN companyClaimSID double,
	IN companyClaimDate  varchar(30),
	IN companyClaimType INT(11),
    IN companyClaimStatus DECIMAL,
    IN companyClaimRateOfCalculation INT(11),
  	IN companyClaimCalculateVAT INT(11),
  	IN companyClaimRemark varchar(60),
	IN companyClaimTotalItem double,
	IN companyClaimGrossTotal varchar(60),
	IN companyClaimVAT INT(11),
	IN companyClaimNetAmount DECIMAL,
	IN uid  int,
    IN token varchar(30),
    IN InsertpermissionID int,
    IN UpdatepermissionID int,
    OUT status int 
)
BEGIN

if companyClaimId = 0 then -- insert

	call purpleaid.sp_authorization(uid,  token, InsertpermissionID , @auth_status);

    set status= @auth_status;

	if @auth_status = 2 then 


  INSERT INTO companyclaim

	(	
		ID,
        companyID,
        supplierID,
        Date,
        Type,
        Status,
        RateOfCalculation,
        CalculateVAT,
        Remark,
        TotalItem,
        GrossTotal,
        VAT,
        NetAmount,
        CreatedBy,
        CreatedOn
			
      )

      VALUES 

          ( 

             companyClaimId ,
			 companyClaimCID,
			 companyClaimSID ,
             str_to_date(companyClaimDate , '%d/%m/%Y') ,
			 companyClaimType,
			 companyClaimStatus ,
			 companyClaimRateOfCalculation,
			 companyClaimCalculateVAT,
			 companyClaimRemark ,
			 companyClaimTotalItem ,
			 companyClaimGrossTotal ,
			 companyClaimVAT,
			 companyClaimNetAmount,
	    	 uid,
			 now()

       );

    set companyClaimId = LAST_INSERT_ID();
    
 end if;  
   
else

 call purpleaid.sp_authorization(uid,  token, UpdatepermissionID ,  @auth_status);

 set status= @auth_status;

 if @auth_status = 2 then 
    
    UPDATE companyclaim

     SET 

			companyID = companyClaimCID,
            supplierID = companyClaimSID,
            Date = str_to_date(companyClaimDate , '%d/%m/%Y'),
            Type = companyClaimType,
            Status = companyClaimStatus,
            RateOfCalculation = companyClaimRateOfCalculation,
            CalculateVAT = companyClaimCalculateVAT,
            Remark = companyClaimRemark,
            TotalItem = companyClaimTotalItem,
            GrossTotal = companyClaimGrossTotal,
            VAT = companyClaimVAT,
            NetAmount = companyClaimNetAmount,
            ModifiedBy = uid,
            ModifiedOn = now()
      
            WHERE ID = companyClaimId;
      
       set companyClaimId = LAST_INSERT_ID();

	End if;
End if;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `insertUpdateCompanyMaster` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `insertUpdateCompanyMaster`(
 INOUT `companyId` DOUBLE,
 IN `companyName` VARCHAR(60),
 IN `edeCode` VARCHAR(60),
 IN `companyCode` VARCHAR(30),
 IN `companyRemarks` VARCHAR(20),
 IN `companyAddressLine1` VARCHAR(60),
 IN `companyAddressLine2` VARCHAR(60),
 IN `companyCity` INT(11),
 IN `companyContactPerson` VARCHAR(50),
 IN `companyPhone` VARCHAR(15),
 IN `companyFax` INT(11),
 IN `companyEmail` VARCHAR(45),
 IN `companyStockCalculationMode` VARCHAR(45),
 IN `companyOrderLimit` DOUBLE,
 IN `companyPaymentTerms` VARCHAR(45),
 IN `companyPaymentDays` INT(11),
 IN `companyActiveFlag` INT(1),
 IN `companyEmailPOFlag` INT(11),
 IN `companyActiveSupplierId` DOUBLE,
 IN uid varchar(30),
 IN token varchar(30),
 IN InsertpermissionID int,
 IN UpdatepermissionID int,
 IN DeletepermissionID int,
 OUT status int 
 )
BEGIN
declare oldFlgActive int;

if companyId = 0 then -- insert

call purpleaid.sp_authorization(uid,  token, InsertpermissionID , @auth_status);

set status= @auth_status;

if @auth_status = 2 then 

      INSERT INTO company
           (
             ID ,  
             Name , 
             EdeCode, 
             Code , 
             Remarks, 
             AddrLine1,
             AddrLine2 , 
             City,
             ContactPerson, 
             Phone, 
             Fax , 
             Email, 
             StockcMode, 
             OrderLimit,
             PayTerms, 
             PayDays,
             flgActive, 
             flgEmail                      
           )

      VALUES 

           ( 
            companyId, 
            companyName,
            edeCode , 
            companyCode ,
            companyRemarks ,
            companyAddressLine1 , 
            companyAddressLine2 , 
            companyCity ,
            companyContactPerson , 
            companyPhone ,
            companyFax ,
            companyEmail ,        
		    companyStockCalculationMode,
		    companyOrderLimit , 
	        companyPaymentTerms, 
			companyPaymentDays,
			companyActiveFlag, 
			companyEmailPOFlag
		  );
set companyId = LAST_INSERT_ID();

end if;
set companyId = LAST_INSERT_ID();

 ELSE

/*
select flgActive into oldFlgActive from company where ID = companyId ;

if (oldFlgActive != companyActiveFlag ) AND companyActiveFlag = 1 then 

 call purpleaid.sp_authorization(uid,  token, DeletepermissionID ,  @auth_status);
 
else*/
 call purpleaid.sp_authorization(uid,  token, UpdatepermissionID ,  @auth_status);

 set status= @auth_status;

 if @auth_status = 2 then 


     UPDATE company

      SET 
      Name    = companyName,
      EdeCode    = edeCode ,
      Code = companyCode ,
      Remarks= companyRemarks ,
      AddrLine1= companyAddressLine1 ,
      AddrLine2= companyAddressLine2 ,
      City= companyCity ,
      ContactPerson=companyContactPerson ,
      Phone= companyPhone ,
      Fax = companyFax ,
      Email= companyEmail ,
      StockcMode= companyStockCalculationMode,
      OrderLimit= companyOrderLimit ,
      PayTerms= companyPaymentTerms,
      PayDays= companyPaymentDays,
      flgActive= companyActiveFlag,
      flgEmail  = companyEmailPOFlag
      WHERE ID = companyId;

      update supplier set flgDefault = 0 where CID = companyId;

      update supplier set flgDefault = 1 where CID = companyId and ID = companyActiveSupplierId;
      
      
  
    end if;
      
end if;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `InsertUpdateCompanymasterOld` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `InsertUpdateCompanymasterOld`(
 INOUT `companyId` DOUBLE,
 IN `companyName` VARCHAR(60),
 IN `edeCode` VARCHAR(60),
 IN `companyCode` VARCHAR(30),
 IN `companyRemarks` VARCHAR(20),
 IN `companyAddressLine1` VARCHAR(60),
 IN `companyAddressLine2` VARCHAR(60),
 IN `companyCity` INT(11),
 IN `companyContactPerson` VARCHAR(50),
 IN `companyPhone` VARCHAR(15),
 IN `companyFax` INT(11),
 IN `companyEmail` VARCHAR(45),
 IN `companyStockCalculationMode` VARCHAR(45),
 IN `companyOrderLimit` DOUBLE,
 IN `companyPaymentTerms` VARCHAR(45),
 IN `companyPaymentDays` INT(11),
 IN `companyActiveFlag` INT(1),
 IN `companyEmailPOFlag` INT(11),
 IN `companyActiveSupplierId` DOUBLE,
 IN uid int,
 IN token varchar(30),
 OUT status int 
 )
    DETERMINISTIC
BEGIN

declare pageid int;

IF NOT EXISTS (SELECT ID FROM company WHERE ID = companyId) then

set  pageid = 16;

call purpleaid.sp_authorization(uid,  token, pageid , @auth_status);

set status= @auth_status;

if @auth_status = 2 then 

      INSERT INTO company
           (
             ID ,  
             Name , 
             EdeCode, 
             Code , 
             Remarks, 
             AddrLine1,
             AddrLine2 , 
             City,
             ContactPerson, 
             Phone, 
             Fax , 
             Email, 
             StockcMode, 
             OrderLimit,
             PayTerms, 
             PayDays,
             flgActive, 
             flgEmail                      
           )

      VALUES 

           ( 
            companyId, 
            companyName,
            edeCode , 
            companyCode ,
            companyRemarks ,
            companyAddressLine1 , 
            companyAddressLine2 , 
            companyCity ,
            companyContactPerson , 
            companyPhone ,
            companyFax ,
            companyEmail ,        
		    companyStockCalculationMode,
		    companyOrderLimit , 
	        companyPaymentTerms, 
			companyPaymentDays,
			companyActiveFlag, 
			companyEmailPOFlag
		  );
set companyId = LAST_INSERT_ID();

end if;



 ELSE


	if companyActiveFlag = 2 then 
	  
	  set  pageid = 17;

	else

	  set  pageid = 18;
	 
	end if;


 
 call purpleaid.sp_authorization(uid,  token, pageid ,  @auth_status);
set status= @auth_status;

 if @auth_status = 2 then 


     UPDATE company

      SET 
      Name    = companyName,
      EdeCode    = edeCode ,
      Code = companyCode ,
      Remarks= companyRemarks ,
      AddrLine1= companyAddressLine1 ,
      AddrLine2= companyAddressLine2 ,
      City= companyCity ,
      ContactPerson=companyContactPerson ,
      Phone= companyPhone ,
      Fax = companyFax ,
      Email= companyEmail ,
      StockcMode= companyStockCalculationMode,
      OrderLimit= companyOrderLimit ,
      PayTerms= companyPaymentTerms,
      PayDays= companyPaymentDays,
      flgActive= companyActiveFlag,
      flgEmail  = companyEmailPOFlag
      WHERE ID = companyId;

      update supplier set flgDefault = 0 where CID = companyId;

      update supplier set flgDefault = 1 where CID = companyId and ID = companyActiveSupplierId;
      
      set companyId = LAST_INSERT_ID();
      
    
  
    end if;
      
      
  

end if;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `insertUpdateContactDetails` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `insertUpdateContactDetails`(

INOUT contactDetailsID double,
IN contactDetailsCNID double,
IN contactDetailsEDID double,
IN contactDetails1 varchar(40),
IN contactDetails2 varchar(40),
IN contactDetails3 varchar(40),
IN contactDetails4 varchar(40),
IN contactDetails5 varchar(40),
IN contactDetails6 varchar(40),
IN contactDetailsIsDeleted int(11),
IN  uid  int,
IN  token varchar(30),
IN InsertpermissionID int,

OUT status int 
)
BEGIN


if contactDetailsID = 0 then -- insert

	call purpleaid.sp_authorization(uid,  token, InsertpermissionID , @auth_status);

    set status= @auth_status;

	if @auth_status = 2 then 
			INSERT INTO contactdetails
		    (
				ID,
				CNID,
				EDID,
				
				detail1,
				detail2,
				detail3,
				detail4,
				detail5,
				detail6,
                deleted
		    )

		    VALUES 
            ( 	
				contactDetailsID,
				contactDetailsCNID ,
				contactDetailsEDID,
				
				
				contactDetails1,
				contactDetails2 ,
				contactDetails3,
				contactDetails4,
				contactDetails5 ,
				contactDetails6,
                contactDetailsIsDeleted
            );

            set contactDetailsID = LAST_INSERT_ID();
end if;


  ELSE
  call purpleaid.sp_authorization(uid,  token, InsertpermissionID ,  @auth_status);


 set status= @auth_status;

 if @auth_status = 2 then 

			UPDATE contactdetails

			SET 
						
				ID = contactDetailsID,
				CNID = contactDetailsCNID,
				EDID = contactDetailsEDID,
				
				detail1 = contactDetails1,
				detail2 = contactDetails2,
				detail3 = contactDetails3,
				detail4 = contactDetails4,
				detail5 = contactDetails5,
				detail6 =contactDetails6,
                deleted = contactDetailsIsDeleted
						

				WHERE ID = contactDetailsID;
                 set contactDetailsID = LAST_INSERT_ID();
end if;

					End if;


END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `insertUpdateContactDetails2` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `insertUpdateContactDetails2`(

INOUT contactDetailsID double,
IN contactDetailsCNID double,
IN contactDetailsEDID double,
IN contactDetails1 varchar(40),
IN contactDetailsIsDeleted int(11),
 IN  uid  int,
 IN  token varchar(30),
 IN InsertpermissionID int,

 OUT status int 
)
BEGIN

if contactDetailsID = 0 then -- insert

	call purpleaid.sp_authorization(uid,  token, InsertpermissionID , @auth_status);

    set status= @auth_status;

	if @auth_status = 2 then 
			INSERT INTO contactdetails
		    (
				ID,
				CNID,
				EDID,
				detail1,
				deleted
		    )

		    VALUES 
            ( 	
				contactDetailsID,
				contactDetailsCNID ,
				contactDetailsEDID,
				
				
				contactDetails1,
				
                contactDetailsIsDeleted
            );

            set contactDetailsID = LAST_INSERT_ID();
end if;
  ELSE
 call purpleaid.sp_authorization(uid,  token, InsertpermissionID ,  @auth_status);


 set status= @auth_status;

 if @auth_status = 2 then 
			UPDATE contactdetails

			SET 
						
				ID = contactDetailsID,
				CNID = contactDetailsCNID,
				EDID = contactDetailsEDID,
			
				detail1 = contactDetails1,
				
                deleted = contactDetailsIsDeleted
						

				WHERE ID = contactDetailsID;
  set contactDetailsID = LAST_INSERT_ID();
					End if;
End if;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `insertUpdateContactDetails3` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `insertUpdateContactDetails3`(

INOUT contactDetailsID double,
IN contactDetailsCNID double,
IN contactDetailsEDID double,
IN contactDetailsOtherId double,
IN contactDetails1 varchar(40),
IN contactDetailsIsDeleted int(11),
 IN  uid  int,
 IN  token varchar(30),
 IN InsertpermissionID int,

 OUT status int 

)
BEGIN

if contactDetailsID = 0 then -- insert

	call purpleaid.sp_authorization(uid,  token, InsertpermissionID , @auth_status);

    set status= @auth_status;

	if @auth_status = 2 then 
			INSERT INTO contactdetails
		    (
				ID,
				CNID,
				EDID,
                otherID,
				detail1,
				deleted
		    )

		    VALUES 
            ( 	
				contactDetailsID,
				contactDetailsCNID ,
				contactDetailsEDID,
				contactDetailsOtherId,
				contactDetails1,
				
                contactDetailsIsDeleted
            );

            set contactDetailsID = LAST_INSERT_ID();
end if;
  ELSE
call purpleaid.sp_authorization(uid,  token, InsertpermissionID ,  @auth_status);


 set status= @auth_status;

 if @auth_status = 2 then 
			UPDATE contactdetails

			SET 
						
				ID = contactDetailsID,
				CNID = contactDetailsCNID,
				EDID = contactDetailsEDID,
			otherID = contactDetailsOtherId,
				detail1 = contactDetails1,
				
                deleted = contactDetailsIsDeleted
						

				WHERE ID = contactDetailsID;
set contactDetailsID = LAST_INSERT_ID();
					End if;
end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `insertUpdateContactDetailsReltdName` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `insertUpdateContactDetailsReltdName`(
INOUT contactDetailsID double,
IN contactDetailsCNID double,
IN contactDetailsEDID double,
IN contactDetailsOtherID double,
IN contactDetailsIsDeleted int(11),
 IN  uid  int,
 IN  token varchar(30),
 IN InsertpermissionID int,

 OUT status int 
)
BEGIN

if contactDetailsID = 0 then -- insert

	call purpleaid.sp_authorization(uid,  token, InsertpermissionID , @auth_status);

    set status= @auth_status;

	if @auth_status = 2 then 
   INSERT INTO contactdetails
      (
				ID,
				CNID,
				EDID,
				otherID,
				deleted
      )

      VALUES 
            (  
				contactDetailsID,
				contactDetailsCNID ,
				contactDetailsEDID,
				contactDetailsOtherID,
				contactDetailsIsDeleted
            );

            set contactDetailsID = contactDetailsID ;
	 End if;
	ELSE
call purpleaid.sp_authorization(uid,  token, InsertpermissionID ,  @auth_status);


 set status= @auth_status;

 if @auth_status = 2 then 
		   UPDATE contactdetails
		   SET 
			  
			ID = contactDetailsID,
			CNID = contactDetailsCNID,
			EDID = contactDetailsEDID,
			otherID = contactDetailsOtherID,
			deleted = contactDetailsIsDeleted
			  

			WHERE ID = contactDetailsID;
 set contactDetailsID = contactDetailsID ;
			 End if;
           	 End if; 
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `insertUpdateContactHistory` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `insertUpdateContactHistory`(

inout contactHistoryId double ,
in contactHistoryOrganizationID double,
in contactHistoryOrganizationName varchar(45),
in contactHistoryName varchar(45),
in contactHistoryCategory int(11),
in contactHistorySubject int(11),
in contactHistoryMessage varchar(45),
IN contactHistoryStatus int(11),
in contactHistoryEmail varchar(45),
in contactHistoryphone varchar(45),
in contactHistorySubjectOther varchar(45),
in userid double

)
BEGIN

  insert  
  into contacthistory (
      ID ,
      OrganizationID ,
                        OrganizationName,
                        Name , 
                        Category,
                        Subject,  
                        Message,
                        Status,
      Email , 
                        Phone ,
                        SubjectOther,
      createdBy ,
      createdOn,
                        HistoryDate
                        ) 
                        
  values (
        
        contactHistoryId , 
  contactHistoryOrganizationID ,
        contactHistoryOrganizationName,
        contactHistoryName,
        contactHistoryCategory,
        contactHistorySubject,
  contactHistoryMessage,
        contactHistoryStatus,
  contactHistoryEmail ,
        contactHistoryphone ,
        contactHistorySubjectOther,
  userid,
  now(),
        current_date()
        );



END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `InsertUpdateContactManager` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `InsertUpdateContactManager`(

-- --------------------------------------------------------------------------------------------------- --
-- --------------------------------------------------------------------------------------------------- --

-- Name : InsertUpdateContactManager
-- Author : Nikita Pise
-- Date : 11 June 2015

-- ------------------------------------------CHANGE LOG ---------------------------------------------- --

-- VersionNo.        Date                 Change                                           Author
      


-- --------------------------------------------------------------------------------------------------- --
-- --------------------------------------------------------------------------------------------------- --

INOUT contactId                     DOUBLE  , 
IN contactMyContactID             double,
IN contactTypeId                 DOUBLE  ,
IN contactOrganization 			varchar(50) ,
IN contactNameTitle              INT(11) ,
IN contactFirstName              varchar(40) ,
IN contactMiddleName  			 varchar(40) ,
IN contactLastName   			 varchar(40) ,
IN contactNickName  			 varchar(40) ,
IN contactjobTitle 				 varchar(40) ,
IN contactLabel    			     varchar(40) ,
IN contactHQ      				 varchar(40)  , 
IN contactArea    			     DOUBLE  , 
IN contactRoute     			 DOUBLE  , 
IN contactNotes    			     varchar(200) ,
IN contactActiveFlag  			 INT(11) ,
IN contactSendGreetingFlag       INT(11) ,
IN contactOnlyMyContactFlag      INT(11) ,
IN contactNotificationFlag       INT(11) ,
IN contactLockFlag               INT(11) ,
IN uid						varchar(40),
IN contactDeleted 						INT(11), 	
IN  token varchar(30),
IN InsertpermissionID int,
IN UpdatepermissionID int,
OUT status int ,
IN furl varchar(98),
IN turl varchar(98),
IN lurl varchar(98)


)
BEGIN
declare tempContactId double ;

declare oldFlgActive int;

if contactOnlyMyContactFlag = 1 then
set tempContactId = uid ;
else

set tempContactId = null;

end if;

if contactId = 0 then -- insert

	call purpleaid.sp_authorization(uid,  token, InsertpermissionID , @auth_status);

    set status= @auth_status;

	if @auth_status = 2 then 


		    INSERT INTO contact

		         (
                     ID , 
					 myContactID ,
                     organization,
					 contactTypeID ,
					 NameTitle ,
					 FirstName ,
					 MiddleName ,
					 LastName ,
					 NickName ,
					 JobTitle ,
					 label ,
					 HQ ,
					 Area ,
					 Route ,
					 Notes ,
					 flgActive ,
					 flgSendGeetings ,
					 flgNotification ,
                     flgLock,
                     CreatedBy,
					 CreatedOn,
                     deleted,
                     
                     facebookUrl,
                     twitterUrl,
                     linkedinUrl
                     
                     
		         )



		    VALUES 



		         (  
					  
                     contactId ,
					 tempContactId,
                     contactOrganization,
                     contactTypeId ,
                     contactNameTitle ,
                     contactFirstName ,
                     contactMiddleName ,
                     contactLastName ,
                     contactNickName ,
                     contactjobTitle ,
                     contactLabel ,
                     contactHQ , 
                     contactArea , 
                     contactRoute , 
					 contactNotes ,
					 contactActiveFlag ,
                     contactSendGreetingFlag ,
                     contactNotificationFlag ,
                     contactLockFlag,
                     uid,
                     now(),
                     0,
                     furl ,
                     turl ,
					 lurl

                 );
  
               set contactId = LAST_INSERT_ID();   
                
                end if;
else

 call purpleaid.sp_authorization(uid,  token, UpdatepermissionID ,  @auth_status);

 set status= @auth_status;

 if @auth_status = 2 then 

					UPDATE contact

				     SET 

                     ID  = contactId , 
					 myContactID =  tempContactId,
                     organization= contactOrganization,
					 contactTypeID = contactTypeId,
					 NameTitle = contactNameTitle ,
					 FirstName = contactFirstName ,
					 MiddleName = contactMiddleName ,
					 LastName = contactLastName ,
					 NickName = contactNickName ,
					 JobTitle = contactjobTitle ,
					 label = contactLabel ,
					 HQ = contactHQ ,
					 Area = contactArea ,
					 Route = contactRoute ,
					 Notes = contactNotes ,
					 flgActive = contactActiveFlag ,
					 flgSendGeetings = contactSendGreetingFlag ,
					 flgNotification = contactNotificationFlag	,
                     flgLock = contactLockFlag ,
                     ModifiedBy = uid,
              		 ModifiedOn = now(),
					 deleted = 0,
					 facebookUrl = furl,
                     twitterUrl = turl ,
                     linkedinUrl =  lurl   
                     
                     WHERE ID = contactId ;
                   
                     
				End if;
       End if;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `insertUpdateContactType` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `insertUpdateContactType`(

inout contactTYpeId double ,
in contactType varchar(45),
 out status1 int,
 IN  uid   int,
 IN  token  varchar(30),
 IN InsertpermissionID  int,
 OUT status  int

)
BEGIN

declare str varchar(45);


if contactTYpeId = 0 then -- insert


	 call purpleaid.sp_authorization(uid,  token, InsertpermissionID , @auth_status);

	 set status= @auth_status;

	 if @auth_status = 2 then


   -- if (contactTYpeId = 0) then 

		if found_rows() = 0 then
		set status = 13;    -- record not found
		end if;
    
		set str = lower(contactType);

		if not exists(select Description from entitydetails where lower(Description) = str) then

			 insert 
				
					into entitydetails ( 
					
						ID, TypeID, Description)
						
					values (contactTYpeID , 1 , contactType );
					
					set status1 = 0;
                    
                    
		else
            set status1 = 10; -- duplicate record
		end if;
        
        set contactTYpeId = LAST_INSERT_ID();
   end if;
        
else
       
	 call purpleaid.sp_authorization(uid,  token, InsertpermissionID ,  @auth_status);


	 set status= @auth_status;

	 if @auth_status = 2 then
		
			update entitydetails 
			set
		   
			TypeID = 1 ,
			Description = contactType where 
			id = contactTYpeId ;  
			
			set status1 = 0;

	end if;

	end if;
-- end if;   -- first if ends


END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `InsertUpdateContactUser` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `InsertUpdateContactUser`(
IN contactID double,
IN contactUserName varchar(30),
IN contactUserPassword varchar(30),
IN contactUserLockFlag INT(11),
IN uid varchar(40),
IN  token varchar(30),
IN InsertpermissionID int,
OUT status int 
)
BEGIN

declare contcttypeid double; 

set contcttypeid = 0 ;

if contactID = 0 then -- insert

 call purpleaid.sp_authorization(uid,  token, InsertpermissionID , @auth_status);

    set status= @auth_status;

 if @auth_status = 2 then 


      INSERT INTO contact

           (

             ID ,  
                   userName,
                   userPassward,
                   userLock

           )

      VALUES 

           ( 

              contactID ,
     contactUserName ,
     contactUserPassword ,
     contactUserLockFlag

                  );

     
       
      
			select contact.contactTypeID  into @ctid  from contact 
       
			where ID = contactID;
        
			set contcttypeid = @ctid ;
       
       
			insert into userpermission
            select 0 as ID, contactID as userID,  rolepermission.roleID as userRoleID ,
            rolepermission.permissionID as permissionID, now() as createdOn , now() as ModifiedOn , uid as CreatedBy
            from rolepermission 
            
            left join contacttyperolemap on contacttyperolemap.RoleID = rolepermission.roleID
			where contacttyperolemap.ContactTypeID = contcttypeid;
       
                   
            End if;   

 ELSE

    call purpleaid.sp_authorization(uid,  token, InsertpermissionID ,  @auth_status);



 set status= @auth_status;

 if @auth_status = 2 then 
  

     UPDATE contact

			SET     	ID = contactID , 
						userName = contactUserName ,
                        userPassward = contactUserPassword,
                        userLock = contactUserLockFlag

      WHERE ID = contactID;
      
      
			select contact.contactTypeID  into @ctid  from contact 
       
			where ID = contactID;
        
			set contcttypeid = @ctid ;
       
       
			insert into userpermission
            select 0 as ID, contactID as userID,  rolepermission.roleID as userRoleID ,
            rolepermission.permissionID as permissionID, now() as createdOn , now() as ModifiedOn , uid as CreatedBy
            from rolepermission 
            
            left join contacttyperolemap on contacttyperolemap.RoleID = rolepermission.roleID
			where contacttyperolemap.ContactTypeID = contcttypeid;
            
            
  
                        End if;
 End if;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `InsertUpdateContentMaster` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `InsertUpdateContentMaster`(   INOUT contentId  						DOUBLE,

		IN contentName   						VARCHAR(60), 

		IN contentDesc					 		VARCHAR(60), 

		IN contentDPCOLiquidRate 				DOUBLE,

		IN contentDPCOLiquidUnit 				DOUBLE,

		IN contentDPCOTabletRate 				DOUBLE,

		IN contentDPCOTabletUnit 				DOUBLE,

		IN contentDPCOInjectionRate 			DOUBLE,

		IN contentDPCOInjectionUnit 			DOUBLE,

		IN contentActiveFlag 					INT(11),
        
        IN  uid  int,
        IN  token varchar(30),
        IN InsertpermissionID int,
        IN UpdatepermissionID int,
        IN DeletepermissionID int,
        OUT status int 

	)
BEGIN

declare oldFlgActive int;

if contentId = 0 then -- insert

	call purpleaid.sp_authorization(uid,  token, InsertpermissionID , @auth_status);

    set status= @auth_status;

	if @auth_status = 2 then 
    
      INSERT INTO content

           (
            ID ,  
            Name    , 
            Description    , 
            DPCOliquidRate , 
            DPCOliquidUnit, 
            DPCOtabletRate,
            DPCOtabletUnit , 
            DPCOinjectionRate,
            DPCOinjectionUnit, 
            flgActive 
           )
      VALUES 
           ( 

			 contentId  ,	

			 contentName  ,

			 contentDesc,	

			 contentDPCOLiquidRate ,

			 contentDPCOLiquidUnit ,

			 contentDPCOTabletRate ,

			 contentDPCOTabletUnit ,	

			 contentDPCOInjectionRate ,

			 contentDPCOInjectionUnit ,

			 contentActiveFlag 	



             );



       set contentId = LAST_INSERT_ID();

End if;

 else   

select flgActive into oldFlgActive from content where ID = contentId ;

if (oldFlgActive != contentActiveFlag ) AND contentActiveFlag = 1 then 

 call purpleaid.sp_authorization(uid,  token, DeletepermissionID ,  @auth_status);
 
else

 call purpleaid.sp_authorization(uid,  token, UpdatepermissionID ,  @auth_status);

end if;

 set status= @auth_status;

 if @auth_status = 2 then 

     UPDATE content

      SET 
			  Name = contentName,
			  Description = contentDesc ,
			  DPCOliquidRate = contentDPCOLiquidRate ,
			  DPCOliquidUnit = contentDPCOLiquidUnit ,
			  DPCOtabletRate = contentDPCOTabletRate ,
			  DPCOtabletUnit = contentDPCOTabletUnit ,
			  DPCOinjectionRate = contentDPCOInjectionRate ,
			  DPCOinjectionUnit= contentDPCOInjectionUnit ,
			  flgActive = contentActiveFlag
      WHERE ID = contentId;
 set contentId = LAST_INSERT_ID();


       End if;
  End if;
  


   END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `InsertUpdateCustomerMaster` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `InsertUpdateCustomerMaster`(
INOUT `customerId` DOUBLE, 
IN `customerOtherInfo` VARCHAR(15), 
IN `customerName` VARCHAR(50), 
IN `customerAccountCode` VARCHAR(15), 
IN `customerAccountName` VARCHAR(50), 
IN `customerType` VARCHAR(15), 
IN `customerArea` DOUBLE, 
IN `customerSalesman` DOUBLE, 
IN `customerRemark` VARCHAR(100), 
IN `customerTaxId` DOUBLE, 
IN `customerLedgerType` VARCHAR(40), 
IN `customerAccountGroup` VARCHAR(45), 
IN `customerOpeningBalance` DOUBLE, 
IN `customerOpeningBalanceType` VARCHAR(15), 
IN `customerCreditType` VARCHAR(15), 
IN `customerCreditPeriod` DOUBLE, 
IN `customerAddressLine1` VARCHAR(50), 
IN `customerAddressLine2` VARCHAR(50), 
IN `customerCity` DOUBLE, 
IN `customerContactPerson` VARCHAR(50), 
IN `customerPhone` VARCHAR(15), 
IN `customerFax` VARCHAR(15), 
IN `customerEmail` VARCHAR(50), 
IN `customerActiveFlag` VARCHAR(50), 
IN `customerAutoEmailFlag` VARCHAR(50), 
IN `customerLockFlag` INT(11), 
IN `customerSubStockitsFlag` INT(11),
IN  uid  int,
IN  token varchar(30),
IN InsertpermissionID int,
IN UpdatepermissionID int,
IN DeletepermissionID int,
OUT status int 
)
    DETERMINISTIC
BEGIN 

declare oldFlgActive int;

if customerId = 0 then -- insert

	call purpleaid.sp_authorization(uid,  token, InsertpermissionID , @auth_status);

    set status= @auth_status;

	if @auth_status = 2 then 
		
        INSERT INTO customer

		         (

		           ID ,  
		           Other, 
		           Name, 
    	           acCode, 
		           acName, 
     	           Type,
		           Area, 
		           Salesman,
		           Remark, 
		           TaxID, 
		           LedgerType, 
		           accGroup, 
		           OpeningBalance, 
		           OpeningBalanceType,
		           CreditType, 
		           CreditPeriod,
                   AddrLine1, 
     	           AddrLine2,
		           City,
		           ContactPerson, 
		           Phone,
		           Fax,
		           Email,
		           flgActive,
		           flgEmail,
		           flgLock,
     				flgSubstockits					                     
		         )


		    VALUES 


		         ( 
			          customerId, 
			          customerOtherInfo, 
			          customerName, 
			          customerAccountCode, 
			          customerAccountName, 
			          customerType,
		              customerArea, 
			          customerSalesman,
			          customerRemark,
			          customerTaxId,
			          customerLedgerType, 
		               customerAccountGroup,
		              customerOpeningBalance, 
			          customerOpeningBalanceType,
			          customerCreditType, 
			          customerCreditPeriod,
			          customerAddressLine1, 
			          customerAddressLine2,
			          customerCity, 
			          customerContactPerson,
			          customerPhone, 
			          customerFax,
			          customerEmail, 
			          customerActiveFlag,
			          customerAutoEmailFlag, 
			          customerLockFlag,
                     customerSubStockitsFlag

                 );

                set customerId = LAST_INSERT_ID();  
end if;
 set customerId = LAST_INSERT_ID();  

      ELSE
    
/*
select flgActive into oldFlgActive from customer where ID = customerId ;

if (oldFlgActive != customerActiveFlag ) AND customerActiveFlag = 1 then 

 call purpleaid.sp_authorization(uid,  token, DeletepermissionID ,  @auth_status);
 
else*/

 call purpleaid.sp_authorization(uid,  token, UpdatepermissionID ,  @auth_status);


 set status= @auth_status;

 if @auth_status = 2 then 

					UPDATE customer
					SET ID = customerId,
					Other= customerOtherInfo,
					Name= customerName,
					acCode= customerAccountCode,
					acName= customerAccountName,
					Type= customerType,						              
                    Area= customerArea,
                    Salesman= customerSalesman,
                    Remark=customerRemark,
     				TaxID= customerTaxId,
					LedgerType= customerLedgerType,
					accGroup= customerAccountGroup,
                    OpeningBalance= customerOpeningBalance,
                    OpeningBalanceType= customerOpeningBalanceType,
                    CreditType=customerCreditType,
					CreditPeriod= customerCreditPeriod,
					AddrLine1= customerAddressLine1,
					AddrLine2= customerAddressLine2,
                    City= customerCity,
                    ContactPerson= customerContactPerson,	
					Phone= customerPhone,
					Fax= customerFax,
                    Email= customerEmail,		      
					flgActive= customerActiveFlag,
					flgEmail= customerAutoEmailFlag,
					flgLock= customerLockFlag,
					flgSubstockits=customerSubStockitsFlag
					WHERE ID = customerId;

                   

                End if;
   end if;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `InsertUpdateDirectCreditNote` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `InsertUpdateDirectCreditNote`(
INOUT CreditNoteID int,
IN CreditNoteReason int,
IN CreditNoteReasonOther varchar(60),
IN CreditNoteAmount decimal(10,2),
IN CreditNoteRemark  varchar(60),
IN CreditNoteflgLock int,
IN CreditNoteCustID int,
IN uid  int,
IN token varchar(30),
IN InsertPermissionID int,
OUT status int,
IN creditNoteDate varchar(50),
IN creditNoteStatus int,
IN creditNoteType int,
IN cnTypeDescription varchar(50),
IN cnStatusDescription varchar(50),
In voidFlag int,
IN lflag int,
IN lid double



)
BEGIN
if CreditNoteID = 0 then -- insert

 call purpleaid.sp_authorization(uid,  token, InsertpermissionID , @auth_status);

    set status= @auth_status;

 if @auth_status = 2 then 


      INSERT INTO creditnote

           (
      ID, 
      Type,
      date,
      custID,
      status,
      remark, 
      lockUser,
      lockDate,
      flgLock,
      Amount, 
      Reason,
      ReasonOther,
      CreatedBy,
      CreatedOn,
      TypeDescription,
      statusDecription,
      flgVoid,
      flgLedgerLock,
    ledgerUser,
    ledgerDate

           ) 

      VALUES 

           ( 

					CreditNoteID ,
					creditNoteType ,
					str_to_date(creditNoteDate , '%d/%m/%Y') ,
					CreditNoteCustID,
                    creditNoteStatus,
                    CreditNoteRemark,
                    uid,
                    now(),
                    CreditNoteflgLock,
                    CreditNoteAmount,
                    CreditNoteReason,
                    CreditNoteReasonOther,
                    uid,
                    now(),
                    cnTypeDescription ,
					cnStatusDescription ,
                    voidFlag,
                    lflag,
                    lid,
                    now()
                    
                 );

       set CreditNoteID = LAST_INSERT_ID();
end if;
set CreditNoteID = LAST_INSERT_ID();
else

 call purpleaid.sp_authorization(uid,  token, InsertpermissionID , @auth_status);

    set status= @auth_status;

 if @auth_status = 2 then 

update creditnote
set 
                    
     Type = creditNoteType, 
      date=  str_to_date(creditNoteDate , '%d/%m/%Y') ,
      custID = CreditNoteCustID,
      status  = creditNoteStatus,
      remark = CreditNoteRemark, 
      lockUser= uid,
      lockDate = now(),
      flgLock =CreditNoteflgLock ,
      Amount =CreditNoteAmount, 
      Reason =CreditNoteReason,
      ReasonOther = CreditNoteReasonOther,
      CreatedBy = uid,
      CreatedOn = now(),
      TypeDescription = cnTypeDescription,
      statusDecription = cnStatusDescription,
      flgVoid = voidFlag,
      flgLedgerLock = lflag,
      ledgerUser = uid,
      ledgerDate = now()
      
      where ID = CreditNoteID;
      end if;
end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `InsertUpdateDivisionMaster` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `InsertUpdateDivisionMaster`(

          INOUT  divisionId                         int, 
          IN  divisionCompanyId                     double, 
          IN  divisionCode                          VARCHAR(60), 
          IN  divisionName                          VARCHAR(30), 
          IN  divisionRemark                        VARCHAR(20), 
          IN  divisionContactName                   VARCHAR(15),
          IN  divisionContactPhone                  VARCHAR(60), 
          IN  divisionContactEmail                  VARCHAR(60),
          IN  divisionActiveFlag                    INT(11),
          IN  uid                                   int,
		  IN  token                                 varchar(30),
          IN  InsertpermissionID                    int,
		  IN  UpdatepermissionID                    int,
		  IN  DeletepermissionID                    int,
		  OUT status                                int 
    )
BEGIN 

declare oldFlgActive int;


if divisionId = 0 then -- insert

	call purpleaid.sp_authorization(uid,  token, InsertpermissionID , @auth_status);

    set status= @auth_status;

	if @auth_status = 2 then 


      INSERT INTO division

           (

             ID,  
             CID, 
             Code, 
             Name, 
             Remark, 
             ContactPerson,
             Phone, 
             Email,
             flgActive 
       
           )

      VALUES 

           ( 

            divisionId, 
            divisionCompanyId, 
            divisionCode, 
            divisionName, 
            divisionRemark, 
            divisionContactName,
            divisionContactPhone, 
            divisionContactEmail,
            divisionActiveFlag                      
        );

   set divisionId = LAST_INSERT_ID();

    end if; 

 set divisionId = LAST_INSERT_ID();

 else
    


/*select flgActive into oldFlgActive from division where ID = divisionId ;

if (oldFlgActive != divisionActiveFlag ) AND divisionActiveFlag = 1 then 

 call purpleaid.sp_authorization(uid,  token, DeletepermissionID ,  @auth_status);
 
 
else
*/
 call purpleaid.sp_authorization(uid,  token, UpdatepermissionID ,  @auth_status);


 set status= @auth_status;

 if @auth_status = 2 then 

     UPDATE division

      SET 
      ID = divisionId,
      CID    = divisionCompanyId,
      Code    = divisionCode,
      Name = divisionName,
      Remark= divisionRemark,
      ContactPerson= divisionContactName,
      Phone = divisionContactPhone,
      Email= divisionContactEmail,
      flgActive=divisionActiveFlag
      
      WHERE ID = divisionId;

    

      End if;
    End if;

   
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `insertUpdateFavouriteContacts` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `insertUpdateFavouriteContacts`(

IN uid  varchar(40),
IN cId  double,
IN  token varchar(30),
IN InsertpermissionID int,
OUT status int 

)
BEGIN

	call purpleaid.sp_authorization(uid,  token, InsertpermissionID , @auth_status);

    set status= @auth_status;

	if @auth_status = 2 then 
    
IF NOT EXISTS(SELECT contactID, userID  FROM favouritecontacts WHERE contactID = cId and cast(userID  as char )= uid )then 

select 'IN';
		   
           INSERT INTO favouritecontacts

		         (
					userID, 
                    contactID
                 )

		    VALUES 

		         ( 
				
					 uid ,
					 cId 

                  );

 	End if;
End if;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `InsertUpdateMrMaster` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `InsertUpdateMrMaster`(

          INOUT  mrId                    DOUBLE       , 

          IN  mrDivisionId                 DOUBLE   ,

    IN mrCompanyId      DOUBLE   ,

          IN  mrName                       VARCHAR(60)   , 

          IN  mrRemark                     VARCHAR(60)    , 

          IN  mrTelephone                   VARCHAR(60)  ,

          IN  mrEmail             VARCHAR(60)  ,

          IN  mrManagerName                VARCHAR(60)    ,

          IN  mrManagerTelephone              VARCHAR(60)    , 

          IN  mrManagerEmail               VARCHAR(60)    ,

          IN  mrActiveFlag                 INT(11)      , 

          IN  mrEmailreportFlag            INT(11)     

                 

              )
BEGIN

        IF NOT EXISTS (SELECT * FROM mr WHERE ID =mrId) then  

    

    

     INSERT INTO mr

      (

        ID ,  

        DID,

        CID,

         Name, 

        Remark, 

        Phone, 

        Email,

        Manager , 

        mgrPhone,

        mgrEmail, 

        flgActive, 

        flgEmail                    

       

      )

     VALUES 

      ( 

       mrId, 

       mrDivisionId,

       mrCompanyId,

       mrName, 

       mrRemark , 

       mrTelephone,

       mrEmail,

       mrManagerName ,

       mrManagerTelephone , 

       mrManagerEmail ,

       mrActiveFlag, 

       mrEmailreportFlag              

      ) ;  

    set mrId = LAST_INSERT_ID();      

   ELSE

     

     UPDATE mr

     

      SET ID = mrId,

      DID = mrDivisionId,

      CID= mrCompanyId,

      Name = mrName,

      Remark = mrRemark,

      Phone = mrTelephone,

      Email = mrEmail,

      Manager = mrManagerName,

      mgrPhone = mrManagerTelephone,

      mgrEmail = mrManagerEmail,

      flgActive = mrActiveFlag,

      flgEmail = mrEmailreportFlag

     

      WHERE ID = mrId ;

                        End if;

   END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `InsertUpdateProductBatch` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `InsertUpdateProductBatch`(
-- --------------------------------------------------------------------------------------------------- --
-- --------------------------------------------------------------------------------------------------- --

-- Name : InsertUpdateProductBatch
-- Author : Nikita Pise
-- Date : 

-- ------------------------------------------CHANGE LOG ---------------------------------------------- --

-- VersionNo.   Date                Change                                                    Author
-- 1.0      	11 June 2015        Changed Date format For expiryDate and purchaseDate       Nikita Pise
--                                 '%Y/%m/%d'  to '%d/%m/%Y'


-- --------------------------------------------------------------------------------------------------- --
-- --------------------------------------------------------------------------------------------------- --

INOUT `grProductBatchId` DOUBLE,

 IN `grProductBatchNo` VARCHAR(90),

 IN `grProductBatchGrId` DOUBLE,

 IN `grProductBatchExpiryDate` VARCHAR(45),

 IN `grProductBatchMRP` DECIMAL(10,2),

 IN `grProductBatchTrade` DECIMAL(10,2),

 IN `grProductBatchPurchaseRate` DECIMAL(10,2),

 IN `grProductBatchTradeDiscount` DECIMAL(10,2),

 IN `grProductBatchSellRate` DECIMAL(10,2),

 IN `grProductBatchPurchaseDate` VARCHAR(45),

 IN `grProductBatchActiveFlag` INT(11),

 IN `grProductBatchLockFlag` INT(11),
 
  IN grProductBatchIsDeleted INT(11),
 IN  uid  int,
 IN  token varchar(30),
 IN InsertpermissionID int,
 OUT status int ,
 IN checkIfSaleFlag int,
 IN specialdisc DECIMAL(10,2),
 IN specialdiscamount DECIMAL(10,2),
 IN batchRemark varchar(200)
 )
    DETERMINISTIC
BEGIN 
if grProductBatchIsDeleted = 0 then 

if grProductBatchId = 0 then -- insert

	call purpleaid.sp_authorization(uid,  token, InsertpermissionID , @auth_status);

    set status= @auth_status;

	if @auth_status = 2 then 


		    INSERT INTO productbatch



		         (



		          ID, 

                  batchNo,

                  grID,

                  expiryDate, 

                  MRP,

                  trade,

                  purchaseRate,

                  tradeDiscount,

                  sellRate,

                  purchaseDate,

                  flgActive,

                  flgLock,
                  
                  deleted,
                  specialDiscount,
                  specialDiscountAmt,
                  Remark
                 
                  
                  
                  

                 

		         )



		    VALUES 



		         (  
					grProductBatchId,
                    grProductBatchNo ,
                    grProductBatchGrId,
                    str_to_date( grProductBatchExpiryDate , '%d/%m/%Y') ,
                    grProductBatchMRP ,
                    grProductBatchTrade ,
                    grProductBatchPurchaseRate ,
                    grProductBatchTradeDiscount,
                    grProductBatchSellRate,
                    

					-- str_to_date( grProductBatchPurchaseDate , '%d/%m/%Y') ,
                    current_date(),
                    

                    grProductBatchActiveFlag ,


					grProductBatchLockFlag,
                    
                    grProductBatchIsDeleted,
					specialdisc,
					specialdiscamount ,
                    batchRemark

                 );

  



                set grProductBatchId = LAST_INSERT_ID();  
end if;

set grProductBatchId = LAST_INSERT_ID();  
      ELSE

call purpleaid.sp_authorization(uid,  token, InsertpermissionID ,  @auth_status);


 set status= @auth_status;

 if @auth_status = 2 then 

					UPDATE productbatch



				

					SET 

                    

                 batchNo = grProductBatchNo,

                
			     grID = grProductBatchGrId,

                 
                 expiryDate =  str_to_date(grProductBatchExpiryDate , '%d/%m/%Y') ,
                                 
                 MRP = grProductBatchMRP,

                 
                 trade= grProductBatchTrade,

                 
                 purchaseRate = grProductBatchPurchaseRate,

                 
                 tradeDiscount = grProductBatchTradeDiscount,

                 
                 sellRate = grProductBatchSellRate,
                 
                 purchaseDate =  current_date(),-- str_to_date(grProductBatchPurchaseDate , '%d/%m/%Y') ,
                  

                 flgActive= grProductBatchActiveFlag,

                 
                 flgLock = grProductBatchLockFlag,
                 
                 deleted = grProductBatchIsDeleted,
                 
				 specialDiscount = specialdisc,
                 
                 specialDiscountAmt = specialdiscamount,
                 Remark = batchRemark
                
                 WHERE ID = grProductBatchId;



                End if;
 End if;



 else
 
delete from productbatch where ID = grProductBatchId;
delete from stockinward where PBID = grProductBatchId;

 End if;
 

			END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `InsertUpdateProductBatchActive` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `InsertUpdateProductBatchActive`(
INOUT `GrProductBatchActiveId` DOUBLE,

 IN `GrProductBatchNo` VARCHAR(15),

 IN `GrProductBatchGrId` DOUBLE,

 IN `GrProductBatchExpiryDate` VARCHAR(45),

 IN `GrProductBatchMRP` DECIMAL(10,2),

 IN `GrProductBatchTrade` DECIMAL(10,2),

 IN `GrProductBatchPurchaseRate` DECIMAL(10,2),

 IN `GrProductBatchTradeDiscount` DECIMAL(10,2),

 IN `GrProductBatchSellRate` DECIMAL(10,2),

 IN `GrProductBatchPurchaseDate` VARCHAR(15),

 IN `GrProductBatchActiveFlag` INT(11),

 IN `GrProductBatchLockFlag` INT(11),

 IN  GrProductBatchId double,
 
 IN grProductBatchIsDeleted INT(11),
  IN  uid  int,
 IN  token varchar(30),
 IN InsertpermissionID int,
 OUT status int  ,
 IN checkIfSaleFlag int,
  IN specialdisc DECIMAL(10,2),
 IN specialdiscamount DECIMAL(10,2),
 IN batchRemark varchar(200)

 )
    DETERMINISTIC
BEGIN 
 if grProductBatchIsDeleted = 0 then 

if GrProductBatchActiveId = 0 then -- insert

	call purpleaid.sp_authorization(uid,  token, InsertpermissionID , @auth_status);

    set status= @auth_status;

	if @auth_status = 2 then 


		    INSERT INTO productbatchactive



		         (



		          ID, 

                  batchNo,

                  grID,

                  expiryDate, 

                  MRP,

                  trade,

                  purchaseRate,

                  tradeDiscount,

                  sellRate,

                  purchaseDate,

                  flgActive,

                  flgLock,

                  PBID,
                  
                  deleted,
                  specialDiscount,
                  specialDiscountAmt,
                  Remark

		         )



		    VALUES 



		         (  GrProductBatchActiveId,

					GrProductBatchNo ,

					GrProductBatchGrId,

					  

                       str_to_date(GrProductBatchExpiryDate , '%d/%m/%Y') ,

                     

					  GrProductBatchMRP ,

					  GrProductBatchTrade ,

					  GrProductBatchPurchaseRate ,

					  GrProductBatchTradeDiscount,

					  GrProductBatchSellRate,

					    str_to_date(GrProductBatchPurchaseDate , '%d/%m/%Y') ,

                      

                     

					  GrProductBatchActiveFlag ,

					  GrProductBatchLockFlag,

					GrProductBatchId,

				grProductBatchIsDeleted,
                specialdisc,
					specialdiscamount ,
                    batchRemark

                 );

  



                set GrProductBatchActiveId = LAST_INSERT_ID();  
end if;
   set GrProductBatchActiveId = LAST_INSERT_ID();  

      ELSE


call purpleaid.sp_authorization(uid,  token, InsertpermissionID ,  @auth_status);


 set status= @auth_status;

 if @auth_status = 2 then 


					UPDATE productbatchactive



				

					SET 

                    

                  batchNo = GrProductBatchNo,

                  grID = GrProductBatchGrId,

                  expiryDate =  str_to_date(GrProductBatchExpiryDate , '%d/%m/%Y') ,

                  MRP = GrProductBatchMRP,

                  trade= GrProductBatchTrade,

                  purchaseRate = GrProductBatchPurchaseRate,

                  tradeDiscount = GrProductBatchTradeDiscount,

                  sellRate = GrProductBatchSellRate,

                  purchaseDate = str_to_date(GrProductBatchPurchaseDate , '%d/%m/%Y') ,

                  flgActive= GrProductBatchActiveFlag,

                  flgLock = GrProductBatchLockFlag,

                  PBID = GrProductBatchId,
                  
                  deleted = grProductBatchIsDeleted,
                   specialDiscount = specialdisc,
                 
                 specialDiscountAmt = specialdiscamount,
                 Remark = batchRemark

                  WHERE ID = GrProductBatchActiveId;


                End if;
   End if;
 
 else
 
delete from productbatchactive where ID = GrProductBatchActiveId;
delete from stockactive where PBID = GrProductBatchActiveId;

   End if;


			END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `InsertUpdateProductBatchActiveForSM` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `InsertUpdateProductBatchActiveForSM`(

INOUT `GrProductBatchActiveId` DOUBLE,
 IN `GrProductBatchNo` VARCHAR(15),
 IN `GrProductBatchGrId` DOUBLE,
 IN `GrProductBatchExpiryDate` VARCHAR(45),
 IN `GrProductBatchMRP` DECIMAL(10,2),
 IN `GrProductBatchTrade` DECIMAL(10,2),
 IN `GrProductBatchPurchaseRate` DECIMAL(10,2),
 IN `GrProductBatchTradeDiscount` DECIMAL(10,2),
 IN `GrProductBatchSellRate` DECIMAL(10,2),
 IN `GrProductBatchPurchaseDate` VARCHAR(15),
 IN `GrProductBatchActiveFlag` INT(11),
 IN `GrProductBatchLockFlag` INT(11),
 IN  GrProductBatchId double,
 IN grProductBatchRemark varchar(50),
 IN grProductBatchIsDeleted INT(11)	,
 IN  uid  int,
 IN  token varchar(30),
 IN InsertpermissionID int,
 IN UpdatepermissionID int,
 OUT status int 

)
    DETERMINISTIC
BEGIN 

if GrProductBatchActiveId = 0 then -- insert

	call purpleaid.sp_authorization(uid,  token, InsertpermissionID , @auth_status);

    set status= @auth_status;

	if @auth_status = 2 then 

		    INSERT INTO productbatchactive

		         (

		          ID, 
                  batchNo,
                  grID,
                  expiryDate, 
                  MRP,
                  trade,
                  purchaseRate,
                  tradeDiscount,
                  sellRate,
                  purchaseDate,
                  flgActive,
                  flgLock,
                  PBID,
                  Remark,
                  deleted
		         )

		    VALUES 

		         ( 
					 GrProductBatchActiveId,
					 GrProductBatchNo ,
					 GrProductBatchGrId,
					 str_to_date(GrProductBatchExpiryDate , '%d/%m/%Y') ,
					 GrProductBatchMRP ,
					 GrProductBatchTrade ,
					 GrProductBatchPurchaseRate ,
					 GrProductBatchTradeDiscount,
					 GrProductBatchSellRate,
					 str_to_date(GrProductBatchPurchaseDate , '%d/%m/%Y') ,
					 GrProductBatchActiveFlag ,
					 GrProductBatchLockFlag,
					 GrProductBatchId,
                     grProductBatchRemark,
                     grProductBatchIsDeleted
	   
                 );
  

                set GrProductBatchActiveId = LAST_INSERT_ID();  
end if;
      ELSE
      
call purpleaid.sp_authorization(uid,  token, UpdatepermissionID ,  @auth_status);


 set status= @auth_status;

 if @auth_status = 2 then 


					UPDATE productbatchactive

				
				SET 
                    
                  batchNo = GrProductBatchNo,
                  grID = GrProductBatchGrId,
                  expiryDate =  str_to_date(GrProductBatchExpiryDate , '%d/%m/%Y') ,
                  MRP = GrProductBatchMRP,
                  trade= GrProductBatchTrade,
                  purchaseRate = GrProductBatchPurchaseRate,
                  tradeDiscount = GrProductBatchTradeDiscount,
                  sellRate = GrProductBatchSellRate,
                  purchaseDate = str_to_date(GrProductBatchPurchaseDate , '%d/%m/%Y') ,
                  flgActive= GrProductBatchActiveFlag,
                  flgLock = GrProductBatchLockFlag,
                  PBID = GrProductBatchId,
                  Remark = grProductBatchRemark,
                  deleted = grProductBatchIsDeleted
               WHERE ID = GrProductBatchActiveId;
                 set GrProductBatchActiveId = LAST_INSERT_ID();  

              End if;
 End if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `InsertUpdateProductCreditNote` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `InsertUpdateProductCreditNote`(

IN CreditNoteType int,
IN CreditNoteCustID double,
INOUT CreditNoteID double,
IN CreditNoteDate varchar(40),
IN CreditNoteStatus int,
IN CreditNoteRemark varchar(40),
IN CreditNoteflgLock int,
IN creditNoteLockedBy INT,
IN CreditNoteLockedOn varchar(50),
IN CreditNoteflgVoid int,
IN creditNoteVoidBy int,
IN CreditNoteflgLedger int,
IN creditNoteLedgerBy int,
IN CreditNoteLedgerOn varchar(50),
IN CreditNoteAmount decimal(10,2),
IN CreditNoteProductTotalVATamt decimal(10,2),
IN CreditNoteProductTotalAmount decimal(10,2),
IN CreditNoteVoidReason varchar(50),
IN uid int,
IN token varchar(30),
IN InsertpermissionID int,
OUT status int,
IN CreditNoteVerifiedFlag int,
IN CreditNoteVerifiedOn varchar(50),
IN creditNoteVerifiedBy int,
IN CreditNoteVoidOn varchar(50),
IN cnTypeDescription varchar(50),
IN cnStatusDescription varchar(50)

)
BEGIN

declare lastVerifiedOn datetime;
declare lastVerifiedByID double;

declare lastLockedOn datetime;
declare lastLockedByID double;

declare lastLedgerOn datetime;
declare lastLedgerByID double;

declare lastVoidOn datetime;
declare lastVoidByID double;



if CreditNoteID = 0 then -- insert

	call purpleaid.sp_authorization(uid,  token, InsertpermissionID , @auth_status);

    set status= @auth_status;

	if @auth_status = 2 then 


  INSERT INTO creditnote

	(	
    
    
        Type,
        custID,
		ID, 
        date,
        status, 
        remark,
        
       	flgLock,
        lockUser, 
        lockDate,
        
        flgVoid,
        voidBy,
        
        flgLedgerLock,
        ledgerUser,
        ledgerDate,
       
		Amount,
        creditNoteProductTotalVATAmount,
        creditNoteProductTotalAmount,
        voidReason, 
       
		CreatedBy,
        CreatedOn,
        
        flgVerified,
        verifiedBy,
        verifiedOn,
        
		voidOn,
         TypeDescription,
      statusDecription
      )

      VALUES 

          ( 
			 CreditNoteType ,
			 CreditNoteCustID ,
			 CreditNoteID ,
			 str_to_date(CreditNoteDate , '%d/%m/%Y') ,
			 1 ,
			 CreditNoteRemark,
             
             CreditNoteflgLock ,
             creditNoteLockedBy ,
			 now() ,
             
             CreditNoteflgVoid ,
             creditNoteVoidBy,
             
			 CreditNoteflgLedger ,
             creditNoteLedgerBy ,
             now() ,

             
             CreditNoteAmount ,
             CreditNoteProductTotalVATamt ,
			 CreditNoteProductTotalAmount ,
			
             CreditNoteVoidReason ,
             uid,
			 now(),
             
             
             
              CreditNoteVerifiedFlag,
              creditNoteVerifiedBy,
              
              now(),
			  
            now(),
            cnTypeDescription ,
					cnStatusDescription
             

       );

    set CreditNoteID = LAST_INSERT_ID();
    
 end if;  
   
else

 

 call purpleaid.sp_authorization(uid,  token, InsertpermissionID ,  @auth_status);


 set status= @auth_status;

 if @auth_status = 2 then 


if(CreditNoteVerifiedFlag = 1)  then
	 set lastVerifiedOn =  (SELECT  verifiedOn from creditnote where ID = CreditNoteID);
	 set lastVerifiedByID = (SELECT  verifiedBy from creditnote where ID = CreditNoteID);
	 
         
	 if ((lastVerifiedOn != str_to_date(CreditNoteVerifiedOn, '%d/%m/%Y %H:%i:%s')) and (lastVerifiedByID != creditNoteVerifiedBy)) then   
	 	set	CreditNoteVerifiedOn  = date_format(now(),'%d/%m/%Y %H:%i:%s');
	  end if;

else
	 set CreditNoteVerifiedOn = null;
	 set creditNoteVerifiedBy = null;
    
end if;



if(CreditNoteflgLock = 1)  then
	 set lastLockedOn =  (SELECT  lockDate from creditnote where ID = CreditNoteID);
	 set lastLockedByID = (SELECT  lockUser from creditnote where ID = CreditNoteID);
	 
         
	 if ((lastLockedOn != str_to_date(CreditNoteLockedOn, '%d/%m/%Y %H:%i:%s')) and (lastLockedByID != creditNoteLockedBy)) then   
	 	set	CreditNoteLockedOn  = date_format(now(),'%d/%m/%Y %H:%i:%s');
	  end if;

else
	 set CreditNoteLockedOn = null;
	 set creditNoteLockedBy = null;
    
end if;


if(CreditNoteflgLedger = 1)  then
	 set lastLedgerOn =  (SELECT  ledgerDate from creditnote where ID = CreditNoteID);
	 set lastLedgerByID = (SELECT  ledgerUser from creditnote where ID = CreditNoteID);
	 
         
	 if ((lastLedgerOn != str_to_date(CreditNoteLedgerOn, '%d/%m/%Y %H:%i:%s')) and (lastLedgerByID != creditNoteLedgerBy)) then   
	 	set	CreditNoteLedgerOn  = date_format(now(),'%d/%m/%Y %H:%i:%s');
	  end if;

else
	 set CreditNoteLedgerOn = null;
	 set creditNoteLedgerBy = null;
    
end if;


if(CreditNoteflgVoid = 1)  then
	 set lastVoidOn =  (SELECT  voidOn from creditnote where ID = CreditNoteID);
	 set lastVoidByID = (SELECT  voidBy from creditnote where ID = CreditNoteID);
	 
         
	 if ((lastVoidOn != str_to_date(CreditNoteVoidOn, '%d/%m/%Y %H:%i:%s')) and (lastVoidByID != creditNoteVoidBy)) then   
	 	set	CreditNoteVoidOn  = date_format(now(),'%d/%m/%Y %H:%i:%s');
	  end if;

else
	 set CreditNoteVoidOn = null;
	 set creditNoteVoidBy = null;
    
end if;



    
    UPDATE creditnote

     SET 


		Type = CreditNoteType,
        custID = CreditNoteCustID,
		
        date = str_to_date(CreditNoteDate , '%d/%m/%Y'),
        status = CreditNoteStatus ,
        remark = CreditNoteRemark,
       	flgLock = CreditNoteflgLock,
        lockUser = creditNoteLockedBy, 
        lockDate = str_to_date(CreditNoteLockedOn, '%d/%m/%Y %H:%i:%s'),
        flgVoid = CreditNoteflgVoid,
        voidBy = creditNoteVoidBy,
        flgLedgerLock = CreditNoteflgLedger,
        ledgerUser = creditNoteLedgerBy,
        ledgerDate =  str_to_date(CreditNoteLedgerOn, '%d/%m/%Y %H:%i:%s'),
        Amount = CreditNoteAmount,
        creditNoteProductTotalVATAmount = CreditNoteProductTotalVATamt,
        creditNoteProductTotalAmount = CreditNoteProductTotalAmount,
        voidReason = CreditNoteVoidReason, 
       
        flgVerified = CreditNoteVerifiedFlag,
        verifiedBy = creditNoteVerifiedBy,
        verifiedOn =  str_to_date(CreditNoteVerifiedOn, '%d/%m/%Y %H:%i:%s'),
		voidOn = str_to_date(CreditNoteVoidOn, '%d/%m/%Y %H:%i:%s'),

		ModifiedBy = uid,
        
        ModifiedOn = now(),
         TypeDescription = cnTypeDescription,
      statusDecription = cnStatusDescription
        
        WHERE ID = CreditNoteID;
          
    End if;
        
  
    End if;



END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `InsertUpdateProductMaster` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `InsertUpdateProductMaster`(INOUT `productId` DOUBLE,

 IN `productActiveFlag` boolean,

 IN `productBox` DOUBLE,

 IN `productCompanyId` DOUBLE,

 IN `productDPCOFlag` boolean,

 IN `productDesc` varchar(50),

 IN `productDiscount` VARCHAR(60),

 IN `productDivisionId` double,

 IN `productMrp` decimal,

 IN `productNarcoticsFlag` boolean,

 IN `productOtherInfo` varchar(50),

 IN `productPack` double,

 IN `productPurchaseRate` decimal,

 IN `productRemark` varchar(50),

 IN `productSaleRate` decimal,

 IN `productShelfId` varchar(50),

 IN `productCategory` INT(11),

 IN `productDPCOrate` double,

 IN `productTypeId` double,

 IN `productUPCId` varchar(50),

 IN `productName` varchar(50),

 IN `productLockFlag` boolean,
 
 IN  uid   int,

 IN  token varchar(30),

 IN  InsertpermissionID  int,

 IN  UpdatepermissionID  int,

 IN  DeletepermissionID  int,

 OUT status  int 
 
 
 
 )
BEGIN 

declare oldFlgActive int;


if productId = 0 then -- insert

	call purpleaid.sp_authorization(uid,  token, InsertpermissionID , @auth_status);

    set status= @auth_status;

	if @auth_status = 2 then 

    INSERT INTO product
     (
		flgActive, 

		Box, 

		CID, 

		flgDPCO, 

		Description,

		ProductDiscount,

		DID,

		MRP,

		flgNarcotics,

		Other,

		Pack,

		PurchaseRate,

		Remark,

		SaleRate,

		ShelfID,

		prodCategory,

		DPCOrate,

		`Type`,

		upcID,

		`Name`,

		flgLock

     )

      VALUES 

           ( 

			productActiveFlag, 

            productBox,

            productCompanyId,

            productDPCOFlag,

            productDesc,

            productDiscount,

            productDivisionId,

            productMrp,

            productNarcoticsFlag,

            productOtherInfo,

            productPack,

            productPurchaseRate,

            productRemark,

            productSaleRate,

            productShelfId,

			productCategory,

			productDPCOrate,

            productTypeId,

            productUPCId,

            productName,

            productLockFlag
            
            
            );

   --   set productId = LAST_INSERT_ID();
      
      
    end if;  
  set productId = LAST_INSERT_ID();
    ELSE
/*   
select flgActive into oldFlgActive from product where ID = productId ;

if (oldFlgActive != productActiveFlag ) AND productActiveFlag = 1 then 

 call purpleaid.sp_authorization(uid,  token, DeletepermissionID ,  @auth_status);
 
else
*/
 call purpleaid.sp_authorization(uid,  token, UpdatepermissionID ,  @auth_status);



 set status= @auth_status;

 if @auth_status = 2 then 
     

     UPDATE product

     

      SET 

        flgActive=productActiveFlag, 

        Box=productBox, 

        CID=productCompanyId, 

        flgDPCO=productDPCOFlag, 

        Description=productDesc,

        ProductDiscount=productDiscount,

        DID=productDivisionId,

        MRP=productMrp,

        flgNarcotics=productNarcoticsFlag,

        Other=productOtherInfo,

        Pack=productPack,

        PurchaseRate=productPurchaseRate,

        Remark=productRemark,

        SaleRate=productSaleRate,

        ShelfID=productShelfId,

		prodCategory=productCategory,

		DPCOrate=productDPCOrate,

        `Type`=productTypeId,

        upcID=productUPCId,

        `Name`=productName,

        flgLock=productLockFlag

        WHERE ID = productId;

      
      
      
    end if;  

End if;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `InsertUpdateRateDiffrence` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `InsertUpdateRateDiffrence`(
IN CreditNoteRateDifferenceId double,
IN CreditNoteLessPercentage decimal(10,2),
IN CreditNoteLessAmt decimal(10,2),
IN CreditNoteProductReturnAmountTotal decimal(10,2),
IN CreditNoteVATrefund decimal(10,2),
IN  uid  int,
IN  token varchar(30),
IN UpdatepermissionID int,
OUT status int 
)
BEGIN

    call purpleaid.sp_authorization(uid,  token, UpdatepermissionID ,  @auth_status);


 set status= @auth_status;

 if @auth_status = 2 then 

    UPDATE creditnoteratedifference

    SET    

           lessPecentage = CreditNoteLessPercentage,
           lessAmount = CreditNoteLessAmt,
           returnAmount = CreditNoteProductReturnAmountTotal,
            VATrefund = CreditNoteVATrefund

			

    WHERE   ID  = CreditNoteRateDifferenceId  ;

	
end if;
	



END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `insertUpdateReason` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `insertUpdateReason`(
inout ReasonID double,
in newReason varchar(45), 
in returnFlag int ,
in creditFlag int,
in debitFlag int ,
out status1 int,
 IN  uid int,
 IN  token  varchar(30),
 IN InsertpermissionID  int,
 OUT status  int

)
proc_label:BEGIN

declare spflgSystemValue int ;
declare spflgReturn int ;
declare spflgCreditNote int ;
declare spflgDebitNote int ;
declare str varchar(45);
declare sperror int;


 if(ReasonID>0) then
 
	 call purpleaid.sp_authorization(uid,  token, InsertpermissionID ,  @auth_status);

	  set status= @auth_status;

	  if @auth_status = 2 then
 
		  SELECT flgsystemvalue ,flgreturn ,
		  flgcreditnote,flgdebitnote
		  into spflgSystemValue, spflgReturn, spflgCreditNote, spflgDebitNote
		  from reason WHERE reason.id=ReasonID;
		
		  
			 if found_rows() = 0 then 
				set status1 = 13; 	-- cannot update  as record not found (possibly deleted by other user)
				LEAVE proc_label; -- exit;
			end if;
			
			if(spflgSystemValue = 1) then 
				set status1 = 11;	-- system value
			else
			 set sperror = 0;
				if not (spflgReturn = 0 and spflgCreditNote= 0 and spflgDebitNote=0) then
					set status1 = 10;	-- not system value
					
					if(spflgReturn != returnFlag) and returnFlag = 0 then
						if exists (select returnregisterdetails.ID
							from returnregisterdetails
							where returnregisterdetails.conditions = ReasonID limit 1) then
							if found_rows() > 0 then
								set sperror = 1;-- set only if in use
							end if;
								-- select sperror;
						end if;
						 -- select sperror;
					end if;
					
					if(spflgCreditNote!=creditFlag) and creditFlag = 0  then 
						if exists (select creditnote.id from  creditnote
									where  creditnote.Reason= ReasonID limit 1) then
									if found_rows() > 0 then
										set sperror = 1;-- set only if in use
									end if;
									-- select sperror;
						end if;
						 -- select sperror;
					end if;
					
					if (spflgDebitNote != debitFlag) and debitFlag = 0 then
							if exists (select debitnote.id from  debitnote
									where  debitnote.Reason= ReasonID limit 1) then
									if found_rows() > 0 then
										set sperror = 1;-- set only if in use
									end if;
									-- select sperror;
							end if;
							 -- select sperror;
					end if;
					-- select sperror; 
				end if;
				 if  sperror = 0 then    
					update reason 
						set
							Reason = newReason ,
							flgReturn = returnFlag,
							flgCreditNote= creditFlag,
							flgDebitNote = debitFlag
							where ID = ReasonID;
							
							set status1 = 0; -- updates successfully
					else
					  set status1 = 12; -- reason is in use
					end if;
					
				 end if;
		end if;
 else
 
call purpleaid.sp_authorization(uid,  token, InsertpermissionID ,  @auth_status);

set status= @auth_status;

if @auth_status = 2 then
 
		set str = lower(newReason);

			if not exists(select Reason from reason where lower(Reason) = str) then

						insert into reason(

								ID,
								Reason, 
								flgSystemValue,
								flgReturn, 
								flgCreditNote,
								flgDebitNote
						   )
						   
						   values(
						   
						   0,
						   str,
							0,
						   returnFlag,
						   creditFlag,
						   debitFlag 
						   );
						   
						   set status1 = 0;
							set ReasonID = LAST_INSERT_ID();
			else
				set status1 = 10;  -- 10 is duplicate reason
			end if;
	 end if;
end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `insertUpdateReceipt` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `insertUpdateReceipt`(
inout RID double,
in SID double,
in fromReceiptNo int(11),
in toReceiptNo int(11),
in receiptRemark varchar(90),
IN  uid  int,
IN  token varchar(30),
IN InsertpermissionID int,
out salesman varchar(45),
out status int
)
BEGIN

if RID = 0 then 

	call purpleaid.sp_authorization(uid,  token, InsertpermissionID , @auth_status);

		set status= @auth_status;

		if @auth_status = 2 then 

			if not exists(select id from managereceipt where id = RID) then

			insert into managereceipt ( id,SalesmanID, Date, ReceiptFrom, ReceiptTo, Remark, IssuedBy,IssuedOn)
					values(
								0,
								SID,
								now(),
								fromReceiptNo,
								toReceiptNo,
								receiptRemark,
								uid,
								now()
								
					);
					set RID = LAST_INSERT_ID();
					
					set salesman  = (select ifnull(salesman.Name,' ' )  as 'salesmanName' from salesman
					join managereceipt on  salesman.id = managereceipt.SalesmanID where salesman.id = SID and managereceipt.id = RID);
					-- set status = 0;
				end if;
			end if;
	else
    
		call purpleaid.sp_authorization(uid,  token, InsertpermissionID ,  @auth_status);
		set status= @auth_status;

		if @auth_status = 2 then 

				update managereceipt
				set
					SalesmanID = SID,
					ReceiptFrom = fromReceiptNo,
					ReceiptTo = toReceiptNo,
					Remark = receiptRemark where id = RID; -- and SalesmanID = SID;
					
					set salesman  = (select ifnull(salesman.Name,' ' )  as 'salesmanName' from salesman
					join managereceipt on  salesman.id = managereceipt.SalesmanID where salesman.id = SID and managereceipt.id = RID);
					
		end if;
  end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `InsertUpdateRegionMaster` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `InsertUpdateRegionMaster`(INOUT regionID double,IN `regionCode` VARCHAR(40), IN `regionDescription` VARCHAR(40))
    DETERMINISTIC
BEGIN 

IF NOT EXISTS (SELECT * FROM region WHERE ID = regionID) then



		    INSERT INTO region

		         (		ID,

		               code,  

					   description

					  

		         )

		    VALUES 

		         ( 	

				regionID,

				regionCode                  , 

		        regionDescription   

			  

                

                     );

                  set regionID = LAST_INSERT_ID();

               ELSE

					

					UPDATE region

					

						SET 

						ID = regionID,

						code = regionCode,

						description    = regionDescription

						WHERE ID = regionID;

                        End if;

			END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `InsertUpdateReturnRegister` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `InsertUpdateReturnRegister`(

	INOUT returnRegisterId double,
	IN returnRegisterDate varchar(30),
	IN returnRegisterCustId double,
	IN returnRegisterCreditNoteId double,
	IN returnRegisterType INT(11),
	IN returnRegisterRemark varchar(60),
	IN returnRegisterTotal DECIMAL,
	IN returnRegisterTotalType INT(11),
	IN returnRegisterStatus INT(11),
	IN returnRegisterTotalProducts double,
	IN returnRegisterLockReason varchar(60),
	IN returnRegisterLockFlag INT(11),
	IN returnRegisterVoidFlag INT(11),
	IN returnRegisterVerifiedFlag INT(11),
	IN returnRegisterVerifiedByID double,
	IN returnRegisterVerifiedOn varchar(60),
	IN returnRegisterCreatedByID double,
	IN returnRegisterVoidReason varchar(60),
	IN  uid  int,
    IN  token varchar(30),
    IN InsertpermissionID int,
    IN UpdatepermissionID int,
    IN DeletepermissionID int,
    OUT status int 
)
BEGIN

declare lastVerifiedOn datetime;
declare lastVerifiedByID double;


declare oldFlgActive int;

if returnRegisterId = 0 then -- insert

	call purpleaid.sp_authorization(uid,  token, InsertpermissionID , @auth_status);

    set status= @auth_status;

	if @auth_status = 2 then 


if(returnRegisterVerifiedFlag = 0)  then
     set returnRegisterVerifiedOn = null;
	 set returnRegisterVerifiedByID = null;
else
     set returnRegisterVerifiedOn = now();
end if;



  INSERT INTO returnregister

	(
			ID,
            custID,
            creditNoteID,
            Date,
            Type,
            TotalType,
            Remark,
            Total,
            status,
            TotalProduct,
            LockReason,
            voidReason,
            flgVoid,
            flgLock,
            flgVerified,
           	verifiedByID,
            verifiedOn,
            CreatedBy,
            CreatedOn
          )

      VALUES 

          ( 

            returnRegisterId ,
            returnRegisterCustId ,
			returnRegisterCreditNoteId ,
            str_to_date(returnRegisterDate , '%d/%m/%Y') ,
            returnRegisterType,
            returnRegisterTotalType,
			returnRegisterRemark,
			returnRegisterTotal,
			returnRegisterStatus,
			returnRegisterTotalProducts,
			returnRegisterLockReason,
			returnRegisterVoidReason,
			returnRegisterVoidFlag,
            returnRegisterLockFlag,
			returnRegisterVerifiedFlag,
			returnRegisterVerifiedByID,
			returnRegisterVerifiedOn,
            uid,
            now()

       );

    set returnRegisterId = LAST_INSERT_ID();
end if;
 else
 
    

select flgVoid into oldFlgActive from returnregister where ID = returnRegisterId ;

if (oldFlgActive != returnRegisterVoidFlag ) AND returnRegisterVoidFlag = 1 then 

 call purpleaid.sp_authorization(uid,  token, DeletepermissionID ,  @auth_status);
 
else

 call purpleaid.sp_authorization(uid,  token, UpdatepermissionID ,  @auth_status);

end if;

 set status= @auth_status;

 if @auth_status = 2 then 
 
 

if(returnRegisterVerifiedFlag = 1)  then
	 set lastVerifiedOn =  (SELECT  verifiedOn from returnregister where ID = returnRegisterId);
	 set lastVerifiedByID = (SELECT  verifiedByID from returnregister where ID = returnRegisterId);
	 
         
	 if ((lastVerifiedOn != str_to_date(returnRegisterVerifiedOn, '%Y/%m/%d %H:%i:%s')) and (lastVerifiedByID != returnRegisterVerifiedByID)) then   
	 	set	returnRegisterVerifiedOn  = date_format(now(),'%Y/%m/%d %H:%i:%s');
	  end if;

else
	 set returnRegisterVerifiedOn = null;
	 set returnRegisterVerifiedByID = null;
    
end if;
    
    UPDATE returnregister

     SET 

			custID = returnRegisterCustId ,
            creditNoteID = returnRegisterCreditNoteId ,
            Date = str_to_date(returnRegisterDate , '%d/%m/%Y'),
            Type = returnRegisterType,
            TotalType = returnRegisterTotalType,
            Remark = returnRegisterRemark,
            Total = returnRegisterTotal,
            status = returnRegisterStatus,
            TotalProduct = returnRegisterTotalProducts,
            LockReason = returnRegisterLockReason,
            voidReason = returnRegisterVoidReason,
            flgVoid = returnRegisterVoidFlag,
            flgLock = returnRegisterLockFlag,
            flgVerified = returnRegisterVerifiedFlag,
           	verifiedByID = returnRegisterVerifiedByID,
            verifiedOn = str_to_date(returnRegisterVerifiedOn, '%Y/%m/%d %H:%i:%s'),
            ModifiedBy = uid,
            ModifiedOn = now()

       WHERE ID = returnRegisterId;
     
	End if;
    
end if;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `insertUpdateRolePermission` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `insertUpdateRolePermission`(
IN rolepermissionid int,
IN roleid int,
IN permissionid int,
IN  uid  int,
IN  token varchar(30),
IN InsertpermissionID int,
IN UpdatepermissionID int,
OUT status int,
IN isPermissionFlag int 
)
BEGIN



if rolepermissionid = 0 then -- insert

	call purpleaid.sp_authorization(uid,  token, InsertpermissionID , @auth_status);

    set status= @auth_status;

	if @auth_status = 2 then 

		    INSERT INTO rolepermission

		         (

				  ID, roleID, permissionID

		         )

		    VALUES 

		         ( 	

					rolepermissionid,      

					roleid, 

					permissionid 	  
                );

                      
  end if;                
                  

  ELSE

 call purpleaid.sp_authorization(uid,  token, UpdatepermissionID ,  @auth_status);

 set status= @auth_status;

 if @auth_status = 2 then 
     
     
     if isPermissionFlag = 1 then
     
		delete from rolepermission where ID = rolepermissionid;
     

		End if;
				
	end if;
end if;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `InsertUpdateRouteMaster` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `InsertUpdateRouteMaster`(
	INOUT  idpk						 double,
	IN     routeID                   varchar(40), 
	IN     routeDescription          varchar(40),
	IN     routeActiveFlag			 int(11),
    IN     uid                       int,
    IN     token                     varchar(30),
    IN     InsertpermissionID        int,
    IN     UpdatepermissionID        int,
    IN     DeletepermissionID        int,
    OUT    status                    int 
    

)
BEGIN 
declare oldFlgActive int;


if idpk = 0 then -- insert

	call purpleaid.sp_authorization(uid,  token, InsertpermissionID , @auth_status);

    set status= @auth_status;

	if @auth_status = 2 then 
		    INSERT INTO route

		         (
				   routeID,					   
				   description,
				   flgActive
		         )

		    VALUES 

		         ( 	
                   routeID, 
				   routeDescription,
				   routeActiveFlag
                  );
         
          set idpk = LAST_INSERT_ID();
                  
   end if;  
set idpk = LAST_INSERT_ID();		
   ELSE
			
  /* 

select flgActive into oldFlgActive from route where ID = idpk ;

if (oldFlgActive != routeActiveFlag ) AND routeActiveFlag = 1 then 

 call purpleaid.sp_authorization(uid,  token, DeletepermissionID ,  @auth_status);
 
else
*/
 call purpleaid.sp_authorization(uid,  token, UpdatepermissionID ,  @auth_status);

 set status= @auth_status;

 if @auth_status = 2 then 
      
      UPDATE route
     
               SET 
				routeID = routeID,

				description    = routeDescription,

				flgActive = routeActiveFlag

				WHERE ID = idpk;
				
				

				End if;
     end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `InsertUpdateRP` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `InsertUpdateRP`(
IN pid double,
IN rid int,
IN isdeleted int,
IN  uid  int,
IN  token varchar(30),
IN InsertpermissionID int,
OUT status int 


)
BEGIN
call purpleaid.sp_authorization(uid,  token, InsertpermissionID , @auth_status);

    set status= @auth_status;

	if @auth_status = 2 then 


	 if isdeleted = 1 then -- insert

		
		  delete from rolepermission where  roleID = rid and permissionID = pid;
          
          
          delete from userpermission where  userRoleID = rid and permissionID = pid;
	 
     else
	 
	 
			INSERT INTO rolepermission 
			
			(ID , roleID , permissionID )
			values ( 0 , rid , pid);
			
			insert into userpermission
			select distinct 0 as ID, userpermission.userID as userID, rid as userRoleID ,
            pid as permissionID, now() as createdOn , now() as ModifiedOn , uid as CreatedBy
            from userpermission 
			where userpermission.userRoleID = rid;
			
	 
	 end if;
		  
  end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `InsertUpdateRRD` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `InsertUpdateRRD`(

    IN returnRegisterProductId double,
	IN returnRegisterProductRRID double,
    IN returnRegisterProductSAID double,
    IN returnRegisterProductPID double,
	IN returnRegisterProductCCID double,
    IN returnRegisterProductIsDeleted INT(11), 
	IN returnRegisterProductAmount decimal,
	IN returnRegisterProductCondition INT(11), 
	IN returnRegisterProductRemark varchar(50),
	IN returnRegisterProductBatchNo varchar(50),
    IN returnRegisterProductMRP decimal,
    IN returnRegisterProductPurchaseRate decimal,
    IN returnRegisterProductSellRate decimal,
    IN returnRegisterProductQuantity double,
   	IN returnRegisterProductExpiryDate varchar(50),
	IN uid varchar(20),
    IN returnRegisterProductConditionName varchar(90),
    IN  token varchar(30),
    IN InsertpermissionID int,
   -- IN UpdatepermissionID int,
    OUT status int ,
    IN returnRegisterProductQtyReturn INT,
     IN returnRegisterProductFreeReturn INT


)
BEGIN

declare oldFlgActive int;

if returnRegisterProductId = 0 then -- insert

	call purpleaid.sp_authorization(uid,  token, InsertpermissionID , @auth_status);

    set status= @auth_status;

	if @auth_status = 2 then 
		    INSERT INTO returnregisterdetails

		         (

		             ID,
					 RRID,
                     SAID,
					 productID,
					 CCID,
					 deleted,
					 Amount,
					 conditions,
					 Remark,
					 batchNo,
					 MRP,
					 purchaseRate,
					 sellRate,
					 Qty,
					 expiryDate,
					 CreatedBy,
					 CreatedOn,
                     conditionName,
                     QtyReturn,
                     FreeReturn
                    
				  )

		    VALUES 

		         ( 	

						returnRegisterProductId,
						returnRegisterProductRRID ,
                        returnRegisterProductSAID,
						returnRegisterProductPID ,
						returnRegisterProductCCID ,
						returnRegisterProductIsDeleted , 
						returnRegisterProductAmount ,
						returnRegisterProductCondition ,	
						returnRegisterProductRemark ,
						returnRegisterProductBatchNo ,
						returnRegisterProductMRP,
						returnRegisterProductPurchaseRate ,
						returnRegisterProductSellRate ,
						returnRegisterProductQuantity ,
                        str_to_date(returnRegisterProductExpiryDate , '%d/%m/%Y') ,
						uid ,
                        now(),
                        returnRegisterProductConditionName,
                        returnRegisterProductQtyReturn,
                        returnRegisterProductFreeReturn
                        
                );

      set returnRegisterProductSAID = returnRegisterProductSAID;
      
      end if;

     ELSE
     
     call purpleaid.sp_authorization(uid,  token, InsertpermissionID ,  @auth_status);
 
     set status= @auth_status;

 if @auth_status = 2 then 

     
		UPDATE returnregisterdetails

			SET 
	
						RRID = returnRegisterProductRRID ,
                        SAID = returnRegisterProductSAID,
						productID = returnRegisterProductPID ,
						CCID = returnRegisterProductCCID ,
						deleted = returnRegisterProductIsDeleted , 
						Amount = returnRegisterProductAmount ,
						conditions = returnRegisterProductCondition ,	
						Remark = returnRegisterProductRemark ,
						batchNo = returnRegisterProductBatchNo ,
						MRP = returnRegisterProductMRP,
						purchaseRate = returnRegisterProductPurchaseRate ,
						sellRate = returnRegisterProductSellRate ,
						Qty = returnRegisterProductQuantity ,
						expiryDate =  str_to_date(returnRegisterProductExpiryDate , '%d/%m/%Y') ,
						ModifiedBy = uid ,
                        ModifiedOn = now(),
                       conditionName = returnRegisterProductConditionName,
                        QtyReturn =  returnRegisterProductQtyReturn,
                        FreeReturn =  returnRegisterProductFreeReturn
                       
					 
						WHERE ID = returnRegisterProductId;

     End if;
  End if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `InsertUpdateRRDForClaim` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `InsertUpdateRRDForClaim`(

    IN returnRegisterProductId double,
	IN returnRegisterProductRRID double,
    IN returnRegisterProductPID double,
	IN returnRegisterProductCCID double,
    IN returnRegisterProductIsDeleted INT(11), 
	IN returnRegisterProductAmount decimal,
	IN returnRegisterProductCondition INT(11), 
	IN returnRegisterProductRemark varchar(50),
	IN returnRegisterProductBatchNo varchar(50),
    IN returnRegisterProductMRP decimal,
    IN returnRegisterProductPurchaseRate decimal,
    IN returnRegisterProductSellRate decimal,
    IN returnRegisterProductQuantity double,
   	IN returnRegisterProductExpiryDate varchar(50),
	IN uid varchar(20),
    IN returnRegisterProductRate decimal,
     IN  token varchar(30),
 IN InsertpermissionID int,
 OUT status int 
)
BEGIN

declare oldFlgActive int;

if returnRegisterProductId = 0 then -- insert

	call purpleaid.sp_authorization(uid,  token, InsertpermissionID , @auth_status);

    set status= @auth_status;

	if @auth_status = 2 then 
		    INSERT INTO returnregisterdetails

		         (

		             ID,
					 RRID,
					 productID,
					 CCID,
					 deleted,
					 Amount,
					 conditions,
					 Remark,
					 batchNo,
					 MRP,
					 purchaseRate,
					 sellRate,
					 Qty,
					 expiryDate,
					 CreatedBy,
					 CreatedOn,
                     Rate
				  )

		    VALUES 

		         ( 	

						returnRegisterProductId,
						returnRegisterProductRRID ,
						returnRegisterProductPID ,
						returnRegisterProductCCID ,
						returnRegisterProductIsDeleted , 
						returnRegisterProductAmount ,
						returnRegisterProductCondition ,	
						returnRegisterProductRemark ,
						returnRegisterProductBatchNo ,
						returnRegisterProductMRP,
						returnRegisterProductPurchaseRate ,
						returnRegisterProductSellRate ,
						returnRegisterProductQuantity ,
                        str_to_date(returnRegisterProductExpiryDate , '%d/%m/%Y') ,
						uid ,
                        now(),
                        returnRegisterProductRate
                );

       set returnRegisterProductId = LAST_INSERT_ID();
       
       end if;

     ELSE
      call purpleaid.sp_authorization(uid,  token, InsertpermissionID ,  @auth_status);
 
     set status= @auth_status;

 if @auth_status = 2 then 
		UPDATE returnregisterdetails

			SET 
	
						RRID = returnRegisterProductRRID ,
						productID = returnRegisterProductPID ,
						CCID = returnRegisterProductCCID ,
						deleted = returnRegisterProductIsDeleted , 
						Amount = returnRegisterProductAmount ,
						conditions = returnRegisterProductCondition ,	
						Remark = returnRegisterProductRemark ,
						batchNo = returnRegisterProductBatchNo ,
						MRP = returnRegisterProductMRP,
						purchaseRate = returnRegisterProductPurchaseRate ,
						sellRate = returnRegisterProductSellRate ,
						Qty = returnRegisterProductQuantity ,
						expiryDate =  str_to_date(returnRegisterProductExpiryDate , '%d/%m/%Y') ,
						ModifiedBy = uid ,
                        ModifiedOn = now(),
						Rate= returnRegisterProductRate
						WHERE ID = returnRegisterProductId;
                         set returnRegisterProductId = LAST_INSERT_ID();

     End if;
     
      End if;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `InsertUpdateRRDforProductCN` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `InsertUpdateRRDforProductCN`(
IN CreditNoteID int,
IN ReturnRegisterProductId int,
IN CreditNoteUseRate int,
IN CreditNoteLessPercentage decimal(10,2),
IN CreditNoteLessAmt decimal(10,2),
IN CreditNotereturnAmount decimal(10,2),
IN CreditNoteflgRefundVAT decimal(10,2),
IN CreditNoteVATpercentage decimal(10,2),
IN CreditNoteVATrefund decimal(10,2),
IN CreditNoteVATAmount decimal(10,2),
IN CreditNoteRemark varchar(70),
IN  uid  int,
IN  token varchar(30),
IN  InsertpermissionID int,
OUT status int ,
IN CreditNoteTotalAmount decimal(10,2),

IN creditNoteIsdeletedFlag int

)
BEGIN







if ReturnRegisterProductId = 0 then -- insert

 call purpleaid.sp_authorization(uid,  token, InsertpermissionID , @auth_status);

    set status= @auth_status;

 if @auth_status = 2 then 

      INSERT INTO returnregisterdetails

           (     
           
                  CNID,
				  ID,
				  CNrate,
                  lessPercentage,
                  lessAmount,
                  CNreturnAmount,
				  flgRefundVAT,
				  VATpercentage,
				  VATrefund,
				  VATamt,
				  CNremark,
                  CreatedBy,
                  CreatedOn,
                  CNamt
                 
                
           )

      VALUES 

           (  
						   CreditNoteID ,
						   ReturnRegisterProductId ,
						   CreditNoteUseRate ,
						   CreditNoteLessPercentage ,
						   CreditNoteLessAmt ,
						   CreditNotereturnAmount ,
						   CreditNoteflgRefundVAT ,
						   CreditNoteVATpercentage ,
						   CreditNoteVATrefund ,
						   CreditNoteVATAmount ,
						   CreditNoteRemark ,
                           uid,
                           now(),
                           CreditNoteTotalAmount
                       
                );

                         
  end if;                
                  

  ELSE

    

 call purpleaid.sp_authorization(uid,  token, InsertpermissionID ,  @auth_status);

 set status= @auth_status;

 if @auth_status = 2 then 
     
    
    
  if creditNoteIsdeletedFlag = 0 then


  UPDATE returnregisterdetails

      SET 

        CNID = NULL,
       
        CNrate = NULL,
        lessPercentage = NULL, 
        lessAmount = NULL,
        CNreturnAmount = NULL,
        flgRefundVAT = NULL,
        VATpercentage = NULL,
        VATrefund = NULL,
        VATamt = NULL,
        CNremark = NULL,
        ModifiedBy = NULL,
        ModifiedOn = NULL,
        CNamt = NULL     

      WHERE ID = ReturnRegisterProductId;
  
        else
    
    
    
  UPDATE returnregisterdetails

    SET 

      CNID = CreditNoteID,
     
      CNrate = CreditNoteUseRate,
                  lessPercentage = CreditNoteLessPercentage, 
                  lessAmount = CreditNoteLessAmt,
                  CNreturnAmount = CreditNotereturnAmount,
      flgRefundVAT = CreditNoteflgRefundVAT,
      VATpercentage = CreditNoteVATpercentage,
      VATrefund = CreditNoteVATrefund,
      VATamt = CreditNoteVATAmount,
      CNremark = CreditNoteRemark,
                  ModifiedBy = uid,
                  ModifiedOn = now(),
                  CNamt = CreditNoteTotalAmount 
                 
    WHERE ID = ReturnRegisterProductId;


  End if;
    
 end if;

end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `InsertUpdateSalesman` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `InsertUpdateSalesman`(INOUT `salesmanID` DOUBLE, IN `salesmanName` VARCHAR(60), IN `salesmanPhone` VARCHAR(60), IN `salesmanFax` VARCHAR(30), IN `addressLine1` VARCHAR(20), IN `addressLine2` VARCHAR(20), IN `salesmanLandlineNumber` INT(20), IN `salesmanEmail` VARCHAR(50), IN `salesmanCity` VARCHAR(50), IN `salesmanRouteID` VARCHAR(45), IN `salesmanEmergenyContactPerson` VARCHAR(45), IN `salesmanEmergencyAddressLine1` VARCHAR(45), IN `salesmanEmergencyAddressLine2` VARCHAR(50), IN `salesmanEmergencyPhone` varchar(45), IN `salesmanEmergencyLandline` INT(40), IN `salesmanEmergencyFax` VARCHAR(45), IN `salesmanEmergencyEmail` VARCHAR(45), IN `salesmanActiveFlag` INT(20), IN `salesmanLockFlag` INT(20))
    DETERMINISTIC
BEGIN

IF NOT EXISTS (SELECT * FROM salesman WHERE ID = salesmanID) then



		    INSERT INTO salesman

		         (

		           ID ,  

		           Name    , 

					Phone,

					Fax	 , 

		           AddrLine1, 

		           AddrLine2,

		           landlineNumber , 

					Email	,

		           city, 

		           salesmanRouteID, 

		           emergencyContactPerson , 

		           emergencyAddressLine1, 

		           emergencyAddressLine2, 

		           emergencyPhone,

		           emergencyLandline, 

		           emergencyFax,

		           emergencyEmail, 

		           flgActive,

					flgLock	

		         )

		    VALUES 

		         ( 

		               salesmanID ,

		         salesmanName  , 

		        salesmanPhone    , 

		        salesmanFax     , 

		        addressLine1   , 

		        addressLine2    ,

		       salesmanLandlineNumber    , 

		         salesmanEmail   ,

		         salesmanCity  	,

		         salesmanRouteID    ,

		        salesmanEmergenyContactPerson     , 

		        salesmanEmergencyAddressLine1     ,

		        salesmanEmergencyAddressLine2   , 

		        salesmanEmergencyPhone   ,

		       salesmanEmergencyLandline   , 

		        salesmanEmergencyFax   ,

		       salesmanEmergencyEmail   , 

		        salesmanActiveFlag  ,

				 salesmanLockFlag      

                  );

				   set salesmanID = LAST_INSERT_ID();

	ELSE

					

					UPDATE salesman

					

						SET ID= salesmanID      , 

							Name =    salesmanName    , 

								Phone = salesmanPhone   , 

								Fax =	salesmanFax     , 

						AddrLine1 = addressLine1    , 

		        AddrLine2 = addressLine2   ,

		        landlineNumber = salesmanLandlineNumber  , 

		        Email = salesmanEmail   ,

		        city = salesmanCity  	,

		        salesmanRouteID = salesmanRouteID    ,

		        emergencyContactPerson = salesmanEmergenyContactPerson   , 

		        emergencyAddressLine1 = salesmanEmergencyAddressLine1    ,

		        emergencyAddressLine2 = salesmanEmergencyAddressLine2    , 

		        emergencyPhone = salesmanEmergencyPhone  ,

		         emergencyLandline = salesmanEmergencyLandline   , 

		        emergencyFax = salesmanEmergencyFax  ,

		        emergencyEmail = salesmanEmergencyEmail    , 

		        flgActive = salesmanActiveFlag    ,

				flgLock = salesmanLockFlag    

						WHERE ID = salesmanID;

                        End if;

			END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `InsertUpdateSecurityRoleMaster` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `InsertUpdateSecurityRoleMaster`(
INOUT roleid double,
IN roledescription varchar(50),
IN activeFlag int,
 IN  uid  int,
 IN  token varchar(30),
 IN InsertpermissionID int,
 OUT status int ,
 IN description varchar(150)
 

)
BEGIN



if roleid = 0 then -- insert

	call purpleaid.sp_authorization(uid,  token, InsertpermissionID , @auth_status);

    set status= @auth_status;

	if @auth_status = 2 then 

		    INSERT INTO securityrolemaster

		         (

				   ID, Role, flgActive , Description

		         )

		    VALUES 

		         ( 	

					roleid,      

					roledescription, 

					activeFlag 	,
                    
                    description
                );

      
                  
  end if;                
                  
 set roleid = LAST_INSERT_ID();
  ELSE

 call purpleaid.sp_authorization(uid,  token, InsertpermissionID ,  @auth_status);

 set status= @auth_status;

 if @auth_status = 2 then 
     
     
		UPDATE securityrolemaster

				SET 

				Role = roledescription,

				flgActive = activeFlag,
                
                Description = description
			

				WHERE ID = roleid;

		End if;
				
	end if;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `InsertUpdateStockActive` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `InsertUpdateStockActive`(
 INOUT stockActiveID  DOUBLE,
 IN goodsReceiptId double,
 IN `goodsReceiptProductId` DOUBLE,
 IN `goodsReceiptProductBatchId` DOUBLE,
 IN `goodsReceiptProductQty` DOUBLE,
 IN `goodsReceiptProductFree` DOUBLE,
 IN `goodsReceiptProductQtyAvailable` DOUBLE,
 IN `goodsReceiptProductFreeAvailable` DOUBLE,
 IN goodsReceiptProductStorage INT(20),
 IN goodsReceiptProductReceiptType INT(20) ,
 IN goodsReceiptStockInwardId double,
 IN goodsReceiptProductIsDeleted INT(11),
 IN  uid  int,
 IN  token varchar(30),
 IN InsertpermissionID int,
 OUT status int  ,
 IN checkIfSaleFlag int
 )
    DETERMINISTIC
BEGIN 


if stockActiveID = 0 then -- insert

	call purpleaid.sp_authorization(uid,  token, InsertpermissionID , @auth_status);

    set status= @auth_status;

	if @auth_status = 2 then 


		    INSERT INTO stockactive



		         (



					 ID,

					 grID,

					 PID,

					 PBAID,
                    
                     Quantity,

					 free,

					 QtyAvailable, 

					 FreeAvailable,
					 
                     storage,
					 
                     receipttype,
                     
                     SIID,
                     
                     deleted

               
		         )



		    VALUES 



		         ( 

					stockActiveID ,

					goodsReceiptId,

					goodsReceiptProductId,
                    
                    goodsReceiptProductBatchId,

					goodsReceiptProductQty,

					goodsReceiptProductFree,

					goodsReceiptProductQtyAvailable,

					goodsReceiptProductFreeAvailable,
					
                    goodsReceiptProductStorage,
					
                    goodsReceiptProductReceiptType,
                   
                   goodsReceiptStockInwardId,
                   
                   goodsReceiptProductIsDeleted
                

                 );

  



                set stockActiveID = LAST_INSERT_ID();  

end if;

      ELSE

     call purpleaid.sp_authorization(uid,  token, InsertpermissionID ,  @auth_status);
 
     set status= @auth_status;

     if @auth_status = 2 then 


					UPDATE stockactive



				

					SET 

                    

					grID = goodsReceiptId,  

					PID= goodsReceiptProductId,

					PBAID= goodsReceiptProductBatchId,

					Quantity= goodsReceiptProductQty,

					free= goodsReceiptProductFree,

					QtyAvailable =goodsReceiptProductQtyAvailable, 

					FreeAvailable = goodsReceiptProductFreeAvailable,

					storage= goodsReceiptProductStorage,
					
                    receipttype = goodsReceiptProductReceiptType,

					SIID = goodsReceiptStockInwardId,
		
					deleted	= goodsReceiptProductIsDeleted	
                 

					WHERE ID = stockActiveID;

                     set stockActiveID = LAST_INSERT_ID();  

                End if;

 End if;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `insertUpdateStockAudit` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `insertUpdateStockAudit`(

INOUT SID int ,
IN SLabel varchar(50),
IN Snap int,
In SResult int ,
IN SOutcome int ,
IN flgSale INT ,
IN SaleLockHistory int,
IN flgDataEntry int ,
IN AuditTotal double ,
IN SystemTotal double ,
IN MismatchTotal double,
IN SATotalProduct int(11) ,
IN SAProductSelected int(11) ,
IN SATotalBatch int(11) ,
IN SABatchSelected int(11) ,
IN SAFindProductSelected int,
IN SaEnteredBy varchar(30),
In SflgLockAudit int,
IN Sremark varchar(80),
IN SphysicalDataEntry int ,
IN SdataEntry int ,
IN uid  int,
IN token  varchar(30),
IN InsertpermissionID int,
OUT status  int,
out status1 int,
out Sdate varchar(20)
)
BEGIN

if SID = 0 then -- insert
call purpleaid.sp_authorization(uid,  token, InsertpermissionID , @auth_status);

  set status= @auth_status;

  if @auth_status = 2 then
     
     
     
   insert into stockauditmaster(
   
    AuditDate,
    AuditLabel,
    AuditSnapshot,
    SnapshotCreatedOn,
    Result,
    OutCome,
    FlgSaleLock,
	FlgSaleLockHistory,
    FlgDataEntryLock,
    AuditTotalQuantity,
    SystemTotalQuantity,
    MissMatchTotalQuantity,
    TotalProduct,
    ProductSelected,
    TotalBatch,
    BatchSelected,
   
    FindProductSelected,
	AuditEnteredBy,
	FlgAuditLock,
    AuditRemark,
    PhysicalStockEntry,
    SelectLockDataEntry,
    CreatedBy,
    CreatedOn
   )
   
   values(
   
    -- SID,
    now(),
    SLabel,
    Snap,
    now(),
    SResult,
    SOutcome,
    flgSale,
	SaleLockHistory,
    flgDataEntry,
   -- AuditTotal,
    -- SystemTotal,
    -- MismatchTotal,
    0,
    0,
    0,
    SATotalProduct,
	SAProductSelected,
    SATotalBatch,
    SABatchSelected,
	SAFindProductSelected,
    SaEnteredBy,
	SflgLockAudit,
    0,
    SphysicalDataEntry,
    SdataEntry,
    uid,
    now()        
   );
  
  set SID = last_insert_id();
 set Sdate = date_format(now(), "%d/%m/%Y");
        set status1 = 0;
 
  
   end if;
      
else
 
 call purpleaid.sp_authorization(uid,  token, InsertpermissionID ,  @auth_status);

 set status= @auth_status;

 if @auth_status = 2 then
  
        update stockauditmaster
        
		set
            AuditDate = now(),
            AuditLabel = SLabel,
            AuditSnapshot = Snap,
			SnapshotCreatedOn = now(),
            Result = SResult,
            OutCome = SOutcome,
			FlgSaleLock = flgSale ,
            FlgSaleLockHistory = SaleLockHistory,
            FlgDataEntryLock = flgDataEntry,
            AuditTotalQuantity = AuditTotal,
            SystemTotalQuantity = SystemTotal,
            MissMatchTotalQuantity = MismatchTotal,
			TotalProduct = SATotalProduct,
			ProductSelected = SAProductSelected,
			TotalBatch = SATotalBatch,
			BatchSelected = SABatchSelected,
            FindProductSelected = SAFindProductSelected,
			AuditEnteredBy = SaEnteredBy,
            FlgAuditLock = SflgLockAudit,
            AuditRemark = Sremark ,
            PhysicalStockEntry = SphysicalDataEntry ,
            SelectLockDataEntry = SdataEntry,
            ModifiedBy = uid ,
            ModifiedOn = now() where SID = ID;
             set status1 = 1;
            set Sdate = date_format(now(), "%d/%m/%Y");
            
		   update product 
		   set product.flgStockAuditLock = flgSale 
		   where product.id in
		   (select stockauditproduct.PID 
		   from stockauditproduct 
		   join stockauditmaster on stockauditproduct.AuditID = stockauditmaster.id);  
           
		   set status1 = 1;
       end if;   
  
 end if;
       
  
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `InsertUpdateStockInwards` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `InsertUpdateStockInwards`(
INOUT goodsReceiptProductStockInwardId DOUBLE,
IN goodsReceiptId double,
IN `goodsReceiptProductId` DOUBLE,
IN `goodsReceiptProductBatchId` DOUBLE,
IN `goodsReceiptProductQty` DOUBLE,
IN `goodsReceiptProductFree` DOUBLE ,
IN goodsReceiptProductStorage INT(20),
IN goodsReceiptProductReceiptType INT(20) ,
IN RecID double,
IN goodsReceiptProductIsDeleted INT(11),
 IN  uid  int,
 IN  token varchar(30),
 IN InsertpermissionID int,
 OUT status int  ,
 IN checkIfSaleFlag int
 )
    DETERMINISTIC
BEGIN 


if goodsReceiptProductStockInwardId = 0 then -- insert

	call purpleaid.sp_authorization(uid,  token, InsertpermissionID , @auth_status);

    set status= @auth_status;

	if @auth_status = 2 then 



		    INSERT INTO stockinward



		         (


		         ID,

                 grID,

                 PID,

                 PBID,
              

                 Quantity,

                 free,
                 
                 storage,
                 
				 receipttype,
                 
                 recid,
                 
                 deleted

                 

		         )



		    VALUES 



		         ( 

					goodsReceiptProductStockInwardId ,

					goodsReceiptId,

					goodsReceiptProductId,

					goodsReceiptProductBatchId,
					
                    goodsReceiptProductQty,

					goodsReceiptProductFree,

					goodsReceiptProductStorage,
					
                    goodsReceiptProductReceiptType,
                    
                    RecID,
                   
                    goodsReceiptProductIsDeleted

                 );

  



                set goodsReceiptProductStockInwardId = LAST_INSERT_ID();  

end if;

      ELSE

 call purpleaid.sp_authorization(uid,  token, InsertpermissionID ,  @auth_status);
 
     set status= @auth_status;

     if @auth_status = 2 then 


					UPDATE stockinward


					SET 

					grID = goodsReceiptId,  

					PID= goodsReceiptProductId,

					PBID= goodsReceiptProductBatchId,

					Quantity = goodsReceiptProductQty,

					free = goodsReceiptProductFree,

					storage = goodsReceiptProductStorage,
                    
					receipttype = goodsReceiptProductReceiptType,

					recid = RecID,
                    
                    deleted = goodsReceiptProductIsDeleted
                    
                WHERE ID = goodsReceiptProductStockInwardId;

set goodsReceiptProductStockInwardId = LAST_INSERT_ID();  

                End if;

 End if;

			END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `InsertUpdateSupplierMaster` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `InsertUpdateSupplierMaster`(
            INOUT  supplierId                          DOUBLE, 
            IN  supplierOtherInfo                      VARCHAR(60), 
            IN  supplierCompanyId                      DOUBLE, 
            IN  supplierName                           VARCHAR(60), 
            IN  supplierAccountCode                    VARCHAR(20), 
            IN  supplierAccountName                    VARCHAR(30),
            IN  supplierRemark                         VARCHAR(30),
            IN  supplierTaxID                          VARCHAR(50),
            IN  supplierLedgerType                     VARCHAR(15),
            IN  supplierAccountGroup                   VARCHAR(30), 
            IN  supplierOpeningBalance                 DOUBLE,
            IN  SupplierOpeningBalanceType             VARCHAR(15),
            IN  supplierCreditPeriod                   int(11),
            IN  supplierAddressLine1                   VARCHAR(50), 
            IN  supplierAddressLine2                   VARCHAR(50),
            IN  supplierCity                           DOUBLE, 
            IN  supplierContactPerson                  VARCHAR(50),
            IN  supplierPhone                          VARCHAR(15), 
            IN  supplierFax                            VARCHAR(15),
            IN  supplierEmail                          VARCHAR(50), 
            IN  supplierDeliveryTime                   int(11),
            IN  supplierActiveFlag                     int(11),
            IN  supplierOutStatePartyFlag              int(11), 
            IN  supplierEmailPOFlag                    int(11),
            IN  supplierSetAsDefaultFlag               int(11), 
			IN  uid                                    int,
			IN  token                                  varchar(30),
            IN  InsertpermissionID                      int,
			IN  UpdatepermissionID                      int,
			IN  DeletepermissionID                      int,
			OUT status                                 int 
     )
BEGIN



declare oldFlgActive int;

 if supplierSetAsDefaultFlag= 1 then 

          update supplier set flgDefault=0 where CID=supplierCompanyId;

 end if;


if supplierId = 0 then -- insert
call purpleaid.sp_authorization(uid,  token, InsertpermissionID , @auth_status);

    set status= @auth_status;

	if @auth_status = 2 then 



        INSERT INTO supplier

             (

               ID ,  

               Other    , 

               CID    , 

               Name , 

               accCode, 

               accName,

               Remark , 

               TaxID,

               LedgerType, 

               accGroup, 

               OpeningBalance , 

               OpeningBalanceTYpe, 

               CreditPeriod, 

               AddrLine1,

               AddrLine2, 

               City,

               ContactPerson, 

               Phone,                      

               Fax,

               Email,

               DeliveryTime,

               flgActive,

               flgOutState,

               flgEmail,

               flgDefault

             )

        VALUES 

             ( 

			   supplierId, 

			   supplierOtherInfo,

			   supplierCompanyId , 

			   supplierName ,

			   supplierAccountCode ,

			   supplierAccountName , 

			   supplierRemark , 

			   supplierTaxID ,

			   supplierLedgerType , 

			   supplierAccountGroup ,

			   supplierOpeningBalance ,

			   SupplierOpeningBalanceType ,        

			   supplierCreditPeriod,

			   supplierAddressLine1 , 

			   supplierAddressLine2, 

			   supplierCity,

			   supplierContactPerson, 

			   supplierPhone,

			   supplierFax,

			   supplierEmail,

			   supplierDeliveryTime,

			   supplierActiveFlag,

			   supplierOutStatePartyFlag,

			   supplierEmailPOFlag,

			   supplierSetAsDefaultFlag

			);

         set supplierId = LAST_INSERT_ID();

end if;

            set supplierId = LAST_INSERT_ID();   

 ELSE

    
/*
select flgActive into oldFlgActive from supplier where ID = supplierId ;

if (oldFlgActive != supplierActiveFlag ) AND supplierActiveFlag = 1 then 

 call purpleaid.sp_authorization(uid,  token, DeletepermissionID ,  @auth_status);
 
else
*/
 call purpleaid.sp_authorization(uid,  token, UpdatepermissionID ,  @auth_status);

 set status= @auth_status;

 if @auth_status = 2 then 
     

     UPDATE supplier

     

      SET ID = supplierId,

      Other    = supplierOtherInfo,

      CID    = supplierCompanyId ,

      Name = supplierName ,

      accCode= supplierAccountCode ,

      accName= supplierAccountName ,

      Remark = supplierRemark ,

      TaxID= supplierTaxID ,

      LedgerType=supplierLedgerType ,

      accGroup= supplierAccountGroup ,

      OpeningBalance = supplierOpeningBalance ,

      OpeningBalanceTYpe= SupplierOpeningBalanceType ,

      CreditPeriod= supplierCreditPeriod,

      AddrLine1= supplierAddressLine1 ,

      AddrLine2= supplierAddressLine2 ,

      City= supplierCity,

      ContactPerson= supplierContactPerson,

      Phone= supplierPhone,

      Fax= supplierFax,

      Email=supplierEmail,

      DeliveryTime= supplierDeliveryTime,

      flgActive= supplierActiveFlag,

      flgOutState= supplierOutStatePartyFlag,

      flgEmail= supplierEmailPOFlag,

      flgDefault= supplierSetAsDefaultFlag

      WHERE ID = supplierId;
      
      
    

      end if;
      
    

end if;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `InsertUpdateTaxCode` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `InsertUpdateTaxCode`(
INOUT `taxId` DOUBLE,
 IN `taxCode` VARCHAR(60),
 IN `taxDescription` VARCHAR(60), 
 IN `vatTax` DECIMAL(10,2), 
 IN `centralSalesTax` DECIMAL(10,2), 
 IN `localTax` DECIMAL(10,2), 
 IN `generalSalesTax` DECIMAL(10,2), 
 IN `taxCodePercentageRate` INT(11), 
 IN `taxCodeSalesSeperateVATFlag` INT(11), 
 IN `taxCodeSalesVATonFreeFlag` INT(11), 
 IN `taxCodeSalesVATChargeOn` INT(11), 
 IN `taxCodePurchaseSeperateVATFlag` INT(11), 
 IN `taxCodePurchaseVATonFreeFlag` INT(11), 
 IN `taxCodePurchaseVATChargeOn` INT(11), 
 IN `taxCodeSalesACId` DOUBLE, 
 IN `taxCodeSalesVATACId` DOUBLE, 
 IN `taxCodeSalesReturnVATACId` DOUBLE, 
 IN `taxCodePurchaseACId` DOUBLE, 
 IN `taxCodePurchaseVATACId` DOUBLE, 
 IN `taxCodePurchaseReturnVATACId` DOUBLE, 
 IN `taxCodeActivFlag` INT(11),
  IN  uid  int,
 IN  token varchar(30),
 IN InsertpermissionID int,
 IN UpdatepermissionID int,
 IN DeletepermissionID int,
 OUT status int 
 
 )
    DETERMINISTIC
BEGIN

declare oldFlgActive int;

if taxId = 0 then -- insert

	call purpleaid.sp_authorization(uid,  token, InsertpermissionID , @auth_status);

    set status= @auth_status;

	if @auth_status = 2 then 
      INSERT INTO taxtable



           (



             ID ,  



             TaxCode    , 



             TaxDescription    , 



             vatTax , 



             centralSalesTax, 



             localTax,



             generalSalesTax , 



             TaxPercentageRate,



             flgSalesSeperateVAT, 



             flgSalesVATonFree, 



             SalesVATChargeOn , 



             flgPurchaseSeperateVAT, 



             flgPurchaseVATonFree, 



             PurchaseVATChargeOn,



             SaleACid, 



             SaleVATACid,



             SaleReturnVATACid, 



             PurchaseACid,



			 PurchaseVATACid,

			 

			 PurchaseReturnVATACid,

			 

			 flgActive

			

           )



      VALUES 



           ( 



				 taxId  ,

				 taxCode , 

				 taxDescription	,

				 vatTax,

				 centralSalesTax ,

				 localTax ,

				 generalSalesTax ,

				 taxCodePercentageRate ,

				 taxCodeSalesSeperateVATFlag,

				 taxCodeSalesVATonFreeFlag ,

				 taxCodeSalesVATChargeOn ,

				 taxCodePurchaseSeperateVATFlag ,

				 taxCodePurchaseVATonFreeFlag,

				 taxCodePurchaseVATChargeOn ,

				 taxCodeSalesACId ,

				 taxCodeSalesVATACId ,

				 taxCodeSalesReturnVATACId,

				 taxCodePurchaseACId,

				 taxCodePurchaseVATACId ,

				 taxCodePurchaseReturnVATACId ,

				 taxCodeActivFlag 



             );



       set taxId = LAST_INSERT_ID();

end if;

 ELSE

  

select flgActive into oldFlgActive from taxtable where ID = taxId ;

if (oldFlgActive != taxCodeActivFlag ) AND taxCodeActivFlag = 1 then 

 call purpleaid.sp_authorization(uid,  token, DeletepermissionID ,  @auth_status);
 
else

 call purpleaid.sp_authorization(uid,  token, UpdatepermissionID ,  @auth_status);

end if;

 set status= @auth_status;

 if @auth_status = 2 then 

     UPDATE taxtable
      SET 
			  TaxCode = taxCode,



			  TaxDescription = taxDescription ,



			  vatTax = vatTax ,



			  centralSalesTax = centralSalesTax ,



			  localTax = localTax ,



			  generalSalesTax = generalSalesTax ,



			  TaxPercentageRate = taxCodePercentageRate ,



			  flgSalesSeperateVAT = taxCodeSalesSeperateVATFlag ,



			  flgPurchaseVATonFree= taxCodeSalesVATonFreeFlag ,



			  SalesVATChargeOn = taxCodeSalesVATChargeOn , 



             flgPurchaseSeperateVAT =taxCodePurchaseSeperateVATFlag, 



             flgPurchaseVATonFree=taxCodePurchaseVATonFreeFlag, 



             PurchaseVATChargeOn=taxCodePurchaseVATChargeOn,



             SaleACid=taxCodeSalesACId, 



             SaleVATACid=taxCodeSalesVATACId,



             SaleReturnVATACid=taxCodeSalesReturnVATACId, 



             PurchaseACid=taxCodePurchaseACId,



			 PurchaseVATACid=taxCodePurchaseVATACId,

			 

			 PurchaseReturnVATACid=taxCodePurchaseReturnVATACId,

			 

			 flgActive=taxCodeActivFlag 



      WHERE ID = taxId;

set taxId = LAST_INSERT_ID();


       End if;
    End if;



   END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `InsertUpdateUPforAdvSettingsUserDelta` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `InsertUpdateUPforAdvSettingsUserDelta`(

IN pid int,
IN userid int,
IN isdeleted int,
IN  uid  int,
IN  token varchar(30),
IN InsertpermissionID int,
OUT status int ,
IN rid int
)
BEGIN



call purpleaid.sp_authorization(uid,  token, InsertpermissionID , @auth_status);

    set status= @auth_status;

 if @auth_status = 2 then 

if isdeleted = 1 then -- insert
    if rid  = 0 then 
    delete from userpermission where userID = userid and permissionID = pid;
     else
    delete from userpermission where  userRoleID = rid and userID = userid and permissionID = pid;
    end if;
     else
     
     insert into userpermission
  (ID, userID, userRoleID, permissionID, createdOn, ModifiedOn, CreatedBy)
  values 
  (0,userid,rid,pid,now(),now(),uid);
     
     end if;
     
     
     end if;



END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `InsertUpdateUPforSystemRoleUserDelta` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `InsertUpdateUPforSystemRoleUserDelta`(
IN roleuserid int,
IN rid int,
IN isdeleted int,
IN  uid  int,
IN  token varchar(30),
IN InsertpermissionID int,
OUT status int      
)
BEGIN

call purpleaid.sp_authorization(uid,  token, InsertpermissionID , @auth_status);

    set status= @auth_status;

 if @auth_status = 2 then 

  if isdeleted = 1 then -- delete
    
    delete from userpermission where  userRoleID = rid and userID = roleuserid ;

     else
     
             insert into userpermission
            select 0 as ID, roleuserid as userID, rid as userRoleID ,
            rolepermission.permissionID as permissionID, now() as createdOn , now() as ModifiedOn , uid as CreatedBy
            from rolepermission 
   where rolepermission.roleID = rid;
     
     end if;
     
     
     end if;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `InsertUpdateUser` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `InsertUpdateUser`(INOUT `uId` DOUBLE, IN `userId` VARCHAR(60), IN `userPwd` VARCHAR(60), IN `firstName` VARCHAR(30), IN `LastName` VARCHAR(20), IN `userAddressLine1` VARCHAR(60), IN `userAddressLine2` VARCHAR(60), IN `userPhone` VARCHAR(50), IN `userFax` VARCHAR(50), IN `userEmail` VARCHAR(35), IN `userActiveFlag` INT(11), IN `userLockFlag` INT(11))
    DETERMINISTIC
BEGIN



IF NOT EXISTS (SELECT * FROM user WHERE ID = uId) then







      INSERT INTO user



           (



             ID ,  



             userID    , 



             userPassword    , 



             FirstName , 



             LastName, 



             AddrLine1,



             AddrLine2 , 



             Phone,



             Fax, 



             Email, 



             flgActive, 



             flgLock                      



            

           )



      VALUES 



           ( 



            uId ,

			 userId , 

			 userPwd ,

			 firstName ,

			 lastName, 

			 userAddressLine1 ,

			 userAddressLine2 ,

			 userPhone , 

			 userFax ,

			 userEmail ,

			 userActiveFlag , 

			 userLockFlag 



            );



       set uId = LAST_INSERT_ID();



 ELSE



     



     UPDATE user



     



      SET

      

      ID = uId,

     userID    = userId,

      userPassword    = userPwd ,

     FirstName = firstName ,

      LastName= lastName ,

      AddrLine1= userAddressLine1 ,

      AddrLine2= userAddressLine2 ,

      Phone= userPhone ,

      Fax = userFax ,

      Email= userEmail ,

      flgActive= userActiveFlag,

      flgLock  = userLockFlag



      WHERE ID = uId;

              End if;



   END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `InsertUpdateUserPermission` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `InsertUpdateUserPermission`(
IN uid varchar(40),
IN roleId INT(11),
IN permissionID int(30),
IN deletedFlag int,
IN manualFlag INT(11),
IN  token varchar(30),
IN InsertpermissionID int,
IN UpdatepermissionID int,
IN upid int,
OUT status int 



)
BEGIN

if upid = 0 then -- insert

	call purpleaid.sp_authorization(uid,  token, InsertpermissionID , @auth_status);

    set status= @auth_status;

	if @auth_status = 2 then 


		    INSERT INTO userpermission

		         (

		           ID, userID, userRoleID, permissionID

		         )

		    VALUES 

		         ( 

		            upid ,
					uid ,
					roleId ,
					permissionID

                  );

				 
                 End if;   

	ELSE

call purpleaid.sp_authorization(uid,  token, UpdatepermissionID ,  @auth_status);



 set status= @auth_status;

 if @auth_status = 2 then 
		
         if manualFlag = 1 then
			
           set roleId = NULL;
        
        end if;
       
        
        
        if deletedFlag = 1 then 
			
            delete from userpermission where ID = upid;
        
        else

					UPDATE userpermission

						SET 
					    userID=  uid , 
                        userRoleID = roleId,
                        permissionID=  permissionID
                    
                    WHERE ID = upid;
                    
          end if;          
                    
                    
  
  End if;
  
  
  
  
 End if;




END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `insertUpdateVoucherType` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `insertUpdateVoucherType`(
inout voucherID double,
in voucherName varchar(45),
inout NID double,
in NarrationName varchar(45),
out status1 int,
 IN  uid  int,
 IN  token  varchar(30),
 IN InsertpermissionID  int,
 OUT status int
)
BEGIN

if NID = 0 then -- insert


 call purpleaid.sp_authorization(uid,  token, InsertpermissionID , @auth_status);

 set status= @auth_status;

	 if @auth_status = 2 then



			insert into narration (id,narration)
			values(NID,NarrationName);
			set NID = LAST_INSERT_ID();
			
			insert into voucher1(voucherTypeID, VoucherType, NarrationID,narration)
			values(voucherID,voucherName,NID,NarrationName);
			
			set status1 = 0;
		end if;
else


 call purpleaid.sp_authorization(uid,  token, InsertpermissionID , @auth_status);

 set status= @auth_status;

 if @auth_status = 2 then

			if exists(select NarrationID from voucher1 where NarrationID =NID) then 
			
			update voucher1,narration
			set
				voucher1.voucherTypeID = voucherID,
				voucher1.VoucherType = voucherName,
				narration.narration = NarrationName,
				voucher1.narration = NarrationName
				where voucher1.NarrationID = narration.id and voucher1.NarrationID = NID;
			   -- and narration.narration = NarrationName;
				
				set status1 = 1;
			end if;
				if not exists(select voucher1.voucherTypeID,
							   voucher1.narrationID,
							   voucher1.VoucherType,
							   voucher1.narration
							   from voucher1 where 
							   voucher1.voucherTypeID = voucherID and
								voucher1.narrationID = NID and 
								voucher1.VoucherType = voucherName and
								voucher1.narration = NarrationName ) then
								
						insert into narration (id,narration)
						values(NID,NarrationName);
						-- set NID = LAST_INSERT_ID();
						
						insert into voucher1(voucherTypeID, VoucherType, NarrationID,narration)
						values(voucherID,voucherName,NID,NarrationName);
						set status1 = 3;
			 end if;
  end if;
end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `insertUpdateVoucherTypeNew` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `insertUpdateVoucherTypeNew`(
inout voucherID double,
in voucherName varchar(45),
inout NID double,
in NarrationName varchar(45),
out status1 int,
 IN  uid  int,
 IN  token  varchar(30),
 IN InsertpermissionID  int,
 OUT status int
)
BEGIN

if NID = 0 then -- insert


 call purpleaid.sp_authorization(uid,  token, InsertpermissionID , @auth_status);

 set status= @auth_status;

	 if @auth_status = 2 then



			insert into narration (id,narration)
			values(NID,NarrationName);
			set NID = LAST_INSERT_ID();
			
			insert into voucher1(voucherTypeID, VoucherType, NarrationID,narration)
			values(voucherID,voucherName,NID,NarrationName);
			
			set status1 = 0;
		end if;
else


 call purpleaid.sp_authorization(uid,  token, InsertpermissionID , @auth_status);

 set status= @auth_status;

 if @auth_status = 2 then

			if exists(select NarrationID from voucher1 where NarrationID =NID) then 
			
			update voucher1,narration
			set
				voucher1.voucherTypeID = voucherID,
				voucher1.VoucherType = voucherName,
				narration.narration = NarrationName,
				voucher1.narration = NarrationName
				where voucher1.NarrationID = narration.id and voucher1.NarrationID = NID;
			   -- and narration.narration = NarrationName;
				
				set status1 = 1;
			end if;
				if not exists(select voucher1.voucherTypeID,
							   voucher1.narrationID,
							   voucher1.VoucherType,
							   voucher1.narration
							   from voucher1 where 
							   voucher1.voucherTypeID = voucherID and
								voucher1.narrationID = NID and 
								voucher1.VoucherType = voucherName and
								voucher1.narration = NarrationName ) then
								
						insert into narration (id,narration)
						values(NID,NarrationName);
						-- set NID = LAST_INSERT_ID();
						
						insert into voucher1(voucherTypeID, VoucherType, NarrationID,narration)
						values(voucherID,voucherName,NID,NarrationName);
						set status1 = 3;
			 end if;
  end if;
end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `InsertUsersLog` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `InsertUsersLog`(
IN userLogID int,
IN userid int,
IN ip varchar(50)

)
BEGIN

insert into userlog 
(
ID,
userID,
loginDate,
IP


)
values (
userLogID,
userid,
now(),
ip
);


END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `InsertUserToken` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `InsertUserToken`(userID double,token1 text)
BEGIN
IF NOT EXISTS (SELECT * FROM authtokens WHERE userId = userID) then



		   insert into authtokens(userId,token) values (userID,token1); 

               ELSE

					

					UPDATE authtokens

					

						SET 
						token = token1
						WHERE userId = userID;

                        End if;

			END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `IURoute` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `IURoute`(INOUT `id` DOUBLE, IN `rrID` VARCHAR(40), IN `routeID` VARCHAR(40), IN `routeDescription` VARCHAR(40), IN `routeActiveFlag` INT(11))
    DETERMINISTIC
BEGIN 

IF NOT EXISTS (SELECT * FROM route WHERE ID = id) then



		    INSERT INTO route

		         (

						

					   routeID,					   

					   description,

					   flgActive

					  

		         )

		    VALUES 

		         ( 		

                     	

						rrID, 

						routeDescription,

						routeActiveFlag

			  

                     );

                     

                  set id = LAST_INSERT_ID();

               ELSE

					

					UPDATE route

					

						SET 

						

						routeID = rrID,

						description    = routeDescription,

						flgActive = routeActiveFlag

					

                    	WHERE ID = id;

                        End if;

			END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `logout` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `logout`(IN userid int,
IN usertoken varchar(30)
)
BEGIN
delete from activeusers where userID = userid and token = usertoken;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `myTest` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `myTest`(
 
 IN contTypeID double,
 IN lastID double,
 IN  userId double,
 IN listLimit int(11)

 )
BEGIN
	
   if (contTypeID = 0) then 
   set contTypeID = null;
 	end if;
	
   select  mycontacts.*, c.CNID as contactDetailsCNID ,
    c.ID as contactDetailsId, 
	c.EDID as contactDetailsEDID,
    c.otherID as contactDetailsOtherID,
    c.detail1 as contactDetailsDetails1,
    c.detail2 as contactDetailsDetails2,
    c.detail3 as contactDetailsDetails3,
    c.detail4 as contactDetailsDetails4,
    c.detail5 as contactDetailsDetails5,
    c.detail6 as contactDetailsDetails6,
    ed.ID as entityDetailsID,
    ed.TypeID as entityDetailsTypeID,
    ed.Description as entityDetailsDescription,
    e.ID as entityID,
    e.Description as entityDescription
    
from (
select contact.*,com.Name as companyName from contact 
left join company com on com.ID = contact.companyID
where 
--  add all conditions here - begin --------------------
   contact.ID > lastID 
    and  contact.contactTypeID = coalesce(contTypeID, contact.contactTypeID)    
   and (contact.myContactID is null or contact.myContactId = userId)
   
--  add all conditions here - end --------------------
   
order by FirstName asc, lastName asc
limit listLimit ) mycontacts

left join contactdetails c  on c.CNID = mycontacts.ID 
left join entitydetails ed on ed.ID =  c.EDID
left join entities e on e.ID = ed.TypeID

;

 END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `ReasonList` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `ReasonList`(

 IN  uid  int,
 IN  token varchar(30),
 IN ViewpermissionID int,
 OUT status int

)
BEGIN

call purpleaid.sp_authorization(uid,  token, ViewpermissionID , @auth_status);

 set status= @auth_status;

 if @auth_status = 2 then
 
		select id as 'reasonID' ,Reason as 'ReasonName' ,
		reason.flgSystemValue as 'systemFlag'
		from reason order by   Reason , flgSystemValue asc ;
end if;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `recetPassword` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `recetPassword`(

inout userid double,
in oldPassword  varchar(80),
in newPassword varchar(80),
in token varchar(30),
in UpdatepermissionID int,
out status int,
out status1 int
)
BEGIN
call purpleaid.sp_authorization(userid,  token, UpdatepermissionID , @auth_status);

    set status= @auth_status;

	if @auth_status = 2 then

			if exists(select id from contact where contact.userPassward = BINARY oldPassword and contact.id = userid) then
			
					update contact
				
						set
						contact.userPassward = newPassword 
						where contact.id = userid ; 
						set status1 = 0;
                        
			else
					set status1 = 1;
			end if;
	end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `removeBusinessLicence` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `removeBusinessLicence`(

in  BLid double,
IN  uid  int,
IN  token varchar(30),
IN  viewPermissionID int,
OUT status int  

)
BEGIN

call purpleaid.sp_authorization(uid,  token, viewPermissionID , @auth_status);

    set status= @auth_status;

	if @auth_status = 2 then 
    
		
        if exists(select id from businesslicence where id = BLid) then
        
			delete from businesslicence where id = BLid;
            
		end if;
	end if;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `removeConctType` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `removeConctType`(
inout myContactTypeId double,
 out status1 int ,
 IN  uid   int,
 IN  token  varchar(30),
 IN DeletepermissionID  int,
 OUT status  int
)
BEGIN

call purpleaid.sp_authorization(uid,  token, DeletepermissionID , @auth_status);

 set status= @auth_status;

 if @auth_status = 2 then
 

		if not exists(select id from contact where contact.contacttypeid = myContactTypeId) then 
						
						delete from entitydetails where entitydetails.id = myContactTypeId;	
						
						delete from contacttyperolemap where ContactTypeID = myContactTypeId;
						
						set status1 = 0;
		else 
			set status1 = 12;
		end if;

	end if;

	
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `RemoveContactTypeRoleMap` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `RemoveContactTypeRoleMap`(
inout mycontactTypeId int ,
 inout myroleId int  ,
 out status1 int ,
 IN  uid  int,
 IN  token  varchar(30),
 IN DeletepermissionID  int,
 OUT status  int
 
)
BEGIN

call purpleaid.sp_authorization(uid,  token, DeletepermissionID , @auth_status);

 set status= @auth_status;

 if @auth_status = 2 then

		delete from userpermission where userid in(
			select contact.id userid  from contact 
		join entitydetails on contactTypeID = entitydetails.id
		join rolepermission on rolepermission.RoleID = myroleId
		 where contactTypeID = mycontactTypeId and  userRoleID=myroleId);
        
        delete from contacttyperolemap where contactTypeID = mycontactTypeId and roleid = myroleId;
        
        set status1 = 0;
end if;
       
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `removeReason` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `removeReason`(
inout ReasonID double,
out status1 int,
 IN  uid int,
 IN  token  varchar(30),
 IN DeletepermissionID  int,
 OUT status  int
)
proc_label:BEGIN

declare spflgSystemValue int ;
declare spflgReturn int ;
declare spflgCreditNote int ;
declare spflgDebitNote int ;
declare str varchar(45);
declare sperror int;
set status = 0;

call purpleaid.sp_authorization(uid,  token, DeletepermissionID ,  @auth_status);


set status= @auth_status;

if @auth_status = 2 then


		 if exists(select id from reason where id = ReasonID) then 
		  SELECT flgsystemvalue ,flgreturn ,
		  flgcreditnote,flgdebitnote INTO spflgSystemValue,spflgReturn,spflgCreditNote,spflgDebitNote
		  FROM reason WHERE reason.id=ReasonID;
		  -- SELECT a,b,c,d;
		  
			if found_rows() = 0 then
			set status1 = 13;
			end if;
			
			if(spflgSystemValue = 1) then 
				set status1 = 11;	-- system value
			else
			 set sperror = 0;
				if not (spflgReturn = 0 and spflgCreditNote= 0 and spflgDebitNote=0) then
					set status1 = 10;	-- not system value
					
					if spflgReturn = 1 then
						if exists (select returnregisterdetails.ID
							from returnregisterdetails
							where returnregisterdetails.conditions = ReasonID limit 1) then
							if found_rows() > 0 then
								set sperror = 1;-- set only if in use
							end if;
								select sperror;
						end if;
						 select sperror;
					end if;
					
					if spflgCreditNote = 1  then 
						if exists (select creditnote.id from  creditnote
									where  creditnote.Reason= ReasonID limit 1) then
									if found_rows() > 0 then
										set sperror = 1;-- set only if in use
									end if;
									select sperror;
						end if;
						 select sperror;
					end if;
					
					if spflgDebitNote =1 then
							if exists (select debitnote.id from  debitnote
									where  debitnote.Reason= ReasonID limit 1) then
									if found_rows() > 0 then
										set sperror = 1;-- set only if in use
									end if;
									select sperror;
							end if;
							 select sperror;
					end if;
					select sperror; 
				end if;
				 if  sperror = 0 then    
				   
				   delete from reason where reason.id = ReasonID;
							
							set status1 = 0; -- updates successfully
					else
					  set status1 = 12; -- reason is in use
					end if;
					
				 end if;
				  
		 else
				 set status1 = 13;
		 end if;
end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `removeReceipt` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `removeReceipt`(

inout RID double,
IN  uid  int,
IN  token varchar(30),
IN DeletepermissionID int,
out status int,
out status1 int
 )
BEGIN

call purpleaid.sp_authorization(uid,  token, DeletepermissionID ,  @auth_status);

set status= @auth_status;

	if @auth_status = 2 then 

		delete from managereceipt where id = RID;
		set status1 = 0;
	end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `removeVoucher` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `removeVoucher`( 
inout VID double,
in NID double,
out status1 int,
 IN  uid  int,
 IN  token  varchar(30),
 IN DeletepermissionID  int,
 OUT status  int
)
BEGIN

call purpleaid.sp_authorization(uid,  token, DeletepermissionID ,  @auth_status);


set status= @auth_status;

if @auth_status = 2 then

		if exists(select voucherTypeID from voucher1 where voucherTypeID = VID) then
		delete from voucher1 where voucherTypeID = VID and NarrationID =NID ;
		delete from narration where  id =NID ;
		set status1 = 0;
		
		else	
			set status1 = 1;
		end if;
end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `removeVoucherNew` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `removeVoucherNew`( 
inout VID double,
in NID double,
out status1 int,
 IN  uid  int,
 IN  token  varchar(30),
 IN DeletepermissionID  int,
 OUT status  int
)
BEGIN

call purpleaid.sp_authorization(uid,  token, DeletepermissionID ,  @auth_status);


set status= @auth_status;

if @auth_status = 2 then

		if exists(select voucherTypeID from voucher1 where voucherTypeID = VID) then
		delete from voucher1 where voucherTypeID = VID and NarrationID =NID ;
		delete from narration where  id =NID ;
		set status1 = 0;
		
		else	
			set status1 = 1;
		end if;
end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `retreiveCC` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `retreiveCC`(IN ccId double,
 IN uid int,
 IN token varchar(30),
 IN viewPermissionID int,
 OUT status int

)
BEGIN
call purpleaid.sp_authorization(uid,  token, viewPermissionID , @auth_status);

    set status= @auth_status;

    if @auth_status = 2 then 
Select  cclist.ID ,date_format(cclist.Date,"%d/%m/%Y") as ccDate,

if(returnregister.custID > 0 , customer.Name ,"SELF") as source,

 cclist.companyID, cclist.supplierID, ifnull(cclist.Date , "NA") as Date, cclist.Type, cclist.Status, cclist.RateOfCalculation,
 cclist.CalculateVAT, cclist.Remark, cclist.TotalItem, cclist.GrossTotal, cclist.VAT, cclist.NetAmount, cclist.createdBy,
 concat( ifnull(c1.FirstName , " " ) , " " , ifnull(c1.LastName , " ") ) as CreatedByUserName,
 returnregisterdetails.ID as returnregisterdetailsID , returnregisterdetails.RRID as returnregisterdetailsRRID,
 returnregisterdetails.SAID as returnregisterdetailsSAID , returnregisterdetails.productID as returnregisterdetailsPID ,
 returnregisterdetails.CCID as returnregisterdetailsCCID,returnregisterdetails.Amount as returnregisterdetailsAmount ,
 returnregisterdetails.conditions as returnregisterdetailsCondition , returnregisterdetails.Remark as returnregisterdetailsRemark,
 returnregisterdetails.batchNo as returnregisterdetailsBatchNo , returnregisterdetails.MRP as returnregisterdetailsMRP ,
 returnregisterdetails.purchaseRate as returnregisterdetailsPurchaseRate, returnregisterdetails.deleted as deleted,
 returnregisterdetails.sellRate as returnregisterdetailsSellRate , returnregisterdetails.Rate as Rate,returnregisterdetails.Qty as returnregisterdetailsQty ,
 date_format(returnregisterdetails.expiryDate , "%d/%m/%Y" )as returnregisterdetailsExpiryDate,product.Name as productName ,
 product.pack as productPack ,
 taxtable.vatTax as returnRegisterProductVAT
 from companyclaim cclist
 right join returnregisterdetails on returnregisterdetails.CCID = cclist.ID 
 left join contact c1 on c1.ID = cclist.createdBy
 left join product on product.ID = returnregisterdetails.productID
 left join taxtable on taxtable.ID = product.taxCodeID  
 left join returnregister on returnregister.ID = returnregisterdetails.RRID
 left join customer on returnregister.custID = customer.ID
 where cclist.ID  = ccId  ;
end if;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `retreiveRR` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `retreiveRR`(
IN rrID double,
 IN uid int,
 IN token varchar(30),
 IN viewPermissionID int,
 OUT status int
)
BEGIN
call purpleaid.sp_authorization(uid,  token, viewPermissionID , @auth_status);

    set status= @auth_status;

    if @auth_status = 2 then 
select returnregister.* , companyclaim.ID as companyClaimID ,
CAST(companyclaim.ID AS CHAR) as CCID,
product.Name as productName ,customer.Name as custName ,
product.pack as productPack ,concat( ifnull(c.FirstName , " " ) , " " , ifnull(c.LastName , " ") ) 
as VerifiedByUserName,concat( ifnull(c1.FirstName , " " ) , " " , ifnull(c1.LastName , " ") ) as CreatedByUserName,
 date_format(returnregister.Date ,"%d/%m/%Y") as rrDate,returnregisterdetails.deleted as deleted,
date_format(returnregister.createdOn , "%d/%m/%Y %H:%i:%s") as  returnregistercreatedOn,
 returnregisterdetails.ID as returnregisterdetailsID , returnregisterdetails.RRID as returnregisterdetailsRRID,
date_format(returnregister.verifiedOn , "%d/%m/%Y %H:%i:%s") as  returnregisterverifiedOn,


 returnregisterdetails.SAID as returnregisterdetailsSAID , 
 returnregisterdetails.productID as returnregisterdetailsPID , 
 returnregisterdetails.CCID as returnregisterdetailsCCID,
 returnregisterdetails.Amount as returnregisterdetailsAmount , 
 returnregisterdetails.conditions as returnregisterdetailsCondition ,
 returnregisterdetails.Remark as returnregisterdetailsRemark,
 returnregisterdetails.batchNo as returnregisterdetailsBatchNo ,
 returnregisterdetails.MRP as returnregisterdetailsMRP ,
 returnregisterdetails.purchaseRate as returnregisterdetailsPurchaseRate,
 returnregisterdetails.sellRate as returnregisterdetailsSellRate , 
 returnregisterdetails.Qty as returnregisterdetailsQty , 
 stockactive.ID as SAID , 
 -- stockactive.QtyReturn as returnRegisterProductQtyReturn, 

--  stockactive.FreeReturn as returnRegisterProductFreeReturn, 
  stockactive.QtyAvailable , stockactive.FreeAvailable,
 returnregisterdetails.conditionName as returnRegisterProductConditionName,
 date_format(returnregisterdetails.expiryDate ,"%d/%m/%Y") as returnregisterdetailsExpiryDate
from returnregister left join 
(
select 
returnregisterdetails.*
from returnregisterdetails 
where  returnregisterdetails.deleted = 0

) returnregisterdetails 
 on returnregister.ID = returnregisterdetails.RRID
 left join stockactive on stockactive.ID = returnregisterdetails.SAID
 left join companyclaim on companyclaim.ID = returnregisterdetails.CCID
left join product on product.ID = returnregisterdetails.productID 
 left join contact c on c.ID = returnregister.verifiedByID 
left join contact c1 on c1.ID = returnregister.createdBy 
left join customer on customer.ID = returnregister.custID

where returnregister.ID = rrID ;
end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `retrieveCompanyPurchaseOrder` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `retrieveCompanyPurchaseOrder`(IN  cpoId DOUBLE,
IN uid int,
 IN token varchar(30),
 IN viewPermissionID int,
 OUT status int
)
BEGIN
call purpleaid.sp_authorization(uid,  token, viewPermissionID , @auth_status);

    set status= @auth_status;

    if @auth_status = 2 then 
	SELECT p.ID as cpoId, p.CID as cpoCompanyId,p.SID as cpoSupplierId, p.MID as cpoMrId ,p.OrderDate as cpoDate,

 p.OrderAmt as cpoAmount, IFNULL(p.Remark, '' ) as cpoRemark ,IFNULL(p.flgEmail, '' ) as cpoEmailFlag,

IFNULL(p.flgCancelPending, '' ) as cpoCancelPending,IFNULL(p.flgScheme, '' ) as cpoSchemeFlag,

IFNULL(p.flgUrgent, '' ) as cpoUrgentFlag, IFNULL(p.flgVoid, '' ) as cpoVoidFlag,IFNULL(pod.MRP,'') as mrp,



po.CID as companyId , po.PID as productId , po.Scheme as scheme , po.Value as value , IFNULL(po.Remark, '' ) as remark ,

pod.ID as productId , pod.upcID as productUPCId , IFNULL(pod.Other, '' ) as productOtherInfo, pod.Name as productName,

IFNULL(pod.Description, '' ) as productDesc, IFNULL(pod.Remark, '' ) as productRemark , IFNULL(pod.Type, '' ) as productType ,

pod.CID as productCompanyId ,pod.DID as productDivisionId , pod.Pack as productPack , pod.Box as productBox ,

IFNULL(pod.flgActive, '' ) as productActiveFlag, IFNULL(pod.flgDPCO, '' ) as productDPCOFlag, IFNULL(pod.flgNarcotics, '' ) as productNarcoticsFlag



FROM purchaseorder p INNER JOIN purchaseproducts po 

ON p.ID = po.CompanyOrderID JOIN product pod

   ON po.PID = pod.ID



WHERE p.ID = cpoId;  
end if ;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `retrieveCompanyPurchaseOrderNew` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `retrieveCompanyPurchaseOrderNew`(IN  cpoId DOUBLE,
IN uid int,
 IN token varchar(30),
 IN viewPermissionID int,
 OUT status int)
BEGIN
call purpleaid.sp_authorization(uid,  token, viewPermissionID , @auth_status);

    set status= @auth_status;

    if @auth_status = 2 then 
	select plist.*, 

IFNULL(purchaseproducts.Quantity,0) as productQuantity,

IFNULL(purchaseproducts.CID,0) as companyId ,

IFNULL(purchaseproducts.PID,0) as productId ,

IFNULL(purchaseproducts.Scheme,'') as scheme , 

IFNULL(purchaseproducts.Value,0) as value , 

IFNULL(purchaseproducts.Remark, '' ) as remark 

from 

(select purchaseorder.ID as cpoId, 

purchaseorder.CID as cpoCompanyId, 

purchaseorder.SID as cpoSupplierId, 

purchaseorder.MID as cpoMrId ,

purchaseorder.status as poStatus,

DATE_FORMAT(purchaseorder.OrderDate, '%d/%m/%Y')  as cpoDate,

IFNULL(purchaseorder.OrderAmt,0) as cpoAmount, IFNULL(purchaseorder.Remark, '' ) as cpoRemark,

IFNULL(purchaseorder.flgEmail, 0 ) as cpoEmailFlag,

IFNULL(purchaseorder.flgCancelPending, '' ) as cpoCancelPendingFlag,

IFNULL(purchaseorder.flgScheme, 0 ) as cpoSchemeFlag,

IFNULL(purchaseorder.flgUrgent, 0 ) as cpoUrgentFlag,

IFNULL(purchaseorder.flgVoid, 0 ) as cpoVoidFlag, 

IFNULL(purchaseorder.VoidReason, '' ) as cpoVoidText,



IFNULL(product.MRP,0) as mrp,

product.ID as productId , 

IFNULL(product.upcID,0) as productUPCId , 

IFNULL(product.Other, '' ) as productOtherInfo, 

product.Name as productName,

IFNULL(product.Description, '' ) as productDesc, 

IFNULL(product.Remark, '' ) as productRemark ,

IFNULL(product.Type, '' ) as productType ,

producttype.Description as productTypeName,

product.CID as productCompanyId ,

product.DID as productDivisionId , 

IFNULL(product.Pack,0) as productPack , 

IFNULL(product.Box,0) as productBox ,

IFNULL(product.flgActive, '' ) as productActiveFlag, 

IFNULL(product.flgDPCO, '' ) as productDPCOFlag, 

IFNULL(product.flgNarcotics, '' ) as productNarcoticsFlag

from purchaseorder

left join product on purchaseorder.CID = product.CID left join producttype on producttype.ID = product.Type

where purchaseorder.ID = cpoId) plist



left join purchaseproducts on plist.cpoId = purchaseproducts.CompanyOrderID

and  plist.productId = purchaseproducts.PID;

end if;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `retrieveGoodsReceipt` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `retrieveGoodsReceipt`(IN grID double,
IN uid int,
 IN token varchar(30),
 IN viewPermissionID int,
 OUT status int)
BEGIN

-- --------------------------------------------------------------------------------------------------- --
-- --------------------------------------------------------------------------------------------------- --

-- Name : retrieveGoodsReceipt
-- Author : Nikita Pise
-- Date : 
-- Description : To retrieve all related records of GR from (stockinwards , stockactive, products , company,
-- 			    productbatch ) 
-- ------------------------------------------CHANGE LOG ---------------------------------------------- --

-- VersionNo.        Date                 Change                                           Author
-- 1.0           12 June 2015            Inserted deleted condition                       Nikita Pise 
--                                       on stock inward and productbatch 

-- --------------------------------------------------------------------------------------------------- --
-- --------------------------------------------------------------------------------------------------- --
call purpleaid.sp_authorization(uid,  token, viewPermissionID , @auth_status);

    set status= @auth_status;

    if @auth_status = 2 then 

 select good.*,
 ifnull(p.Name,'') as productName,
 ifnull(p.Pack,0) as productPack ,
 ifnull(p.MRP,0) as productMRP,
 ifnull(c.Name,'') as companyName,
 p.ID as productID,
 ifnull(s.Name,'') as supplierName,
 
 
 date_format( good.ledgerOn ,'%d/%m/%Y %h:%i:%s') as grledgerOn,
 date_format( good.stockOn ,'%d/%m/%Y %h:%i:%s') as grstockOn,
 
 
 
 concat( ifnull(u1.FirstName , '' ) , ' ' , ifnull(u1.LastName , '') ) as ledgerByUserName,
 concat( ifnull(u2.FirstName , '' ) , ' ' , ifnull(u2.LastName , '') ) as stockByUserName,
 
date_format( good.verifiedOn ,'%d/%m/%Y %h:%i:%s') as grverifiedOn,
 ifnull(good.verifiedByID,0) as grverifiedByID,
 date_format(good.goodsReceiptDate , '%d/%m/%Y') as grDate, 
 date_format(good.billDate , '%d/%m/%Y')as grbillDate, 
 date_format(good.LRDate , '%d/%m/%Y')  as grLRDate, 
 date_format(good.LRDueDate , '%d/%m/%Y')  as grLRDueDate,   
 pb.ID as productBatchId, 
 ifnull(pb.batchNo,'') as productBatchNo,
 pb.grID as productBatchGrId,
 if(ifnull(stockactive.QtySold , 0 ) > 0 , 1 , 0) as QtySold,
if(ifnull(stockactive.FreeSold , 0 ) > 0 , 1, 0) as FreeSold,
 
 date_format( pb.expiryDate , '%d/%m/%Y')  as productBatchExpiryDate,

 ifnull(pb.MRP,0) as productBathMRP, 
 ifnull(pb.trade,0) as productBatchTrade, 
 ifnull(pb.purchaseRate,0) as productBatchPurchaseRate,
 ifnull(pb.tradeDiscount,0) as productBatchTradeDiscount,
 ifnull(pb.tradeDiscountAmt,0) as productBatchTradeDiscountAmount,
 ifnull(pb.sellRate,0) as productBatchSellRate,
 
 date_format(  pb.purchaseDate , '%d/%m/%Y')   as productBatchPurchaseDate,
 

 pb.flgActive as productBatchActiveFlag,
 pb.flgLock as productBatchLockFlag,
 ifnull(pb.Remark,'') as productBatchRemark,
 ifnull(pb.specialDiscount,0) as productBatchSpecialDiscount,
 ifnull(pb.specialDiscountAmt,0) as productBatchSpecialDiscountAmt,
ifnull( view_product_contents.contentName ,'')as contentName,
ifnull( pt.Description,'') as productType,
 
 si.recid as recid,
 ifnull(si.quantity,0) as QuantityProduct,
 ifnull( si.free,0) as FreeProduct,
 ifnull(si.difference,0) as Difference,
 si.storage as storageId,
 si.receipttype as receipttypeId,
 si.ID as SIID,
 si.deleted as deleted ,
 
 
 

concat( ifnull(u.FirstName , '' ) , ' ' , ifnull(u.LastName , '') ) as VerifiedByUserName,
 ifnull(tc.centralSalesTax,0) as CST,
 ifnull(tc.localTax,0) as LT , 
ifnull( tc.vatTax,0) as VAT ,
 ifnull(tc.PurchaseVATChargeOn,0) as vatChargeOn
 
 from goodsreceived good 
 left join (select * from stockinward where stockinward.deleted = 0 ) si  on si.grID = good.ID   
 left join (select * from productbatch where productbatch.deleted = 0 )  pb on pb.ID = si.PBID
 left join stockactive on stockactive.SIID = si.ID
 left join product p on p.ID = si.PID
 left join taxtable tc on tc.ID = p.taxCodeID
 left join company c on c.ID = good.CID
 left join view_product_contents on view_product_contents.PID = p.ID
 left join producttype pt on p.Type = pt.ID 
 left join supplier s on s.ID = good.SID
 left join contact u on u.ID = good.verifiedByID
  left join contact u1 on u1.ID = good.ledgerBy
   left join contact u2 on u2.ID = good.stockBy
where good.ID = grID 
order by good.ID, si.recid  ;

end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `RetrievePurchaseOrderRegister` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `RetrievePurchaseOrderRegister`(
 IN lastID int,
 IN listLimit  int,
 IN companyID int,
 IN supplierID int,
 IN MRID int,
 IN PONum int,
 IN fromDate varchar(40),
  IN toDate varchar(40),
 IN item int(11),
 IN fromAmt double,
 IN toAmt double,
 IN status1 int,
 IN urgent int,
 IN void int,
 IN createdByFilterId double,
 IN  uid  int,
 IN  token  varchar(30),
 IN ViewpermissionID int,
 OUT status  int
)
BEGIN

call purpleaid.sp_authorization(uid,  token, ViewpermissionID , @auth_status);

 set status= @auth_status;

 if @auth_status = 2 then
 
  set @strQuery = 'Select ';
     
  set @strQuery = concat(@strQuery , ' purchaseorder.id as "purchaseOrderNum" , date_format(purchaseorder.OrderDate ,"%d/%m/%Y") as "OrderDate" , ifnull(purchaseorder.OrderAmt,0) as "OrderAmount" , purchaseproducts.Quantity as "items" , purchaseorder.SID , ifnull(supplier.name ," " )as "supplierName" , purchaseorder.MID , ifnull(mr.Name," ") as "MRName" , purchaseorder.status , ifnull(purchaseorder.flgUrgent," ") as "flgUrgent" , ifnull(purchaseorder.flgVoid," ") as "Flgvoid" , ifnull(purchaseorder.flgEmail," ") as "Flgemail" , ifnull(purchaseorder.flgScheme," ") as "FlgScheme" , ifnull(purchaseorder.flgCancelPending," ") as "FlgCancelpending"  , ifnull(purchaseorder.VoidReason," ") as "VoidReason" , purchaseorder.CreatedBy, concat( ifnull(contact.FirstName , " ") , " " , ifnull(contact.LastName , " ") ) as "CreatedByUserName" , purchaseorder.cid as "companyID" , ifnull(company.name," ") as "CompanyName" , product.id as "productID" , product.type as "productType" ,  ifnull(product.name," ") as "productName" , ifnull(product.Description," ") as "productDescription" , product.did as "divisionID", ifnull(division.Name," ") as "DivisionName", ifnull(product.pack,0) as "productPack" , ifnull(product.box,0) as " productBox", product.mrp, purchaseproducts.Quantity , purchaseproducts.scheme,  ifnull(purchaseproducts.value,0) as "value", ifnull(product.Remark," ") as "ProductRemark" from purchaseorder left join purchaseproducts on purchaseorder.id = purchaseproducts.CompanyOrderID left join supplier on supplier.ID = purchaseorder.SID left join mr on mr.ID = purchaseorder.MID left join company on company.ID = purchaseorder.CID  left join product on product.id = purchaseproducts.pid left join division on division.id = product.DID left join contact on contact.id = purchaseorder.CreatedBy  where purchaseorder.id > ', cast(lastID as char));
	
     IF void = -1 then 
  
		SET @strQuery = concat(@strQuery, ' and purchaseorder.flgVoid = 0 ' ) ;
    
	end if;
  
  

   IF (length(fromDate) >  0 ) then 
  
    SET @strQuery = concat(@strQuery, ' and  purchaseorder.OrderDate >=  str_to_date("', fromDate , '" ,"%d/%m/%Y") ') ;
    
  end if; 
  
   if (length(toDate) > 0 ) then 
  
    SET @strQuery = concat(@strQuery, ' and  purchaseorder.OrderDate <=  str_to_date("', toDate , '" ,"%d/%m/%Y") ') ;
  end if;
  
  IF fromAmt > 0  then 
  
    SET @strQuery = concat(@strQuery, ' and purchaseorder.OrderAmt >= ' , cast(fromAmt as char)) ;
    
  end if; 
   
   
  IF toAmt > 0  then 
  
    SET @strQuery = concat(@strQuery, ' and purchaseorder.OrderAmt <= ' , cast(toAmt as char)) ;
    
  end if;
  
  if item > 0 then
   
   set @strQuery = concat(@strQuery, ' and purchaseproducts.Quantity = ' , cast(item as char));
   
  end if;
  
  
  if companyID > 0 then
  
   set @strQuery = concat( @strQuery , ' and  purchaseorder.cid =  ' , cast(companyID as char));
   
  end if;
  
  
  if MRID > 0 then
  
  set @strQuery = concat( @strQuery , ' and  purchaseorder.mid = ' , cast(MRID as char));
   
  end if;
        
  
  if supplierID > 0 then
  
  set @strQuery = concat( @strQuery , ' and  purchaseorder.sid = ' , cast(supplierID as char));
   
  end if;
  
  
   if PONum > 0 then
  
   set @strQuery = concat( @strQuery , ' and  purchaseorder.id =  ' , cast(PONum as char));
   
  end if;
  
        
   IF status1 > 0 then 
  
    SET @strQuery = concat(@strQuery, ' and purchaseorder.status = ' , cast(status1 as char)) ;
    
  end if; 
  
  
   IF createdByFilterId > 0  then 
  
    SET @strQuery = concat(@strQuery, ' and returnregister.createdBy = ' , cast(createdByFilterId as char)) ;
    
  end if;
  
   IF urgent > -1 then 
  
    SET @strQuery = concat(@strQuery, ' and purchaseorder.flgUrgent = ' , cast(urgent as char)) ;
    
  end if; 
  
   IF void > -1 then 
      
		SET @strQuery = concat(@strQuery, ' and purchaseorder.flgVoid = ' , cast(void as char)) ;
         
     end if;
  
  set @strQuery = concat(@strQuery, ' order by purchaseorder.id  desc , purchaseorder.OrderDate desc ' , ' limit ',  cast(listLimit as char));


  PREPARE stmt FROM @strQuery ;
  Execute stmt ;
  deallocate prepare stmt;
  select @strQuery ;

end if;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `RetrieveSystemVariableValue` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `RetrieveSystemVariableValue`(inout systemID double,
IN uid int,
 IN token varchar(30),
 IN viewPermissionID int,
 OUT status int

)
BEGIN
call purpleaid.sp_authorization(uid,  token, viewPermissionID , @auth_status);

    set status= @auth_status;

    if @auth_status = 2 then 
select purpleaidsettings.Value , purpleaidsettings.ID from purpleaidsettings where purpleaidsettings.id = systemID;

end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `saveProductcontent` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `saveProductcontent`(IN productId double,IN contentId double)
BEGIN

	insert into productcontents(productID,contentID) values(productId,productId);



END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `selfProductListForRR` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `selfProductListForRR`(

IN uid int,
 IN token varchar(30),
 IN viewPermissionID int,
 OUT status int
)
BEGIN
call purpleaid.sp_authorization(uid,  token, viewPermissionID , @auth_status);

    set status= @auth_status;

    if @auth_status = 2 then 
select distinct PID,product.Name , product.Pack ,
company.ID as cID ,company.Name as companyName 

from stockactive 
left join product on product.ID = stockactive.PID
left join company on company.ID = product.CID 
where stockactive.QtyAvailable > 0 or stockactive.FreeAvailable > 0
order by product.Name ;


end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_ACL` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_ACL`(
IN uid int,
IN token varchar(30),
IN pageid int ,
OUT status int 

)
BEGIN

    declare groupID int;
    declare seesiontime int;

    select value into seesiontime from purpleaidsettings 

    where Name ='sessionTime';
  
    set status = 0 ;

    if exists ( select userID from activeusers where 
                (activeusers.userID = uid and activeusers.ModifiedOn >= now() - INTERVAL seesiontime MINUTE) and 
                activeusers.token = token) then 

				set status  = 1;

    select permissionGroupID into groupID from permission  where ID = pageid;


	select userpermission.* , permission.ID , permission.Description, permission.url
	from userpermission 
	left join permission on permission.ID = userpermission.permissionID 
    left join menumaster on menumaster.PID = permission.ID
	where permission.permissionGroupID = groupID  and userpermission.userID  = uid;
    -- and  permission.ID = pageid;

	if found_rows() > 0 then 
	  
      set status = 2;

	end if;

    end if;




END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_authorization` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_authorization`(

IN uid int,
IN token varchar(40),
IN permissionid int,
OUT status  int

)
BEGIN
    
    declare seesiontime int;
    
    select value into seesiontime from purpleaidsettings 

    where Name ='sessionTime';
  
    set status = 0 ;

    if exists ( select userID from activeusers where 
                (activeusers.userID = uid and activeusers.ModifiedOn >= now() - INTERVAL seesiontime MINUTE) and 
                activeusers.token = token) then 

				set status  = 1;
			
                      
			update activeusers set ModifiedOn = now() where userID = uid and token = token;
         
         
		 if exists ( select userpermission.ID  from userpermission 
		left join activeusers on activeusers.userID = userpermission.userID 
		where (userpermission.permissionID = permissionid and userpermission.userID =uid) limit 1) then
                   
      
	  
         set status = 2;
          
        
            
	   end if;

   end if;




END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `test` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `test`(

          IN  companyId                    double       , 

          IN  companyName                      varchar(60)   , 

          IN  edeCode                      varchar(60)    , 

          IN  companyCode                      VARCHAR(30)   , 

          IN  companyRemarks                     VARCHAR(20)   , 

          IN  companyAddressLine1                   VARCHAR(1)    ,

          IN  companyAddressLine2                    varchar(60)    , 

          IN  companyCity                          int(11)  ,

          IN  companyContactPerson      varchar(50)  ,

          IN  companyPhone                      VARCHAR(15)    ,

          IN  companyFax                         int(11)    , 

          IN  companyEmail                        varchar(45)    ,

          IN  companyStockCalculationMode                   varchar(45)    , 

          IN  companyOrderLimit                  double    ,

          IN  companyPaymentTerms                   varchar(45)    , 

          IN  companyPaymentDays                   int(11)    ,

          IN  companyActiveFlag                   int(1)    , 

          IN  companyEmailPOFlag                   int(11),

    OUT new_identity                       INT   (11)

              



 )
BEGIN

IF NOT EXISTS (SELECT * FROM company WHERE ID = companyId) then



      INSERT INTO company

           (

             ID ,  

             Name    , 

             EdeCode    , 

             Code , 

             Remarks, 

             AddrLine1,

             AddrLine2 , 

             City,

             ContactPerson, 

             Phone, 

             Fax , 

             Email, 

             StockcMode, 

             OrderLimit,

             PayTerms, 

             PayDays,

             flgActive, 

             flgEmail                      

            

           )

      VALUES 

           ( 

            companyId, 

                     companyName,

                     edeCode , 

                     companyCode ,

                     companyRemarks ,

                     companyAddressLine1 , 

                     companyAddressLine2 , 

                     companyCity ,

                     companyContactPerson , 

                     companyPhone ,

                     companyFax ,

                     companyEmail ,        

                     companyStockCalculationMode,

                     companyOrderLimit , 

                     companyPaymentTerms, 

                     companyPaymentDays,

                     companyActiveFlag, 

                     companyEmailPOFlag

   

     



 

                  );

 ELSE

     

     UPDATE company

     

      SET ID = companyId,

      Name    = companyName,

      EdeCode    = edeCode ,

      Code = companyCode ,

      Remarks= companyRemarks ,

      AddrLine1= companyAddressLine1 ,

      AddrLine2= companyAddressLine2 ,

      City= companyCity ,

      ContactPerson=companyContactPerson ,

      Phone= companyPhone ,

      Fax = companyFax ,

      

      Email= companyEmail ,

      StockcMode= companyStockCalculationMode,

      OrderLimit= companyOrderLimit ,

      PayTerms= companyPaymentTerms,

      PayDays= companyPaymentDays,

      flgActive= companyActiveFlag,

      flgEmail  = companyEmailPOFlag

      WHERE ID = companyId;

                        End if;

                    



                        SET new_identity = LAST_INSERT_ID();



   END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `updateAreaLockSmith` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `updateAreaLockSmith`(
IN `recid` DOUBLE,
 IN `areaActiveFlag` INT(11),
IN  uid  int,
IN  token varchar(30),
IN UpdatepermissionID int,
OUT status int 
 
 
 )
    DETERMINISTIC
BEGIN 

    call purpleaid.sp_authorization(uid,  token, UpdatepermissionID ,  @auth_status);


 set status= @auth_status;

 if @auth_status = 2 then 

    UPDATE area

    SET    

            flgActive = areaActiveFlag 

			

    WHERE   ID  = recid  ;

	
end if;
	



END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `UpdateCompanyClaim` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `UpdateCompanyClaim`(
IN companyClaimId double,
In companyClaimStatus int(11),
IN uid  int,
IN token varchar(30),
IN InsertpermissionID int,
OUT status int
)
BEGIN
call purpleaid.sp_authorization(uid,  token, InsertpermissionID , @auth_status);

    set status= @auth_status;

 if @auth_status = 2 then 
    UPDATE companyclaim

    SET    

            Status = 1,
            ModifiedBy = uid,
         ModifiedOn = now()


    WHERE   ID  = companyClaimId  ;
end if;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `updateCompanyLockSmith` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `updateCompanyLockSmith`(IN `recid` DOUBLE, IN `companyActiveFlag` INT(11),
IN  uid  int,
IN  token varchar(30),
IN UpdatepermissionID int,
OUT status int 

)
    DETERMINISTIC
BEGIN 
   call purpleaid.sp_authorization(uid,  token, UpdatepermissionID ,  @auth_status);


 set status= @auth_status;

 if @auth_status = 2 then 


    UPDATE company

    SET    

            flgActive = companyActiveFlag   

			

             WHERE   ID  = recid  ;

	end if;

   



END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `updateContactForDelete` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `updateContactForDelete`(
IN cid double,
IN deletedFlag INT(11),
 IN  uid  int,
IN  token varchar(30),
IN DeletepermissionID int,
OUT status int 


)
BEGIN
 call purpleaid.sp_authorization(uid,  token, DeletepermissionID ,  @auth_status);


 set status= @auth_status;

 if @auth_status = 2 then 

    UPDATE contact

    SET    

            deleted = 1


    WHERE   ID  = cid  ;

end if;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `UpdateCreditNoteForRateDifference` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `UpdateCreditNoteForRateDifference`(
INOUT creditNoteId double,
IN CreditNoteRemark varchar(90),
IN CreditNoteflgLock INT,
IN CreditNoteAmount decimal(10,2),
IN CreditNoteProductTotalVATamt decimal(10,2),
IN CreditNoteProductReturnAmountTotal decimal(10,2),
IN CreditNoteApprovedFlg INT,
IN  uid  int,
IN  token varchar(30),
IN UpdatepermissionID int,
OUT status int ,
IN lflag int



)
BEGIN

    call purpleaid.sp_authorization(uid,  token, UpdatepermissionID ,  @auth_status);


 set status= @auth_status;

 if @auth_status = 2 then 

update creditnote 
set 

remark = CreditNoteRemark,
lockUser = uid,
lockDate = now(),
 flgLock = CreditNoteflgLock,
  Amount = CreditNoteAmount,
  creditNoteProductTotalVATAmount = CreditNoteProductTotalVATamt,
  creditNoteProductTotalAmount = CreditNoteProductTotalAmount,
 ledgerDate = now(),
  ApprovedBy = uid,
  ApprovedOn = now(), 
  flgApproved = CreditNoteApprovedFlg,
  lockDate =now(),
  lockUser = uid,
        flgLedgerLock = lflag,
      ledgerUser = uid
     
  where ID = creditNoteId;
  
set creditNoteId = LAST_INSERT_ID();
end if;



END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `updateCustomerLockSmith` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `updateCustomerLockSmith`(IN `recid` DOUBLE, 
IN `customerActiveFlag` INT(11), IN `customerLockFlag` INT(11),
IN  uid  int,
IN  token varchar(30),
IN UpdatepermissionID int,
OUT status int 
)
    DETERMINISTIC
BEGIN 


   call purpleaid.sp_authorization(uid,  token, UpdatepermissionID ,  @auth_status);


 set status= @auth_status;

 if @auth_status = 2 then 
    UPDATE customer

    SET    

            flgActive = customerActiveFlag ,

			flgLock	= customerLockFlag

			

    WHERE   ID  = recid  ;

	end if;



END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `updateDivisionLockSmith` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `updateDivisionLockSmith`(IN `recid` DOUBLE,
 IN `divisionActiveFlag` INT(11),
 IN  uid  int,
IN  token varchar(30),
IN UpdatepermissionID int,
OUT status int 
 
 )
    DETERMINISTIC
BEGIN 

   call purpleaid.sp_authorization(uid,  token, UpdatepermissionID ,  @auth_status);


 set status= @auth_status;

 if @auth_status = 2 then 
    UPDATE division

    SET    

            flgActive = divisionActiveFlag   

			

    WHERE   ID  = recid  ;

	end if;



END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `updateFinancialYear` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `updateFinancialYear`( 
inout FID double,
in LockFlag int(11),
in ActiveFlag int(11),
in remark1 varchar(45),
in remark2 varchar(45),
IN  uid  int,
IN  token varchar(30),
IN UpdatepermissionID int,
out status int,
out s varchar(80)
)
BEGIN

call sp_authorization(uid , token , UpdatepermissionID ,  @auth_status);

set status =  @auth_status;

if  @auth_status = 2 then 

	update financialyear
		set 
			FlgLock = LockFlag,
			FlgActive = ActiveFlag,
		   
			RemarkLock = remark1,
			RemarkActive = remark2,
            ModifiedBy = uid,
			 ModifiedOn = date_format(now(),'%Y/%m/%d %h:%i:%s') 
			
			where ID = FID;
            
		set s = (select  concat(date_format(financialyear.ModifiedOn, '%d/%m/%Y %h:%i:%s'), "  " , -- as ModifiedOn,
        
		concat( ifnull(contact.FirstName , '' ) , ' ' , ifnull(contact.LastName , '') )) -- as ModifiedByUserName )
 
		from contact
        
		 join financialyear on contact.id = financialyear.createdBy  and financialyear.ModifiedBy
         
		 where financialyear.ModifiedBy = uid and financialyear.id = FID);
         
         -- select s;

			-- set status = 0;
	end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `updatemyProfile` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `updatemyProfile`(

inout userid double,
in Title int,
in FName varchar(45),
in MName varchar(45),
in LName varchar(45),
in Job varchar(45),
in contactOrganization varchar(45),
IN  token varchar(30),
in viewPermissionID int,
OUT status int, 
 out contactDesc varchar(30)
)
BEGIN

call purpleaid.sp_authorization(userid,  token, viewPermissionID , @auth_status);

    set status= @auth_status;

	if @auth_status = 2 then 


		if exists (select id from contact where id = userid) then

			update contact 
			
				set 
                
					NameTitle = Title,
					FirstName = FName,
					MiddleName = MName,
					LastName = LName,
					JobTitle = Job,
					organization = contactOrganization
					where id = userid;
					
					set contactDesc =(select entitydetails.description  from contact join entitydetails
					on contact.contacttypeid = entitydetails.id where contact.id =userid);
                    
                    -- set status1 = 0;
					
				-- else
				  -- set status1 = 1;
			end if;
		end if;
			
 
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `UpdatePBAforSchemeLock` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `UpdatePBAforSchemeLock`(IN batchSchemePBAID double, IN batchSchemePBASchemeLockFlag INT(11))
BEGIN

    UPDATE productbatchactive
    SET    
           schemeLock	= 	batchSchemePBASchemeLockFlag
			
    WHERE   ID  = batchSchemePBAID  ;
	

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `UpdatePBAforSchemeLockOLD` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `UpdatePBAforSchemeLockOLD`(IN batchSchemePBAID double, IN batchSchemePBASchemeLockFlag INT(11))
BEGIN

    UPDATE productbatchactive
    SET    
           schemeLock	= 	batchSchemePBASchemeLockFlag
			
    WHERE   ID  = batchSchemePBAID  ;
	

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `UpdatePBAForStockAdjustments` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `UpdatePBAForStockAdjustments`(
IN PBAID double,
IN activeFlag int(11),
IN lockFlag int(11),
IN uid  int,
IN token varchar(30),
IN InsertpermissionID int,
OUT status int 
)
BEGIN

call purpleaid.sp_authorization(uid,  token, InsertpermissionID , @auth_status);

    set status= @auth_status;

 if @auth_status = 2 then 
update productbatchactive 
  set flgActive= activeFlag,
                  flgLock = lockFlag
 where ID = PBAID ;
end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `updateProductActiveLock` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `updateProductActiveLock`(
 IN grProductBatchProductId double, 
IN grProductBatchProductActiveFlag INT(11),
IN grProductBatchProductLockFlag INT(11),
IN uid  int,
IN token varchar(30),
IN InsertpermissionID int,
OUT status int
)
BEGIN
call purpleaid.sp_authorization(uid,  token, InsertpermissionID , @auth_status);

    set status= @auth_status;

 if @auth_status = 2 then 

    UPDATE product
    SET    
            flgActive = grProductBatchProductActiveFlag ,
			flgLock	= 	grProductBatchProductLockFlag
			
    WHERE   ID  = grProductBatchProductId  ;

end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `updateProductBatchActiveLock` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `updateProductBatchActiveLock`(
 IN grProductBatchActiveId double, 
IN grProductBatchActiveFlag INT(11),
IN grProductBatchLockFlag INT(11),
IN uid  int,
IN token varchar(30),
IN InsertpermissionID int,
OUT status int
)
BEGIN

call purpleaid.sp_authorization(uid,  token, InsertpermissionID , @auth_status);

    set status= @auth_status;

 if @auth_status = 2 then 

    UPDATE productbatchactive
    SET    
            flgActive = grProductBatchActiveFlag ,
   flgLock =  grProductBatchLockFlag
   
    WHERE   ID  = grProductBatchActiveId  ;
end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `UpdateProductForReassign` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `UpdateProductForReassign`(

 IN productId  DOUBLE,

 IN productCompanyId double,

 IN `productDivisionId` DOUBLE,
 IN  uid  int,
IN  token varchar(30),
IN UpdatepermissionID int,
OUT status int 


 

 )
    DETERMINISTIC
BEGIN 

 call purpleaid.sp_authorization(uid,  token, UpdatepermissionID ,  @auth_status);


 set status= @auth_status;

 if @auth_status = 2 then 

					UPDATE product

			

					SET 

                   

					 CID = productCompanyId,  

					 DID = productDivisionId 

								

					WHERE ID = productId;

       end if;

			END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `updateRouteLockSmith` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `updateRouteLockSmith`(IN `recid` DOUBLE,
 IN `routeActiveFlag` INT(11),
  IN  uid  int,
IN  token varchar(30),
IN UpdatepermissionID int,
OUT status int )
    DETERMINISTIC
BEGIN 

call purpleaid.sp_authorization(uid,  token, UpdatepermissionID ,  @auth_status);


 set status= @auth_status;

 if @auth_status = 2 then 

    UPDATE route

    SET    

            flgActive = routeActiveFlag 

			

    WHERE   ID  = recid ;

	
end if;
	



END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `UpdateRRDforQtyFreeReturn` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `UpdateRRDforQtyFreeReturn`(
IN rrid double,
IN qtyReturn double,
IN freeReturn double

)
BEGIN

update returnregister 

set 

		QtyReturn = qtyReturn ,
        FreeReturn = freeReturn 
        
        where ID = rrid;


END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `UpdateRRForCount` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `UpdateRRForCount`(
IN rrid double,
IN rrdcount double,
IN deleted double
)
BEGIN
if(deleted = 0) then 
update returnregister
SET    

            
            RRDcount = rrdcount 
        	


    WHERE   ID  = rrid  ;
    end if ;
    
    
    if(deleted = 1) then 
update returnregister
SET    

            
            RRDcount = rrdcount - 1,
        	CCcount = CCcount -1


    WHERE   ID  = rrid  ;
    end if ;
    
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `UpdateRRForCount2` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `UpdateRRForCount2`(IN rrid double,
IN ccount double,
IN deleted double)
BEGIN

if(deleted = 0) then 
update returnregister
SET    

            
          
        	CCcount = ccount + 1


    WHERE   ID  = rrid  ;
    end if ;
    
    
    if(deleted = 1) then 
update returnregister
SET    

            
           
        	CCcount = ccount - 1


    WHERE   ID  = rrid  ;
    end if ;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `UpdateSAForStockAdjustments` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `UpdateSAForStockAdjustments`(
IN totalStock double,
IN grProductBatchSAID double,
IN stockAdjustmentOption double,
IN uid  int,
IN token varchar(30),
IN InsertpermissionID int,
OUT status int 
)
BEGIN
call purpleaid.sp_authorization(uid,  token, InsertpermissionID , @auth_status);

    set status= @auth_status;

	if @auth_status = 2 then 
if stockAdjustmentOption = 1 then 
	update stockactive 
		set QtyAvailable = QtyAvailable - totalStock 
	where ID = grProductBatchSAID ;


end if;

if stockAdjustmentOption = 2 then 
	update stockactive 
		set FreeAvailable = FreeAvailable - totalStock 
	where ID = grProductBatchSAID ;

end if; 
end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `updateSalesmanLockSmith` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `updateSalesmanLockSmith`(IN `recid` DOUBLE,
 IN `salesmanActiveFlag` INT(11), IN `salesmanLockFlag` INT(11),
 IN  uid  int,
IN  token varchar(30),
IN UpdatepermissionID int,
OUT status int 
 
 )
    DETERMINISTIC
BEGIN 
  call purpleaid.sp_authorization(uid,  token, UpdatepermissionID ,  @auth_status);


 set status= @auth_status;

 if @auth_status = 2 then 


    UPDATE salesman

    SET    

            flgActive = salesmanActiveFlag ,

			flgLock	= 	salesmanLockFlag

			

    WHERE   ID  = recid  ;

	
end if;
	



END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `updateSetDefault` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `updateSetDefault`(

inout systemVariableID double ,
IN uid  int,
IN  token  varchar(30),
IN UpdatepermissionID int,
OUT status  int,

out value1 varchar(30)
)
BEGIN

call purpleaid.sp_authorization(uid,  token, UpdatepermissionID , @auth_status);

	set status= @auth_status;

		if @auth_status = 2 then
        
        update purpleaidsettings
        
			set 
            purpleaidsettings.value = purpleaidsettings.DefaultValue where
            
            purpleaidsettings.id = systemVariableID;
        
        set value1 = (select purpleaidsettings.value from purpleaidsettings where
						purpleaidsettings.id = systemVariableID);
        end if;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `UpdateStockActiveForRR` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `UpdateStockActiveForRR`(
IN returnRegisterProductSAID double,
IN returnRegisterProductFreeReturn double,
IN returnRegisterProductQtyReturn double,
IN  uid  int,
IN  token varchar(30),
IN UpdatepermissionID int,
OUT status int 

)
BEGIN


    call purpleaid.sp_authorization(uid,  token, UpdatepermissionID ,  @auth_status);


 set status= @auth_status;

 if @auth_status = 2 then 

    update stockactive 
	
	set 
		FreeAvailable = FreeAvailable - returnRegisterProductFreeReturn ,

		QtyAvailable = QtyAvailable - returnRegisterProductQtyReturn ,

		FreeReturn = ifnull(FreeReturn,0) + returnRegisterProductFreeReturn,

		QtyReturn =  ifnull(QtyReturn,0) + returnRegisterProductQtyReturn

	where ID = returnRegisterProductSAID;
    
    end if;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `UpdateStockActiveForRRCustomer` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `UpdateStockActiveForRRCustomer`(
IN returnRegisterProductSAID double,
IN returnRegisterProductFreeAvailable double,
IN returnRegisterProductQtyAvailable double,
IN returnRegisterProductFreeReturn double,
IN returnRegisterProductQtyReturn double,
IN  uid  int,
IN  token varchar(30),
IN UpdatepermissionID int,
OUT status int 

)
BEGIN
   call purpleaid.sp_authorization(uid,  token, UpdatepermissionID ,  @auth_status);


 set status= @auth_status;

 if @auth_status = 2 then 

	update stockactive 


	set 
		FreeAvailable = FreeAvailable - returnRegisterProductFreeReturn ,

		QtyAvailable = QtyAvailable - returnRegisterProductQtyReturn ,

		FreeReturn = returnRegisterProductFreeReturn,

		QtyReturn = returnRegisterProductQtyReturn

	where ID = returnRegisterProductSAID;

end if;



END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `UpdateStockActiveForTranferBatch` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `UpdateStockActiveForTranferBatch`(

 IN stockActiveID  DOUBLE,

 IN grProductBatchActiveId double,

 IN `stockAvailable` DOUBLE,

 IN `freeStockAvailable` DOUBLE,
IN  uid  int,
IN  token varchar(30),
IN UpdatepermissionID int,
OUT status int 
 

 )
    DETERMINISTIC
BEGIN 


    call purpleaid.sp_authorization(uid,  token, UpdatepermissionID ,  @auth_status);


 set status= @auth_status;

 if @auth_status = 2 then 
 
					UPDATE stockactive

			

					SET 

                    ID = stockActiveID,

					PBAID = grProductBatchActiveId,  

					QtyAvailable = stockAvailable,

					FreeAvailable = freeStockAvailable

					

					WHERE ID = stockActiveID;

       end if;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `updateStockAuditProduct` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `updateStockAuditProduct`(

IN SAID double,
IN ProductID int ,
IN ProductBatchID int ,
IN SaBatchAuditQty double ,
IN SaBatchMismatchQty double ,
IN SaProductAuditQty double ,
IN SaProductMismatchQty double ,
IN isProductBatchSelected int ,
IN Sremark varchar(45),
IN SauditBy varchar(30),
IN uid  int,
IN  token  varchar(30),
IN UpdatepermissionID int,
OUT status  int,
out status1 int

)
BEGIN

if ProductBatchID > 0 then 

	call purpleaid.sp_authorization(uid,  token, UpdatepermissionID , @auth_status);

	set status= @auth_status;

		if @auth_status = 2 then
        
			update stockauditproduct 
			set
			
				AuditQuantity = SaBatchAuditQty,
                MissMatchQuantity = SaBatchMismatchQty ,
                Remark = Sremark,
                AuditBy = SauditBy ,
                isProductBatchSelected = isProductBatchSelected
                where AuditID = SAID and PID = ProductID and PBID = ProductBatchID;
                
                set status1 = 1;
		end if;
else

	call purpleaid.sp_authorization(uid,  token, UpdatepermissionID , @auth_status);

	set status= @auth_status;

	if @auth_status = 2 then
        
        update stockauditproduct 
			set
			
				AuditQuantity = SaProductAuditQty,
                MissMatchQuantity = SaProductMismatchQty,
                Remark = Sremark,
                AuditBy = SauditBy ,
                isProductBatchSelected =isProductBatchSelected
                where AuditID = SAID and PID = ProductID and PBID = ProductBatchID;
                
                set status1 = 1;
	end if;
end if;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `updateSupplierLockSmith` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `updateSupplierLockSmith`(IN `recid` DOUBLE, 
IN `supplierActiveFlag` INT(11),
 IN  uid  int,
IN  token varchar(30),
IN UpdatepermissionID int,
OUT status int 
 )
    DETERMINISTIC
BEGIN 

  call purpleaid.sp_authorization(uid,  token, UpdatepermissionID ,  @auth_status);


 set status= @auth_status;

 if @auth_status = 2 then 

    UPDATE supplier

    SET    

           

             flgActive = supplierActiveFlag 

   			 WHERE   ID  = recid  ;

	end if;

	



END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `updateSystemVariable` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `updateSystemVariable`(
 in systemID double , 
in systemValue varchar(45),
IN userid int,
IN  token varchar(30),
in UpdatePermissionID int,
OUT status int 
-- out status1 int
)
BEGIN

call purpleaid.sp_authorization(userid,  token, UpdatePermissionID , @auth_status);

    set status= @auth_status;

	if @auth_status = 2 then 


		if exists(select purpleaidsettings.ID from purpleaidsettings) then 

		update purpleaidsettings
		 set Value = systemValue where ID = systemID;
		end if;

end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `UpdateUPforAdvanceSetting` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `UpdateUPforAdvanceSetting`(

IN pid int,
IN userid int,
IN isdeleted int,
IN  uid  int,
IN  token varchar(30),
IN InsertpermissionID int,
OUT status int

)
BEGIN

call purpleaid.sp_authorization(uid,  token, InsertpermissionID , @auth_status);

    set status= @auth_status;

	if @auth_status = 2 then 


	 if isdeleted = 1 then -- insert
     
     
     delete from userpermission where  permissionID = pid and userID = userid;
     
    else
    
    INSERT INTO userpermission
    
    (ID, userID, userRoleID, permissionID, createdOn, ModifiedOn, CreatedBy)
    
    values(0, userid, NULL, pid, now(), now() , uid);
    
     
     
     end if;
     
     end if;
     


END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `UpdateUPforSystemPermission` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `UpdateUPforSystemPermission`(

IN pid double,
in contactid int,
in isDeleted int,
 IN  uid  int,
 IN  token varchar(30),
 IN InsertpermissionID int,
 OUT status int 
)
BEGIN

call purpleaid.sp_authorization(uid,  token, InsertpermissionID , @auth_status);

    set status= @auth_status;

	if @auth_status = 2 then 
    
    if isDeleted = 1 then
    
       delete from userpermission where userID = contactid and permissionID = pid ;
    
    end if;
    
    if isDeleted = 0 then 
    
    insert into userpermission
    
    (
		ID,
        userID,
        PermissionID
    
    )
    values(
    0,
    contactid,
    pid
    
    );
    
    
    end if;
    
    
    end if;



END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `userIDList` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `userIDList`(IN  uid  int,
 IN  token varchar(30),
 IN InsertpermissionID int,
 OUT status int)
BEGIN

call purpleaid.sp_authorization(uid,  token, InsertpermissionID , @auth_status);

    set status= @auth_status;

 if @auth_status = 2 then
    
     select userName from contact where deleted = 0;
    
     end if;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `userLogin` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `userLogin`(
IN userName varchar(50),
IN userPassword varchar(50),
out status int,
out managerUserStatus int
)
BEGIN

declare count int;
declare noOfUser int;
declare seesiontime int;
set managerUserStatus = 0;
set status = 0;

select contact.ID , contact.userName , contact.userPassward
from contact where contact.userName = userName and contact.userPassward = userPassword ;

if found_rows() = 0 then 

		set status =2;

else
	select NoOfUsers into count from owner ;

	select value into seesiontime from purpleaidsettings where Name ='sessionTime';

	select if(count(userID)< count , 1 , 0) as allowuser into noOfUser from activeusers
	where ModifiedOn >= now() - INTERVAL seesiontime MINUTE;
    
    if noOfUser = 1 then
		set status =1;
		select contact.ID , contact.userName , contact.userPassward
		from contact where contact.userName = userName and contact.userPassward = userPassword ;
	else
		set status =0;
		if exists (select contact.ID from contact
			left join userpermission on userpermission.userID = contact.ID
			left join permission on permission.ID = userpermission.permissionID
			where contact.userName = userName and contact.userPassward = userPassword and permission.ID = 92) then


			set managerUserStatus = 1;

			select activeusers.ID as ID, contact.userName as userName , activeusers.IP , concat(contact.FirstName , ' ', contact.LastName) as contactname, 
			DATE_FORMAT(activeusers.createdOn, '%d %b %Y %h:%i %p') as loginTime ,
			DATE_FORMAT(activeusers.ModifiedOn, '%d %b %Y %h:%i %p') as lastActivityTime ,
			time_format(timediff(activeusers.ModifiedOn,activeusers.createdOn) ,'%H : %i : %s' ) as activityTime , NULL as NoOfUsers, NULL as flgSystemLock
			from activeusers left join contact on contact.ID = activeusers.userID


			union all

			 select 
			NULL as ID, NULL as userName , NULL as IP ,NULL as contactname, 
			NULL as loginTime ,
			NULL as lastActivityTime ,
			NULL as activityTime ,
			 
			 NoOfUsers , flgSystemLock from owner;
		end if;
    
    end if;
    end if;
    

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `userNameList` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `userNameList`(IN  uid  int,
 IN  token varchar(30),
 IN InsertpermissionID int,
 OUT status int)
BEGIN
call purpleaid.sp_authorization(uid,  token, InsertpermissionID , @auth_status);

    set status= @auth_status;

 if @auth_status = 2 then
    
     select ifnull(concat(contact.FirstName , ' ' , contact.LastName ) ,'')as userName , contact.ID as contactID from contact where deleted = 0;
    
    end if;
    
    
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Final view structure for view `addresssummery`
--

/*!50001 DROP VIEW IF EXISTS `addresssummery`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `addresssummery` AS select `contactdetails`.`ID` AS `ID`,concat(ifnull(`contactdetails`.`detail1`,''),'  ',ifnull(`contactdetails`.`detail2`,''),'  ',ifnull(`contactdetails`.`detail3`,''),'  ',ifnull(`contactdetails`.`detail4`,''),'  ',ifnull(`contactdetails`.`detail5`,''),'  ',ifnull(`contactdetails`.`detail6`,'')) AS `summery` from (`contactdetails` left join `entitydetails` on((`contactdetails`.`EDID` = `entitydetails`.`ID`))) where (`entitydetails`.`ID` in (13,14,15)) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `view_batch_stock`
--

/*!50001 DROP VIEW IF EXISTS `view_batch_stock`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `view_batch_stock` AS select `stockactive`.`ID` AS `SAID`,`stockactive`.`PID` AS `productID`,`stockactive`.`PBAID` AS `batchID`,ifnull(sum(`stockactive`.`QtyAvailable`),0) AS `QtyAvailableTotal`,ifnull(sum(`stockactive`.`FreeAvailable`),0) AS `FreeAvailableTotal` from `stockactive` group by `stockactive`.`PID`,`stockactive`.`PBAID` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `view_controlpaneldefaultrole`
--

/*!50001 DROP VIEW IF EXISTS `view_controlpaneldefaultrole`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `view_controlpaneldefaultrole` AS select `entitydetails`.`Description` AS `ContactType`,group_concat(`securityrolemaster`.`Role` separator ', ') AS `DefaultRole`,`contacttyperolemap`.`ContactTypeID` AS `ContactTypeID`,group_concat(`contacttyperolemap`.`RoleID` separator ', ') AS `RoleID` from ((`securityrolemaster` join `contacttyperolemap` on((`securityrolemaster`.`ID` = `contacttyperolemap`.`RoleID`))) join `entitydetails` on((`entitydetails`.`ID` = `contacttyperolemap`.`ContactTypeID`))) where (`entitydetails`.`TypeID` = 1) group by `contacttyperolemap`.`ContactTypeID` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `view_pendingorders`
--

/*!50001 DROP VIEW IF EXISTS `view_pendingorders`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `view_pendingorders` AS select `purchaseproducts`.`PID` AS `PID`,sum(`purchaseproducts`.`Quantity`) AS `purchaseQtyAvlTotal`,sum(`purchaseproducts`.`Scheme`) AS `purchaseFreeAvlTotal` from (`purchaseproducts` left join `purchaseorder` on((`purchaseproducts`.`CompanyOrderID` = `purchaseorder`.`ID`))) where ((`purchaseproducts`.`flgReceived` = '0') and (`purchaseorder`.`status` = 1)) group by `purchaseproducts`.`PID` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `view_poproduct_received`
--

/*!50001 DROP VIEW IF EXISTS `view_poproduct_received`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `view_poproduct_received` AS select `sipo`.`POID` AS `POID`,`sipo`.`PID` AS `PID`,`sipo`.`SIID` AS `SIID`,sum(`sipo`.`Quantity`) AS `sum` from `stockinwardpolink` `sipo` group by `sipo`.`POID`,`sipo`.`PID` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `view_product_contents`
--

/*!50001 DROP VIEW IF EXISTS `view_product_contents`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `view_product_contents` AS select `product`.`ID` AS `PID`,`product`.`Name` AS `Name`,group_concat(`content`.`Name` separator ', ') AS `contentName` from ((`productcontents` join `content` on((`content`.`ID` = `productcontents`.`contentID`))) join `product` on((`product`.`ID` = `productcontents`.`productID`))) group by `product`.`ID` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `view_product_contents_types`
--

/*!50001 DROP VIEW IF EXISTS `view_product_contents_types`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `view_product_contents_types` AS select `content`.`ID` AS `ContentID`,`content`.`Name` AS `contentName`,group_concat(`contenttypemaster`.`Description` separator ', ') AS `contenttypeMasterName` from ((`contenttype` join `content` on((`contenttype`.`contentID` = `content`.`ID`))) join `contenttypemaster` on((`contenttypemaster`.`ID` = `contenttype`.`contentTypeID`))) group by `content`.`ID` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `view_purchase_history`
--

/*!50001 DROP VIEW IF EXISTS `view_purchase_history`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `view_purchase_history` AS select `po`.`ID` AS `POID`,`p`.`ID` AS `PID`,`p`.`Name` AS `productName`,`po`.`OrderDate` AS `poDate`,`po`.`SID` AS `supplierId`,`pp`.`Quantity` AS `quantity`,`pp`.`Scheme` AS `free`,`pb`.`MRP` AS `MRP`,`pb`.`purchaseRate` AS `purchaseRate`,`pb`.`tradeDiscount` AS `tradeDiscount`,`pb`.`tradeDiscountAmt` AS `tradeDiscountAmt`,`pb`.`specialDiscount` AS `specialDiscount`,`pb`.`specialDiscountAmt` AS `specialDiscountAmt`,`gr`.`ID` AS `GRID`,`gr`.`goodsReceiptDate` AS `grDate` from (((((`purchaseorder` `po` join `purchaseproducts` `pp` on((`pp`.`CompanyOrderID` = `po`.`ID`))) left join `stockinward` `si` on((`pp`.`PID` = `si`.`PID`))) left join `productbatch` `pb` on((`si`.`PBID` = `pb`.`ID`))) left join `goodsreceived` `gr` on((`gr`.`ID` = `pb`.`grID`))) left join `product` `p` on((`p`.`ID` = `pp`.`PID`))) order by `gr`.`goodsReceiptDate` desc limit 5 */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `view_rolelist`
--

/*!50001 DROP VIEW IF EXISTS `view_rolelist`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `view_rolelist` AS select `securityrolemaster`.`Role` AS `Role`,`securityrolemaster`.`ID` AS `roleID`,`userpermission`.`userID` AS `userID`,`permission`.`ID` AS `permissionID`,group_concat(`securityrolemaster`.`Role` separator ' , ') AS `RoleDescription` from ((`userpermission` left join `securityrolemaster` on((`userpermission`.`userRoleID` = `securityrolemaster`.`ID`))) left join `permission` on((`permission`.`ID` = `userpermission`.`permissionID`))) group by `permission`.`ID` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `view_stock`
--

/*!50001 DROP VIEW IF EXISTS `view_stock`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `view_stock` AS select `stockactive`.`PID` AS `PID`,`stockactive`.`storage` AS `storageID`,`stockactive`.`receipttype` AS `receiptTypeID`,ifnull(sum(`stockactive`.`QtyAvailable`),0) AS `QtyAvailableTotal`,ifnull(sum(`stockactive`.`FreeAvailable`),0) AS `FreeAvailableTotal` from `stockactive` group by `stockactive`.`PID` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2015-10-31 17:21:35
