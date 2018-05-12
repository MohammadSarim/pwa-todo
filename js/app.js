const database = firebase.database()
var  a = 
document.getElementsByTagName('li').value;
if(a === "" ){
    alert("talha");
}

function addToDo() {
    var list = document.getElementById('data').value;

    database.ref(`todoApp/`).push(list);

    document.getElementById('data') .value = '';
    
    // if(list  === " "){
        // document.getElementById(btn).disabled = true;
        // alert("enter some value");
    // }

}

function toDo() {
    var userdata = localStorage.getItem('userdata');
    userdata = JSON.parse(userdata);
    var allTodoes = document.getElementById('todolist');
    
    
    database.ref(`todoApp/`).on('child_added', (snapshot) => {
        // console.log('abcd', snapshot.val());
        localStorage.setItem('todo', JSON.stringify(snapshot.val()));
        var userdata = localStorage.getItem('todo');
        userdata = JSON.parse(userdata);
        var createdLi = crateElement(userdata, 'LI', 'list-group-item')
        console.log( createdLi);
        allTodoes.appendChild(createdLi);
        document.getElementById('todolist').style.marginTop = '30px'
    })
    var  v = 
    document.getElementsByTagName('Li').value;
    if(v === "" ){
        alert("talha");
    }
}

function crateElement(text, element, className) {
    var li = document.createElement(element);
    var textNode = document.createTextNode(text);
    li.appendChild(textNode);
    li.setAttribute('class', className);
    return li;
if(li === ""){
    alert('alf')
}
}