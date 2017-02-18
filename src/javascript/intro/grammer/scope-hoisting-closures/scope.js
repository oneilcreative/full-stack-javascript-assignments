let myName = 'mark oneil';
let age = 41;
let address = '585 ann street';

let nameSplitter = (myName) => {
    let nameArray = name.split(' ');
    return nameArray;
}

let addressSplitter = (address) => {
    if (address === undefined) {
        let name = 'Blake';
    }
    console.log(name);
}

  console.log(nameSplitter(myName));

  console.log(addressSplitter('blake'));







const calc = () => {
    const add = (a, b) => {
        return a + b;
    };
    const subtract = (a, b) => {
        return a - b;
    };
    const multiply = (a, b) => {
        return a * b;
    };
    return {
        add,
        subtract

    };
}

const calculator = calc();
console.log(calculator.add(7,3));
console.log(calculator.subtract(7,3));
console.log(calculator.multiply(7,3));

const isTuesday = (day) => {
    if(day === 'Teusday'){
        return 'Yes';
    } else {
        return 'No';

    }


}

console.log(isTuesday ('Teusday'));

const isWeekend = (day) => {
    if(day === 'Monday') {
        return 'no';
    }
};

const isTacoTeusday = (day) => {
    switch (day) {
        case 'Monday':
        case 'Wendsday':
        case 'Thursday':
        case 'Friday':
        case 'Saturday':
        case 'Sunday':
    return 'no';
    }
    return 'yes';
}
console.log(isTacoTeusday('Friday'));

const isTacoTeusday = (day) => {
    if(day !== 'Teusday') {
        return 'no';
    }
    return 'yes';
}

