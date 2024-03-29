// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
  events = {};
  // Register an event handler
  on(eventName, callback) {
    this.events[eventName] = this.events[eventName]
      ? [...this.events[eventName], callback]
      : [callback];
  }

  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName) {
    this.events[eventName].forEach((cb) => cb());
  }

  // Remove all event handlers associated
  // with the given eventName
  off(eventName) {
    this.events[eventName] = [];
    // delete this.events[eventName];
  }
}

module.exports = Events;
