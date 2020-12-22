
var productNameInp = document.getElementById("productName");
var productPriceInp = document.getElementById("productPrice");
var productCompanyInp = document.getElementById("productCompany");
var productDescInp = document.getElementById("productDesc");
var addBtn = document.getElementById("addBtn");

var productsContainer ;

if(localStorage.getItem("productsContainer") == null)
    {
        productsContainer = [];
    }
else
    {
        productsContainer =JSON.parse( localStorage.getItem("productsContainer"));
        displayData();

    }




addBtn.onclick = function()
{
    addProduct();
    displayData();
    clearForm();
    

}

function addProduct()
{
    var product = 
        {
            name:productNameInp.value,
            price:productPriceInp.value,
            company:productCompanyInp.value,
            desc:productDescInp.value
        }
    productsContainer.push(product);
    
localStorage.setItem("productsContainer",JSON.stringify(productsContainer));
    
}

function displayData()
{
    var cols="";
    for(var i = 0 ; i<productsContainer.length ; i++)
        {
        cols +='<div class="col-md-3"> <div class="product"><h3>'+productsContainer[i].name+'</h3><p>'+productsContainer[i].desc+'</p><p class="text-danger">'+productsContainer[i].price+'</p> <p class="text-info">'+productsContainer[i].company+'</p><button class="btn btn-danger" onclick="deleteProduct('+i+')">delete</button></div></div>'    
        }
    document.getElementById("rowData").innerHTML = cols;
}
function deleteProduct(id)
{
    
    productsContainer.splice(id,1);
localStorage.setItem("productsContainer",JSON.stringify(productsContainer));
    
    displayData();

}
function clearForm()
{
    
   var inputs= document.getElementsByClassName("form-control");
    
    for(var i= 0 ; i <inputs.length ; i++)
        {
            inputs[i].value = "";
        }
};


    function calcAge(birthDate)
    {
        var  age = 2019 - birthDate;
        return age;
    }

    function retierement (birthDate , employeeName)
    {

        var employeeAge = calcAge(birthDate);
        var retierYears = 65 - employeeAge;

        console.log("Employee "+ employeeName + " Retiret At "+ retierYears)
}

    retierement(1998 , "Islam")
    retierement(1994 , "Ali")
    retierement(1990 , "Gharib")
    retierement(1989 , "Hamza")
    retierement(1994 , "Kemo")
    retierement(1991 , "Abdullsamad")
    retierement(1993 , "Megz")
    retierement(2000 , "Omar Adel")
    retierement(2001 , "Attia")
    retierement(2004 , "Baher")
    retierement(2003 , "Hassan")
    retierement(2010 , "Yosf")
    retierement(1976 , "Ali")
    retierement(1994 , "Mohammed Hamdy")    

var colors = ["red", "blue" , "white", "tomato"];
for (var i = 0 ; i< colors.length ; i++) {
  console.log(colors[i])
}

var users = 
    [
        {name:'hamdy', age:'26', Gender:'IS' , salary:'2323'},
        {name:'omar', age:'25', Gender:'IS' , salary:'2323'} ,
        {name:'baher', age:'35', Gender:'IS' , salary:'2323'},
        {name:'kemo', age:'24', Gender:'IS' , salary:'2323'},
        {name:'ahmed', age:'24', Gender:'IS' , salary:'2323'},
        {name:'gharib', age:'14', Gender:'IS' , salary:'2323'},
        {name:'abdullsamad', age:'34', Gender:'IS' , salary:'2323'},
    ]



var tab = "";

for (var i = 0 ; i< users.length ; i++)
 {
   tab +="<tr> <td>"+users[i].name+"</td> <td>"+users[i].age+"</td> <td>"+users[i].Gender+"</td> <td>"+users[i].salary+"</td> </tr>";
}

document.getElementById('tableBody').innerHTML = tab;