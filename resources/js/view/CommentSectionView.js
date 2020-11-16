import View from "./View.js";

function broadcastSaveEvent(){
    let event = new Event("SaveButtonClicked");
    this.notifyAll(event);
}

class CommentSectionView extends View {

    constructor(el) {
        super();
        this.setElement(el);
        this.commentInput = this.el.querySelector(".description-input");
        this.savedComments = this.el.querySelector(".saved-comments");
        this.saveButton = this.el.querySelector(".button.save-comment");

        this.saveButton.addEventListener("click", broadcastSaveEvent.bind(this));
    }

    getInput(){
        return " Notiz: " + this.commentInput.value;
    }

    resetInput(){
        this.commentInput.value = "";
    }

    addComment(commentString){
        let comment = document.createElement("li");
        comment.appendChild(document.createTextNode(commentString));
        this.savedComments.appendChild(comment);
    }
    
}

export default CommentSectionView;