// Objects

/*
  Objects are pretty much the lifeblood of Javascript, which is a prototyped and
  Object-Oriented language.

  Objects are data types that can store many values, but unlike arrays, the
  values receive an identifier, wich is a property. So, for example, you can
  create an object called car, and his car obviously has a color, width, height
  and etc.
    const myCar = {color: 'red', width: 'big', height: '1.5m'}
    console.log(myCar.color) // -> red

  Access an object property is like accessing any other method. In fact, you can
  create your own methods to your object too.
    const myCar = {
      color: 'red',
      width: 'big',
      height: '1.5m',

      printColor() {
        console.log(this.color)
      }
    }

    myCar.printColor() // -> red

  But let's say you have to create many objects, and these objects share some
  common properties. Then you could use a Factory Function or a Constructor.
    Factory Function ex:
      function newCar (name, color, width, height) {
        return {
          name,
          color,
          width,
          height,

          printColor() {
            console.log(this.color)
          }
        }
      }

      const vrumVrum = newCar('rapidBoy', 'red', 'big', 'the highest in the room')
      console.log(vrumVrum) // -> the whole object

  Constructor ex:
    function Car (name, color, width, height) {
      this.name = name
      this.color = color
      this.width = width
      this.height = height

      this.printColor = () => console.log(this.color)
    }

    const vrumVrum = new Car ('rapidBoy', 'red', 'big', 'the smallest in the
    room')
    console.log(vrumVrum) // -> The whole object again
*/