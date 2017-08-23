class StorieView {
    constructor() {
        this.fatherElement = document.getElementById('other-stories');
    }

    render(){
        this.fatherElement.innerHTML +=
        `
        <div class="storie">
            <p class="storie-text">Mauris sit amet venenatis metus. Sed eu velit ornare, ornare magna eu, euismod arcu. Mauris sit amet venenatis metus.</p>
            <p class="storie-date">6th April 2000</p>
            <a class="read-more" href="#">Read The Full Story &raquo</a>
            <img src="Assets/Images/gray-img.jpg" class="storie-img"><img>
        </div>
        `
    }
}
