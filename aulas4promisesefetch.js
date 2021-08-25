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

// fetch
fetch('http://localhost:8888/data.json')
  .then9responseStream => {
      if (responseStream.status === 200) {
          return responseStream.json();
      } else {

      }

      // es7 - Async / Await

      