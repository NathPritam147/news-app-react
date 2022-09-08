import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
// import InfiniteScroll from "react-infinite-scroll-component";
import LoadingBar from 'react-top-loading-bar';

export default class News extends Component {
  static defaultProps = {
    title: "NewsLive",
    country: "in",
    pageSize: 6,
    category: "general",
  };

  static propTypes = {
    title: PropTypes.string,
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };

    document.title = `${this.capitalizeFirstLetter(
      this.props.category
    )} - NewsLive`;
  }

  updateNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=41d31745fefa4ae29ad07916afb23e7a&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    console.log(data)
    let parsedArticles = await data.json();
    this.setState({
      articles: parsedArticles.articles,
      totalResults: parsedArticles.totalResults,
      // page: this.state.page +1,
      loading: false,
    });
  };

  handleNextClick = async () => {
    // if (
    //   this.state.page + 1 <
    //   Math.ceil(this.state.totalResults / this.props.pageSize)
    // ) {
    //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country
    //     }&category=${this.props.category
    //     }&apiKey=41d31745fefa4ae29ad07916afb23e7a&page=${this.state.page + 1
    //     }&pageSize=${this.props.pageSize}`;
    //   this.setState({ loading: true });
    //   let data = await fetch(url);
    //   let parsedArticles = await data.json();
    //   this.setState({
    //     articles: parsedArticles.articles,
    //     page: this.state.page + 1,
    //     loading: false,
    //   });
    // }
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  };

  handlePreviousClick = async () => {
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country
    //   }&category=${this.props.category
    //   }&apiKey=41d31745fefa4ae29ad07916afb23e7a&page=${this.state.page - 1
    //   }&pageSize=${this.props.pageSize}`;
    // this.setState({ loading: true });
    // let data = await fetch(url);
    // let parsedArticles = await data.json();
    // this.setState({
    //   articles: parsedArticles.articles,
    //   page: this.state.page - 1,
    //   loading: false,
    // });
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };

  // fetchMoreNews = async () => {
  //   this.setState({ page: this.state.page+1});
  //   console.log("pg1", this.state.page);
  //   // const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=41d31745fefa4ae29ad07916afb23e7a&page=${this.state.page}&pageSize=${this.props.pageSize}`;
  // // this.setState({ loading: true });
  // let data = await fetch(url);
  // let parsedArticles = data ? await data.json() : undefined;
  // this.setState({
  //   articles: parsedArticles.articles ? this.state.articles.concat(parsedArticles.articles) : [],
  //   totalResults: parsedArticles.totalResults,
  //   // loading: false,
  // });

  // console.log("abc", this.state.articles.length);
  // };

  async componentDidMount() {

    this.updateNews();
  }

  componentWillUnmount() {

  }

  render() {
    return (
      <>
        <h1 className="text-center my-4">
          NewsLive - Top {this.capitalizeFirstLetter(this.props.category)}{" "}
          Headlines
        </h1>
        <hr />
        {this.state.loading && !this.state.articles && <Spinner />}
        {/* <InfiniteScroll
          dataLength={this.state.articles ? this.state.articles.length : 0} //This is important field to render the next data
          // next={this.fetchMoreNews()}
          hasMore={this.state.articles? this.state.articles.length < this.state.totalResults : false}
          loader={<Spinner />}
        > */}
        <div className="container">
          <div className="row">
            {
              this.state.articles ? this.state.articles.map((article) => {
                return (
                  <div className="col-md-4" key={article.url}>
                    <NewsItem
                      title={article.title ? article.title : ""} description={article.description ? article.description : ""}
                      imageUrl={article.urlToImage} newsUrl={article.url} author={article.author ? article.author : "Unknown"}
                      publishedAt={article.publishedAt ? new Date(article.publishedAt).toUTCString() : "-"}
                    />
                  </div>
                );
              }) : <div className="container my-3">No data found</div>
            }
          </div>
        </div>
        {/* </InfiniteScroll> */}
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-primary"
            onClick={this.handlePreviousClick}>
            &larr; Previous
          </button>
          <button
            disabled={this.state.articles ?
              this.state.page + 1 >=
              Math.ceil(this.state.totalResults / this.props.pageSize) : true
            }
            type="button"
            className="btn btn-primary"
            onClick={this.handleNextClick}>
            Next &rarr;
          </button>
        </div>
      </>
    );
  }
}
