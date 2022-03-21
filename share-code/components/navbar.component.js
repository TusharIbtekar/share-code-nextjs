import Link from "next/link"
import { useContext } from 'react'
import { Store } from '../utils/Store'
import jsCookie from 'js-cookie';
import { useRouter } from 'next/router';

function Navbar() {

  const { state, dispatch } = useContext(Store);
  const { userInfo } = state
  const router = useRouter();

  const logoutClickHandler = () => {
    dispatch({ type: 'USER_LOGOUT' });
    jsCookie.remove('userInfo');
    router.push('/');
  }

  return (
    <header className="flex justify-between p-5 max-w-7xl mx-auto">
      <div className="flex items-center space-x-5">
        <Link href='/'>
          <img className="w-24 object-contain cursor-pointer" src="/media/main-logo.png" alt="" />
        </Link>
        <div className="hidden md:inline-flex
        items-center space-x-5">
          <h3>About</h3>
          <h3>Contact</h3>
          <h3 className="text-white bg-green-600 px-4 py-1 rounded-full">Follow</h3>
        </div>
      </div>

      <div className="flex items-center space-x-5">
        {userInfo ? (
          <>

            <Link href='/profile'>
              <h3 className="text-green-600 cursor-pointer">{userInfo.name}</h3>
            </Link>
            <h3 className="text-red-400 cursor-pointer" onClick={logoutClickHandler}>Logout</h3>

          </>
        ) : (<Link href='/login'>
          <h3 className="text-green-600 cursor-pointer">Sign In</h3>
        </Link>)}

        <h3 className="border px-4 py-1 rounded-full
        border-green-600 text-green-600">Get Started</h3>
      </div>
    </header>
  )
}

export default Navbar