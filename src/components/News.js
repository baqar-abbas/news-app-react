import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    constructor(){
        super();
        console.log("Hello I am a constructor from News")
        this.state = {
            articles: [],
            loading: false
        }
    }

    async componentDidMount(){
        console.log("Component Did Mount");
        let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=6389d6af32b0408c8c65427f0470f1cb"
        let data = await fetch(url);
        
        let parsedData = await data.json();   
        console.log(parsedData);
        this.setState({articles: parsedData.articles})
     }
  render() {
    return (
      <div className="container my-3">
        <h2 className="heading">News App - Top Headlines</h2>
        
        <div className="row my-3">
        {this.state.articles.map((element) => {
            return (<div key={element.url} className="col-md-4">
            <NewsItem title={element.title?element.title:''} description={element.description?element.description:''} imageUrl = {element.urlToImage} newsUrl={element.url}/>
            </div>);
        })}
            
        </div>
      </div>
    )
  }
}

export default News
