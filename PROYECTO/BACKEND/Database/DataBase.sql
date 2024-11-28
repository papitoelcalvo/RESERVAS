-- Crear la base de datos y usarla
CREATE DATABASE RESERVA2;
USE RESERVA2;

-- Crear las tablas
CREATE TABLE Roles (
    RoleID INT PRIMARY KEY IDENTITY(1,1),
    RoleName VARCHAR(255)
);

CREATE TABLE Usuarios (
    UserID INT PRIMARY KEY IDENTITY(1,1),
    Username VARCHAR(255),
    Password VARCHAR(255),
    Email VARCHAR(255),
    RoleID INT,
    FOREIGN KEY (RoleID) REFERENCES Roles(RoleID)
);

CREATE TABLE clientes (
    id INT PRIMARY KEY IDENTITY(1,1),
    usuario_id INT,
    nombre VARCHAR(255),
    apellido VARCHAR(255),
    email VARCHAR(255),
    telefono VARCHAR(255),
    direccion VARCHAR(255),
    fecha_nacimiento DATE,
    documento_identidad VARCHAR(255),
    nacionalidad VARCHAR(255),
    FOREIGN KEY (usuario_id) REFERENCES Usuarios(UserID)
);

CREATE TABLE reserva (
    id INT PRIMARY KEY IDENTITY(1,1),
    cliente_id INT,
    tipo VARCHAR(255),
    hora_salida DATETIME,
    hora_llegada DATETIME,
    FOREIGN KEY (cliente_id) REFERENCES clientes(id)
);

CREATE TABLE lugares (
    id INT PRIMARY KEY IDENTITY(1,1),
    lugar VARCHAR(255),
    direccion VARCHAR(255)
);

CREATE TABLE o_pagos (
    id INT PRIMARY KEY IDENTITY(1,1),
    tipo_pago VARCHAR(255)
);

CREATE TABLE a_puerto (
    id INT PRIMARY KEY IDENTITY(1,1),
    nombre VARCHAR(255),
    codigo_iata VARCHAR(255),
    codigo_icao VARCHAR(255),
    direccion VARCHAR(255),
    pais VARCHAR(255)
);

CREATE TABLE s_aereopuerto (
    id INT PRIMARY KEY IDENTITY(1,1),
    servi VARCHAR(255)
);

CREATE TABLE estacionamiento (
    estacionamiento_id INT PRIMARY KEY IDENTITY(1,1),
    cliente_id INT,
    vehiculo_marca VARCHAR(255),
    vehiculo_modelo VARCHAR(255),
    vehiculo_placa VARCHAR(255),
    vehiculo_color VARCHAR(255),
    fecha_entrada DATETIME,
    fecha_salida DATETIME,
    numero_espacio INT,
    metodo_pago INT,
    estado VARCHAR(255),
    FOREIGN KEY (cliente_id) REFERENCES clientes(id),
    FOREIGN KEY (metodo_pago) REFERENCES o_pagos(id)
);

CREATE TABLE salas_vip (
    sala_id INT PRIMARY KEY IDENTITY(1,1),
    cliente_id INT,
    nombre_sala VARCHAR(255),
    fecha_reserva DATETIME,
    metodo_pago INT,
    estado VARCHAR(255),
    FOREIGN KEY (cliente_id) REFERENCES clientes(id),
    FOREIGN KEY (metodo_pago) REFERENCES o_pagos(id)
);

CREATE TABLE transporte (
    transporte_id INT PRIMARY KEY IDENTITY(1,1),
    cliente_id INT,
    tipo_transporte VARCHAR(255),
    fecha_reserva DATETIME,
    fecha_servicio DATETIME,
    origen VARCHAR(255),
    destino VARCHAR(255),
    metodo_pago INT,
    estado VARCHAR(255),
    FOREIGN KEY (cliente_id) REFERENCES clientes(id),
    FOREIGN KEY (metodo_pago) REFERENCES o_pagos(id)
);

CREATE TABLE alojamiento (
    alojamiento_id INT PRIMARY KEY IDENTITY(1,1),
    cliente_id INT,
    hotel_nombre VARCHAR(255),
    fecha_entrada DATETIME,
    fecha_salida DATETIME,
    metodo_pago INT,
    estado VARCHAR(255),
    FOREIGN KEY (cliente_id) REFERENCES clientes(id),
    FOREIGN KEY (metodo_pago) REFERENCES o_pagos(id)
);

