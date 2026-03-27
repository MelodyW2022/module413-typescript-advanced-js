import { NetworkError, DataError } from "./errorHandler";

// Simulate an API call to fetch product catalog
export const fetchProductCatalog = (): Promise<
  { id: number; name: string; price: number }[]
> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.8) {
        const products = [
          { id: 1, name: "Laptop", price: 1200 },
          { id: 2, name: "Headphones", price: 200 },
        ];
        const hasInvalidProduct = products.some(
          (product) =>
            product.id === undefined ||
            !product.name ||
            product.price === undefined,
        );
        if (hasInvalidProduct) {
          reject(new DataError("Invalid product product catalog data"));
        } else {
          resolve(products);
        }
      } else {
        reject(new NetworkError("Failed to fetch product catalog"));
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
        let reviews: {
          reviewId: number;
          productId: number;
          rating: number;
          comment: string;
        }[] = [];
        if (productId === 1) {
          reviews = [
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
          ];
        } else if (productId === 2) {
          reviews = [
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
          ];
        }
        const hasInvalidReview = reviews.some(
          (review) =>
            review.reviewId === undefined ||
            review.productId === undefined ||
            review.rating === undefined ||
            !review.comment,
        );
        if (hasInvalidReview) {
          reject(new DataError("Invalid product review data"));
        } else {
          resolve(reviews);
        }
      } else {
        reject(
          new NetworkError(
            `Failed to fetch reviews for product ID ${productId}`,
          ),
        );
      }
    }, 1500);
  });
};
// Simulate an API call to fetch sales report
export const fetchSalesReport = (): Promise<{
  totalSales: number;
  unitSold: number;
  averagePrice: number;
}> => {
  return new Promise((resolve, reject) => {
    if (Math.random() < 0.8) {
      setTimeout(() => {
        const salesReport = {
          totalSales: 50000,
          unitSold: 200,
          averagePrice: 250,
        };

        const hasInvalidReport =
          salesReport.totalSales === undefined ||
          salesReport.unitSold === undefined ||
          salesReport.averagePrice === undefined;
        if (hasInvalidReport) {
          reject(new DataError("Invalid sales report data"));
        } else {
          resolve(salesReport);
        }
      }, 1000);
    } else {
      reject(new NetworkError("Failed to fetch sales report"));
    }
  });
};
