function changeModalHeaderColor(status){
    let modalHeader = document.getElementById('modal-header');
    modalHeader.classList.remove('bg-warning','bg-success','bg-success','bg-danger','bg-brown','bg-dark');

    let fieldUser = document.getElementById('field-user');
    fieldUser.classList.remove('bg-warning','bg-success','bg-success','bg-danger','bg-brown','bg-dark');

    switch (status) {
        case 'Kasuga Ichiban':
            modalHeader.classList.add('bg-warning');
            fieldUser.classList.add('bg-warning');
        break;
        case 'Yu Nanba':
            modalHeader.classList.add('bg-success');
            fieldUser.classList.add('bg-success');
         break;      
        case 'Koichi Adachi':
            modalHeader.classList.add('bg-danger');
            fieldUser.classList.add('bg-danger');
         break;
        case 'Joon-gi Han':
            modalHeader.classList.add('bg-secondary');
            fieldUser.classList.add('bg-secondary');
         break;     
        default:
            modalHeader.classList.add('bg-brown');
         break;                    
     }

}

function assignRowFieldValues(row){
    
    let columns = row.getElementsByTagName('td');
    let itemNo = row.getElementsByTagName('th');

    let modalTitle  = document.getElementById('modal-item-no');

    let itemName = document.getElementById('item-name');
    let itemElement = document.getElementById('item-element');
    let itemStats = document.getElementById('item-stats');
    let itemEffect = document.getElementById('item-effect');
    let itemPrice = document.getElementById('item-price');
    let itemLocation = document.getElementById('item-location');
    let fieldUser = document.getElementById('field-user');

    modalTitle.textContent = itemNo[0].textContent;

    itemName.value = columns[0].textContent;
    itemElement.value = columns[1].textContent;
    itemStats.value = columns[2].textContent;
    itemEffect.value = columns[3].textContent;
    itemPrice.value = columns[4].textContent;
    itemLocation.value = columns[5].textContent;
    fieldUser.value = columns[6].textContent;
    changeModalHeaderColor(columns[6].textContent);
     
}

function showHideModalButtons(row, state=''){ 
    const status = row.getElementsByTagName('td')[6].innerHTML;
    const modalMain = document.querySelector('#viewItemModal');

    showBtnsUp = modalMain.querySelector("#modal-btn-up");
    showBtnsUp.classList.add('d-none');
    showBtnsDown = modalMain.querySelector("#modal-btn-down");
    showBtnsDown.classList.add('d-none');
    showBtns = modalMain.querySelector("#modal-btn-save");
    showBtns.classList.add('d-none');
    
    if(status.includes("Kasuga Ichiban")){
        if(state == ""){
            showBtns = modalMain.querySelector("#modal-btn-down");
            showBtns.classList.remove('d-none');
        } else {
            showBtns = modalMain.querySelector("#modal-btn-save");
            showBtns.classList.remove('d-none');
        }
    
        } else if (status.includes("Yu Nanba") || status.includes("Koichi Adachi")) {
            if(state == ""){
                showBtnsUp = modalMain.querySelector("#modal-btn-up");
                showBtnsUp.classList.remove('d-none');
                showBtnsDown = modalMain.querySelector("#modal-btn-down");
                showBtnsDown.classList.remove('d-none');
            } else {
                showBtnsSave = modalMain.querySelector("#modal-btn-save");
                showBtnsSave.classList.remove('d-none');
            }

        } else if (status.includes("Joon-gi Han")) {
            if(state == ""){
                showBtnsUp = modalMain.querySelector("#modal-btn-up");
                showBtnsUp.classList.remove('d-none');
            } else {
                showBtnsSave = modalMain.querySelector("#modal-btn-save");
                showBtnsSave.classList.remove('d-none');
            }
    }
}

function clearFieldValues() {
    let modalMain = document.querySelector("#viewItemModal");
    let fieldUser = document.querySelector("#field-user");
    let itemName = document.querySelector('#item-name');
    let itemElement = document.querySelector('#item-element');
    let itemStats = document.querySelector('#item-stats');
    let itemEffect = document.querySelector('#item-effect');
    let itemPrice = document.querySelector('#item-price');
    let itemLocation = document.querySelector('#item-location');

    fieldUser.value = "Kasuga Ichiban";
    itemName.value = "";
    itemElement.value = "";
    itemStats.value = "";
    itemEffect.value = "";
    itemPrice.value = "¥";
    itemLocation.value = "";

    showBtnsUp = modalMain.querySelector("#modal-btn-up");
    showBtnsUp.classList.add('d-none');
    showBtnsDown = modalMain.querySelector("#modal-btn-down");
    showBtnsDown.classList.add('d-none');
    showBtns = modalMain.querySelector("#modal-btn-save");
    showBtns.classList.add('d-none');
    showBtnsCreate = modalMain.querySelector("#modal-btn-create");
    showBtnsCreate.classList.remove('d-none');

}

