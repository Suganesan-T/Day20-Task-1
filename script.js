var title = document.createElement("h1")
title.innerHTML = "Breaking Bad Quotes"

document.body.append(title)

var container = document.createElement("div")
container.className = "container"

var row = document.createElement("div")
row.className = "row"

async function foo(){
    var api = await fetch("https://api.breakingbadquotes.xyz/v1/quotes/101")
    var res = await api.json()
    bar(res)
}

foo()

function bar(res){
    for(i=1;i<res.length;i++){
        var column = document.createElement("div")
        column.className = "col-md-12"
        column.innerHTML = `<div class="card">
        <div class="card-header">
          Quote ${i}  <i class="fa fa-flask" aria-hidden="true"></i>
        </div>
        <div class="card-body">
          <blockquote class="blockquote mb-0">
            <p>${res[i].quote}</p>
            <footer class="blockquote-footer">${res[i].author}<cite title="Source Title"></cite></footer>
          </blockquote>
        </div>
      </div>`

      row.append(column)
      container.append(row)
      document.body.append(row)
    }
}