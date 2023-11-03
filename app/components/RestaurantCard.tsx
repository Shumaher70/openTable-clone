import Link from 'next/link';
import { RestaurantCardType } from '../page';
import Image from 'next/image';
import Price from './Price';
import Stars from './Stars';

interface RestaurantCardProps {
   restaurant: RestaurantCardType;
}

const RestaurantCard = ({ restaurant }: RestaurantCardProps) => {
   return (
      <div className="w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer">
         <Link href={`/restaurant/${restaurant.slug}`}>
            <Image
               src={restaurant.main_image}
               alt="Milestones Grill"
               className="w-full h-36 object-cover"
               width={0}
               height={0}
               sizes="100vw"
            />
            <div className="p-1">
               <h3 className="font-bold text-2xl mb-2">{restaurant.name}</h3>
               <div className="flex items-start">
                  <Stars reviews={restaurant.reviews} />
                  <p className="ml-2">
                     {restaurant.reviews.length} review
                     {restaurant.reviews.length > 1 ? 's' : ''}
                  </p>
               </div>
               <div className="flex text-reg font-light capitalize">
                  <p className=" mr-3">{restaurant.cuisine.name}</p>
                  <Price price={restaurant.price} />
                  <p>{restaurant.location.name}</p>
               </div>
               <p className="text-sm mt-1 font-bold">Booked 3 times today</p>
            </div>
         </Link>
      </div>
   );
};

export default RestaurantCard;
