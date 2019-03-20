var a = document.getElementById("updates-all");
var t = document.getElementById("updates-tasks");
var st = document.getElementById("updates-status");
var r = document.getElementById("updates-replies");

// var c = document.getElementById("comment-box");


function showAll(){
    a.classList.remove("dn");
    a.classList.add("db");

    hideTasks();
    hideStatus();
    hideReplies();
}

function showTasks(){
    t.classList.remove("dn");
    t.classList.add("db");

    hideAll();
    hideStatus();
    hideReplies();
}

function showStatus(){
    st.classList.remove("dn");
    st.classList.add("db");

    hideAll();
    hideTasks();
    hideReplies();
}

function showReplies(){
    r.classList.remove("dn");
    r.classList.add("db");

    hideAll();
    hideTasks();
    hideStatus();

}

function hideAll(){
    a.classList.remove("db");
    a.classList.add("dn");
}

function hideTasks(){
    t.classList.remove("db");
    t.classList.add("dn");
}

function hideStatus(){
    st.classList.remove("db");
    st.classList.add("dn");
}

function hideReplies(){
    r.classList.remove("db");
    r.classList.add("dn");
}