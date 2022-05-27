# Design Patterns

## `Singleton design pattern`
The singleton pattern limits the number of instances of a particular object to only one, which means there will be one and only one instances of that object.
    
### `Using Singleton`
Singleton are useful in situations where system-wide actions need to be coordinated from a single central point/place. (e.g) A database connection pool. the pool manages the creation, destruction, and lifetime of a all database connections for the entire application ensuring that no connections are lost.

singleton reduce the need of global variables because it limits the namespace population and risk of name collisions.

    * singleton defines getInstances() which return unique instance
    * singleton is responsible for creating and managing the instance object

