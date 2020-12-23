var searchInp = document.getElementById("searchInp");
var searchRow = document.getElementById('searchRow');
var currentIndex = 0;
var productNameInp = document.getElementById("productName");
var productPriceInp = document.getElementById("productPrice");
var productCompanyInp = document.getElementById("productCompany");
var productDescInp = document.getElementById("productDesc");
var addBtn = document.getElementById("addBtn");
var productsContainer;
 
var alertContainer = document.getElementById('alertContainer');

alertContainer.style.display = "none";

if (localStorage.getItem("productsContainer") == null) {

	productsContainer = [];
} else 
	{
		productsContainer = JSON.parse( localStorage.getItem("productsContainer"));
		displayData();
	}


function searchProducts(search) {
	var searchConatiner = '';
	for (var i = 0; i < productsContainer.length; i++) {
		if (productsContainer[i].name.toLowerCase().includes(search.toLowerCase())) {
			searchConatiner +=
				'<div class="col-md-3 mb-4"><img src="images/team-bw-2.jpg" class="img-fluid"><h2>' +
				productsContainer[i].name +
				'</h2><p class="text-danger">' +
				productsContainer[i].price +
				"</p><h3>" +
				productsContainer[i].company +
				'</h3><h3 class="text-info">' +
				productsContainer[i].desc +
				'</h3><button class="btn btn-danger" onclick="deleteProduct(' + i + ')">DELETE</button><button class="btn btn-info ml-2" onclick="setForm('+ i +')">update</button></div>';
		}
	}
	document.getElementById("rowData").innerHTML = searchConatiner;
}


function setForm(i){
	productNameInp.value=productsContainer[i].name;
	productPriceInp.value=productsContainer[i].price;
	productCompanyInp.value=productsContainer[i].company;
	productDescInp.value=productsContainer[i].desc;
	addBtn.innerHTML = " update Product";
	currentIndex = i;
}

function updateProduct(){
productsContainer[currentIndex].name = productNameInp.value;
productsContainer[currentIndex].price = productPriceInp.value;
productsContainer[currentIndex].company = productCompanyInp.value;
productsContainer[currentIndex].desc = productDescInp.value;
localStorage.setItem("productsContainer",JSON.stringify(productsContainer));

		addBtn.innerHTML = "add product";

}

function validateForm()
{
	var errors = "";
	var nameRegex = /^[A-Z][A-Za-z1-9]{2,8}$/;
	if(nameRegex.test(productNameInp.value) == false)
		{
			errors +="<p>Product Name must start with upperCase</p>";
			alertContainer.style.display = "block";
			alertContainer.innerHTML = errors;
		}

	if(errors.length > 0)
		{
			return false;
		}
	else {
		return true;
	}
}


addBtn.onclick = function(){
	if(addBtn.innerHTML == "add product"){
		addProduct();
		displayData();
		clearForm();
	} 
	else {
		updateProduct();
		displayData();
		clearForm();
	}
}


function addProduct()
{

	
	var product = 
	{
		name:productNameInp.value,
		price:productPriceInp.value,
		company:productCompanyInp.value,
		desc:productDescInp.value,
	}
	if (validateForm(productNameInp) == true) {
		productsContainer.push(product);
		localStorage.setItem(
			"productsContainer",
			JSON.stringify(productsContainer)
		);
	}
	else{
		console.log("User not valid")
	}
	

}
 

function displayData() 
{
	var cols = " ";
	for (var i = 0 ; i < productsContainer.length; i++) {
		
		cols +='<div class="col-md-3 mb-4"><img src="images/team-bw-2.jpg" class="img-fluid"><h2>'+productsContainer[i].name+'</h2><p class="text-danger">'+productsContainer[i].price+'</p><h3>'+productsContainer[i].company+'</h3><h3 class="text-info">'+productsContainer[i].desc+'</h3><button class="btn btn-danger" onclick="deleteProduct('+i+')">DELETE</button><button class="btn btn-info ml-2" onclick="setForm('+i+')">update</button></div>';
		
	} 
	document.getElementById('rowData').innerHTML = cols;
}

function clearForm()
{
	var inputs = document.getElementsByClassName('form-control');
	for (var i = 0; i < inputs.length ; i++) {
		inputs[i].value = "";
	}
}
function deleteProduct(product)
{
	productsContainer.splice(product,1);
	localStorage.setItem("productsContainer",JSON.stringify(productsContainer));
	displayData();
} 