class EventNotifer {
  constructor() {
    this.registeredEvents = {};
  }

  register(event, action) {
    this.registeredEvents[event] = (this.registeredEvents[event] || []);
    this.registeredEvents[event].push(action);
  }

  notify(event, ...args) {
    this.registeredEvents[event].forEach((action) => {
      action(...args);
    });
  }
}

exports.EventNotifer = EventNotifer;

// const main = () => {
//   const eventNotifer = new EventNotifer();

//   eventNotifer.register('laugh-in-joy', laugh);
//   eventNotifer.register('cry-in-sad', cry);

//   eventGenerator(2, eventNotifer, 'laugh-in-joy');
//   eventGenerator(5, eventNotifer, 'cry-in-sad');
// }

// const eventGenerator = (interval, callback) => {
//   return setInterval(callback, 1000 * interval);
// };
