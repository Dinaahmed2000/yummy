var navWidth=0;
var isTrue = !0;
var isSearchTrue = !0;
var arr=[];
let userName= document.getElementById("userName");
let userEmail=document.getElementById("userEmail");
let userPhone=document.getElementById("userPhone");
let userAge=document.getElementById("userAge");
let userPassword=document.getElementById("userPassword");
let userRePassword=document.getElementById("userRepass");
let userNameAlert=document.getElementById("namealert");
let userEmailAlert=document.getElementById("emailalert");
let userPhoneAlert=document.getElementById("phonealert");
let userAgeAlert=document.getElementById("agealert");
let userpasswordAlert=document.getElementById("passwordalert");
let userRepasswordAlert=document.getElementById("repasswordalert");
userName.addEventListener("focus", () => {
    nameToached = true
})
userEmail.addEventListener("focus", () => {
    emailToached = true
})
userPhone.addEventListener("focus", () => {
    phoneToached = true
})
userAge.addEventListener("focus", () => {
    ageToached = true
})
userPassword.addEventListener("focus", () => {
    passwordToached = true
})
userRePassword.addEventListener("focus", () => {
    repasswordToached = true
})
$(document).ready(function(){
    $(".loading-screen .fa-spinner ").fadeOut(500 , function(){
        $(".loading-screen").fadeOut(500 , function(){
            $(".loading-screen").remove();
            $("body").css('overflow' , 'auto');
        });
    });
});
$(".header-toggle").click(function(){
    changeNav();
});

async function showFirst(){
    let api=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`);
    let response= await api.json();
    response =response.meals;
    let cartoona="";
    for(let i=0 ; i<response.length ; i++)
    {
        cartoona+=`<div class="col-md-6 col-lg-3 my-3 shadow">
        <div onclick="getMeal('${response[i].idMeal}') " class="movie shadow rounded position-relative">
            <div class="post ">
                <img src='${response[i].strMealThumb}' class="w-100 rounded" />
                <div class="layer d-flex align-items-center ">
                    <div class="info p-2 rounded">
                    <h2>${response[i].strMeal}</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>`
    }
    document.getElementById("firstMeal").innerHTML=cartoona;
    $("html, body").animate({
        scrollTop: 0
    }, 200)
};
showFirst();
$("#search").click(function(){
$("#home").fadeOut(200)
$("#categories-section").fadeOut(200)
$("#areaSection").fadeOut(200)
$("#ingredientSection").fadeOut(200)
$("#contactSection").fadeOut(200)
$("#mealDetails").fadeOut(200)
$("#mealAreaDetails").fadeOut(200)
$("#mealIngradient").fadeOut(200)
$(".search").fadeIn(200)
    closeNavbar();
    });

function closeNavbar(){
    $(".navbar-menu").addClass("close-nav");
    $(".header-nav").css("left" , 0);
    changeNav();
};

function changeNav(){
    isTrue ? ($(".navbar-menu").addClass("open-nav").removeClass("close-nav") , 
    navWidth=$(".navbar-menu").width()-10 ,
    $(".header-nav").css("left" , navWidth) , 
    $(".fa-align-justify").toggleClass("fa-times") , 
    $(".navbar-menu .item1").animate({opacity:"1" , paddingTop:"25px"} , 1100) ,
    $(".navbar-menu .item2").animate({opacity:"1" , paddingTop :"25px"} , 1200) ,
    $(".navbar-menu .item3").animate({opacity:"1" , paddingTop :"25px"} , 1300) ,
    $(".navbar-menu .item4").animate({opacity:"1" , paddingTop :"25px"} , 1400) ,
    $(".navbar-menu .item5").animate({opacity:"1" , paddingTop :"25px"} , 1500) ,
    $(".navbar-menu .item6").animate({opacity:"1" , paddingTop :"25px"} , 1600) ,
    isTrue = !isTrue) : ($(".navbar-menu").addClass("close-nav").removeClass("open-nav") ,
    $(".fa-align-justify").toggleClass("fa-times") , 
    $(".header-nav").css("left" , 0) , 
    $(".navbar-menu li").animate({opacity:"0" , paddingTop:"500px"} , 500) , 
    isTrue = !isTrue
    )
};

var searchName=document.getElementById("searchName");
searchName.addEventListener("keyup",function(e){
    $(".loading-container").fadeIn(100)
    let keySearch=e.target.value;
    fiterByName(keySearch);
    $(document).ready(function(){
        $(".loading-container").fadeOut(400)
    })
});

async function fiterByName(key){
     let api=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${key}`);
     let response = await api.json();
     response=response.meals;
     let cartoona="";
     for(let i=0 ;i<response.length;i++){
            cartoona +=`<div class="col-md-6 col-lg-3 my-3 shadow">
            <div onclick="getMeal('${response[i].idMeal}')" class="movie shadow rounded position-relative">
                <div class="post ">
                    <img src='${response[i].strMealThumb}' class="w-100 rounded" />
                    <div class="layer d-flex align-items-center ">
                        <div class="info p-2 rounded">
                        <h2>${response[i].strMeal}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>`

     }
   document.getElementById('filteredData').innerHTML=cartoona;
   $("html, body").animate({
    scrollTop: 0
}, 200)
};

