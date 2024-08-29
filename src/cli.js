import chalk from 'chalk';
import * as fs from 'fs';
import path from 'path';
import handllerError from './tratErro.js';
import { countWord } from './index.js';
import { buildOutFile } from './helps.js';
import { Command } from 'commander';

const program = new Command()

program
    .version('0.0.1')
    .option("-t, --texto <string>", "caminho do texto a ser processado")
    .option("-d, --destino <string>", "caminho onde salvar o arquivo resultado")
    .action((options) => {
        const { texto, destino } = options;
        console.log(destino, texto)

        if(!texto || !destino) {
            console.error(chalk.red("erro: informar caminho de origem e destino"))
            program.help();
            return
        }

        const pathText = path.resolve(texto);
        const pathDestino = path.resolve(destino)

        try {
            processFile(pathText, pathDestino);
            console.log(chalk.bgGreen("Processo concluido"))

        } catch(erro) {
            console.error(chalk.redBright("Ocorreu erro no processamento"), erro)
        }
    });
    program.parse()

function processFile(texto, destino) {
    fs.readFile(texto, 'utf-8', async (err, conteudo) => {
        try {
        if(err) {
        throw err
    }
    const result = countWord(conteudo);
    console.log(await creatAndSaveFile(result, destino))
     } catch (err) {
        console.log(handllerError(err));
        }
    })};
    

async function creatAndSaveFile(arryWords, destino) {
    const newFile = `${destino}/resultado.txt`;
    const textWord = buildOutFile(arryWords);
    try {
        await fs.promises.writeFile(newFile, textWord);
        return {sucess: true, message: "Arquivo criado com sucesso"};
    } catch (erro) {
        throw erro;
    }
}

export {
    processFile
};