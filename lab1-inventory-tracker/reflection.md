# Reflection

## How does TypeScript enforce type safety in this object-oriented program?

In this lab, TypeScript helped enforce type safety by making sure each class, property, and method followed the correct data types. For example, product prices, weights, and file sizes were all defined as numbers, so TypeScript could catch mistakes if I accidentally used a string instead. It also checked method return types, which made the program more reliable and easier to debug. Since the classes were clearly typed, I could work with confidence knowing that invalid values or missing methods would often be caught during compilation instead of at runtime.

## How did inheritance reduce code duplication for PhysicalProduct and DigitalProduct?

Inheritance reduced code duplication by allowing `PhysicalProduct` and `DigitalProduct` to reuse the common properties and behavior from the `Product` class. Both product types share `sku`, `name`, and `price`, so it would have been repetitive to rewrite those properties and the constructor in every class. By extending `Product`, each subclass only needed to add its own unique property, such as `weight` or `fileSize`, and override methods where necessary. This made the code cleaner and easier to maintain.

## What are the benefits of using encapsulation and access modifiers (public, private, protected) in this context?

Encapsulation and access modifiers were also very useful in this project. Using `protected` for shared properties allowed subclasses to access them while still preventing outside code from changing them directly. Using `private` for subclass-specific fields, such as `_weight` and `_fileSize`, protected those values from being modified in unsafe ways. The `public` methods provided a controlled way to interact with the objects. This made the design more organized and helped keep each class responsible for managing its own data.

## If you had to add a new type of product (e.g., a SubscriptionProduct), how would polymorphism make this extension straightforward?

If I needed to add a new product type like `SubscriptionProduct`, polymorphism would make the process straightforward. I could create a new class that extends `Product` and implement its own versions of methods like `displayDetails()` or `getPriceWithTax()`. Then I could still store it in a `Product[]` array and use it the same way as the other products. This shows how polymorphism makes the program easier to extend without changing existing code too much.

## How did abstraction through an abstract class and an interface improve the design of this program?

Abstraction improved the design of this program by defining common structure and behavior without requiring every detail to be written in the same place. By making `Product` an abstract class, I could put shared properties like `sku`, `name`, and `price` in one parent class while requiring subclasses to provide their own implementation of methods like `getPriceWithTax()`. This made the design more organized because the base class defined what all products have in common, while each subclass handled its own specific behavior. The `DiscountableProduct` interface also showed abstraction in a different way. It defined a contract for any product class that should support discounts without being tied to one specific class hierarchy. This made the code more flexible, because a class could implement the discount behavior as long as it followed the method signature. Overall, abstraction helped separate general rules from specific implementations, which made the program easier to understand, extend, and maintain.
