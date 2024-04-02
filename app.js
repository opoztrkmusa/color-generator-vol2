const inputs = document.querySelectorAll("input[type='range']");
let rgbSpan;

inputs.forEach(input => {
    input.nextElementSibling.textContent = input.value;
    input.nextElementSibling.classList.add("color");

    input.addEventListener("input", () => {
        input.nextElementSibling.classList.remove("color");
        input.nextElementSibling.innerText = input.value;
        changeBodyColor();
    });
});

changeBodyColor();

function changeBodyColor() {
    const color = [];
    const colorBody = [];
    colorBody.join(" , ");
    let rgb = [];
    inputs.forEach((input) => {
        rgb.push(input.value); 
        color.push(input.value);
    });
    
    color.forEach((colored,index) => {
        colored = colored/2;
        colorBody.push(Math.floor(colored));
    });

    const colorSpan = `rgb(${colorBody})`

    let rgbString = `rgb(${rgb.join(',')})`;
    document.body.style.backgroundColor = rgbString;
    

    // Eğer önceki rgbSpan varsa, onu kaldır
    if (rgbSpan) {
        rgbSpan.remove();
    }

    document.body.style.textAlign = "center";
    // Yeni rgbSpan oluştur ve body'ye ekle
    rgbSpan = document.createElement("span");
    rgbSpan.classList.add("margin");
    rgbSpan.className = `px-6 py-2`;

    rgbSpan.style.background= `rgb(${colorBody})`;

    rgbSpan.textContent = rgbString;
    document.body.appendChild(rgbSpan);
}

const copyButton = document.createElement("i");
copyButton.className = "fa-solid fa-copy px-6 py-4 cursor-pointer";

copyButton.addEventListener("click", () => {
    const tempTextArea = document.createElement("textarea");
    tempTextArea.value = rgbSpan.textContent;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextArea);
    alert("RGB değeri kopyalandı: " + rgbSpan.textContent);
});
document.body.appendChild(copyButton);

