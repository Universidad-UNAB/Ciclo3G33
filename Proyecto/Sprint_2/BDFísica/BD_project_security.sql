-- Create data base project_security
CREATE DATABASE project_security;

-- Use data base project_security
USE project_security;

-- Create entity personas
CREATE TABLE personas(
	id INT PRIMARY KEY AUTO_INCREMENT,
    tipo_documento VARCHAR (20) NOT NULL,
    documento VARCHAR (12) NOT NULL,
    primer_nombre VARCHAR (25) NOT NULL,
    segundo_nombre VARCHAR (25),
    primer_apellido VARCHAR (25) NOT NULL,
    segundo_apellido VARCHAR (25),
    correo VARCHAR (50) NOT NULL,
    celular VARCHAR (20) NOT NULL,
    estado BOOLEAN NOT NULL DEFAULT 1
);

-- Create entity roles
CREATE TABLE roles(
	id INT PRIMARY KEY AUTO_INCREMENT,   
    nombre VARCHAR (50) NOT NULL,
    estado BOOLEAN NOT NULL DEFAULT 1
);

-- Create entity usuarios
CREATE TABLE usuarios(
	id INT PRIMARY KEY AUTO_INCREMENT,
    user_name VARCHAR (30) NOT NULL,
    user_password VARCHAR (100) NOT NULL,
    estado BOOLEAN NOT NULL DEFAULT 1,
    persona_id INT UNIQUE,
    rol_id INT,
    CONSTRAINT fk_persona_id_usuario_persona FOREIGN KEY (persona_id) REFERENCES personas(id),
    CONSTRAINT fk_rol_id_usuario_rol FOREIGN KEY (rol_id) REFERENCES roles(id)
);

-- Create entity vistas
CREATE TABLE vistas(
	id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR (100) NOT NULL,
    ruta VARCHAR (100) NOT NULL,
    estado BOOLEAN NOT NULL DEFAULT 1    
);

-- Create entity vistas_roles
CREATE TABLE vistas_roles(
	rol_id INT,
    vista_id INT,
    CONSTRAINT fk_rol_id_vista_rol_rol FOREIGN KEY (rol_id) REFERENCES roles(id),
    CONSTRAINT fk_vista_id_vista_rol FOREIGN KEY (vista_id) REFERENCES vistas(id)
);