'use strict';

var gulp = require('gulp');


//this is the gulp "task" method. give it a name "hello", and pass in an anonymous 
// function to act as a task callback to execute whatever we want it to
gulp.task("hello", function() {
    //if running gulp hellp, "gulp" will print in the console       
    console.log("hello");
})