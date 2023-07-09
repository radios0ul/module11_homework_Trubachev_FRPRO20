function main (a, b){
  
let i = 0;
  
  function print() 
  { 
    if ((a + i) >= b) {clearInterval(intervalId)}
    console.log(a + i);
    i = i + 1;   
 }; 
  
const intervalId = setInterval(print, 1000);
  
};                  
  
main(5, 15);