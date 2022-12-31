import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
       let {title,description,img,url}=this.props;
        return (
            <div className='my-3'>
                <div className="card" >
                    <img src={img} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{[title.slice(0,40),(title.length>=50)?"....":""]}</h5>
                        <p className="card-text">{[description.slice(0,80),(description.length>=80)?"......":""]}</p>
                        <a rel="noreferrer" href={url} target="_blank" className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem