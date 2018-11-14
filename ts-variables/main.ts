function iterateVariable() {
    // Here if we change var to let it will throw an error
    // Even if we use let, it will successfully compile into js because let is not there in js. So, we have var in js
    
    for(var i =0; i<5 ; i++) {
        console.log(i);
    }
    console.log("finally: "+ i);
}

iterateVariable();