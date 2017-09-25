-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Sep 25, 2017 at 08:20 PM
-- Server version: 10.1.19-MariaDB
-- PHP Version: 7.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `scoala_de_iarna`
--

-- --------------------------------------------------------

--
-- Table structure for table `buttons_navbar_logged`
--

CREATE TABLE `buttons_navbar_logged` (
  `id` int(11) NOT NULL,
  `name` varchar(32) NOT NULL,
  `value_en` varchar(32) NOT NULL,
  `value_ro` varchar(32) NOT NULL,
  `value_hu` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `buttons_navbar_logged`
--

INSERT INTO `buttons_navbar_logged` (`id`, `name`, `value_en`, `value_ro`, `value_hu`) VALUES
(1, '/create/category', 'Create Category', 'HOME_RO', 'HOME_HU');

-- --------------------------------------------------------

--
-- Table structure for table `migration`
--

CREATE TABLE `migration` (
  `version` varchar(180) NOT NULL,
  `apply_time` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `migration`
--

INSERT INTO `migration` (`version`, `apply_time`) VALUES
('m000000_000000_base', 1504514478);

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `name` varchar(64) NOT NULL,
  `body` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `category_id`, `name`, `body`) VALUES
(1, 1, 'Lorem Ipsum Category 1', 'Lorem ipsum Category 1\r\nLorem ipsum Category 1\r\nLorem ipsum Category 1\r\nLorem ipsum Category 1\r\nLorem ipsum Category 1\r\nLorem ipsum Category 1\r\nLorem ipsum Category 1'),
(2, 2, 'Lorem ipsum Category 2', 'Lorem ipsum Category 2\r\nLorem ipsum Category 2\r\nLorem ipsum Category 2\r\nLorem ipsum Category 2\r\nLorem ipsum Category 2\r\nLorem ipsum Category 2\r\nLorem ipsum Category 2\r\nLorem ipsum Category 2\r\nLorem ipsum Category 2\r\nLorem ipsum Category 2\r\nLorem ipsum Category 2');

-- --------------------------------------------------------

--
-- Table structure for table `posts_categories`
--

CREATE TABLE `posts_categories` (
  `id` int(11) NOT NULL,
  `name` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `posts_categories`
--

INSERT INTO `posts_categories` (`id`, `name`) VALUES
(2, 'Canguri'),
(1, 'Poze');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `email` varchar(32) NOT NULL,
  `access_token` varchar(256) NOT NULL,
  `password` varchar(256) NOT NULL,
  `is_logged` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `email`, `access_token`, `password`, `is_logged`) VALUES
(10, 'adminadmin@admin.com', 'cd9220cb28e58511ce8568da7be1e8c820bef885570b1a31091e4f12d7e29b45', 'ae0385755959d6e53f97b701cd0ed71a03b9d8391120f936dc14c401734dcb59', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `buttons_navbar_logged`
--
ALTER TABLE `buttons_navbar_logged`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `migration`
--
ALTER TABLE `migration`
  ADD PRIMARY KEY (`version`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `posts_categories`
--
ALTER TABLE `posts_categories`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `buttons_navbar_logged`
--
ALTER TABLE `buttons_navbar_logged`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `posts_categories`
--
ALTER TABLE `posts_categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
