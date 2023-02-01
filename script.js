let dataDet = [];
let editIndex = "";
$(document).ready(function () {
  $("#edittable").hide();
});
$(window).on("load", function () {
  $.get("https://jsonplaceholder.typicode.com/users", function (data) {
    dataDet = data;
    displayData();
    $("#editform").hide();
  });
});

function displayData() {
  let text = "<table border='5'>";
  for (i = 0; i < dataDet.length; i++) {
    text += "<tr>";
    text += `<td> ${i} </td>`;
    text += `<td> ${dataDet[i].name} </td>`;
    text += `<td> ${dataDet[i].username} </td>`;
    text += `<td> ${dataDet[i].address.city} </td>`;
    text += `<td> <input type='button' value='Edit' id='edit${i}' onclick='editData(${i})' class='btn btn-warning'> <input type='button' value='Delete' id='dele${i}'onclick='deletes(${i})' class='btn btn-danger'></td>`;
    text += "</tr>";
  }
  text += "</table>";
  $("#tableBody").html(text);
}

function deletes(index) {
  $(`#dele${index}`).parent().parent().remove();
  dataDet.splice(index, 1);
}

function editData(index) {
  $("#editform").show();
  $("#tableData").hide();
  $("#name").val(dataDet[index].name);
  $("#username").val(dataDet[index].username);
  $("#email").val(dataDet[index].email);
  $("#street").val(dataDet[index].address.street);
  $("#suite").val(dataDet[index].address.suite);
  $("#city").val(dataDet[index].address.city);
  $("#zipcode").val(dataDet[index].address.zipcode);
  $("#lat").val(dataDet[index].address.geo.lat);
  $("#lng").val(dataDet[index].address.geo.lng);
  $("#phone").val(dataDet[index].phone);
  $("#website").val(dataDet[index].website);
  $("#cname").val(dataDet[index].company.name);
  $("#cphrase").val(dataDet[index].company.catchPhrase);
  $("#bs").val(dataDet[index].company.bs);
  editIndex = index;
}
$("#btnSubmit").click(function () {
  let obje = dataDet[editIndex];
  obje.name = $("#name").val();
  obje.username = $("#username").val();
  obje.email = $("#email").val();
  obje.address.street = $("#street").val();
  obje.address.suite = $("#suite").val();
  obje.address.city = $("#city").val();
  obje.address.zipcode = $("#zipcode").val();
  obje.address.geo.lat = $("#lat").val();
  obje.address.geo.lng = $("#lng").val();
  obje.phone = $("#phone").val();
  obje.website = $("#website").val();
  obje.company.name = $("#cname").val();
  obje.company.catchPhrase = $("#cphrase").val();
  obje.company.bs = $("#bs").val();
  dataDet[editIndex] = obje;
  displayData();
  $("#editform").hide();
  $("#tableData").show();
  editIndex = "";
});