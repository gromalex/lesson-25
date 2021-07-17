class Markdown {
  paragraph = /^(.+)$/gim // TODO:
  h1 = /#\s(.+)$/gim
  link = /\[(.+)\]\((.+)\)/gim
  list = /(^-\s.+$)!-/gim // TODO:
  // listItem = /^-\s(.+)$/gim
  // list = /(<li>.+<\/li>)$[^<]/gim

  transform (content) {
    let html = content

    html = html.replace(this.h1, '<h1>$1</h1>')
               .replace(this.link, '<a href="$2">$1</a>')
              //  .replace(this.listItem, '<li>$1</li>')
               .replace(this.list, '<ul>$1</ul>')

    return html
  }
}

export { Markdown }
