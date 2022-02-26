import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class NewsFeed extends Component {
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
      page_no: 1,
    };
  }

  async componentDidMount() {
    // this.setState({loading:true});
    // setTimeout(()=>{
    //   this.setState({loading:false});
    // },2000);
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=e8e6f34c45c04b548dc5795e17fee310&pageSize=${this.props.page_size}&page=${this.state.page_no}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      page: 1,
    });
  }
  handlePrevPage = async () => {
    if (this.state.page_no > 1) {
      // this.componentDidMount();
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=e8e6f34c45c04b548dc5795e17fee310&pageSize=${
        this.props.page_size
      }&page=${this.state.page_no - 1}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        page_no: this.state.page_no - 1,
        articles: parsedData.articles,
      });
    }
  };
  handleNextPage = async () => {
    if (
      Math.ceil(this.state.totalResults / this.props.page_size) >=
      this.state.page_no + 1
    ) {
      // this.componentDidMount();
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=e8e6f34c45c04b548dc5795e17fee310&pageSize=${
        this.props.page_size
      }&page=${this.state.page_no + 1}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        page_no: this.state.page_no + 1,
        articles: parsedData.articles,
      });
    }
  };

  render() {
    let counter = 0;
    return (
      <div>
        <div className="container my-3">
          <h1 className="text-center">News-Villa
            <span>
              <h4>Grab the daily dose to top headlines</h4>
            </span>{" "}</h1>
            <br />
          <div className="row">
            {this.state.articles?.map((element) => {
              return (
                <div
                  className="col-md-4 col-sm-4 mx-6"
                  key={element.url ? element.url : counter}
                >
                  <NewsItem
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    img={
                      element.urlToImage
                        ? element.urlToImage
                        : "https://images.mktw.net/im-492005/social"
                    }
                    url={element.url ? element.url : "https://www.google.com/"}
                  />
                </div>
              );
            })}
          </div>
          <div className="container d-flex justify-content-around">
            <button
              type="button"
              className="btn btn-dark"
              disabled={this.state.page_no <= 1}
              onClick={this.handlePrevPage}
              >
              &laquo; Previous
            </button>
            <button
              type="button"
              className="btn btn-dark"
              disabled={Math.ceil(this.state.totalResults / this.props.page_size) < this.state.page_no + 1}
              onClick={this.handleNextPage}
            >
              Next &raquo;
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsFeed;
