let currentPoint = 1;
let currentPosition = 0;
let count = 1;
let width = 595;
let current_kit = 1;


function swapMenuImg(number){

    let kit = document.querySelectorAll('.top-items');
    kit[number-1].querySelectorAll('img')[0].style.display="none";
    kit[number-1].querySelectorAll('img')[1].style.display="block";
}

function returnMenuImg(number){
    let kit = document.querySelectorAll('.top-items');
    kit[number-1].querySelectorAll('img')[1].style.display="none";
    kit[number-1].querySelectorAll('img')[0].style.display="block";
}

let reklamaKit = document.querySelectorAll('#reklama>img');
reklamaKit[0].style.display="block";
curReklama=0;
setInterval(function(){
        reklamaKit[curReklama].style.display="none";
        if(curReklama<reklamaKit.length-1) curReklama++;
        else curReklama=0;
        reklamaKit[curReklama].style.display="block";
},3000);
function PrevImage(){
    if(currentPosition < 0){
        currentPosition +=width;
        document.getElementById("main_point2_kit"+current_kit).style.marginLeft = currentPosition + 'px';
        document.getElementById("product" + current_kit + count + "-info").style.display = "none";
        document.getElementById("mini_point2_kit"+current_kit).getElementsByTagName('li')[count-1].style.borderRight = "0px";
        document.getElementById("mini_point2_kit"+current_kit).getElementsByTagName('li')[count-1].style.borderLeft = "0px";
        count--;
        document.getElementById("product" + current_kit + count + "-info").style.display = "block";
        document.getElementById("mini_point2_kit"+current_kit).getElementsByTagName('li')[count-1].style.borderRight = "1px solid black";
        document.getElementById("mini_point2_kit"+current_kit).getElementsByTagName('li')[count-1].style.borderLeft = "1px solid black";
        }
   
}

function NextImage(){   
    if(currentPosition > -width *(document.getElementById("main_point2_kit"+current_kit).getElementsByTagName('li').length-1)){
        currentPosition -=width;
        document.getElementById("main_point2_kit"+current_kit).style.marginLeft = currentPosition + 'px';
        document.getElementById("product" + current_kit + count + "-info").style.display = "none";
        document.getElementById("mini_point2_kit"+current_kit).getElementsByTagName('li')[count-1].style.borderRight = "0px";
        document.getElementById("mini_point2_kit"+current_kit).getElementsByTagName('li')[count-1].style.borderLeft = "0px";
        count++;
        document.getElementById("mini_point2_kit"+current_kit).getElementsByTagName('li')[count-1].style.borderRight = "1px solid black";
        document.getElementById("mini_point2_kit"+current_kit).getElementsByTagName('li')[count-1].style.borderLeft = "1px solid black";
        document.getElementById("product" + current_kit  + count + "-info").style.display = "block";
    }
}


function ChangeImg(current){
    currentPosition +=width * (count-current);
    document.getElementById("main_point2_kit"+current_kit).style.marginLeft = currentPosition + 'px';
    document.getElementById("product" + current_kit + count + "-info").style.display = "none";
    document.getElementById("mini_point2_kit"+current_kit).getElementsByTagName('li')[count-1].style.borderRight = "0px";
    document.getElementById("mini_point2_kit"+current_kit).getElementsByTagName('li')[count-1].style.borderLeft = "0px";
    count = current;
    document.getElementById("product" + current_kit + count + "-info").style.display = "block";
    document.getElementById("mini_point2_kit"+current_kit).getElementsByTagName('li')[count-1].style.borderRight = "1px solid black";
    document.getElementById("mini_point2_kit"+current_kit).getElementsByTagName('li')[count-1].style.borderLeft = "1px solid black";
}

function changePoint(point){
    document.getElementById("Point" + currentPoint).style.display = "none";
    currentPoint = point;
    document.getElementById("Point" + currentPoint).style.display = "flex";
}

