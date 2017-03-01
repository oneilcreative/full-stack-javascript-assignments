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
  
  if(day === 'Tuesday') {
    return 'Yes';
  } 
  return 'No';
}

const isEven = (number) => {
  
  const areYouEven = number % 2 === 0; // Expression
  console.log(areYouEven);
  
  if(areYouEven) {
    return "Yes";
  }
  
  return "No";
};

const isWeekend = (day) => {
  switch(day) {
    case 'Monday':
    case 'Tuesday':
    case 'Wednesday':
    case 'Thursday':
    case 'Friday':
      return 'No'; 
  }
  return 'Yes';
}


const isTacoTuesday = (day) => {
    switch(day) {
      case 'Monday':
      case 'Wednesday':
      case 'Thursday':
      case 'Friday':
      case 'Saturday':
      case 'Sunday':
        return 'No'; 
    }
  return 'Yes';
};

const isTacoTuesdayPlusPlus = (day) => {
  if(day !== 'Tuesday') {
    return 'No';
  }
  
  return 'Yes';
};    
console.log(isTacoTuesday('Tuesday'));  // No