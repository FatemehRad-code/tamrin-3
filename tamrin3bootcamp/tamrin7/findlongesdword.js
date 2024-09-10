function longestWord(sentence) { 

    const words = sentence.split(" "); 
 
    let longest = words[0]; 
 
    for (let i = 1; i < words.length; i++) { 
     
      if (longest.length < words[i].length) { 
       
        longest = words[i]; 

       // console.log("longest word is :",longest); 
      } 
      
    } 
   return longest;
  } 
  
  const str = "i have one question" ;
  
  console.log(longestWord(str)); 
   