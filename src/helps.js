function filterAmount(par) {
    return Object.keys(par).filter(word => par[word] > 1)
}

function buildOutFile(arrWords) {
    let message = "";
    arrWords.forEach( (par, index) => {
        const duplica = filterAmount(par).join(', ')
        
        if(duplica.length == 0){
            
        } else {
            message += `Palavras duplicadas no parágrafo ${index + 1}: ${duplica}\n`
        }
    })
    return message
}

export {
    filterAmount,
    buildOutFile
}