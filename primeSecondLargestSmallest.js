let arr=new Array();
for(let i=0;i<10;i++)
{
    arr.push(Math.floor(Math.random()*999+100));
}
console.log(arr);

let SecondMaxMinNumber=function()
{
    let temp;
    for(let i=0;i<arr.length;i++)
    {
        for(let j=i;j<arr.length;j++)
        {
            if(arr[i]>arr[j])
            {
                temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }
        }
    }
    console.log(arr[1]);
    console.log(arr[arr.length-2]);
    
}
SecondMaxMinNumber();