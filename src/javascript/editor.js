import { Markdown } from './markdown';

class Editor {
  constructor () {
    this.markdown = new Markdown()

    this.textareaElement = document.querySelector('#textarea')
    this.buttonElement = document.querySelector('#button')
    this.outputElement = document.querySelector('#output')

    this._init()
  }

  _init () {
    this.handleClick = this._handleClick.bind(this)
    this.buttonElement.addEventListener('click', this.handleClick)
  }

  _handleClick () {
    console.log('Ok')
    const content = this.textareaElement.value
    const html = this.markdown.transform(content)

    this.outputElement.innerHTML = html
  }
}

export { Editor }
