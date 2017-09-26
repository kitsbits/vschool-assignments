function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mult(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}

function assert(actual, expected) {
    if (actual !== expected) {
        throw {
            actualOutput: actual,
            expectedOutput: expected
        };
    } else {
        console.log("Test Passed");
    }
}

function describe(message, functionImTesting) {
    try {
        functionImTesting();
    } catch(err) {
        console.log("Failed:", err)
    }
}

describe("Testing the calculator functions", function () {
    assert(add(1, 2), 3);
    assert(add(-1, -2), -3);
    assert(add(-1, 2), 1);

    assert(sub(-1, -2), 1);
    assert(sub(-1, 2), -3);
    assert(sub(10, 100), -90);

    assert(mult(10, 100), 10000);
    assert(mult(1, 1), 1);
    assert(mult(-5, 100), -500);
    assert(mult(-5, -100), 500);

    assert(div(10, 100), 0.1);
    assert(div(10, 1), 10);
    assert(div(-50, 5), -10);
});
