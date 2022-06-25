export const calendar = () => {
  let tbl = document.getElementById("calendar-body"); // body of the calendar
  if (!tbl) {
    return false;
  }
  let today = new Date();
  let currentMonth = today.getMonth();
  let currentYear = today.getFullYear();
  let selectYear = document.getElementById("year");
  let selectMonth = document.getElementById("month");

  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let monthAndYear = document.getElementById("monthAndYear");
  showCalendar(currentMonth, currentYear);

  const next = document.getElementById("next");
  const prev = document.getElementById("prev");

  next.addEventListener(
    "click",
    function () {
      currentYear = currentMonth === 11 ? currentYear + 1 : currentYear;
      currentMonth = (currentMonth + 1) % 12;
      showCalendar(currentMonth, currentYear);
    },
    false
  );

  prev.addEventListener(
    "click",
    function () {
      currentYear = currentMonth === 0 ? currentYear - 1 : currentYear;
      currentMonth = currentMonth === 0 ? 11 : currentMonth - 1;
      showCalendar(currentMonth, currentYear);
    },
    false
  );

  document.addEventListener(
    "DOMContentLoaded",
    function () {
      selectYear.addEventListener(
        "change",
        function () {
          currentYear = parseInt(selectYear.value);
          currentMonth = parseInt(selectMonth.value);
          showCalendar(currentMonth, currentYear);
        },
        false
      );

      selectMonth.addEventListener(
        "change",
        function () {
          currentYear = parseInt(selectYear.value);
          currentMonth = parseInt(selectMonth.value);
          showCalendar(currentMonth, currentYear);
        },
        false
      );
    },
    false
  );

  function showCalendar(month, year) {
    let firstDay = new Date(year, month).getDay();

    // clearing all previous cells
    tbl.innerHTML = "";

    // filing data about month and in the page via DOM.
    monthAndYear.innerHTML = months[month] + " " + year;
    selectYear.value = year;
    selectMonth.value = month;

    // creating all cells
    let date = 1;
    for (let i = 0; i < 6; i++) {
      // creates a table row
      let row = document.createElement("div"); //tr
      row.classList.add("row");

      //creating individual cells, filing them up with data.
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDay) {
          let cell = document.createElement("div"); // td
          cell.classList.add("cell-null");
          let cellText = document.createTextNode("");
          cell.appendChild(cellText);
          row.appendChild(cell);
        } else if (date > daysInMonth(month, year)) {
          break;
        } else {
          let cell = document.createElement("div"); // td
          cell.classList.add("cell");
          let cellText = document.createTextNode(date);
          if (
            date === today.getDate() &&
            year === today.getFullYear() &&
            month === today.getMonth()
          ) {
            cell.classList.add("today");
          } // color today's date
          cell.appendChild(cellText);
          cell.setAttribute("data-booking-date", `${date}-${month}-${year}`);
          row.appendChild(cell);
          date++;
        }
      }

      tbl.appendChild(row); // appending each row into calendar body.
    }
  }

  // check how many days in a month code from https://dzone.com/articles/determining-number-days-month
  function daysInMonth(iMonth, iYear) {
    return 32 - new Date(iYear, iMonth, 32).getDate();
  }

  /// on click cell show modal
  const cells = document.querySelectorAll(".cell");
  cells.forEach(function (cell) {
    cell.addEventListener("click", function () {
      const modal = document.querySelector(".modal");
      modal.classList.add("show");
      /// call datalayer
      /// anaytics capture date click
      window.dataLayer.push({
        pageCategory: "Booking",
        bookingDate: cell.dataset.bookingDate,
        bookingSession: "",
      });
    });
  });
  const close = document.querySelector(".close");
  close.addEventListener("click", function () {
    const modal = document.querySelector(".modal");
    modal.classList.remove("show");
  });
  const modal = document.querySelector(".modal");
  window.addEventListener("click", function (event) {
    if (event.target == modal) {
      modal.classList.remove("show");
    }
  });
};
