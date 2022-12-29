let toDoList = [];
let arrItemDid = [];

let today = new Date();
let date = today.getDate()+' / '+(today.getMonth()+1)+' / '+today.getFullYear();
document.getElementById('date').innerHTML=date ;

let mode=true;

// let addToDo =()=> {
//   let inputValue = document.getElementById("newTask").value;
//   if (inputValue === null || inputValue === "") {
//     return alert("Vui long nhap noi dung");
//   }
//   toDoList.push(inputValue);
//   renderList();
// }
document.getElementById('addItem').onclick=function () {
    let inputValue = document.getElementById("newTask").value;
    if (inputValue === null || inputValue === "") {
      return alert("Vui long nhap noi dung");
    }
    toDoList.push(inputValue);

    renderList();

    
    
}

let renderList = () => {
    // data= data||toDoList;
    
  let html = "";
  for (let i in toDoList) {
    html += `<li>
                ${toDoList[i]}
                <div class="icon">
                    <i class="fa fa-trash icondelete" aria-hidden="true" ></i>
                    <i class="fa fa-check-circle iconCheck" aria-hidden="true" ></i>
                </div>
            </li>`;
  }

  document.getElementById("todo").innerHTML = html;
  console.log(toDoList);


    let icondelete = document.querySelectorAll('.icondelete');
    for (let i = 0; i < icondelete.length; i++) {
        icondelete[i].onclick=function () {
            
            toDoList.splice(i, 1);
            
            console.log(toDoList);
            
            console.log("click", i);
            renderList();
            
        }
    
    }

    let iconCheck = document.querySelectorAll('.iconCheck');
    for (let i = 0; i < iconCheck.length; i++) {
        iconCheck[i].onclick = function () {
            arrItemDid.push(toDoList.slice(i, i*1+1));
            console.log(arrItemDid);
            renderListDid();
            toDoList.splice(i, 1);
            renderList();
        }
        
    }

    

    
};


function renderListDid() {
    let html ='';
    for (let i in arrItemDid) {
        html+=`<li>
                   <span style="color: green;"> ${arrItemDid[i]} </span>
                    <div class="icon">
                        <i class="fa fa-trash icondeletedid" aria-hidden="true"></i>
                        <i style="color: green" class="fa fa-check-circle" aria-hidden="true"></i>
                    </div>
                </li>`;

    }
    document.getElementById('completed').innerHTML=html;


    let icondeleteDid = document.querySelectorAll('.icondeletedid');
    for (let i = 0; i < icondeleteDid.length; i++) {
        icondeleteDid[i].onclick=function () {
            
            arrItemDid.splice(i, 1);
            
            console.log(toDoList);
            
            console.log("click", i);
            renderListDid();
            
        }
    
    }
  
}

document.getElementById('two').addEventListener('click', function () {
    toDoList.sort();
    renderList();
})


document.getElementById('three').addEventListener('click', function () {
    toDoList.reverse();
    renderList();
})