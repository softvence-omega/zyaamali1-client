



import PrimaryButton from "@/components/ui/PrimaryButton";
import { GoArrowLeft } from "react-icons/go";
import { PiShareFat } from "react-icons/pi";
import { IoMdDownload } from "react-icons/io";
import { FaRegSquare } from "react-icons/fa";
import { LuImagePlus } from "react-icons/lu";
import img from "../../assets/Orange.png";
import img1 from "../../assets/media-1.png";
import img2 from "../../assets/media-2.png";
import img3 from "../../assets/media-3.png";
import img4 from "../../assets/media-4.png";

type ImageRow = {
  id: number;
  images: string[];
};

const imageGrid: ImageRow[] = [
  {
    id: 1,
    images: [img1, img2, img3, img4],
  },
  {
    id: 2,
    images: [img1, img2, img3, img4],
  },
  {
    id: 3,
    images: [img1, img2, img3, img4],
  },
  {
    id: 4,
    images: [img1, img2, img3, img4],
  },
];





const DashboardCampaignPreview = () => {

  return (
    <div>
      <nav className="flex justify-between items-center mx-5  ">

        <button className="bg-primary p-3 rounded-full">
          <GoArrowLeft className="text-xl text-white" />
        </button>
        <div className="flex items-center space-x-3">

          <PrimaryButton icon={<PiShareFat className="text-lg" />}>  Share</PrimaryButton>
          <button

            className="bg-[#654FAE] p-3 rounded-full"

          >
            <IoMdDownload className="text-2xl text-white " />
          </button>
        </div>
      </nav>


      <div className="flex flex-col md:flex-row mt-6">
        <div className="flex  Primary text-white font-sans">


          <div className="flex flex-1">
            {/* Left Sidebar */}
            <aside className="w-90 p-6  border-gray-700 flex flex-col space-y-8">

              <div className=" bg-T-300 p-4 rounded-lg ">
                <h3 className="text-lg font-semibold mb-3 text-T-400">Prompt</h3>
                <textarea
                  className="w-full h-24 p-2  rounded border border-gray-700 focus:outline-none bg-T-300 text-black"
                  placeholder="Create an engaging ad copy for a summer sale offering 40% off"
                ></textarea>

              </div>
              <div className="flex justify-around items-center mt-3 text-lightGrayText text-sm mb-4">
                <span className="mr-2 text-T-400">Square</span>
                <FaRegSquare className="text-T-400" />
                <p className="text-black">1.1</p>
                <div className="relative">
                  <select className="">
                    <option>1:1</option>
                    <option>16:9</option>
                    <option>9:16</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                  </div>
                </div>
              </div>
              <PrimaryButton>regerate</PrimaryButton>

              {/* Reference Section */}
              <div className="bg-T-300 p-4 rounded-lg mt-5">
                <div className="flex item-center gap-3">
                  <LuImagePlus className="text-xl  bg-blue-300" />
                  <h3 className=" mb-3 text-T-400">Reference</h3>
                </div>
                <div className="flex flex-col ml-10 space-y-3">
                  <PrimaryButton ><span className="text-white">Upload Image</span></PrimaryButton>
                  <button className="w-full py-3 rounded-full text-blue-400 border mt-4">
                    Browse Gallery
                  </button>
                </div>
              </div>
            </aside>



          </div>
        </div>
        <div className=" md:w-[1000px] w-80 bg-black md:pr-6 md:p-6">
          <img src={img} alt="" />
        </div>
      </div>
     
      <div className="  bg-black">
         <hr className="mx-8 md:ml-98 bg-[#6C7078]" />
        <div className="md:ml-90 pt-6 pb-3">
          <h1 className="text-[48px] text-white ">My media</h1>

      <div className="space-y-4 ">
  {imageGrid.map((row: ImageRow) => (
    <div key={row.id} className="flex flex-col md:flex-row gap-4">
      {row.images.map((imgSrc: string, index: number) => (
        <img key={index} className="mb-2" src={imgSrc} alt={`Image ${row.id}-${index}`} />
      ))}
    </div>
  ))}
</div>

        </div>
      </div>

    </div>


  )
}

export default DashboardCampaignPreview
