// Intentional Error: If you haven’t received an array index error in one of your programs yet,
// try to make one happen. Change an index in one of your programs to produce an index error.
// Make sure you correct the error before closing the program.
var list = ['danish','bilal','ibrahim', 'farrukh', 'ali'];
try{ 
    for(var i = 0 ; i <= list.length; i++){
        if(list[i] == undefined){
            console.log("Error "+list[i]);
            continue;
        }
        else{
            console.log(list[i]);
        }
    }
}catch(err){
    console.log(err);
}