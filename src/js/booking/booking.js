import { uuidv4 } from "../uuidv4/uuidv4.js";
export const booking = () => {
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

          submitFormButton.setAttribute("data-label", "booking_date_submit");
          submitFormButton.setAttribute(
            "data-value",
            sessionStorage.getItem("calendarId")
          );
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
};
