const combos = {
    '2': ['a', 'b', 'c'], '3': ['d', 'e', 'f'], '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'], '6': ['m', 'n', 'o'], '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'], '9': ['w', 'x', 'y', 'z']
}

function posibleCombo(input) {
    if (typeof input !== 'string') return 'Invalid input';
    if (input.length > 2) return 'Invalid length';

    let letters = input.split('');
    let hasWrongKeys = letters.some(letter => letter in combos ? false : true);

    if (hasWrongKeys) return 'Invalid key(s) found! Only 2-9 allowed';

    let result = [];

    combos[letters[0]].forEach(element => {
        if (letters[1]) {
            return combos[letters[1]].forEach(element2 => {
                result.push(element + element2);
            })
        }

        result.push(element);
    })

    return result.join(', ');
}

let result = posibleCombo('93');
console.log(result);