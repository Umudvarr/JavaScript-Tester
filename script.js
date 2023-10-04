function calculator(){
    let eded1 = parseInt(document.getElementById('eded1').value);
    let eded2 = parseInt(document.getElementById('eded2').value);

    let emeliyyat = document.getElementById('emeliyyat').value;

    if(emeliyyat == '+'){
        document.getElementById('netice').value = eded1 + eded2;
    } else if (emeliyyat == '-'){
        document.getElementById('netice').value = eded1 - eded2;
    }
      else if (emeliyyat == '*'){
        document.getElementById('netice').value = eded1 * eded2;
    } else{
        document.getElementById('netice').value = eded1 / eded2;
    }
}