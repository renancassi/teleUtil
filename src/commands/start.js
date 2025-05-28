import { Composer, Markup } from 'telegraf';

const startComposer = new Composer();

startComposer.command('start', (ctx) => {
  ctx.reply(
    'Bem-vindo ao TeleUtil\nEscolha uma opção abaixo:',
    Markup.inlineKeyboard([
      Markup.button.callback('Comandos', 'help'),
      Markup.button.callback('Sobre', 'about')
    ])
  );
});

// Callback para botão "Ajuda"
startComposer.action('help', async (ctx) => {
  await ctx.answerCbQuery(); 
  ctx.reply('/start\n/help\n/gasto');
});

// Callback para botão "Sobre"
startComposer.action('about', async (ctx) => {
  await ctx.answerCbQuery();
  ctx.reply('TeleUtil - feito para facilitar seu dia a dia!\n\nDesenvolvido por Renan Cassi\nVersão 1.0');
});

export default startComposer;
