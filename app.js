var value=prompt('Qual o Numero do seu cartão')
var i;
var num;

function isValidCard(value) {
var total = ''
var turn = false,
for (i = 0; i < value.length-1; i++) {
 if (cardNumber.length <13 || value.length >16){
   return false;

    while (i >= 0){
      num = parseInt(value.charAt(i), 10);//para obter o proximo numero
        if(isNaN(num)){
            return false;  //para numero falso
       }if(alt) {
            num *= 2;
        if(num > 9){
            num = (num % 10) + 1;
  }}
  }
		//	alt = !alt;
      total+= num;
      i--;//add to the rest of the sum
    }
    return (total% 10 == 0);
		document.write (return);
}}
