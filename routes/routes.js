import { Router } from 'express';
import { selectAllAlunos, selectIdAlunos, insertAluno, putAlunos, deleteAluno } from '../controllers/aluno-controller.js';
import { selectAllFuncionario, selectIdFuncionario, insertFuncionarios, putFuncionario, deleteFuncionario } from '../controllers/funcionario-controllers.js';
import { selectAllFinanceiro, selectIdFinaneiro, insertFinanceiro, putFinanceiro, deleteFinanceiro } from '../controllers/financeiro-controller.js';

const router = Router();

router.get('/', (req,res)=>{
    res.json({
        "statusCode": 200,
        "msg": "Api Rodando"

    });
});

router.get('/alunos', selectAllAlunos);
router.get('/alunos/:id_aluno', selectIdAlunos);
router.post('/alunos', insertAluno);
router.put('/alunos/:id_aluno',putAlunos);
router.delete('/alunos/:id_aluno', deleteAluno);

router.get('/funcionarios', selectAllFuncionario);
router.get('/funcionarios/:id_funcionario', selectIdFuncionario);
router.post('/funcionarios', insertFuncionarios);
router.put('/funcionarios/:id_funcionario',putFuncionario);
router.delete('/funcionarios/:id_funcionario', deleteFuncionario);

router.get('/financeiro', selectAllFinanceiro);
router.get('/financeiro/:id_financeiro', selectIdFinaneiro);
router.post('/financeiro', insertFinanceiro);
router.put('/financeiro/:id_financeiro',putFinanceiro);
router.delete('/financeiro/:id_financeiro', deleteFinanceiro);

export default router;

