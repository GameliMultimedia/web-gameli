import { Articlecard } from "./Articlecard"
import { useState } from 'react'

export const Newsbar = ({ articles }) => {

return (
    <div className="w-9/12">
        <div className="mt-4">
            <p className="text-2xl text-bold text-center">ACTUALITÉS</p>
        </div>
        {/* For each article, create an artcile card */}
        <div className="grid grid-cols-3 ">
            {articles.map((article) => (
                <Articlecard key={article.id} src={"http://localhost:1337".concat(article.Cover.url)} title={article.Title} content={article.Summary}/>
            ))}
        </div>        
    </div>
    )
}
