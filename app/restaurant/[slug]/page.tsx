import NavBar from '../../components/NavBar';
import Description from './components/Description';
import Header from './components/Header';
import Images from './components/Images';
import Rating from './components/Rating';
import ReservationCart from './components/ReservationCart';
import RestaurantNavBar from './components/RestaurantNavBar';
import Reviews from './components/Reviews';
import Title from './components/Title';

const RestaurantDetails = () => {
   return (
      <>
         <div className="bg-white w-[70%] rounded p-3 shadow">
            <RestaurantNavBar />
            <Title />
            <Rating />
            <Description />
            <Images />
            <Reviews />
         </div>
         <div className="w-[27%] relative text-reg">
            <ReservationCart />
         </div>
      </>
   );
};

export default RestaurantDetails;
