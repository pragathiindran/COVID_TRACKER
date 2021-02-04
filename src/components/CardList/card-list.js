import React from 'react'
 import './card-list.styles.css'
 import {NewsCard} from '../Card/card'

const CardLIst = props => (
    <div className='card-list'>
        {   props.articles.map(article=>
        <NewsCard article={article}/>
        )
        }
    </div>);
export default CardLIst