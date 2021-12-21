//Function to create a HTML elements
function createNode(element){
  return document.createElement(element);
}


//Function that should append the element with parent 

function append(parent, el){
  return parent.appendChild(el);
}


const ul=document.getElementById('imglst');

const url="https://randomuser.me/api/?results=100";

fetch(url).then((resp)=>resp.json()).then(function(data){

  let authors=data.results;
return authors.map(function(author){
  let li=createNode('li')
  let img=createNode('img');
  let span=createNode('span');
  img.src=author.picture.large
  span.innerHTML=`${author.name.first} ${author.name.last} ${author.email}`;
  append(li,img);
  append(li,span);
  append(ul,li);
})
})