let curFullImg = 0
function PointActivateImg(number){
    document.getElementById("full-img_" + number).style.display = "block";
    curFullImg = number;
}

function CloseImg(){
    document.getElementById("full-img_" + curFullImg).style.display = "none";
}

function choosePoint(point, number){
    document.getElementById("Point"+ point + "_product"+number).style.display = "flex";   
    document.getElementById("Point" + currentPoint).getElementsByClassName("PointsProductsMenu")[0].style.display = "none";
}
function BackToPoint(point, number){
    document.getElementById("Point" + point + "_product"+number).style.display = "none";
    document.getElementById("Point" + currentPoint).getElementsByClassName("PointsProductsMenu")[0].style.display = "block";
}
function Order(point, number){
    alert("Point: " + point + " , number: " + number)
}
function changeKit(kit){
    document.getElementById("point2_kit"+current_kit).style.display = "none";
    document.getElementById("mini_point2_kit"+current_kit).getElementsByTagName('li')[count-1].style.borderRight = "0px";
    document.getElementById("mini_point2_kit"+current_kit).getElementsByTagName('li')[count-1].style.borderLeft = "0px";
    document.getElementById("product" + current_kit + count + "-info").style.display = "none";
    current_kit = kit;
    currentPosition = 0;
    count = 1;
    document.getElementById("main_point2_kit"+current_kit).style.marginLeft = currentPosition + 'px'
    document.getElementById("point2_kit"+current_kit).style.display = "block";
    document.getElementById("product" + current_kit + count + "-info").style.display = "block";
    
}
spinSteps = 0;
spinOffset = 0;
spinImgWidth = 143;
spinBandWidth = 1000;
sp = 0;

function addImg(){
    
    let commonAmount = 17, rareAmount = 14, epicAmount = 7, legendaryAmount = 1,  curRarity =  Math.floor(Math.random()*100);
    chance = document.getElementById("lootControler").value;
    allRaririesChances =  document.querySelectorAll("#showChance a");
    let commonChance = Number(allRaririesChances[0].innerHTML.slice(0,-1));
    let rareChance = Number(allRaririesChances[1].innerHTML.slice(0,-1));
    let epicChance = Number(allRaririesChances[2].innerHTML.slice(0,-1));
    let legendaryChance = Number(allRaririesChances[3].innerHTML.slice(0,-1));
    let img = document.createElement('img');
    if(curRarity<commonChance){
        curImg = Math.floor(Math.random()*commonAmount+1);
        img.src = "images/point6/common/image" + curImg + ".png";
        img.style.border = "2px solid Green";
    }
    else if(curRarity>=commonChance && curRarity<=100 - legendaryChance - epicChance){
        curImg = Math.floor(Math.random()*rareAmount+1);
        img.src = "images/point6/rare/image" + curImg + ".png";
        img.style.border = "2px solid blue";
    }
    else if(curRarity>=commonChance+rareChance && curRarity<=100 - legendaryChance){
        curImg = Math.floor(Math.random()*epicAmount+1);
        img.src = "images/point6/epic/image" + curImg + ".png";
        img.style.border = "4px solid purple";
    }
    else if(curRarity>commonChance+rareChance+epicChance){
        curImg = Math.floor(Math.random()*legendaryAmount+1);
        img.src = "images/point6/legendary/image" + curImg + ".png";
        img.style.border = "4px solid gold";
    }
    img.classList.add('point6_Img');
    img.style.left = spinOffset*spinImgWidth + 'px';
    document.querySelector('#point6_Carousel').appendChild(img);
    if(spinOffset< spinBandWidth/spinImgWidth) spinOffset++;
    img.style.borderLeft = "0px";
}

