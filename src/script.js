
let product=[];
let f=0;

function submitForm(){
var val1=document.getElementById("product_sku").value;
var val2=document.getElementById("product_name").value;
var val3=document.getElementById("product_price").value;
var val4=document.getElementById("product_quantity").value;
var result="";
if(checkData(val1,val2,val3,val4)){
result=store(val1,val2,val3,val4);
display(result);
}
else
document.getElementById("notification").innerHTML='<div class="error">There is some problem.<a href="#" class="close">X</a></div>';
$(document).ready(function(){
  $(".close").click(function(){
    $(".error").hide();
    });
});
}

function checkData(val1,val2,val3,val4){
var bol=true;
  if(val1==""&&val2==""&&val3==""&&val4=="")
    bol=false;
if(val1=="")
{
  document.getElementById("notification").innerHTML='<div class="error">SKU field is empty.<a href="#" class="close">X</a></div>';
  document.getElementById("product_sku").style.borderColor='red';
  bol=false;
}
if(val2=="")
{
  document.getElementById("notification").innerHTML='<div class="error">name field is empty.<a href="#" class="close">X</a></div>';
  document.getElementById("product_name").style.borderColor='red';
  bol=false;
}
if(val3=="")
{
  document.getElementById("notification").innerHTML='<div class="error">price field is empty.<a href="#" id="c2" class="close">X</a></div>';
  document.getElementById("product_price").style.borderColor='red';
  bol=false;
}
if(val4=="")
{
  document.getElementById("notification").innerHTML='<div class="error">quantity field is empty.<a href="#" id="c2" class="close">X</a></div>';
  document.getElementById("product_quantity").style.borderColor='red';
  bol=false;
}
if(isNaN(val1))
{
  document.getElementById("notification").innerHTML='<div class="error">SKU field should be integer.<a href="#" id="c2" class="close">X</a></div>';
  document.getElementById("product_sku").style.borderColor='red';
  bol=false;
}
if(!isNaN(val2))
{
  document.getElementById("notification").innerHTML='<div class="error">name field should be string.<a href="#" id="c2" class="close">X</a></div>';
  document.getElementById("product_name").style.borderColor='red';
  bol=false;
}
if(isNaN(val3))
{
  document.getElementById("notification").innerHTML='<div class="error">price field should be integer.<a href="#" id="c2" class="close">X</a></div>';
  document.getElementById("product_price").style.borderColor='red';
  bol=false;
}
if(isNaN(val4))
{
  document.getElementById("notification").innerHTML='<div class="error">quantity field should be integer.<a href="#" id="c2" class="close">X</a></div>';
  document.getElementById("product_quantity").style.borderColor='red';
  bol=false;
}
$(document).ready(function(){
  $(".close").click(function(){
    $(".error").hide();
    });
});
return bol;
}

function store(val1,val2,val3,val4){
for(let i=0;i<product.length;i++)
{
if(product[i].id==val1)
{
return product;
}
}
const myJSON={"id":val1,"name":val2,"price":val3,"quantity":val4 };
product.push(myJSON);
console.log(val4);
return product;
}

function edit(pid){
for(var i=0;i<product.length;i++)
{
if(product[i].id==pid){
document.getElementById("product_sku").value=product[i].id;
document.getElementById("product_name").value=product[i].name;
document.getElementById("product_price").value=product[i].price;
document.getElementById("product_quantity").value=product[i].quantity;
}
}
    $("#add_product").hide();
document.getElementsByClassName("submit")[0].innerHTML+='<input type="button" name="Update" value="Update" id="update" onclick="update('+pid+')">';
}

function update(pid){
  var result="";
for(let i=0;i<product.length;i++){
  if(product[i].id==pid){
var val2=document.getElementById("product_name").value;
var val3=document.getElementById("product_price").value;
var val4=document.getElementById("product_quantity").value;
result=add(pid,val2,val3,val4);
display2(result);
    $("#update").hide();
    $("#add_product").show();
  }
}
}

function add(val1,val2,val3,val4){
for(let i=0;i<product.length;i++)
{
if(product[i].id==val1)
{
product[i].name=val2;
product[i].price=val3;
product[i].quantity=val4;
return product;
}
}
}

function del(pid)
{var ar=[];
  var j=0;
  if (confirm("Do you want to delete!")) {
    for(let i=0;i<product.length;i++)
    {
    if(product[i].id==pid)
    continue; 
    ar[j]=product[i];
    ++j; 
    }
    alert("Product deleted");    
  }
  product=ar;
  --f;
  display2(product);
}

function display(result)
{
document.getElementById("notification").innerHTML='<div class="success">Product Added Successfully.<a href="#" class="close">X</a></div>';

    for(let i=f;i<result.length;i++,f++)
document.getElementById("tb2").innerHTML+='<tr><td>'+result[i].id+'</td><td>'+result[i].name+'</td><td>'+result[i].price+'</td><td>'+result[i].quantity+'</td><td><a href="#" class="edit" id="ed1" onclick="edit('+result[i].id+')">Edit</a><a href="#" class="delete" onclick="del('+result[i].id+')">Delete</a></td></tr>';
$(document).ready(function(){
  $(".close").click(function(){
    $(".success").hide();
   });
});
}

function display2(result)
{
document.getElementById("notification").innerHTML='<div class="success">Product Updated Successfully.<a href="#" class="close">X</a></div>';
document.getElementById("tb2").innerHTML='<tr><th>SKU</th><th>Name</th><th>Price</th><th>Quantity</th></tr>'; 
    for(let i=0;i<result.length;i++)
    {
document.getElementById("tb2").innerHTML+='<tr><td>'+result[i].id+'</td><td>'+result[i].name+'</td><td>'+result[i].price+'</td><td>'+result[i].quantity+'</td><td><a href="#" class="edit" id="ed1" onclick="edit('+result[i].id+')">Edit</a><a href="#" class="delete" onclick="del('+result[i].id+')">Delete</a></td></tr>';
    }
    $(document).ready(function(){
      $(".close").click(function(){
        $(".success").hide();
       });
    });
}
