import Validator from "fastest-validator";

class Financeiro {
    constructor(descricao, entrada, saida, validacao){
        this.descricao = descricao;
        this.entrada = entrada;
        this.saida = saida;
        this.validacao = validacao;
    }
    
    static validation(body){
        
        const schema = {
            descricao: {type: 'string', optional: false, max: "100"},
            entrada: {type: 'number', optional: false,max: "100"},
            saida: {type: 'number', optional: false,max: "100"},
            validacao: {type: 'number', optional: false, max: "50"}
        }
        
        const v = new Validator();

        return v.validate(body, schema);
    }   
    
}

export default Financeiro;


    