-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 10-12-2021 a las 16:24:28
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 8.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `scrummer_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `function`
--

CREATE TABLE `function` (
  `ID_FUNCTION` int(11) NOT NULL,
  `ID_STORY` int(255) NOT NULL,
  `step` varchar(25) NOT NULL,
  `title` varchar(50) NOT NULL,
  `description` varchar(255) NOT NULL,
  `assignedTeamMate` varchar(255) NOT NULL,
  `ID_PROYECT` int(255) NOT NULL,
  `createDate` datetime(6) NOT NULL,
  `dueDate` datetime(6) NOT NULL,
  `listPosition` int(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `meeting`
--

CREATE TABLE `meeting` (
  `ID_MEETING` int(11) NOT NULL,
  `title` varchar(50) NOT NULL,
  `description` varchar(255) NOT NULL,
  `createDate` datetime(6) NOT NULL,
  `dueDate` datetime NOT NULL,
  `ID_PROYECT` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proyect`
--

CREATE TABLE `proyect` (
  `ID_PROYECT` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `createDate` datetime(6) NOT NULL,
  `host` int(255) NOT NULL,
  `teamMate` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `retrospective`
--

CREATE TABLE `retrospective` (
  `ID_RETROSPECTIVE` int(11) NOT NULL,
  `title` varchar(50) NOT NULL,
  `description` varchar(255) NOT NULL,
  `calification` varchar(20) NOT NULL,
  `createDate` datetime(6) NOT NULL,
  `ID_PROYECT` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `story`
--

CREATE TABLE `story` (
  `ID_STORY` int(11) NOT NULL,
  `title` varchar(50) NOT NULL,
  `description` varchar(255) NOT NULL,
  `ID_PROYECT` int(255) NOT NULL,
  `createDate` datetime(6) NOT NULL,
  `listPosition` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE `user` (
  `ID_USER` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `profileImg` varchar(255) NOT NULL,
  `ID_AUTOGEN` varchar(255) NOT NULL,
  `registerDate` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `function`
--
ALTER TABLE `function`
  ADD PRIMARY KEY (`ID_FUNCTION`);

--
-- Indices de la tabla `meeting`
--
ALTER TABLE `meeting`
  ADD PRIMARY KEY (`ID_MEETING`);

--
-- Indices de la tabla `proyect`
--
ALTER TABLE `proyect`
  ADD PRIMARY KEY (`ID_PROYECT`);

--
-- Indices de la tabla `retrospective`
--
ALTER TABLE `retrospective`
  ADD PRIMARY KEY (`ID_RETROSPECTIVE`);

--
-- Indices de la tabla `story`
--
ALTER TABLE `story`
  ADD PRIMARY KEY (`ID_STORY`);

--
-- Indices de la tabla `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`ID_USER`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `function`
--
ALTER TABLE `function`
  MODIFY `ID_FUNCTION` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `meeting`
--
ALTER TABLE `meeting`
  MODIFY `ID_MEETING` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `proyect`
--
ALTER TABLE `proyect`
  MODIFY `ID_PROYECT` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `retrospective`
--
ALTER TABLE `retrospective`
  MODIFY `ID_RETROSPECTIVE` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `story`
--
ALTER TABLE `story`
  MODIFY `ID_STORY` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `user`
--
ALTER TABLE `user`
  MODIFY `ID_USER` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
