let leads = JSON.parse(localStorage.getItem("leads")) || [];
let customers = JSON.parse(localStorage.getItem("customers")) || [];
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

displayLeads();
displayCustomers();
displayTasks();

function saveData(){
localStorage.setItem("leads", JSON.stringify(leads));
localStorage.setItem("customers", JSON.stringify(customers));
localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addLead(){

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;

if(name === "" || email === ""){
alert("Please fill all fields");
return;
}

let exists = leads.some(lead => lead.email === email);

if(exists){
alert("Lead already exists");
return;
}

let lead = {
name:name,
email:email
};

leads.push(lead);

saveData();
displayLeads();

document.getElementById("name").value="";
document.getElementById("email").value="";
}

function displayLeads(){

let list = document.getElementById("leadList");
list.innerHTML="";

leads.forEach((lead,index)=>{

let li=document.createElement("li");

li.innerHTML =
lead.name + " - " + lead.email +
" <button onclick='convertToCustomer("+index+")'>Convert</button>";

list.appendChild(li);

});
}

function convertToCustomer(index){

customers.push(leads[index]);
leads.splice(index,1);

saveData();

displayLeads();
displayCustomers();
}

function displayCustomers(){

let list = document.getElementById("customerList");
list.innerHTML="";

customers.forEach(customer=>{

let li=document.createElement("li");
li.innerHTML = customer.name + " - " + customer.email;

list.appendChild(li);

});
}

function addTask(){

let text = document.getElementById("taskText").value;

if(text === ""){
alert("Enter task");
return;
}

let task = {
text:text
};

tasks.push(task);

saveData();

displayTasks();

document.getElementById("taskText").value="";
}

function displayTasks(){

let list = document.getElementById("taskList");
list.innerHTML="";

tasks.forEach(task=>{

let li=document.createElement("li");
li.innerHTML = task.text;

list.appendChild(li);

});
}