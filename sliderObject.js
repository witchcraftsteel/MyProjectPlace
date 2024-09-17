//создаю объект слайдер и добавляю туда всякое важное
const mySlider = {
    srcsPictures: [],
    prevButton: document.getElementById('prevButton'),
    nextButton: document.getElementById('nextButton'),
    pictureblock: document.getElementById('pictureblockSlider'),
    picIndex: 0,
    initialisation: function () { //потешная инициализация активности, ну типо ивентлистенер и фоточки с анапы 2008
        const that = this; //вот тут спасаюсь от замыканя, ибо не mySlider инициализировал скрипт, а ЕБУЧАЯ кнопка (да кто она такая???)
        this.prevButton.addEventListener('click', function(eventElement){
            that.onShowPrevButtonClic(eventElement);
        });
        this.nextButton.addEventListener('click', function(eventElement){
            that.onShowNextButtonClic(eventElement);
        });
        this.srcsPictures = 
        [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt3XnznpC6UYZ6ejPg70l078TbJ_ekY-3PHg&s',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfpGOZo4Ietoau9vIBIi26hbU43AwIHBbLVA&s',
            'https://tochka.by/upload/resize_cache/iblock/d71/768_512_1/nyy1qjsqdab0mzxa9ojqa20mvb96am4f.jpg'];
        this.prevButton.disabled = true;
        this.pictureblock.src = this.srcsPictures[this.picIndex];

    },
    onShowPrevButtonClic: function (eventElement) { //тут метод добавляю, он дает возможность листать назад, отличный метод
        this.picIndex--; //вот тут this добавляю везде и ниже, это чтобы из другой области определения дотянуться
        this.pictureblock.src = this.srcsPictures[this.picIndex];
        nextButton.disabled = false;
        if (this.picIndex === 0) {
            this.prevButton.disabled = true;
        }
    },
    onShowNextButtonClic: function (eventElement) { //вот тут тоже самое, что и сверху. Суета
        this.picIndex++;
        this.pictureblock.src = this.srcsPictures[this.picIndex];
        this.prevButton.disabled = false;
        if (this.picIndex === (this.srcsPictures.length - 1)) {
            this.nextButton.disabled = true;
        }
    }

};

mySlider.initialisation();