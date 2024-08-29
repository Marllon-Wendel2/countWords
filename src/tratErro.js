function handllerError(erro) {
    if(erro.code === "ENOENT") {
        throw new Error("Aquivo não encontrado"); 
    } else {
        return {messega: "Erro desconhcido na aplicacao", code: erro}
    }
}

export default handllerError