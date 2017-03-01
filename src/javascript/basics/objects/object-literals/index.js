const FACTION = {
    AUTOBOTS: 'autobots',
    DECEPTICONS: 'decepticons'
}

let OptimusPrime = {
    name : "Optimus Prime",
    role: "Leader of the Autobots",
    faction: FACTION.AUTOBOTS,
    power: 1000,
    greet: () => {
        return("Hi, I'm " + OptimusPrime.name);
    } 
};
console.log(OptimusPrime.faction());

