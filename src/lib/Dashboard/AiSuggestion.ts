import { Suggestion } from "@/types/Dashboard/AiSuggestion";

// Mock data - in a real app, this would likely come from an API
export const suggestions: Suggestion[] = [
  {
    id: 1,
    message:
      "Your Sterling suggests increasing budget on Campaign X for higher conversions.",
    timeAgo: "2h ago",
  },
  {
    id: 2,
    message:
      "Consider targeting a new demographic based on recent performance.",
    timeAgo: "4h ago",
  },
  {
    id: 3,
    message: "Optimize ad scheduling for better engagement during peak hours.",
    timeAgo: "1d ago",
  },
  {
    id: 4,
    message:
      "Pause underperforming creatives and allocate budget to top performers.",
    timeAgo: "1d ago",
  },
  {
    id: 5,
    message: "Test new ad variations to improve click-through rates.",
    timeAgo: "2d ago",
  },
];
