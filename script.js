let lst = [];

function setUsername(){
    const username = document.getElementById('username-input').value;
    document.getElementById('username').textContent = username
}

function setImg(){
    const img = document.getElementById('img-input').value;
    document.getElementById('imgJa').src = img
}

function addItem(){
    const name = document.getElementById('name').value;
    const tel = document.getElementById('tel').value;
    lst.push({name , tel})
    updateTable()
}

function updateTable(){
    const table = document.getElementById('contactTable')
    while (table.rows.length > 1) {
        table.deleteRow(1);
    }
    lst.forEach((contact , index) =>{
        const row = table.insertRow(-1);
        row.insertCell(0).textContent = index + 1;
        row.insertCell(1).textContent = contact.name;
        row.insertCell(2).textContent = contact.tel;
    })
}

function saveCSV() {
    let csv = 'Name,Phone Number\n';
    lst.forEach(contact => {
        csv += `${contact.name},${contact.tel}\n`;
    });
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", "data.csv");
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};