import AnnouncementIconTwo from "@/assets/CustomIcon/AnnouncementIconTwo";
import GeminiIcon from "@/assets/CustomIcon/GeminiIcon";
import { suggestions } from "@/lib/Dashboard/AiSuggestion";
import { Suggestion } from "@/types/Dashboard/AiSuggestion";

const AiSuggestion = () => {
  // SuggestionItem component for rendering individual suggestions
  const SuggestionItem = ({ message, timeAgo }: Suggestion) => (
    <div className="mb-3">
      <div className="flex gap-8">
        <div className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center shrink-0">
          <AnnouncementIconTwo />
        </div>
        <div className="w-full">
          <h2 className="text-xl font-semibold mb-2">{message}</h2>
          <p className="text-Foundation-text-T-75 mb-3">{timeAgo}</p>
          <hr className="text-gray-200" />
        </div>
      </div>
    </div>
  );

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden p-5 m-5">
      {/* Header Section */}
      <div className="flex items-center gap-4 mb-8">
        <GeminiIcon />
        <h1 className="text-2xl">AI-Powered Suggestions & Notifications</h1>
      </div>

      {/* Suggestions List */}
      <div>
        {suggestions.map((suggestion) => (
          <SuggestionItem
            key={suggestion.id}
            id={suggestion.id}
            message={suggestion.message}
            timeAgo={suggestion.timeAgo}
          />
        ))}
      </div>
    </div>
  );
};

export default AiSuggestion;
