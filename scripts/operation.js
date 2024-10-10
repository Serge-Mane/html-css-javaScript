function calculer(event) {
    console.log("Effectuer un calcul");
    event.preventDefault();
    const firstNumber = document.getElementById("premierEntier");
    const valueOfFirstNumber = firstNumber.value;
    console.log(valueOfFirstNumber);

    const secondNumber = document.getElementById("deuxiemeEntier");
    const valueOsecondNumber = secondNumber.value;
    console.log(valueOsecondNumber);

    const operation = document.getElementById("operation");
    const valueOfoperation = operation.value;
    console.log(valueOfoperation);

    let result = 0;

    if (valueOfoperation == 1) {
        result = 1 * valueOfFirstNumber + 1 * valueOsecondNumber;
    }
    else
        if (valueOfoperation == 2) {
            result = Number(valueOfFirstNumber) * Number(valueOsecondNumber);
        }

        else
            result = Number(valueOfFirstNumber) % Number(valueOsecondNumber);

    document.getElementById("result").innerHTML = result;
}
