// simple Square Class
class Square {
  constructor(side) {
    this.side = side
  }
  area() {
    return this.side * this.side
  }
}
let mySquare = new Square(10)

console.log(mySquare.area())
// *****************************************************************************************
// Date Formatter
class DateFormatter extends Date {
  getFormattedDate() {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    return `${this.getDate()} ${months[this.getMonth()]} ${this.getFullYear()}`
  }
}

console.log(new DateFormatter('Aug 18, 1996 23:21:30+5').getFormattedDate())

// *****************************************************************************************
// ## Syntax
class ClassWithPrivateField {
  #privateField
}

class ClassWithPrivateMethod {
  #privateMethod() {
    return 'hello world'
  }
}

class ClassWithPrivateStaticField {
  static #PRIVATE_STATIC_FIELD
}

class ClassWithPrivateStaticMethod {
  static #privateStaticMethod() {
    return 'hello world'
  }
}

// *****************************************************************************************

// private Class
class ClassWithPrivateAccessor {
  #message

  get #decoratedMessage() {
    return `🎬${this.#message}🛑`
  }
  set #decoratedMessage(msg) {
    this.#message = msg
  }

  constructor() {
    this.#decoratedMessage = 'hello world'
    console.log(this.#decoratedMessage)
  }
}

new ClassWithPrivateAccessor()
// *****************************************************************************************
// private static method
class ClassWithPrivateStaticMethod {
  static #privateStaticMethod() {
    return 42
  }

  static publicStaticMethod1() {
    return ClassWithPrivateStaticMethod.#privateStaticMethod()
  }

  static publicStaticMethod2() {
    return this.#privateStaticMethod()
  }
}

console.log(ClassWithPrivateStaticMethod.publicStaticMethod1() === 42)
console.log(ClassWithPrivateStaticMethod.publicStaticMethod2() === 42)

let instance = new Base()
// Neither static methods nor static properties can be called on instances of the class. Instead, they're called on the class itself.
console.log(instance.publicStaticMethod1)

// *****************************************************************************************
// private static method with 'this' keyword in the method, causes TypeError, bcz 'this' refers to the Derived class not to the base class

class Base {
  static #privateStaticMethod() {
    return 42
  }
  static publicStaticMethod1() {
    return Base.#privateStaticMethod()
  }
  static publicStaticMethod2() {
    return this.#privateStaticMethod()
  }
}

class Derived extends Base {}

console.log(Derived.publicStaticMethod1())
// 42
console.log(Derived.publicStaticMethod2())
// TypeError: Cannot read private member #privateStaticMethod
// from an object whose class did not declare it
// *****************************************************************************************
//s## Syntax
class ClassWithInstanceField {
  instanceField = 'instance field'
}

class ClassWithStaticField {
  static staticField = 'static field'
}

class ClassWithPublicInstanceMethod {
  publicMethod() {
    return 'hello world'
  }
}
// *****************************************************************************************

// Static Syntax
static methodName() { /* ... */ }
static propertyName [= value];

// Class static initialization block
static {

}
// *****************************************************************************************
// Static methods are often utility functions, such as functions to create or clone objects, whereas static properties are useful for caches, fixed-configuration, or any other data you don't need to be replicated across instances.
class ClassWithStaticMethod {
  static staticProperty = 'someValue'
  static staticMethod() {
    return 'static method has been called.'
  }
}

console.log(ClassWithStaticMethod.staticProperty)
// output: "someValue"
console.log(ClassWithStaticMethod.staticMethod())
// output: "static method has been called."
// *****************************************************************************************
class Triple {
  static customName = 'Tripler'
  static description = 'I triple any number you provide'
  static calculate(n = 1) {
    return n * 3
  }
}

class SquaredTriple extends Triple {
  static longDescription
  static description = 'I square the triple of any number you provide'
  static calculate(n) {
    return super.calculate(n) * super.calculate(n)
  }
}

console.log(Triple.description) // 'I triple any number you provide'
console.log(Triple.calculate()) // 3
console.log(Triple.calculate(6)) // 18

const tp = new Triple()

console.log(SquaredTriple.calculate(3)) // 81 (not affected by parent's instantiation)
console.log(SquaredTriple.description) // 'I square the triple of any number you provide'
console.log(SquaredTriple.longDescription) // undefined
console.log(SquaredTriple.customName) // 'Tripler'

// This throws because calculate() is a static member, not an instance member.
console.log(tp.calculate()) // 'tp.calculate is not a function'

// *****************************************************************************************
// In order to call a static method or property within another static method of the same class, you can use the this keyword.

class StaticMethodCall {
  static staticProperty = 'static property'
  static staticMethod() {
    return 'Static method and ' + this.staticProperty + ' has been called'
  }
  static anotherStaticMethod() {
    return this.staticMethod() + ' from another static method'
  }
}
StaticMethodCall.staticMethod()
// 'Static method and static property has been called'

StaticMethodCall.anotherStaticMethod()
// 'Static method and static property has been called from another static method'

// *****************************************************************************************
// Static members are not directly accessible using the this keyword from non-static methods. You need to call them using the class name: CLASSNAME.STATIC_METHOD_NAME() / CLASSNAME.STATIC_PROPERTY_NAME or by calling the method as a property of the constructor: this.constructor.STATIC_METHOD_NAME() / this.constructor.STATIC_PROPERTY_NAME

class StaticMethodCall {
  constructor() {
    console.log(StaticMethodCall.staticProperty) // 'static property'
    console.log(this.constructor.staticProperty) // 'static property'
    console.log(StaticMethodCall.staticMethod()) // 'static method has been called.'
    console.log(this.constructor.staticMethod()) // 'static method has been called.'
  }

  static staticProperty = 'static property'
  static staticMethod() {
    return 'static method has been called.'
  }
}

// *****************************************************************************************
