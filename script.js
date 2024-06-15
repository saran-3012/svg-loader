const page = document.querySelector('body');
const loaderContainer = document.querySelector('.loader_container');
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const reset = document.querySelector('#reset');
const theme = document.querySelector('#theme');

btn1.addEventListener('click', () => {
    loaderContainer.classList.remove('failure');
    loaderContainer.classList.add('success');
});

btn2.addEventListener('click', () => {
    loaderContainer.classList.remove('success');
    loaderContainer.classList.add('failure');
});

reset.addEventListener('click', () => {
    loaderContainer.classList.remove('success');
    loaderContainer.classList.remove('failure');
});

theme.addEventListener('click', () => {
    if(page.classList.contains('dark')){
        page.classList.remove('dark');
    }
    else{
        page.classList.add('dark');
    }
});

