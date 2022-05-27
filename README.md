# Design Patterns

# Creational Patterns
## `Singleton design pattern`
The singleton pattern limits the number of instances of a particular object to only one, which means there will be one and only one instances of that object.
    
### `Using Singleton`
Singleton are useful in situations where system-wide actions need to be coordinated from a single central point/place. (e.g) A database connection pool. the pool manages the creation, destruction, and lifetime of a all database connections for the entire application ensuring that no connections are lost.

singleton reduce the need of global variables because it limits the namespace population and risk of name collisions.


```js
const Singleton = (() => {
  let instance

  const createInstance = () => {
    let object = new Object('this is an instance')
    return object
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance()
      }
      return instance
    }
  }
})()

const run = () => {
  let inst1 = Singleton.getInstance()
  let inst2 = Singleton.getInstance()

  console.log(`same Instance ? ${inst1 === inst2}`)
}

run()
```


    * singleton defines getInstances() which return unique instance
    * singleton is responsible for creating and managing the instance object

The `Singleton` object is created as an immediate anonyms function, this  function executes immediately.

the `getInstance` method is a `Singleton's gatekeeper`, which return one and only one instance of the object, while maintaining private reference to it which is not accessible outside the function.

The getInstance method demonstrates another design pattern called Lazy Load. Lazy Load checks if an instance has already been created; if not, it creates one and stores it for future reference. All subsequent calls will receive the stored instance. Lazy loading is a CPU and memory saving technique by creating objects only when absolutely necessary.

Singleton is a manifestation of a common javascript pattern `the Module`.

---
---

## `Prototype Design Pattern`
The `Prototype Pattern` creates new objects, but rather than creating non-initialized objects it returns objects that are initialized with values it copied from a prototype - or example - object. The Prototype pattern is also referred to as the `Properties pattern`.

### `Using Prototype`

An example of where the Prototype pattern is useful is the initialization of business objects with values that match the default values in the database. the Prototype object holds the default values that are copied over into a newly created object.

Classical languages rarely use the Prototype pattern, but JavaScript being a prototypal language uses this pattern in the construction of new objects and their prototypes.

```js
function CustomerPrototype(proto) {
  this.proto = proto

  this.clone = () => {
    let customer = new Customer()
    customer.first = proto.first
    customer.last = proto.last
    customer.status = proto.status

    return customer
  }
}

function Customer(first, last, status) {
  this.first = first
  this.last = last
  this.status = status

  this.say = () => {
    console.log(`name: ${this.first} ${this.last}, status : ${this.status}`)
  }
}

function run() {
  let proto = new Customer('haris', 'ahmad', 'success')
  let prototype = new CustomerPrototype(proto)

  let customer = prototype.clone()
  customer.say()
}

run()

```

    * Client -- in code `run()` function.
      * it creates a new object by asking a prototype to clone itself
    * Prototype -- in code `CustomerPrototype(proto)` function.
      * creates an interface to clone itself
    * Clones -- in code `Customer` function.
      * the cloned object that are being created by the prototype

In the example code we have a CustomerPrototype object that clones objects given a prototype object. Its constructor function accepts a prototype of type Customer. Calling the clone method will generate a new Customer object with its property values initialized with the prototype values.

---
---

## `Factory Pattern`

A `Factory Method` creates new object as instructed by the client. one way to create to create the object in javascript is by invoking the constructor function with the new operator. there are situation where the client doesn't or shouldn't  know which one of the several object has to be instantiated. the factory method allows the client to delegate object creation while still retaining the control over which type of instantiate.

### `Using Factory method`

the key objective of Factory method is extensibility. factory methods are frequently used in applications that manages, maintain or manipulate collection of objects that are different but at the same time have many characteristics in common.




