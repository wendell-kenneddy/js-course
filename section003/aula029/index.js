// Switch case

/*
  Switch cases are a conditional strucutre, like if and else, but with some
  differences. It takes one value and checks if any of the given cases match,
  then executes the code. If none condition matches, it executes the default
  statement. Ex:

    const myDate = new Date()

    function getWeekDay(date) {
      const weekDay = date.getDay()

      switch (date) {
        case 0:
          return 'It\'s sunday.'
        case 1:
          return 'It\'s monday.'
        case 2:
          return 'It\'s tuesday.'
        case 3:
          return 'It\'s wednesday.'
        case 4:
          return 'It\'s thursday.'
        case 5:
          return 'It\'s friday.'
        case 5:
          return 'It\'s saturday.'
        default:
          return 'Undefined date.'
      }
    }

    console.log(getWeekDay(myDate)) // -> It's tuesday (obviously according to
    the day of this commit)

  So, this is a switch case. Instead of using return to break out of the switch
  case and avoiding it to execute further code, you could use the 'break' word
  to do so. If neither words are used, the switch case will continue executing
  until it finds a break or default case.
*/
