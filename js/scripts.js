let tasks=[];
function add(){
    var desc=document.getElementById('taskDesc').value;
    var priority=document.getElementById('priority').value;
    //var statusd=document.querySelector('input[name="status"]:checked');
    if(document.getElementById('completed').checked){
        var statusd=document.getElementById('completed').value;
    }
    else{
        var statusd="pending"
    }

    tasks.push("Description:"+desc+" Priority:"+priority+" Status:"+statusd);

    var html="";
    for (var i =0; i < tasks.length; i++) {
        html += "<li>" + tasks[i]+ "</li>";
    }
    document.getElementById("tasks").innerHTML = html;
}
add();
function remove(){
    var index=document.getElementById('removeNum').value
    tasks.splice(index-1, 1);

    var html="";
    for (var i =0; i < tasks.length; i++) {
        html += "<li>" + tasks[i]+ "</li>";
    }
    document.getElementById("tasks").innerHTML = html;
}
remove();

function changeComplete(){
    var index=document.getElementById('changeComplete').value

    var html="";
    for (var i =0; i < tasks.length; i++) {
        html += "<li>" + tasks[i]+ "</li>";
    }
    document.getElementById("tasks").innerHTML = html;
}
changeComplete();


