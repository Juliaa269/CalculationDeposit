// Получив от пользователя сумму денег m, годовой %, переодичность выплат и срок вложения выдать конечную сумму денег.

let rounded = function(number){
    return +number.toFixed(2);
}

function summ() {
    $("#table tr").remove();
    let startSumm = +document.getElementById('startSumm').value;
    let percentYear = +document.getElementById('percentYear').value;
    // let monthInPeriod = +document.getElementById('monthInPeriod').value;
    let totalTimeInMonth = +document.getElementById('totalTimeInMonth').value;;
    let endSumm = startSumm;

    for (let i = 0; i < totalTimeInMonth; i++) {
        let monthlyDividents = endSumm*(percentYear/12)/100;
        endSumm = endSumm + monthlyDividents;
        $(`<tr>
            <td class="title">${+(i+1)}</td>
            <td class="title">${rounded(endSumm)}</td>
            <td class="title">${rounded(monthlyDividents)}</td>
        </tr>`).appendTo($(".table"));
    }
    console.log(`You earn ${endSumm-startSumm}`);
}

$(function () {
    $("#submit").click(function (e) {
        e.preventDefault();
        summ()
    });
});