function isPrime (number) {
let counter = 0;
let result = "Error"
  
for (let i = 1; i <= number; i++) {
  
  if (typeof number === "number" && number !== 0 && number !== 1 && 
      number % i == 0)
    {counter++}
}                    
  
  if (counter > 2 && 3 < number && number <= 1000 && 
      (number - Math.trunc(number)) == 0) {result = "Not Prime"} 
  else if (counter <= 2 && 0 < number && number <= 1000 && 
           (number - Math.trunc(number)) == 0) {result = "Prime"}
  else if (number === 0) {result = "Zero"}
 
  else
  {result = "Error"}
  
  return result
  
}
           
      console.log(isPrime(111))