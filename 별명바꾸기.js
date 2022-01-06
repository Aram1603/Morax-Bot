if(message.content.startsWith("~~닉네임 ")){

if(!message.member.hasPermission("MANAGE_NICKNAMES")) return message.reply(" 님은 권한이 없어여")
if(!message.member.hasPermission("MANAGE_NICKNAMES")) return message.reply(" 어라 나 권한이 없어")
const mentionedMember = message.mentions.members.first()
const nickName = message.content.slice(28)
const args = message.content.slice(28)
var gaydoge = message.guild.emojis.cache.find(emoji => emoji.name === 'gaydoge')
if (!args[0]) return message.channel.send('\`~~닉네임 @user_name (이름)\` 형식으로 적어주세요!');
if (!nickName) return message.channel.send('이 유저의 닉네임을 변경하려면 먼저 바꿀 닉네임을 알려주세요!');
if (!mentionedMember.kickable) return message.channel.send('이 유저는 상위 권한이기에 닉네임을 바꿀 수 없어요...')

var nickname_embed = new Discord.MessageEmbed() 
.setDescription(`<@${message.author.id}>`)
.addField(`닉네임이 성공적으로 변경되었어요.`,`바뀐 닉네임 : \`${nickName}\``) .setColor("YELLOW") .setFooter(message.author.username+" 관리자") 
.setTimestamp()

mentionedMember.setNickname(nickName).catch(err => console.log(err)) && message.reply(nickname_embed); 
}
