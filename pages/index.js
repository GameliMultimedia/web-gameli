import { Contentbar } from '../components/Contentbar'
import { Navbar } from '../components/Navbar' 
import { Newsbar } from '../components/Newsbar' 
import { Adbar } from '../components/Adbar'

export default function Index({articles, error}) {
      
  console.log()
  if (error) {
    return <div>An error occured: {error.message}</div>;
  }

  return (
    <div>
      <Navbar />
      <Contentbar/>
      <main className="flex w-4/6 mx-auto">
        <Newsbar articles={articles}/>
        <Adbar adclass="w-3/12 mx-7 relative h-screen"/>
      </main>
    </div>
  )
}

Index.getInitialProps = async (ctx) => {
  try {
    // Parses the JSON returned by a network request
    const parseJSON = resp => (resp.json ? resp.json() : resp);
    // Checks if a network request came back fine, and throws an error if not
    const checkStatus = resp => {
      if (resp.status >= 200 && resp.status < 300) {
        return resp;
      }

      return parseJSON(resp).then(resp => {
        throw resp;
      });
    };

    const headers = {
      'Content-Type': 'application/json',
    };

    const articles = await fetch('http://localhost:1337/articles', {
      method: 'GET',
      headers,
    })
      .then(checkStatus)
      .then(parseJSON);

    return { articles };
  } catch (error) {
    return { error };
  }
};
