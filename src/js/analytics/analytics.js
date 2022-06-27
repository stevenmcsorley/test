export const analytics = () => {
  console.log("analytics", window.dataLayer);
  const eventList = ["change", "click"];
  // Events in GA has "Category", "Action", "Label" and "Value".
  // https://developers.google.com/analytics/devguides/collection/gtagjs/events
  // Trigger = custom event or by Category ie: event name
  // listein for all addEventListener and push to dataLayer if defined
  document.addEventListener("DOMContentLoaded", function () {
    eventList.forEach((event) => {
    document.addEventListener(event, function (e) {
      console.log("click", e.target);
      let events = { ...e.target.dataset };
      console.log("event pre sanitize", events);
      if (Object.keys(events).length) {
        console.log("event sanitized", events);
        window.dataLayer.push({
          event: "trackevent",
          eventName: events.event,
          Action: events.action,
          Label: events.label,
          Value: events.value,
          Category: events.category,
        });
      }
    });
});
  });
};
