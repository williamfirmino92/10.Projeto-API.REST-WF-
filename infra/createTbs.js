import sqlite3 from "sqlite3";
const db = new sqlite3.Database('./database.db');

const ALUNOS_SCHEMA = `CREATE TABLE IF NOT EXISTS Alunos (
            id_aluno INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
            nome_completo VARCHAR(120) NOT NULL,
            email VARCHAR(60) NOT NULL,
            bairro VARCHAR(60) NOT NULL,
            tipo_habilitacao VARCHAR(20) NOT NULL
            );`;

function criaTabelaAl() {
    db.run(ALUNOS_SCHEMA, (error) => {
        if (error) console.log("Erro ao criar tabela de Alunos");
    });
}

const FINANCEIRO_SCHEMA = `CREATE TABLE IF NOT EXISTS Financeiro (
    id_financeiro INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    descricao VARCHAR(120) NOT NULL,
    entrada FLOAT(60) NOT NULL,
    saida FLOAT(60) NOT NULL,
    validacao FLOAT(60) NOT NULL
    );`;


    function criaTabelaFin() {
db.run(FINANCEIRO_SCHEMA, (error) => {
if (error) console.log("Erro ao criar tabela do Financeiro");
});
}

const FUNCIONARIOS_SCHEMA = `CREATE TABLE IF NOT EXISTS Funcionarios (
    id_funcionario INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    nome_completo VARCHAR(120) NOT NULL,
    email VARCHAR(80) NOT NULL,
    celular INT(15) NOT NULL,
    cargo VARCHAR(45) NOT NULL,
    bairro VARCHAR(45) NOT NULL,
    periodo VARCHAR(45) NOT NULL,
    admissao DATE NOT NULL
    );`;

function criaTabelaFunc() {
db.run(FUNCIONARIOS_SCHEMA, (error) => {
if (error) console.log("Erro ao criar tabela de Funcionarios");
});
}

db.serialize(()=>{
    criaTabelaAl();
    criaTabelaFin();
    criaTabelaFunc();
});
