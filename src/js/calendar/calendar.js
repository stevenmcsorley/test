export const calendar = () => {
  //// if on thank you page, don't run calendar

  /// event document ready nneeds moved to its own place
  document.addEventListener("DOMContentLoaded", function () {
    if (document.querySelector(".booking-confirm")) {
      // if localstorage is set, redirect
      if (!localStorage.getItem("Booking")) {
        // redirect to index.html
        window.location.href = "index.html";
      }
      const modalTransactionId = document.querySelector(
        "[js-modal-transaction-id]"
      );
      modalTransactionId.innerHTML = `${localStorage.getItem("BookingRef")}`;
      const modalTransactionname = document.querySelector(
        "[js-modal-transaction-name]"
      );
      modalTransactionname.innerHTML = `${
        JSON.parse(localStorage.getItem("Booking"))[0]
      }`;
      const modalTransactiondate = document.querySelector(
        "[js-modal-transaction-date]"
      );
      modalTransactiondate.innerHTML = `${
        JSON.parse(localStorage.getItem("Booking"))[3]
      }`;
      const modalTransactiontime = document.querySelector(
        "[js-modal-transaction-time]"
      );
      modalTransactiontime.innerHTML = `${
        JSON.parse(localStorage.getItem("Booking"))[4]
      }`;
      const modalTransactionEmail = document.querySelector(
        "[js-modal-transaction-email]"
      );
      modalTransactionEmail.innerHTML = `${
        JSON.parse(localStorage.getItem("Booking"))[1]
      }`;
      window.localStorage.removeItem("Booking");
      window.localStorage.removeItem("BookingRef");
      return;
    }
  });

  //submit form
  const submitForm = document.querySelector("[js-submit-form]");
  const submitFormButton = document.querySelector("[js-submit-form-button]");

  if (submitFormButton) {
    submitFormButton.addEventListener(
      "click",
      function (event) {
        // check formData for empty fields
        const formData = new FormData(submitForm);
        const formDataArray = Array.from(formData.values());
        const formDataArrayLength = formDataArray.length;
        let emptyFields = 0;
        for (let i = 0; i < formDataArrayLength; i++) {
          if (formDataArray[i] === "") {
            emptyFields++;
          }
        }
        if (emptyFields > 2) {
          event.preventDefault();
          alert("Please fill in all fields");
        } else {
          event.preventDefault();
          let formDataString = "";
          for (let i = 0; i < formDataArrayLength; i++) {
            formDataString += formDataArray[i] + " ";
          }

          // Events in GA has "Category", "Action", "Label" and "Value".
          // Add data to html data-attributes for GA 
          // only need dynamic data for GA - Label and Value
          // in the dev cycle, we will need to add the data to the html - Category, Action 
           
            submitFormButton.setAttribute("data-label", 'booking_date_submit');
            submitFormButton.setAttribute("data-value", sessionStorage.getItem("calendarId"));
          // send to google - the messy way
        //   window.dataLayer.push({
        //     Action: "Booking",
        //     event: "bookingSubmission",
        //     bookingUser: formDataString,
        //     bookingTransactionId: sessionStorage.getItem("calendarId"),
        //   });

          console.log(formDataString);
          //add transaction id to localstorage on sucessful submit

          localStorage.setItem("Booking", JSON.stringify(formDataArray));
          localStorage.setItem("BookingRef", JSON.stringify(`${uuidv4()}`));

          window.location.href = "booking-confirm.html";
        }
      },
      false
    );
  }

  function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
      (
        c ^
        (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
      ).toString(16)
    );
  }

  console.log(uuidv4());

  // create a session storage id for the calendar
  // if it doesn't exist, create it
  if (!sessionStorage.getItem("calendarId")) {
    sessionStorage.setItem("calendarId", uuidv4());
  }

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
  /////////////////////////////////////////////////////SHOW MODAL/////////////////////////////////////////
  function showModal() {
    const cells = document.querySelectorAll(".cell:not(.cell-disabled)");
    cells.forEach(function (cell) {
      cell.addEventListener("click", function () {
        const modal = document.querySelector(".modal");
        modal.classList.add("show-modal");
        const modalDate = document.querySelector("[js-data-booking-date]");
        // add date to input value
        const formatdate = cell.dataset.bookingDate.replace(/[() -]/g, "/");
        modalDate.value = `${formatdate}`;
        // add date to modal
        const modalDateText = document.querySelector("[js-modal-date]");
        modalDateText.innerHTML = `${formatdate}`;

        /// call datalayer
        /// anaytics capture date click
        // console.log(window.dataLayer);
        // window.dataLayer.push({
        //   Action: "BookingDateClick",
        //   event: "booking_date_click",
        //   bookingDate: modalDateText.innerHTML,
        //   bookingSession: sessionStorage.getItem("calendarId"),
        // });
        console.log(modalDateText.innerHTML);
        // console.log(window.dataLayer);
      });
    });
    closeModal();
  }

  /////////////////////////////////////////////////////END SHOW MODAL//////////////////////////////////////

  /////////////////////////////////////////////////////CLODE MODAL//////////////////////////////////////
  function closeModal() {
    const close = document.querySelector(".modal-close");
    if (!close) {
      console.log("no close");
      return false;
    }

  

    close.addEventListener("click", function () {
        console.log("close");
      const modalDateText = document.querySelector("[js-modal-date]");
      const modal = document.querySelector(".modal");
      close.setAttribute("data-label", 'booking_date_cancel');
      close.setAttribute("data-value",  modalDateText.innerHTML)
      modal.classList.remove("show-modal");

    //   window.dataLayer.push({
    //     Action: "BookingDateCancel",
    //     event: "booking_date_cancel",
    //     bookingDate: modalDateText.innerHTML,
    //     bookingSession: sessionStorage.getItem("calendarId"),
    //   });
    });
  }

  /////////////////////////////////////////////////////END CLODE MODAL//////////////////////////////////////

  /////////////////////////////////////////////////////SHOW CALENDAR//////////////////////////////////////

  function showCalendar(month, year) {
    console.log("calendar");
    let cells;
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

            // if before today, disable the cell
            if (
              year < today.getFullYear() ||
              (year === today.getFullYear() && month < today.getMonth()) ||
              (year === today.getFullYear() && month === today.getMonth() &&
                date < today.getDate())
            ) {
              cell.classList.add("cell-disabled");
            }

          if (
            date === today.getDate() &&
            year === today.getFullYear() &&
            month === today.getMonth()
          ) {
            cell.classList.add("today");
          } // color today's date
          cell.appendChild(cellText);
          cell.setAttribute("data-booking-date", `${date}-${month}-${year}`);
          cell.setAttribute("data-action", 'Booking');
            cell.setAttribute("data-label", 'booking_date_choose');
            cell.setAttribute("data-value", `${date}-${month}-${year}`);
            cell.setAttribute("data-event", "booking_date_click");
          // data-action="Booking" data-event="submission"
          row.appendChild(cell);
          date++;
        }
      }

      tbl.appendChild(row); // appending each row into calendar body.
    }

    // set each cell with an event listener
    cells = document.querySelectorAll(".cell");
    // console.log(cells);
    /// show modal event set up and waiting
    showModal();
  }

  /////////////////////////////////////////////////////END SHOW CALENDAR//////////////////////////////////////

  // check how many days in a month code from https://dzone.com/articles/determining-number-days-month
  function daysInMonth(iMonth, iYear) {
    return 32 - new Date(iYear, iMonth, 32).getDate();
  }
};
