"use strict"


//let calculator = [];
let sum = 0;
let date = 5;


if(confirm("Определились с типом сайта?")){
    console.log("Отлично!");
    

    let type = {   
        one: "Визитка - 500p",
        two: "Интернет магазин - 1000p",
        three: "Сайт компании - 1500p",
        four: "Блог - 2000p",
        five: "Промо сайт - 2500p",
    };

    for (let key in type){
        console.log(key);
        console.log(type[key]);
    };

       
    type = prompt("Укажите желаемый тип сайта?, 1 - Сайт-Визитка, 2 - Интернет магазин, 3 - Корпоративный сайт, 4 - Блог, 5 - Промо сайт");
    console.log(type);
    
        if (type == 1) {
        sum = sum + 500;
        date = date + 2;
    } else if (type == 2) {
        sum = sum + 1000;
        date = date + 3;
    } else if (type == 3) {
        sum = sum + 1500;
        date = date + 4;
    } else if (type == 4) {
        sum = sum + 2000;
        date = date + 5;
    } else if (type == 5) {
        sum = sum + 2500;
        date = date + 4;
    };

    let design =[
        "уникальный дизайн - 500p",
        "шаблонный дизайн - 1000p",
        "WoW дизайн - 1500p",
    ];

    for (let mydesign of design){
        console.log(mydesign);
    };

    design = prompt("Укажите желаемый дизайн сайта?, 1 - уникальный дизайн, 2 - шаблонный дизайн, 3 - WoW дизайн");
    console.log(design);
    
        if (design == 1) {
        sum = sum + 500;
        date = date + 3;
    } else if (design == 2) {
        sum = sum + 1000;
        date = date + 3;
    } else if (design == 3) {
        sum = sum + 1500;
        date = date + 3;
    };



    let adapt =[
        "Адаптивная - 4000p",
        "Не адаптивная - 2000p",
    ];

    for (let myadapt of adapt){
        console.log(myadapt);
    };

    adapt = prompt("Укажите желаемую адаптивность?, 1 - Адаптивная, 2 - Не адаптивная");
    console.log(adapt);
    
    
    if (adapt == 1){
        sum = sum + 4000;
        date = date + 7;
    } else {
        (adapt == 2);
        sum = sum + 2000;
        date = date + 5;
    };

  alert("Предварительная стоимость сайта: " + sum + " руб. " + date + " дней."); 
   
    
} else{
    alert("Если возникнут вопросы, напишите мне!");
    console.log(alert);
};



$(document).ready(function(){
    
                  
$(window).scroll(() => {
    let scrollDistance = $(window).scrollTop();
    $(".section").each((i, el) => {
        
        if ($(el).offset().top - $("nav").outerHeight() <= scrollDistance){
            $("nav a").each((i, el) => {
                if ($(el).hasClass("active")){
                    $(el).removeClass("active");
                }
            });
            
            $('nav li:eq('+ i +')').find('a').addClass('active');
        }
    });     
});
    
});


$('a[href^="#"]').click(function(){
    let valHref = $(this).attr("href");
    $('html, body').animate({scrollTop: $(valHref).offset().top - 50 + "px"})
    
});


$(document).ready(function() {
  $('.image-link').magnificPopup({type:'image'});
});


//---------ОШИБКА------------
$(document).ready(function(){
    
    
    let options = {threshold:[0.5]};
    let observer = new IntersectionObserver( onEntry, options);
    let element = $('.element-animation');
    elements.each((i, el) => {
        observer.observe(el);
    });
});

    function onEntry(entry){
    entry.forEach(change => {
        if(change.isIntersecting){
            change.target.classList.add('show-animation');
        }
    });
    };



$('select').change(summ);

function summ(){
    let result=0;
    
    $('#sum').find('select').each(function(){
        let value = 0;

        if (typeof $(this).val() == 'object'){
          $.each($(this).val(), function(index, val) {
            value += val*1;
          });
        } else {
          value = $(this).val()
        }
        result +=value*1;

    });
    $('#table_sum').html(result + ' руб.');
};


$('select').change(function(){
    let sum_date = 0;
    $('select').each(function() {
        sum_date += $(this).find(':selected').data('value');
    });
     $("#table_date").html(sum_date + ' дней.');
});



