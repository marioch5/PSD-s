class StoriesController {
    constructor() {
        this.storieView = new StorieView();
    }

    createStories(){
        for (let i = 0; i < 6; i++) {
            this.storieView.render();
        }
    }
}
