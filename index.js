
function receivesAFunction(callback) {
     callback();
}

function returnsANamedFunction(){
    return function nameRunner(){
        console.log("running");
    }
    // return nameRunner;
}

function returnsAnAnonymousFunction(){
    return function (){
        console.log("silent");
    }
}