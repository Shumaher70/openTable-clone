import Header from './components/Header';

const loading = () => {
   return (
      <main>
         <Header />
         <div className="py-3 px-36 mt-10 flex flex-wrap justify-content">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num, index) => (
               <div
                  key={index}
                  className="animate-pulse bg-slate-200 w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer"
               ></div>
            ))}
         </div>
      </main>
   );
};

export default loading;
