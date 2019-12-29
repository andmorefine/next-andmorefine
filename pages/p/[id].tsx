import Layout from '../../components/MyLayout'
import { css } from 'glamor';

let box = css({
  color: 'red',
  width: '100%'
})

const Post = props => (
  <Layout>
    <h1>{props.show.name}</h1>
    <p>{props.show.summary}</p>
    <img src={props.show.image.original} {...box} />
  </Layout>
)

Post.getInitialProps = async function ({ query }) {
  const res = await fetch(`http://api.tvmaze.com/shows/${query.id}`)
  const data = await res.json()

  return {
    show: data
  }
}

export default Post
