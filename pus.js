let a=[1,2,3,3,4,5,5];
let arr=[];
for(let i=0;i<a.length;i++){
    for(let j=i+1;j<a.length-1;j++){
        if(a[i]==a[j]){
            arr.push(a[i]);
        }
    }
}
