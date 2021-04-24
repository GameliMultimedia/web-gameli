import { Navbar } from '../components/Navbar' 
import Link from 'next/link'

export default function News({articles}) {
  return (
  <div>
    <Navbar />
    <div className="flex justify-center">
      <div className="h-screen w-1/6"></div>
      <div className="w-2/5">
            <p className="text-4xl my-4 font-sans font-bold text-center">ACTUALITÉS</p>
            {articles.map((article) => (
              <Link key={article.Title} href={`/news/${article.id}`}>
                <a className="flex my-4">
                  <img
                    src={"http://localhost:1337".concat(article.Cover.url)}
                    className="w-1/4"
                  />
                  <div className="w-3/4">
                    <p className="text-lg font-bold mx-4 hover:text-red-700">{article.Title}</p>
                    <p className="text-md mx-4">{article.Summary}</p>
                  </div>          
                </a>
              </Link>
              
            ))}
      </div>  
      </div>
    </div>

)}

const url = process.env.ARTICLES_BASE_URL

export const getStaticProps = async () => {
  const res = await fetch(`${url}`)
  const articles = await res.json()

  return {
    props: {
      articles,
    },
  }
}
