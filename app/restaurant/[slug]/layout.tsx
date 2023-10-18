import Header from './components/Header';

interface RestaurantLayoutProps {
   children: React.ReactNode;
}

const RestaurantLayout = ({ children }: RestaurantLayoutProps) => {
   return (
      <div>
         <Header />
         <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
            {children}
         </div>
      </div>
   );
};

export default RestaurantLayout;
