import React from 'react'
import Article from './Article'

export default function ArticleList({articles}) {
    const mappedArticles = () => {
       return articles.map(({ id, title, date, minutes, preview}) => {
            return <Article
            title={title}
            date={date} 
            minutes={minutes}
            preview={preview}
            key={id}
            />
        })
    }
    return (
        <main>
        {mappedArticles()}    
        </main>
    )
}
