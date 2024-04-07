function affiche(idForm){
    let form=document.getElementById(idForm)
    if(form.style.display==="none"){
        form.style.display="block";
    }
    else{
        form.style.display="none";
    }
}


// Fonction pour ajouter un nouvel enseignement au tableau
function ajout(idtable,idform,Nom,desc) {
    var nom = document.getElementById(Nom).value;
    var description = document.getElementById(desc).value;

    

    var table = document.getElementById(idtable);
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    cell1.innerHTML = nom;
    cell2.innerHTML = description;

    document.getElementById(idform).reset();

    document.getElementById(idform).style.display = "none";
}
function affiches(idtable){
    let table=document.getElementById(idtable);
    let lignes=table.getElementsByClassName('hidden');
    for(var i=0;i< lignes.length;i++){
        var ligne=lignes[i];
        if(ligne.style.display==='none'){
            ligne.style.display='block';
        }
        else{
            ligne.style.display='none';
        }
    }
}

