-- Use data base project_security
USE project_security;

-- DML 
INSERT INTO personas (
	tipo_documento
    , documento
    , primer_nombre
    , primer_apellido
    , correo
    , celular
    , estado
)VALUES (
	'TI'
	, '1342'
    , 'Carlos'
    , 'Perez'
    , 'car@unab'
    , '4321'
    , '1'
);


-- DML consult personas
SELECT * FROM personas;