export const analytics = () => {


    // scroll tracking
    window.addEventListener("scroll", function (e) {
        gtag('event', 'scroll', {
            event_category: 'scroll',
            event_label: window.pageYOffset
        });
    }   , false);

    // click tracking
    document.addEventListener("click", function (e) {
        gtag('event', 'click', {
            event_category: 'click',
            event_label: e.target.value
        });
    }
    , false);

    // form tracking
    document.addEventListener("submit", function (e) {
        gtag('event', 'submit', {
            event_category: 'submit',
            event_label: e.target.value
        });
    }
    , false);

    // form tracking
    document.addEventListener("change", function (e) {
        gtag('event', 'change', {
            event_category: 'change',
            event_label: e.target.value
        });
    }   

    , false);

    // // form tracking
    // document.addEventListener("focus", function (e) {
    //     gtag('event', 'focus', {
    //         event_category: 'focus',
    //         event_label: e.target.id
    //     });
    // }
    // , false);

    // // form tracking
    // document.addEventListener("blur", function (e) {
    //     gtag('event', 'blur', {
    //         event_category: 'blur',
    //         event_label: e.target.id
    //     });
    // } 
    // , false);

    // // form tracking
    // document.addEventListener("keydown", function (e) {
    //     gtag('event', 'keydown', {
    //         event_category: 'keydown',
    //         event_label: e.target.id
    //     });
    // }   , false);

    // // form tracking
    // document.addEventListener("keyup", function (e) {
    //     gtag('event', 'keyup', {
    //         event_category: 'keyup',
    //         event_label: e.target.id
    //     });
    // }   
    // , false);

    // // form tracking
    // document.addEventListener("keypress", function (e) {
    //     gtag('event', 'keypress', {
    //         event_category: 'keypress',
    //         event_label: e.target.id
    //     });
    // }   , false);

    // // form tracking
    // document.addEventListener("mouseover", function (e) {
    //     gtag('event', 'mouseover', {
    //         event_category: 'mouseover',
    //         event_label: e.target.id
    //     });
    // }   , false);

    // // // form tracking
    // // document.addEventListener("mouseout", function (e) {
    // //     gtag('event', 'mouseout', {
    // //         event_category: 'mouseout',
    // //         event_label: e.target.id
    // //     });
    // // }   , false);

    // // // form tracking
    // // document.addEventListener("mousedown", function (e) {

    // //     gtag('event', 'mousedown', {
    // //         event_category: 'mousedown',
    // //         event_label: e.target.id
    // //     });
    // // }   , false);

    // // // form tracking
    // // document.addEventListener("mouseup", function (e) {
    // //     gtag('event', 'mouseup', {
    // //         event_category: 'mouseup',
    // //         event_label: e.target.id
    // //     });
    // // }   , false);

    // // // form tracking

    // // document.addEventListener("mousemove", function (e) {
    // //     gtag('event', 'mousemove', {
    // //         event_category: 'mousemove',
    // //         event_label: e.target.id
    // //     });
    // // }   , false);

    // // form tracking
    // // document.addEventListener("DOMContentLoaded", function (e) {
    // //     gtag('event', 'DOMContentLoaded', {
    // //         event_category: 'DOMContentLoaded',
    // //         event_label: e.target.id
    // //     });
    // // }   , false);

    // // form tracking

    // document.addEventListener("load", function (e) {
    //     gtag('event', 'load', {
    //         event_category: 'load',
    //         event_label: e.target.id
    //     });
    // }   , false);

    // // form tracking
    // document.addEventListener("unload", function (e) {
    //     gtag('event', 'unload', {
    //         event_category: 'unload',
    //         event_label: e.target.id
    //     });
    // }   , false);

    // // form tracking
    // document.addEventListener("beforeunload", function (e) {
    //     gtag('event', 'beforeunload', {
    //         event_category: 'beforeunload',
    //         event_label: e.target.id
    //     });
    // }   , false);

    // form tracking
    document.addEventListener("resize", function (e) {
        gtag('event', 'resize', {
            event_category: 'resize',
            event_label: e.target.id
        });
    }   , false);

//     // form tracking

//     document.addEventListener("scroll", function (e) {
//         gtag('event', 'scroll', {
//             event_category: 'scroll',
//             event_label: e.target.id
//         });
//     }   , false);

//     // form tracking
//     document.addEventListener("wheel", function (e) {
//         gtag('event', 'wheel', {
//             event_category: 'wheel',
//             event_label: e.target.id
//         });
//     }   , false);


//     // form tracking
//     document.addEventListener("mousewheel", function (e) {
//         gtag('event', 'mousewheel', {
//             event_category: 'mousewheel',
//             event_label: e.target.id
//         });
//     }   , false);

//     // form tracking
//     document.addEventListener("DOMMouseScroll", function (e) {
//         gtag('event', 'DOMMouseScroll', {
//             event_category: 'DOMMouseScroll',
//             event_label: e.target.id
//         });
//     }   , false);

//     // form tracking
//     document.addEventListener("contextmenu", function (e) {
//         gtag('event', 'contextmenu', {
//             event_category: 'contextmenu',
//             event_label: e.target.id
//         });
//     }   , false);

//     // form tracking


//     document.addEventListener("drag", function (e) {
//         gtag('event', 'drag', {
//             event_category: 'drag',
//             event_label: e.target.id
//         });
//     }   , false);

//     // form tracking
//     document.addEventListener("dragstart", function (e) {
//         gtag('event', 'dragstart', {
//             event_category: 'dragstart',
//             event_label: e.target.id
//         });
//     }   , false);

//     // form tracking
//     document.addEventListener("dragend", function (e) {
//         gtag('event', 'dragend', {
//             event_category: 'dragend',
//             event_label: e.target.id
//         });
//     }   , false);

//     // form tracking
//     document.addEventListener("dragenter", function (e) {
//         gtag('event', 'dragenter', {
//             event_category: 'dragenter',
//             event_label: e.target.id
//         });
//     }   , false);

//     // form tracking
//     document.addEventListener("dragover", function (e) {
//         gtag('event', 'dragover', {
//             event_category: 'dragover',
//             event_label: e.target.id
//         });
//     }   , false);

//     // form tracking
//     document.addEventListener("dragleave", function (e) {
//         gtag('event', 'dragleave', {
//             event_category: 'dragleave',
//             event_label: e.target.id
//         });
//     }   , false);

//     // form tracking
//     document.addEventListener("drop", function (e) {
//         gtag('event', 'drop', {
//             event_category: 'drop',
//             event_label: e.target.id
//         });
//     }
//     , false);

//     // form tracking
//     document.addEventListener("copy", function (e) {
//         gtag('event', 'copy', {
//             event_category: 'copy',
//             event_label: e.target.id
//         });
//     }   , false);

//     // form tracking
//     document.addEventListener("cut", function (e) {
//         gtag('event', 'cut', {
//             event_category: 'cut',
//             event_label: e.target.id
//         });
//     }   , false);

//     // form tracking
//     document.addEventListener("paste", function (e) {
//         gtag('event', 'paste', {
//             event_category: 'paste',
//             event_label: e.target.id
//         });
//     }
//     , false);

//     // form tracking
//     document.addEventListener("change", function (e) {
//         gtag('event', 'change', {
//             event_category: 'change',
//             event_label: e.target.id
//         });
//     }   , false);

//     // form tracking
//     document.addEventListener("select", function (e) {
//         gtag('event', 'select', {
//             event_category: 'select',
//             event_label: e.target.id
//         });
//     }   , false);

// // track all clicks on the page
//     document.addEventListener("click", function (e) {
//         gtag('event', 'click', {
//             event_category: 'click',
//             event_label: e.target.id
//         });
//     }   , false);

// // track everything that is a submit button
//     document.addEventListener("submit", function (e) {
//         gtag('event', 'submit', {
//             event_category: 'submit',
//             event_label: e.target.id
//         });
//     }   , false);

// // track everthing that is a touch event
//     document.addEventListener("touchstart", function (e) {
//         gtag('event', 'touchstart', {
//             event_category: 'touchstart',
//             event_label: e.target.id
//         });
//     }   , false);

//     // track everything that is a video event
//     document.addEventListener("play", function (e) {
//         gtag('event', 'play', {
//             event_category: 'play',
//             event_label: e.target.id
//         });
//     }   , false);

//     // track everything that is a network event
//     document.addEventListener("network", function (e) {
//         gtag('event', 'network', {
//             event_category: 'network',
//             event_label: e.target.id
//         });
//     }   , false);

//     // track time on page
//     document.addEventListener("timeupdate", function (e) {
//         gtag('event', 'timeupdate', {
//             event_category: 'timeupdate',
//             event_label: e.target.id
//         });
//     }   , false);


//     //conversion tracking
//     document.addEventListener("conversion", function (e) {
//         gtag('event', 'conversion', {
//             event_category: 'conversion',
//             event_label: e.target.id
//         });
//     }   , false);

//     // track mouse coordinates
//     document.addEventListener("mousemove", function (e) {
//         gtag('event', 'mousemove', {
//             event_category: 'mousemove',
//             event_label: e.target.id
//         });
//     }   , false);

//     // track select event
//     document.addEventListener("select", function (e) {
//         gtag('event', 'select', {
//             event_category: 'select',
//             event_label: e.target.id
//         });
//     }   , false);
    

}