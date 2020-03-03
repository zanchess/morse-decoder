const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
     /*Первая часть работает с предложениями, вторая с цельной строкой*/
		let arr3 =[]
    if (expr.indexOf('**********') != -1 ) {//проверка на наличие пробелов
			arr = expr.split('**********');//разделить закодированные слова
    	let allExpr = [];//массив из будущих слов предложения
			for (let i = 0; i < arr.length; i++) {
        let arr2 = arr[i].match(/.{1,10}/g); //разделить код по 10 симолов согласно условию (10 симоволов - 1буква)
        let word = ""; //будущее слово входящее в предложение
				for (let j = 0; j < arr2.length; j++) {
					arr3 = arr2[j].match(/.{1,2}/g);//разделение шифра на массив из пар цифр
					let key = ""; //будущий ключ символа
					for (let k = 0; k < arr3.length; k++) { //составление ключа
						if (arr3[k] === "10") {
							key += ".";
						} else if (arr3[k] === "11") {
							key += "-";
						}
					}
					if (MORSE_TABLE.hasOwnProperty(key)) { //составление слова
						word +=`${MORSE_TABLE[key]}`;
					}
				}
        allExpr.push(word); //составление массива из слов предложения
			}
      return allExpr.join(' '); //возврат строки
		} else{
        let arr2 = expr.match(/.{1,10}/g);
        let word = "";
				for (let j = 0; j < arr2.length; j++) {
					let arr3 = arr2[j].match(/.{1,2}/g);
					let key = "";
					for (let k = 0; k < arr3.length; k++) {
						if (arr3[k] === "10") {
							key += ".";
						} else if (arr3[k] === "11") {
							key += "-";
						}
					}
					if (MORSE_TABLE.hasOwnProperty(key)) {
						word +=`${MORSE_TABLE[key]}`;
					}
        }
        return word; 
    }
}

module.exports = {
    decode
}
