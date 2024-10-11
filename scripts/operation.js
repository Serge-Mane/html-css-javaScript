function calculer(event) {
    console.log("Effectuer un calcul");
    event.preventDefault();
    const firstNumber = document.getElementById("premierEntier");
    const valueOfFirstNumber = firstNumber.value;
    console.log(valueOfFirstNumber);

    const secondNumber = document.getElementById("deuxiemeEntier");
    const valueOfsecondNumber = secondNumber.value;
    console.log(valueOfsecondNumber);

    const operation = document.getElementById("operation");
    const valueOfoperation = operation.value;
    console.log(valueOfoperation);

    const name = document.getElementById("name");
    const valueName = name.value;
    console.log(valueName);

    let result = 0;

    if (valueOfoperation == 1) {
        result = 1 * valueOfFirstNumber + 1 * valueOfsecondNumber;
    }
    else
        if (valueOfoperation == 2) {
            result = Number(valueOfFirstNumber) * Number(valueOfsecondNumber);

        }

        else
            result = Number(valueOfFirstNumber) % Number(valueOfsecondNumber);
    console.log("result " + result);

    //initial
    const initialName = valueName.split(" ");
    const initials = `${initialName[0][0]}${initialName[0][1]}`;


    //Concatenation
    //const resultAndName = valueName + " " + result; ou 
    let resultAndName = valueName + " " + result;
    resultAndName = `${initials.toUpperCase()} le resulta est: ${result}`;

    //longueur d'une chaine 
    const longueur = resultAndName.length;
    console.log("longueur " + longueur);

    document.getElementById("result").innerHTML = resultAndName;

}
