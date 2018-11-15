'use strict';

var gulp = require('gulp');


//this is the gulp "task" method. give it a name "hello", and pass in an anonymous 
// function to act as a task callback to execute whatever we want it to
gulp.task("hello", function() {
    //if running gulp hellp, "gulp" will print in the console       
    console.log("hello");
})

// the task is the default one, and it will run after an array, [], of tasks is run.
// The dependecies are in the array ["hello"]. These will run before the default task. 
// The default task is in the callback function. 
gulp.task("default", ["hello"], function() {
    console.log("this is the default task");
});