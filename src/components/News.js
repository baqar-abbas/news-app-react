import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {
    static defaultProps = {
        country: 'us',
        pageSize: 8,
        category: 'general'  
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }
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
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6389d6af32b0408c8c65427f0470f1cb&page=1&pageSize=${this.props.pageSize}`
        this.setState({loading: true});
        let data = await fetch(url);
        
        let parsedData = await data.json();   
        console.log(parsedData);
        this.setState({
          articles: parsedData.articles, 
          totalResults: parsedData.totalResults,
          loading: false
        })
     }

     handlePrevClick = async () => {
     console.log("Previous");
     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6389d6af32b0408c8c65427f0470f1cb&page=${this.state.page-1}&pageSize=${this.props.pageSize}`
     this.setState({loading: true}); 
     let data = await fetch(url);
      
      let parsedData = await data.json();   
      console.log(parsedData);
      // this.setState({articles: parsedData.articles})

      this.setState({
        page: this.state.page-1,
        articles: parsedData.articles,
        loading: false
      })
     }

      handleNextClick = async () => {
      console.log("Next");
    if(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)) {

    }
    else {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6389d6af32b0408c8c65427f0470f1cb&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
      this.setState({loading: true});
      let data = await fetch(url);
      
      let parsedData = await data.json();   
      // this.setState({loading: false});
      // this.setState({articles: parsedData.articles})

      this.setState({
        page: this.state.page+1,
        articles: parsedData.articles,
        loading: false
      })
    }
     }

     capitalize = (word) => {
      const lower = word.toLowerCase();
      return lower.charAt(0).toUpperCase() + lower.slice(1);
  }
     
  render() {
    return (
      <div className="container my-3">
        <h1 className="heading" myStyle={{margin: "35px 0"}}>News App - Top Headlines</h1>
        <h2 className='text-center'>{this.capitalize(this.props.category)}</h2>
        {this.state.loading && <Spinner/>}
        <div className="row my-3">
        {!this.state.loading && this.state.articles.map((element) => {
            return (<div key={element.url} className="col-md-4">
            <NewsItem title={element.title?element.title:''} description={element.description?element.description:''} imageUrl = {element.urlToImage} newsUrl={element.url}
            author={element.author} date={element.publishedAt} source={element.source.name}/>
            </div>);
        })}
            
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
