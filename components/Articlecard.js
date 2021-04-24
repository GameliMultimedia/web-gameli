import Link from 'next/link'
import Image from 'next/image'

export const Articlecard = ({article}) => {

    return (
        <Link key={article.Title} href={`/news/${article.id}`}>
            <a className="my-2 pb-2 mx-2 hover:text-red-600 hover:shadow-lg">
                <div className="block px-1 pt-1 h-auto w-full relative">
                    <Image
                        src={"http://localhost:1337".concat(article.Cover.url)}
                        layout='fill'
                        object-fit='cover'
                    />
                </div>
                <div className="block mx-1 mb-3">
                    <p className="text-xl font-sans font-bold">{article.Title}</p>
                </div>
                <div className="block mx-1">
                    <p className="overflow-hidden text-md font-sans text-black">{article.Summary}</p>
                </div>
                
                
            </a>        
        </Link>
        )
    }
    