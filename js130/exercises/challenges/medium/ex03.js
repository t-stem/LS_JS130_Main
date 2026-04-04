class Clock {
  static HOURS_IN_DAY = 24;
  static MINS_IN_HOUR = 60;
  static MINS_IN_DAY = Clock.MINS_IN_HOUR * Clock.HOURS_IN_DAY; // IMPROVEMENT: added
  
  static validHour(hour) {
    return !Number.isNaN(hour) && hour >= 0 && hour < Clock.HOURS_IN_DAY;
  }

  static validMin(min) {
    return !Number.isNaN(min) && min >= 0 && min < Clock.MINS_IN_HOUR;
  }

  static makeTimeStr(time) {
    let timeStr = String(time); // FIX: added let declaration
    return timeStr.length === 1 ? '0' + timeStr : timeStr; // FIX: timeStr instead of time
  }
  
  static at(hour, min = 0) {
    if (Clock.validHour(hour) && Clock.validMin(min)) {
      return new Clock(hour, min);
    } else {
      throw Error('Invalid time');
    }
  }

  static wrapHour(hour) {
    let days = Math.floor(hour / Clock.HOURS_IN_DAY);
    return [days, hour - days * Clock.HOURS_IN_DAY];
  }
  
  static wrapMin(min) {
    let hours = Math.floor(min / Clock.MINS_IN_HOUR);
    return [hours, min - hours * Clock.MINS_IN_HOUR];
  }

  constructor(hour, min) {
     this.hour = hour;
     this.min = min;
  }

  add(extraMins) {
    let [extraHours, wrappedMins] = Clock.wrapMin(this.min + extraMins);
    let [extraDays, wrappedHours] = Clock.wrapHour(this.hour + extraHours);
    return new Clock(wrappedHours, wrappedMins);
  }

  subtract(fewerMins) {
    let fewerMinsWrapped = fewerMins % Clock.MINS_IN_DAY; // FIX: accounted for feweMins adding up to more than one day
    let extraMins = Clock.MINS_IN_DAY - fewerMinsWrapped;
    return this.add(extraMins);
  }

  toString() {
    return Clock.makeTimeStr(this.hour) + ':' + Clock.makeTimeStr(this.min);
  }

  isEqual(otherClock) {
    return this.hour === otherClock.hour && this.min === otherClock.min;
  }
}

module.exports = Clock;