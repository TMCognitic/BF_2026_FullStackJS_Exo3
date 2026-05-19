console.log(`Script Loaded`);

const nb1Input = document.getElementById("nb1");
const nb2Input = document.getElementById("nb2");
const nb1Advance = document.getElementById("nb1Advance");
const nb2Advance = document.getElementById("nb2Advance");
const btnAddition = document.getElementById("btnAddition");
const btnSoustraction = document.getElementById("btnSoustraction");
const btnMultiplication = document.getElementById("btnMultiplication");
const btnDivision = document.getElementById("btnDivision");
const resultat = document.getElementById("resultat");

const btnAddition2 = document.getElementById("btnAddition2");
const btnSoustraction2 = document.getElementById("btnSoustraction2");
const btnMultiplication2 = document.getElementById("btnMultiplication2");
const btnDivision2 = document.getElementById("btnDivision2");
const btnPuissance = document.getElementById("btnPuissance");
const btnDivEntiere = document.getElementById("btnDivEntiere");
const btnModulo = document.getElementById("btnModulo");

if(!nb1Input)
    console.error("nb1 is not define!");

btnAddition.addEventListener('click', function() {
    compute(nb1Input, nb2Input, resultat, function(x, y) { return x + y; });
});

btnSoustraction.addEventListener('click', function() {
    compute(nb1Input, nb2Input, resultat, function(x, y) { return x - y; });
});

btnMultiplication.addEventListener('click', function() {
    compute(nb1Input, nb2Input, resultat, function(x, y) { return x * y; });
});

btnDivision.addEventListener('click', function() {
    compute(nb1Input, nb2Input, resultat, function(x, y) { return x / y; });
});

btnAddition2.addEventListener('click', function() {
    compute(nb1Advance, nb2Advance, nb1Advance, function(x, y) { return x + y; });
});

btnSoustraction2.addEventListener('click', function() {
    compute(nb1Advance, nb2Advance, nb1Advance, function(x, y) { return x - y; });
});

btnMultiplication2.addEventListener('click', function() {
    compute(nb1Advance, nb2Advance, nb1Advance, function(x, y) { return x * y; });
});

btnDivision2.addEventListener('click', function() {
    compute(nb1Advance, nb2Advance, nb1Advance, function(x, y) { return x / y; });
});

btnAddition2.addEventListener('click', function() {
    compute(nb1Advance, nb2Advance, nb1Advance, function(x, y) { return x + y; });
});

btnPuissance.addEventListener('click', function() {
    compute(nb1Advance, nb2Advance, nb1Advance, function(x, y) { return x ** y; });
});

btnDivEntiere.addEventListener('click', function() {
    compute(nb1Advance, nb2Advance, nb1Advance, function(x, y) { return Math.floor(x / y); });
});

btnModulo.addEventListener('click', function() {
    compute(nb1Advance, nb2Advance, nb1Advance, function(x, y) { return x % y; });
});

function compute(input1, input2, resultat, func)
{
    if(!input1.value)
    {
        console.error("nb1 is not set!");
        input1.focus();
        return;
    }

    if(!input2.value)
    {
        console.error("nb2 is not set!");
        input2.focus();
        return;
    }

    const nombre1 = Number(input1.value);
    const nombre2 = Number(input2.value);

    const result = func(nombre1, nombre2);

    resultat.value = result;
}

function racine()
{
    const nb1Advance = document.getElementById("nb1Advance");
    const nb2Advance = document.getElementById("nb2Advance");
    if(!nb1Advance.value)
    {
        console.error("nb1 is not set!");
        nb1Advance.focus();
        return;
    }

    if(!nb2Advance.value)
    {
        console.error("nb2 is not set!");
        nb2Advance.focus();
        return;
    }

    const nombre1 = Number(nb1Advance.value);
    const nombre2 = Number(nb2Advance.value);

    const result = nombre1 ** (1 / nombre2);

    nb1Advance.value = result;
}

    