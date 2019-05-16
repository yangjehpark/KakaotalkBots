function response(room, msg, sender, isGroupChat, replier, imageDB) {
	
	if (isGroupChat == true) {
		if (room == "신혁당") {
    		var isInsult = checkInsultion(msg)
			if (isInsult == true) {
				replier.reply(sender+"님! 욕하시면 안됩니다!")	
			}
		}    

		if (room == "test") {
			if (msg.includes("브리핑") && msg.length > 100) {
				KakaoTalk.reply("test", msg);
			}	
		}

	} else {

		var isInsult = checkInsultion(msg)
		if (isInsult == true) {
			replier.reply("ㅋ")	
		}
	}
}

function checkInsultion(msg) {
	var slangArray = ["시발", "씨발", "씨빨", "시잘", "병신", "새끼", "븅신", "지랄", "씨바", "개년", "개놈", "멍청"];
	for (var i in slangArray) {
		if (msg.includes(slangArray[i])) {
			return true
		}
	}
	return false
}