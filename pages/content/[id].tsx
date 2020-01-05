import Layout from '../../components/MyLayout'
import { css } from 'glamor';

let imageStyle = css({
  color: 'red',
  width: '100%'
})

let h1style = css({
  'text-align': 'center',
})

const Post = props => (
  <Layout>
    <h1 {...h1style}>{props.name}</h1>
    <div dangerouslySetInnerHTML={{__html: props.summary}} />
    <img src={props.image} {...imageStyle} />
  </Layout>
)

Post.getInitialProps = async function ({ query }) {
  const res = await fetch(`https://api.tvmaze.com/shows/${query.id}`)
  const data = await res.json()

  const result_image = data.image.original.replace(/http/g, 'https');;

  return {
    name: data.name,
    summary: data.summary,
    image: result_image,
  }
}

export default Post
