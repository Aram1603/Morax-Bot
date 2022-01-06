if(message.content.startsWith("몰?루")){
 		if(sender.id != 604242053613748254) return;
 		const mollu = client.emojis.cache.find(emoji => emoji.name === "mollu");
 		message.channel.send(`${mollu}`);
 	}
