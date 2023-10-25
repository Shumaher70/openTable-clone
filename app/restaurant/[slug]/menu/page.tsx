import { PrismaClient } from '@prisma/client';
import RestaurantNavBar from '../components/RestaurantNavBar';
import Menu from '../components/Menu';
import Head from './head';

const prisma = new PrismaClient();

const fetchRestaurantMenu = async (slug: string) => {
   const restaurant = await prisma.restaurant.findUnique({
      where: {
         slug,
      },
      select: {
         items: true,
      },
   });

   if (!restaurant) {
      throw new Error();
   }
   return restaurant.items;
};

const RestaurantMenu = async ({ params }: { params: { slug: string } }) => {
   const menu = await fetchRestaurantMenu(params.slug);

   return (
      <>
         <Head />
         <div className="bg-white w-[100%] rounded p-3 shadow">
            <RestaurantNavBar slug={params.slug} />
            <Menu menu={menu} />
         </div>
      </>
   );
};
export default RestaurantMenu;