var searchLetter=document.getElementById("searchLetter");
searchLetter.addEventListener("keyup",function(e){
    $(".loading-container").fadeIn(100)
    let keyLetter=e.target.value;
    fiterByLetter(keyLetter);
    $(document).ready(function(){
        $(".loading-container").fadeOut(400)
    })
});

async function fiterByLetter(key){
    let api=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${key}`);
    let response = await api.json();
    response=response.meals;
    let cartoona="";
    for(let i=0 ;i<response.length;i++){
           cartoona +=`<div class="col-md-6 col-lg-3 my-3 shadow">
           <div onclick="getMeal('${response[i].idMeal}')" class="movie shadow rounded position-relative">
               <div class="post ">
                   <img src='${response[i].strMealThumb}' class="w-100 rounded" />
                   <div class="layer d-flex align-items-center ">
                       <div class="info p-2">
                       <h2>${response[i].strMeal}</h2>
                       </div>
                   </div>
               </div>
           </div>
       </div>`

    }
  document.getElementById('filteredData').innerHTML=cartoona;
  $("html, body").animate({
    scrollTop: 0
}, 200)
};

$("#categories").click(function(){
$(".loading-container").fadeIn(100)   
$("#home").fadeOut(200)
$("#areaSection").fadeOut(200)
$(".search").fadeOut(200)
$("#ingredientSection").fadeOut(200)
$("#contactSection").fadeOut(200)
$("#mealDetails").fadeOut(200)
$("#mealAreaDetails").fadeOut(200)
$("#mealIngradient").fadeOut(200)
$("#categories-section").fadeIn(200 , function(){
        showCategories();
})
$(document).ready(function(){
    $(".loading-container").fadeOut(400)
})
        closeNavbar();
});

async function showCategories(){
    let api= await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
    let response=await api.json();
    response =response.categories;
    let cartoona=``;
    for(let i=0 ; i<response.length ; i++)
    {
        cartoona += `<div class="col-md-6 col-lg-3 my-3 shadow ">
        <div onclick="getMealCategory('${response[i].strCategory}')" class="movie shadow rounded position-relative">
            <div class="post2 ">
                <img src='${response[i].strCategoryThumb}' class="w-100 rounded" />
                <div class="layer2">
                    <div class="info2 p-2 rounded">
                    <h2>${response[i].strCategory}</h2>
                    <p class="fw-bold px-1">${response[i].strCategoryDescription.split(" ").splice(0,20).join(" ")}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>`
    }
document.getElementById("categoryMeal").innerHTML=cartoona;
$("html, body").animate({
    scrollTop: 0
}, 200)
};

$("#area").click(function(){
$(".loading-container").fadeIn(100)   
$("#home").fadeOut(200)
$("#categories-section").fadeOut(200)
$(".search").fadeOut(200)
$("#ingredientSection").fadeOut(200 )
$("#contactSection").fadeOut(200)
$("#mealDetails").fadeOut(200)
$("#mealIngradient").fadeOut(200)
$("#mealAreaDetails").fadeOut(200)
$("#areaSection").fadeIn(200 , function(){
        showArea();
})
$(document).ready(function(){
    $(".loading-container").fadeOut(400)
})
        closeNavbar();
    });
async function showArea(){
   let api = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`);
   let response = await api.json();
   response=response.meals;
   let cartoona ="";
   for(i=0 ; i<20 ;i++){
       cartoona +=`<div onclick="getArea('${response[i].strArea}') " class="col-md-3 text-center py-3">
       <div>
           <i class="fa-solid fa-city fa-3x"></i>
           <h2 class="text-white">${response[i].strArea}</h2>
       </div>
   </div>`
   }
   document.getElementById("areas").innerHTML=cartoona;
   $("html, body").animate({
    scrollTop: 0
}, 200)
}

