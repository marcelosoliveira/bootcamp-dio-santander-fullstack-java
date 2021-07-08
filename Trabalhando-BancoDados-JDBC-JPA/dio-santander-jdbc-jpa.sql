CREATE database dio_santander_jdbc_jpa;

CREATE TABLE aluno (
    id INT AUTO_INCREMENT,
    nome VARCHAR(80) NOT NULL,
    idade INT NOT NULL,
    estado CHARACTER(2) NOT NULL,
    PRIMARY KEY(id)
);

INSERT INTO aluno(nome, idade, estado) VALUES ('Pedro', 20, 'RJ');
INSERT INTO aluno(nome, idade, estado) VALUES ('Maria', 35, 'AC');
INSERT INTO aluno(nome, idade, estado) VALUES ('Joao', 10, 'SC');
INSERT INTO aluno(nome, idade, estado) VALUES ('Ana', 51, 'GO');
