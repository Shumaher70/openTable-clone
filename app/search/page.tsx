import { PRICE, PrismaClient } from '@prisma/client';
import Header from './components/Header';
import RestaurantCart from './components/RestaurantCart';
import SearchSideBar from './components/SearchSideBar';
import Head from './head';

const prisma = new PrismaClient();

interface SearchParams {
   city?: string;
   cuisine?: string;
   price?: PRICE;
}

const fetchRestaurantByCity = (searchParams: SearchParams) => {
   const where: any = {};
   if (searchParams.city) {
      const location = {
         name: {
            equals: searchParams.city.toLowerCase(),
         },
      };
      where.location = location;
   }

   if (searchParams.cuisine) {
      const cuisine = {
         name: {
            equals: searchParams.cuisine.toLowerCase(),
         },
      };
      where.cuisine = cuisine;
   }

   if (searchParams.price) {
      const price = {
         equals: searchParams.price,
      };
      where.price = price;
   }

   const select = {
      id: true,
      name: true,
      main_image: true,
      cuisine: true,
      slug: true,
      location: true,
      price: true,
      reviews: true,
   };

   return prisma.restaurant.findMany({
      where,
      select,
   });
};

const fetchLocation = async () => prisma.location.findMany();
const fetchCuisine = async () => prisma.cuisine.findMany();

const Search = async ({ searchParams }: { searchParams: SearchParams }) => {
   const restaurantsByCity = await fetchRestaurantByCity(searchParams);
   const location = await fetchLocation();
   const cuisine = await fetchCuisine();
   const noRestaurants = <p>Sorry we found no restaurants in this area</p>;

   return (
      <>
         <Head />
         <Header />
         <div className="flex py-4 m-auto w-2/3 justify-between items-start">
            <SearchSideBar
               location={location}
               cuisine={cuisine}
               searchParams={searchParams}
            />
            <div className="w-5/6">
               {restaurantsByCity.length
                  ? restaurantsByCity.map((item) => (
                       <RestaurantCart key={item.slug} restaurant={item} />
                    ))
                  : noRestaurants}
            </div>
         </div>
      </>
   );
};

export default Search;
