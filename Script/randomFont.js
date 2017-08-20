
var btnStyle = document.querySelector('.btn');
btnStyle.addEventListener('click', randomFont)

function randomFont() {
    var randomSt = document.body;
    var backgrounds =
        ["https://st.depositphotos.com/1018782/4969/v/950/depositphotos_49698733-stock-illustration-ukrainian-ornament.jpg",
            "http://zoohall.com.ua/uploads/posts/2012-06/1340026527_ukrainskii-ornament-6.jpg",
            "http://mtdata.ru/u5/photoC1EB/20306498144-0/original.png"];
    var randFonts = Math.floor(Math.random() * backgrounds.length);
    randomSt.style.cssText = 'background-image: url("' + backgrounds[randFonts] + '")'
}