import { Review } from '@prisma/client';

const calculateReviewRatingAverage = (reviews: Review[]) => {
   if (!reviews.length) return 0;
   const calculReview =
      reviews.reduce((sum, review) => {
         return sum + review.rating;
      }, 0) / reviews.length;
   return calculReview.toFixed(1);
};

export default calculateReviewRatingAverage;