$("#contact").click(function(){
$("#home").fadeOut(200)
$("#categories-section").fadeOut(200)
$(".search").fadeOut(200)
$("#areaSection").fadeOut(200)
$("#ingredientSection").fadeOut(200)
$("#mealDetails").fadeOut(200)
$("#mealAreaDetails").fadeOut(200)
$("#mealIngradient").fadeOut(200)
$("#contactSection").fadeIn(200 , function(){
        showContact();
})
        closeNavbar();
});

function showContact(){
    validation();
};

$("#ingredients").click(function(){
$(".loading-container").fadeIn(100) 
$("#home").fadeOut(200)
$("#categories-section").fadeOut(200)
$(".search").fadeOut(200)
$("#areaSection").fadeOut(200)
$("#contactSection").fadeOut(200)
$("#mealDetails").fadeOut(200)
$("#mealAreaDetails").fadeOut(200)
$("#mealIngradient").fadeOut(200)
$("#ingredientSection").fadeIn(200 , function(){
        showIngredient();
    })
$(document).ready(function(){
        $(".loading-container").fadeOut(400)
})
        closeNavbar();
});

async function showIngredient(){
    let api= await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`);
    let response =await api.json();
    response=response.meals;
    let cartoona="";
    for(i=0 ; i<20 ;i++){
        cartoona +=`<div onclick="getIngradient('${response[i].strIngredient}') " class="col-md-3 text-center py-3 shadow">
        <div class="text-center">
            <i class="fa-solid fa-bowl-food fa-3x"></i>
            <h2 class="text-white">${response[i].strIngredient}</h2>
            <p class="mb-3 mt-2 text-white px-1">${response[i].strDescription.split(" ").splice(0,20).join(" ")}</p>
        </div>
    </div>`
    }
    document.getElementById("IngredientsInfo").innerHTML=cartoona;
    $("html, body").animate({
        scrollTop: 0
    }, 200)
};

async function getMeal(mealId){
    $(".loading-container").fadeIn(100)
  let api= await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
  let response =await api.json();
  response = response.meals[0];
  $("#home").fadeOut(200)
  $("#categories-section").fadeOut(200)
  $(".search").fadeOut(200)
  $("#areaSection").fadeOut(200)
  $("#ingredientSection").fadeOut(200)
  $("#contactSection").fadeOut(200)
  $("#mealAreaDetails").fadeOut(200)
  $("#mealIngradient").fadeOut(200)
  $("#mealDetails").fadeIn(200 , function(){
        showMealDetails(response);
   })
   $(document).ready(function(){
    $(".loading-container").fadeOut(400)
   })
};

function showMealDetails(response){
    let cartoona="";
    let recipes = "";
    for(let i=1;i<=20;i++){
        if (response[`strIngredient${i}`]){
            recipes +=`<li class="my-3 mx-1 p-1 recipeColor rounded">${response[`strMeasure${i}`]} ${response[`strIngredient${i}`]}</li>`
        }
    }
    let tags = response.strTags?.split(",");
    let tagsStr = "";
    for (let i = 0; i < tags?.length; i++) {  
        tagsStr += `<li class="my-3 mx-1 p-1 recipeTag rounded">${tags[i]}</li>`
    }
    cartoona +=`<div class="col-md-4 text-white text-center pt-5 px-3">
    <img src="${response.strMealThumb}" alt="" class="w-100">
    <h1>${response.strMeal}</h1>
</div>
<div class="col-md-8 text-white text-left pt-5 px-3">
    <h2>Instructions</h2>
    <p>${response.strInstructions}</p>
    <p><b class="fw-bolder">Area :</b> ${response.strArea}</p>
    <p><b class="fw-bolder">Category :</b> ${response.strCategory}</p>
    <h3>Recipes :</h3>
    <ul class="d-flex " id="recipes">
    </ul>
    <h3 class="my-2 mx-1 p-1">Tags :</h3>
	<ul class="d-flex " id="tags">
	</ul>
    <a class="btn source text-white" target="_blank" href="${response.strSource}">Source</a>
	<a class="btn youtube text-white" target="_blank" href="${response.strYoutube}">Youtub</a>
	</div>`;
    document.getElementById("rowData").innerHTML=cartoona;
    document.getElementById("recipes").innerHTML=recipes;
    document.getElementById("tags").innerHTML=tagsStr;
    $("html, body").animate({
        scrollTop: 0
    }, 200);
};

async function getMealCategory(categoryId){
    $(".loading-container").fadeIn(100)
    let api=await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryId}`);
    let response = await api.json();
    response= response.meals;
    $("#home").fadeOut(200)
    $("#categories-section").fadeOut(200)
    $(".search").fadeOut(200)
    $("#areaSection").fadeOut(200)
    $("#ingredientSection").fadeOut(200)
    $("#contactSection").fadeOut(200)
    $("#mealAreaDetails").fadeOut(200)
    $("#mealIngradient").fadeOut(200)
    $("#mealDetails").fadeIn(200 , function(){
        showCategoryDetails(response);
        })
        $(document).ready(function(){
            $(".loading-container").fadeOut(400)
        })
};

