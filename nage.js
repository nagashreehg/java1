var arr=[{name:"a",age:4},
{name:"a",age:45},
{name:"a",age:40},
{name:"a",age:45},];
var news =[];
for(var i=0;i<arr.length;i++)
{
if(!news[arr[i].age]){
    news[arr[i].age]=arr[i];
}
else{
    news(arr[i])}
}
