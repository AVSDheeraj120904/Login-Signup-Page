import Link from 'next/link';

export default function Signup() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
    <div className="absolute top-0 flex items-center justify-center w-full mt-10 ">
        <div className="w-full max-w-md p-8 space-y-8 bg-white  rounded-2xl">
            <div>
                <h2 className="mt-2 text-3xl font-extrabold text-center text-gray-900">Sign up page</h2>
            </div>
            <form className="mt-8 space-y-6" action="#" method="POST">
                <input type="hidden" name="remember" value="true"/>
                <div className="rounded-md shadow-sm -space-y-px">
                   <div>
                        <label htmlFor = "fullname" className="sr-only">Full name</label> 
                        <input id="full-name" name="name" type="text" className="relative block w-full px-3 py-4 mb-4 text-gray-900 placeholder-gray-500 border border-gray-300 rounded  " placeholder="Full name"/>
                    </div>
                    <div>
                        <label htmlFor = "username" className="sr-only">username</label>
                        <input id="username" name="username" type="text" className="relative block w-full px-3 py-4 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-t-md  " placeholder="Create Username"/>
                    </div>
                    <div>
                        <label htmlFor = "create-password" className="sr-only">Create Password</label>
                        <input id="password" name="password" type="password" className="relative block w-full px-3 py-4 text-gray-900 placeholder-gray-500 border border-gray-300  " placeholder="Create Password"/>
                    </div>
                    <div>
                        <label htmlFor = "enter-password-again" className="sr-only">Enter Password again</label>
                        <input id="password" name="password" type="password" className="relative block w-full px-3 py-4 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-b-md " placeholder="Enter Password again"/>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <input id="remember-me" name="remember-me" type="checkbox" className="w-4 h-4 text-indigo-600 border-gray-300 rounded "/>
                        <label  htmlFor = "remember-me" className="block ml-2 text-sm text-gray-900"> Remember me </label>
                    </div>
                    
                </div>
                <div>
                    <button type="submit" className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md group hover:bg-indigo-700 ">
                         Sign up
                    </button>
                </div>
            </form>
            <div className="text-center">
                <p className="text-sm text-gray-600">Already have an account?</p>
                <Link href="/" className="block mt-2 px-4 py-2 text-sm font-semibold text-white bg-gray-700 rounded-md hover:bg-gray-800">Login</Link>
            </div>
        </div>
    </div>
    </div>
  );
}