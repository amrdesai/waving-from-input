// Variables
const labels = document.querySelectorAll('.form-control label');

// Animate Input
labels.forEach((label) => {
    label.innerHTML = label.innerText
        .split('')
        .map(
            (letter, index) =>
                `<span style="transition-delay:${
                    index * 33
                }ms">${letter}</span>`
        )
        .join('');
});
