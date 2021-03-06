import { Articlecard } from "./Articlecard"
import { useState } from 'react'

export const Newsbar = ({ articles }) => {

return (
    <div className="w-9/12">
        <div className="mt-4 mb-2">
            <p className="text-4xl font-sans font-bold text-center">ACTUALITÉS</p>
        </div>
        {/* For each article, create an artcile card */}
        <div className="grid grid-cols-3 ">
            {articles.map((article) => (
                <Articlecard key={article.id} article={article}/>
            ))}
        </div>        
    </div>
    )
}
