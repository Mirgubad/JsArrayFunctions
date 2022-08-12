
//This is The Custom Push Function of array


const array1=[1,3,5,7,9]

CustomPush(array1,`Hello`,5)

function CustomPush(array,element,index){
   if(index>array.length){
    console.log(`ArrayIndexOutOfBounds`)
    return;
   }
   
    const newarr=array.splice(index)
    array.push(element)
    const result=array.concat(newarr)
    console.log(result);

}



//This Function is CustomPop

const array2=[2,4,6,8,0]

CustomPop(array2,4)


function CustomPop(array,deleteindex){
   if(deleteindex>array.length-1){
    console.log(`ArrayIndexOutOfBounds`)
    return;
   }
    for(let i=deleteindex;i<array.length;i++){
    
        if(i==deleteindex){
            array[i]=array[i+1]
            deleteindex++;
        }
    }
    array.length-=1;
    console.log(array); 
}