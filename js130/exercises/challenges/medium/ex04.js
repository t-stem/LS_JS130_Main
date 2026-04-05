class Meetup {
  static FIRST_DAY_OF_MONTHONTH = 1;
  static DAYS_IN_WEEK = 7;

  static ORDINAL_OFFSETS_IN_WEEKS = {
    first: 0, 
    second: 1, 
    third: 2, 
    fourth: 3, 
    fifth: 4, // may not happen in every month
  }

  static ORDINAL_SCHEDULES = Object.keys(Meetup.ORDINAL_OFFSETS_IN_WEEKS);

  static WEEKDAY_NAMES = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

  static TEENTHS = [13, 14, 15, 16, 17, 18, 19];

  constructor(year, month) {
    this.year = year;
    this.month = month;
    this.zeroBasedMonthIndex = this.month - 1;
  }

  isValidDayOfMonth(dayOfMonth) {
    return dayOfMonth > 0 && dayOfMonth <= this.numLastDayOfMonth();
  }

  nameFirstWeekdayOfMonth() {
    let weekdayIndex = new Date(this.year, this.zeroBasedMonthIndex, Meetup.FIRST_DAY_OF_MONTHONTH).getDay();
    return Meetup.WEEKDAY_NAMES[weekdayIndex];
  }

  numLastDayOfMonth() {
    return new Date(this.year, this.month, 0).getDate(); // using month instead of zeroBasedMonthIndex to get the next month;
  }

  offsetWeekdayToFirstOfMonth(weekdayName) {
    let firstOfMonthWeekdayName = this.nameFirstWeekdayOfMonth().toLowerCase()
    let offsetDays = Meetup.WEEKDAY_NAMES.indexOf(weekdayName) - Meetup.WEEKDAY_NAMES.indexOf(firstOfMonthWeekdayName);
    return offsetDays >= 0 ? offsetDays : offsetDays + Meetup.DAYS_IN_WEEK;
  }

  getDayOfMonthIfOrdinal(weekdayName, schedule) {
    let targetDaysAfterFirstOfMonth = this.offsetWeekdayToFirstOfMonth(weekdayName);
    return Meetup.FIRST_DAY_OF_MONTHONTH + targetDaysAfterFirstOfMonth + Meetup.ORDINAL_OFFSETS_IN_WEEKS[schedule] * Meetup.DAYS_IN_WEEK;
  }

  getDayOfMonthIfLast(weekdayName) {
    let daysOffsetFromFirstOfMonth = this.offsetWeekdayToFirstOfMonth(weekdayName);
    let firstWeekdayDayOfMonth = Meetup.FIRST_DAY_OF_MONTHONTH + daysOffsetFromFirstOfMonth;

    for (let weeksAfter = Meetup.ORDINAL_OFFSETS_IN_WEEKS['fifth']; weeksAfter >= Meetup.ORDINAL_OFFSETS_IN_WEEKS['fourth']; weeksAfter -= 1) {
      let weekdayDayOfMonth = firstWeekdayDayOfMonth + weeksAfter * Meetup.DAYS_IN_WEEK;
      if (this.isValidDayOfMonth(weekdayDayOfMonth)) return weekdayDayOfMonth;
    }

    return null;
  }

  getDayOfMonthIfTeenth(weekdayName) {
    for (let teenth of Meetup.TEENTHS) {
      let currDayIndex = new Date(this.year, this.zeroBasedMonthIndex, teenth).getDay();
      let currDayName = Meetup.WEEKDAY_NAMES[currDayIndex];

      if (currDayName === weekdayName) return teenth;
    }

    return null;
  }

  day(weekdayName, schedule) {
    weekdayName = weekdayName.toLowerCase();
    schedule = schedule.toLowerCase();
    let targetDayOfMonth;

    if (Meetup.ORDINAL_SCHEDULES.includes(schedule)) {
      targetDayOfMonth = this.getDayOfMonthIfOrdinal(weekdayName, schedule);

      targetDayOfMonth = this.isValidDayOfMonth(targetDayOfMonth) ? targetDayOfMonth : null;

    } else if (schedule === 'last') {
      targetDayOfMonth = this.getDayOfMonthIfLast(weekdayName);

    } else {
      targetDayOfMonth = this.getDayOfMonthIfTeenth(weekdayName); 

    }

    return targetDayOfMonth === null ? null : new Date(this.year, this.zeroBasedMonthIndex, targetDayOfMonth);
  }
}

module.exports = Meetup;