/* js/script.js */

// --- Dark Mode Logic ---
const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark') {
    body.setAttribute('data-theme', 'dark');
    toggleBtn.innerText = '☀️ Light Mode';
}

toggleBtn.addEventListener('click', () => {
    if (body.getAttribute('data-theme') === 'dark') {
        body.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
        toggleBtn.innerText = '🌙 Dark Mode';
    } else {
        body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        toggleBtn.innerText = '☀️ Light Mode';
    }
});

// --- Tools Logic ---

// 1. Basic Calculator
function calc(op) {
    const n1 = parseFloat(document.getElementById('calc-n1').value);
    const n2 = parseFloat(document.getElementById('calc-n2').value);
    let res = 0;
    if (op === '+') res = n1 + n2;
    if (op === '-') res = n1 - n2;
    if (op === '*') res = n1 * n2;
    if (op === '/') res = n1 / n2;
    document.getElementById('calc-res').innerText = "Result: " + res;
}

// 2. Simple Interest
function calcSimpleInterest() {
    const p = parseFloat(document.getElementById('si-p').value);
    const r = parseFloat(document.getElementById('si-r').value);
    const t = parseFloat(document.getElementById('si-t').value);
    const interest = (p * r * t) / 100;
    document.getElementById('si-res').innerText = "Interest: " + interest.toFixed(2);
}

// 3. Compound Interest
function calcCompoundInterest() {
    const p = parseFloat(document.getElementById('ci-p').value);
    const r = parseFloat(document.getElementById('ci-r').value);
    const t = parseFloat(document.getElementById('ci-t').value);
    const n = parseFloat(document.getElementById('ci-n').value);
    
    const amount = p * Math.pow((1 + (r / (n * 100))), (n * t));
    const interest = amount - p;
    document.getElementById('ci-res').innerText = `Total: ${amount.toFixed(2)} | Interest: ${interest.toFixed(2)}`;
}

// 4. BMI Calculator
function calcBMI() {
    const w = parseFloat(document.getElementById('bmi-w').value);
    const h = parseFloat(document.getElementById('bmi-h').value) / 100; // cm to m
    const bmi = w / (h * h);
    let status = "";
    if(bmi < 18.5) status = "Underweight";
    else if(bmi < 25) status = "Normal";
    else status = "Overweight";
    document.getElementById('bmi-res').innerText = `BMI: ${bmi.toFixed(1)} (${status})`;
}

// 5. Word Counter
function countWords() {
    const text = document.getElementById('word-input').value;
    const count = text.trim().split(/\s+/).filter(word => word.length > 0).length;
    document.getElementById('word-res').innerText = "Words: " + count;
}

// 6. Age Calculator
function calcAge() {
    const dob = new Date(document.getElementById('age-dob').value);
    const diff = Date.now() - dob.getTime();
    const ageDate = new Date(diff);
    const age = Math.abs(ageDate.getUTCFullYear() - 1970);
    document.getElementById('age-res').innerText = "You are " + age + " years old.";
}

// 7. Discount Calculator
function calcDiscount() {
    const price = parseFloat(document.getElementById('disc-price').value);
    const disc = parseFloat(document.getElementById('disc-off').value);
    const final = price - (price * (disc/100));
    document.getElementById('disc-res').innerText = "Final Price: " + final.toFixed(2);
}

// 8. Password Generator
function genPass() {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
    let pass = "";
    for(let i=0; i<12; i++) {
        pass += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    document.getElementById('pass-res').innerText = pass;
}

// 9. Tip Calculator
function calcTip() {
    const bill = parseFloat(document.getElementById('tip-bill').value);
    const perc = parseFloat(document.getElementById('tip-perc').value);
    const tip = bill * (perc/100);
    document.getElementById('tip-res').innerText = `Tip: ${tip.toFixed(2)} | Total: ${(bill+tip).toFixed(2)}`;
}

// 10. Percentage Calculator
function calcPerc() {
    const num = parseFloat(document.getElementById('perc-num').value);
    const tot = parseFloat(document.getElementById('perc-tot').value);
    const res = (num / tot) * 100;
    document.getElementById('perc-res').innerText = "Result: " + res.toFixed(2) + "%";
}

// 11. Days Between Dates
function calcDays() {
    const d1 = new Date(document.getElementById('day-1').value);
    const d2 = new Date(document.getElementById('day-2').value);
    const diff = Math.abs(d2 - d1);
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    document.getElementById('day-res').innerText = "Difference: " + days + " days";
}

// 12. Length Converter (m to ft)
function calcLen() {
    const m = parseFloat(document.getElementById('len-m').value);
    const ft = m * 3.28084;
    document.getElementById('len-res').innerText = m + " meters = " + ft.toFixed(2) + " feet";
}