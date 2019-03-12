class Rat {
    constructor(name) {
        this.name = name;
        this.uniteRats = [];
    }

    getRats() {
        return this.uniteRats;
    }

    unite(otherRat) {
        if (otherRat instanceof Rat) {
            this.uniteRats.push(otherRat);
        }
    }

    toString() {
        let result = this.name + "\n";
        for (let rat of this.uniteRats) {
            result += `## ${rat.name}` + '\n';
        }
        return result.trim();
    }

}