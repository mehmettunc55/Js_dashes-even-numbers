
function dashesPrecedingEven(nums){
    
    console.log('Entered Word: ', nums);

    var splitNumber = nums.split("");
     
    for (let i=splitNumber.length-1; i>=0; i--) {
        if(parseInt(splitNumber[i]) %2 == 0 ){
            splitNumber.splice(i,0,'-');
        } 
    } 
    
    var outlay = splitNumber.toString().split(',').join('');   
    
    document.querySelector('#display-string').innerText = outlay;
}
     
const input = document.querySelector('#input-string');
const button = document.querySelector('#submit-button');

button.addEventListener('click', button => {
    dashesPrecedingEven(input.value)
});

   




/*-----JS COSOLE CODES-----


const input = document.querySelector('#input-string');
const button = document.querySelector('#submit-button');

button.addEventListener('click', button => {
    reversedString(input.value)
}); */

/* const nums = prompt('enter nums:');
const splitNumber = nums.split("");
for (let i=splitNumber.length-1; i>=0; i--) {
    if(parseInt(splitNumber[i]) %2 == 0 ){
        splitNumber.splice(i,0,'-');
    } 
}

console.log(outlay); */
