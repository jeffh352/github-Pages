let tasks=[desc, priority, stats];
function add(){
    var taskDesc=document.getElementById('taskDesc').value;
    tasks.push(taskDesc);

    var pval="";
    for(i=0; i<tasks.length;i++){
        pval=pval+tasks[i];
    }
    document.getElementById('').innerHTML=pval;
}