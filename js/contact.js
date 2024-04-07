function verification() {
    var tel = document.getElementById("tel").value;
    var email = document.getElementById("email").value;
    var prenom = document.getElementById("prenom").value;
    var nom = document.getElementById("nom").value;
    var message = document.getElementById("message").value;

    var telver = /^\d{2} \d{3} \d{2} \d{2}$/;
    var emailver = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    var telError = document.getElementById("telError");
    var emailError = document.getElementById("emailError");
    var prenomError = document.getElementById("prenomError");
    var nomError = document.getElementById("nomError");
    var messageError = document.getElementById("messageError");

    var a = true;
    var b = true;
    var c = true;

    if (prenom.length < 2 || prenom.length > 30) {
        prenomError.innerHTML = "Le prénom doit contenir entre 2 et 30 lettres.";
        prenomError.style.color = "red";
        a = false;
    } else {
        prenomError.innerHTML = "";
    }

    if (nom.length < 2 || nom.length > 30) {
        nomError.innerHTML = "Le nom doit contenir entre 2 et 30 lettres.";
        nomError.style.color = "red";
        b = false;
    } else {
        nomError.innerHTML = "";
    }

    if (!telver.test(tel)) {
        telError.innerHTML = "Veuillez saisir un numéro de téléphone valide.";
        telError.style.color = "red";
        a = false;
    } else {
        telError.innerHTML = "";
    }

    if (!emailver.test(email)) {
        emailError.innerHTML = "Veuillez saisir une adresse email valide";
        emailError.style.color = "red";
        b = false;
    } else {
        emailError.innerHTML = "";
    }

    if (message.length < 1 || message.length > 10) {
        messageError.innerHTML = "Le message ne doit pas dépasser 10 lettres.";
        messageError.style.color = "red";
        c = false;
    } else {
        messageError.innerHTML = ""; 
    }

    if (a && b && c) {
        document.getElementById("prenom").value = "";
        document.getElementById("nom").value = "";
        document.getElementById("tel").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        alert("Merci " + prenom + " " + nom + ", votre formulaire a été envoyé avec succès.");
    }
}
