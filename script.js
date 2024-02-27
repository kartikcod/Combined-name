
function combinedname() {
    let firstname = document.getElementById('examplefirstname').value;
    let secondname = document.getElementById('examplesecondname').value;
    let fullname = firstname + ' ' + secondname;
    document.getElementById('output').innerHTML = " FullName: " + fullname;
    document.body.style.backgroundColor = "#0001";
}
combinedname()
