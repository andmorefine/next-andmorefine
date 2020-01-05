import Header from './Header'
import { css } from 'glamor';

const layoutStyle = css({
  'text-align': 'center',
  margin: '20px',
  padding: '20px',
  border: '1px solid #DDD'
})

export default function Layout(props) {
  return (
    <div {...layoutStyle}>
      <Header />
      {props.children}
    </div>
  )
}
