const tasks = [
  {title: "Comprar comida para o gato", type: "Urgente"},
  {title: "Consertar Computador", type: "Importante"},
  {title: "Beber água", type: "Normal"},
  {title: "Enviar relatório trimestral", type: "Importante"},
  {title: "Fazer exercícios físicos", type: "Normal"},
  {title: "Agendar consulta médica", type: "Urgente"},
  {title: "Ler pelo menos um capítulo de um livro", type: "Normal"},
  {title: "Limpar a despensa", type: "Importante"},
  {title: "Pagar a conta de energia", type: "Urgente"},
  {title: "Assistir a um documentário interessante", type: "Normal"},
];





function renderElements(arry){
  
  const ul = document.querySelector('ul')

  ul.innerHTML = ''

  for(let i = 0; i < arry.length; i++){
  
    const task = arry[i]
  
    const taskItem = createTaskItem(arry[i].title, arry[i].type)
    console.log(taskItem);
    
   ul.appendChild(taskItem);
    
  }
  
}
renderElements(tasks);





function createTaskItem(title,type){
  const li = document.createElement('li')
  const div = document.createElement('div')
  const span = document.createElement('span')
  const p = document.createElement('p')
  const button = document.createElement('button')

  
   li.classList.add('task__item');
   div.classList.add('task-info__container')
   p.innerText = title
   console.log(title);
  if(type === 'Urgente'){
     span.classList.add("span-urgent")
   } else if(type === "Importante"){
     span.classList.add("span-important")
   } else if(type === "Normal"){
     span.classList.add("span-normal")
   }
   button.classList.add("task__button--remove-task")

   div.appendChild(span)
   div.appendChild(p)
   li.appendChild(div)
   li.appendChild(button)
   return li
 }
 
 console.log(createTaskItem());



/*

function createTaskItem(tasks){

  const li = document.createElement('li')
  const div = document.createElement('div')
  const span = document.createElement('span')
  const p = document.createElement('p')
  const button = document.createElement('button')

  li.classList.add("task__item")
  div.classList.add("task-info__container")
  p.innerText = tasks.title

  if(tasks.type === 'Urgente'){
     span.classList.add("span-urgent")
  } else if(tasks.type === "Importante"){
    span.classList.add("span-important")
  } else if(tasks.type === "Normal"){
    span.classList.add("span-normal")
  }
 button.classList.add('task__button--remove-task')

 
  div.appendChild(span)
  div.appendChild(p)
  li.appendChild(div) 
  li.appendChild(button)
  console.log(li); 
 }
createTaskItem(tasks) */













