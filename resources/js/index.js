/* eslint-env browser */

import VideoPlayer from "./utils/VideoPlayer.js";
import NavigationController from "./controller/NavigationController.js";
import CommentsController from "./controller/CommentsController.js";
import AmbilightContainer from "../../vendors/ambilight.js/index.js";

var ambiPlayer;

function init() {
    initNavigation();
    initCommentSection();
    initVideoPlayer();
}

function initNavigation(){
    let navigationSectionEl = document.querySelector(".navigation-bar"),
    videoSectionEl = document.querySelector(".video-section"),
    inprintSectionEl = document.querySelector(".inprint"),
    privacySectionEl = document.querySelector(".privacy"),
    navigationController = new NavigationController(navigationSectionEl, videoSectionEl, inprintSectionEl, privacySectionEl);
    navigationController.init();
}

function initCommentSection(){
    let commentsSectionEl = document.querySelector(".comment-section"),
    commentsController = new CommentsController(commentsSectionEl);
    commentsController.init();
}

function initVideoPlayer(){
    let videoEl = document.querySelector("#player"),
    player = new VideoPlayer(videoEl);
    player.addEventListener("videoFrameChanged", onVideoFrameChanged);
    ambiPlayer = new AmbilightContainer(videoEl);
}

function onVideoFrameChanged(event) {
  ambiPlayer.update(event.data);
}

init();