// const btn = document.querySelector("button");
// const list = document.querySelector(".list");

// btn.addEventListener("click", append);

// function append(e) {
//   e.preventDefault();
//   const inputValue = document.querySelector("#input").value;

//   list.innerHTML += `<li class="list-item">
//             <span>${inputValue}</span>
//             <div>
//               <button class="edit btn">
//                 <i class="fa-solid fa-pen-to-square"></i>
//               </button>
//               <button class="delete btn">
//                 <i class="fa-solid fa-trash-can"></i>
//               </button>
//             </div>
//           </li>`;
//   document.querySelector("#input").value = "";
// }

// function handleList(e) {
//   if (e.target.closest(".delete")) {
//     handleDelete(e);
//   }else if(e.target.closest(".edit")){
//     handleList(e)
//   }
// }

// function handleDelete(e) {
//   let listItem = e.target.closest(".list-item");
//   listItem.remove();
// }




// list.addEventListener("click", handleList);



// WINDOW OBJECT, DIALOG BOX, WINDOW METHOD:

// const openbtn = document.querySelectorAll('button')[0]
// const closebtn = document.querySelectorAll('button')[1]
// const movebtn = document.querySelectorAll('button')[2]
// const resizebtn = document.querySelectorAll('button')[3]


// openbtn.addEventListener("click", Open);
// closebtn.addEventListener("click", Close);
// movebtn.addEventListener("click", Move);
// resizebtn.addEventListener("click", Resize);

// let newWindow;


// function Open() {
//   newWindow = window.open("", "", "width=300px, height=300px top=100px left=500px");
// }
// function Close() {
//   newWindow.close();
// }
// function Move() {
//   newWindow.window.moveTo(-200, -200)
//   newWindow.focus();
// }
// function Resize() {
//   newWindow.resizeto(100,100)
//   newWindow.focus() 
// }





let qar = document.querySelector(".qar")
let psg = document.querySelector(".psg")
let rma = document.querySelector(".rma")
let fcb = document.querySelector(".fcb")


let images = document.querySelectorAll(".img-down img");

images.forEach(element => {
    element.addEventListener("click", () => {
        qar.setAttribute("src", element.getAttribute("src"))
    })
});

