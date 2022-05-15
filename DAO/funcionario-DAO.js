class FuncionarioDAO {
    
    constructor(db) {
        this._db = db;
    }

    async selectFuncionarios() {
        return await new Promise((resolve, reject) => {
            const query = (`SELECT * FROM funcionarios`);
            this._db.all(query, 
                (err, rows) => {
                if (err) {
                    return reject(err);
                } else {
                    return resolve(rows);
                }
            });
        });
    }

    async selectFuncionariosId(id_funcionario) {
        return await new Promise((resolve, reject) => {
            const query = ('SELECT * FROM funcionarios WHERE id_funcionario =?');
            const data = [id_funcionario];
            this._db.get(query,data, (err, rows) => {
                    if (err) {
                       return reject(err);
                    } else {
                       return resolve(rows);
                    }
                });
        });
    };


    async insertFuncionarios(funcionarios) {
        return await new Promise((resolve, reject) => {
            const query = ('INSERT INTO Funcionarios (nome_completo,email,celular,cargo,bairro,periodo,admissao) VALUES (?,?,?,?,?,?,?)');
            const data = [funcionarios.nome_completo, funcionarios.email, funcionarios.celular, funcionarios.cargo, funcionarios.bairro, funcionarios.periodo, funcionarios.admissao];
            this._db.run(query, data, (err, rows) => {
                    if (err) {
                       return reject(err);
                    } else {
                       return resolve("Sucesso");
                    }
                });
        });
    };

    async updateFuncionarios(funcionarios,id_funcionario) {
        return await new Promise((resolve, reject) => {
            const query = ('UPDATE funcionarios SET nome_completo=?, email=?, celular=?, cargo=?, bairro=?, periodo=?, admissao =? WHERE id_funcionario=?')
            const data = [funcionarios.nome_completo, funcionarios.email, funcionarios.celular, funcionarios.cargo, funcionarios.bairro, funcionarios.periodo, funcionarios.admissao, id_funcionario];
            this._db.run(query,data,(err, rows) => {
                    if (err) {
                       return reject(err);
                    } else {
                       return resolve("Sucesso");
                    }
                });
        });
    }

    async deleteFuncionarios(id_funcionario) {
       return await new Promise((resolve, reject) => {
            const query = ('DELETE FROM funcionarios WHERE id_funcionario=?');
            const data = [id_funcionario];
            this._db.run(query,data, (err, rows) => {
                    if (err) {
                       return reject(err);
                    } else {
                       return resolve("Sucesso");
                    }
                });
        });


    }
}

export default FuncionarioDAO;