/// NEEDS REFACTORING
// JUST IDEAS

export const scroll = () => {

  // Global
  let winY = window.innerHeight || document.documentElement.clientHeight;

  /// query selector all to an array of elements
  const sections = Array.from(document.querySelectorAll(".js-view"));

  let motionQuery = window.matchMedia("(prefers-reduced-motion)");

  const handleReduceMotionChanged = () => {
    if (!motionQuery.matches) {
      //not reduced behaviour;
      /// add class to a div when in viewport on dom load
      document.addEventListener(
        "DOMContentLoaded",
        () => {
          hideElementsNotInView(sections, ["visualhidden"]);
        },
        false
      );

      // add class to a div when in viewport on scroll
      document.addEventListener("scroll", function (e) {
        addClassToArrayElements(sections, [
          "animate__animated",
          "animate__fadeIn",
        ]);
      });
    } else {
      console.log("reduced motion", motionQuery);
      document.removeEventListener("scroll", addClassToArrayElements);
      document.removeEventListener("DOMContentLoaded", hideElementsNotInView);
    }
  };

  motionQuery.addEventListener("change", handleReduceMotionChanged);
  handleReduceMotionChanged();

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

  const toRemove = ["visualhidden", "animate__animated", "animate__fadeIn"];
  const industrySelect = document.querySelector("[js-data-select]");
  if (industrySelect) {
    industrySelect.addEventListener("click", () => {
      /// remove class hidden from all sections
      sections.forEach((card) => {
        card.classList.remove(...toRemove);
      });
    });
    // remove event listener from the scroll event
    document.removeEventListener("scroll", addClassToArrayElements);
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
  };
};
