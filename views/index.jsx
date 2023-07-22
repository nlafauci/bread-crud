const React = require('react')
const Default = require('./layouts/default')

function Index ({ breads, bakers }) {
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
    const bakerDisplay = bakers.map((baker, i) => {
        return (
            <li key={baker._id}>
                <a href={`/bakers/${baker._id}`}>
                    {baker.name}
                </a>
            </li>
        )
    })
    return (
      <Default>
        <h2> Bakers </h2>
        <ul>
            {bakerDisplay}
        </ul>
        <h2>Breads</h2>
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