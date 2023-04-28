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
