let question={
    topic: localStorage.getItem('topic'),
    title: document.getElementById("title").value,
    noOfQeus: document.getElementById("question").value
}
let button = document.getElementById('saveques')
let quesArray = localStorage.getItem('ques') ? JSON.parse(localStorage.getItem('ques')) : [];
localStorage.setItem('ques', JSON.stringify(itemsArray))




