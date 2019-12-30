
//cCDiv= cardContainerDiv

const url = 'https://randomuser.me/api/?results=12&nat=US';
const card = document.querySelector('.card');
const gallery = document.getElementById("gallery");


function fetchData(url)  {                           // this returns a promise
    return fetch(url) 
    .then(checkStatus)
    .then(response => response.json())   //this parsa the response to json
    .catch(error => console.log('Looks like there was a problem', error))  //catch call
}    

fetchData('https://randomuser.me/api/?results=12&nat=US')
    .then(data => generateOptions(data.message))
   
fetchData("https://placehold.it/90x90")         //img is NOT WORKING, FIND OUT WHY
    .then(data => generateImage(data.message))

function checkStatus(response) {    //this checks if the promise resolved w/the responds odjects ok property set to true
    if(response.ok) {               // if ok is true the promise gets resolved with the resopnse 
        return Promise.resolve(response);
    } else {   //if it doesnt work reject the promise which will active the 'catch' call
        return Promise.reject(new Error(response.statusText)) //this is the reason why it didnt work
    }
}

fetch(url) 
 .then(response => response.json())
 .then(data => data.results.map(person => {   //map to iterate through the random employee list 
     generateImage(person);  //getting the employee img
     generateModal(person); 
     employeeData.push(person); // going through the array of employees (need to set number)
     showImage();  //show
     hideImage();  // hide 
 }))

 console.log();


// function createImage(data) {                           //DATA ISNT BE CALLED NEEDS TO BE FIXED
//     const employeeCard = document.createElement("div");  // putting it in a div to be stored
//     employeeCard.className = "card";     //so classname can be used
//     let HTML = `
//     <div class="card-img-container">
//         <img class="card-img" src="${item.picture.large}" " alt="profile picture">
//      </div>
//     <div class="card-info-container">
//         <h3 id="name" class="card-name cap">${item.name.first} ${item.name.last}</h3>
//         <p class="card-text">${item.email}</p>
//         <p class="card-text cap">${item.location.city}, ${item.location.state}</p>
//     </div>
// `
// employeeCard.innerHTML = HTML;
// gallery.append(employeeCard);   //from html

// }




/////////////////////////////////////// WTF IS THIS FOR? NO MORE WORKING/CODING AFTER 12AM  //////////////////////////////////////

            // .then(checkStatus)
            // .then(response => response.json())   //reads the response & returns a promise that resolveds to json
            // .then(data => console.log(data))  //to handle data

    // .then(data => {
    //     generateImage(data.message) //call to function/creating the function

    //         .then(response => console.log(response))     //unit 5 videos taken from "handling errors section"
    //         .then(response => response.json())
    //         .catch(error => console.log('Looks like there was a problem', error))
     
    // });

///////////////////////////////////////////////////////////////////////////////////
    
 //unit 5 found in "handling errors video/section"

//  function checkStatus(response) {     //this checks if the promise resolved w/the response objects ok property set to true
//     if (response.ok) {               // if response ok is true the promise get resolced with the response
//         return Promise.resolve(response);
//     } else { //if it doesnt work, reject the promise which will active the catch call
//         return Promise.reject(new error(response.statusText)); //usually 200

//     }

//     }
//////////////////////////////////////////////////////////////////////////////////////////////////
// const userCard = (data) => {  //going through each user
//     data.forEach((user, i) => { // where your at now in the loop
//         const cCDiv = document.createElement("div");
//     cCDiv.classList.add("card");
//     gallery.appendChild(cCDiv);
//     cardContainerDiv.innerHTML =  //paste & copy from html
//       `
//       <div class="card-img-container">
//           <img class="card-img" src="${user.picture.large}" alt="profile picture">
//       </div>
//       <div class="card-info-container">
//           <h3 id="name" class="card-name cap">${user.name.first} ${user.name.last}</h3>
//           <p class="card-text">${user.email}</p>
//           <p class="card-text cap">${user.location.city}</p>
//       </div>
//     `
//     user.cardElement = cCDiv;
//     user.visible = true;  //calling modal on a click
//     cCDiv.addEventListener('click', (e) => {
//       clickedModal(user, i);
//     })
//   })
// }
// ///////////////////////////////////////maybe I should star over..///////////////////////////////////////////////////////////////




// // modal window 
//     function createModal(data) {
//         let modalData = [data];
//         const user = document.createElement("div");
//         employeeData.className = "modal-container";
//          for (let i = 0; i < card.lenght; i++) {
//               card[i].addEventListener('click', function(e)) {

 
   //      let HTML = `

