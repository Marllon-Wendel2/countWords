import * as fs from 'fs';
import test from 'node:test';

fs.readFile('./texto-web.txt', 'utf-8', (err, conteudo) => {
    try {
    if(err) {
        console.log("O erro é:", err)
        return
    }
    console.log(countWord(conteudo)) } catch (erro) {
        
    }
});

function countWord(text) {
    const pars = breakPar(text)
    const count =  pars.flatMap((par) => {
        if(!par) return []
        return verifyWords(par)
    })

    return count
}

function breakPar(text) {
    return text.toLowerCase().split("\n")
}

function verifyWords(text) {
    const arrWords =  text.split(" ");
    const result = {}

    arrWords.forEach(word => {
        if(word.length >= 3){
            const cleanedWord = clearWords(word)
            result[cleanedWord] = (result[cleanedWord]|| 0) + 1
        }
    });

    return result

}

function clearWords(word) {
    return word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
}

//verifyWords(conteudo);
// console.log(countWord(conteudo))