/// NEEDS REFACTORING
// JUST IDEAS

export const scroll = () => {
  function debounce(fn, ms) {
    // https://remysharp.com/2010/07/21/throttling-function-calls
    var time = null;
    return function () {
      var a = arguments,
        t = this;
      clearTimeout(time);
      time = setTimeout(function () {
        fn.apply(t, a);
      }, ms);
    };
  }
  function throttle(fn, ms) {
    // Ryan Taylor comment - https://remysharp.com/2010/07/21/throttling-function-calls
    var time,
      last = 0;
    return function () {
      var a = arguments,
        t = this,
        now = +new Date(),
        exe = function () {
          last = now;
          fn.apply(t, a);
        };
      clearTimeout(time);
      now >= last + ms ? exe() : (time = setTimeout(exe, ms));
    };
  }
  const scrollP = document.querySelector(".scroll-progress");

  // Global 
  let winY = window.innerHeight || document.documentElement.clientHeight;

  /// query selector all to an array of elements
  const cards = Array.from(document.querySelectorAll("[data-industry]"));

//   // add class hidden to all cards not in viewport

//   // add class to an array when its not on the viewport
//   const addClassNotInView = (array, className) => {
//     array.forEach((element) => {
//       if (element.getBoundingClientRect().top < 0) {
//         element.classList.add(className);
//       }
//     });
//   };

//   // add class to an array div when it enters the viewport from the bottom
//   const addClass = (elements, classnames) => {
//     elements.forEach((element) => {
//       if (element.getBoundingClientRect().bottom < window.innerHeight) {
//         element.classList.add(...classnames);
//       }
//     });
//   };
//   // remove class to an array div when it leaves the viewport from the bottom
//   const removeClass = (elements) => {
//     elements.forEach((element) => {
//       if (element.getBoundingClientRect().bottom > window.innerHeight) {
//         element.classList.remove("in-viewport");
//       }
//     });
//   };

//   // add class to an array div when it enters the viewport from the top
//   const addClassTop = (elements) => {
//     elements.forEach((element) => {
//       if (element.getBoundingClientRect().top < window.innerHeight) {
//         element.classList.add("in-viewport-top");
//       }
//     });
//   };

//   // remove class to an array div when it leaves the viewport from the top
//   const removeClassTop = (elements) => {
//     elements.forEach((element) => {
//       if (element.getBoundingClientRect().top > window.innerHeight) {
//         element.classList.remove("in-viewport-top");
//       }
//     });
//   };

//   const isInViewport = (el) => {
//     const rect = el.getBoundingClientRect();
//     console.log("divTop", rect.bottom);
//     return (
//       rect.top >= 0 &&
//       rect.left >= 0 &&
//       rect.bottom <=
//         (window.innerHeight || document.documentElement.clientHeight) &&
//       rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
//   };

//   const addClassToArray = (array, classNameInViewport) => {
//     array.forEach(function (item) {
//       if (isInViewport(item)) {
//         item.classList.add(...classNameInViewport);
//       }
//     });
//   };

//   // add class to a div when in viewport
//   const addClassToDiv = (div, className) => {
//     const divTop = div.getBoundingClientRect().top;
//     const divBottom = div.getBoundingClientRect().bottom;
//     const windowHeight = window.innerHeight;
//     if (divTop < windowHeight && divBottom > 0) {
//       div.classList.add(...className);
//     } else {
//       div.classList.remove(...className);
//     }
//   };

  // if clicked on js-data-select and remove event listener
  const toRemove = ["visualhidden", "animate__animated", "animate__fadeIn"];
  const industrySelect = document.querySelector("[js-data-select]");
  if (industrySelect) {
    industrySelect.addEventListener("click", () => {
      /// remove class hidden from all cards
      document.removeEventListener("scroll", addClassToArrayElements);
      cards.forEach((card) => {
        card.classList.remove(...toRemove);
      });
    });
  }

  const hideElementsNotInView = (array, className) => {
   
    array.forEach((el) => {
      if (el.getBoundingClientRect().top > winY) {
        //   let hid = ["visualhidden"];
        el.classList.add(...className);
      }
    });
  };

  const addClassToArrayElements = (array, className) => {
    array.forEach((el) => {
        if (
            el.getBoundingClientRect().top < winY &&
            el.classList.contains("visualhidden")
        ) {
            el.classList.remove("visualhidden");
        //   let animClass = ["animate__animated", "animate__fadeIn"];
          el.classList.add(...className);
        }
      });
  }

  /// add class to a div when in viewport on dom load
  document.addEventListener(
    "DOMContentLoaded",
    () => {
      hideElementsNotInView(cards, ["visualhidden"]);
    },
    false
  );

  // add class to a div when in viewport on scroll
  document.addEventListener("scroll", function (e) {
    addClassToArrayElements(cards, ["animate__animated", "animate__fadeIn"]);
  });

//   // add class to a div when in viewport
//   const addClassToDivsWithDelayAndThrottleAndDebounce = (
//     divs,
//     className,
//     delay
//   ) => {
//     divs.forEach((div) => {
//       setTimeout(() => {
//         addClassToDiv(div, className);
//       }, delay);
//     });
//   };

//   let lastKnownScrollPosition = 0;
// //   let winY = 0;

//   document.addEventListener("scroll", function (e) {
//     lastKnownScrollPosition = window.scrollY;
//     // const scrollP = document.querySelector(".scroll-progress");
//     winY = window.innerHeight || document.documentElement.clientHeight;
//     let docY = document.documentElement.offsetHeight;
//     let scrollY = window.scrollY || window.pageYOffset;
//     let scrollPercent = scrollY / (docY - winY);
//     let scrollPercentRounded = Math.round(scrollPercent * 100);
//     let scrollPercentRoundedInt = parseInt(scrollPercentRounded);
//     console.log(scrollPercentRounded);

//     // scrollP.style.width = `${scrollPercentRoundedInt}%`;
//   });
};
