import RestaurantNavBar from '../components/RestaurantNavBar';
import Menu from '../components/Menu';
import Head from './head';

const RestaurantMenu = () => {
   return (
      <>
         <Head />
         <div className="bg-white w-[100%] rounded p-3 shadow">
            <RestaurantNavBar />
            <Menu />
         </div>
      </>
   );
};
export default RestaurantMenu;
