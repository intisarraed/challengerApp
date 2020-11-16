   let input = document.getElementById('topic')
   let button = document.getElementById('saveTopic')
   let itemsArray = localStorage.getItem('topic') ? JSON.parse(localStorage.getItem('topic')) : [];

   localStorage.setItem('topic', JSON.stringify(itemsArray))

    button.addEventListener('click', function (e) {
        e.preventDefault()
        itemsArray.push(topic.value)
        localStorage.setItem('topic', JSON.stringify(itemsArray))
        topic.value = ''   
    })