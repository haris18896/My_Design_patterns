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
