# Design Patterns

# Creational Patterns
## `Singleton design pattern`
The singleton pattern limits the number of instances of a particular object to only one, which means there will be one and only one instances of that object.
    
### `Using Singleton`
Singleton are useful in situations where system-wide actions need to be coordinated from a single central point/place. (e.g) A database connection pool. the pool manages the creation, destruction, and lifetime of a all database connections for the entire application ensuring that no connections are lost.

singleton reduce the need of global variables because it limits the namespace population and risk of name collisions.

    * singleton defines getInstances() which return unique instance
    * singleton is responsible for creating and managing the instance object

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

The `Singleton` object is created as an immediate anonyms function, this  function executes immediately.

the `getInstance` method is a `Singleton's gatekeeper`, which return one and only one instance of the object, while maintaining private reference to it which is not accessible outside the function.

The getInstance method demonstrates another design pattern called Lazy Load. Lazy Load checks if an instance has already been created; if not, it creates one and stores it for future reference. All subsequent calls will receive the stored instance. Lazy loading is a CPU and memory saving technique by creating objects only when absolutely necessary.

Singleton is a manifestation of a common javascript pattern `the Module`.

---
---

##