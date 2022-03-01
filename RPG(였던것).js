
var target = message.mentions.members.first()
if (!부과세) 부과세 = {'부과세':1};
// if (!칭호[sender.id]) 칭호[sender.id] = {'칭호':"없음"};
//  if (!총알[sender.id]) 총알[sender.id] = {'총알':0};
//  if (!미사일[sender.id]) 미사일[sender.id] = {'미사일':0}
if(message.content== "!회원가입"){
   if(원석[sender.id]) return message.lineReplyNoMention("센세는 이미 회원이셔요!!\n또 까먹으신거에요..?!")
   원석[sender.id] = {'원석':1};
   칭호[sender.id] = {'칭호':"없음"};
    총알[sender.id] = {'총알':0};
   미사일[sender.id] = {'미사일':0}
 message.lineReplyNoMention("성공적으로 아비도스 고등학교에 회원가입을 하셨어요!\n\n\"!내정보\" 를 치시면 자신의 정보를 확인 할 수 있습니다!")
  }
  if(원석[sender.id]){
   const ef1g = Math.floor(Math.random()*150)+20;
   원석[sender.id].원석+=ef1g;
   fs.writeFile("./원석.json",JSON.stringify(원석), (err)=>{
      if(err) console.log(err)
   })
}
if(원석[sender.id]){
 if(원석[sender.id].원석>=1){
   칭호[sender.id] = {'칭호':"흙수저"};
 }
 if(원석[sender.id].원석>=10000){
   칭호[sender.id] = {'칭호':"철수저"};
 }
 if(원석[sender.id].원석>=30000){
   칭호[sender.id] = {'칭호':"구리수저"};
 }
 if(원석[sender.id].원석>=100000){
   칭호[sender.id] = {'칭호':"💿 은수저"};
 }
 if(원석[sender.id].원석>=200000){
   칭호[sender.id] = {'칭호':"📀 금수저"};
 }
 if(원석[sender.id].원석>=500000){
   칭호[sender.id] = {'칭호':"💎 다이아수저"};
 }
 fs.writeFile("./칭호.json",JSON.stringify(칭호), (err)=>{
   if(err) console.log(err)
})
}

 
    if(message.content=='!내정보'){
      if(!원석[sender.id]) return message.lineReplyNoMention("먼저 \"!회원가입\" 명령어로\n아비도스 고등학교에 회원가입을 해주세요!")
      var school_emoji = message.guild.emojis.cache.find(emoji => emoji.name === 'gaydoge')
      message.lineReplyNoMention("```아비도스 고등학교\n📂 "+message.author.username+"\n"+"=".repeat(20)+"\n✧ 칭호 : "+칭호[sender.id].칭호+"\n✦ 원석 : "+원석[sender.id].원석.toFixed(1)+'개\n'+'='.repeat(20)+Lw+"\n💵 내 아이템\n총알 : "+총알[sender.id].총알+"개\n미사일 : "+미사일[sender.id].미사일+"개```");
    }
 
 if(message.content.startsWith("!송금 ")){
   if(!원석[sender.id]) return message.lineReplyNoMention("먼저 \"!회원가입\" 명령어로\n아비도스 고등학교에 회원가입을 해주세요!")
   
   const tested = message.content.substring(4);
   var args = tested.split('/');
   var a_mention = new Discord.MessageEmbed()
         .addField("어라? 송금할 대상이 멘션되지 않았어요!","**!송금 @user_name /(송금할 양)** 형식으로 적어주세요.")
         .setColor("YELLOW")
         if(!message.mentions.members.first()) return message.lineReplyNoMention(`<@${sender.id}>`,{
            embed: a_mention
          })

   test3 = function(num){
  return num >=0;
 };
   
   if(원석[target.id]==undefined){
     return message.lineReplyNoMention("대상의 정보가 없어요...");
   }
   if(isNaN(args[1])){
    return message.lineReplyNoMention("숫자를 적어주세요...");
   }
   if(!test3(args[1])){
    return message.lineReplyNoMention("양수를 적어주세요...");
   }
   if(원석[sender.id].원석 < args[1]){
      return message.lineReplyNoMention("송금할 원석 이(가) 보유한 원석 보다 많아요...");
   }
   var yek = 원석[target.id].원석;
   var testnum = args[1]/20
   var testfixed = testnum.toFixed(1)
   var adk = args[1] -= testfixed
   원석[sender.id].원석 -= Number(args[1]);
   원석[target.id].원석 += Number(adk);
   부과세.부과세 += Number(testfixed)
   message.lineReplyNoMention("```💰 성공적으로 송금을 하였어요!\n✧ (부과세 : "+testfixed+"원석)\n✧ "+yek.toFixed(1)+" 원석 => "+원석[target.id].원석.toFixed(1)+" 원석"+Lw+"\n"+"=".repeat(20)+"\n✦ 현재 내 원석 : "+원석[sender.id].원석.toFixed(1)+"\n✧ 현재 알암금융 : "+부과세.부과세.toFixed(1)+" 원석```")
   fs.writeFile("./원석.json",JSON.stringify(원석), (err)=>{
      if(err) console.log(err)
   })
   fs.writeFile("./부과세.json",JSON.stringify(부과세), (err)=>{
      if(err) console.log(err)
   })
 }
   if(message.content=="!알암금융"){
    message.channel.send("```💵 현재 알암금융 정보\n✦ 원석 : "+부과세.부과세.toFixed(1)+" 개```");
   }
   if(message.content.startsWith("!구매 ")){
   if(!원석[sender.id]) return message.lineReplyNoMention("먼저 \"!회원가입\" 명령어로\n아비도스 고등학교에 회원가입을 해주세요!")
   
   const testedd1 = message.content.slice(4);
   var args_구매 = testedd1.split('/');
   var 구매_임니다 = message.content.slice(4).split("/"+args_구매[1])[0];
   var 구매_곱하기 = args_구매[1]*3
   var 원석3 = 원석[sender.id].원석
   var 구매_error1 = 구매_곱하기-=원석3
   var 목록 = ["총알","미사일"]
   test4 = function(num){
      return num >=0;
     };
      
   if(!목록.includes(구매_임니다)){
       message.channel.send(구매_임니다)
      return message.lineReplyNoMention("해당물건을 못찾았어요...");
      }
      if(isNaN(args_구매[1])){
       return message.lineReplyNoMention("숫자를 적어주세요...");
      }
      if(!test4(args_구매[1])){
       return message.lineReplyNoMention("양수를 적어주세요...");
      }
      if(원석[sender.id].원석 < 구매_곱하기){
         return message.lineReplyNoMention(구매_error1+" 원석이 부족해요...\n현재 원석 : "+원석[sender.id].원석+" 개");
      }
      var lsk = 0
      if(구매_임니다 == "총알"){
       lsk = 5
      } else if(구매_임니다 == "미사일"){
       lsk = 1500
      }
      
      원석[sender.id].원석 -= Number(args_구매[1]*lsk);
      if(구매_임니다 == "총알"){
      총알[sender.id].총알 += Number(args_구매[1]);
      }else if(구매_임니다 == "미사일"){
        미사일[sender.id].미사일 += Number(args_구매[1]);
      }
      message.lineReplyNoMention("```✧ 구매성공!\n+"+args_구매[1]+" "+구매_임니다+"```")
      fs.writeFile("./원석.json",JSON.stringify(원석), (err)=>{
         if(err) console.log(err)
      })
  fs.writeFile("./총알.json",JSON.stringify(총알), (err)=>{
   if(err) console.log(err)
})
fs.writeFile("./미사일.json",JSON.stringify(미사일), (err)=>{
   if(err) console.log(err)
})  
   
   } 
 선넘 = function(num){
  return num >=0;
 };
 if(원석[sender.id]){
 if(!선넘(원석[sender.id].원석)){
   
   var kkk = 원석[sender.id].원석;
   원석[sender.id].원석-=kkk;
   fs.writeFile("./원석.json",JSON.stringify(원석), (err)=>{
   if(err) console.log(err)
})
   }
}
 if(message.content.startsWith("!정보 ")){
   const tested_정보 = message.content.substring(4);
   var a_mention1 = new Discord.MessageEmbed()
   .addField("어라? 송금할 대상이 멘션되지 않았어요!","**!정보 @user_name** 형식으로 적어주세요.")
   .setColor("YELLOW")
   if(!message.mentions.members.first()) return message.channel.send(`<@${sender.id}>`,{
      embed: a_mention1
   })
   if(원석[target.id]==undefined){
      return message.lineReplyNoMention("대상의 정보가 없어요...");
    }
    message.channel.send(`<@${target.id}>`)
    message.channel.send("```"+"=".repeat(20)+"\n✦ 원석 : "+원석[target.id].원석+" 개```")
 }
   if(message.content.startsWith("!공격 ")){
   if(!원석[sender.id]) return message.lineReplyNoMention("먼저 \"!회원가입\" 명령어로\n아비도스 고등학교에 회원가입을 해주세요!")
   
   const tested_공격 = message.content.substring(4);
   var args_무기 = tested_공격.split('/')
   var args_공격 = tested_공격.split('[');
   var 무기이름 = args_무기[1].split("["+args_공격[1])[0];
   var 무기이름1 = 무기이름.split("]")[0]
   var 공격1 = args_공격[1].split("]")[0]
   var a_mention1 = new Discord.MessageEmbed()
   .addField("어라? 공격할 대상이 멘션되지 않았어요!","**!공격 @user_name /(공격할 총알수)** 형식으로 적어주세요.")
   .setColor("YELLOW")
   if(!message.mentions.members.first()) return message.lineReplyNoMention(`<@${sender.id}>`,{
      embed: a_mention1
   })
 
   test5 = function(num){
  return num >=0;
 };
   if(원석[target.id]==undefined){
      return message.lineReplyNoMention("대상의 정보가 없어요...");
    }
   if(isNaN(공격1)){
     return message.lineReplyNoMention("숫자를 적어주세요...");
   }
   if(!test5(공격1)){
     return message.lineReplyNoMention("양수를 적어주세요...");
   }
   if(무기이름 == "총알"){
      if(총알[sender.id].총알 < 공격1){
         return message.lineReplyNoMention("현재 "+무기이름+"보다 지정한 "+무기이름+"이(가) 더 많아요...")
      }
      }else if(무기이름 == "미사일"){
        if(미사일[sender.id].미사일 < 공격1){
         return message.lineReplyNoMention("현재 "+무기이름+"보다 지정한 "+무기이름+"이(가) 더 많아요...")
      }
   }
   if(원석[target.id].원석 < args_공격[1]){
     return message.channel.send("공격할 무기수가 상대방의 원석수보다 많아요...\n\n설마 "+`<@${target.id}>`+" 님을 빚쟁이로 만드실 생각이에요...?")
   }

   if(무기이름 == "총알"){
      var tek = Math.floor(Math.random()*5)+2;
      내뇨1 = 공격1*tek;
         내뇨 = 내뇨1.toFixed(1);
         lsk1 = Math.floor(Math.random()*12)+5;
     testnum1 = 내뇨/20
     testfixed1 = testnum1.toFixed(1)
     부과세.부과세 += Number(testfixed1);
         총알[sender.id].총알 -= Number(공격1);
     내뇨22 = lsk1*공격1;
     내뉴 = 내뇨22-=testfixed1
     원석[target.id].원석 -= Number(내뉴);
     message.channel.send("타타ㅏ타타탕");
     message.channel.send("```🔫 "+공격1+" 총알을 소모해\n"+내뇨+" 피해를 입혔어요!\n"+"=".repeat(20)+"\n✦ -"+내뇨22+" 원석(대상)\n✧ (부과세 : "+testfixed1+" 원석)```")

   }else if (무기이름 == "미사일"){
      var tek1 = Math.floor(Math.random()*5000)+3000;
      내뇨1 = 공격1*tek1;
      내뇨 = 내뇨1.toFixed(1);
      lsk2 = Math.floor(Math.random()*3000)+2000;
      testnum1 = 내뇨/20
  testfixed1 = testnum1.toFixed(1)
  부과세.부과세 += Number(testfixed1);
      미사일[sender.id].미사일 -= Number(공격1);
  내뇨22 = lsk2*공격1;
  내뉴 = 내뇨22-=testfixed1
  원석[target.id].원석 -= Number(내뉴);
  message.channel.send("퍼퍼퍼ㅓㅍ펑");
  message.channel.send("```🔫 "+공격1+" 미사일을 소모해\n"+내뇨+" 피해를 입혔어요!\n"+"=".repeat(20)+"\n✦ -"+내뇨22+" 원석(대상)\n✧ (부과세 : "+testfixed1+" 원석)```")

   }
   fs.writeFile("./원석.json",JSON.stringify(원석), (err)=>{
      if(err) console.log(err)
   })
   fs.writeFile("./부과세.json",JSON.stringify(부과세), (err)=>{
      if(err) console.log(err)
   })
   fs.writeFile("./총알.json",JSON.stringify(총알), (err)=>{
      if(err) console.log(err)
   })  
   fs.writeFile("./미사일.json",JSON.stringify(미사일), (err)=>{
      if(err) console.log(err)
   })  
}
