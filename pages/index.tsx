import Layout from '../components/MyLayout'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import { css } from 'glamor';

let imageStyle = css({
  'text-align': 'left',
})

const Index = props => (
  <Layout>
    <h1>Batman TV Shows</h1>
    <ul {...imageStyle}>
      {props.shows.map(show => (
        <li key={show.id}>
          <Link href="/content/[id]" as={`/content/${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
)

Index.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  const data = await res.json()

  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    shows: data.map(entry => entry.show)
  }
}

export default Index
