export default class User {
    setFirstname(fname){
        this.mFname = fname;
    }
    setLastname(lname){
        this.mLname =lname;
    }
    setAge(age){
        this.mAge = age;
    }
    getFirstName(){
        console.log(this.mFname);
    }
    getLastName (){
        console.log(this.mLname);
    }
    getAge(){
        console.log(this.mAge);
    }
}

