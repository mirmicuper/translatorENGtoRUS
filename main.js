//translator
let translateString = "";
let initalString = prompt("Введите строку: ");
initalString = initalString.split('');
translateString = translateString.split('');
let size = initalString.length;

for(let i = 0; i < size; i++) {
    switch (initalString[i]) {
        case " ":
            translateString[i] = " ";
            break;
        case "q":
            translateString[i] = "й";
            break;
        case "w":
            translateString[i] = "ц";
            break;
        case "e":
            translateString[i] = "у";
            break;
        case "r":
            translateString[i] = "к";
            break;
        case "t":
            translateString[i] = "е";
            break;
        case "y":
            translateString[i] = "н";
            break;
        case "u":
            translateString[i] = "г";
            break;
        case "i":
            translateString[i] = "ш";
            break;
        case "o":
            translateString[i] = "щ";
            break;
        case "p":
            translateString[i] = "з";
            break;
        case "[":
            translateString[i] = "х";
            break;
        case "]":
            translateString[i] = "ъ";
            break;
        case "a":
            translateString[i] = "ф";
            break;
        case "s":
            translateString[i] = "ы";
            break;
        case "d":
            translateString[i] = "в";
            break;
        case "f":
            translateString[i] = "а";
            break;
        case "g":
            translateString[i] = "п";
            break;
        case "h":
            translateString[i] = "р";
            break;
        case "j":
            translateString[i] = "о";
            break;
        case "k":
            translateString[i] = "л";
            break;
        case "l":
            translateString[i] = "д";
            break;
        case ";":
            translateString[i] = "ж";
            break;
        case "'":
            translateString[i] = "э";
            break;
        case "z":
            translateString[i] = "я";
            break;
        case "x":
            translateString[i] = "ч";
            break;
        case "c":
            translateString[i] = "с";
            break;
        case "v":
            translateString[i] = "м";
            break;
        case "b":
            translateString[i] = "и";
            break;
        case "n":
            translateString[i] = "т";
            break;
        case "m":
            translateString[i] = "ь";
            break;
        case ",":
            translateString[i] = "б";
            break;
        case ".":
            translateString[i] = "ю";
            break;
    default:
        break;
    }
    
}


let translator = document.getElementById("translator");
let x = document.write("Изначальное сообщение:   ");
let x1 = document.write(...initalString);
let x2 = document.write("<br\>");
let x3 = document.write("Конечное:    ");
let x4 = document.write(...translateString);
translator.innerHTML = x;
translator.innerHTML = x1;
translator.innerHTML = x2;
translator.innerHTML = x3;
translator.innerHTML = x4;

