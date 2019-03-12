function solve() {
    class Figure {
        constructor() {
            if (new.target === Figure) {
                throw new TypeError("nemoi tai we!")
            }
        }

        get area() {
            return undefined;
        }

    }

    class Circle {
        constructor(r) {
            this.radius = r;
        }

        get area() {
            return Math.PI * this.radius * this.radius;
        }

        toString() {
            return `${this.constructor.name} - radius: ${this.radius}`;
        }
    }

    class Rectangle {
        constructor(w, h) {
            this.width = w;
            this.height = h;
        }

        get area() {
            return this.width * this.height;
        }

        toString() {
            return `${this.constructor.name} - width: ${this.width}, height: ${this.height}`;
        }
    }

    return {Figure, Circle, Rectangle}
}