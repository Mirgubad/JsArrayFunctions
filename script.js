
//This is The Custom Push Function of array
//That receives An array ,Element and index then adding element this index which you given

const array1=[1,3,5,7,9]

CustomPush(array1,`Hello`,4)



function CustomPush(array,element,index){
    const newarr=array.splice(index)
    array.push(element)
    const result=array.concat(newarr)
    console.log(result);

}



//This Function is Receives An Array and index then Deleting item at this index

const array2=[2,4,6,8,0]

DeleteItemWithIndex(array2,3)


function DeleteItemWithIndex(array,deleteindex){
    for(let i=0;i<array.length;i++){
    
        if(i==deleteindex){
            array[i]=array[i+1]
            deleteindex++;
        }
    }
    array.length-=1;
    console.log(array); 
}