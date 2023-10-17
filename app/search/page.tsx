import NavBar from '../components/NavBar';
import Header from './components/Header';
import RestaurantCart from './components/RestaurantCart';
import SearchSideBar from './components/SearchSideBar';

const Search = () => {
   return (
      <main className="bg-gray-100 min-h-screen w-screen">
         <main className="max-w-screen-2xl m-auto bg-white">
            <NavBar />
            <Header />
            <div className="flex py-4 m-auto w-2/3 justify-between items-start">
               <SearchSideBar />
               <div className="w-5/6">
                  <RestaurantCart />
               </div>
            </div>
         </main>
      </main>
   );
};

export default Search;
