function legalAge()
{
    var age = document.getElementById('age').value;
    var majority = 18;

    var regexNum = /^[0-9]+$/i; /* n'accepte que les nombres */
    if (regexNum.test(age) == false)
    {
        alert('Age non valide')
    }
    else
    {
        if (age < majority)
        {
            alert('Vous êtes mineur !');
        }
        else if (age >= majority && age < 130)
        {
            alert('Vous êtes majeur !')
        }
        else
        {
            alert('Oops, il doit y avoir un problème !')
        } 
    }
}