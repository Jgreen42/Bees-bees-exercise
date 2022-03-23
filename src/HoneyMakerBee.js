var HoneyMakerBee = function() {
    Function HoneyMakerBee() {
        Grub.call(this);
        This.age = 10;
        this.color = “yellow”;
        This.job = “keep on growing”;
        
        } // boilerplate ceremonial  methods 
        HoneyMakerBee.prototype = Object.create(Grub.prototype);
        HoneyMakerBee.prototype.constructor = HoneyMakerBee;
        
        
        Const HoneyMakerBee = new HoneyMakerBee();
        console.log(HoneyMakerBee.constructor);
        
        Class Grub { 
        constructor() {
        This.age = 0;
        This.color = “pink”;
        This.food = “jelly”
        
        }
        let honeyPot = 0;
        
        makeHoney(){
        Return “Making honey”;
        
        }

            
        
        Class HoneyMakerBee extends Bee {
        Bee.call(this);
        This.age = 5;
        this.color = “yellow”;
        This.job = “keep on growing”;
        
        }
        
        Const HoneyMakerBee = new HoneyMakerBee();
        console.log(HoneyMakerBee.makeHoney());
        ];



// #### HoneyMakerBee
// - [ 1] Create a HoneyMakerBee class, in pseudoclassical style, with:
//   - [1 ] `call` the Bee superclass
//   - [1 ] set the prototype
//   - [ 1] set the constructor
//   - [ 1] an age property that is set to `10`
//   - [ 1] a job property that is set to `make honey`
//   - [1 ] a color property inherited from `bee` that is set to `yellow`
//   - [ ] a food property that is inherited from grub
//   - [ ] an eat method that is inherited from grub
//   - [ ] a `honeyPot` property that is set to `0`
//   - [ ] a `makeHoney` method that adds `1` to that honeyBee\'s honeyPot
//   - [ ] a `giveHoney` method that subtracts `1` from that honeyBee\'s honeyPot