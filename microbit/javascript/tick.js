const time = {
    hour: 0,
    minute: 0,
    second: 0,
    tick: function () {
        time.second += 1
        if (time.second == 60) {
            time.second = 0
            time.minute += 1
        }
        if (time.minute == 60) {
            time.minute = 0
            time.hour += 1
        }
    },
    showTime: function () {
        return time.hour + ":" + time.minute + ":" + time.second;
    }
};

basic.forever(function () {
    while (true) {
        basic.pause(1000);
        time.tick();
    }
});


let hour = 0;
let minute = 0;

input.onButtonPressed(Button.A, function () {
    hour += 1;
    if (hour === 24) {
        hour = 0;
    }
});

input.onButtonPressed(Button.B, function () {
    minute += 1;
    if (minute === 60) {
        minute = 0;
    }
});

input.onButtonPressed(Button.AB, function () {
    time.hour = hour;
    time.minute = minute;
    while (true) {
        basic.showString(time.showTime());
    }
});
