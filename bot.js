const { Telegraf } = require('telegraf')

const bot = new Telegraf(process.env.TOKEN)


bot.start((ctx) => {
    ctx.reply("Selamat Datang, silahkan ketik /buy untuk membeli barang! \nAtau ketik /help untuk melihat bantuan yang ada.");
})

bot.help((ctx) => {
    ctx.reply("Ketik /start untuk memulai transaksi. \n/help untuk bantuan. \n/list untuk melihat daftar produk kami. \n/method untuk melihat metode pembayaran yang tersedia. \n/contact untuk menghubungi staff kami secara live. \n/ticket untuk mengirim tiket jika bot berkendala. \n/invite untuk bergabung di server Discord kami!\n/about untuk melihat informasi bot kami.");
})

bot.command("ticket", (ctx) => {
    ctx.reply("Silahkan ketik keluhan anda!");
})

bot.command("about", (ctx) => {
    ctx.reply("Nitrozi Store V 0.1beta | Last Updated: 27-09-2021 | Powered by: Telegraf.js | Online: Saat jam kerja (08.00-16.00 WIB, Setiap Hari) | Coba juga aplikasi bot Discord kami: Nitrozi Store#0387 | Made by: @rozivector");
})

bot.command("invite", (ctx) => {
    ctx.reply("Silahkan bergabung di Discord Server kami: https://discord.gg/F5QkJbhK3R");
})

bot.command("contact", (ctx) => {
    ctx.reply("☎️ Silahkan hubungi melalui telegram kami: @rozivector \nAtau melalu DM Discord: **Dani The Rabbit#5925**");
})

bot.command('list', (ctx) => {
    ctx.reply("Berikut daftar produk yang kami jual: \n1️⃣ Discord Nitro Classic 1bln = Rp 80.000 \n2️⃣ Discord Nitro Boost 1bln = Rp 155.000 \n3️⃣ Discord Nitro Classic 1thn = Rp 755.000 \n4️⃣ Discord Nitro Boost 1thn = Rp 1.500.000");
})

bot.command('method', (ctx) => {
    ctx.reply("Metode pembayaran yang kami terima: Transfer Bank (BNI), OVO, Dana, Paypal Credits, Go-Pay dan Jenius. Untuk nomor rekening kami, silahkan buka channel #cara-order di server Discord kami! (/invite)");
})

bot.launch();
console.log("Bot is ready!");
