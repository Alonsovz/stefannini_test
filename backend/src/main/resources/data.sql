
--INSERT INIT CATEGORIAS
INSERT INTO categoria(categoria_nombre,categoria_estado) VALUES('Juegos',1);
INSERT INTO categoria(categoria_nombre,categoria_estado) VALUES('Arte y Diseño',1);
INSERT INTO categoria(categoria_nombre,categoria_estado) VALUES('Deportes',1);


--INSERT INIT APLICACIONES
INSERT INTO
aplicacion(nombre_aplicacion,calificacion_aplicacion, precio_aplicacion,descripcion_aplicacion,categoria_id,imagen_principal,author,instalado)
VALUES('Plants vs Zombies',1, 1.99, 'Estrategia de combate epica. Construye una aldea, entrena a tropas ¡y a luchar!',1,'1.webp', 'Desarrollador 1',true);

INSERT INTO
aplicacion(nombre_aplicacion,calificacion_aplicacion, precio_aplicacion,descripcion_aplicacion,categoria_id,imagen_principal,author,instalado)
VALUES('Clash of royale',2, 0.00, 'Enfrentate en armada en un modo MJ en arenas de combate',1,'2.webp','Desarrollador 2',false);

INSERT INTO
aplicacion(nombre_aplicacion,calificacion_aplicacion, precio_aplicacion,descripcion_aplicacion,categoria_id,imagen_principal, author,instalado)
VALUES('Browle stars',3, 0.00, 'Combina 3 caramelos con rachas de azucar',1,'3.webp','Desarrollador 3',false);



INSERT INTO
aplicacion(nombre_aplicacion,calificacion_aplicacion, precio_aplicacion,descripcion_aplicacion,categoria_id,imagen_principal,author,instalado)
VALUES('Adobe xpress',4, 12.99, 'Editor de fotos con plantillas para crear anuncios logos y folletos increibles',2,'4.webp','Desarrollador 4',true);

INSERT INTO
aplicacion(nombre_aplicacion,calificacion_aplicacion, precio_aplicacion,descripcion_aplicacion,categoria_id,imagen_principal,author,instalado)
VALUES('MarioMaker',5, 0.00, 'El banco de imagenes para profesionales',2,'5.webp', 'Desarrollador 5',false);

INSERT INTO
aplicacion(nombre_aplicacion,calificacion_aplicacion, precio_aplicacion,descripcion_aplicacion,categoria_id,imagen_principal,author,instalado)
VALUES('Airplane Game',1, 1.99, 'Crea en minuto!, una app para diseño grafico, editor de fotos y videos',2, '6.webp','Desarrollador 6',false);


INSERT INTO
aplicacion(nombre_aplicacion,calificacion_aplicacion, precio_aplicacion,descripcion_aplicacion,categoria_id,imagen_principal,author,instalado)
VALUES('TexApp',2, 0.00, 'El hogar oficial de NBA League Pass, basquetbol en vivo, resumenes y mas!',3, '7.webp', 'Desarrollador 7',true);

INSERT INTO
aplicacion(nombre_aplicacion,calificacion_aplicacion, precio_aplicacion,descripcion_aplicacion,categoria_id,imagen_principal,author,instalado)
VALUES('Lion App',3, 0.00, 'Deportes en vivo, noticias, resultados y alertas',3, '8.webp', 'Desarrollador 8',true);

INSERT INTO
aplicacion(nombre_aplicacion,calificacion_aplicacion, precio_aplicacion,descripcion_aplicacion,categoria_id,imagen_principal,author,instalado)
VALUES('AirnIb',4, 1.99, 'Video en vivo y bajo demanda de las competiciones de la UEFA',3, '9.webp','Desarrollador 9',true);


--INSERTS SCREENSHOT
INSERT INTO screenshot (aplicacion_id,url) VALUES(1,'app1/1.webp');
INSERT INTO screenshot (aplicacion_id,url) VALUES(1,'app1/2.webp');
INSERT INTO screenshot (aplicacion_id,url) VALUES(1,'app1/3.webp');


--INSERTS VALORACION
INSERT INTO valoracion (aplicacion_id, comentario) values (1, 'Es una gran app, me gusta mucho');