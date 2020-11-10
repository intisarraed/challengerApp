   let input = document.getElementById('topic')
   let form = document.querySelector('form')
       let itemsArray = localStorage.getItem('topic')
    ? JSON.parse(localStorage.getItem('topic'))
    : [];
    localStorage.setItem('topic', JSON.stringify(itemsArray))
    const data = JSON.parse(localStorage.getItem('topic'))
    const liMaker = (text) => {
    const table = document.createElement('table')
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    td.textContent = text
    tr.appendChild(td);
    table.appendChild(tr);
    }

    button.addEventListener('click', function (e) {
        e.preventDefault()
        itemsArray.push(topic.value)
        localStorage.setItem('topic', JSON.stringify(itemsArray))
        liMaker(topic.value)
        topic.value = ''
        data.forEach((topic) => {
        liMaker(topic)
        })
    })
