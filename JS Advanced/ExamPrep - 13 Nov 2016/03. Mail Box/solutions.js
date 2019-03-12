class MailBox {
    constructor(mb) {
        this.mb = [];
    }

    addMessage(subject, text) {
        this.mb.push({subject, text});
        return this;
    }

    get messageCount() {
        return this.mb.length;
    }

    deleteAllMessages() {
        this.mb = [];
    }

    findBySubject(substr) {
        let result = [];
        for (let msg of this.mb) {
            if (msg.subject.includes(substr)) {
                result.push(msg);
            }
        }
        return result;
    }

    toString() {
        if (this.mb.length > 0) {
            let result = [];
            for (let mailBox of this.mb) {
                result.push(`* [${mailBox.subject}] ${mailBox.text}`)
            }
            return result.join('\n');
        } else {
            return `* (empty mailbox)`;
        }
    }
}

let mb = new MailBox();
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);
mb.addMessage("meeting", "Let's meet at 17/11");
mb.addMessage("beer", "Wanna drink beer tomorrow?");
mb.addMessage("question", "How to solve this problem?");
mb.addMessage("Sofia next week", "I am in Sofia next week.");
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);
console.log("Messages holding 'rakiya': " +
    JSON.stringify(mb.findBySubject('rakiya')));
console.log("Messages holding 'ee': " +
    JSON.stringify(mb.findBySubject('ee')));

mb.deleteAllMessages();
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);

console.log("New mailbox:\n" +
    new MailBox()
        .addMessage("Subj 1", "Msg 1")
        .addMessage("Subj 2", "Msg 2")
        .addMessage("Subj 3", "Msg 3")
        .toString());
