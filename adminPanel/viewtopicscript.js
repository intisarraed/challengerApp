const data = JSON.parse(localStorage.getItem('topic'))
 

        const liMaker = (topic) => {
            const table = document.createElement('table')
            const tr = document.createElement("tr");
            const td = document.createElement("td");
            td.textContent = data
            console.log(data)
        }
            // tr.appendChild(td);
            //  table.appendChild(tr);
            // }
            // data.forEach((topic) => {
            //     liMaker(topic)
            //     console.log(topic)
            //     })
       
// const data = JSON.parse(localStorage.getItem('topic'))
// const topic = document.getElementById()
// data.forEach((topic) => {
//     liMaker(topic)
//     })
// const liMaker = (text) => {
//     const table = document.createElement('table')
//     const tr = document.createElement("tr");
//     const td = document.createElement("td");
//     td.textContent = text
//     tr.appendChild(td);
//     table.appendChild(tr);
//     }
