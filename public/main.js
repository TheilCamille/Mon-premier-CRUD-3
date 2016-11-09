/* globals fetch */
var update = document.getElementById('update');
var del = document.getElementById('delete');
var input = document.getElementsByTagName('input')[0];
var inputmessage = document.getElementsByTagName('input')[1];

update.addEventListener('click', function () {
    fetch('quotes', {
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            'name': input.value,
            'quote': inputmessage.value
        })
    })
        .then(response => {
        if (response.ok) return response.json()

})
    .then(data => {
        console.log(data)
    window.location.reload()
})
})

del.addEventListener('click', function () {
    fetch('quotes', {
        method: 'delete',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'name': input.value
        })
    }).then(function (response) {
        window.location.reload()
    })
})