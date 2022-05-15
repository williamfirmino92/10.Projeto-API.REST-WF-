import FuncionarioDAO from "../DAO/funcionario-DAO.js";
import FuncionarioModel from "../models/funcionario-model.js";
import db from "../infra/configDb.js";


export async function selectAllFuncionario(req, res) {
    const funcionarioDao = new FuncionarioDAO(db);
    funcionarioDao.selectFuncionarios()
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
}

export async function selectIdFuncionario(req, res) {
    const funcionarioDao = new FuncionarioDAO(db);
    const {
        id_funcionario
    } = req.params;
    funcionarioDao.selectFuncionariosId(id_funcionario)
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
}

export async function insertFuncionarios(req, res) {
    const funcionarioDao = new FuncionarioDAO(db);
    const body = req.body;
    const newFuncionario = new FuncionarioModel(body.nome_completo, body.email, body.celular, body.cargo, body.bairro, body.periodo, body.admissao);
    const validationResponse = FuncionarioModel.validation(body);

    if (!validationResponse) {
        return res.status(400).json({
            message: 'Validation failed',
            errors: validationResponse
        });
    }

    funcionarioDao.insertFuncionarios(newFuncionario)
        .then((result) => {
            res.status(201).json(result)
        })
        .catch((err) => {
            res.status(400).json(err)
        });
}

export async function putFuncionario(req, res) {
    const funcionarioDao = new FuncionarioDAO(db);
    const body = req.body;
    const {
        id_funcionario
    } = req.params;
    const putFuncionario = new FuncionarioModel(body.nome_completo, body.email, body.celular, body.cargo, body.bairro, body.periodo, body.admissao);

    const validationResponse = FuncionarioModel.validation(body);

    if (!validationResponse) {
        return res.status(400).json({
            message: 'Validation failed',
            errors: validationResponse
        });
    }

    funcionarioDao
        .updateFuncionarios(putFuncionario, id_funcionario)
        .then((result) => {
            res.status(200).json(result)
        })
        .catch((error) => {
            res.status(400).json(error)
        });
}

export async function deleteFuncionario(req, res) {
    const funcionarioDao = new FuncionarioDAO(db);
    const {
        id_funcionario
    } = req.params;

    funcionarioDao.deleteFuncionarios(id_funcionario)
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((error) => {
            res.status(400).json(error);
        });
}