import { AzureOpenAI } from "openai";

const options = {
  endpoint: "https://hackatongroup08674394590.services.ai.azure.com/",
  apiKey: "",
  deployment: "gpt-4",
  apiVersion: "2024-04-01-preview",
};

const getText = async () => {
  const openAIConnection = new AzureOpenAI(options);
  const result = await openAIConnection.chat.completions.create({
    role: "user",
    content: "I am going to Paris, what should I see?",
  });

  console.log(result);
};

getText();