CREATE TABLE asistencia_especial (
    asistencia_id INT PRIMARY KEY IDENTITY(1,1),
    cliente_id INT,
    tipo_asistencia VARCHAR(255),
    fecha_solicitud DATETIME,
    estado VARCHAR(255),
    FOREIGN KEY (cliente_id) REFERENCES clientes(id)
);

CREATE TABLE comidas (
    comida_id INT PRIMARY KEY IDENTITY(1,1),
    cliente_id INT,
    restaurante_nombre VARCHAR(255),
    tipo_comida VARCHAR(255),
    fecha_reserva DATETIME,
    metodo_pago INT,
    estado VARCHAR(255),
    FOREIGN KEY (cliente_id) REFERENCES clientes(id),
    FOREIGN KEY (metodo_pago) REFERENCES o_pagos(id)
);

CREATE TABLE compras_dutyfree (
    compra_id INT PRIMARY KEY IDENTITY(1,1),
    cliente_id INT,
    tienda_nombre VARCHAR(255),
    producto VARCHAR(255),
    cantidad INT,
    fecha_compra DATETIME,
    metodo_pago INT,
    estado VARCHAR(255),
    FOREIGN KEY (cliente_id) REFERENCES clientes(id),
    FOREIGN KEY (metodo_pago) REFERENCES o_pagos(id)
);

CREATE TABLE bienestar (
    bienestar_id INT PRIMARY KEY IDENTITY(1,1),
    cliente_id INT,
    tipo_servicio VARCHAR(255),
    fecha_reserva DATETIME,
    metodo_pago INT,
    estado VARCHAR(255),
    FOREIGN KEY (cliente_id) REFERENCES clientes(id),
    FOREIGN KEY (metodo_pago) REFERENCES o_pagos(id)
);

CREATE TABLE servicios_tecnologicos (
    servicio_id INT PRIMARY KEY IDENTITY(1,1),
    cliente_id INT,
    tipo_servicio VARCHAR(255),
    fecha_reserva DATETIME,
    metodo_pago INT,
    estado VARCHAR(255),
    FOREIGN KEY (cliente_id) REFERENCES clientes(id),
    FOREIGN KEY (metodo_pago) REFERENCES o_pagos(id)
);

CREATE TABLE documentacion (
    documentacion_id INT PRIMARY KEY IDENTITY(1,1),
    cliente_id INT,
    tipo_tramite VARCHAR(255),
    fecha_solicitud DATETIME,
    estado VARCHAR(255),
    FOREIGN KEY (cliente_id) REFERENCES clientes(id)
);

CREATE TABLE seguridad_proteccion (
    seguridad_id INT PRIMARY KEY IDENTITY(1,1),
    cliente_id INT,
    tipo_servicio VARCHAR(255),
    fecha_solicitud DATETIME,
    estado VARCHAR(255),
    FOREIGN KEY (cliente_id) REFERENCES clientes(id)
);

CREATE TABLE guarderia (
    guarderia_id INT PRIMARY KEY IDENTITY(1,1),
    cliente_id INT,
    tipo_servicio VARCHAR(255),
    fecha_reserva DATETIME,
    metodo_pago INT,
    estado VARCHAR(255),
    FOREIGN KEY (cliente_id) REFERENCES clientes(id),
    FOREIGN KEY (metodo_pago) REFERENCES o_pagos(id)
);

CREATE TABLE servicios_medicos (
    servicio_medico_id INT PRIMARY KEY IDENTITY(1,1),
    cliente_id INT,
    tipo_servicio VARCHAR(255),
    fecha_reserva DATETIME,
    estado VARCHAR(255),
    FOREIGN KEY (cliente_id) REFERENCES clientes(id)
);

CREATE TABLE servicio_equipaje (
    servicio_equipaje_id INT PRIMARY KEY IDENTITY(1,1),
    cliente_id INT,
    tipo_servicio VARCHAR(255),
    fecha_reserva DATETIME,
    metodo_pago INT,
    estado VARCHAR(255),
    FOREIGN KEY (cliente_id) REFERENCES clientes(id),
    FOREIGN KEY (metodo_pago) REFERENCES o_pagos(id)
);

-- Insertar datos aleatorios
INSERT INTO Roles (RoleName) VALUES 
('Admin'), 
('User'), 
('Guest');

INSERT INTO Usuarios (Username, Password, Email, RoleID) VALUES 
('user1', 'pass1', 'user1@example.com', 1), 
('user2', 'pass2', 'user2@example.com', 2), 
('user3', 'pass3', 'user3@example.com', 3);