function createStart(){
    spinOffset = 0;
    let kit = document.querySelectorAll('.point6_Img');
    for(let i = 0; i< spinBandWidth/spinImgWidth; i++)if(kit[i]!=null) kit[i].remove(); 
    for(let i = 0; i< spinBandWidth/spinImgWidth; i++)addImg(); 
   
}
function moveSpin(){ 
    addImg();  
    let kit = document.querySelectorAll('.point6_Img');
    for(let i = 0; i<kit.length;i++) kit[i].style.left = i * spinImgWidth - spinImgWidth + 'px'; 
    spinSteps++;
       
    kit[0].remove();
    if(spinSteps>30){
        document.getElementById("spin").disabled = false;
        clearInterval(sp);  
        spinSteps=0;
        kit = document.querySelectorAll('.point6_Img');
        showWin(kit[3].src);
    }
}
function spin(){  
    document.getElementById("spin").disabled = true;
    sp = setInterval(moveSpin, 50);
}
createStart();

function changeChance(){
  chance = Number(document.getElementById("lootControler").value);
  all = document.querySelectorAll("#showChance a");
  document.getElementById("price").innerHTML = 150 + chance*50 + "грн.";  
  if(chance<=33){
    all[0].innerHTML = 95 - chance + '%'; 
    all[1].innerHTML = 5 + chance + '%'; 
    all[2].innerHTML = 0 + '%'; 
    all[3].innerHTML = 0 + '%'; 
  }
  else if(chance<=50){
    all[0].innerHTML = 95 - 2*chance+33 + '%'; 
    all[1].innerHTML =   5 + 2*chance-33 + '%'; 
    all[2].innerHTML = 0 + '%'; 
    all[3].innerHTML = 0 + '%'; 
  }
  else if(chance<=64){
    all[0].innerHTML = 95 - 2*chance+33 + '%'; 
    all[1].innerHTML =   22 +chance + '%'; 
    all[2].innerHTML = 0 + chance-50 + '%'; 
    all[3].innerHTML = 0 + '%'; 
  }
  else if(chance<71){
    all[0].innerHTML = 0 + '%'; 
    all[1].innerHTML =   86 - (chance-64) + '%'; 
    all[2].innerHTML = 0 +chance-50 + '%'; 
    all[3].innerHTML = 0 + '%'; 
  }
  else if(chance<101){
    all[0].innerHTML = 0 + '%'; 
    all[1].innerHTML =   80 - 2*(chance-70) + '%'; 
    all[2].innerHTML = 0 + chance-50 + '%'; 
    all[3].innerHTML =0 + chance-70 + '%'; 
  }
}
function showWin(imgSRC){
    let img = document.createElement('img');
    img.src = imgSRC;
    document.querySelector('#winBack').appendChild(img);
    img.classList.add("winImg");
    setTimeout(function(){
        img.style.display = "block";
        document.getElementById("winBack").style.display = "block";
    },150);
}
function getMask(){
    //alert(getComputedStyle(document.querySelectorAll('.point6_Img')[3]).borderTopColor);
    //alert(document.querySelectorAll('.point6_Img')[3].style.getPropertyValue("background-color"))
    let img = document.createElement('img');
    img.src = document.querySelector(".winImg").src;
    if( document.querySelector("#lastPrize>img") != null) document.querySelector("#lastPrize>img").remove();
    document.getElementById('lastPrize').style.border = getComputedStyle(document.querySelectorAll('.point6_Img')[3]).borderTop;
    document.querySelector('#lastPrize').appendChild(img);
    document.querySelector(".winImg").remove();
    document.getElementById("winBack").style.display = "none";
}

