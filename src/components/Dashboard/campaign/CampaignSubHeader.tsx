type Props = {
  text: string;
};

const CampaignSubHeader = ({ text }: Props) => {
  return (
    <div className="text-[#020817] dark:text-gray-300 text-2xl font-semibold py-2">{text}</div>
  );
};

export default CampaignSubHeader;
