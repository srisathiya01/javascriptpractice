var testArray=[1,2,5,3,7,4]
var minValue=null;

for(test of testArray){
    if(minValue==null){
        minValue=test;
    }else if(minValue>test){
        minValue=test;
    }
    
}

console.log('minvlaue',minValue);