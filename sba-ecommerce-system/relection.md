# Reflection

## TypeScript and OOP

In this project, I applied several core TypeScript features and object-oriented programming (OOP) principles to build an e-commerce product management system. I defined strong types such as ProductFromAPI to ensure type safety when working with external API data. I also implemented a Product class to encapsulate both data and behavior, including methods like displayDetails(), getPriceWithDiscount(), and getFinalPrice(). This helped separate business logic from raw API data and improved code organization and reusability.

## Challenges and Solutions

One of the main challenges I encountered was understanding how to properly configure TypeScript for the project. When running the compiler, I faced multiple errors related to module resolution and export syntax (e.g., moduleResolution and verbatimModuleSyntax). I resolved these issues by updating the tsconfig.json to use modern Node module settings and adjusting compiler options accordingly. Another challenge was understanding the difference between any and unknown, especially in error handling. Through this project, I learned to use unknown and apply type narrowing (e.g., instanceof Error) to ensure safer code.

## Async and Error Handling

For asynchronous operations, I used async/await to fetch product data from the DummyJSON API. I implemented a dedicated fetchProducts() function that returns a typed Promise<ProductFromAPI[]>. I also handled HTTP errors by checking response.ok and throwing a custom AppError when necessary. In addition, I used a try/catch block to manage both expected and unexpected errors, and propagated errors upward to be handled centrally in the main application.
