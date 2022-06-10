var res=fetch('https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json');
console.log(res);
res.then((data)=>data.json())
.then((value)=>{
console.log(value)
firstPage(value);
LastPage(value);
NextButton(value);
PreviousButton(value);
})
.catch((error)=>console.log(error));


let heading=document.createElement('h1');
heading.setAttribute('id','title');
heading.innerText="Pagination"
document.body.appendChild(heading);

// let description=document.createElement('p');
// heading.setAttribute('id','description');
// description.innerText='This is a small project related to pagination';
// document.body.appendChild(description);

let outerdiv=document.createElement('div');
outerdiv.className='center';
document.body.append(outerdiv);

let innerDiv=document.createElement('div');
innerDiv.setAttribute('id','buttons');
innerDiv.classList.add('d-flex','justify-content-center');
outerdiv.appendChild(innerDiv);

let firstButton=document.createElement('button');
firstButton.innerHTML=`first`;

let lastButton=document.createElement("button");
lastButton.innerHTML=`last`;

let nextButton=document.createElement('button');
nextButton.innerHTML=`Next`;

let previousButton=document.createElement("button");
previousButton.innerHTML=`previous`;
innerDiv.append(firstButton,lastButton,nextButton,previousButton);


let tableDiv=document.createElement('div');
tableDiv.className='table-responsive';
document.body.appendChild(tableDiv);

let table=document.createElement('table')
table.classList.add('table','table-bordered');
tableDiv.append(table);

let tablehead=document.createElement('thead');
table.appendChild(tablehead);

let id_heading=document.createElement('th');
id_heading.innerText='id';
let name_heading=document.createElement('th');
name_heading.innerText='name';
let email_heading=document.createElement('th');
email_heading.innerText='email';
tablehead.append(id_heading,name_heading,email_heading);


let tablebody=document.createElement('tbody');
table.appendChild(tablebody);

let row=document.createElement('tr');
tablebody.appendChild(row);

let cell1=document.createElement('td');
cell1.setAttribute('id','id');
let cell2=document.createElement('td');
cell2.setAttribute('id','name');
let cell3=document.createElement('td');
cell3.setAttribute('id','email');
row.append(cell1,cell2,cell3);

var value1;
function firstPage(res){
    firstButton.addEventListener('click',function(){
        cell1.innerText=`${res[0].id}`;
        cell2.innerText=`${res[0].name}`;
        cell3.innerText=`${res[0].email}`;
        value1=document.getElementById('id').innerHTML;
    })
}
function LastPage(res){
    lastButton.addEventListener('click',function(){
        cell1.innerText=`${res[res.length-1].id}`;
        cell2.innerText=`${res[res.length-1].name}`;
        cell3.innerText=`${res[res.length-1].email}`;
        value1=document.getElementById('id').innerHTML;
    })
}

function NextButton(res){
    nextButton.addEventListener('click',function(){
        cell1.innerText=`${res[value1].id}`;

        cell2.innerText=`${res[value1].name}`;
        cell3.innerText=`${res[value1].email}`;
        value1=document.getElementById('id').innerHTML;
    })
}

function PreviousButton(res){
    previousButton.addEventListener('click',function(){
        let indexval=parseInt(value1)-2;
        cell1.innerText=`${res[indexval].id}`;
        cell2.innerText=`${res[indexval].name}`;
        cell3.innerText=`${res[indexval].email}`;
        value1=document.getElementById('id').innerHTML;
    })
}
