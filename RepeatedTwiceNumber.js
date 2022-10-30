let arr=new Array();
let repeatedNumber=function()
{
    for(i=0;i<=100;i++)
    {
        if(i==0)
        {
            continue;
        }
        if(i%11==0)
        {
            arr.push(i);
        }
    }
    console.log(arr);
}
repeatedNumber();