interface VehicleInterface {
    name: string;
    doors: number;
    wheels?: number;
    sound?: string
}

// Partial, it is used to make all keys of an interface/type optional
const vehicle1: Partial<VehicleInterface> = {
    doors: 4,
}

// Required, used to make all keys of an interface/type mandatory
const vehicle2: Required<VehicleInterface> = {
    name: "City",
    doors: 4,
    wheels: 4,
    sound: "vroom vroom!"
}

// Readonly, used to make all keys of an interface/type readonly (cannot be changed)
const vehicle3: Readonly<VehicleInterface> = {
    name: "City",
    doors: 4
}

// pick, used to create a type by picking keys from another type
type Bike = Pick<VehicleInterface, "name" | "wheels">

// omit, used to create a type by omiting keys from another type
type Scooter = Omit<VehicleInterface, "name" | "doors">