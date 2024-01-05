import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    constructor(){
        super();
        console.log("Hello I am a constructor from News")
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }

    async componentDidMount(){
        console.log("Component Did Mount");
        let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=6389d6af32b0408c8c65427f0470f1cb&page=1&pageSize=18"
        let data = await fetch(url);
        
        let parsedData = await data.json();   
        console.log(parsedData);
        this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults})
     }

     handlePrevClick = async () => {
     console.log("Previous");
     let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=6389d6af32b0408c8c65427f0470f1cb&page=${this.state.page-1}&pageSize=18`
      let data = await fetch(url);
      
      let parsedData = await data.json();   
      console.log(parsedData);
      // this.setState({articles: parsedData.articles})

      this.setState({
        page: this.state.page-1,
        articles: parsedData.articles
      })
     }

      handleNextClick = async () => {
      console.log("Next");
    if(this.state.page + 1 > Math.ceil(this.state.totalResults/18)) {

    }
    else {
      let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=6389d6af32b0408c8c65427f0470f1cb&page=${this.state.page+1}&pageSize=18`
      let data = await fetch(url);
      
      let parsedData = await data.json();   
      console.log(parsedData);
      // this.setState({articles: parsedData.articles})

      this.setState({
        page: this.state.page+1,
        articles: parsedData.articles
      })
    }
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
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
        <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
