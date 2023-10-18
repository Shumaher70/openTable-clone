import Header from './components/Header';
import RestaurantCart from './components/RestaurantCart';
import SearchSideBar from './components/SearchSideBar';
import Head from './head';

const Search = () => {
   return (
      <>
         <Head />
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
