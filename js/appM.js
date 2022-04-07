const form = document.querySelector('#message-form');

form.addEventListener('submit' , function(e){
    e.preventDefault();

    const message = document.querySelector('#message');
    const feedBack = document.querySelector('.feedback');
    const messageContent =document.querySelector('.message-content');

    if (message.value === ''){
        feedBack.classList.add('show');
        setTimeout(function(){
            feedBack.classList.remove('show')
        }, 2000)
    }else{
        messageContent.textContent = message.value;
    }
})