const gradeTableBody = document.getElementById('gradeTableBody');
const mathAverageCell = document.getElementById('mathAverage');
const englishAverageCell = document.getElementById('englishAverage');
const overallAverageCell = document.getElementById('overallAverage');

const mathInput = document.getElementById('mathGrade');
const englishInput = document.getElementById('englishGrade');

const submitButton = document.getElementById('submitGrade');
submitButton.addEventListener('click', () => {
    const mathGrade = parseFloat(mathInput.value);
    const englishGrade = parseFloat(englishInput.value);

    if (isNaN(mathGrade) || isNaN(englishGrade)) {
        alert('Please enter valid grades for both Math and English.');
        return;
    }

    const rowCount = gradeTableBody.querySelectorAll('tr').length + 1;
    const average = ((mathGrade + englishGrade) / 2).toFixed(2);

    const newRow = `<tr>
        <td>${rowCount}</td>
        <td>${mathGrade}</td>
        <td>${englishGrade}</td>
        <td>${average}</td>
    </tr>`;
    gradeTableBody.innerHTML += newRow;

    // Clear input fields after submission
    mathInput.value = '';
    englishInput.value = '';

    updateAverages();
});

function updateAverages() {
    const rows = gradeTableBody.querySelectorAll('tr');
    let mathSum = 0, englishSum = 0, overallSum = 0;

    rows.forEach(row => {
        const cells = row.querySelectorAll('td');
        mathSum += parseFloat(cells[1].textContent);
        englishSum += parseFloat(cells[2].textContent);
        overallSum += parseFloat(cells[3].textContent);
    });

    const rowCount = rows.length;
    mathAverageCell.textContent = (mathSum / rowCount).toFixed(2);
    englishAverageCell.textContent = (englishSum / rowCount).toFixed(2);
    overallAverageCell.textContent = (overallSum / rowCount).toFixed(2);
}





