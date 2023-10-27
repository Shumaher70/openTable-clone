import { Cuisine, Location } from '@prisma/client';

const SearchSideBar = ({
   location,
   cuisine,
}: {
   location: Location[];
   cuisine: Cuisine[];
}) => {
   return (
      <div className="w-1/5">
         <div className="border-b pb-4">
            <h1 className="mb-2">Region</h1>
            {location.map((location) => (
               <p
                  key={location.id}
                  className="font-light text-reg capitalize cursor-pointer"
               >
                  {location.name}
               </p>
            ))}
         </div>
         <div className="border-b pb-4 mt-3 ">
            <h1 className="mb-2">Cuisine</h1>
            {cuisine.map((cuisine) => (
               <p
                  key={cuisine.id}
                  className="font-light text-reg capitalize cursor-pointer"
               >
                  {cuisine.name}
               </p>
            ))}
         </div>
         <div className="mt-3 pb-4">
            <h1 className="mb-2">Price</h1>
            <div className="flex">
               <button className="border w-full text-reg font-light rounded-l p-2">
                  $
               </button>
               <button className="border-r border-t border-b w-full text-reg font-light p-2">
                  $$
               </button>
               <button className="border-r border-t border-b w-full text-reg font-light p-2 rounded-r">
                  $$$
               </button>
            </div>
         </div>
      </div>
   );
};

export default SearchSideBar;
