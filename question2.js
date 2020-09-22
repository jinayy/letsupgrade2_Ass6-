window.onload=function(){
    let bus=[];
    if(localStorage.getItem("newbus")==null)
    {
        localStorage.setItem("newbus",JSON.stringify(bus));    
    }
}
    

function display(superbus = undefined)
{
    let newbus;
    let busdata="";
    if(superbus==undefined)
    {
        newbus=JSON.parse(localStorage.getItem("newbus"));
    }
    else
    {
        newbus=superbus;
    }
    newbus.forEach(function(superhero,index) 
    {
        let currentrow=`<tr> 
        <td>${index+1}</td>
        <td>${superhero.name}</td>
        <td>${superhero.source}</td>
        <td>${superhero.destination}</td>
        <td>${superhero.number}</td>
        <td>${superhero.capacity}</td>
        </td>
        </tr>`;
        tabledata+=currentrow;
        
    });
    document.getElementsByClassName('tdata')[0].innerHTML=tabledata;
    //document.getElementById('tdata').innerHTML=tabledata;}
}
    display();


function addbus(event)
{
    event.preventDefault();
    let bus={};           //Blank array
    let name=document.getElementById('name').value;
    let source=document.getElementById('source').value;
    let destination=document.getElementById('destination').value;
    let number=document.getElementById('number').value;
    let capacity=document.getElementById('capacity').value;
    bus.name=name;
    bus.source=source;
    bus.destination=destination;
    bus.number=number;
    bus.capacity=capacity;
    
    let newbus=JSON.parse(localStorage.getItem("newbus"));
    newbus.push(bus);
    localStorage.setItem("newbus",JSON.stringify(newbus));
    display();

    document.getElementById('name').value="";
    document.getElementById('source').value="";
    document.getElementById('destination').value="";
    document.getElementById('number').value="";
    document.getElementById('capacity').value="";
}

function showmodal()
{
    let modal=document.getElementsByClassName("modal")[0];
    modal.style.display="block";
    
}

function hidemodal(event)
{
    if (event.target.className=="modal")
    {
        let modal=document.getElementsByClassName("modal")[0];
        modal.style.display="none";
    } 
}
