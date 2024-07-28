const hrs_doc = document.querySelector('#hrs');
const hrsImg = document.querySelector('#hrsImg');
const txt = document.querySelector('#salut');
const container=document.querySelector('#container');
function carregar() {
    let data = new Date();
    let hrs = data.getHours();
    let min = data.getMinutes();
    hrs_doc.innerHTML = `São exatamente ${hrs} e ${min}.`;
    if (hrs >= 0 && hrs <= 12) {
        txt.innerHTML = 'Bom dia';
        hrsImg.src='img/manhã.jpg';
        container.style.background='#ffd43d';
    } else if (hrs > 12 && hrs < 19) {
        txt.innerHTML = 'Boa tarde';
        hrsImg.src='img/tarde.jpg';
        container.style.background='#fdc7a3';
    } else {
        txt.innerHTML = 'Boa noite';
        hrsImg.src='img/noite.jpg';
        container.style.background='#161a23';
        hrs_doc.style.color='white';
        txt.style.color='white';
    };
};