INSERT INTO clientes (usuario_id, nombre, apellido, email, telefono, direccion, fecha_nacimiento, documento_identidad, nacionalidad) VALUES 
(1, 'John', 'Doe', 'john.doe@example.com', '555-1234', '123 Elm St', '1980-01-01', 'A1234567', 'USA'),
(2, 'Jane', 'Smith', 'jane.smith@example.com', '555-5678', '456 Oak St', '1985-05-15', 'B7654321', 'Canada'),
(3, 'Jim', 'Bean', 'jim.bean@example.com', '555-9876', '789 Pine St', '1990-12-31', 'C1122334', 'UK');

INSERT INTO reserva (cliente_id, tipo, hora_salida, hora_llegada) VALUES 
(1, 'Vuelo', '2024-12-01 08:00:00', '2024-12-01 12:00:00'), 
(2, 'Hotel', '2024-12-05 14:00:00', '2024-12-10 11:00:00'), 
(3, 'Auto', '2024-12-15 09:00:00', '2024-12-20 17:00:00');

INSERT INTO lugares (lugar, direccion) VALUES 
('Parque Central', 'Centro de la ciudad'), 
('Museo Nacional', 'Av. Principal 123'), 
('Estadio', 'Calle del Deporte 456');

INSERT INTO o_pagos (tipo_pago) VALUES 
('Tarjeta de Crédito'), 
('PayPal'), 
('Transferencia Bancaria');

INSERT INTO a_puerto (nombre, codigo_iata, codigo_icao, direccion, pais) VALUES 
('Aeropuerto Internacional', 'ABC', 'DEF', 'Avenida Aeropuerto 123', 'USA'),
('Aeropuerto Nacional', 'GHI', 'JKL', 'Boulevard Aeropuerto 456', 'Canada'),
('Aeropuerto Regional', 'MNO', 'PQR', 'Calle Aeropuerto 789', 'UK');

-- Continuación de insertar datos aleatorios

INSERT INTO s_aereopuerto (servi) VALUES 
('Servicio de Transporte'), 
('Servicio de Guía Turística'), 
('Servicio de Asistencia Médica');

INSERT INTO estacionamiento (cliente_id, vehiculo_marca, vehiculo_modelo, vehiculo_placa, vehiculo_color, fecha_entrada, fecha_salida, numero_espacio, metodo_pago, estado) VALUES 
(1, 'Toyota', 'Corolla', 'ABC123', 'Rojo', '2024-11-01 08:00:00', '2024-11-01 17:00:00', 101, 1, 'Ocupado'), 
(2, 'Honda', 'Civic', 'DEF456', 'Azul', '2024-11-05 09:00:00', '2024-11-05 18:00:00', 102, 2, 'Libre'), 
(3, 'Ford', 'Focus', 'GHI789', 'Negro', '2024-11-10 10:00:00', '2024-11-10 19:00:00', 103, 3, 'Ocupado');

INSERT INTO salas_vip (cliente_id, nombre_sala, fecha_reserva, metodo_pago, estado) VALUES 
(1, 'Sala VIP A', '2024-12-01 08:00:00', 1, 'Reservado'), 
(2, 'Sala VIP B', '2024-12-05 09:00:00', 2, 'Disponible'), 
(3, 'Sala VIP C', '2024-12-10 10:00:00', 3, 'Reservado');

INSERT INTO transporte (cliente_id, tipo_transporte, fecha_reserva, fecha_servicio, origen, destino, metodo_pago, estado) VALUES 
(1, 'Taxi', '2024-11-15 08:00:00', '2024-11-15 08:30:00', 'Hotel A', 'Aeropuerto', 1, 'Completado'), 
(2, 'Autobús', '2024-11-20 09:00:00', '2024-11-20 09:45:00', 'Centro Ciudad', 'Estación', 2, 'Pendiente'), 
(3, 'Limusina', '2024-11-25 10:00:00', '2024-11-25 10:30:00', 'Aeropuerto', 'Hotel B', 3, 'Completado');

INSERT INTO alojamiento (cliente_id, hotel_nombre, fecha_entrada, fecha_salida, metodo_pago, estado) VALUES 
(1, 'Hotel A', '2024-12-01 14:00:00', '2024-12-03 12:00:00', 1, 'Confirmado'), 
(2, 'Hotel B', '2024-12-05 15:00:00', '2024-12-07 11:00:00', 2, 'Pendiente'), 
(3, 'Hotel C', '2024-12-10 13:00:00', '2024-12-12 10:00:00', 3, 'Confirmado');

