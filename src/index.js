module.exports = function toReadable (number) {
    const single = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine','ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen','seventeen', 'eighteen', 'nineteen'];
    const tens = ['', '' ,'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety' ];

    if(number === 0){
        return 'zero';
    } 
    if(number > 0 && number < 20){
        return single[number];
    } else if ( number >= 20 && number < 100){
        const result =  tens[(number - number % 10)/10] + ' ' + single[number%10];
        return result.trim();
    }else if(number >= 100 && number < 1000){
        if((number % 100) < 20){
            const result =  single[(number - number % 100)/100] + ' hundred ' + single[number%100];
            return result.trim();
        } else if((number % 100) >= 20){
            const result =  single[(number - number % 100)/100] + ' hundred ' + tens[(number % 100 - number % 10)/10] + ' ' + single[number%10];
            return result.trim();
        }
    } else return 'not a number'
}   
