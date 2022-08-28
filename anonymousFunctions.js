setTimeout(
    function() {
        console.log("Done!");
    },
    3000 //3000 milliseconds (3 seconds)
)

//setTimeout code using arrow functions or fat arrow functions
setTimeout(
    () => { //anonymous function
        console.log("Done!");
    },
    3000 //3000 milliseconds (3 seconds)
)