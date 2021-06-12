import React, { useEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from "./components/NewsCards/NewsCards";
import useStyles from "./styles";
const alanKey =
  "8b767f986c749b0462768ef6bf5331df2e956eca572e1d8b807a3e2338fdd0dc/stage";
//38b4c8d9046444d0805453dd00a2828d
const App = () => {
  const classes = useStyles();
  const [newsArticles, setNewsArticles] = useState([]);
  const [activeArticle, setactiveArticle] = useState(-1);

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if (command === "newHeadlines") {
          setNewsArticles(articles);
          setactiveArticle(-1);
        } else if (command === "highlight") {
          setactiveArticle((prevArticle) => prevArticle + 1);
        }
      },
    });
  }, []);
  return (
    <div>
      <div className={classes.logoContainer}>
        <img
          src="https://voicebot.ai/wp-content/uploads/2019/10/alan.jpg"
          alt="alan-images"
          className={classes.alanLogo}
        ></img>
      </div>
      <NewsCards
        articles={newsArticles}
        activeArticle={activeArticle}
      ></NewsCards>
    </div>
  );
};

export default App;
