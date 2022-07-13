import './less/index.less'

// Your code goes here!
const funBusColor = document.querySelector('h1');
funBusColor.addEventListener('click', event => {
    event.target.style.color = 'orange';
    event.target.style.fontSize = '4em';
    event.target.textContent = "Let's get this party started!!!";
})

const linksMouseOver = document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('mouseover', event => {
        event.target.style.color = 'yellow';
    })
})

const linksMouseOut = document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('mouseout', event => {
        event.target.style.color = 'black';
    })
})

const docMouseEnter = document.querySelectorAll('div').forEach(link => {
    link.addEventListener('mouseenter', event => {
        event.target.style.backgroundColor = 'pink';
    })
})

const docMouseLeave = document.querySelectorAll('div').forEach(link => {
    link.addEventListener('mouseleave', event => {
        event.target.style.backgroundColor = 'white';
    })
})

window.addEventListener('load', event => {
    console.log('page is fully loaded');
})

const docCopy = document.querySelectorAll('*').forEach(el => {
    el.addEventListener('copy', event => {
        alert `Your copy was completed`;
    })
})

const dblClick = document.querySelectorAll('*').forEach(el => {
    el.addEventListener('dblclick', event => {
        event.target.textContent = `Your previous text has been replaced because of ${event.type} event.`;
    })
})

document.addEventListener('mousemove', event => {
    console.log(`.: ${event.clientX}...y: ${event.clientY}`);
})

