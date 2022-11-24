var selectedRow = null;
function onFormSubmit(){
    event.preventDefault();
    var formData =readFormData();
    if(selectedRow===null){
        InsertNewRecord(formData);
    }
    else{
        updateRecord(formData);
    }
    resetForm(); 
}

//Retrieve the data
function readFormData(){
    var formData = {};
    formData["fname"]= document.getElementById("fname").value;
    formData["lname"]= document.getElementById("lname").value;
    formData["phoneno"]= document.getElementById("phoneno").value;
    formData["email"]= document.getElementById("email").value;
    return formData;
}

//Insert the data
function InsertNewRecord(data){
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML= data.fname;
    var cell2 = newRow.insertCell(1);
        cell2.innerHTML= data.lname;
    var cell3 = newRow.insertCell(2);
        cell3.innerHTML= data.phoneno;
    var cell4 = newRow.insertCell(3);
        cell4.innerHTML= data.email;
    var cell5 = newRow.insertCell(4);
        cell5.innerHTML = '<button onClick= onEdit(this)> Edit</button> <button onClick= onDelete(this)>Delete</button>'
}

//Edit the data
function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('fname').value = selectedRow.cells[0].innerHTML;
    document.getElementById('lname').value = selectedRow.cells[1].innerHTML;
    document.getElementById('phoneno').value = selectedRow.cells[2].innerHTML;
    document.getElementById('email').value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.fname;
    selectedRow.cells[0].innerHTML = formData.lname;
    selectedRow.cells[0].innerHTML = formData.phoneno;
    selectedRow.cells[0].innerHTML = formData.email;
}

//Delete the data
function onDelete(td){
    if (confirm('Do you want to delete this record?')){
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
    }
    resetForm();
}

//Reset the data
function resetForm(){
    document.getElementById('fname').value = '';
    document.getElementById('lname').value = '';
    document.getElementById('phoneno').value = '';
    document.getElementById('email').value = '';
}