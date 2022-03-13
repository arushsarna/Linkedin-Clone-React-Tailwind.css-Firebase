import widget from "../assets/images/item-icon.svg";
import background from "../assets/images/background.jpeg";
import profile from "../assets/images/profile.jpeg";


const LeftSide = (props) => {

    return (
        <div>
            <div className=" bg-white w-52 ml-72 mt-6 border-2 rounded-lg">
                <div className="  ">

                    <img className=" m-0 p-0 rounded-t-md " src={background} />
                    <img className="rounded-full w-16 ml-20 -left-3 relative -top-10  -mb-8 border-white border-2" src={profile} />
                    <h1 className=" text-center"> Arush Sarna</h1>
                    <p className=" text-xs text-gray-500 m-2  text-center ">
                        Java ( for DSA) , React , Firebase* , HTML , CSS (mostly Tailwind ), Trader , Youtuber.
                    </p>
                    <hr className="m-4" />
                    <div className=" flex flex-cols text-xs ml-2  ">
                        <div className="">
                            Connections
                            <br></br>
                            Grow your network
                            <br></br>
                            <p className="mt-2">
                            </p>
                            Who Viewed your profile
                        </div>
                        <div className="ml-9 ">
                            41
                            <br></br>
                            <br></br>
                            <p className="mt-2">
                                29
                            </p >

                        </div>
                    </div>
                    <hr className="m-4" />
                    <div className="text-xs ml-2">
                        Access exclusive tools & insights <br />
                        Get Hired Faster . Try Premium Free
                    </div>
                    <hr className=" m-4" />
                    <div className=" flex mb-2 ml-2">
                        <img src={widget} />
                        <p className=" pl-1 text-xs m-1">

                            My items
                        </p>
                    </div>
                </div>
                {/* <hr style="width:50%;text-align:left;margin-left:0" />
                <hr style="width:50%;text-align:left;margin-left:0" /> */}

            </div>
        </div >
    )
}
export default LeftSide;