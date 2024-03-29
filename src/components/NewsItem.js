import React from 'react'
import Card from 'react-bootstrap/Card';

const NewsItem =(props)=>{
    let {title,description,img,url,author,date,source}=props;
    return (
        <div className='my-3'>
            <div className="card" >
                {/* <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style = {{left:'90%',zIndex:'1'}}>{source}
                </span> */}
                <img src={img} className="card-img-top" alt="..."/>
                <Card.Footer>
                    <small className="text-muted">Author: <span className="badge bg-warning">{author?author:"Unknown"}</span> on <span className="badge bg-secondary">{new Date(date).toGMTString()}</span></small>
                </Card.Footer>
                <div className="card-body">
                Source: <span className="badge bg-success"> {source}</span>
                    <h5 className="card-title">{[title.slice(0,40),(title.length>=50)?"....":""]}</h5>
                    <p className="card-text">{[description.slice(0,80),(description.length>=80)?"......":""]}</p>
                    <a rel="noreferrer" href={url} target="_blank" className="btn btn-sm btn-primary">Read More</a>
                </div>
            </div>
        </div>
    )
}

export default NewsItem