import { Composer } from 'telegraf';
import gerarCpf from './utils/gerarCpfValido.js';

const randomCpfCompose = new Composer();

randomCpfCompose.command('randomCpf', (ctx) => {
    ctx.reply(gerarCpf());
});

export default randomCpfCompose;


