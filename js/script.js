var prodectnameinput = document.getElementById("prodectname");
var prodectpriceinput = document.getElementById("prodectprice");
var prodectcatologeinput = document.getElementById("prodectcatologe");
var prodectdeskinput = document.getElementById("prodectdesk");
var mainBtn = document.getElementById("mainBtn");
var mood = 'creat';
var tmp ;
var prodactcontiner ;
if(localStorage.getItem("prodactlist")==null){
    prodactcontiner = [];
}
else
{
    prodactcontiner = JSON.parse( localStorage.getItem("prodactlist"));
    displayProdact();
}


function addprodact(){
    
        if (chekinput() == true) {
            var prodact = {
                name:prodectnameinput.value,
                price:prodectpriceinput.value,
                catologe:prodectcatologeinput.value,
                desk:prodectdeskinput.value
            }
            if (mood === 'creat'){
            prodactcontiner.push(prodact);
        
        } else {
            prodactcontiner[  tmp  ] = prodact;
            mood = 'creat';
            mainBtn.innerHTML = 'creat'
        }
            localStorage.setItem("prodactlist",JSON.stringify(prodactcontiner));
            displayProdact();
            clearinput();
            
            
        }  
       
        else {
            window.alert("sorry your input is empty");
        } 
    
    }
   
    
   

function clearinput(){
    prodectnameinput.value = "";
    prodectpriceinput.value ="";
    prodectcatologeinput.value = "";
    prodectdeskinput.value = "";
}

function displayProdact() {
    var cartona = ``;
    for(var i = 0 ;i < prodactcontiner.length ;i++){
cartona +=`<tr>
<td>${i+1}</td>
<td>${prodactcontiner[i].name}</td>
<td>${prodactcontiner[i].price}</td>
<td>${prodactcontiner[i].catologe}</td>
<td>${prodactcontiner[i].desk}</td>
<td><button onclick="changeFormForUpdate(${i})" class="btn btn-outline-warning">update</button></td>
<td><button onclick="deleteProdact(${i})" class="btn btn-outline-danger">delete</button></td>
</tr>`;
}

 document.getElementById("tablebody").innerHTML = cartona ;

}
function chekinput(){
    if(prodectnameinput.value != "" && prodectcatologeinput.value != "" && prodectpriceinput.value != "" && prodectdeskinput.value != ""){
        return true;
    }
    else{
        return false;
    }
}
function deleteProdact(index){
    prodactcontiner.splice(index,1);
    localStorage.setItem("prodactlist",JSON.stringify(prodactcontiner));
    displayProdact();
}
function searchProdact(searchterm){
    var cartona =``;
       for(var i=0 ; i < prodactcontiner.length ; i++){
    if(prodactcontiner[i].name.toLowerCase().includes(searchterm.toLowerCase()) == true 
    || prodactcontiner[i].catologe.toLowerCase().includes(searchterm.toLowerCase()) == true 
    || prodactcontiner[i].price.includes(searchterm) == true)
    {
        cartona +=`<tr>
        <td>${i+1}</td>
        <td>${prodactcontiner[i].name}</td>
        <td>${prodactcontiner[i].price}</td>
        <td>${prodactcontiner[i].catologe}</td>
        <td>${prodactcontiner[i].desk}</td>
        <td><button onclick="changeFormForUpdate(${i})" class="btn btn-outline-warning">update</button></td>
        <td><button onclick="deleteProdact(${i})" class="btn btn-outline-danger">delete</button></td>
        </tr>`;
       }
        else
        {
            console.log("mesh mawgod");
        }
    }
    document.getElementById("tablebody").innerHTML = cartona ;
}
function changeFormForUpdate(index){
    prodectnameinput.value = prodactcontiner[index].name ;
    prodectpriceinput.value = prodactcontiner[index].price ;
    prodectcatologeinput.value = prodactcontiner[index].catologe ;
    prodectdeskinput.value = prodactcontiner[index].desk ;
    mainBtn.innerHTML= "update";
    mood = 'update';
    scroll ({
        top:0,
        behavior:"smooth",
    })
    tmp = index;
}