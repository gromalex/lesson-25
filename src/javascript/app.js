// import { Editor } from './editor';

// new Editor()

// console.log('Test')

// ----------------------------------------------------------------
import React from 'react'
import ReactDOM from 'react-dom'

const rootElement = document.querySelector('#root')

// Class component
class Card extends React.Component {
  render () {
    return (
      <div className="card">
        <div className="card__title">{this.props.title}</div>
        <div className="card__description">{this.props.description}</div>
      </div>
    )
  }
}

// Function component
function Button (props) {
  let classList = 'btn'

  if (props.type) {
    classList += ' btn-' + props.type
  }

  const handleClick = () => console.log('Click!')

  return <button className={classList} onClick={handleClick}>{props.children}</button>
}

// ReactDOM.render(
//   <Card title="Hello" description="Мы будем называть такие компоненты «функциональными», так как они буквально являются функциями." />,
//   rootElement
// )

function App (props) {
  return <div>{props.children}</div>
}

ReactDOM.render(
  <App>
    <Button type="primary">Кнопка</Button>

  </App>,
  rootElement
)
