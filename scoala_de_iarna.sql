-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Nov 01, 2017 at 08:49 PM
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
  `value` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `buttons_navbar_logged`
--

INSERT INTO `buttons_navbar_logged` (`id`, `name`, `value`) VALUES
(1, '/create/category', 'Create Category'),
(2, '/create/post', 'Create Post'),
(3, '/view/categories', 'Categories'),
(4, '/view/posts', 'Posts'),
(5, '/view/workshops', 'Workshops'),
(6, '/create/workshop', 'Create Workshops'),
(7, '/view/submissions', 'View Submissions'),
(8, '/create/contributor', 'Create Contributors'),
(9, '/view/contributors', 'View Contributors'),
(10, '/view/sponsors', 'View Sponsors');

-- --------------------------------------------------------

--
-- Table structure for table `contributors`
--

CREATE TABLE `contributors` (
  `id` int(11) NOT NULL,
  `name` varchar(128) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `contributors`
--

INSERT INTO `contributors` (`id`, `name`) VALUES
(1, 'One'),
(2, 'Two'),
(3, 'Lorem Ipsum Dolor Sit Amet\r\n'),
(4, 'dfss'),
(6, 'Satan'),
(14, 'Molfenstein');

-- --------------------------------------------------------

--
-- Table structure for table `critical_security_service`
--

CREATE TABLE `critical_security_service` (
  `id` int(11) NOT NULL,
  `critical_password` varchar(128) NOT NULL,
  `critical_username` varchar(128) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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
  `category_name` varchar(32) NOT NULL,
  `name` varchar(64) NOT NULL,
  `body` text NOT NULL,
  `image` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `category_id`, `category_name`, `name`, `body`, `image`) VALUES
(11, 4, 'DEUS VULT', 'asdfads', 'FJKPADSFASFSFALFADSK;OFLJKLSFADSK;LFJKPADSFASFSFALFADSK;OFLJKLSFADSK;LFJKPADSFASFSFALFADSK;OFLJKLSFADSK;LFJKPADSFASFSFALFADSK;OFLJKLSFADSK;LFJKPADSFASFSFALFADSK;OFLJKLSFADSK;L', ''),
(12, 5, 'DEUS VULT FOR LEONHART', 'dsfas', 'adsfas', '');

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
(4, 'DEUS VULT'),
(5, 'DEUS VULT FOR LEONHART'),
(6, 'FUCK ME IN THE ASS');

-- --------------------------------------------------------

--
-- Table structure for table `signup_form`
--

CREATE TABLE `signup_form` (
  `id` int(11) NOT NULL,
  `name` varchar(128) NOT NULL,
  `email` varchar(64) NOT NULL,
  `city` varchar(64) NOT NULL,
  `region` varchar(64) NOT NULL,
  `workshop` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `signup_form`
--

INSERT INTO `signup_form` (`id`, `name`, `email`, `city`, `region`, `workshop`) VALUES
(29, 'dsf', 'fff@adsf', 'adsf', 'asdf', 'Fotografie'),
(31, 'dsfsd', '32er3r@adsf.com', 'dsaa', 'dfsa', 'Pantomima'),
(32, 'Lucifer Morningstar', 'Lucifer@morningStar.hell', 'Silver City', 'Heaven', 'Filmografie'),
(33, 'adsf', '32e@af.com', 'adsf', 'adsf', 'Fotografie');

-- --------------------------------------------------------

--
-- Table structure for table `sponsors`
--

CREATE TABLE `sponsors` (
  `id` int(11) NOT NULL,
  `name` varchar(128) NOT NULL,
  `image` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sponsors`
--

INSERT INTO `sponsors` (`id`, `name`, `image`) VALUES
(1, 'fdsf', 'uploads/pic01.jpg');

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
(10, 'adminadmin@admin.com', 'cd9220cb28e58511ce8568da7be1e8c820bef885570b1a31091e4f12d7e29b45', 'ae0385755959d6e53f97b701cd0ed71a03b9d8391120f936dc14c401734dcb59', 0);

-- --------------------------------------------------------

--
-- Table structure for table `workshops`
--

CREATE TABLE `workshops` (
  `id` int(11) NOT NULL,
  `name` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `workshops`
--

INSERT INTO `workshops` (`id`, `name`) VALUES
(1, 'Pantomima'),
(4, 'Satanism');

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
-- Indexes for table `contributors`
--
ALTER TABLE `contributors`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `critical_security_service`
--
ALTER TABLE `critical_security_service`
  ADD PRIMARY KEY (`id`);

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
-- Indexes for table `signup_form`
--
ALTER TABLE `signup_form`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `sponsors`
--
ALTER TABLE `sponsors`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `workshops`
--
ALTER TABLE `workshops`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `buttons_navbar_logged`
--
ALTER TABLE `buttons_navbar_logged`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT for table `contributors`
--
ALTER TABLE `contributors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
--
-- AUTO_INCREMENT for table `critical_security_service`
--
ALTER TABLE `critical_security_service`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- AUTO_INCREMENT for table `posts_categories`
--
ALTER TABLE `posts_categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `signup_form`
--
ALTER TABLE `signup_form`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;
--
-- AUTO_INCREMENT for table `sponsors`
--
ALTER TABLE `sponsors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT for table `workshops`
--
ALTER TABLE `workshops`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