top_layer =0;
layers_cur_img = [1,1,1,1];
custom_images_amount = 7;
totalStrapCost = 0;
function activateLayer(number){
    document.getElementById("plus_"+ number).style.display = "none";
    document.getElementById("layer_"+ number).style.display = "block";
    if(number!=1)   document.querySelector('#stLen>img').remove();
    if(number!=4) document.getElementById("plus_"+ (number + 1)).style.display = "block";   
    let img = document.createElement('img');
    if(number==1) img.src = "images/point7/base/image1.png";
    else if(number==2)img.src = "images/point7/top/image1.png";
    else{
        img.src = "images/point7/top/image1.png";
        document.querySelector('#layer_'+(number-1) + '>img').src =  "images/point7/main/image" + layers_cur_img[number-2] + ".png";
    }
    img.classList.add("custom_image");
    document.querySelector('#layer_' + number).appendChild(img);
    top_layer++;
    document.getElementById("q_layer" + number + layers_cur_img[number-1]).style.display = "block";
    document.getElementById("strap_lenght").innerHTML = top_layer*5 + "cм.";
    totalStrapCost +=  layers_cur_img[number-1]*100;
    document.getElementById("strap_price").innerHTML =  totalStrapCost + "грн."

    let emoteImg = document.createElement('img');
    emoteImg.src = "images/point7/emotions/emote"+ number +".png";
    document.querySelector('#stLen').appendChild(emoteImg);
}

function NextCustomImage(layer_number){
    document.getElementById("q_layer" + layer_number + layers_cur_img[layer_number-1]).style.display = "none";
    totalStrapCost -=  layers_cur_img[layer_number-1]*100;
    if(layers_cur_img[layer_number-1]<custom_images_amount) layers_cur_img[layer_number-1]++;
    else layers_cur_img[layer_number-1]=1;
    curImg = layers_cur_img[layer_number-1];
    let img = document.createElement('img');
    document.querySelector('#layer_'+layer_number + '>img').remove();
    if(layer_number==1){
        img.src = "images/point7/base/image" + curImg + ".png";
    }
    else if(layer_number==top_layer){
        img.src = "images/point7/top/image" + curImg + ".png";
    }
    else{
        img.src = "images/point7/main/image" + curImg + ".png";
    }
    img.classList.add("custom_image");
    document.querySelector('#layer_' + layer_number).appendChild(img);
    document.getElementById("q_layer" + layer_number + layers_cur_img[layer_number-1]).style.display = "block";
    totalStrapCost +=  layers_cur_img[layer_number-1]*100;
    document.getElementById("strap_price").innerHTML =  totalStrapCost + "грн."
}

function PrevCustomImage(layer_number){
    document.getElementById("q_layer" + layer_number + layers_cur_img[layer_number-1]).style.display = "none";
    totalStrapCost -=  layers_cur_img[layer_number-1]*100;
    if(layers_cur_img[layer_number-1]>1) layers_cur_img[layer_number-1]--;
    else layers_cur_img[layer_number-1]=custom_images_amount;
    curImg = layers_cur_img[layer_number-1];
    let img = document.createElement('img');
    document.querySelector('#layer_'+layer_number + '>img').remove();
    if(layer_number==1){
        img.src = "images/point7/base/image" + curImg + ".png";
    }
    else if(layer_number==top_layer){
        img.src = "images/point7/top/image" + curImg + ".png";
    }
    else{
        img.src = "images/point7/main/image" + curImg + ".png";
    }
    img.classList.add("custom_image");
    document.querySelector('#layer_' + layer_number).appendChild(img);
    document.getElementById("q_layer" + layer_number + layers_cur_img[layer_number-1]).style.display = "block";
    totalStrapCost +=  layers_cur_img[layer_number-1]*100;
    document.getElementById("strap_price").innerHTML =  totalStrapCost + "грн."
}

