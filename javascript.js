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