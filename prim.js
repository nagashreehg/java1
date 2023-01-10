let a=[2,3,4,5,6,1];
var i=0;
if (a[i]===1){
        console.log(a[i],"is not a primenumber");
      }
else if(a[i]>1)
{
    for(let i=0;i<a.length;i++){
        
      if(a[i]%2==0){
        console.log(a[i],"is not a primenumber");
      }
      else  {
        console.log(a[i],"is a primenumber");
      }
    
    }
  }
