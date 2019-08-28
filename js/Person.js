 import User from './Student.js';
 
 class Person extends User{
    welcome(){
        console.log("Hi b yon");
    }
}
const p1 = new Person();
p1.welcome();
p1.setFirstname("yon");
p1.setLastname("Rith");
p1.setAge(100);
p1.getFirstName();
p1.getLastName();
p1.getAge();