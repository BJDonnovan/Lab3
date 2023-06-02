let form = document.forms.calc;
form.type.onchange=set_time;
function set_time (){
    let type=form.type.value;
    let selecter = document.getElementById('setPlace');
    if(type==="Пополняемый")
    {
        selecter.innerHTML=
        '<option value="6">6 месяцев</option>'+
        '<option value="12">1 год</option>'+
        '<option value="18">1,5 года</option>'+
        '<option value="24">2 года</option>';
    }
    else
    {
        selecter.innerHTML=
        '<option value="3">3 месяца</option>' +
        '<option value="6">6 месяцев</option>'+
        '<option value="9">9 месяцев</option>'+
        '<option value="12">1 год</option>'+
        '<option value="18">1,5 года</option>'+
        '<option value="24">2 года</option>';
    }
}
set_time();

function calculate(){
    let type=form.type.value;
    let initial = form.money.value;
    let time = form.time.value; 
    let bid=1;
    if (!initial) return false;
    if (!time) return false;
    if(type==="Пополняемый")
    {
        switch(time)
        {
            case 6:
            bid=0,2;
            break;

            case 12:
            bid=0,22;
            break;

            case 18:
            bid=0,15;
            break;

            case 24:
            bid=0,1;
            break;
        }

    }
    else
    {
        switch(time)
        {
            case 3:
            bid=0,2;
            break;

            case 6:
            bid=0,22;
            break;

            case 9:
            bid=0,23;
            break;

            case 12:
            bid=0,24;
            break;

            case 18:
            bid=0,18;
            break;

            case 24:
            bid=0,15;
            break;
        }
    }    
    let result = Math.round(initial * (1 + bid));
    let textOutput = document.getElementById('output');
    textOutput.innerHTML = "Вклад "+(type)+" на срок "+(time)+" месяца на сумму "+(initial)+
    " руб.\nВ конце срока вы получите "+(result)+" руб.";
    return false;                

}
let sendButton = form.solve;
sendButton.addEventListener("click", calculate);
