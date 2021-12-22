	//낚시
			   const embed = new Discord.MessageEmbed()  
		   var 중간 = Math.floor(Math.random()*100)+50
		   var 큼 = Math.floor(Math.random()*1000)+500
		   var 작음 = Math.floor(Math.random()*60)+1
		   var 매우큼 = Math.floor(Math.random()*6000)+1000
		   var 상어크기 = Math.floor(Math.random()*3500)+2500

		   var 시간 = Math.floor(Math.random()*5000)+1000
	   const fish = ["[희귀] 란란루("+중간+"Cm)","[일반] 흰눈 가시고기("+중간+"Cm)","[에픽] 픽뚫각청 ("+매우큼+"Cm)","[에픽] 엔진달린고래 ("+매우큼+"Cm)","[에픽] 고오래 ("+매우큼+"Cm)","[레어] 썰매 ("+큼+"Cm)","[에픽] DIO ("+중간+"Cm)","[에픽] 밥풀이 ("+매우큼+"Cm)","[에픽] 쓴맛 대포복어 ("+상어크기+"Cm)","[레어] 치치 ("+큼+"Cm)","[일반] 다랑어 ("+중간+"Cm)","[일반] 참치 ("+중간+"Cm)","[일반] 희동가리 ("+작음+"Cm)","[일반] 꽁치 ("+작음+"Cm)","[일반] 연어 ("+중간+"Cm)","[일반] 날새기 ("+작음+"Cm)","[희귀] 황금바리 ("+작음+"Cm)","[일반] 고등어 ("+작음+"Cm)","[일반] 가다랑어 ("+작음+"Cm)","[일반] 백다랑어 ("+작음+"Cm)","[일반] 우럭 ("+작음+"Cm)","[일반] 천황돔 ("+작음+"Cm)","[레어] 황금연어 ("+중간+"Cm)","[레어] 황금다랑어 ("+큼+"Cm)","[희귀] 삼치 ("+중간+"Cm)","[희귀] 흑조기 ("+작음+"Cm)"]
		 const 반응 =["쉽지 않군 휴","저도 먹을래요..","(꿀꺽)","아~ 배고파..", "흐으...맛있", "오늘은 운이 좋네?","어라? 페이몬이 물고기를 훔쳐갔어요"]
		const 반응랜덤 = 반응[Math.floor(Math.random() * 반응.length)];
			const a1234 = fish[Math.floor(Math.random() * fish.length)]
		const c = emojis[Math.floor(Math.random() * emojis.length)]
		const g = score[Math.floor(Math.random() * score.length)]
	   const target = message.author
   
	   var embed1 = new Discord.MessageEmbed()
	   .setColor('YELLOW')
	   .setDescription(`<@${message.author.id}>`)
	   .addField("• "+a1234+` 이 (가) 낚였어요!`,"• "+반응랜덤)
	   .setTimestamp()
   
			  //낚시
				if(message.content=="!낚시"){
		message.react("851829611821531187")
		if(호감도[sender.id].호감도 < 180){
				호감도[sender.id].호감도 += 호감도숫자;
				}
		  message.channel.send("종려가 "+낚시대[sender.id].낚시대+" 를 (을) 던졌어요!")
				 .then(msg => {
					 setTimeout(function() {
				   msg.delete({ timeout: 시간 })
				   })
				 })
				 setTimeout(function() {
				   message.channel.send(embed1)
			   }, 시간);
			   fs.writeFile("./호감도.json",JSON.stringify(호감도), (err)=>{
				if(err) console.log(err)
			 })
			   }		 
         //ㅌㅌ
