const form = document.getElementById('form');
const fullName = document.getElementById('full-name');
const phone = document.getElementById('phone');
const contactsNames = [];

let rows = '';

form.addEventListener('submit', (e) => {
    e.preventDefault();

    addNewRow();
    updateTable();
    updateFooter();
})

function addNewRow(){
    if(contactsNames.includes(fullName.value)){
        alert(`${fullName.value} já está na lista de contatos.`)
    } else {
        contactsNames.push(fullName.value);
    
        let row = '<tr>';
        row += `<td>${fullName.value}</td>`;
        row += `<td>${phone.value}</td>`;
        row += '</tr>';
    
        rows += row;
    }

    fullName.value = '';
    phone.value = '';
}

function updateTable(){
    const tableBody = document.querySelector('tbody');
    tableBody.innerHTML = rows;
}

function updateFooter(){
    let numberOfContacts = document.getElementById('agenda-size');

    numberOfContacts.innerHTML = contactsNames.length;
}