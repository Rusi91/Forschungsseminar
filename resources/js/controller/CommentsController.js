import CommentSectionView from "../view/CommentSectionView.js";

var commentSectionView;

function updateCommentSection(){
    commentSectionView.addComment(commentSectionView.getInput());
    commentSectionView.resetInput();
}

class CommentsController {

    constructor (commentSectionEl){
        commentSectionView = new CommentSectionView(commentSectionEl);
    }

    init(){
        commentSectionView.addEventListener("SaveButtonClicked", updateCommentSection);
    }
}

export default CommentsController;