INSERT INTO asistencia_especial (cliente_id, tipo_asistencia, fecha_solicitud, estado) VALUES 
(1, 'Asistencia para Discapacitados', '2024-11-20', 'Pendiente'), 
(2, 'Asistencia Médica', '2024-11-25', 'Completado'), 
(3, 'Asistencia para Personas Mayores', '2024-11-30', 'Pendiente');

INSERT INTO comidas (cliente_id, restaurante_nombre, tipo_comida, fecha_reserva, metodo_pago, estado) VALUES 
(1, 'Restaurante A', 'Italiana', '2024-11-15 12:00:00', 1, 'Reservado'), 
(2, 'Restaurante B', 'Mexicana', '2024-11-20 13:00:00', 2, 'Disponible'), 
(3, 'Restaurante C', 'China', '2024-11-25 14:00:00', 3, 'Reservado');

INSERT INTO compras_dutyfree (cliente_id, tienda_nombre, producto, cantidad, fecha_compra, metodo_pago, estado) VALUES 
(1, 'Tienda A', 'Perfume', 1, '2024-12-01 10:00:00', 1, 'Completado'), 
(2, 'Tienda B', 'Reloj', 1, '2024-12-05 11:00:00', 2, 'Pendiente'), 
(3, 'Tienda C', 'Bolso', 1, '2024-12-10 12:00:00', 3, 'Completado');

INSERT INTO bienestar (cliente_id, tipo_servicio, fecha_reserva, metodo_pago, estado) VALUES 
(1, 'Spa', '2024-11-20 09:00:00', 1, 'Confirmado'), 
(2, 'Gimnasio', '2024-11-25 10:00:00', 2, 'Pendiente'), 
(3, 'Masaje', '2024-11-30 11:00:00', 3, 'Confirmado');

INSERT INTO servicios_tecnologicos (cliente_id, tipo_servicio, fecha_reserva, metodo_pago, estado) VALUES 
(1, 'Wi-Fi', '2024-11-20 09:00:00', 1, 'Activado'), 
(2, 'Alquiler de Laptop', '2024-11-25 10:00:00', 2, 'Pendiente'), 
(3, 'Carga de Dispositivos', '2024-11-30 11:00:00', 3, 'Activado');

INSERT INTO documentacion (cliente_id, tipo_tramite, fecha_solicitud, estado) VALUES 
(1, 'Renovación de Pasaporte', '2024-11-15', 'Pendiente'), 
(2, 'Solicitud de Visa', '2024-11-20', 'Completado'), 
(3, 'Certificado de Nacimiento', '2024-11-25', 'Pendiente');

INSERT INTO seguridad_proteccion (cliente_id, tipo_servicio, fecha_solicitud, estado) VALUES 
(1, 'Seguridad Personal', '2024-11-20', 'Pendiente'), 
(2, 'Protección de Equipaje', '2024-11-25', 'Completado'), 
(3, 'Vigilancia', '2024-11-30', 'Pendiente');

INSERT INTO guarderia (cliente_id, tipo_servicio, fecha_reserva, metodo_pago, estado) VALUES 
(1, 'Guardería Infantil', '2024-11-20 08:00:00', 1, 'Reservado'), 
(2, 'Zona de Juegos', '2024-11-25 09:00:00', 2, 'Disponible'), 
(3, 'Cuidado de Bebés', '2024-11-30 10:00:00', 3, 'Reservado');

INSERT INTO servicios_medicos (cliente_id, tipo_servicio, fecha_reserva, estado) VALUES 
(1, 'Consulta Médica', '2024-11-20 09:00:00', 'Pendiente'), 
(2, 'Primera Ayuda', '2024-11-25 10:00:00', 'Completado'), 
(3, 'Examen General', '2024-11-30 11:00:00', 'Pendiente');

INSERT INTO servicio_equipaje (cliente_id, tipo_servicio, fecha_reserva, metodo_pago, estado) VALUES 
(1, 'Almacenamiento de Equipaje', '2024-11-20 09:00:00', 1, 'Guardado'), 
(2, 'Envío de Equipaje', '2024-11-25 10:00:00', 2, 'Enviado'), 
(3, 'Seguro de Equipaje', '2024-11-30 11:00:00', 3, 'Asegurado');
