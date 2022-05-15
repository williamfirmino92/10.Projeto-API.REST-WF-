import AlunoDAO from "../DAO/aluno-DAO.js";
import AlunoModel from "../models/aluno-model.js";
import db from "../infra/configDb.js";


export async function selectAllAlunos(req, res) {
    const alunoDao = new AlunoDAO(db);
    alunoDao.selectAlunos()
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
}

export async function selectIdAlunos(req, res) {
    const alunoDao = new AlunoDAO(db);
    const {
        id_aluno
    } = req.params;
    alunoDao.selectAlunosId(id_aluno)
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
}

export async function insertAluno(req, res) {
    const alunoDao = new AlunoDAO(db);
    const body = req.body;
    const newAluno = new AlunoModel(body.nome_completo, body.email, body.bairro, body.tipo_habilitacao);

    const validationResponse = AlunoModel.validation(body);

    if (!validationResponse) {
        return res.status(400).json({
            message: 'Validation failed',
            errors: validationResponse
        });
    }

    alunoDao.insertAlunos(newAluno)
        .then((result) => {
            res.status(201).json(result)
        })
        .catch((err) => {
            res.status(400).json(err)
        });
}

export async function putAlunos(req, res) {
    const alunoDao = new AlunoDAO(db);
    const body = req.body;
    const {
        id_aluno
    } = req.params;
    const putAluno = new AlunoModel(body.nome_completo, body.email, body.bairro, body.tipo_habilitacao);

    const validationResponse = AlunoModel.validation(body);

    if (!validationResponse) {
        return res.status(400).json({
            message: 'Validation failed',
            errors: validationResponse
        });
    }

    alunoDao
        .updateAlunos(putAluno, id_aluno)
        .then((result) => {
            res.status(200).json(result)
        })
        .catch((error) => {
            res.status(400).json(error)
        });
}

export async function deleteAluno(req, res) {
    const alunoDao = new AlunoDAO(db);
    const {
        id_aluno
    } = req.params;

    alunoDao.deleteAlunos(id_aluno)
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((error) => {
            res.status(400).json(error);
        });
}