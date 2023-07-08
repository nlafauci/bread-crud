const React = require('react')

function Default(html) {
    const me = 'nick'
    const mike = 'mike'
  return (
    <html>
    <head>
      <title>Default</title>
    </head>
    <body>
      <h1>HTML Rendered! hello {me} hello {mike} </h1>
      <div className="container">
        {html.children}
      </div>
    </body>
    </html>
  )
}

module.exports = Default