//     <div class="modal">    
//         <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
//         <div class="modal-info-container"></div>
//             <img class="modal-img" src="https://placehold.it/125x125" alt="profile picture">
//             <h3 id="name" class="modal-name cap">${user.firstname} ${user.lastnam}</h3>
//             <p class="modal-text">${user.email}</p>
//             <p class="modal-text cap">${user.location.city}</p>
//             <hr>
//             <p class="modal-text">${user.cellphone.replace("-"," ")}</p>
//             <p class="modal-text">${user.location.street.number} ${user.location.street.name} ${user.location.state} ${user.location.zipcode}</p>
//             <p class="modal-text">Birthday: ${user.dob.substr(8, 2)}
//             /${user.dob.substr(5, 2)}
//             /${user.dob.substr(2, 2)}</p>
//         </div>
//     </div>
 //   `;
//  let modalDiv = document.createElement('div);
//  modalDiv.className = 'modal-container';
//  let body = document.querySelector('body');
//  body.appendChild(modalDiv); 
//  modalDiv.innerHtml = HTML;

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// function checkStatus(response) { //was the response ok or not
//     if (response.ok) {
//         return Promise.resolve(response);

//     }

//     return Promise.rejected(new Error(response.statusText));
// }

// funstion hide(e) {
//      element.style.display = "none";

// }
//  function show(e) {
//      element.style.display = "";
//  }




// $('#gallery').click(function(e){ //click event on div.card replacement 
//     const target = $(e.target)

//     if(!target.hasClass('gallery')){         // ignore gallery 
//         if(target.hasClass('card')){        // card class
//             select = target.index();        // get index
//         }
//         if(target.parent().hasClass('card')){             // check if container
//             select = target.parent().index();            // searching through once to get index of card
//         }
//         if(target.parent().parent().hasClass('card')){      // check if container child 
//             select = target.parent().parent().index();      //  searching through twice to get index of card
////////////////////////////MODAL///////////////////////////////////////////////////////////////////////////////
////////CREATE MODAL WINDOW SET BY STEP/////////////////////////////////////////////////////////////////////////
//When any part of an employee item in the directory is clicked, a modal window 
//should pop up with the following details displayed:Image, Name, Email, City,
//Cell Number, Detailed Address, including street name & number, state, and post code, Birthday
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const modal = document.createElement('div');
modal.className = 'modal';
modalContainer.append(modal);
////////////////////IMAGE/////////////////////////////////////////////////////////////
const img = document.createElement('img');
img.className = 'modal-img';
img.setAttribute('src','https://placehold.it/125x125'); //not working?
img.setAttribute('alt','profile picture');
infoContainer.append(img);
///////////////////NAME/////////////////////////////////////////////////////////////
const name = document.createElememt('h3');
name.className = 'modal-name cap';
name.setAttribute('id', 'name');
name.textContent = 'name';
infoContainer.appendz(name);
/////////////////////////EMAIL///////////////////////////////////////////////////////
const email = document.createElement('p');
email.className = 'modal-text';
email.textContent = 'email';  
infoContainer.append(email);
////////////////////////CITY/LOCATION//////////////////////////////////////////////////
const city = document.createElement('p');
city.className = 'modal-text cap';
city.textContent = 'city'; 
infoContainer.append(city);
////////////////////////CELL NUMBER/////////////////////////////////////////////////////

/////////////////////////ADDRESS/////////////////////////////////////////////////////////

/////////////////////////BUTTON///////////////////////////////////////////////////////////
 const closeButton = document.createElement('button');
 closeButton.className = 'modal-close-btn';
 closeButton.setAttribute('id', 'modal-close-btn')
 closeButton.innerHTML = '<strong>X</strong>';         //found in html 
 modal.append(infoContainer);
/////////////////////////MODAL CONTAINER//////////////////////////////////////////////////
 const modalContainer = document.createElement('div');
 modalContainer.className = 'modal-container';
 document.body.append(modalContainer);
 ////////////////////////CONTAINER INFO/////////////////////////////////////////////////////
 const containerInfo = document.createElement('div');
 containerInfo.className = 'modal-info-container';
 modal.append(containerInfo);





///////////////////////////////HIDE WINDOW/////////////////////////////////
$('.modal-container').hide()
//////////////////////////////////////////////////////////////////////////




//            }   //end of card[i] eventListener 125
//}   //end of loop 126