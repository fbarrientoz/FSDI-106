class Task{
    constructor(title, important, dueDate, description, alertText, location) {
        this.title = title;
        this.important = important;
        this.dueDate = dueDate;
        this.description = description;
        this.alertText = alertText;
        this.location = location;

        this.user = 'Sergio';
        this.createdOn = new Date(); // current date and time
    }
}

/**
 * 
 * Create the UI
 * catch the clic event on the save button
 * call a save fn
 * get the values from the input fields
 * create an object * 
 * console log the object
 * 
 */