import React, { Component } from 'react'

export class NewsItem extends Component { 
  render() {
   let {title, description, imageUrl, newsUrl, author, date, source} = this.props;
    return (
      <div>
        <div className="card">
        <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" 
        style={{position: "relative", left: "90%",zIndex: 1}}>
    {source}
  </span>
  <img src={imageUrl?imageUrl:'https://img.global.news.samsung.com/global/wp-content/uploads/2024/01/Unpacked-2024-Invitation_Thumb728.jpg'} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <p className="card-text"><small className="text-body-secondary">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
    <a href={newsUrl} target='blank' className="btn btn-dark btn-sm">Read More</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem
