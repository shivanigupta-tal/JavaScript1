class Car{
    carDetails(name, weight, modal, type)
    {
         this.carname= name 
         this.carweight= weight
         this.carmodal= modal
         this.cartype= type

    }
    display(){
        console.log(this.carname, this.carweight, this.carmodal, this.cartype)
    }
}

let car1 = new Car();
let car2 = new Car();
car1.carDetails("BMW", 200, 2024,"Petrol")
car2.carDetails("Verna", 298, 2025,"Diesel")

car1.display()
car2.display()



