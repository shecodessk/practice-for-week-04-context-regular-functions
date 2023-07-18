function eat() {
  console.log(`${this.name} eats fish food`);
}

class Fish {
  constructor(name) {
    this.name = name;
  }

  swim() {
    console.log(`${this.name} swimming in the water`);
  }
}

const nemo = new Fish('Nemo');

/********************************* Scenario 1 *********************************/
 eat(); // Will throw undefined. In eat(), "this" is referencing to the function's global object, but the name property is not defined under that object.


/********************************* Scenario 2 *********************************/
nemo.eat = eat; //2nd time thoughts: eat() is not a method of a class. So tu use eat(), we need to turn it set it up as a property of our class.
nemo.eat(); 

// Initial attempt: throw an error. eat has a global object this is referring to "nemo" is a instance object of an class Fish.
// 2nd time response: eat() would reference the global object, BUT nemo.eat() is referencing the object instance nemo. therefore, this in eat() is referencing nemo and not an global object anymore.


/********************************* Scenario 3 *********************************/
nemo.eat = eat;
 eat(); //  this will reference the global variable just like scenario one. so it will throw undefined.


/********************************* Scenario 4 *********************************/
nemo.swim(); //  this is referencing the instance object nemo of the class Fish, so calling its method swim() will print this--> nemo object's name (Nemo) swimming in the water.


/********************************* Scenario 5 *********************************/
const swim = nemo.swim;
swim(); //error: it would have worked if you had called it above aloong with nemo.swim.

