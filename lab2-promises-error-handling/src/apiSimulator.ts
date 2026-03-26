// Simulate an API call to fetch product catalog
export const fetchProductCatalog = (): Promise<
  { id: number; name: string; price: number }[]
> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.8) {
        resolve([
          { id: 1, name: "Laptop", price: 1200 },
          { id: 2, name: "Headphones", price: 200 },
        ]);
      } else {
        reject("Failed to fetch product catalog");
      }
    }, 1000);
  });
};
// Simulate an API call to fetch product reviews
export const fetchProductReviews = (
  productId: number,
): Promise<
  { reviewId: number; productId: number; rating: number; comment: string }[]
> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.8) {
        if (productId === 1) {
          resolve([
            {
              reviewId: 1,
              productId: 1,
              rating: 5,
              comment: "Excellent laptop.",
            },
            {
              reviewId: 2,
              productId: 1,
              rating: 4,
              comment: "Very fast and reliable.",
            },
          ]);
        } else if (productId === 2) {
          resolve([
            {
              reviewId: 3,
              productId: 2,
              rating: 3,
              comment: "Good sound quality but uncomfortable.",
            },
            {
              reviewId: 4,
              productId: 2,
              rating: 4,
              comment: "Great value for the price.",
            },
          ]);
        } else {
          resolve([]);
        }
      } else {
        reject(`Failed to fetch reviews for product ID ${productId}`);
      }
    }, 1500);
  });
};
// Simulate an API call to fetch sales report
const fetchSalesReport = (): Promise<
  { totalSales: number; unitSold: number; averagePrice: number }[]
> => {
  return new Promise((resolve, reject) => {
    if (Math.random() < 0.8) {
      setTimeout(() => {
        resolve([{ totalSales: 50000, unitSold: 200, averagePrice: 250 }]);
      }, 1000);
    } else {
      reject("Failed to fetch sales report");
    }
  });
};
