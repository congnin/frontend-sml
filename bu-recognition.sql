-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 01, 2021 at 03:42 AM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 8.0.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bu-recognition`
--

-- --------------------------------------------------------

--
-- Table structure for table `comment`
--

CREATE TABLE `comment` (
  `id` int(11) NOT NULL,
  `commentatorId` int(11) NOT NULL,
  `commentReceiverId` int(11) NOT NULL,
  `commentDate` datetime NOT NULL,
  `content` varchar(512) NOT NULL,
  `projectId` int(11) NOT NULL,
  `isDeleted` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `comment`
--

INSERT INTO `comment` (`id`, `commentatorId`, `commentReceiverId`, `commentDate`, `content`, `projectId`, `isDeleted`) VALUES
(1, 8, 110, '2021-02-02 13:00:23', 'Lorem ipsum dolor sit amet, modo accommodare instructior ea vel, id tota dicit ius. Mea ipsum homero verear eu.', 6, 0),
(2, 110, 4, '2021-02-28 07:51:00', 'test recognition from vunq4 to anhpt6', 1, 0),
(3, 110, 71, '2021-02-28 12:33:48', 'Test', 3, 0);

-- --------------------------------------------------------

--
-- Table structure for table `project`
--

CREATE TABLE `project` (
  `id` int(11) NOT NULL,
  `name` varchar(128) NOT NULL,
  `code` varchar(16) NOT NULL,
  `isDeleted` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `project`
--

INSERT INTO `project` (`id`, `name`, `code`, `isDeleted`) VALUES
(1, 'Smart App', 'SMA', 0),
(2, 'Kiosk', 'KIO', 0),
(3, 'Personal Loan', 'PLN', 0),
(4, 'BizLoan', 'BIZ', 0),
(5, 'Cashflow', 'CAS', 0),
(6, 'Shinhan', 'SHI', 0),
(7, 'Cox Automotive', 'C99', 0);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(256) NOT NULL,
  `firstName` varchar(64) NOT NULL,
  `lastName` varchar(64) NOT NULL,
  `avatar` varchar(255) NOT NULL,
  `projectRole` varchar(128) NOT NULL,
  `joinedAt` datetime NOT NULL DEFAULT '2021-01-01 00:00:00',
  `isFemale` tinyint(4) NOT NULL,
  `isAdmin` tinyint(4) NOT NULL,
  `isDeleted` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `username`, `firstName`, `lastName`, `avatar`, `projectRole`, `joinedAt`, `isFemale`, `isAdmin`, `isDeleted`) VALUES
(1, 'anhbl3', 'Anh', 'Bui Lan', '', '', '0000-00-00 00:00:00', 0, 0, 0),
(2, 'anhlt42', 'Anh', 'Le Tuan', '', '', '0000-00-00 00:00:00', 0, 0, 0),
(3, 'anhnh60', 'Anh', 'Nguyen Hoang', '', '', '0000-00-00 00:00:00', 0, 0, 0),
(4, 'anhpt6', 'Anh', 'Pham Tuan', '', '', '0000-00-00 00:00:00', 0, 0, 0),
(5, 'baolm1', 'Bao', 'Le Minh', '', '', '0000-00-00 00:00:00', 0, 0, 0),
(6, 'baothd1', 'Bao', 'Thai Hoang Duy', '', 'Software Developer', '0000-00-00 00:00:00', 0, 0, 0),
(7, 'binhpt9', 'Binh', 'Pham Thanh', '', 'Software Project Manager', '0000-00-00 00:00:00', 0, 0, 0),
(8, 'congnc7', 'Cong', 'Nguyen Chi', '', 'Software Developer', '0000-00-00 00:00:00', 0, 0, 0),
(9, 'cuongmh', 'Cuong', 'Mai Hoang', '', '', '0000-00-00 00:00:00', 0, 0, 0),
(10, 'cuongtq7', 'Cuong', 'Truong Quoc', '', '', '0000-00-00 00:00:00', 0, 0, 0),
(11, 'dangnh11', 'Dang', 'Nguyen Hai', '', '', '0000-00-00 00:00:00', 0, 0, 0),
(12, 'danhtpt', 'Danh', 'Tran Phan Thanh', '', '', '0000-00-00 00:00:00', 0, 0, 0),
(13, 'danhtqc', 'Danh', 'Tran Quang Cao', '', '', '0000-00-00 00:00:00', 0, 0, 0),
(14, 'datvm3', 'Dat', 'Vo Minh', '', '', '0000-00-00 00:00:00', 0, 0, 0),
(15, 'dongtv2', 'Dong', 'Thai Van', '', '', '0000-00-00 00:00:00', 0, 0, 0),
(16, 'ducph9', 'Duc', 'Phan Hong', '', '', '0000-00-00 00:00:00', 0, 0, 0),
(17, 'dungha4', 'Dung', 'Ho Anh', '', '', '0000-00-00 00:00:00', 0, 0, 0),
(18, 'dungntt3', 'Dung', 'Nguyen Thi Thanh', '', '', '0000-00-00 00:00:00', 1, 0, 0),
(19, 'dungptk', 'Dung', 'Pham Thi Kim', '', '', '0000-00-00 00:00:00', 1, 0, 0),
(20, 'duongh1', 'Duong', 'Hoang', '', 'Software Project Manager', '0000-00-00 00:00:00', 0, 0, 0),
(21, 'duydd3', 'Duy', 'Duong Duc', '', '', '0000-00-00 00:00:00', 0, 0, 0),
(22, 'duyenntp', 'Duyen', 'Nguyen Tran Phuong', '', '', '0000-00-00 00:00:00', 0, 0, 0),
(23, 'duyht7', 'Duy', 'Huynh Thanh', '', '', '0000-00-00 00:00:00', 0, 0, 0),
(24, 'duylpt1', 'Duy', 'Le Pham Thanh', '', '', '0000-00-00 00:00:00', 0, 0, 0),
(25, 'duylt5', 'Duy', 'Le Thanh', '', '', '0000-00-00 00:00:00', 0, 0, 0),
(26, 'duyltp', 'Duy', 'Lam Tran Phuong', '', 'Software Developer', '0000-00-00 00:00:00', 0, 0, 0),
(27, 'duyph2', 'Duy', 'Phan Hoang', '', '', '0000-00-00 00:00:00', 0, 0, 0),
(28, 'giangnt15', 'Giang', 'Nguyen Thuy', '', '', '0000-00-00 00:00:00', 0, 0, 0),
(29, 'giangttn', 'Giang', 'Tran Thi Ngan', '', '', '0000-00-00 00:00:00', 1, 0, 0),
(30, 'hieuht16', 'Hieu', 'Huynh Trung', '', '', '0000-00-00 00:00:00', 0, 0, 0),
(31, 'hieuht2', 'Hieu', 'Huynh Tan', '', '', '0000-00-00 00:00:00', 0, 0, 0),
(32, 'hieulk1', 'Hieu', 'Lai Khac', '', '', '0000-00-00 00:00:00', 0, 0, 0),
(33, 'hieupv7', 'Hieu', 'Pham Van', '', '', '0000-00-00 00:00:00', 0, 0, 0),
(34, 'hieut5', 'Hieu', 'Tran', '', '', '0000-00-00 00:00:00', 0, 0, 0),
(35, 'hieutc7', 'Hieu', 'Truong Cong', '', '', '0000-00-00 00:00:00', 0, 0, 0),
(36, 'hoanglm15', 'Hoang', 'Lam Minh', '', '', '0000-00-00 00:00:00', 0, 0, 0),
(37, 'hoanglxm', 'Hoang', 'Le Xuan Minh', '', '', '0000-00-00 00:00:00', 0, 0, 0),
(38, 'honptn1', 'Hon', 'Pham Thi Ngoc', '', '', '0000-00-00 00:00:00', 1, 0, 0),
(39, 'hungdq13', 'Hung', 'Duong Quoc', '', 'Quality Control Engineer', '0000-00-00 00:00:00', 0, 0, 0),
(40, 'hungpp1', 'Hung', 'Pham Phi', '', '', '0000-00-00 00:00:00', 0, 0, 0),
(41, 'huylx1', 'Huy', 'Le Xuan', '', '', '0000-00-00 00:00:00', 0, 0, 0),
(42, 'huynd18', 'Huy', 'Nguyen Duc', '', '', '0000-00-00 00:00:00', 0, 0, 0),
(43, 'huyt', 'Huy', 'Truong', '', '', '0000-00-00 00:00:00', 0, 0, 0),
(44, 'huytq10', 'Huy', 'Tran Quang', '', '', '0000-00-00 00:00:00', 0, 0, 0),
(45, 'khoivt1', 'Khoi', 'Vu Tuan', '', '', '0000-00-00 00:00:00', 0, 0, 0),
(46, 'kientnt2', 'Kien', 'Tran Nguyen Trung', '', '', '0000-00-00 00:00:00', 0, 0, 0),
(47, 'lamh1', 'Lam', 'Huynh', '', '', '0000-00-00 00:00:00', 0, 0, 0),
(48, 'linhvth', 'Linh', 'Vo Thi Hoai', '', 'Software Project Manager', '0000-00-00 00:00:00', 1, 0, 0),
(49, 'longnv21', 'Long', 'Nguyen Vu', '', '', '0000-00-00 00:00:00', 0, 0, 0),
(50, 'maxoak', 'Max', 'Kanzi Oude Aarninkhof', '', '', '0000-00-00 00:00:00', 0, 0, 0),
(51, 'mypnn', 'My', 'Pham Nguyen Ngoc', '', '', '0000-00-00 00:00:00', 1, 0, 0),
(52, 'nganptt1', 'Ngan', 'Phan Thi Thanh', '', '', '0000-00-00 00:00:00', 1, 0, 0),
(53, 'nganttt5', 'Ngan', 'Tran Thi Tuyet', '', '', '0000-00-00 00:00:00', 1, 0, 0),
(54, 'nguyendt9', 'Nguyen', 'Duong Thuy', '', '', '0000-00-00 00:00:00', 0, 0, 0),
(55, 'nguyenlc1', 'Nguyen', 'Le Cao', '', '', '0000-00-00 00:00:00', 0, 0, 0),
(56, 'nguyentd8', 'Nguyen', 'Ton Dat', '', '', '0000-00-00 00:00:00', 0, 0, 0),
(57, 'nhadd', 'Nha', 'Dao Duc', '', '', '0000-00-00 00:00:00', 0, 0, 0),
(58, 'nhantc2', 'Nhan', 'Tran Cao', '', '', '0000-00-00 00:00:00', 0, 0, 0),
(59, 'nhatht1', 'Nhat', 'Hoang Thien', '', '', '0000-00-00 00:00:00', 0, 0, 0),
(60, 'nhatnm7', 'Nhat', 'Nguyen Minh', '', '', '0000-00-00 00:00:00', 0, 0, 0),
(61, 'phatkt', 'Phat', 'Kha Tuan', '', '', '0000-00-00 00:00:00', 0, 0, 0),
(62, 'phatpv', 'Phat', 'Phan Vinh', '', '', '0000-00-00 00:00:00', 0, 0, 0),
(63, 'phongna1', 'Phong', 'Nguyen Anh', '', '', '0000-00-00 00:00:00', 0, 0, 0),
(64, 'phongnv10', 'Phong', 'Nguyen Van', '', '', '0000-00-00 00:00:00', 0, 0, 0),
(65, 'phucdv2', 'Phuc', 'Do Vinh', '', '', '0000-00-00 00:00:00', 0, 0, 0),
(66, 'phucvq2', 'Phuc', 'Vo Quang', '', '', '0000-00-00 00:00:00', 0, 0, 0),
(67, 'phucvt5', 'Phuc', 'Vo Trong', '', '', '0000-00-00 00:00:00', 0, 0, 0),
(68, 'phuld', 'Phu', 'Le Dinh', '', '', '0000-00-00 00:00:00', 0, 0, 0),
(69, 'phuta', 'Phu', 'Tran An', '', '', '0000-00-00 00:00:00', 0, 0, 0),
(70, 'phutk', 'Phu', 'Tang Khanh', '', '', '0000-00-00 00:00:00', 0, 0, 0),
(71, 'quanbtl', 'Quan', 'Bach Tran Le', '', 'Software Project Manager', '0000-00-00 00:00:00', 0, 0, 0),
(72, 'quangnh11', 'Quang', 'Nguyen Huu', '', '', '0000-00-00 00:00:00', 0, 0, 0),
(73, 'quangnn12', 'Quang', 'Nguyen Nhat', '', '', '0000-00-00 00:00:00', 0, 0, 0),
(74, 'quangtv12', 'Quang', 'Tran Vuong', '', '', '0000-00-00 00:00:00', 0, 0, 0),
(75, 'quypc', 'Quy', 'Pham Chanh', '', '', '0000-00-00 00:00:00', 0, 0, 0),
(76, 'sangth1', 'Sang', 'Truong Hoang', '', '', '0000-00-00 00:00:00', 0, 0, 0),
(77, 'syht', 'Sy', 'Huynh Tien', '', '', '0000-00-00 00:00:00', 0, 0, 0),
(78, 'tailm2', 'Tai', 'Lu Minh', '', 'Software Developer', '0000-00-00 00:00:00', 0, 0, 0),
(79, 'tanpv4', 'Tan', 'Pham Van', '', '', '0000-00-00 00:00:00', 0, 0, 0),
(80, 'thachnx2', 'Thach', 'Nguyen Xuan', '', '', '0000-00-00 00:00:00', 0, 0, 0),
(81, 'thanglm1', 'Thang', 'Le Minh', '', '', '0000-00-00 00:00:00', 0, 0, 0),
(82, 'thanhbc1', 'Thanh', 'Bui Cong', '', '', '0000-00-00 00:00:00', 0, 0, 0),
(83, 'thanhdc15', 'Thanh', 'Dang Cong', '', '', '0000-00-00 00:00:00', 0, 0, 0),
(84, 'thanhhn5', 'Thanh', 'Huynh Ngoc', '', '', '0000-00-00 00:00:00', 0, 0, 0),
(85, 'thanhnv61', 'Thanh', 'Nguyen Van', '', '', '0000-00-00 00:00:00', 0, 0, 0),
(86, 'thanhpm2', 'Thanh', 'Pham Minh', '', '', '0000-00-00 00:00:00', 0, 0, 0),
(87, 'thanhtd13', 'Thanh', 'Tran Dai', '', '', '0000-00-00 00:00:00', 0, 0, 0),
(88, 'thannv', 'Than', 'Nguyen Van', '', '', '0000-00-00 00:00:00', 0, 0, 0),
(89, 'thaohtn', 'Thao', 'Ha Thi Ngoc', '', 'Software Project Manager', '0000-00-00 00:00:00', 1, 0, 0),
(90, 'thitd2', 'Thi', 'Tran Duc', '', '', '0000-00-00 00:00:00', 0, 0, 0),
(91, 'thongnq2', 'Thong', 'Nguyen Quoc', '', '', '0000-00-00 00:00:00', 0, 0, 0),
(92, 'thovh', 'Tho', 'Vo Hong', '', 'Software Developer', '0000-00-00 00:00:00', 0, 0, 0),
(93, 'tienlx', 'Tien', 'Le Xuan', '', '', '0000-00-00 00:00:00', 0, 0, 0),
(94, 'tinnt17', 'Tin', 'Nguyen Thanh', '', '', '0000-00-00 00:00:00', 0, 0, 0),
(95, 'tinpb', 'Tin', 'Pham Bao', '', '', '0000-00-00 00:00:00', 0, 0, 0),
(96, 'trinm31', 'Tri', 'Nguyen Minh', '', '', '0000-00-00 00:00:00', 0, 0, 0),
(97, 'trunght1', 'Trung', 'Ha Trong', '', '', '0000-00-00 00:00:00', 0, 0, 0),
(98, 'trungl4', 'Trung', 'Le', '', '', '0000-00-00 00:00:00', 0, 0, 0),
(99, 'trungnn9', 'Trung', 'Nguyen Nguyen', '', '', '0000-00-00 00:00:00', 0, 0, 0),
(100, 'truonghn1', 'Truong', 'Huynh Ngoc', '', '', '0000-00-00 00:00:00', 0, 0, 0),
(101, 'tuannha1', 'Tuan', 'Nguyen Huynh Anh', '', '', '0000-00-00 00:00:00', 0, 0, 0),
(102, 'tuanpdc', 'Tuan', 'Phan Doan Chau', '', '', '0000-00-00 00:00:00', 0, 0, 0),
(103, 'tuantq20', 'Tuan', 'Tran Quoc', '', '', '0000-00-00 00:00:00', 0, 0, 0),
(104, 'tuch', 'Tu', 'Chung Hoang', '', '', '0000-00-00 00:00:00', 0, 0, 0),
(105, 'tungnx14', 'Tung', 'Nguyen Xuan', '', '', '0000-00-00 00:00:00', 0, 0, 0),
(106, 'uyendtt1', 'Uyen', 'Dang Thi To', '', '', '0000-00-00 00:00:00', 1, 0, 0),
(107, 'vinhdq9', 'Vinh', 'Diep Quoc', '', '', '0000-00-00 00:00:00', 0, 0, 0),
(108, 'vudt6', 'Vu', 'Duong Thanh', '', '', '0000-00-00 00:00:00', 0, 0, 0),
(109, 'vunh24', 'Vu', 'Nguyen Hoang', '', '', '0000-00-00 00:00:00', 0, 0, 0),
(110, 'vunq4', 'Vu', 'Nguyen Quang', '', 'Software Developer', '0000-00-00 00:00:00', 0, 0, 0),
(111, 'vuongba', 'Vuong', 'Bui Anh', '', '', '0000-00-00 00:00:00', 0, 0, 0),
(112, 'vupa1', 'Vu', 'Phan Anh', '', '', '0000-00-00 00:00:00', 0, 0, 0),
(113, 'vyvtt', 'Vy', 'Van Thi Thuy', '', '', '0000-00-00 00:00:00', 1, 0, 0),
(114, 'xinhht', 'Xinh', 'Ho Thi', '', 'Software Developer', '0000-00-00 00:00:00', 1, 0, 0),
(115, 'xuyennt3', 'Xuyen', 'Nguyen Thi', '', '', '0000-00-00 00:00:00', 1, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `user_project`
--

CREATE TABLE `user_project` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `projectId` int(11) NOT NULL,
  `joinDate` datetime NOT NULL,
  `isActive` tinyint(4) NOT NULL,
  `isDeleted` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user_project`