function showCategoryDetails(response){
    let cartoona="";
    for(let i=0 ; i<response.length ; i++){
        cartoona+=`<div class="col-md-6 col-lg-3 my-3 shadow">
        <div onclick="getMeal('${response[i].idMeal}') " class="movie shadow rounded position-relative">
            <div class="post ">
                <img src='${response[i].strMealThumb}' class="w-100 rounded" />
                <div class="layer d-flex align-items-center ">
                    <div class="info p-2 rounded">
                    <h2>${response[i].strMeal}</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>`
    }
    document.getElementById("rowData").innerHTML=cartoona;
    $("html, body").animate({
        scrollTop: 0
    }, 200)
};

async function getArea(mealArea){
    $(".loading-container").fadeIn(100)
    let api=await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${mealArea}`)
    let response=await api.json();
    response= response.meals;
    $("#home").fadeOut(200)
    $("#categories-section").fadeOut(200)
    $(".search").fadeOut(200)
    $("#areaSection").fadeOut(200)
    $("#ingredientSection").fadeOut(200)
    $("#contactSection").fadeOut(200)
    $("#mealDetails").fadeOut(200)
    $("#mealIngradient").fadeOut(200)
    $("#mealAreaDetails").fadeIn(200 , function(){
            showAreaMeals(response);
          })
    $(document).ready(function(){
        $(".loading-container").fadeOut(400)
        })
};
function showAreaMeals(response){
    let cartoona="";
    for(let i=0 ; i<response.length; i++){
        if(response.length >20 ){
            response.length=20;
        }
        cartoona+=`<div class="col-md-6 col-lg-3 my-3 shadow">
        <div onclick="getMeal('${response[i].idMeal}') " class="movie shadow rounded position-relative">
            <div class="post ">
                <img src='${response[i].strMealThumb}' class="w-100 rounded" />
                <div class="layer d-flex align-items-center text-center ">
                    <div class="info p-2 rounded">
                    <h2>${response[i].strMeal}</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>`
    }
    document.getElementById("areaData").innerHTML=cartoona;
    $("html, body").animate({
        scrollTop: 0
    }, 200)
};

async function getIngradient(ingradientName){
    $(".loading-container").fadeIn(100)
    let api=await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingradientName}`)
    let response=await api.json();
    response=response.meals;
    $("#home").fadeOut(200)
    $("#categories-section").fadeOut(200)
    $(".search").fadeOut(200)
    $("#areaSection").fadeOut(200)
    $("#ingredientSection").fadeOut(200)
    $("#contactSection").fadeOut(200)
    $("#mealAreaDetails").fadeOut(200)
    $("#mealDetails").fadeOut(200)
    $("#mealIngradient").fadeIn(200 , function(){
            showindradientDetails(response);
    })
    $(document).ready(function(){
        $(".loading-container").fadeOut(400)
    })
};

function showindradientDetails(response){
    let cartoona="";
    for(let i=0 ; i<response.length; i++){
        cartoona+=`<div class="col-md-6 col-lg-3 my-3 shadow">
        <div onclick="getMeal('${response[i].idMeal}') " class="movie shadow rounded position-relative">
            <div class="post ">
                <img src='${response[i].strMealThumb}' class="w-100 rounded" />
                <div class="layer d-flex align-items-center text-center ">
                    <div class="info p-2 rounded">
                    <h2>${response[i].strMeal}</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>`
    }
    document.getElementById("ingredientDetails").innerHTML=cartoona;
}
function validateUserName()
{
    let rejex=/^[a-zA-Z ]+$/;
   if(rejex.test(userName.value)==true)
   {
      return true;
   }
   else
   {
      return false;
   }
};

