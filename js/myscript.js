"use strict"


let calculator = [];


if(confirm("Определились с типом сайта?")){
    console.log("Отлично!");
    

    let type = {   
        one: "Визитка - 1000p",
        two: "Интернет магазин - 3000p",
        three: "Сайт компании - 4000p",
        four: "Блог - 2000p",
        five: "Промо сайт - 3000p",
    };

    for (let key in type){
        console.log(key);
        console.log(type[key]);
    };

       
    let newtype = prompt("Укажите желаемый тип сайта?");
    console.log(newtype);
    

    let arr =[
        "уникальный дизайн - 5000p",
        "шаблонный дизайн - 2000p",
        "WoW дизайн - 7000p",
    ];

    for (let arrItem of arr){
        console.log(arrItem);
    };

    let design = prompt("Укажите желаемый дизайн сайта?");
    console.log(design);


    let newarr =[
        "Адаптивная - 7000p",
        "Не адаптивная - 4000p",
    ];

    for (let arrItems of newarr){
        console.log(arrItems);
    };

    let adapt = prompt("Укажите желаемую адаптивность?");
    console.log(adapt);
   
   
    
} else{
    alert("Если возникнут вопросы, напишите мне!");
    console.log(alert);
};

/*
let sum = (type.reduce() + arr.reduce() + newarr.reduce());
alert("Предварительная стоимость = ");
console.log(sum); */

