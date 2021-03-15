module.exports = function toReadable (number) {
    var ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
    'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
    'seventeen', 'eighteen', 'nineteen'];
    var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty',
    'ninety'];

    var numberString = number.toString();

    if (number === 0) return 'zero';

    if (number < 20) {
    return ones[number];
    }

    if (number % 10 === 0 && numberString.length === 2) {
        return tens[numberString[0]]
        
    }
    if (numberString.length === 2) {
    return tens[numberString[0]] + ' ' + ones[numberString[1]];
    }

    if (numberString.length == 3) {
    if (numberString[1] === '0' && numberString[2] === '0')
    return ones[numberString[0]] + ' hundred';
    else
    return ones[numberString[0]] + ' hundred ' + toReadable(+(numberString[1] + numberString[2]));
    }   

}
