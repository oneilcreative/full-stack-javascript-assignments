export const greeting = (age = 0) => {
     age > 18 ? 'Hello!' : 'Yo!';

};

export const isTacoTuesdayPlusPlus = (day) => {
  if(day !== 'Tuesday') {
    return 'No';
  }
  
  return 'Yes';
};    
console.log(isTacoTuesday('Tuesday'));

};

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
console.log(isTacoTuesday('Tuesday'));