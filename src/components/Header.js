import { Link } from "react-router-dom";
import logo from "../assets/images/home-logo.svg";
import search from "../assets/images/search-icon.svg";
import home from "../assets/images/nav-home.svg"
import jobs from "../assets/images/nav-jobs.svg"
import message from "../assets/images/nav-messaging.svg"
import network from "../assets/images/nav-network.svg"
import notifation from "../assets/images/nav-notifications.svg"
import work from "../assets/images/nav-work.svg"
import user from "../assets/images/user.svg"
const Header = (props) => {

    return (
        <div className=" w-full mx-44 px-20 pt-1 p-3 flex flex-row  bg-white h-12">
            <div className=" flex flex-row   justify-start pl-10 w-1/3 ">
                <Link to="/feed">
                    <img className=" p-1" src={logo} />
                </Link>

                <div className=" pl-3 ">
                    <input className=" pl-9 rounded-md pr-10 antialiased bg-[#dce6f1]  p-2" type="search" placeholder=" Search" />
                    <div className=" absolute  opacity-60  pl-4 top-4">
                        <img src={search} />
                    </div>
                </div >
            </div>

            <div className=" px-10 pt-2 flex flex-row   justify-center items-center">

                <div className="  flex flex-col  items-center mx-4">
                    <Link to="/"> <img className=" h-6" src={home} /> </Link>
                    <span className=" text-xs border-b-2 border-black px-5 ">Home</span>

                </div>
                <div className=" flex flex-col  items-center ">
                    <Link to="/"> <img src={network} /> </Link>
                    <span className="  text-xs">My Network</span>
                </div>
                <div className="flex flex-col  items-center mx-5">
                    <Link to="/"> <img src={jobs} /> </Link>
                    <span className="  text-xs">Jobs</span>
                </div>
                <div className=" flex flex-col  items-center  mx-3">


                    <Link to="/"> <img src={message} /> </Link>


                    <span className="  text-xs">Messaging</span>

                </div>
                <div className="flex flex-col  items-center mx-3">
                    <Link to="/"> <img src={notifation} /> </Link>
                    <span className=" text-xs">Notification</span>
                </div>
                <div className="flex flex-col  items-center mx-4">
                    <Link to="/"> <img src={home} /> </Link>
                    <span className=" text-xs ">Me</span>
                </div>
                <div className="flex flex-col  items-center mx-4">
                    <Link to="/"> <img src={work} /> </Link>
                    <span className="  text-xs">Work</span>
                </div>

            </div>
        </div>
    )
}
export default Header;