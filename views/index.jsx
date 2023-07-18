const React = require('react')
const Default = require('./layouts/default')

function Index ({ breads }) {
    // .map
    const breadDisplay = breads.map((bread, i) => {
        return (
            <li key={bread._id}>
                <a href={`/breads/${bread._id}`}>
                    {bread.name}
                </a>
            </li>
        )
    })
    return (
      <Default>
        <h2>Index Page</h2>
        <ul>
            {breadDisplay}
        </ul>
        <div>
            <a href='/breads/new'>
                <button>
                Add a new bread
                </button>
            </a>
        </div>
      </Default>
    )
}

module.exports = Index

//MVC
//Model
//View
//Controller