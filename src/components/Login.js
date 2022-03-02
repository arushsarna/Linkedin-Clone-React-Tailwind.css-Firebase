
import React from 'react';
import logo from './login-logo.svg';
import google from '../assets/images/google.svg';

const Login = (props) => {
    return (<div className=" bg-[#f3f2ef] flex flex-col item-center justify-center w-full h-full content-center">
        <div className=" w-full mt-10 items-center flex flex-col ">

            <img className=" w-1/6  " src={logo} alt="" />
            <div>

            </div>
        </div >
        <div className=" flex flex-col items-center justify-center text-center">
            <div className=" antialiased  text-4xl my-6">
                Make the most of your professional life

            </div>



            <form className=" text-center  w-1/4 p-4 bg-white rounded-2xl">


                <div className=" px-6 text-left p-2"> <label for="email" className="  text-gray-500"> Email or phone number </label><br></br>

                    {/* input */}
                    <input type="email" className=" border-gray-500  rounded-md border-2 border-solid p-1.5 w-full" id="email" name="email" /><br></br>

                </div>
                <div className=" px-6 p-2 text-left">  <label for="password" className="  text-gray-500">Password (6 or more characters) </label><br></br>
                    {/* input */}
                    <input type="password" className="border-gray-500  rounded-md border-2 border-solid p-1.5 w-full" id="password" name="password" /><br></br>
                </div>
                <div className=" p-4">
                    <p className=" text-center">By clicking Agree & Join, you agree to the LinkedIn <span className="text-[#0a66c2]">User Agreement</span>,<span className="text-blue-600"> Privacy Policy</span>,
                        and <span className="text-[#0a66c2]">Cookie Policy</span>.</p>
                </div>
                <div className=" p-2">
                    <button className=" hover:bg-[#0a66c2] antialiased text-white text-xl w-full py-3 rounded-full bg-[#0073b1]" >
                        Agree & Join
                    </button>
                </div>
                <div className="  border-b-2 border-grey-400   border-solid p-2">

                </div>
                <div className=" p-2">
                    <button className=" rounded-full bg-gray-200 hover:bg-gray-300 border-2 pb-2 flex justify-center pt-2 border-gray-300 w-full  text-gray-500 text-xl ">
                        <img className=" pt-px pr-1 px-5 " src={google} alt="" /> <span className="pl-2">Sign up with Google</span>
                    </button>
                </div>
                <div className=" p-2">
                    Already on Linkedin? <span className="text-[#0a66c2]">Sign in</span>
                </div>
                <div className=" p-2">
                    Looking to create a page for buisness? <span className="text-[#0a66c2]">Get help</span>
                </div>
            </form>
        </div>

    </div>


    )
}
export default Login;