import {
  highlightFirstVideo,
  highlightFourthVideo,
  highlightSecondVideo,
  highlightThirdVideo,
} from "../utils";
 
export const hightlightsSlides = [
  {
    id: 1,
    textLists: [
      "Choose",
      "your Model.",
    ],
    video: highlightFirstVideo,
    videoDuration: 3,
  },
  {
    id: 2,
    textLists: [
      "Code",
      "Syntax Highlighting.",
    ],
    video: highlightSecondVideo,
    videoDuration: 4,
  },
  {
    id: 3,
    textLists: [
      "Generate Images",
    ],
    video: highlightThirdVideo,
    videoDuration: 4.5,
  },
  {
    id: 4,
    textLists: [
      "Use GPT 4",
      "Attach Images",
    ],
    video: highlightFourthVideo,
    videoDuration: 3,
  },
];


export const models = [
  { label: 'Generate Images', value: "Image generation capabilities using DALL-E" },
  { label: 'Code Syntax Highlighting', value: "Code readability with syntax highlighting feature" },
  { label: 'Attach Images', value: "Upload images for code and text generation" },
  { label: 'Use GPT 4', value: "Enjoy benefits of GPT 4 with no query limit" },
  
];
