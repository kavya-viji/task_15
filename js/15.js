var n = parseInt(prompt("Enter the Number"));
 sum=0
   while(n>0)
    {
      var rem =n%10
      sum=sum+rem;
      n=(n-rem)/10;
	  console.log(sum);
	  
    }
