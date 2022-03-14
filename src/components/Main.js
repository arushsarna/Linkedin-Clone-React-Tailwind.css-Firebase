import profile from "../assets/images/profile.jpeg";
import photos from "../assets/images/photos.png";
import video from "../assets/images/video.png";
import event from "../assets/images/event.png";
import article from "../assets/images/article.png";

const Main = (props) => {

    return (
        <div >
            <div className="  bg-white w-5/6 border border-gray-300 relative right-24 mt-6   rounded-lg">
                <div className=" flex">

                    <div >

                        <img className=" mt-2 ml-4 mb-2  justify-start w-12 rounded-full" src={profile} />
                    </div>
                    <div>

                        <input size="52" className=" border hover:bg-[#f3f2ef] text-gray-600 placeholder-gray-600  ml-2 mt-3 w-max text-sm p-3 border-gray-400 rounded-3xl " type="text" placeholder=" Start a post" />
                    </div>
                </div>

                <div className="grid ml-4 mr-4 mb-3 grid-cols-4">
                    <div className=" text-sm text-gray-500  flex">
                        <img className="" src={photos} />
                        <p className="text-sm text-gray-500  pt-2">Photo</p>
                    </div>
                    <div className="  flex">
                        <img className="mt-1" src={video} />
                        <p className="text-sm text-gray-500  pt-2"> Video</p>
                    </div>
                    <div className="flex">
                        <img className="mt-1" src={event} />
                        <p className="text-sm text-gray-500  pt-2"> Event </p>
                    </div>
                    <div className="flex ">
                        <img className="mt-1" src={article} />
                        <p className="text-sm text-gray-500  pt-2">   Write article</p>
                    </div>
                </div>
                <div className="flex  pr-2">

                    <hr className=" flex-1  border-gray-300  mr-2 relative top-9" />
                    <div className=" relative top-7 text-xs antialiased text-gray-500 flex"> Sort by: </div>

                    <select className="relative top-7 text-xs font-semibold pl-1 bg-[#f3f2ef] text-black flex" name="cars" id="cars">
                        <option value="volvo">Top</option>
                        <option value="saab">Recent</option>

                    </select>


                </div>
            </div>


        </div>

    )
}
export default Main;