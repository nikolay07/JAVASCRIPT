let age = 19;
let amount = 16;

if (true) console.log('I\'m in');

if (false) {
    console.log('I\'m not in');
}

if ('text') {
    console.log('Yes');
}

if (null) {
    console.log('Yes');
} else {
    console.log('Else');
}


if (age < 16) {
    console.log('Too young');
} else if (age >= 16 && age < 18) {
    console.log('Almost ready');
} else if (age >= 18 && age < 65) {
    console.log('Ready');
} else {
    console.log('Else');
}

// Тернаный оператор ? : ( const result = условие ? значение1 : значение2; )

const result = amount > 17 ? 'full' : 'empty';