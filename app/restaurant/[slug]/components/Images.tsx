import Image from 'next/image';

const Images = ({ images }: { images: string[] }) => {
   return (
      <div>
         <h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">
            {images.length} photo {images.length > 1 ? 's' : ''}
         </h1>
         <div className="flex flex-wrap">
            {images.map((image, index) => (
               <Image
                  key={index}
                  className="w-56 h-44 mr-1 mb-1"
                  src={image}
                  alt="hello"
                  width={0}
                  height={0}
                  sizes="100vh"
               />
            ))}
         </div>
      </div>
   );
};

export default Images;
