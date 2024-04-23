//your JS code here. If required.
//partially able to solve
//not passing all text cases
let  js_form=document.querySelector("form");
js_form.addEventListener("submit",formSubmitted);

function formSubmitted(e){
    e.preventDefault();
    let titleText=document.querySelector("#title").value;
    let authorText=document.querySelector("#author").value;
    let isbnText=document.querySelector("#isbn").value;
    let  table_js= document.querySelector("table");
    let row=document.createElement('tr');
    let cell1=document.createElement('td');
    let cell2=document.createElement('td');
    let cell3=document.createElement('td');
    cell1.innerHTML=titleText;
    cell2.innerHTML=authorText;
    cell3.innerHTML=isbnText;
    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);
    table_js.appendChild(row);
}
