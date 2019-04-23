function checkOverlapping(selected_jadwal){
	var jadwal = {"Gardening": "Senin", "Reading": "Senin", "Running":"Kamis", "Archery":"Rabu", "Photography":"Jumat", "Yoga":"Kamis"};
    var pickup = jadwal;

	for(var key in jadwal) {
    if (!(selected_jadwal.indexOf(key) > -1)){
         delete pickup[key]
    }
	}

   for(var key1 in pickup){
     for(var key2 in pickup){
       if (pickup[key1] == pickup[key2] && key1 != key2){
         return "Mohon maaf, kegiatan " + key1 + " berada dengan hari yang sama dengan kegiatan " + key2 + ", silahkan pilih kegiatan yang lain :)"
       }
     }
   }

   return ""
}


function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var emailValid = re.test(String(email).toLowerCase());

    if (emailValid) {
      return ""
    } else {
      return "format email salah, silahkan ketikkan kembali dengan benar"
    }
}


function calculateTotal(selected_jadwal){
	var harga = {"Gardening": 25000, "Reading":35000, "Running":50000, "Archery":25000, "Photography":50000, "Yoga":250000};
	var pickup = harga;
	var total = 0;

  for (var index = 0; index < selected_jadwal.length; ++index) {
      total = total + harga[selected_jadwal[index]];
  }
  return total
}

function submitform(){
  document.getElementById("error-email").innerHTML = "";
  document.getElementById("error-message").innerHTML = "";
  document.getElementById("error-gender").innerHTML = "";


  var name = document.getElementById("full-name").value;
  var email = document.getElementById("email").value;
  var nohp = document.getElementById("nohp").value;
  var dropdown = document.getElementById("kompartemen");
  var choices = dropdown.options[dropdown.selectedIndex].value;

  var genderInput = document.querySelector('input[name="gender"]:checked');
  if (genderInput == null ){
   document.getElementById("error-gender").innerHTML = "Silahkan pilih salah satu gender!";
   return
  }
  var selectedGender = document.querySelector('input[name="gender"]:checked').value;


  var checkedValue =[];
  var inputElements = document.getElementsByClassName('messageCheckbox');

  for(var i=0; inputElements[i]; ++i){
    if(inputElements[i].checked){
      checkedValue.push(inputElements[i].value)
      // break;
    }
  }

  
 var errorValidateEmail = validateEmail(email);
 if (errorValidateEmail !== ""){
  document.getElementById("error-email").innerHTML = errorValidateEmail;
  return
  }


 var errorOverlapping = checkOverlapping(checkedValue);
 if (errorOverlapping !== ""){
  document.getElementById("error-message").innerHTML = errorOverlapping;
 }

var table = document.getElementById("myTable");
 var row = table.insertRow(0);
 var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
   var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

  cell1.innerHTML = "name";
  cell2.innerHTML = "kompartemen";
  cell3.innerHTML = "email";
  cell4.innerHTML = "nohp";
  cell5.innerHTML = "gender";
  cell6.innerHTML = "overlapping";







// console.log(calculateTotal(checkedValue));
// console.log(checkOverlapping(checkedValue));

// console.log(validateEmail(email));
// validateEmail();

  // console.log(name);
  // console.log(dropdown);
  // console.log(email);
  // console.log(nohp);
  // console.log(selectedGender);
  // console.log(choices);
  // console.log(checkedValue);
 

}

