/*diff between var and let 
var x= 10;
var x= 20;
let y =30;
y =40
console.log(x)
*/


/*class concept
class student{
          student1(){
                  this.sname ="Shivani";
                  this.sage= 23
                  this.sgrade= "A+"

          }
          display(){
            console.log(this.sname, this.sage, this.sgrade)
          }

}

let stu =new student();
stu.student1();
stu.display()
*/

//Use of constructor : no need to call the function

class student{
    constructor(name,age,grade){
            this.sname =name;
            this.sage= age
            this.sgrade= grade

    }
    display(){
      console.log(this.sname, this.sage, this.sgrade)
    }

}

let stu =new student("ShivaniGupta", 25, "A+");
let stu1 = new student("Vikash", 30, "B")
stu.display()
stu1.display()


