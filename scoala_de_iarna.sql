-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Nov 27, 2017 at 08:10 PM
-- Server version: 10.1.13-MariaDB
-- PHP Version: 7.0.8

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
(7, '/view/submissions', 'View Submissions'),
(8, '/create/contributor', 'Create Contributors'),
(9, '/view/contributors', 'View Contributors');

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
(16, 'Moldovan Andrei'),
(17, 'Deus Vult');

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
-- Table structure for table `news`
--

CREATE TABLE `news` (
  `id` int(11) NOT NULL,
  `title` varchar(128) NOT NULL,
  `body` text NOT NULL,
  `image_url` text NOT NULL,
  `active` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `news`
--

INSERT INTO `news` (`id`, `title`, `body`, `image_url`, `active`) VALUES
(1, 'Lorem Ipsum TEST Dolor', 'LOREM IPSUM TEST DOLOR', 'file_image_type1511712437.jpg', 1),
(3, 'sdafdsa', '<p>para1</p>\r\n<p>para12213</p>', 'file_image_type1511718229.jpg', 1),
(4, 'Hey baoss, I have cansur', 'CANSURRR', 'file_image_type1511782010.jpg', 0);

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
(12, 5, 'DEUS VULT FOR LEONHART', 'dsfas', 'adsfas', ''),
(13, 4, 'DEUS VULT', 'sadf', 'asdf', '');

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
  `phone` varchar(16) NOT NULL,
  `facebook_link` varchar(128) NOT NULL,
  `city` varchar(64) NOT NULL,
  `region` varchar(64) NOT NULL,
  `workshop` varchar(32) NOT NULL,
  `found_out` text CHARACTER SET utf16 COLLATE utf16_romanian_ci NOT NULL,
  `motivation` text NOT NULL,
  `expectations` text NOT NULL,
  `personal_project` text NOT NULL,
  `personal_experience` text NOT NULL,
  `personal_values` text NOT NULL,
  `random_question` text NOT NULL,
  `good_deed` text NOT NULL,
  `future_view` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `signup_form`
--

INSERT INTO `signup_form` (`id`, `name`, `email`, `phone`, `facebook_link`, `city`, `region`, `workshop`, `found_out`, `motivation`, `expectations`, `personal_project`, `personal_experience`, `personal_values`, `random_question`, `good_deed`, `future_view`) VALUES
(41, 'Andrei George Moldovan', 'moldovanandrei8399@gmail.com', 'asdfas', 'adsfas', 'adsf', 'adsfas', 'Pantomima', 'Școală / Facultate', 'adsfads', 'adsfas', 'asdfas', 'asdfa', 'asdfs', 'asdf', 'adsf', 'asdfs'),
(42, 'Andrei George Moldovan', 'moldovanandrei8399@gfffmail.com', 'asdfasfff', 'adsfasffff', 'adsf', 'adsfas', 'Pantomima', 'Școală / Facultate', 'adsfads', 'adsfas', 'asdfas', 'asdfa', 'asdfs', 'asdf', 'adsf', 'asdfs');

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
(1, 'Hail Satan', 'file_image_type1511806607.jpg');

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
(10, 'adminadmin@admin.com', 'cd9220cb28e58511ce8568da7be1e8c820bef885570b1a31091e4f12d7e29b45', 'ae0385755959d6e53f97b701cd0ed71a03b9d8391120f936dc14c401734dcb59', 0),
(11, 'aga2015@aga.ro', 'ea193ec3c3fcce3631d98ce724fc34fa733756460d7cc17726f9e18d2060170f', '79804e184d8d1626cfa4e45f2b98b7567e8fd2fa0b3dd3c881c97cbf80ce8204', 0);

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
-- Indexes for table `migration`
--
ALTER TABLE `migration`
  ADD PRIMARY KEY (`version`);

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

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
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `facebook_link` (`facebook_link`);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT for table `contributors`
--
ALTER TABLE `contributors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
--
-- AUTO_INCREMENT for table `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
--
-- AUTO_INCREMENT for table `posts_categories`
--
ALTER TABLE `posts_categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `signup_form`
--
ALTER TABLE `signup_form`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;
--
-- AUTO_INCREMENT for table `sponsors`
--
ALTER TABLE `sponsors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
--
-- AUTO_INCREMENT for table `workshops`
--
ALTER TABLE `workshops`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
