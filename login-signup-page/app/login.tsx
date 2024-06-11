import Link from 'next/link';

export default function Login() {

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
    <div className="absolute top-0 flex items-center justify-center w-full mt-20 ">
        <div className="w-full max-w-md p-8 space-y-8 bg-white  rounded-2xl">
            <div>
                <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">Login page</h2>
            </div>
            <form className="mt-8 space-y-6" action="#" method="POST">
                <div className="rounded-md shadow-sm -space-y-px">
                    <div>
                        <label htmlFor = "username" className="sr-only">username</label>
                        <input id="username" name="username" type="text" className="relative block w-full px-3 py-4 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-t-md  " placeholder="Username"/>
                    </div>
                    <div>
                        <label htmlFor = "password" className="sr-only">Password</label>
                        <input id="password" name="password" type="password" className="relative block w-full px-3 py-4 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-b-md " placeholder="Password"/>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <div className="text-sm">
                        <Link href="#" className="font-medium text-indigo-600 hover:text-indigo-500"> Forgot your password? </Link>
                    </div>
                </div>
                <div>
                    <button type="submit" className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md group hover:bg-indigo-700 ">
                         Login
                    </button>
                </div>
            </form>
            <div className="text-center">
                <p className="text-sm text-gray-600">Don't have an account?</p>
                <Link href="/signup" className="block mt-2 px-4 py-2 text-sm font-semibold text-white bg-gray-700 rounded-md hover:bg-gray-800">Sign up</Link>
            </div>
        </div>
    </div>
</div>
  );
}