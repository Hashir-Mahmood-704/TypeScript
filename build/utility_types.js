"use strict";
// Partial, it is used to make all keys of an interface/type optional
const vehicle1 = {
    doors: 4,
};
// Required, used to make all keys of an interface/type mandatory
const vehicle2 = {
    name: "City",
    doors: 4,
    wheels: 4,
    sound: "vroom vroom!"
};
// Readonly, used to make all keys of an interface/type readonly (cannot be changed)
const vehicle3 = {
    name: "City",
    doors: 4
};
