var nonImportantClass = "far fa-star";
var importantClass = "fas fa-star";
var isImportant = false;
var isFormVisible = true;


function toggleImportant() {
    console.log("icon clicked!");
    
    if(isImportant) {
        // non imnportant
        isImportant = false;
        $("#iImportant").removeClass(importantClass);
        $("#iImportant").addClass(nonImportantClass);
    }
    else {

        // important
        $("#iImportant").removeClass(nonImportantClass);
        $("#iImportant").addClass(importantClass);
        isImportant = true;
    }
}

function toggleForm() {
    if(isFormVisible) {
        // hide
        isFormVisible = false;
        $("#form").hide();
    }
    else { 
        // show 
        isFormVisible = true;
        $("#form").show();
    }

}

function saveTask() {
    console.log("Saving task...");

    let title = $("#txtTitle").val();
    let  date = $("#selDate").val();
    let  contact = $("#txtContact").val();
    let location = $("#txtLocation").val();
    let  desc = $("#txtDescription").val();
    let color = $("#selColor").val();
    console.log(title, date, contact, location, desc, color);
    // validate
    if(title.length < 5 ){
        // show an error
        alert("Title should be at least 5 chars long");
        return;
    }

    if(!date) {
        // show an error
        alert("DueDate is required");
        return;
    }

    if(!contact) {
        // show an error
        alert("Contact number is required");
        return;
    }

    if(!location) {
        // show an error
        alert("location is required");
        return;
    }



    let task = new Task(isImportant, title, date, contact, location, desc, color);

    console.log(task);

    // save the task
    
    // display
    displayTask(task);

    // clear the form (create a function fn)
    clearForm();
    // delete.val("")

}

function clearForm() {
    $("#txtTitle").val("dsa");
    $("#txtTitle").val("");
    $("#selDate").val("");
    $("#txtContact").val("");
    $("#txtLocation").val("");
    $("#txtDescription").val("");
    $("#selColor").val("");
}




function displayTask(task) {
    // create syntax 
    
    let syntax =    `<div class"task">
        <h5>${task.title}</h5>
        <p>${task.desc}<p>
        <label class="date">${task.dueDate}</label>
        <label class="">${task.contact}</label>
        <label class="">${task.location}</label>
        <label class="">${task.color}</label>
        <button onclick="deleteTask()" class="btn btn-sm btn-danger">Remove</button>

    </div>`;


    // append the syntax to an element on the screen
    $("#task-list").append(syntax);

}
function deleteTask() {
    console.log("deleting task");
}

function init() {
    console.log("Task manager");

    // events
    $("#iImportant").click(toggleImportant);
    $("#btnToggleForm").click(toggleForm);
    $("#btnSave").click(saveTask);

    
    // load data
}

window.onload = init;

// $("#form").hide() || $("#form").show()


