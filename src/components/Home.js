import LeftSide from "./LeftSide";
import RightSide from "./HomeContent/RightSide";
import Main from "./HomeContent/Main";

const Home = (props) => {

    return (
        <div className=" w-full h-screen bg-[#f3f2ef] ">
            {/* 
            <div className=" w-full h-screen bg-[#f3f2ef]">Home</div> */}
            <div className=" grid grid-cols-3 ">
                <div className=" ">

                    <LeftSide />

                </div>
                <div>

                    <Main />
                </div>
                <div>

                    <RightSide />
                </div>
            </div>
        </div>
    )
}
export default Home;