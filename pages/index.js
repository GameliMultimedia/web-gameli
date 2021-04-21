import { Contentbar } from '../components/Contentbar'
import { Navbar } from '../components/Navbar' 
import { Newsbar } from '../components/Newsbar' 
import { Adbar } from '../components/Adbar'

export default function Index() {
  return (
    <div>
      <Navbar />
      <Contentbar/>
      <main className="flex w-4/6 mx-auto">
        <Newsbar />
        <Adbar adclass="w-3/12 mx-7 relative h-screen"/>
      </main>
    </div>
  )
}
