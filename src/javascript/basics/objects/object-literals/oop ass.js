const FACTION = {
    GOOD_GUYS: 'Autobots',
    BAD_GUYS: 'Decepticons',
};
 
class Transformer {
    constructor(name, faction) {
        this.name = name;
        this.faction = faction;
        this.power = 1000;

    }
}
let OptimusPrime = new 
Transformer('Optimus Prime', FACTION.GOOD_GUYS);
console.log(OptimusPrime.name);


class Robot {
  
  constructor(name, faction) {
    this.name = name;
    this.faction = faction;
  }
  
  greet() {
    return `Hello I'm ${this.name}`;
  }
}

/**
*       What is this called? 
*          | 
*          v
*/
const optimusPrime = new Robot('Optimus Prime', 'Autobots');


// What does 'this' actually mean?

/**
*       What is this called? 
*          | 
*          v
*/
const OptimusPrime = {
  name: 'Optimus Prims',
  faction: 'AutoBots',
  greet() {
    // Why is 'this' working in here
    return `Hello I'm ${this.name}`;
  }
}