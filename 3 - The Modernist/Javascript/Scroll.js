(function () {
    const buttons = document.getElementsByClassName('scroll-button');
    const scrollItens = document.getElementsByClassName('scrl-item');

    const width = scrollItens[0].offsetWidth;
    const step = 10;

    let currentPosition = 0;
    let currentItem = 0;

    let sliderOn = false;

    function slideLeft() {
        currentPosition = currentPosition + step;

        for(let i = 0; i < scrollItens.length; i++){
            scrollItens[i].style.right = currentPosition + "px";
        }
    }

    function slideRight() {
        currentPosition = currentPosition - step;
        for(let i = 0; i < scrollItens.length; i++){
            scrollItens[i].style.right = currentPosition + "px";
        }
    }

    function slideTo(finalPosition, slideSide) {
            sliderOn = true;
            const slideInterval = setInterval(() => {
                slideSide();

                if(currentPosition == finalPosition){
                    sliderOn = false;
                    clearInterval(slideInterval);
                }

            }, 1);
    }

    buttons[1].addEventListener('click', () => {
        if(!sliderOn) {
            const finalPosition = currentPosition + width;

            if(currentItem < scrollItens.length - 1) {
                slideTo(finalPosition, slideLeft);
                currentItem++;
            } else {
                slideTo(0, slideRight);
                currentItem = 0;
            }
        }

    });

    buttons[0].addEventListener('click', () => {
        if(!sliderOn) {
            const finalPosition = currentPosition - width;

            if(currentItem > 0) {
                slideTo(finalPosition, slideRight);
                currentItem--;
            } else {
                slideTo(width * (scrollItens.length - 1), slideLeft);
                currentItem = scrollItens.length - 1;
            }
        }

    });

})();
