 // immediately invoked function expression

 // to avoid problems due to pollution in global scope

 // named iife
 (
    function helloWorld(){
        console.log("Hello World");
    }
 )();

 // iife's dont know where to stop the context, hence ; is required to end context

 (
    (name)=>{
        console.log("Hello World 2 " + name);
    }
 )('yashu');