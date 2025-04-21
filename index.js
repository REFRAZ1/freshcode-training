var startSum = 990;
var secondSum = 230;
var tirdSum = 0;

function money()
{

    if(startSum > 999){
        startSum = 0;
        secondSum += 1
    }

    if(startSum == 0)
    {
        document.getElementById('hundrets').innerHTML = '000';
        startSum += 10;

    }
    else if(startSum < 9)
    {
        document.getElementById('hundrets').innerHTML = '00' + startSum;
        startSum += 7;
    }
    else if(startSum < 99)
    {
        document.getElementById('hundrets').innerHTML = '0' + startSum;
        startSum += 15;
    }
    else
    {
        document.getElementById('hundrets').innerHTML = startSum;
        startSum += 990;

    }


    if(secondSum > 999){
        secondSum = 0;
        tirdSum += 1;
    }

    if(secondSum == 0)
        {
            document.getElementById('thousendts').innerHTML = '000';
    
        }
        else if(secondSum < 9)
        {
            document.getElementById('thousendts').innerHTML = '00'+ secondSum;
        }
        else if(secondSum < 99)
        {
            document.getElementById('thousendts').innerHTML = '0'+ secondSum;
    
        }
        else
        {
            document.getElementById('thousendts').innerHTML = secondSum;
    
        }


    if(tirdSum == 0)
    {
        document.getElementById('millions').innerHTML = '00';

    }
    else if(tirdSum < 9)
    {
        document.getElementById('millions').innerHTML = '0'+ tirdSum;
    }
    else
    {
        document.getElementById('millions').innerHTML = tirdSum;
    }

    if(tirdSum == 10)
        {
            setTimeout(() => {clearInterval(timerId); alert('Збори завершено'); }, 1000);
        }
};

let timerId = setInterval(() => money(), 5000);

