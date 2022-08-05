'user strict';
//Ojbect-oriented programming
//class: template
//object: instance of a class
// JavaScript classes
//  -introduced in ES6
//  -Syntactical sugar over prototype-based inheritance

//1. Class declarations
class Person {
    // constructor
    constructor(name, age) {
        //fields
        this.name = name;
        this.age = age;
    }
    speak() {
        console.log(`${this.name}: hello!`);
    }
}

const yejin = new Person('yejin', 23);
console.log(yejin.name);
console.log(yejin.age);
yejin.speak();

//2. Getter and setters
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age() {
        return this._age;
    }
    set age(value) {
        this._age = value;
    }
}

const user1 = new User('Stece', 'Job', -1);
console.log(user1.age);


//4. Static properties and methods
//Too soon!
class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }
    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher)
Article.printPublisher();

//5. Inheritance
//a way for one class to extend another class.
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    draw() {
        console.log(`drawing ${this.color} color!`);
    }
    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {

}
class Triangle extends Shape {
    getArea() {
        return (this.width * this.height) / 2;
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());