import ChatUI from "./ChatUI";

const GenerateContent = ({sessionIdForChat}) => {
  return (
    <div className="w-full h-screen bg-Foundation-gray-bg">
      <ChatUI sessionIdForChat={sessionIdForChat}/>
    </div>
  );
};

export default GenerateContent;
