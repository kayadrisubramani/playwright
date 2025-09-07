// Literal declartion
let s="Hello World"   
//To split string into array
let result=s.split (" ")
console.log(result) 
// to find the last word in the array
let lastword=result [result.length-1]      
  console.log(lastword)   
// Calculate the length of the word
  console.log(lastword.length)                    

let y="fly me to the moon"
function test(y) {
    let result1=y.trim()                               // To Trim the string
    let splitstring=result1.split(" ")                 // To split the string into words
    let lastword1=splitstring[splitstring.length-1]    // To identify last word
    let lastwordlength=lastword1.length                // To calculate length
    console.log(result1)
    console.log(splitstring)
    console.log(lastword1)
    console.log(lastwordlength)
    return(lastwordlength)
   }
   console.log (test(y))

   function isAnagram(string1,string2){
    string1 =string1.toLowerCase()
    string2 =string2.toLowerCase()
    
    arrStr1=string1.split("")
    arrStr2=string2.split("")

    let Sortstring1 = arrStr1.sort().join('');
    let Sortstring2= arrStr2.sort().join('');
    let result=string1.localeCompare(string2);
    
    console.log(string1)
    console.log(string2)
    console.log (Sortstring1)
    console.log(Sortstring2)
    
   }
   console.log(isAnagram("silent", "listen"))
   console.log(isAnagram("Hello" , "World"))
   
   console.log(result)





