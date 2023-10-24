import Header from './components/Header';

interface RestaurantLayoutProps {
   children: React.ReactNode;
   params: { slug: string };
}

const RestaurantLayout = ({ children, params }: RestaurantLayoutProps) => {
   return (
      <div>
         <Header name={params.slug} />
         <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
            {children}
         </div>
      </div>
   );
};

export default RestaurantLayout;
