class Student {
    constructor(name, age, mark){
        this.name = name;
        this.age = age;
        this._mark = mark;
    }
    
    get mark(){
        return this._mark;
    }
    set mark(NewMark){
        if (NewMark>0){
            this._mark = NewMark;
        } else {
            console.log("Marks must not be negative!")
        }
    }
}

let obj = new Student("Rajdeep", 20, 95)
console.log(obj.mark)

obj.mark = 100;
console.log(obj.mark)

obj.mark = -100;
console.log(obj.mark)