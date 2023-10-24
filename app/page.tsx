import Header from './components/Header';
import RestaurantCard from './components/RestaurantCard';
import { PrismaClient, Cuisine, Location, PRICE } from '@prisma/client';

export interface RestaurantCardType {
   id: number;
   name: string;
   main_image: string;
   cuisine: Cuisine;
   location: Location;
   slug: string;
   price: PRICE;
}

const prisma = new PrismaClient();

const fetchRestaurants = async (): Promise<RestaurantCardType[]> => {
   const restaurant = await prisma.restaurant.findMany({
      select: {
         id: true,
         name: true,
         main_image: true,
         cuisine: true,
         slug: true,
         location: true,
         price: true,
      },
   });
   return restaurant;
};

const Home = async () => {
   const restaurants = await fetchRestaurants();

   return (
      <main>
         <Header />
         <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
            {restaurants.map((restaurant) => (
               <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
         </div>
      </main>
   );
};

export default Home;
