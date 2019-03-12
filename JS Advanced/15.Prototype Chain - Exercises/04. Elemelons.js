function solve() {
    class Melon {
        constructor(weight, melonSort) {
            if (new.target === Melon) {
                throw new Error("Abstract class cannot be instantiated directly")
            }
            this.weight = weight;
            this.melonSort = melonSort;
            this.element = "";
        }

        get elementIndex() {
            return this.weight * this.melonSort.length;
        }

        toString() {
            switch (this.constructor.name) {
                case "Watermelon":
                    this.element = "Water";
                    break;
                case "Firemelon":
                    this.element = "Fire";
                    break;
                case "Earthmelon":
                    this.element = "Earth";
                    break;
                case "Airmelon":
                    this.element = "Air";
                    break;
            }
            return `Element: ${this.element}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
        }
    }

    class Watermelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
        }
    }

    class Firemelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
        }
    }

    class Earthmelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
        }
    }

    class Airmelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
        }
    }

    class Melolemonmelon extends Watermelon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this._items = ["Water", "Fire", "Earth", "Air"];
            this.morph();
        }

        morph() {
            let currentItem = this._items.shift();
            this.element = currentItem;
            this._items.push(currentItem);
        }
    }

    return {Melon, Watermelon, Firemelon, Earthmelon, Airmelon, Melolemonmelon};
}

