import Link from 'next/link'
import { Navbar } from '../../components/Navbar' 
import ReactMarkdown from "react-markdown";


export default function Article({ article }) {

  return (
    <div>
        <Navbar />
        <div className="mx-auto w-3/6">
            <p className="text-center text-5xl font-bold my-8">{article.Title}</p>
            <div>
                <img
                    src={"http://localhost:1337".concat(article.Cover.url)}
                />
            </div>
            <ReactMarkdown
            components={{
              h1: ({node, ...props}) => <p className="text-4xl" {...props}/>,
              h2: ({node, ...props}) => <p className="text-3xl" {...props}/>,
              h3: ({node, ...props}) => <p className="text-2xl" {...props}/>,
              h4: ({node, ...props}) => <p className="text-xl" {...props}/>,
              h5: ({node, ...props}) => <p className="text-lg" {...props}/>,
              h6: ({node, ...props}) => <p className="text-base" {...props}/>,
              strong: ({node, ...props}) => <p className="font-bold" {...props}/>,
              em: ({node, ...props}) => <p className="italic" {...props}/>,
              ol: ({node, ...props}) => <ol className="list-decimal list-inside" {...props}/>,
              ul: ({node, ...props}) => <ul className="list-disc list-inside" {...props}/>,
            }}>{article.Content}</ReactMarkdown>
            
        </div>
    </div>
  )
}



const url = process.env.ARTICLES_BASE_URL

export const getStaticProps = async ( {params} ) => {
  const res = await fetch(`${url}/${params.id}`)
  const article = await res.json()

  return {
    props: {
      article,
    },
  }
}

export async function getStaticPaths() {
    const res = await fetch(`${url}`)
    const article = await res.json()
    const paths = article.map((article) => {
    return {
       
        params: { id: article.id.toString() }
    }
  })
  return {
    paths,
    fallback: false
  }
}