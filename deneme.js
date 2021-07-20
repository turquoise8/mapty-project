const cars = []
class car {
    constructor(model, year, km, damage) {
        this.model = model;
        this.year = year;
        this.km = km;
        this.damage = damage;
        cars.push(this)
    }
}

const car1 = new car("fiesta",2006, 2000, false);
const car2 = new car("focus",2011, 90000, true);
const car3 = new car ("kuga",2008, 19000, false)
const car4 = new car ("Bişey",2004, 192000, false)


console.log(cars);



