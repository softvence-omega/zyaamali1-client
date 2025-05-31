interface SectionBlockProps {
  img?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
}

const SectionBlock:React.FC<SectionBlockProps> = ({ img, title, description }) => {
  return (
    <div className="md:max-w-6xl mx-auto my-5">
      {img && (
        <div className="my-5">
          <img src={img} alt={title || "section image"} />
        </div>
      )}
      <div>
        <h1 className="text-2xl font-semibold">
          {title}
        </h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default SectionBlock;
