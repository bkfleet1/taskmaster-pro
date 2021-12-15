var tasks = {};

<<<<<<< HEAD
var createTask = function(taskText, taskDate, taskList) {
  // create elements that make up a task item
  var taskLi = $("<li>").addClass("list-group-item");
  var taskSpan = $("<span>")
    .addClass("badge badge-primary badge-pill")
    .text(taskDate);
=======

// Create TASKS
var createTask = function(taskText, taskDate, taskList) {
  // create elements that make up a task item
  var taskLi = $("<li>")
    .addClass("list-group-item");
  //date
  var taskSpan = $("<span>")
    .addClass("badge badge-primary badge-pill")
    .text(taskDate);
  //task decription
>>>>>>> develop
  var taskP = $("<p>")
    .addClass("m-1")
    .text(taskText);

  // append span and p element to parent li
  taskLi.append(taskSpan, taskP);

  // check due date
  auditTask(taskLi);

  // append to ul list on the page
  $("#list-" + taskList).append(taskLi);
};

<<<<<<< HEAD
=======

//Loads TASKS
>>>>>>> develop
var loadTasks = function() {
  tasks = JSON.parse(localStorage.getItem("tasks"));

  // if nothing in localStorage, create a new object to track all task status arrays
  if (!tasks) {
    tasks = {
      toDo: [],
      inProgress: [],
      inReview: [],
      done: []
    };
  }

  // loop over object properties
  $.each(tasks, function(list, arr) {
<<<<<<< HEAD
=======
    console.log(list, arr);
>>>>>>> develop
    // then loop over sub-array
    arr.forEach(function(task) {
      createTask(task.text, task.date, list);
    });
  });
};

<<<<<<< HEAD
=======


>>>>>>> develop
var saveTasks = function() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

var auditTask = function(taskEl) {

  // get date from task element
  var date = $(taskEl)
    .find("span")
    .text()
    .trim();

<<<<<<< HEAD
  console.log(date);
=======
var auditTask = function(taskEl) {
  // get date from task element
  var date = $(taskEl)
    .find("span")
    .text()
    .trim();
>>>>>>> develop

  // convert to moment object at 5:00pm
  var time = moment(date, "L").set("hour", 17);

<<<<<<< HEAD
  console.log(time);

  // remove any old classes from element
  $(taskEl).removeClass("list-group-item-warning list-group-item-danger");

  // apply new class if task is near/over due date
  if (moment().isAfter(time)) {
    $(taskEl).addClass("list-group-item-danger");
  } 
=======
  // remove any old classes from element
$(taskEl).removeClass("list-group-item-warning list-group-item-danger");

  // apply new class if task is near/over due date
  // apply new class if task is near/over due date
  if (moment().isAfter(time)) {
    $(taskEl).addClass("list-group-item-danger");
  }
>>>>>>> develop
  else if (Math.abs(moment().diff(time, "days")) <= 2) {
    $(taskEl).addClass("list-group-item-warning");
  }
};

<<<<<<< HEAD
// enable draggable/sortable feature on list-group elements
$(".card .list-group").sortable({
  // enable dragging across lists
  connectWith: $(".card .list-group"),
  scroll: false,
  tolerance: "pointer",
  helper: "clone",
  activate: function(event, ui) {
    console.log(ui);
  },
  deactivate: function(event, ui) {
    console.log(ui);
  },
  over: function(event) {
    console.log(event);
  },
  out: function(event) {
    console.log(event);
  },
  update: function() {
    var tempArr = [];

    // loop over current set of children in sortable list
    $(this)
      .children()
      .each(function() {
        // save values in temp array
        tempArr.push({
          text: $(this)
            .find("p")
            .text()
            .trim(),
          date: $(this)
            .find("span")
            .text()
            .trim()
        });
      });

=======

// Allows user to drag-n-drop TASKS into other groups to change its status and within a group to change the order os tasks. Changes are saved on drop.
$(".card .list-group").sortable({
   connectWith: $(".card .list-group"),
   scroll: false,
   tolerance: "pointer",
   helper: "clone",

  activate: function(event,ui) {
    $(this).addClass("dropover");
    $(".bottom-trash").addClass("bottom-trash-drag");
  },
  deactivate: function(event,ui) {
    $(this).removeClass("dropover");
    $(".bottom-trash").removeClass("bottom-trash-drag");
  },
  over: function(event) {
    $(event.target).addClass("dropover-active");
  },
  out: function(event) {
    $(event.target).removeClass("dropover-active");
  },
  update: function() {
    // array to store the task data in
    var tempArr = [];

    // loop over current set of children in sortable list
    $(this).children().each(function() {
      //save values in temp array
      tempArr.push({
        text: $(this)
        .find("p")
        .text()
        .trim(),
        date: $(this)
        .find("span")
        .text()
        .trim()
      });
    });
>>>>>>> develop
    // trim down list's ID to match object property
    var arrName = $(this)
      .attr("id")
      .replace("list-", "");

    // update array on tasks object and save
    tasks[arrName] = tempArr;
    saveTasks();
<<<<<<< HEAD
  },
  stop: function(event) {
    $(this).removeClass("dropover");
  }
});

// trash icon can be dropped onto
=======
 
  }
});
// End drag-n-drop


// Delete task on drop
>>>>>>> develop
$("#trash").droppable({
  accept: ".card .list-group-item",
  tolerance: "touch",
  drop: function(event, ui) {
<<<<<<< HEAD
    // remove dragged element from the dom
    ui.draggable.remove();
  },
  over: function(event, ui) {
    console.log(ui);
  },
  out: function(event, ui) {
    console.log(ui);
  }
});

// convert text field into a jquery date picker
$("#modalDueDate").datepicker({
  // force user to select a future date
  minDate: 1
});
=======
    ui.draggable.remove();
    $(".bottom-trash").removeClass("bottom-trash-active");
  },
  over: function(event, ui) {
    console.log(ui);
    $(".bottom-trash").addClass("bottom-trash-active");
  },
  out: function(event, ui) {
    $(".bottom-trash").removeClass("bottom-trash-active");
  }
});



