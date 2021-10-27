(function (win, doc) {
    'use strict';

    doc.querySelector('#submit').addEventListener('click', function (event) {
        event.preventDefault();
        let allInputs = doc.querySelectorAll('input[type=number]');
        let sum = 0;
        let arr = [];

        for (let i = 0; i < allInputs.length; i++) {
            let value = allInputs[i].value;
            sum += parseInt(value);
            arr.push(value);
        }
        let average = sum / parseInt(allInputs.length);
        arr.sort((a, b) => a - b);

        doc.querySelector('.result').classList.remove('d-none');
        doc.querySelector('.sum').innerHTML = `Soma: ${sum}`;
        doc.querySelector('.average').innerHTML = `Média: ${average}`;
        doc.querySelector('.order').innerHTML = `Ordem: ${arr.map(elem=>elem)}`;
    }, false);
})(window, document);