function validateUserEmail()
{
    let rejex= /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   if(rejex.test(userEmail.value)==true)
   {
      return true;
   }
   else
   {
      return false;
   }
};

function validateUserPhone()
{
    let rejex=/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
   if(rejex.test(userPhone.value)==true)
   {
      return true;
   }
   else
   {
      return false;
   }
};

function validateUserAge()
{
    let rejex= /^[1-9][0-9]?$|^100$/;
   if(rejex.test(userAge.value)==true)
   {
      return true;
   }
   else
   {
      return false;
   }
};

function validateUserPassword()
{
    let rejex=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
   if(rejex.test(userPassword.value)==true)
   {
      return true;
   }
   else
   {
      return false;
   }
};

function validateUserRePassword()
{
   if(userPassword.value===userRePassword.value)
   {
      return true;
   }
   else
   {
      return false;
   }
};
let nameToached = false,
    emailToached = false,
    phoneToached = false,
    ageToached = false,
    passwordToached = false,
    repasswordToached = false;
function validation(){
   if(nameToached){
        if(validateUserName() == true){
            userName.classList.remove("is-invalid");
            userName.classList.add("is-valid");
            userNameAlert.classList.replace("d-block", "d-none");
            userNameAlert.classList.replace("d-block", "d-none");
        }
        else{
            userName.classList.replace("is-valid", "is-invalid");
            userNameAlert.classList.replace("d-none", "d-block");
        }
    }
    if(emailToached){
        if(validateUserEmail() == true){
            userEmail.classList.remove("is-invalid");
            userEmail.classList.add("is-valid");
            userEmailAlert.classList.replace("d-block", "d-none");
            userEmailAlert.classList.replace("d-block", "d-none");
        }
        else{
            userEmail.classList.replace("is-valid", "is-invalid");
            userEmailAlert.classList.replace("d-none", "d-block");
        }
    }
    if(phoneToached){
        if(validateUserPhone() == true){
            userPhone.classList.remove("is-invalid");
            userPhone.classList.add("is-valid");
            userPhoneAlert.classList.replace("d-block", "d-none");
            userPhoneAlert.classList.replace("d-block", "d-none");
        }
        else{
            userPhone.classList.replace("is-valid", "is-invalid");
            userPhoneAlert.classList.replace("d-none", "d-block");
        }
    }
    if(ageToached){
        if(validateUserAge() == true){
            userAge.classList.remove("is-invalid");
            userAge.classList.add("is-valid");
            userAgeAlert.classList.replace("d-block", "d-none");
            userAgeAlert.classList.replace("d-block", "d-none");
        }
        else{
            userAge.classList.replace("is-valid", "is-invalid");
            userAgeAlert.classList.replace("d-none", "d-block");
        }
    }
    if(passwordToached){
        if(validateUserPassword() == true){
            userPassword.classList.remove("is-invalid");
            userPassword.classList.add("is-valid");
            userpasswordAlert.classList.replace("d-block", "d-none");
            userpasswordAlert.classList.replace("d-block", "d-none");
        }
        else{
            userPassword.classList.replace("is-valid", "is-invalid");
            userpasswordAlert.classList.replace("d-none", "d-block");
        }
    }
    if(repasswordToached){
        if(validateUserRePassword() == true){
            userRePassword.classList.remove("is-invalid");
            userRePassword.classList.add("is-valid");
            userRepasswordAlert.classList.replace("d-block", "d-none");
            userRepasswordAlert.classList.replace("d-block", "d-none");
        }
        else{
            userRePassword.classList.replace("is-valid", "is-invalid");
            userRepasswordAlert.classList.replace("d-none", "d-block");
        }
    }
    if(validateUserAge() && validateUserEmail() && validateUserName() && validateUserPhone() && validateUserPassword() && validateUserRePassword())
    {
        document.getElementById("submitBtn").removeAttribute("disabled");
    }
    else{
        document.getElementById("submitBtn").setAttribute("disabled" , "true")
    }
}