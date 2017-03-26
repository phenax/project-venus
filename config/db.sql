-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Mar 26, 2017 at 07:24 AM
-- Server version: 10.1.14-MariaDB
-- PHP Version: 7.1.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `venus`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL,
  `alias` text NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `alias`, `createdAt`, `updatedAt`) VALUES
(1, 'Movie', 'movie', '2017-03-25 07:28:31', '2017-03-25 07:28:31'),
(2, 'TV Show', 'tv-show', '2017-03-25 07:28:31', '2017-03-25 07:28:31'),
(3, 'Games', 'games', '2017-03-25 07:28:31', '2017-03-25 07:28:31'),
(4, 'Restaurants', 'restaurants', '2017-03-25 07:28:31', '2017-03-25 07:28:31'),
(5, 'Anime', 'anime', '2017-03-25 07:28:31', '2017-03-25 07:28:31');

-- --------------------------------------------------------

--
-- Table structure for table `pages`
--

CREATE TABLE `pages` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL,
  `alias` text NOT NULL,
  `description` text NOT NULL,
  `categoryId` int(11) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `pages`
--

INSERT INTO `pages` (`id`, `name`, `alias`, `description`, `categoryId`, `createdAt`, `updatedAt`) VALUES
(3, 'Naruto', 'naruto', 'One of the best Anime ever.', 5, '2017-03-26 06:53:46', '2017-03-26 06:53:46'),
(4, 'Death Note', 'death-note', 'Top ranking psychological anime.', 5, '2017-03-26 06:53:46', '2017-03-26 06:53:46'),
(5, 'Hunter x Hunter', 'hunter-x-hunter', 'Classic Anime. Must watch', 5, '2017-03-26 06:53:46', '2017-03-26 06:53:46'),
(6, 'Full Metal Alchemist', 'full-metal-alchemist', 'Best Anime. Period.', 5, '2017-03-26 06:53:46', '2017-03-26 06:53:46'),
(7, 'Insta Veg', 'insta-veg', 'Located in Sion', 4, '2017-03-26 06:53:46', '2017-03-26 06:53:46'),
(8, '5 Spice', '5-spice', 'Oshiwara. Famous for Chinese', 4, '2017-03-26 06:53:46', '2017-03-26 06:53:46'),
(9, 'Joey\'s Pizza', 'joeys-pizza', 'Pizza! Period.', 4, '2017-03-26 06:53:46', '2017-03-26 06:53:46'),
(10, 'House Of Cards', 'house-of-cards', 'Top ranking political show based on the US.', 2, '2017-03-26 06:53:46', '2017-03-26 06:53:46'),
(11, 'Shutter Island', 'shutter-island', 'Watch out for plot twists', 1, '2017-03-26 06:53:46', '2017-03-26 06:53:46'),
(12, 'The Godfather', 'the-godfather', 'The man\'s a legend', 1, '2017-03-26 06:53:46', '2017-03-26 06:53:46');

-- --------------------------------------------------------

--
-- Table structure for table `reviews`
--

CREATE TABLE `reviews` (
  `id` int(11) NOT NULL,
  `content` text NOT NULL,
  `rating` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `pageId` int(11) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `reviews`
--

INSERT INTO `reviews` (`id`, `content`, `rating`, `userId`, `pageId`, `createdAt`, `updatedAt`) VALUES
(6, 'Thrilling. Best.', 10, 6, 3, '2017-03-26 07:19:48', '2017-03-26 07:19:48'),
(7, 'Thrilling. Best.', 10, 6, 4, '2017-03-26 07:19:48', '2017-03-26 07:19:48'),
(8, 'Thrilling. Best.', 10, 6, 5, '2017-03-26 07:19:48', '2017-03-26 07:19:48'),
(9, 'Thrilling. Best.', 10, 6, 6, '2017-03-26 07:19:48', '2017-03-26 07:19:48'),
(10, 'Thrilling. Best.', 10, 6, 7, '2017-03-26 07:19:48', '2017-03-26 07:19:48'),
(11, 'Thrilling. Best.', 8, 6, 8, '2017-03-26 07:19:48', '2017-03-26 07:19:48'),
(12, 'Thrilling. Best.', 9, 6, 9, '2017-03-26 07:19:48', '2017-03-26 07:19:48'),
(13, 'Thrilling. Best.', 9, 6, 10, '2017-03-26 07:19:48', '2017-03-26 07:19:48'),
(14, 'Thrilling. Best.', 8, 6, 11, '2017-03-26 07:19:48', '2017-03-26 07:19:48'),
(15, 'Thrilling. Best.', 10, 6, 12, '2017-03-26 07:19:48', '2017-03-26 07:19:48');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL,
  `username` text NOT NULL,
  `email` text NOT NULL,
  `image` text NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `googleId` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `username`, `email`, `image`, `createdAt`, `updatedAt`, `googleId`) VALUES
(6, 'Akshay Nair', '108089047891809102209', 'phenax5@gmail.com', 'https://lh3.googleusercontent.com/-uFtSNhnKH-c/AAAAAAAAAAI/AAAAAAAAANw/cUsVQp_HCSg/photo.jpg?sz=50', '2017-03-25 16:33:10', '2017-03-25 16:33:10', '108089047891809102209');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pages`
--
ALTER TABLE `pages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `pages`
--
ALTER TABLE `pages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- AUTO_INCREMENT for table `reviews`
--
ALTER TABLE `reviews`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
