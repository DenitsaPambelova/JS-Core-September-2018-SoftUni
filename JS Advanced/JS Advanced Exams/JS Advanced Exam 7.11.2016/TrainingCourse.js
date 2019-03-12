//Mocha Tests
class TrainingCourse {
    constructor(title, trainer) {
        this.title = title;
        this.trainer = trainer;

        this.topics = [];
    }

    addTopic(title, date) {
        let newTopic = {
            title: title,
            date: date
        };

        this.topics.push(newTopic);
        this._sortTopics();

        return this;
    }

    get firstTopic() {
        return this.topics[0];
    }

    get lastTopic() {
        return this.topics[this.topics.length - 1];
    }

    toString() {
        let output = 'Course "' + this.title + '" by ' + this.trainer + '\n';
        return output + this.topics.map(t => ` * ${t.title} - ${t.date}`).join('\n');
    }

    _sortTopics() {
        this.topics
            .sort((t1, t2) => t1.date - t2.date);
    }
}
// //Test Code
// let js = new TrainingCourse("JS Intro", "Svetlin Nakov");
// console.log("First topic: " + JSON.stringify(js.firstTopic));
// console.log("Last topic: " + JSON.stringify(js.lastTopic));
// console.log("" + js);
//
// js.addTopic("Maps", new Date(2016, 9, 6, 18, 0));
// js.addTopic("JS Overview", new Date(2016, 8, 27, 18, 0));
// js.addTopic("Program Logic", new Date(2016, 8, 29, 18, 0));
// js.addTopic("Arrays", new Date(2016, 9, 3, 18, 0));
// console.log("First topic: " + JSON.stringify(js.firstTopic));
// console.log("Last topic: " + JSON.stringify(js.lastTopic));
// console.log("" + js);
//
// let php = new TrainingCourse("PHP Intro", "Ivan Yonkov")
//     .addTopic("Strings", new Date(2017, 2, 16, 18, 0))
//     .addTopic("PHP First Steps", new Date(2017, 2, 12, 18, 0))
//     .addTopic("Arrays", new Date(2017, 2, 14, 18, 0));
// console.log("" + php);
//
// //Corresponding output
//
// First topic: undefined
// Last topic: undefined
// Course "JS Intro" by Svetlin Nakov
//
// First topic: {"title":"JS Overview","date":"2016-09-27T15:00:00.000Z"}
// Last topic: {"title":"Maps","date":"2016-10-06T15:00:00.000Z"}
// Course "JS Intro" by Svetlin Nakov
// * JS Overview - Tue Sep 27 2016 18:00:00 GMT+0300 (FLE Daylight Time)
// * Program Logic - Thu Sep 29 2016 18:00:00 GMT+0300 (FLE Daylight Time)
// * Arrays - Mon Oct 03 2016 18:00:00 GMT+0300 (FLE Daylight Time)
// * Maps - Thu Oct 06 2016 18:00:00 GMT+0300 (FLE Daylight Time)
// Course "PHP Intro" by Ivan Yonkov
// * PHP First Steps - Sun Mar 12 2017 18:00:00 GMT+0200 (FLE Standard Time)
// * Arrays - Tue Mar 14 2017 18:00:00 GMT+0200 (FLE Standard Time)
// * Strings - Thu Mar 16 2017 18:00:00 GMT+0200 (FLE Standard Time)

