let expenseNameList = [];
let expenseValueList = [];

//Esta función se usa cuando el usuario da clic en Guardar Gasto
function clickBoton() {
    let expenseName = document.getElementById('nombreGasto').value;
    let expenseValue = document.getElementById('valorGasto').value;

    expenseNameList.push(expenseName);
    expenseValueList.push(expenseValue);
    
    updateExpenseList();
}

function updateExpenseList() {
    //Es const ya que no cambia
    const elementList = document.getElementById('listaDeGastos');
    const elementTotal = document.getElementById('totalGastos');
    let htmlList = '';
    let expenseTotal = 0;

    expenseNameList.forEach((element, position) => {
        const expenseValue = Number(expenseValueList[position]);
        htmlList += `<li>
                ${element} - USD ${expenseValue.toFixed(2)}
                <button onclick="removeExpense(${position});">Eliminar</button>
            </li>`;
        expenseTotal += Number(expenseValue);
    });

    elementList.innerHTML = htmlList;
    //toFixed → poner solo 2 posiciones si es decimal
    elementTotal.innerHTML = expenseTotal.toFixed(2);

    clean();
}

function clean() {
    document.getElementById('nombreGasto').value = '';
    document.getElementById('valorGasto').value = '';
}

function removeExpense(position) {
    expenseNameList.splice(position, 1);
    expenseValueList.splice(position, 1);

    updateExpenseList();
}