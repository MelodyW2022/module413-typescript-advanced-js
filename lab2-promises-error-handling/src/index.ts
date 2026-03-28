import {
  fetchProductCatalog,
  fetchProductReviews,
  fetchSalesReport,
} from "./apiSimulator";
import { handleError } from "./errorHandler";
import { retryPromise } from "./retryPromise";
retryPromise(() => fetchProductCatalog(), 3, 500)
  .then((products) => {
    console.log("Product Catalog:");
    products.forEach((product) => {
      console.log(
        `- ID: ${product.id}, Name: ${product.name}, Price: $${product.price}`,
      );
    });
    const reviewPromises = products.map((product) => {
      return retryPromise(() => fetchProductReviews(product.id), 3, 500)
        .then((reviews) => {
          console.log(
            `\nReviews for product ID ${product.id} ${product.name}:`,
          );
          reviews.forEach((review) => {
            console.log(
              `- Review ID: ${review.reviewId}, Product ID: ${review.productId}, Rating: ${review.rating}, Comment: ${review.comment}`,
            );
          });
        })
        .catch((error) => {
          console.error(
            `Error fetching reviews for product ID ${product.id} ${product.name}:`,
          );
          handleError(error);
        });
    });
    //reviewPromises is an array of promises
    //This new Promise waits until all review requests have been attempted before moving on to fetchSalesReport()
    //Without it, the sales report step could start before all review requests finish.
    return Promise.all(reviewPromises);
  })
  .then(() => {
    return retryPromise(() => fetchSalesReport(), 3, 500)
      .then((report) => {
        console.log("\nSales Report:");
        console.log(`Total Sales: $${report.totalSales}`);
        console.log(`Units Sold: ${report.unitsSold}`);
        console.log(`Average Price: $${report.averagePrice}`);
      })
      .catch((error) => {
        console.error("Error fetching sales report:");
        handleError(error);
      });
  })
  .catch((error) => {
    console.error("Error fetching product catalog:");
    handleError(error);
  })
  .finally(() => {
    console.log("\nFinished attempting all API calls.");
  });
