////////////////////////PUBLIC API REQUESTS/////////////////////

$(document).ready(function() {
    let api = 'https://randomuser.me/api/?results=12&nat=us,ca&exc=gender,login,registered,id,phone';
    $.getJSON(api, function(data){
      let employeeData = data.results; // (array)variable to for the modal window
      console.log(employeeData, 'employeeData variable'); // testing 
  
///////////////// GET & DISPLAY 12 RANDOM USERS////////////////////////
      let employeeHTML = ''; // variable to store what's about to be appended to it (all of it)
        $.each(data.results, function(index, employee){
//////////////// Use the response data to display 12 users and all their info that is needed 
          employeeHTML += '<div class="card">';
          employeeHTML += '<div class="card-img-container">';

/////////////////////////IMAGE///////////////////////////////////////HTML
          employeeHTML += '<img class="card-img" src="' + employee.picture.large + '" alt="profile picture">';
          employeeHTML += '</div>'; // close card-img-container div
          employeeHTML += '<div class="card-info-container">';
  
/////////////////////////NAME///////////////////////////////////HTML
          employeeHTML += '<h3 id="name" class="card-name cap">' + employee.name.first + ' ' + employee.name.last + '</h3>';
  
////////////////////////EMAIL////////////////////////////////////HTML
          employeeHTML += '<p class="card-text">' + employee.email + '</p>';

/////////////////////////CITY & STATE/////////////////////////////HTML
          employeeHTML += '<p class="card-text cap">' + employee.location.city + ', ' + employee.location.state + '</p>';
  
//////////////////////////CLOSING THE DIVs//////////////////////////
          employeeHTML += '</div>'; 
          employeeHTML += '</div>'; 
          $('#gallery').html(employeeHTML); // (append) attach the page in gallery ID
        });  

///////////////////////CREATING THE MODAL WINDOW////////////////////////////
let createModal;
$('body').append('<div id="modal-window-div">');   //createModal new div

$('.card').click(function(){
    var employeeIndex = $('.card').index(this);       //for each employee it finds the indexx
    console.log(employeeIndex); 

//When any part of an employee item in the directory is clicked, a modal window 
//should pop up with the following details displayed:Image, Name, Email, City,
//Cell Number, Detailed Address, including street name & number, state, and post code, Birthday
//got help from an otside party "jay from career karma"
    var employee = data.results[employeeIndex];
    //console.log(employee);
    function modalCreate() {
      createModal += '<div class="modal-container">';
      createModal += '<div class="modal">';
      createModal += '<button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>';
      createModal += '<div class="modal-info-container">';

 ///////////////////// IMAGE/////////////////////////////////////HTML
    createModal += '<img class="modal-img" src="' + employee.picture.large + '" alt="profile picture">';

 ////////////////////////NAME/////////////////////////////////////HTML
    createModal += '<h3 id="name" class="modal-name cap">' + employee.name.first + ' ' + employee.name.last + '</h3>';

//////////////////////////EMAIL///////////////////////////////////HTML
    createModal += '<p class="modal-text">' + employee.email + '</p>';

//////////////////////////CITY & STATE/////////////////////////////HTML
    createModal += '<p class="modal-text cap">' + employee.location.city + ', ' + employee.location.state + '</p>';
    createModal += '<hr>';

///////////////////////////PHONE NUMBER////////////////////////////HTML
    createModal += '<p class="modal-text"><b>' + 'Cell Phone:' + '</b>' + ' ' + employee.cell + '</p>';

///////////////////////////DETAILED ADDRESS//////////////////////////HTML
    createModal += '<p class="modal-text cap"><b>' + 'Address:' + '</b>' + '<br>';
    createModal += employee.location.street.number + ' ' + employee.location.street.name + '<br>' + employee.location.city +  ', ' + employee.location.state + ' ' + employee.location.postcode + '</p>';
        //console.log(data);

/////////////////////////////AGE & DOB//////////////////////////////////HTML
    createModal += '<p class="modal-text"><b>' + 'Age:' + '</b>' + ' ' + employee.dob.age + '</p>';
    createModal += '<p class="modal-text"><b>' + 'DOB:' + '</b>' + ' ' + employee.dob.date.slice(0, 10) + '</p>';

        // Close the divs
        createModal += '</div>';
        createModal += '</div>';
        
        
        $('#modal-window-div').html(createModal); // append to body of page and hide upon load

        
      } // modalcreate()
      return modalCreate();
  }); //'.click()'


////////////////////////////////CLOSE WINDOWS///////////////////////////
    $('').click(function() { // <-- why isnt this working? 
        console.log('should close');
        $('#modal-window-div').hide();
  }); 

//////////////////////////////SHOW MODAL WINDOW////////////////WHEN CLICKED////

    $('div .card').click(function() {
        $('#modal-window-div').show();
    }); 

   });
}); 
