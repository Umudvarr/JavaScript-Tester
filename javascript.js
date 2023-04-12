let hava = "Firtinali";
switch(hava) {
  case "Yagmurlu":
      document.getElementById("wether").innerHTML = "Semsiyeni yanina almayi unutma";
      break;
  case "Gunesli":
      document.getElementById("wether").innerHTML = "Hafif giyin";
      break;
  case "Bulutlu":
      document.getElementById("wether").innerHTML = "Disari cik";
      break;
  case "Karli":
      document.getElementById("wether").innerHTML = "Kalin giyin";
      break;
  case "Firtinali":
      document.getElementById("wether").innerHTML = "Bir süre disari cikma";
      break;
  default:
      document.getElementById("wether").innerHTML = "Bilinmeyen hava durumu:";
}
//*************ikinci proje*************//

 let islem = function(a, b, operator) {
    switch(operator) {
        case 'topla':
            return a + b;
        break;
        case 'cikar':
            return a - b;
        break;
        case 'carp':
            return a * b;
        break;
        case 'bol':
            return a / b;
        break;
        default:
            return 'Tanimlanmamis islem';
        break;
    }
};
console.log(islem(23, 14, 'topla'));  // 37
console.log(islem(10, 3, 'mod'));     // Tanimlanmamis islem
