var Bee = function() {

Function bee() {
Grub.call(this);
This.age = 5;
this.color = “yellow”;
This.job = “keep on growing”;

} // boilerplate ceremonial  methods 
Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;


Const bee = new Bee();
console.log(bee.constructor);

Class Grub { 
constructor() {
This.age = 0;
This.color = “pink”;
This.food = “jelly”

}

eat(){
Return “eating food”;

}

Class Bee extends Grub {
Grub.call(this);
This.age = 5;
this.color = “yellow”;
This.job = “keep on growing”;

}

Const Bee = new Bee();
console.log(bee.eat());
];