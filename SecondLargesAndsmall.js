let arr=new Array();
for(let i=0;i<10;i++)
{
    arr.push(Math.floor(Math.random()*999+100));
}
console.log(arr);

function findMax()
{
    let first=0;
    let second=0;
    for(let val of arr)
    {
        if(val>first)
        {
            second=first;
            first=val;
        }
        else if(val>second && val!=first)
        {
            second=val;
        }
    }
    return second;
}

function findMin()
{
    let first=Math.floor(Math.random()*10000);
    let secnd=Math.floor(Math.random()*10000);
    for(let val of arr)
    {
        if(val<first)
        {
            second=first;
            first=val;
        }
        else if(val<second && val!=first)
        {
            second=val;
        }
    }
    return second;
}
console.log("Second largest "+findMax());
console.log("Second smallest "+findMin());
