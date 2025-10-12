/* eslint-disable @typescript-eslint/no-explicit-any */
import ChatUI from "./ChatUI";

const GenerateContent = ({sessionIdForChat }:{sessionIdForChat:any }) => {
  return (
    <div className="w-full h-screen bg-Foundation-gray-bg">
      <ChatUI sessionIdForChat={sessionIdForChat} get/>
    </div>
  );
};

export default GenerateContent;
