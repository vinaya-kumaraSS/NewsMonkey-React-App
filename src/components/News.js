import React, { Component } from 'react';
import NewsItem from './NewsItem';

class News extends Component {

    constructor(){
        super();
        this.state = {
            articles : [],
            loading : false
        }
    }

    async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=2468505315d04233ababb17156439b67";
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({articles : parsedData.articles})
    }
    render() {
        return (
            <div className='container my-3'>
                <h2 className='text-center mb-5'>Top HeadLines</h2>
                <div className="row">
                {this.state.articles.map((element)=>{
                    return <div className="col-md-4" key={element.url}>
                    <NewsItem className="col-md-4" title={element.title?element.title:""} description={element.description?element.description:""} imageurl={element.urlToImage?element.urlToImage:"https://techcrunch.com/wp-content/uploads/2024/05/Minecraft-keyart.jpg?resize=1200,720"} newsUrl={element.url}/>
                </div>
                })}
                </div>
            </div>
        );
    }
}

export default News;