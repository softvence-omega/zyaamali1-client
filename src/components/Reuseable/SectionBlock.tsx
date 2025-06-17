interface SectionBlockProps {
  img?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
  subTitle?:string;
}

const SectionBlock:React.FC<SectionBlockProps> = ({ img, title, description,subTitle }) => {
  return (
    <div className=" my-5">
      {img && (
        <div className="my-5 max-w-7xl">
          <img src={img} alt={title || "section image"} />
        </div>
      )}
      <div>
        <h1 className="text-2xl font-semibold">
          {title}
        </h1>
        <p className="font-bold">{subTitle}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default SectionBlock;
