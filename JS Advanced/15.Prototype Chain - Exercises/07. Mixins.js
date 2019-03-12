function createMixins() {
    function computerQualityMixin(classExt) {
        classExt.prototype.getQuality = function () {
            return (this.processorSpeed + this.ram + this.hardDiskSpace) / 3;
        };
        classExt.prototype.isFast = function () {
            return this.processorSpeed > (this.ram / 4)
        };
        classExt.prototype.isRoomy = function () {
            return this.hardDiskSpace > Math.floor(this.ram * this.processorSpeed)
        }
    }

    function styleMixin(classExt) {
        classExt.prototype.isFullSet = function () {
            return this.manufacturer === this.keyboard.manufacturer &&
                this.keyboard.manufacturer === this.monitor.manufacturer
        };
        classExt.prototype.isClassy = function () {
            return this.battery.expectedLife >= 3 &&
                (this.color === "Silver" || this.color === "Black") && this.weight < 3
        }
    }

    return {
        computerQualityMixin,
        styleMixin
    }
}
