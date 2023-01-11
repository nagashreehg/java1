let a=[1,2,3,4,5];
let target=6;
let newarray=[];
for(let i=0;i<a.length;i++)
{
    for(let j=i+1;j<a.length-1;j++)
    {
        let diff=target-a[i];
        if(a[j]==diff){
newarray.push(a[i],a[j]);
        }
    }
}