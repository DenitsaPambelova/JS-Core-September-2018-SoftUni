class Vacation{
    constructor(organizer, destination, budget){
        this.organizer = organizer;
        this.destination = destination;
        this.budget = +budget;
        this.kids = {};
    }

    registerChild(name, grade, budget){
        let kidBudget = +budget;
        if(kidBudget < this.budget){
            return `${name}'s money is not enough to go on vacation to ${this.destination}.`;
        }

        if(!this.kids.hasOwnProperty(grade)){
            this.kids[grade] = [];
        }else{
            for (const kid of this.kids[grade]) {
                if(kid.name === name){
                    return `${name} is already in the list for this ${this.destination} vacation.`;
                }
            }
        }

        let kid = {name, budget: kidBudget};
        this.kids[grade].push(kid);
    }

    get numberOfChildren(){
        let numberOfChildren = 0;
        let grades = Object.keys(this.kids);
        for (const grade of grades) {
            numberOfChildren += this.kids[grade].length;
        }
        return numberOfChildren;
    }

    removeChild(name, grade){
        if(this.kids.hasOwnProperty(grade)){
            let gradeArr = this.kids[grade];
            for (let i = 0; i < gradeArr.length; i++) {
                let kidName = gradeArr[i].name;
                if(kidName === name){
                    gradeArr.splice(i, 1);
                    return gradeArr;
                }
            }
        }
        return `We couldn't find ${name} in ${grade} grade.`;
    }

    // toString(){
    //     if(this.numberOfChildren === 0){
    //         return `No children are enrolled for the trip and the organization of ${this.organizer} falls out...`;
    //     }
    //     let result = `${this.organizer} will take ${this.numberOfChildren} children on trip to ${this.destination}`;
    //     result += '\n';
    //     let grades = Object.keys(this.kids).sort((a,b) => a-b);
    //
    //     for (let i = 0; i < grades.length; i++) {
    //         let grade = grades[i];
    //         result+= `Grade: ${grade}`;
    //         let counter = 1;
    //         for (const kid of this.kids[grade]) {
    //             result+= `\n${counter}. ${kid.name}-${kid.budget}`;
    //             counter++;
    //         }
    //         result += '\n';
    //     }
    //     return result;
    // }
}

// let vacation = new Vacation('Miss Elizabeth', 'Dubai', 2000);
//
//
// console.log(vacation.toString());


