import Link from 'next/link';
import { RestaurantCardType } from '../../page';
import Image from 'next/image';
import Price from '../../components/Price';

const RestaurantCart = ({ restaurant }: { restaurant: RestaurantCardType }) => {
   return (
      <div className="border-b flex pb-5 ml-4">
         <Image
            src={restaurant.main_image}
            alt={restaurant.name}
            className="w-44 rounded object-cover"
            width={0}
            height={0}
            sizes="100vw"
         />
         <div className="pl-5">
            <h2 className="text-3xl">{restaurant.name}</h2>
            <div className="flex items-start">
               <div className="flex mb-2">*****</div>
               <p className="ml-2 text-sm">Awesome</p>
            </div>
            <div className="mb-9">
               <div className="font-light flex text-reg">
                  <Price price={restaurant.price} />
                  <p className="mr-4 capitalize">{restaurant.cuisine.name}</p>
                  <p className="mr-4 capitalize">{restaurant.location.name}</p>
               </div>
            </div>
            <div className="text-red-600">
               <Link href={`/restaurant/${restaurant.slug}`}>
                  View more information
               </Link>
            </div>
         </div>
      </div>
   );
};

export default RestaurantCart;
