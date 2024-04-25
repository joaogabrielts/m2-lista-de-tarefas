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
    const taskItem = createTaskItem(task)
   ul.appendChild(taskItem)

  }  
}
renderElements(tasks);


function createTaskItem(task) {
  const li = document.createElement('li');
  const div = document.createElement('div');
  const span = document.createElement('span');
  const p = document.createElement('p');
  const button = document.createElement('button');

  button.addEventListener('click', function(index) {
   
    tasks.splice(index, 1);
    renderElements(tasks); 
   
  });
  
  if(task.type.toLowerCase() === 'Urgente'.toLowerCase()){
    span.classList.add("span-urgent")
  }else if(task.type.toLowerCase() === 'Normal'.toLowerCase()){
    span.classList.add("span-normal")
  }else if(task.type.toLowerCase() === 'Importante'.toLowerCase()){
    span.classList.add("span-important")
  }


  li.classList.add('task__item');
  div.classList.add('task-info__container');
  p.innerText = task.title
  button.classList.add("task__button--remove-task");

 

  div.appendChild(span);
  div.appendChild(p);
  li.appendChild(div);
  li.appendChild(button);

  return li;
}

 function novaTarefa(){
  const buttonInput = document.getElementsByClassName("form__button--add-task")[0]
 buttonInput.addEventListener('click',function(event){
  event.preventDefault()

  const inputForm = document.getElementById("input_title")
  const selectForm = document.getElementsByClassName("form__input--priority input__box")[0]
  const novaTarefa = {title:inputForm.value, type:selectForm.value}
  tasks.unshift(novaTarefa)
 
 renderElements(tasks)
 })
 }
 novaTarefa()


















 

















