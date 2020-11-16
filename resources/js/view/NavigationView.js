import View from "./View.js";
import { Event } from "../utils/Observable.js";

function broadcastVideoSelEvent() {
    let event = new Event("NavVidoClicked");
    this.notifyAll(event);
}

class NavigationView extends View {

    constructor(el){
        super();
        this.setElement(el);
        this.navVideoEl = this.el.querySelector(".nav-point.video");

        this.navVideoEl.addEventListener("click", broadcastVideoSelEvent.bind(this));
    }

    highlightVideoNav(){
        this.navVideoEl.classList.add("selected");
    }
}

export default NavigationView;