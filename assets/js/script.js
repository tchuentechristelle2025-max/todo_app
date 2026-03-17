const btnAjouter = document.getElementById("btnAjouter");
const titreInput = document.getElementById("titre");
const descInput = document.getElementById("description");
const taskList = document.getElementById("taskList");


function ajouterTache() {
  const titre = titreInput.value.trim();
  const description = descInput.value.trim();

  if (titre === "" || description === "") {
    alert("Veuillez remplir tous les champs !");
    return;
  }


  const taskDiv = document.createElement("div");
  taskDiv.classList.add("task");

  const taskTitle = document.createElement("h3");
  taskTitle.textContent = titre;

  const taskDesc = document.createElement("p");
  taskDesc.textContent = description;

  const btnFinish = document.createElement("button");
  btnFinish.textContent = "Terminer";
  btnFinish.classList.add("btn-finish");

  const btnDelete = document.createElement("button");
  btnDelete.textContent = "Supprimer";
  btnDelete.classList.add("btn-delete");

  
  btnFinish.addEventListener("click", () => {
    taskDiv.classList.toggle("finished");
  });

  btnDelete.addEventListener("click", () => {
    taskList.removeChild(taskDiv);
  });

  
  taskDiv.appendChild(taskTitle);
  taskDiv.appendChild(taskDesc);
  taskDiv.appendChild(btnFinish);
  taskDiv.appendChild(btnDelete);

  taskList.appendChild(taskDiv);

  
  titreInput.value = "";
  descInput.value = "";
}


btnAjouter.addEventListener("click", ajouterTache);