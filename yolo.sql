-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 14, 2021 at 02:37 AM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 7.3.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `yolo`
--

-- --------------------------------------------------------

--
-- Table structure for table `courses`
--

CREATE TABLE `courses` (
  `course_id` int(11) NOT NULL,
  `uid` int(21) NOT NULL,
  `course_name` varchar(255) NOT NULL,
  `course_student` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `price` int(22) NOT NULL,
  `description` longtext NOT NULL,
  `video` varchar(255) NOT NULL DEFAULT '''./video/coke.mp4'''
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `courses`
--

INSERT INTO `courses` (`course_id`, `uid`, `course_name`, `course_student`, `slug`, `price`, `description`, `video`) VALUES
(18, 880, 'heaven', '', 'heaven', 1234567122, 'the selecao star was frustrated by the physical play of the visitors in the opening exchanges, with challenges leaving him on the ground on several occasions.neymar went on to record an assist in the triumph that saw brazil continue their unbeaten run in conmebol qualifying. neymar came face-to-face with tobar in the ninth minute and appeared to make contact with the official. the below video is available for u.s. viewers.he was not booked for the ninth-minute incident with tobar but later picked up a yellow card for dissent.', 'video/coke.mp4'),
(19, 0, 'kuber', '', 'kuber', 9876500, 'neymar came face-to-face with tobar in the ninth minute and appeared to make contact with the official. the below video is available for u.s. viewers.he was not booked for the ninth-minute incident with to bar but later picked up a yellow card for dissent', 'video/coke.mp4'),
(20, 0, 'golang', '', 'golang', 989898, 'containers\nalthough it’s not required, you can wrap a navbar in a .container to center it on a page. or you can add a container inside the .navbar to only center the contents of a fixed or static top.containers\nalthough it’s not required, you can wrap a navbar in a .container to center it on a page. or you can add a container inside the .navbar to only center the contents of a fixed or static top', '\'./video/coke.mp4\''),
(21, 0, 'java23332', '', 'java23332', 2147483647, 'when making any changes to the sass variables or maps, you’ll need to save your changes and recompile. doing so will output a brand new set of predefined grid classes for column widths, offsets, and ordering. responsive visibility utilities will also be updated to use the custom breakpoints. make sure to set grid values in px (not rem, em, or %).when making any changes to the sass variables or maps, you’ll need to save your changes and recompile. doing so will output a brand new set of predefined grid classes for column widths, offsets, and ordering. responsive visibility utilities will also be updated to use the custom breakpoints. make sure to set grid values in px (not rem, em, or %).', '\'./video/coke.mp4\''),
(22, 45, 'bilogy', '', 'bilogy', 909090, 'placement\nuse our position utilities to place navbars in non-static positions. choose from fixed to the top, fixed to the bottom, or stickied to the top (scrolls with the page until it reaches the top, then stays there). fixed navbars use position: fixed, meaning they’re pulled from the normal flow of the dom and may require custom css (e.g., padding-top on the <body>) to prevent overlap with other elements.', '\'./video/coke.mp4\'');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`course_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `courses`
--
ALTER TABLE `courses`
  MODIFY `course_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
