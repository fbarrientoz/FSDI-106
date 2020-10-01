var visible= false;
var important = false;
var showIcon = '<i class="far fa-eye"></i>';
var hideIcon = '<i class="fas fa-eye-slash"></i>';
var activeIcon = '<i class="fas fa-star"></i>';
var hideIcon = '<i class="far fa-star"></i>';
var UI = {};
var taskList = [];

function showDetalis(){
    console.log("btn Clicked!");
if(!visible)
{
    UI.secForm.removeClass('invisible');
    UI.btnShow.html( hideIcon + " Hide Detalis");
    visible = true;
}
else{
    UI.secForm.addClass('invisible');
    UI.btnShow.html(showIcon + "Show Detalis");
    visible = false;
}
}

function toggleImportant(){

if(!important){
    UI.btnImportant.removeClass("far");
    UI.btnImportant.addClass("fas active");  
    important = true;
}
else{
    UI.btnImportant.addClass("far");
    UI.btnImportant.removeClass("fas active");
    important = false;
}
}

function saveTask(){
   var title = UI.txtTitle.val();
   var date = UI.txtDate.val();
   var desc = UI.txtDescription.val();
   var alert = UI.txtAlert.val();
   var location = UI.txtLocation.val();

   var task = new Task(title,important,date, desc, alert, location);
   taskList.push(task);
   clearForm();
   console.log(taskList);
}

function clearForm(){
    $(".control").val('');
}

function test(a)
{
  
    a.btnShow = null;
   
}

function init()
{

    console.log("main page");
    UI= {
        btnShow: $("#btnShow"),
        btnImportant :  $("#btnImportant"),
        secForm :  $("#secForm"),
        btnSave: $("#btnSave"),
        txtTitle: $("#txtTitle"),
        txtDate: $("#txtDate"),
        txtDescription: $("#txtDescription"),
        txtAlert: $("#txtAlert"),
        txtLocation : $("#txtLocation"),

    };

    
    UI.btnShow.click(showDetalis);
    UI.btnImportant.click(toggleImportant);
    UI.btnSave.click(saveTask);


    
    
}
window.onlaod = init();

/**
 * 
 * Object literal dog = {}
 * 
 * **/