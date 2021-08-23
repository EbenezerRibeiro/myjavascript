function doSomething(callback) {
    setTimeout(function() {
        //did something
        callback('First data');
    }, 1000)
}

function doSomething(callback) {
    setTimeout(function() {
        //did other thing
        callback('Second data');
    }, 1000)
}

function doAll() {
    doSomething(function(data) )
}