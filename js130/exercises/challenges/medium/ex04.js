class Meetup {
  static FIRST_OF_MONTH = 1;
  static DAYS_IN_WEEK = 7;

  static TARGET_ORDINALS = {
    first: 0, 
    second: 1, 
    third: 2, 
    fourth: 3, 
    fifth: 4, // may not happen in every month
  }
  
  static DAYS_OF_THE_WEEK = {
    sunday: 1,
    monday: 7,
    tuesday: 6,
    wednesday: 5,
    thursday: 4,
    friday: 3,
    saturday: 2,
  }

  static WEEKDAY_NAMES = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

  static TEENTHS = [13, 14, 15, 16, 17, 18, 19];

  constructor(year, month) {
    this.year = year;
    this.month = month;
    this.monthIndex = this.month - 1;
  }

  isValidDate(date) {
    return date > 0 && date <= this.getDateOfLast();
  }

  getDayOfFirst() {
    let weekdayIndex = new Date(this.year, this.monthIndex, Meetup.FIRST_OF_MONTH).getDay();
    return Meetup.WEEKDAY_NAMES[weekdayIndex];
  }

  getDateOfLast() {
    return new Date(this.year, this.month, 0).getDate(); // using month instead of monthIndex to get the next month;
  }

  daysDiffBetweenWeekdayAndFirstOfMonth(weekDay) {
    let dayOfFirst = this.getDayOfFirst().toLowerCase()
    let diff = Meetup.WEEKDAY_NAMES.indexOf(weekDay) - Meetup.WEEKDAY_NAMES.indexOf(dayOfFirst);
    return diff >= 0 ? diff : diff + Meetup.DAYS_IN_WEEK;
  }

  getDateIfOrdinal(weekDay, targetDay) {
    let targetDaysAfterFirstOfMonth = this.daysDiffBetweenWeekdayAndFirstOfMonth(weekDay);
    return Meetup.FIRST_OF_MONTH + targetDaysAfterFirstOfMonth + Meetup.TARGET_ORDINALS[targetDay] * Meetup.DAYS_IN_WEEK;
  }

  getDateIfLast(weekDay) {
    let targetDaysAfterFirstOfMonth = this.daysDiffBetweenWeekdayAndFirstOfMonth(weekDay);
    let dateOfFirstWeekdayOfMonth = Meetup.FIRST_OF_MONTH + targetDaysAfterFirstOfMonth;

    for (let weeksAfter = Meetup.TARGET_ORDINALS['fifth']; weeksAfter >= Meetup.TARGET_ORDINALS['fourth']; weeksAfter -= 1) {
      let dateOfWeekday = dateOfFirstWeekdayOfMonth + weeksAfter * Meetup.DAYS_IN_WEEK;
      if (this.isValidDate(dateOfWeekday)) return dateOfWeekday;
    }

    return null;
  }

  getDateIfTeenth(targetDay) {
    for (let teenth of Meetup.TEENTHS) {
      let currDayIndex = new Date(this.year, this.monthIndex, teenth).getDay();
      let currDay = Meetup.WEEKDAY_NAMES[currDayIndex];

      if (currDay === targetDay) return teenth;
    }

    return null;
  }

  day(weekDay, targetDay) {
    weekDay = weekDay.toLowerCase();
    targetDay = targetDay.toLowerCase();
    let targetDate;
    const targetOrdinals = Object.keys(Meetup.TARGET_ORDINALS);

    if (targetOrdinals.includes(targetDay)) {
      targetDate = this.getDateIfOrdinal(weekDay, targetDay);

      targetDate = this.isValidDate(targetDate) ? targetDate : null;

    } else if (targetDay === 'last') {
      targetDate = this.getDateIfLast(weekDay, targetDay);

    } else {
      targetDate = this.getDateIfTeenth(weekDay, targetDay); 

    }

    return targetDate === null ? null : new Date(this.year, this.monthIndex, targetDate);
  }
}

module.exports = Meetup;