// console.log('added');
document.getElementById('add-btn').addEventListener('click', function () {
    // console.log('clicked');

    const inputValue = document.getElementById('input-value').value;
    // console.log(inputValue);
    if (inputValue == '') {
        alert('please enter a value');
    }
    else {
        const mainContainer = document.getElementById('content-container');
        const tableContainer = document.createElement('tr');
        tableContainer.innerHTML = ` <th > 1 </th>
        <td> ${inputValue} </td>
        <td> Button </td> `
        mainContainer.appendChild(tableContainer);
        document.getElementById('input-value').value = "";

    }
})