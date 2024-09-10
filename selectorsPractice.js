var prevButton = document.getElementById('prevButton');
var nextButton = document.getElementById('nextButton');
var pictureblock = document.getElementById('pictureblockSlider');

prevButton.addEventListener('click', onShowPrevButtonClic);
nextButton.addEventListener('click', onShowNextButtonClic);

var srcsPictures = ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt3XnznpC6UYZ6ejPg70l078TbJ_ekY-3PHg&s', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfpGOZo4Ietoau9vIBIi26hbU43AwIHBbLVA&s', 'https://tochka.by/upload/resize_cache/iblock/d71/768_512_1/nyy1qjsqdab0mzxa9ojqa20mvb96am4f.jpg'];
var picIndex = 0;
prevButton.disabled = true;
pictureblock.src = srcsPictures[picIndex];

function onShowPrevButtonClic() {
    picIndex--; 
    pictureblock.src = srcsPictures[picIndex];
    nextButton.disabled = false;
    if (picIndex === 0) {
        prevButton.disabled = true;
    }
}

function onShowNextButtonClic() {
    picIndex++; 
    pictureblock.src = srcsPictures[picIndex];
    prevButton.disabled = false;
    if (picIndex === (srcsPictures.length-1)) {
        nextButton.disabled = true;
    }    
}
