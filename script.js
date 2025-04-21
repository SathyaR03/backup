function calculateSum() {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;

    if (num1 === '' || num2 === '') {
        alert('Please enter both numbers.');
        return;
    }

    fetch('/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', 
        },
        body: JSON.stringify({ num1, num2 }), 
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('result').innerText = `The sum is: ${data.sum}`;
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
