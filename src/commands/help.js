import { Composer } from 'telegraf';

const helpComposer = new Composer();

helpComposer.command('help', (ctx) => {
    ctx.reply('/start\n/help\n/gasto');
});

export default helpComposer;
