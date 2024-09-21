//хз почему не работает, разберусь потом

function SliderConstructor() {
    this.srcsPictures = [];
    this.prevButton = document.getElementById('prevButton');
    this.nextButton = document.getElementById('nextButton');
    this.pictureblock = document.getElementById('pictureblockSlider');
    this.picIndex = 0;
    this.initialisation = function () { 
        const that = this; 
        this.prevButton.addEventListener('click', function (eventElement) {
            that.onShowPrevButtonClic(eventElement);
        });
        this.nextButton.addEventListener('click', function (eventElement) {
            that.onShowNextButtonClic(eventElement);
        });
        this.srcsPictures =
            [
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt3XnznpC6UYZ6ejPg70l078TbJ_ekY-3PHg&s',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfpGOZo4Ietoau9vIBIi26hbU43AwIHBbLVA&s',
                'https://tochka.by/upload/resize_cache/iblock/d71/768_512_1/nyy1qjsqdab0mzxa9ojqa20mvb96am4f.jpg'];
        this.prevButton.disabled = true;
        this.pictureblock.src = this.srcsPictures[this.picIndex];

    };
    this.onShowPrevButtonClic = function (eventElement) { 
        this.picIndex--; 
        this.pictureblock.src = this.srcsPictures[this.picIndex];
        nextButton.disabled = false;
        if (this.picIndex === 0) {
            this.prevButton.disabled = true;
        }
    };    
    this.onShowNextButtonClic = function (eventElement) { 
        this.picIndex++;
        this.pictureblock.src = this.srcsPictures[this.picIndex];
        this.prevButton.disabled = false;
        if (this.picIndex === (this.srcsPictures.length - 1)) {
            this.nextButton.disabled = true;
        }
    };
};




// const mySlider = {
//     srcsPictures: [],
//     prevButton: document.getElementById('prevButton'),
//     nextButton: document.getElementById('nextButton'),
//     pictureblock: document.getElementById('pictureblockSlider'),
//     picIndex: 0,
//     initialisation: function () { 
//         const that = this; 
//         this.prevButton.addEventListener('click', function(eventElement){
//             that.onShowPrevButtonClic(eventElement);
//         });
//         this.nextButton.addEventListener('click', function(eventElement){
//             that.onShowNextButtonClic(eventElement);
//         });
//         this.srcsPictures =
//         [
//             'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt3XnznpC6UYZ6ejPg70l078TbJ_ekY-3PHg&s',
//             'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfpGOZo4Ietoau9vIBIi26hbU43AwIHBbLVA&s',
//             'https://tochka.by/upload/resize_cache/iblock/d71/768_512_1/nyy1qjsqdab0mzxa9ojqa20mvb96am4f.jpg'];
//         this.prevButton.disabled = true;
//         this.pictureblock.src = this.srcsPictures[this.picIndex];

//     },
//     onShowPrevButtonClic: function (eventElement) { 
//         this.picIndex--; 
//         this.pictureblock.src = this.srcsPictures[this.picIndex];
//         nextButton.disabled = false;
//         if (this.picIndex === 0) {
//             this.prevButton.disabled = true;
//         }
//     },
//     onShowNextButtonClic: function (eventElement) { 
//         this.picIndex++;
//         this.pictureblock.src = this.srcsPictures[this.picIndex];
//         this.prevButton.disabled = false;
//         if (this.picIndex === (this.srcsPictures.length - 1)) {
//             this.nextButton.disabled = true;
//         }
//     }

// };

// mySlider.initialisation();
let slider1 = new SliderConstructor();