// Получив от пользователя сумму денег m, годовой %, переодичность выплат и срок вложения выдать конечную сумму денег.


// document.getElementById('startSumm').value = startSumm;

/* let monthlyDividents = startSumm*(percentYear/12)/100;
endSumm = startSumm + monthlyDividents; */

/* console.log(monthlyDividents);
console.log(endSumm) */

/* monthlyDividents = endSumm*(percentYear/12)/100;
endSumm = endSumm + monthlyDividents; */
/* console.log(endSumm) */
let rounded = function(number){
    return +number.toFixed(2);
}

function summ() {
    $("#table tr").remove(); 
    // document.getElementById('resetTable').reset();
    let startSumm = +document.getElementById('startSumm').value;
    let percentYear = +document.getElementById('percentYear').value;
    let monthInPeriod = +document.getElementById('monthInPeriod').value;
    let totalTimeInMonth = +document.getElementById('totalTimeInMonth').value;;
    let endSumm = startSumm;

    for (let i = 0; i < totalTimeInMonth; i++) {
        let monthlyDividents = endSumm*(percentYear/12)/100;
        endSumm = endSumm + monthlyDividents;
        $("<tr><td>" + +(i+1) + "</td><td>" + rounded(endSumm) + "</td><td>" + rounded(monthlyDividents) + "</td</tr>").appendTo("#table")        /* console.log(endSumm) */
    }
    console.log(`You earn ${endSumm-startSumm}`);
}

function reset() {
    document.getElementById("myForm").reset();
}

// 1 | 1000 | 8.33
// 2 | 1008 | 8.4