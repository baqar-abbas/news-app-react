import React, { Component } from 'react'

export class NewsItem extends Component { 
  render() {
   let {title, description, imageUrl, newsUrl} = this.props;
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
  <img src={imageUrl?imageUrl:'https://img.global.news.samsung.com/global/wp-content/uploads/2024/01/Unpacked-2024-Invitation_Thumb728.jpg'} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href={newsUrl} target='blank' className="btn btn-dark">Read More</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem
