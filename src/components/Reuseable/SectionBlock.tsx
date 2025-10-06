interface SectionBlockProps {
  img?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
  subTitle?:string;
}

const SectionBlock:React.FC<SectionBlockProps> = ({ img, title, description}) => {
  return (
    <div className=" my-5 mb-20 flex flex-col justify-center max-w-[1400px] mx-auto">
      {img && (
        <div className="my-5 max-w-[1400px] mx-auto">
          <img src={img} alt={title || "section image"} />
        </div>
      )}
      <div className="max-w-[1400px] mx-auto">
        <h1 className="text-2xl font-semibold">
          {title}
        </h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default SectionBlock;
