// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

//Phone number tests

test('check if 532-123-6731 is true', () => {
    expect(functions.isPhoneNumber('532-123-6731')).toBe(true);
});

test('check if (546)213-5382 is true', () => {
    expect(functions.isPhoneNumber('(546)213-5382')).toBe(true);
});

test('check if .?,1! is false', () => {
    expect(functions.isPhoneNumber('.?,1!')).toBe(false);
});

test('check if letters is false', () => {
    expect(functions.isPhoneNumber('letters')).toBe(false);
});

//Email tests

test('check if email@email.com is true', () => {
    expect(functions.isEmail('email@email.com')).toBe(true);
});

test('check if school@ucsd.edu is true', () => {
    expect(functions.isEmail('school@ucsd.edu')).toBe(true);
});

test('check if no@nowhere is false', () => {
    expect(functions.isEmail('no@nowhere')).toBe(false);
});

test('check if place.com is false', () => {
    expect(functions.isEmail('place.com')).toBe(false);
});

//Strong Password tests

test('check if very_Strong is true ', () => {
    expect(functions.isStrongPassword('very_Strong')).toBe(true);
})

test('check if even_Stronger is true', () => {
    expect(functions.isStrongPassword('even_Stronger')).toBe(true);
})

test('check if not is false ', () => {
    expect(functions.isStrongPassword('not')).toBe(false);
})

test('check if 99_bottles is false ', () => {
    expect(functions.isStrongPassword('99_bottles')).toBe(false);
})


//Date tests

test('check if 2/13/2002 is true ', () => {
    expect(functions.isDate('2/13/2002')).toBe(true);
})

test('check if 2/31/8959 is true', () => {
    expect(functions.isDate('2/31/8959')).toBe(true);
})

test('check if 111/33/1133 is false ', () => {
    expect(functions.isDate('111/33/1133')).toBe(false);
})

test('check if 2/13/02 is false ', () => {
    expect(functions.isDate('2/13/02')).toBe(false);
})


//Hex Color tests

test('check if eeeeee is true ', () => {
    expect(functions.isHexColor('eeeeee')).toBe(true);
})

test('check if 48f542 is true', () => {
    expect(functions.isHexColor('48f542')).toBe(true);
})

test('check if definitelyFalse is false ', () => {
    expect(functions.isHexColor('definitelyFalse')).toBe(false);
})

test('check if treeIsColor is false ', () => {
    expect(functions.isHexColor('treeIsColor')).toBe(false);
})