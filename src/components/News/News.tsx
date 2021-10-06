import React from 'react';
import classes from './News.module.css'
import news_image from '../../assets/images/news.jpg';

const News = () => {
    return (
        <div className={classes.item}>
            <img src={news_image} alt={'news_image'}/>
        </div>
    );
}

export default News;