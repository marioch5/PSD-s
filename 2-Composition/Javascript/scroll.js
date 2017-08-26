(function() {
    const scrollImage = document.getElementById('scroll-img');
    const scrollButtons = document.getElementsByClassName('scroll-button');

    const scrollView = {
        images: ["Resources/Images/gray-img.jpg",
                "Resources/Images/black1.jpg",
                "Resources/Images/gray-img.jpg",
                "Resources/Images/black1.jpg",
                "Resources/Images/gray-img.jpg"
        ],

        selectImage: function(opt) {
            scrollImage.src = this.images[opt];
        },

        selectButton: function(opt) {
            scrollButtons[opt].style.backgroundColor = "#717171";
        },

        clearButtons: function() {
            for (let i = 0; i < scrollButtons.length; i++) {
                scrollButtons[i].style.backgroundColor = "#bbbbbb";
            }
        }
    }

    const scrollController = {
        count: 0,

        autoChangeOpt: function () {
            if(this.count < 4) {
                this.count++;
            } else {
                this.count = 0;
            }

            scrollView.clearButtons();
            scrollView.selectButton(this.count);

            scrollView.selectImage(this.count);
        },

        changeToWantedOpt: function(selectedOpt) {
            scrollView.selectImage(selectedOpt);

            this.count = selectedOpt;

            scrollView.clearButtons();
            scrollView.selectButton(selectedOpt);
        }

    }

    for (let i = 0; i < scrollButtons.length; i++) {
        scrollButtons[i].addEventListener('click', () => {
            scrollController.changeToWantedOpt(i);
        })
    }

    const scrollLoop = setInterval(() => {
        scrollController.autoChangeOpt();
    }, 4000);

    scrollController.changeToWantedOpt(0);

})();
