<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>test</title>
    <link rel="stylesheet" href="test.js">
</head>
<body>
    <h1>Test</h1>
    <p id="examGrade"></p>
    <script>
//      const svg = document.createElement("svg");
// svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
// svg.setAttribute("width", "16");
// svg.setAttribute("height", "16");
// svg.setAttribute("fill", "currentColor");
// svg.setAttribute("class", "bi bi-emoji-smile");
// svg.setAttribute("viewBox", "0 0 16 16");

// const path1 = document.createElement("path");
// path1.setAttribute("d", "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z");

// const path2 = document.createElement("path");
// path2.setAttribute("d", "M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z");

// svg.appendChild(path1);
// svg.appendChild(path2);


// document.body.appendChild(svg);


// const svgFrown = document.createElementNS("http://www.w3.org/2000/svg", "svg");
// svgFrown.setAttribute("width", "16");
// svgFrown.setAttribute("height", "16");
// svgFrown.setAttribute("fill", "currentColor");
// svgFrown.setAttribute("class", "bi bi-emoji-frown");
// svgFrown.setAttribute("viewBox", "0 0 16 16");

// const path3 = document.createElementNS("http://www.w3.org/2000/svg", "path");
// path3.setAttribute("d", "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z");

// const path4 = document.createElementNS("http://www.w3.org/2000/svg", "path");
// path4.setAttribute("d", "M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z");

// svgFrown.appendChild(path3);
// svgFrown.appendChild(path4);

// document.body.appendChild(svgFrown);



     let examGrade = prompt("Enter Grade.")
     let textInfo;

    if(examGrade >=0 && examGrade <=100){
        if(examGrade >= 90){
            textInfo = "AA"
        }else if(examGrade >= 85){
            textInfo = "BA"
        }else if(examGrade >= 80){
            textInfo = "BB"
        }else if(examGrade >= 75){
            textInfo = "CB"
        }else if(examGrade >= 70){
            textInfo = "CC"
        }else if(examGrade >= 65){
            textInfo = "DC"
        }else if(examGrade >= 60){
            textInfo = "DD"
        }else if(examGrade >= 50){
            textInfo = "FD"
        }else if(examGrade < 50){
            textInfo = "FF"
        }
    }
        else{
            textInfo ="This is not correct examGrade "   
            alert(textInfo);
        } 

document.getElementById('examGrade').innerHTML = textInfo + " => " + examGrade;

    </script>
</body>
</html>