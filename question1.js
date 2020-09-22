let superheroes=[
    {
        name : "Vishal",
        age : 35,
        city : "benglore",
        salary : 450000

    },
    {
        name : "Krunal",
        age : 24,
        city : "Surat",
        salary : 850000

    },
    {
        name : "Priyank",
        age : 30,
        city : "Delhi",
        salary : 600000

    },
    {
        name : "Neel",
        age : 25,
        city : "Ahmedabad",
        salary : 700000

    },
    {
        name : "Hitesh",
        age : 33,
        city : "Mumbai",
        salary : 550000

    },
];

function display(superarray)
{
    let tabledata="";

    superarray.forEach(function(superhero,index) 
    {
        let currentrow=`<tr> 
        <td>${index+1}</td>
        <td>${superhero.name}</td>
        <td>${superhero.age}</td>
        <td>${superhero.city}</td>
        <td>${superhero.salary}</td>
        <td><button onclick='deletesuper(${index})'>delete</button>
        
        </td>
        </tr>`;
        tabledata+=currentrow;
        
    });
    document.getElementsByClassName('tdata')[0].innerHTML=tabledata;
    //document.getElementById('tdata').innerHTML=tabledata;
}
display(superheroes);

function deletesuper(index)
{
    superheroes.splice(index,1);
    display(superheroes);
}

function searchbyname()
{
    let s=document.getElementById('searchname').value;
    let newdata=superheroes.filter(function (superhero){
    return superhero.name.toLocaleUpperCase().indexOf(s.toLocaleUpperCase())!=-1 || superhero.city.toLocaleUpperCase().indexOf(s.toLocaleUpperCase())!=-1;
    });
    display(newdata);
}
