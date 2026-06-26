function generateFunc() {
    const score = parseInt(document.getElementById('score').textContent);
    const numberInput = parseInt(document.getElementById('numberInput').value);
    const operationSelect = document.getElementById('operationSelect').value;

    if (isNaN(numberInput) || numberInput <= 0) {
        alert('Please enter a valid number greater than 0');
        return;
    }

    document.getElementById('result').innerHTML = '';

    for (let i = 1; i <= numberInput; i++) {
        if (operationSelect === 'add') {
            document.getElementById('result').innerHTML += "<img src='https://png.pngtree.com/png-vector/20190507/ourmid/pngtree-vector-plus-icon-png-image_1025536.jpg' width='150px' height='150px' onclick='add(this.id)' id='add-" + i + "' />";

        } else if (operationSelect === 'subtract') {
            document.getElementById('result').innerHTML += "<img src='https://img.icons8.com/color/1200/minus.jpg' width='150px' height='150px' onclick='subtract(this.id)' id='sub-" + i + "' />";

        } else if (operationSelect === 'multiply') {
            document.getElementById('result').innerHTML += "<img src='https://www.nicepng.com/png/detail/430-4306521_multiplication-sign-background-png-multiply-clipart.png' width='150px' height='150px' onclick='multiplynum(this.id)' id='mul-" + i + "' />";

        } else if (operationSelect === 'divide') {
            document.getElementById('result').innerHTML += "<img src='https://static.vecteezy.com/system/resources/previews/038/051/588/non_2x/divide-icon-image-suitable-for-mobile-apps-web-apps-and-print-media-vector.jpg' width='150px' height='150px' onclick='dividenum(this.id)' id='div-" + i + "' />";
        }
    }

    if (operationSelect === 'multiply') {
        document.getElementById('multiply').style.visibility = 'visible';
    } else {
        document.getElementById('multiply').style.visibility = 'hidden';
    }

    if (operationSelect === 'divide') {
        document.getElementById('divide').style.visibility = 'visible';
    } else {
        document.getElementById('divide').style.visibility = 'hidden';
    }
}

function add(id) {
    const score = parseInt(document.getElementById('score').textContent);
    const num = parseInt(id.split('-')[1]);
    document.getElementById('score').textContent = score + num;
    document.getElementById(id).style.visibility = 'hidden';
}

function subtract(id) {
    const score = parseInt(document.getElementById('score').textContent);
    const num = parseInt(id.split('-')[1]);
    document.getElementById('score').textContent = score - num;
    document.getElementById(id).style.visibility = 'hidden';
}

function multiplynum(id) {
    let score = parseInt(document.getElementById('score').textContent);
    const num = parseInt(id.split('-')[1]);
    if (score === 0) score = 1;
    document.getElementById('score').textContent = score * num;
    document.getElementById(id).style.visibility = 'hidden';
}

function dividenum(id) {
    let score = parseInt(document.getElementById('score').textContent);
    const num = parseInt(id.split('-')[1]);
    if (score === 0) score = 1;
    document.getElementById('score').textContent = score / num;
    document.getElementById(id).style.visibility = 'hidden';
}