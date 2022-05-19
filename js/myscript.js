"use strict"


//let calculator = [];
let sum = 0;


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

       
    type = prompt("Укажите желаемый тип сайта?");
    console.log(type);
    

    let design =[
        "уникальный дизайн - 500p",
        "шаблонный дизайн - 1000p",
        "WoW дизайн - 1500p",
    ];

    for (let mydesign of design){
        console.log(mydesign);
    };

    design = prompt("Укажите желаемый дизайн сайта?");
    console.log(design);


    let adapt =[
        "Адаптивная - 4000p",
        "Не адаптивная - 2000p",
    ];

    for (let myadapt of adapt){
        console.log(myadapt);
    };

    adapt = prompt("Укажите желаемую адаптивность?");
    console.log(adapt);
   
   
    
} else{
    alert("Если возникнут вопросы, напишите мне!");
    console.log(alert);
};



if (type == 1) {
    sum = sum + 500;
} else if (type == 2) {
    sum = sum + 1000;
} else if (type == 3) {
    sum = sum + 1500;
} else if (type == 4) {
    sum = sum + 2000;
} else if (type == 5) {
    sum = sum + 2500;
};



if (design == 1) {
    sum = sum + 500;
} else if (design == 2) {
    sum = sum + 1000;
} else if (design == 3) {
    sum = sum + 1500;
};


if (adapt == 1){
    sum = sum + 4000;
} else {
    (adapt == 2);
    sum = sum + 2000;
};


function calculator (type, design, adapt) {
    return type + design + adapt;
}
let result = calculator (type, design, adapt);
alert (calculator);
