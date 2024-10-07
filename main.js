let ledder = {
    step: 0,
    up: function () {
        this.step++;
    },
    down: function () {
        this.step--;
    },
    showStep: function () {
        console.log(this.step);
}
};

ledder.up();
ledder.up();
ledder.down();
ledder.showStep();
