import Validator from "fastest-validator";

class Aluno {
    constructor(nome_completo, email, bairro, tipo_habilitacao){
        this.nome_completo = nome_completo;
        this.email = email;
        this.bairro = bairro;
        this.tipo_habilitacao = tipo_habilitacao;
    }
    
    static validation(body){
        
        const schema = {
            nome_completo: {type: 'string', optional: false, max: "200"},
            email: {type: 'string', optional: false, max: "100"},
            bairro: {type: 'string', optional: false,max: "100"},
            tipo_habilitacao: {type: 'string', optional: false, max: "50"}
        }
        
        const v = new Validator();

        return v.validate(body, schema);
    }   
    
}
export default Aluno;


