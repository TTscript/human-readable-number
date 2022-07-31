module.exports = function toReadable(number) {
    const units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const tens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    const wholeTens = ['wholeTensZero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    const hundreds = ['hundredsZero', 'one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred']

    const numberStr = number.toString();

    if (numberStr.length === 1) {
        console.log(units[number]);
        return units[number];
    } else if (numberStr.length === 2) {
        if ([...numberStr][0] === '1') {
            console.log(tens[parseInt([...numberStr][1])]);
            return tens[parseInt([...numberStr][1])];
        } else if (parseInt([...numberStr][0], 10) > 1) {
            if (parseInt([...numberStr][1], 10) === 0) {
                console.log(wholeTens[parseInt([...numberStr][0])]);
                return wholeTens[parseInt([...numberStr][0])];
            }
            console.log(`${wholeTens[parseInt([...numberStr][0])]} ${units[parseInt([...numberStr][1])]}`);
            return `${wholeTens[parseInt([...numberStr][0])]} ${units[parseInt([...numberStr][1])]}`;
        }
    } else if (numberStr.length === 3) {
        if (parseInt([...numberStr][0], 10) > 0) {
            if (parseInt([...numberStr][1], 10) === 0 && parseInt([...numberStr][2], 10) === 0) {
                console.log(hundreds[parseInt([...numberStr][0])]);
                return hundreds[parseInt([...numberStr][0])];
            } else if (parseInt([...numberStr][1], 10) === 1) {
                console.log(`${hundreds[parseInt([...numberStr][0])]} ${tens[parseInt([...numberStr][2])]}`);
                return `${hundreds[parseInt([...numberStr][0])]} ${tens[parseInt([...numberStr][2])]}`;
            } else if (parseInt([...numberStr][1], 10) > 1 && parseInt([...numberStr][2], 10) === 0) {
                console.log(`${hundreds[parseInt([...numberStr][0])]} ${wholeTens[parseInt([...numberStr][1])]}`);
                return `${hundreds[parseInt([...numberStr][0])]} ${wholeTens[parseInt([...numberStr][1])]}`;
            } else if (parseInt([...numberStr][1], 10) === 0) {
                console.log(`${hundreds[parseInt([...numberStr][0])]} ${units[parseInt([...numberStr][2])]}`);
                return `${hundreds[parseInt([...numberStr][0])]} ${units[parseInt([...numberStr][2])]}`;
            }
            console.log(`${hundreds[parseInt([...numberStr][0])]} ${wholeTens[parseInt([...numberStr][1])]} ${units[parseInt([...numberStr][2])]}`);
            return `${hundreds[parseInt([...numberStr][0])]} ${wholeTens[parseInt([...numberStr][1])]} ${units[parseInt([...numberStr][2])]}`;
        }
    }
}
