-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Feb 06, 2024 at 08:18 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `corestring`
--

-- --------------------------------------------------------

--
-- Table structure for table `blog_posts`
--

CREATE TABLE `blog_posts` (
  `post_id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` text DEFAULT NULL,
  `upload_date` timestamp NOT NULL DEFAULT current_timestamp(),
  `blogimage` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `blog_posts`
--

INSERT INTO `blog_posts` (`post_id`, `title`, `content`, `upload_date`, `blogimage`) VALUES
(37, 'This is a blog page with image', '<p>This is image change</p>', '2024-02-04 16:12:28', ''),
(38, 'qwertt', '<p>qeweqeqwe</p>', '2024-02-04 16:17:20', 'uploads\\fff273e100d09650f66f32be17f09acf'),
(39, 'qwertt', '<p>qeweqeqwe</p>', '2024-02-04 16:17:21', 'uploads\\b53f4d8269604ee968b9f79cc5d8e285'),
(40, 'This is a image blog', '<p>this is image blog</p>', '2024-02-04 16:20:45', 'uploads\\Screenshot 2024-01-16 180646.png'),
(41, 'qwertyuioplkjhgfdsazxcvbnm', '<p>AWESDFYGHIJKL;\'</p>', '2024-02-04 16:29:18', 'uploads\\SUMIT COMPNEYB LOGO.jpg'),
(42, 'This is aryan blog', '<p>lorem50</p><p>sfdghhklj;\'</p><p>\'asdsdsasd</p>', '2024-02-05 16:06:54', ''),
(43, 'dasda', '<p>dasdad</p>', '2024-02-05 18:07:27', 'uploads 14723672_job297-ploy-07a-purple-01 (1).jpg'),
(44, 'dadadssd', '<p>dasdasd</p>', '2024-02-05 18:19:23', 'uploads\\14723672_job297-ploy-07a-purple-01 (1).jpg'),
(45, 'qqq', '<p>qqqqq</p>', '2024-02-05 18:19:56', ''),
(46, 'sddasd', '<p>asdasd</p>', '2024-02-05 18:36:21', ''),
(47, '111', '<p>1221221</p>', '2024-02-05 18:38:31', 'uploads\\Black_And_Beige__Minimalist_Aesthetic_Modern_Simple_Typography_Salt_Logo__1_-removebg-preview.png'),
(48, 'Hello', '<p>sdfsdfsdfs</p>', '2024-02-06 05:16:49', 'uploads\\14723672_job297-ploy-07a-purple-01.jpg'),
(49, 'This is blog tittle', '<p>THis is contetnt of BLog </p>', '2024-02-06 06:20:11', 'uploads\\14723672_job297-ploy-07a-purple-01 (1).jpg'),
(50, 'Hey This is a blog post', '<p>This is the content of blog post </p>', '2024-02-06 06:29:42', 'uploads\\Black And Beige  Minimalist Aesthetic Modern Simple Typography Salt Logo (2).png');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `email`, `password`) VALUES
(4, 'Admin', 'Admin@g.com', 'Admin@123');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `blog_posts`
--
ALTER TABLE `blog_posts`
  ADD PRIMARY KEY (`post_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `blog_posts`
--
ALTER TABLE `blog_posts`
  MODIFY `post_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
