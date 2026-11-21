function verifier(){
    var s=0;
    msg="Resultat: "
    if(document.getElementById("Q12").checked && !(document.getElementById("Q11").checked) && !(document.getElementById("Q13").checked)){
        s=s+10;
        msg=msg+"Question1: bonne reponse ";
    }else{
        msg=msg+"Question1: fausse reponse ";     
    }

    if(document.getElementById("Q22").checked && document.getElementById("Q23").checked && !(document.getElementById("Q21").checked)){
        s=s+10;
        msg=msg+"Question2: bonne reponse ";
    }else{
        msg=msg+"Question2: fausse reponse ";     
    }
    if(document.getElementById("Q31").checked && !(document.getElementById("Q32").checked) && !(document.getElementById("Q33").checked)){
        s=s+10;
        msg=msg+"Question3: bonne reponse ";
    }else{
        msg=msg+"Question3: fausse reponse ";     
    }
    if(document.getElementById("Q41").checked && !(document.getElementById("Q42").checked) && !(document.getElementById("Q43").checked) && !(document.getElementById("Q44").checked)){
        s=s+10;
        msg=msg+"Question4: bonne reponse ";
    }else{
        msg=msg+"Question4: fausse reponse ";     
    }
    if(document.getElementById("Q51").checked){
        s=s+10;
        msg=msg+"Question5: bonne reponse ";
    }else{
        msg=msg+"Question5: fausse reponse ";     
    }
    if(document.getElementById("Q61").checked && !(document.getElementById("Q62").checked) && !(document.getElementById("Q63").checked) && document.getElementById("Q64").checked){
        s=s+10;
        msg=msg+"Question6: bonne reponse ";
    }else{
        msg=msg+"Question6: fausse reponse ";     
    }
    if(document.getElementById("Q71").checked){
        s=s+10;
        msg=msg+"Question7: bonne reponse ";
    }else{
        msg=msg+"Question7: fausse reponse ";     
    }
    if(!(document.getElementById("Q81").checked) && !(document.getElementById("Q82").checked) && document.getElementById("Q83").checked && !(document.getElementById("Q84").checked)){
        s=s+10;
        msg=msg+"Question8: bonne reponse ";
    }else{
        msg=msg+"Question8: fausse reponse ";     
    }
    if(document.getElementById("Q92").checked){
        s=s+10;
        msg=msg+"Question9: bonne reponse ";
    }else{
        msg=msg+"Question9: fausse reponse ";     
    }
    if(document.getElementById("Q101").checked && document.getElementById("Q103").checked && !(document.getElementById("Q102").checked)){
        s=s+10;
        msg=msg+"Question10: bonne reponse ";
    }else{
        msg=msg+"Question10: fausse reponse  ";     
    }

msg=msg+" pts: ";
msg=msg+s;
alert(msg)
}