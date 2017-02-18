export const ssn = value => {

  const sanitize = () => value.replace(/\D+/g, '').toString();

  const format = (value) => `${value.substring(0, 3)}-${value.substring(3, 5)}-${value.substring(5)}`;

   const sanitizedValue = sanitize();

  const isValid = () => {
   
    return sanitizedValue.length === 9;

  };

  return {

    isValid,

    toString(){
      if(!isValid()) {
        throw Error('Invalid SSN');
      }

    
    return format(sanitizedValue);
    }
  };
};

const result = ssn('123-45-6789');
console.log(result.toString());
console.log(result.isValid());



// Why does this work?
export const result = calculate(1,2);

function calculate(x, y) {
  return x + y;
}
