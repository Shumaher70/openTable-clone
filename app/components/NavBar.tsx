import Link from 'next/link';
import AuthModal from './AuthModal';

const NavBar = () => {
   return (
      <nav className="bg-white p-2 flex justify-between">
         <Link href="/" className="font-bold text-gray-700 text-2xl">
            OpenTable
         </Link>
         <div>
            <div className="flex">
               <AuthModal isSignIn />
               <AuthModal />
            </div>
         </div>
      </nav>
   );
};

export default NavBar;
