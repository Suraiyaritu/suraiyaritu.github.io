const inputComment = document.querySelector('.input-comment');
const pressBtn = document.querySelector('.press-btn');
const textLists = document.querySelector('.text-lists');
const deleteBtn = document.querySelector('.delete-btn');


pressBtn.addEventListener('click', textListsCreate);
window.addEventListener('keypress', keyShow);
window.addEventListener('DOMContentLoaded', getText);
deleteBtn.addEventListener('click', removeLocalS);

function keyShow(e) {
    if (e) {
        pressBtn.classList.add('press-btn-remove');
    } else {
        pressBtn.classList.remove('press-btn-remove');
    }
}

function textListsCreate(e) {
    e.preventDefault();
    const item = document.createElement('li');
    item.classList.add('text-item');

    if (inputComment.value == '') {
        item.style.display = 'none';
        pressBtn.classList.remove('press-btn-remove');
    } else {
        item.innerText = inputComment.value;
        pressBtn.classList.add('press-btn-remove');
    }
    saveToLocal(inputComment.value)
    textLists.appendChild(item);

    inputComment.value = '';
}


function saveToLocal(text){
  let textItems;
  if(localStorage.getItem('textItems')===null){
     textItems =[];
  }else{
      textItems =JSON.parse(localStorage.getItem('textItems'))
}
textItems.push(text);
localStorage.setItem('textItems', JSON.stringify(textItems))
}
// localStorage.clear()

function getText(){
    let textItems;
  if(localStorage.getItem('textItems')===null){
     textItems =[];
  }else{
      textItems =JSON.parse(localStorage.getItem('textItems'))
}

textItems.forEach(function(titems){
    const item = document.createElement('li');
    item.classList.add('text-item');
   
    if(item.innerText = titems){
        
        pressBtn.classList.add('press-btn-remove');
    }else{
        item.style.display= 'none'
         pressBtn.classList.remove('press-btn-remove');
        
    }
    textLists.appendChild(item);
   

})
}

function removeLocalS(comment){
textLists.remove();
localStorage.clear()
}
