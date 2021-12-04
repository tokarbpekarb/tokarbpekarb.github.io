//alert("Hi!");
function remove_button(element_id){
    document.getElementById(element_id).style.display="none";
}

function hide_block(element_id){
    var elements = document.getElementsByClassName(element_id);
    if(getCookie(element_id)=="hidden")
    {
        setCookie(element_id,"visible");
    }
    else{
        setCookie(element_id,"hidden");
    }
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.toggle("changed_block_visible");
    }  
}

function change_background_image(element_id){
    //document.getElementById(element_id).classList.toggle("changed_background_image")
    var elements = document.getElementsByClassName(element_id);
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.toggle("changed_background_image");
    }
    if(getCookie("background")=="changed"){
        setCookie("background","default");
    }
    else{
        setCookie("background","changed");
    }
}

function change_theme(element_id){
    document.getElementById(element_id).classList.toggle("changed_theme");
    if(getCookie('theme')=='dark'){
        setCookie('theme','light');
    }
    else{
        setCookie('theme','dark');
    }
}

function change_text_style(element_id){
    var elements = document.getElementsByClassName(element_id);
    if(getCookie("text_style")=="changed"){
        setCookie("text_style","default");
    }
    else{
        setCookie("text_style","changed");
    }
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.toggle("changed_text_style");
    }  
}

function text_selection(element_id){
    var elements = document.getElementsByClassName(element_id);
    setCookie("text_style","changed");
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.add("changed_text_style");
    }    
}

function remove_text_selection(element_id){
    setCookie("text_style","default");
    var elements = document.getElementsByClassName(element_id);
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.remove("changed_text_style");
    }  
}

function reg()
{
    alert_text="";
    //вывод информации с текстовых полей
    nname=document.register.name.value;
    email=document.register.email.value;
    phone_number=document.register.phone_number.value;
    question=document.register.question.value;
    //console.log("Данные из текстовых полей (соответственно: имя, почта, номер телефона): " + nname + ", " +  email + ", " + phone_number);
    //console.log("Вопрос, заданный в поле textarea формы: " + question);
    alert_text+="Данные из текстовых полей (соответственно: имя, почта, номер телефона): " + nname + ", " +  email + ", " + phone_number + "\n"
    alert_text+="Вопрос, заданный в поле textarea формы: " + question + "\n";
    //вывод информации с чекбоксов
    checkboxes=""
    if(document.register.checkbox1.checked){
        checkboxes += document.register.checkbox1.value + ", "
    }
    if(document.register.checkbox2.checked){
        checkboxes += document.register.checkbox2.value + ", "
    }
    if(document.register.checkbox3.checked){
        checkboxes += document.register.checkbox3.value + ", "
    }
    //console.log("Чекбоксы (оценка сайта пользователем): " + checkboxes);
    alert_text+="Чекбоксы (оценка сайта пользователем): " + checkboxes + "\n";
    //вывод инфо селектора
    //console.log("Выбранный элемент селектора (выпадающий список): " + document.register.theme.value);
    alert_text+="Выбранный элемент селектора (выпадающий список): " + document.register.theme.value + "\n";
    //вывод выбранного radioButton
    //console.log("Вывод информации с радиокнопок: " + document.register.answer.value);
    alert_text+="Вывод информации с радиокнопок: " + document.register.answer.value;
    console.log(alert_text);
    alert(alert_text);
}

var n;
var images=new Array(4);
var mult;
function load_example_page(){
    alert('Hi!');
    init_gallery();
    //mult=true;
    //multi()
    document.getElementById("image").classList.add("large_image");
    is_background_changed('article-with-background-image');
    is_gallery_started();
    set_gallery_size();
    is_text_style_changed('changeable_text');
    is_block_hidden('example_hideable_block');
}
function init_gallery(){
    n=0;
    var i;
    for(i=0; i<4; i++)
    {
        images[i]="./gallery/"+i+".jpg";
    }
    document.getElementById("image").src=images[n];
    console.log("init gallery...")
}

function change_image(direction){
    //document.getElementById("image").classList.add("hidden");
    //document.getElementById("image").style.opacity = 0;
    if(direction==1){
        n+=1;
        if(n==4){n=0;}
        document.getElementById("image").src=images[n];
    }
    else if(direction==-1){
        n-=1;
        if(n==-1){n=3;}
       document.getElementById("image").src=images[n];
    }
    //document.getElementById("image").style.opacity = 1;
    //document.getElementById("image").classList.remove("hidden");
}

//function multi(){
    //timerID= setInterval(change_image,3000,1);
    //while(mult){
    //    setTimeout(change_image, 1000, 1);
    //}
//}

function small_sizing()
{
    setCookie("gallery_size","small");
    document.getElementById("image").classList.add("small_image");
    document.getElementById("image").classList.remove("medium_image");
    document.getElementById("image").classList.remove("large_image");
}
function medium_sizing(){
    setCookie("gallery_size","medium");
    document.getElementById("image").classList.add("medium_image");
    document.getElementById("image").classList.remove("small_image");
    document.getElementById("image").classList.remove("large_image");
}
function large_sizing(){
    setCookie("gallery_size","large");
    document.getElementById("image").classList.add("large_image");
    document.getElementById("image").classList.remove("small_image");
    document.getElementById("image").classList.remove("medium_image");
}
let timerID;
function start_stop_gallery(){
    if(getCookie("gallery_timer")=="enabled"){
        setCookie("gallery_timer","disabled");
        clearTimeout(timerID);
        ///mult=false;
    }
    else{
        //mult=true;
        timerID= setInterval(change_image,3000,1);
        setCookie("gallery_timer","enabled");
    }
}