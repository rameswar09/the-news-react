import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Components/home'
import NewsDetails from './Components/news-details'
import TopNewsDetails from './Components/top-news-details'

function App() {
  return (
    <div className="App">

      <Route path="/" exact component={Home} />
      <Route path="/home/:source_id" exact component={Home} />
      <Route path="/news_details/:newsId" exact component={NewsDetails} />
      <Route path="/top_news_details/:newsId" exact component={TopNewsDetails} />


    </div>
  );
}

export default App;
