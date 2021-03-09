// The Date object

/*
  To manage dates in Javascript, we can use the Date constructor and gate a new
  one:
    const myDate = new Date()

  The dates are measured in milliseconds, from 1970 - Unix Era - to now.
  We can get the date, hour, seconds and even milliseconds using methods like
  myDate.getSeconds()/getHours().

  To format the date to your region, use the toLocaleString() method.

  Right now is 14:34.
    console.log(`${myDate.getHours()}:${myDate.getMinutes()}`) // -> 14:34

  You can use this to get the actual day, the day of the week (starting from 0,
  usign the getDay() method), month, year, and so on.

  To get a specific date, pass it as an argument when creating the new Date
  object. Ex:
    const myDate = new Date('December 17, 2004')

    console.log(myDate) // -> Fri Dec 17 2004 00:00:00 GMT-0300 (Brasilia Standard Time)

    It might change depending of the region where you are at.

    Example of a auto-refreshing clock:

      const demo = document.querySelector('p#demo')

      const clockTick = () => {
        const myDate = new Date()

        demo.innerHTML = ''
        demo.innerHTML = myDate.toLocaleString()
      }

      setInterval(clockTick, 1000)


    In this case, the date will refresh every 1s.
*/

