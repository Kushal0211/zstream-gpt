import OpenAI from "openai";
import { REACT_APP_OPENAI_API_KEY } from "../utils/constants";

const openai = new OpenAI({
  apiKey: REACT_APP_OPENAI_API_KEY, 
  dangerouslyAllowBrowser: true 
});

export default openai;
