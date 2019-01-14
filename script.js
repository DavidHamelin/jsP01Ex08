function legalAge()
{
    // déclaration d'une variable pour l'age
    var age = document.getElementById('age').value;
    /* regex : n'accepte que les nombres */
    var regexNum = /^[0-9]+$/i;
    if (regexNum.test(age) == false)
    {
        alert('Age non valide')
    }
    // Vérification de l'age
    else
    {
        if (age < 18)
        {
            alert('Vous êtes mineur !');
        }
        else if (age >= 18 && age < 130)
        {
            alert('Vous êtes majeur !')
        }
        else
        {
            alert('Oops, il doit y avoir un problème !')
        } 
    }
}