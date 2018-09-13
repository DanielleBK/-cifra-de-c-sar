var value = prompt('Qual o Numero do seu cartão')
 // card number
	var cardNum = "value";
	// get the last number
	var cardLastNum 	= parseInt(cardNum.substr(cardNum.length - 1));
	// remove the last number
	var cardNumMin 		= cardNum.slice(0,-1)
	// reverse
	var cardNumReverse 	= cardNumMin.split("").reverse().join("");
	// set to array
	var cardNumArray 	= cardNumReverse.split("");
 
	// for each odd number multiply
	var a = 2;
	var cardNumOdsMultiplied = [];
	for (var i = 0; i < cardNumArray.length; i++) {
		if (a%2 == 0){
			var temp = cardNumArray[i]*2;
			// if the number is greater than 9 substract by 9
			if (temp > 9){
				var temp = (temp -9);
			}
			cardNumOdsMultiplied.push(temp);
		}else{
			cardNumOdsMultiplied.push(parseInt(cardNumArray[i]));
		}
 
		a++;
	}
 
	var cardNumTelly = 0;
	for (var i = 0; i < cardNumOdsMultiplied.length; i++) {
    cardNumTelly += cardNumOdsMultiplied[i];
	}
 
	cardNumTelly = cardNumTelly + cardLastNum;
 
	if (cardNumTelly%10 == 0){
		// number is a valid card number
		console.log("Valid");
	}else{
		// number is not valid
		console.log("not valid");
	}


//refactor Jquery

// 	function checkCard($card){
// 		var c = $card;
// 		var cl = parseInt(c.substr(c.length - 1));
// 		var c = c.slice(0,-1)
// 		var c = c.split("").reverse().join("");
// 		var c = c.split("");
// 		var a = 2;
// 		var cm = [];
// 		for (var i = 0; i < c.length; i++){
// 			if (a%2 == 0){var t = c[i]*2;
// 			if (t > 9){var t = (t -9);}
// 			cm.push(t);
// 			}else{cm.push(parseInt(c[i]));}
// 			a++;
// 		}
// 		var f = 0;
// 		for (var i = 0; i < cm.length; i++) {f += cm[i];}
// 		f = f + cl;
// 		if (f%10 == 0){return true;}else{return false;}
// 	}
 
// 	var result = checkCard("6011177131977068");
 
// 	if (result==true){
// 	// write your own rules if true
// 	console.log("all ok");
// 	}else{
// 	// write your own rules if false
// 	console.log("not ok");
// 	}
