class Robot {
    constructor(name, faction){
    this.name = name;
    this.faction = faction;
    this.power = 1000;
    this.toughness = this.power * 2;
    }

greet(){
    return 'Hi, I am Optimus Prime!';

}
  get robotName (){
    return this.name;
  }
  
  get Power() {
   return this.power;  
  }
  get Toughness(){
    return this.toughness;
  }
  set Toughness (toughness){
    this.toughness = toughness;
  }
    
  set Power (power) {
    if ( power > 0 ){
      this.power = power;
      
    }
      }
  }
    
    class OptimusPrime extends Robot{
      constructor(name, faction){
        super(name, faction);
      }
      greet(){
        return 'I am Optimus Prime!';
      }
      
      taunt(){
        return 'It is Prime Time Baby!';
        
      }
    }
      class Megatron extends Robot{
        constructor(name, faction){
          super(name, faction);
        }
        greet(){
          return 'I am Megatron!';
        }
        
        taunt(){
          return 'Megatron Smash!';
        }
      }
    
  
let megatron = new Megatron('Megatron', 'Autobots');
let optimus = new OptimusPrime('OptimusPrime', 'Autobots');
  console.log(optimus.taunt());
  console.log(optimus.greet());
  optimus.Power = 10;
  console.log(optimus.Toughness);
  console.log(megatron.Toughness);
  console.log(megatron.taunt());
  console.log(megatron.greet());


// look up object define properties