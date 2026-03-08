let leads = [];

function addLead(){
let name = document.getElementById("name").value;
let email = document.getElementById("email").value;

let lead = {
name:name,
email:email,
status:"Lead"
};

leads.push(lead);
displayLeads();
}

function displayLeads(){
let list = document.getElementById("leadList");
list.innerHTML="";

leads.forEach((lead,index)=>{
let li=document.createElement("li");
li.innerHTML = lead.name + " - " + lead.email + " ("+lead.status+")";
list.appendChild(li);
});
}