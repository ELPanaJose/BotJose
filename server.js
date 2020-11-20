
const Discord = require("discord.js");
const client = new Discord.Client();




client.on("ready", () => {
     client.user.setPresence({ game: { name: 'with discord.js' }, status: 'idle' })
        console.log(`${client.user.username} is up and running!`);
  
  
  console.log(`BOT_JOSE LISTO!!! ${client.user.tag}!`);
});

client.on("message", msg => {
  const embed=new Discord.RichEmbed().addField("Something One","Lorem ipsum dolor sit amet, consectetur adipiscing elit.Duis sed justo sit amet magna hendrerit laoreet at nec ligula.   Vestibulum nunc justo, dignissim pulvinar placerat at, blandit quis mi.Suspendisse nec nisi blandit, viverra lectus ut, imperdiet ex.Vestibulum condimentum lorem eget ligula consequat posuere. Cras in accumsan tortor, nec malesuada sapien. Nam vel pharetra purus, ac malesuada odio. Pellentesque ac magna dapibus, blandit tellus quis,ultrices felis. Ut ornare vitae risus nec pretium. Nunc sit amet lacus dolor.");
  if (msg.content === "/klk") {
    
    msg.reply("tamo activo pai :)");
  }
  if (msg.content === "/callao") {
    msg.reply("pal lobby rey");
  }
  if (msg.content==="puta"){
    msg.reply("calla puta")
  }
  if (msg.content==="lorem"){
    msg.channel.send(embed)
  }
  if (msg.content==="bitch"){
       msg.reply("shut up bitch")
  }
  
});



client.login("token");
