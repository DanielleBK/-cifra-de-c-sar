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
		alert("Valid");
	}else{
		// number is not valid
		alert("not valid");
	}


