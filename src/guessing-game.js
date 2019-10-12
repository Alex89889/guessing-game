class GuessingGame {
    constructor() {
		this.minRange;
		this.maxRange;
		this.solution;
	}

    setRange(min, max) {
		this.minRange = min;
        this.maxRange = max;
    }

    guess() {
		this.solution = Math.round((this.minRange + this.maxRange) / 2);
		return this.solution;
    }

    lower() {
        this.maxRange = this.solution;
    }

    greater() {
        this.minRange =this.solution;
    }
}

module.exports = GuessingGame;
