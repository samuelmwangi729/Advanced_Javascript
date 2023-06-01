let names=['sam','mwas','the','boss']
console.log(`The array is ${names}`)
console.log(`the length of the array is ${names.length}`)
//convert the array into a string 
let strNames= names.toString()
console.log(strNames)
//slice the array 
// let sldArray = names.slice(1,3)
// console.log(sldArray)
//join two arrays 
let newNames = ['new','name','here','done']
let concAray = names.concat(newNames)
console.log(concAray)
//splice the array 
let spArray = names.splice(2,3)
names.map((item)=>(
    console.log(item)
))
//lets see the use forEach 
let count = 0;
console.log(count++)
console.log(count)
//post increment returns the previous value,  but updates the existing value
//pre increment returns the new value 
//to find the maximum number in the array 
let nums =[2,1,56,34,78,10]
let sorted=[]
for(let  i=0;i<nums.length;i++){
    for(let j=1;j<=nums.length;j++){
        if(nums[i] > nums[j]){
            sorted[i] = nums[j]
        }else{
            sorted[i]=nums[i]
        }
    }
}
console.log(sorted)
// //use the reducer function to get the maximum
let max = nums.reduce((a,b) => Math.min(a,b),-Infinity)
console.log(max)
//another way to find the least number 
let mNum = 0;
for(let i=0;i<nums.length;i++){
    if(nums[i]>mNum){
        mNum = nums[i]
    }
}
console.log(`the Maximum number in the array [${nums}] is ${mNum}`)