// Calendar date picker on class #modalDueDate. minDate: 1 only allows the user to pick a future date, starting with tomorrow.
$("#modalDueDate").datepicker({
  minDate: 1
});


>>>>>>> develop

// modal was triggered
$("#task-form-modal").on("show.bs.modal", function() {
  // clear values
  $("#modalTaskDescription, #modalDueDate").val("");
});

// modal is fully visible
$("#task-form-modal").on("shown.bs.modal", function() {
  // highlight textarea
  $("#modalTaskDescription").trigger("focus");
});

// save button in modal was clicked
<<<<<<< HEAD
$("#task-form-modal .btn-primary").click(function() {
=======
$("#task-form-modal .btn-save").click(function() {
>>>>>>> develop
  // get form values
  var taskText = $("#modalTaskDescription").val();
  var taskDate = $("#modalDueDate").val();

  if (taskText && taskDate) {
    createTask(taskText, taskDate, "toDo");

    // close modal
    $("#task-form-modal").modal("hide");

    // save in tasks array
    tasks.toDo.push({
      text: taskText,
      date: taskDate
    });

    saveTasks();
  }
});

// task text was clicked
$(".list-group").on("click", "p", function() {
  // get current text of p element
  var text = $(this)
    .text()
    .trim();

  // replace p element with a new textarea
  var textInput = $("<textarea>").addClass("form-control").val(text);
  $(this).replaceWith(textInput);

  // auto focus new element
  textInput.trigger("focus");
});



// editable field was un-focused
$(".list-group").on("blur", "textarea", function() {
  // get current value of textarea
  var text = $(this).val();

  // get status type and position in the list
  var status = $(this)
    .closest(".list-group")
    .attr("id")
    .replace("list-", "");
  var index = $(this)
    .closest(".list-group-item")
    .index();

  // update task in array and re-save to localstorage
  tasks[status][index].text = text;
  saveTasks();

  // recreate p element
  var taskP = $("<p>")
    .addClass("m-1")
    .text(text);

  // replace textarea with new content
  $(this).replaceWith(taskP);
});

<<<<<<< HEAD
// due date was clicked
=======


// Task DUE DATE was clicked, which allows user to edit and launches calendar Date Picker.
>>>>>>> develop
$(".list-group").on("click", "span", function() {
  // get current text
  var date = $(this)
    .text()
    .trim();

  // create new input element
  var dateInput = $("<input>")
    .attr("type", "text")
    .addClass("form-control")
    .val(date);
<<<<<<< HEAD
=======

>>>>>>> develop
  $(this).replaceWith(dateInput);

  // enable jquery ui date picker
  dateInput.datepicker({
    minDate: 1,
    onClose: function() {
<<<<<<< HEAD
      // when calendar is closed, force a "change" event
=======
      // when calendar is closed, force a "change" event on the `dateInput`
>>>>>>> develop
      $(this).trigger("change");
    }
  });

<<<<<<< HEAD
  // automatically bring up the calendar
  dateInput.trigger("focus");
});

// value of due date was changed
=======
  dateInput.trigger("focus");
});



// App saves change to DUE DATE
>>>>>>> develop
$(".list-group").on("change", "input[type='text']", function() {
  var date = $(this).val();

  // get status type and position in the list
  var status = $(this)
    .closest(".list-group")
    .attr("id")
    .replace("list-", "");
  var index = $(this)
    .closest(".list-group-item")
    .index();

  // update task in array and re-save to localstorage
  tasks[status][index].date = date;
  saveTasks();

  // recreate span and insert in place of input element
  var taskSpan = $("<span>")
    .addClass("badge badge-primary badge-pill")
    .text(date);
<<<<<<< HEAD
    $(this).replaceWith(taskSpan);
    auditTask($(taskSpan).closest(".list-group-item"));
});

// remove all tasks
=======
  $(this).replaceWith(taskSpan);

  // Pass task's <li> element into auditTask() to check new due date
  auditTask($(taskSpan).closest(".list-group-item"));
});



// Remove all tasks when DELETE ALL TASKS clicked (class "#remove-tasks").
>>>>>>> develop
$("#remove-tasks").on("click", function() {
  for (var key in tasks) {
    tasks[key].length = 0;
    $("#list-" + key).empty();
  }
  console.log(tasks);
  saveTasks();
});

// load tasks for the first time
loadTasks();
<<<<<<< HEAD
=======




setInterval(function() {
  $(".card .list-group-item").each(function() {
    auditTask($(this));
  });
}, (1000 * 60) * 30);







>>>>>>> develop