--

INSERT INTO `user_project` (`id`, `userId`, `projectId`, `joinDate`, `isActive`, `isDeleted`) VALUES
(1, 8, 2, '2020-03-13 00:00:00', 1, 0),
(2, 18, 3, '2020-03-13 00:00:00', 1, 0),
(3, 71, 3, '2020-03-13 00:00:00', 1, 0),
(4, 110, 6, '2020-03-13 00:00:00', 1, 0),
(5, 114, 6, '2020-03-13 00:00:00', 1, 0),
(6, 6, 6, '2020-03-13 00:00:00', 1, 0),
(7, 92, 6, '2020-03-13 00:00:00', 1, 0),
(8, 26, 6, '2020-03-13 00:00:00', 1, 0),
(9, 78, 6, '2020-03-13 00:00:00', 1, 0),
(10, 103, 6, '2020-03-13 00:00:00', 1, 0),
(11, 89, 7, '2020-03-13 00:00:00', 1, 0),
(12, 7, 7, '2020-03-13 00:00:00', 1, 0),
(13, 39, 7, '2020-03-13 00:00:00', 1, 0),
(14, 4, 1, '2020-03-13 00:00:00', 1, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `project`
--
ALTER TABLE `project`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_project`
--
ALTER TABLE `user_project`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `comment`
--
ALTER TABLE `comment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `project`
--
ALTER TABLE `project`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=116;

--
-- AUTO_INCREMENT for table `user_project`
--
ALTER TABLE `user_project`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
