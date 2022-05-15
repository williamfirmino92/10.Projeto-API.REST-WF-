import Validator from "fastest-validator";

class Funcionario {
    constructor(nome_completo, email, celular, cargo, bairro, periodo, admissao){
        this.nome_completo = nome_completo;
        this.email = email;
        this.celular = celular;
        this.cargo = cargo; 
        this.bairro = bairro;
        this.periodo = periodo;
        this.admissao = admissao;
    }
    
    static validation(body){
        
        const schema = {
            nome_completo: {type: 'string', optional: false, max: "200"},
            email: {type: 'string', optional: false, max: "100"},
            celular : {type: 'number', optional: false, max: "20"},
            cargo : {type: 'string', optional: false, max: "100"},
            bairro: {type: 'string', optional: false, max: "100"},
            periodo: {type: 'string', optional: false, max: "100"},
            admissao: {type: 'date', optional: false, max: "100"}            
        }
    
        
        const v = new Validator();

        return v.validate(body, schema);
    }   
    
}

export default Funcionario;