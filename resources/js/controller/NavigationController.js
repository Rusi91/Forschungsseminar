import NavigationView from "../view/NavigationView.js";
import VideoSectionView from "../view/VideoSectionView.js";

var videoSectionView,
navigationView;

function openVideoSection(){
    videoSectionView.show();
    navigationView.highlightVideoNav();
}

class NavigationController {

    constructor(navigationSectionEl, videoSectionEl){
        navigationView = new NavigationView(navigationSectionEl);
        videoSectionView = new VideoSectionView(videoSectionEl);
    }

    init(){
        navigationView.addEventListener("NavVideoClicked", openVideoSection());
    }

}

export default NavigationController;