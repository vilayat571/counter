var btnI = document.querySelector('button:nth-child(1)');
var btnR = document.querySelector('button:nth-child(2)');
var btnD = document.querySelector('button:nth-child(3)');
var text = document.querySelector('h1').textContent;

btnI.addEventListener('click',() => {
    document.querySelector('h1').textContent = Number(document.querySelector('h1').textContent) + 1;
});

btnR.addEventListener('click',() => {
    document.querySelector('h1').textContent = 0;
});

btnD.addEventListener('click',() => {
    document.querySelector('h1').textContent > 0 ?
        document.querySelector('h1').textContent = Number(document.querySelector('h1').textContent) - 1
        :
        document.querySelector('h1').textContent = 0;
    document.querySelector('h1').textContent == 0 && alert('You can not decrase count low from 0')

});


var div = document.querySelector('body').firstElementChild.firstElementChild;
div.style.display = 'flex';
div.style.flexDirection = 'column';
div.style.alignItems = 'center';
div.style.justifyContent = 'space-between';
div.firstElementChild.style.fontSize = '100px';
div.firstElementChild.style.fontWeight = 'bold';

var main = document.getElementById('main').style;
main.width = '100%';
main.height = '100vh';
main.display = 'flex';
main.justifyContent = 'center';
main.alignItems = 'center';

for (let i = 0; i < div.lastElementChild.children.length; i++) {
    div.lastElementChild.children[i].style.padding = '6px 15px';
    div.lastElementChild.children[i].style.color = 'white';
    div.lastElementChild.children[i].style.fontSize = '18px'
    div.lastElementChild.children[i].style.background = 'black';
    div.lastElementChild.children[i].style.border = 'none';
    div.lastElementChild.children[i].style.outline = 'none';
    div.lastElementChild.children[i].style.margin = '0px 5px';
    div.lastElementChild.children[i].style.borderRadius = '2px';
    div.lastElementChild.children[i].style.cursor = 'pointer';
}
