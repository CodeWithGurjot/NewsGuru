import React from "react";

const NewsItem =(props)=>{
    return (
      <div>
        <div className="card mt-2" style={{ height: "600px", margin: "10px 0px" }}>
          <img src={props.imageUrl} className="card-img-top" alt="..." style={{ height: "300px" }} />
          <div className="card-body">
            <span
              className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ zIndex: "1", left: "80%" }}>{props.source}
            </span>
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}...</p>
            <p className="card-text">
              <small className="text-muted">
                By {props.author ? props.author : "Unknown"} on{" "}
                {new Date(props.date).toLocaleString()}
              </small>
            </p>
            <a href={props.newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-primary" style={{ position: "absolute", bottom: 8 }}>
              Read More
            </a>
          </div>
        </div>
      </div>
    );
}

export default NewsItem;
