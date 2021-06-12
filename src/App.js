import React, { useEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from "./components/NewsCards/NewsCards";

const alanKey =
  "8b767f986c749b0462768ef6bf5331df2e956eca572e1d8b807a3e2338fdd0dc/stage";
//38b4c8d9046444d0805453dd00a2828d
const App = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if (command === "newHeadlines") {
          setNewsArticles(articles);
        }
      },
    });
  }, []);
  return (
    <div>
      <NewsCards articles={newsArticles}></NewsCards>
    </div>
  );
};

export default App;
