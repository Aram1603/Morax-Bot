const Discord = require('discord.js')
const fs = require('fs')
const moneys = JSON.parse(fs.readFileSync("./Money.json","utf-8"))
const crystals = JSON.parse(fs.readFileSync("./Crystal.json","utf-8"))
module.exports = {
    name:"~~낚시",
    execute(message, args){
       const emojis = ["https://media.discordapp.net/attachments/710141216020365403/821244964491100181/1.gif"]
       const score = [221,382,320,450,920,280,283,245,2193,239,1200,357,385,318,123,323,432,421,165,2143,60000,543,152,186,149,120,120,126,324]
       const gg = [1,2,3,4,5,6,7,2,2,2,1,3,3,4,5,12,2,2,3,1]
        const embed = new Discord.MessageEmbed()  
    //물고기 (?)
    const fish = ["갈치", "대구" , "연어", "인어공주", "낡은 그릇", "흰동가리", "소","페이몬","각설이","1000원","죠스바","변태고기",
     "음란마귀","라이브","야자염소","원석","딸기","타르탈리아","누군가 먹다 남긴 치킨","코딱지",
     "다이아몬드","단무지","치치","젖은 종이","0점 시험지","-두-","훌륭한 대화수단","통통 폭탄"]

      const e =["낚였어요!!", "축하드려여~", "오...낚였어요!!","낚시란...재밌는거시에요.."]
      
     const b = e[Math.floor(Math.random() * e.length)];
     const bb = gg[Math.floor(Math.random() * gg.length)];
     const a = fish[Math.floor(Math.random() * fish.length)]
     const c = emojis[Math.floor(Math.random() * emojis.length)]
     const g = score[Math.floor(Math.random() * score.length)]
    const target = message.mentions.members.first()
  if(!message.mentions.members.first())return message.reply(embed.setTitle("`낚시 실패...`").setDescription("`대상을 멘션해주세여`").addField("`낚시 기능 사용법`","`ex\) ~~낚시 @아야카 아람`").setColor("YELLOW"))
            
            if(!moneys[target.id]) moneys[target.id] = 0

             moneys[target.id]+=g

            fs.writeFile("./Money.json",JSON.stringify(moneys), (err)=>{
                if(err) console.log(err)
             })

             if(!crystals[target.id]) crystals[target.id] = 0
            crystals[target.id]+=bb
            
            fs.writeFile("./Crystal.json",JSON.stringify(crystals), (err)=>{
                if(err) console.log(err)
             })
    
     message.react("837666427711258654")
       message.channel.send(`낚는중... 2초`)
              .then(msg => {
                  setTimeout(function() {
                      msg.edit(`낚는중... 1초`)
                  }, 1000);
                  setTimeout(function() {
                msg.delete({ timeout: 3000 })
                })
              })

      var author2 = message.author;
        var embed1 = new Discord.MessageEmbed()
        .setColor('YELLOW')
        .setTitle("낚시 결과")
        .addField(`${target.user.username} 님께서는`,a+" 을 (를) 낚으셨습니다!")
        .setTimestamp()

    var embed3 = new Discord.MessageEmbed()
        .setColor('ORANGE')
        .setThumbnail('https://cdn.discordapp.com/emojis/842295138407415810.gif?v=1')
         .setTitle(`${target.user.username} 님의 배낭`)
        .addField(`${target.user.username} 님의`,`닷지 코인 : ${moneys[target.id]} 개\n네코 코인 : ${crystals[target.id]} 개`)
         .setTimestamp()

    var pages = [
        embed1,
        embed3
    ];

    var author = message.author;
    setTimeout(function(){ 
    message.channel.send(pages[0]).then( async message => {
        await message.react('🤛');
        await message.react('🤜');
        var collector = message.createReactionCollector(
            (reaction, user) => ['🤛', '🤜'].includes(reaction.emoji.name) && user.id === author.id
        
        )
    
        let currentIndex = 0
        collector.on('collect', reaction => {
            reaction.emoji.name === '🤛' ? currentIndex -= 1 : currentIndex += 1;
            if (currentIndex < 0) {
                currentIndex += 1;
            }
            if (currentIndex + 1 > pages.length) {
                currentIndex -= 1;
            }

            message.edit(pages[currentIndex]);
            
        })
    })
}, 3000);
      
    }
}
