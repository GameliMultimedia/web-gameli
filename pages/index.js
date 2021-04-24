import { Contentbar } from '../components/Contentbar'
import { Navbar } from '../components/Navbar' 
import { Newsbar } from '../components/Newsbar' 
import { Adbar } from '../components/Adbar'

export default function Index({articles}) {
  return (
    <div>
      <Navbar />
      <div className="">
        <Contentbar/>
        <main className="flex w-4/6 mx-auto">
          <Newsbar articles={articles}/>
          <Adbar adclass="w-3/12 mt-8 mx-7 relative h-full"/>
        </main>
      </div> 
    </div>
  )
}


// Fetch data from Strapi CMS

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
