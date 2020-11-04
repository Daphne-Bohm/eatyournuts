document.addEventListener('DOMContentLoaded', () => {

    console.log('footer is loaded');

    const textDate = document.getElementById('date');

    const date = new Date().getFullYear();
    textDate.innerText = date;

})