function countThreevens() {
    const input = document.getElementById("numberArray").value;
    const numbers = input.split(",").map(Number);
    
    let countThreevens = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 3 === 0) {
            countThreevens.push(numbers[i]);
        }
    }
    
    return countThreevens;
}

function handleClick() {
    const threevens = countThreevens();
    document.getElementById("result").textContent = threevens;
}
