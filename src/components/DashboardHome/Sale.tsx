import ConversionIcon from "@/assets/CustomIcon/ConversionIcon";
import ThunderIcon from "@/assets/CustomIcon/ThunderIcon";
import img1 from "../../assets/Sale-Home/1.png";
import img2 from "../../assets/Sale-Home/2.jpg";
import img3 from "../../assets/Sale-Home/3.jpg";

interface SaleItemProps {
  image: string;
  title: string;
  ctr: string;
  conversion: string;
}

const SaleItem = ({ image, title, ctr, conversion }: SaleItemProps) => {
  return (
    <div className="flex flex-col lg:flex-row gap-3 md:gap-5 items-center rounded-lg p-2 md:p-0 hover:bg-gray-50 transition-colors">
      <div className="lg:w-[100px] lg:h-[151px] w-full h-40 md:h-48 overflow-hidden">
        <img
          className="object-cover w-full h-full rounded-lg"
          src={image}
          alt={title}
        />
      </div>
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium">
          {title}
        </h1>
        <div className="flex flex-col sm:flex-row gap-2 md:gap-3 items-center mt-2 w-full justify-center lg:justify-start">
          <div className="flex gap-2 items-center">
            <ThunderIcon className="w-4 h-4 md:w-5 md:h-5" />
            <span className="text-xs md:text-sm">
              CTR: <span className="text-blue-500 font-medium">{ctr}</span>
            </span>
          </div>
          <div className="flex gap-2 items-center">
            <ConversionIcon className="w-4 h-4 md:w-5 md:h-5" />
            <span className="text-xs md:text-sm">
              Conversion:{" "}
              <span className="text-blue-500 font-medium">{conversion}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Sale = () => {
  const saleItems = [
    { image: img1, title: "Summer Sale", ctr: "7.7%", conversion: "465" },
    { image: img2, title: "Winter Collection", ctr: "6.2%", conversion: "320" },
    { image: img3, title: "Spring Special", ctr: "8.1%", conversion: "510" },
  ];

  return (
    <div className="flex flex-col gap-3 md:gap-5 px-2 py-3 md:px-4 md:py-5 bg-white rounded-lg">
      {saleItems.map((item, index) => (
        <SaleItem key={index} {...item} />
      ))}
    </div>
  );
};

export default Sale;
