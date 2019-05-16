function secondTick() {

    var date = new Date()

    if (date.getHours() == 9 && date.getMinutes() == 0) {
    	
    	if (date.getSeconds() == 0) {
    		KakaoTalk.reply("신혁당", "약속의 9시!")
    	} else if (date.getSeconds() == 5) {
    		var btc = getBTC()
    		var eth = getETH()
			KakaoTalk.reply("신혁당", "현재 시세"+"\n"+"비트코인 : " + btc + "원"+"\n"+"이더리움 : " + eth + "원")
    	}

    } else if (date.getHours() == 12 && date.getSeconds() == 0) {

    	if (date.getMinutes() == 0) {
    		KakaoTalk.reply("신혁당", "밥고")
    	} else if (date.getMinutes() == 30) {
    		KakaoTalk.reply("신혁당", "꺼억")
    	}
    	
    } else if (date.getHours() == 18 && date.getSeconds() == 0) {

    	if (date.getMinutes() == 0) {
    		KakaoTalk.reply("신혁당", "밥고")
    	} else if (date.getMinutes() == 30) {
    		KakaoTalk.reply("신혁당", "꺼억")
    	}
    }
}

function getBTC() {
	var btcData = Utils.getWebText("https://m.search.daum.net/kakao?w=tot&DA=SH1&q=%EB%B9%84%ED%8A%B8%EC%BD%94%EC%9D%B8%20%EC%8B%9C%EC%84%B8%201%EC%9D%BC&rtmaxcoll=EMA")
    btcData = btcData.replace(/(<([^>]+)>)/g, "")
	btcData = btcData.split("비트코인BTC")[1]
	btcData = btcData.split("원")[0].trim()
	return btcData
}

function getETH() {
	var ethData = Utils.getWebText("https://m.search.daum.net/kakao?w=tot&DA=SH1&q=%EC%9D%B4%EB%8D%94%EB%A6%AC%EC%9B%80%20%EC%8B%9C%EC%84%B8%201%EC%9D%BC&rtmaxcoll=EMA")
	ethData = ethData.replace(/(<([^>]+)>)/g, "")
	ethData = ethData.split("이더리움ETH")[1]
	ethData = ethData.split("원")[0].trim()
	return ethData
}