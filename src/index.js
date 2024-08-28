import * as fs from 'fs';
import test from 'node:test';

// fs.readFile('./texto-web.txt', 'utf-8', (erro, data) => {
//     console.log(data)
// });

const conteudo = fs.readFileSync('./texto-web.txt', 'utf-8');

function breakPar(text) {
    const pars = text.toLowerCase().split("\n")
    const count =  pars.flatMap((par) => {
        if(!par) return []
        return verifyWords(par)
    })


        // .filter((par) => par)
        // .map((par) => {
    //})
    return count
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
console.log(breakPar(conteudo))