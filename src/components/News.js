import React, { Component } from 'react';
import NewsItem from './NewsItem';

class News extends Component {

    constructor(){
        super();
        this.state = {
            articles : [],
            loading : false,
            page : 1
        }
    }

    async componentDidMount(){
        let url = "https://newsapi.org/v2/everything?q=tesla&from=2024-09-25&sortBy=publishedAt&apiKey=2468505315d04233ababb17156439b67&page=1&pagesize=12";
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({articles : parsedData.articles, totalResults : parsedData.totalResults})
    }

    handleNextClick= async ()=>{
        console.log("Next")
        if(this.state.page + 1 > Math.ceil(this.state.totalResults / 12)){

        }
        else{
            let url = `https://newsapi.org/v2/everything?q=tesla&from=2024-09-25&sortBy=publishedAt&apiKey=2468505315d04233ababb17156439b67&page=${this.state.page + 1}&pagesize=12`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            page : this.state.page + 1,
            articles : parsedData.articles
        })
        }
    }

    handlePrevCllick= async()=>{
        console.log("previous")
        let url = `https://newsapi.org/v2/everything?q=tesla&from=2024-09-25&sortBy=publishedAt&apiKey=2468505315d04233ababb17156439b67&page=${this.state.page - 1}&pagesize=12`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            page : this.state.page - 1,
            articles : parsedData.articles
        })
    }

    render() { 
        return (
            <div className='container my-3'>
                <h2 className='text-center mb-5'>Top HeadLines</h2>
                <div className="row">
                {this.state.articles.map((element)=>{
                    return <div className="col-md-4" key={element.url}>
                    <NewsItem className="col-md-4" title={element.title?element.title:""} description={element.description?element.description:""} imageurl={element.urlToImage?element.urlToImage:"https://media.zenfs.com/en/reuters-finance.com/ad6aafaeabfad877106aa3b23b968c44"} newsUrl={element.url}/>
                </div>
                })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button type="button" disabled={this.state.page <=1} className="btn btn-dark" onClick={this.handlePrevCllick}>&laquo; Previous</button>
                    <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &raquo;</button>
                </div>
            </div>
        );
    }
}

export default News;