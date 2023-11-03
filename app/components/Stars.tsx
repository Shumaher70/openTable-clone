import fullStar from '../../public/icons/full-star.png';
import halfStar from '../../public/icons/half-star.png';
import emptyStar from '../../public/icons/empty-star.png';
import Image from 'next/image';
import { Review } from '@prisma/client';
import calculateReviewRatingAverage from '../../utils/calculateReviewRatingAverage';

const Stars = ({ reviews, rating }: { reviews: Review[]; rating?: number }) => {
   const reviewRating = rating || calculateReviewRatingAverage(reviews);

   const renderStarts = () => {
      const starts = [];
      for (let i = 0; i < 5; i++) {
         const difference = parseFloat((reviewRating - i).toFixed(1));
         if (difference >= 1) starts.push(fullStar);
         else if (difference < 1 && difference > 0) {
            if (difference <= 0.2) starts.push(emptyStar);
            else if (difference > 0.2 && difference <= 0.6)
               starts.push(halfStar);
            else starts.push(fullStar);
         } else starts.push(emptyStar);
      }
      return starts.map((star, index) => {
         return (
            <Image
               key={index}
               src={star}
               alt=""
               width={0}
               height={0}
               className="w-4 h-4 mr-1"
            />
         );
      });
   };
   return <div className="flex items-center">{renderStarts()}</div>;
};

export default Stars;