function addItemRecord() {
    let modalHeader = document.querySelector("#viewItemModal");
    let itemName = document.querySelector('#item-name');
    let itemElement = document.querySelector('#item-element');
    let itemStats = document.querySelector('#item-stats');
    let itemEffect = document.querySelector('#item-effect');
    let itemPrice = document.querySelector('#item-price');
    let itemLocation = document.querySelector('#item-location');

    const tblRow = document.querySelector("#table-kasuga");
    const tblBody = document.querySelector('tbody');

    let newRow = tblBody.insertRow();

    let col1 = newRow.insertCell(0); //Item No.
    let col2 = newRow.insertCell(1); //Name
    let col3 = newRow.insertCell(2); //Element
    let col4 = newRow.insertCell(3); //Stats
    let col5 = newRow.insertCell(4); //Effect
    let col6 = newRow.insertCell(5); //Price
    let col7 = newRow.insertCell(6); //Location
    let col8 = newRow.insertCell(7); //User
    let col9 = newRow.insertCell(8); //Action

    col1.outerHTML = `<th class="align-middle" scope="row">ITEM-0001</th>`;
    col2.outerHTML = `<td class="align-middle">${itemName.value}</td>`;
    col3.outerHTML = `<td class="align-middle">${itemElement.value}</td>`;
    col4.outerHTML = `<td class="align-middle">${itemStats.value}</td>`;
    col5.outerHTML = `<td class="align-middle">${itemEffect.value}</td>`;
    col6.outerHTML = `<td class="align-middle">${itemPrice.value}</td>`;
    col7.outerHTML = `<td class="align-middle">${itemLocation.value}</td>`;
    col8.outerHTML = `<td class="align-middle"><span class="badge rounded-pill text-bg-warning">Kasuga Ichiban</span></td>`;
    col9.outerHTML = `<td class="align-middle text-center">
    <button class="btn btn-info view-item" data-bs-toggle="modal" data-bs-target="#viewItemModal">View</button>
    <button class="btn btn-warning edit-item" data-bs-toggle="modal" data-bs-target="#viewItemModal">Edit</button>
    <button class="btn btn-danger delete-item" data-bs-toggle="modal" data-bs-target="#deleteItemModal">Delete</button>`;

}
//Main Content
document.addEventListener('DOMContentLoaded', function() {
    let activeRow = null;

    const rows = document.querySelectorAll('.table tbody tr');
    rows.forEach(row => {
        const columns = row.getElementsByTagName('td');
        if(columns[6].textContent == ''){
            let removeButtons = columns[7].querySelectorAll(".btn-warning,.btn-danger");
            removeButtons[0].classList.add('d-none'); //Edit Button
            removeButtons[1].classList.add('d-none'); //Delete Button
         }
        });
    });

    //View Button
    viewButton = document.querySelectorAll('.view-item');
    viewButton.forEach(function(button){
        button.addEventListener('click', function(){
            let row = this.parentElement.parentElement;
            activeRow = row;

            assignRowFieldValues(row);

            showHideModalButtons(row);
        });
    });        

    //Edit Button
    editButton = document.querySelectorAll('.edit-item');
    editButton.forEach(function(button){
        button.addEventListener('click', function(){
            
            //Assign values to fields base on selected row
            let row = this.parentElement.parentElement;
            activeRow = row;

            assignRowFieldValues(row);

            //Remove disable attribute in fields
            const inputFields = document.querySelectorAll(".form-control");
            inputFields.forEach(input => {
                if(input.id != "job-class" && input.id != "field-user") input.removeAttribute("disabled");
            });
            
            showHideModalButtons(row, "edit");
        });
    });

    //Delete Button
    deleteButton = document.querySelectorAll('.delete-item');
    deleteButton.forEach(function(button){
        button.addEventListener('click', function(){
            let row = this.parentElement.parentElement;
            const modalDelete = document.querySelector("#deleteItemModal");
            
            const confirmDelBtn = modalDelete.querySelector("#modal-btn-delete");
            confirmDelBtn.addEventListener("click", function (){
                row.remove();
            });
        });
    });

    //Save Button
    saveButton = document.querySelector('#modal-btn-save');
    saveButton.addEventListener('click', function() {
        const columns = activeRow.querySelectorAll('td');
        const modalMain = document.querySelector('#viewItemModal');

        columns[0].textContent = modalMain.querySelector('#item-name').value
        columns[1].textContent = modalMain.querySelector('#item-element').value
        columns[2].textContent = modalMain.querySelector('#item-stats').value
        columns[3].textContent = modalMain.querySelector('#item-effect').value
        columns[4].textContent = modalMain.querySelector('#item-price').value
        columns[5].textContent = modalMain.querySelector('#item-location').value
    });

    //Modal-Hidden/Close Event
    modalWindow = document.querySelector('#viewItemModal');
    modalWindow.addEventListener("hidden.bs.modal", function (){
        const inputFields = document.querySelectorAll(".form-control");
        inputFields.forEach(input => {
            input.setAttribute("disabled","");
        })
    });

    //Add Button
    addButton = document.querySelector('#add-item');
    addButton.addEventListener('click', function(){
        
        const inputFields = document.querySelectorAll(".form-control");
        inputFields.forEach(input => {
            if(input.id != "job-class" && input.id != "field-user") input.removeAttribute("disabled");
        });

        clearFieldValues();
    });
    
    //Create Button
    const createButton = document.querySelector("#modal-btn-create");
    createButton.addEventListener('click', function(){
        
        addItemRecord();
    });