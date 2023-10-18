import Header from './components/Header';
import RestaurantCart from './components/RestaurantCart';
import SearchSideBar from './components/SearchSideBar';

const Search = () => {
   return (
      <>
         <Header />
         <div className="flex py-4 m-auto w-2/3 justify-between items-start">
            <SearchSideBar />
            <div className="w-5/6">
               <RestaurantCart />
            </div>
         </div>
      </>
   );
};

export default Search;
