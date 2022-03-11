//Class: 붕어빵 만드느 틀
// - template
// - declared once
// - no data

//Object: 붕어빵
// - instance of a class
// - create many times
// - data in

'use strict';
// Object-oriendted programming
// class: template
// object: instance of a class
// JavaScript classes
//  - introduced in ES6
//  - syntactical sugar over prototype-based inheritance

// 1. Class declarations
class Person {
    // constructor
    constructor(name, age) {
      // fields
      this.name = name;
      this.age = age;
    }
  
    // methods
    speak() {
      console.log(`${this.name}: hello!`);
     //생성된 object = this
    }
  }

  const ellie = new Person('ellie', 20);
  console.log(ellie.name);
  console.log(ellie.age);
  ellie.speak();

// 2. Getter and setters
// 사용자가 이상하게 사용해도, 값을 수정시킴으로써 
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get age() {
  //get을 정의하는 순간 위에 있는 this.age는 age의 값을 할당하지 않고,
  //get age(를 호출하게 됨)
    return this._age;
  }

  set age(value) {
  //set을 정의하는 순간 위에 있는 age는 바로 할당되지 않고,
  //set age를 호출하게 된다.


    // if (value < 0) {
    //   throw Error('age can not be negative');
    // }
    this._age = value < 0 ? 0 : value;
  }
}

const user1 = new User('Steve', 'Job', 30);
console.log(user1.age);


// 5. Inheritance
// a way for one class to extend another class.
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
  
// Shape에 있는 Class를 상속받음
class Rectangle extends Shape {} 

//부모 클래스에서 바꾸고 싶으면 Overriding 가능 
class Triangle extends Shape {

draw() {
    super.draw(); // Overriding 했지만, 부모의 것도 받고싶은 경우
    console.log('🔺');
}
getArea() {
    return (this.width * this.height) / 2;
}

toString() {
    return `Triangle: color: ${this.color}`;
}
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle); // Yes
console.log(triangle instanceof Rectangle); // No
console.log(triangle instanceof Triangle); // Yes
console.log(triangle instanceof Shape); // Yes
console.log(triangle instanceof Object); // 자바스크립트가 만든 모든 Class들은 Object를 상속
console.log(triangle.toString());

let obj = { value: 5 };
function change(value) {
  value.value = 7;
}
change(obj);
console.log(obj);