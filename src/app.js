import { Telegraf } from 'telegraf';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const bot = new Telegraf(process.env.TOKEN_BOT);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const { default: command } = await import(`./commands/${file}`);
    bot.use(command); // Usa o Composer de cada comando
}

bot.launch();
console.log('\n🤖 | Bot iniciado com sucesso!\n--->');