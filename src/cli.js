import * as fs from 'fs';
import handllerError from './tratErro.js';
import { countWord } from './index.js';
import { buildOutFile } from './helps.js';
import { Command } from 'commander';

const program = new Command()

program
    .version('0.0.1')
    .option(`-t, --texto <string>`, "caminho do texto a ser processado")
    .option(`-d, --destino <string>`, "caminho onde salvar o arquivo resultado")
    .action((options) => {
        const {texto, destino} = options;

        if(!texto || !destino) {
            console.error("erro: informar caminho de origem e destino")
            program.help();
            return
        }
    })

const caminhodoArquivo =  process.argv;
const path = caminhodoArquivo[2]

const cli = () => fs.readFile('./texto-web.txt', 'utf-8', async (err, conteudo) => {
    try {
    if(err) {
        throw err
    }
    const result = countWord(conteudo);
    console.log(await creatAndSaveFile(result, path))
     } catch (err) {
        console.log(handllerError(err));
        }
});

async function creatAndSaveFile(arryWords, path) {
    const newFile = `${path}/resultado.txt`;
    const textWord = buildOutFile(arryWords);
    try {
        await fs.promises.writeFile(newFile, textWord);
        return {sucess: true, message: "Arquivo criado com sucesso"};
    } catch (erro) {
        throw erro;
    }
}

export default cli;