function strap_reload(){
    t = 0;
    document.getElementById("Strapon_reload").disabled = true;
    animation = setInterval(function(){
        t++;
        document.getElementById("Strapon_reload").style.border = "1px";
        document.getElementById("Strapon_reload").style.transform = "rotate("+ t*10+"deg)";
        if(t==72){
            clearInterval(animation);  
            t=0;
            document.getElementById("Strapon_reload").style.border = "1px solid black";
            document.getElementById("Strapon_reload").disabled = false;
        }
    },10);
    for(let i=1; i<=top_layer;i++){
        document.getElementById("q_layer" + i + layers_cur_img[i-1]).style.display = "none";
        document.querySelector('#layer_'+ i + '>img').remove();
        document.getElementById("layer_" + i).style.display = "none";
        layers_cur_img[i-1] = 1;
    }
    if(top_layer!=4) document.getElementById("plus_" + (top_layer+1)).style.display = "none";
    document.getElementById("plus_" + 1).style.display = "block";
    top_layer = 0;
    totalStrapCost = 0;
    document.getElementById("strap_lenght").innerHTML = "0cм.";
    document.getElementById("strap_price").innerHTML =  totalStrapCost + "грн.";
    document.querySelector('#stLen>img').remove();
}

let IsDetMenu = false;
function ShowDetailInfoMenu(){
    kit = document.querySelectorAll(".dop-info");
    if(IsDetMenu){
        proc = 0;
        step = -10;
        animation = setInterval(function(){
            for(let i =0;i<kit.length;i++){
                if(proc+step*i>=0)kit[i].style.marginLeft = proc + step*i+ "%";
            }
            proc-=step;
           
            if(proc==100-step*kit.length)  clearInterval(animation);  
        },20);
        document.querySelector(".dop-info-button>div").style.transform = "rotate(0deg)";
        IsDetMenu = false
    }
    else{
        proc = 80;
        step = 10;
        animation = setInterval(function(){
            for(let i =0;i<kit.length;i++){
                if(proc+step*i>=0)kit[i].style.marginLeft = proc + step*i+ "%";
            }
            proc-=step;
            if(proc==0-step*kit.length)  clearInterval(animation);  
        },20);
        document.querySelector(".dop-info-button>div").style.transform = "rotate(-180deg)";
        IsDetMenu = true;
    }
}
let lastActiveInfo = 0;
function ShowDetailInfo(number){
    if(lastActiveInfo!=0){
        document.querySelectorAll(".dop-info")[lastActiveInfo-1].querySelector(".material-symbols-outlined").style.transform = "rotate(0deg)"; 
        document.getElementById("full-information" + lastActiveInfo).style.display = "none";
    }
    if(lastActiveInfo != number){ 
        document.getElementById("full-informations").style.transition = "0s";
        document.getElementById("full-informations").style.left = "-100%";
        document.getElementById("full-information" + number).style.display = "block";
        setTimeout(() => {
            document.getElementById("full-informations").style.transition = ".4s";
            document.getElementById("full-informations").style.left = "0%";
        }, 100);
        lastActiveInfo = number
        document.querySelectorAll(".dop-info")[number-1].querySelector(".material-symbols-outlined").style.transform = "rotate(-90deg)";
    }
    else{
        document.getElementById("full-informations").style.left = "-100%";
        lastActiveInfo = 0;
    }
   
}

curPoint1_img = 2;
PagesAmount = 7;
let img = document.createElement('img');
document.querySelector('.right-part_images').appendChild(img);
img.src = "images/top-menu/menu" + curPoint1_img + "_image1.png";
setInterval(function(){
    curPoint1_img++;
    if(curPoint1_img>PagesAmount) curPoint1_img=2;
    let img = document.createElement('img');
    img.src = "images/top-menu/menu" + curPoint1_img + "_image1.png";
    document.querySelector('.right-part_images').appendChild(img);
    img.style.marginLeft = "50%";
    document.querySelector('.right-part_images').firstChild.style.marginLeft = "-50%";
    img.style.marginLeft = "0%";
    setTimeout(() => {
        document.querySelector('.right-part_images').firstChild.remove();
    }, 2500);
  
},10000);

document.querySelector('.right-part_images').onclick = function(){
    changePoint(curPoint1_img);
}

function Order(){
    document.getElementById("Order_back").style.display = "block";
}

function CloseOrder(){
    document.getElementById("Order_back").style.display = "none";
}
