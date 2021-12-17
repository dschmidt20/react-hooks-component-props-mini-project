import React from "react";
import blogData from "../data/blog";
import Header from './Header'
import ArticleList from './ArticleList'
import About from "./About";

console.log(blogData);

function App() {
  return (
    <div className="App">
      
      <Header blogName={blogData.name}/>
      <About blogAbout={blogData.about} blogImage={blogData.image}/>
      <ArticleList articles={blogData.posts}/>
    </div>
  );
}

export default App;
