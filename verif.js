function verif()
{
    var err="";
    if(document.getElementById('name').value=="")
        err+="nom non remplie\n";
    if(document.getElementById('firstName').value=="")
        err+="prenom non remplie\n";
    if(document.getElementById('email').value=="")
        err+="email non remplie"
    if(err!="")
        alert("formulaire non complet:\n"+err);
    else {
        document.getElementById("formulaire").submit();
        location.href="inscription.html"
    }
}

