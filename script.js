let jumlahklik = 0;

function munculLove(event) {
    const love = document.createElement("span");
    love.innerText = "❤️";
    love.classList.add("floating-love");
    love.style.left = event.pageX + "px";
    love.style.top = event.pageY + "px";
    document.body.appendChild(love);
    setTimeout(() => {
        love.remove();
    }, 1000);
}

function hujanLove() {
    for (let i = 0; i < 10000; i++) { 
        setTimeout(() => {
            const love = document.createElement("span");
            love.innerText = "❤️";
            love.classList.add("floating-love");
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * window.innerHeight;
            love.style.left = x + "px";
            love.style.top = y + "px";
            document.body.appendChild(love);
            setTimeout(() => {
                love.remove();
            }, 2000);
        }, i * 100); 
    }
}

function bukaKado(event) {
    jumlahklik++;
    munculLove(event);
    if (jumlahklik === 1) {
        document.querySelector('.flap').style.transform = 'rotateX(180deg)';
        document.querySelector('.heart').style.opacity = '0';
        setTimeout(() => {
            const surat = document.querySelector('.letter');
            surat.style.transform = 'translateY(-100px)';
            surat.style.zIndex = "4";
        }, 800);
    }
    if (jumlahklik === 10) {
        document.querySelector('.letter').style.transform = 'translateY(-100px)';
        setTimeout(() => {
            document.querySelector('.envelope-wrapper').style.display = 'none';
            document.getElementById('pesan').style.display = 'block';
            hujanLove();
        }, 1000);
    }
}
