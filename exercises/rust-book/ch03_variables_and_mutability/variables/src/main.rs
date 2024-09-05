#![allow(unused)]

const THREE_HOURS_IN_SECONDS: u32 = 3 * 60 * 60;
// let x = 5; // won't compile—let cannot be used in the global scope

fn main() {
    // SHADOWING
    let mut x = 5;
    println!("The value of x is: {x}");
    x = 6;
    println!("The value of x is: {x}");

    let x = 5;
    let y = 5u32; // can suffix type as well

    println!("original x: {x} // 5");
    println!("y: {y}");

    let x = x + 1;

    println!("x shadowed before new scope: {x} // 6");
    {
        let x = x * 2;
        println!("x shadowed in new scope: {x} // 12");
    }
    println!("x outside subscope: {x} // 6");

    // MATHEMATICAL OPERATIONS
    println!("3 + 5 = {}", 3 + 5);
    println!("10 / 5 = {}", 10 / 5);
    println!("1.2 / 0.2 = {}", 1.2 / 0.2);
    println!("-5 / 3 = {} // truncates", -5 / 3);
    println!("-5.0 / 3.0 = {}", -5.0 / 3.0);
    println!("2 * 8 = {}", 2 * 8);
    println!("1.5 * 9 = errors of course");
    println!("47 % 10 = {}", 47 % 10);

    // BOOLEAN
    let t = true;
    let f: bool = false; // explicit annotation

    // CHARACTER
    let c = 'z'; // character type uses single quotes!

    // TUPLES
    let immutable_tuple: (f64, i32, char) = (3.6, 250, 'x');
    let mut mut_tuple = (1, 7); // note: type annotations optional

    // can deconstruct
    let (x, y, z) = &immutable_tuple;

    // can access with dot notation
    let three_point_six = immutable_tuple.0;
    let two_fifty = immutable_tuple.1;
    println!("tuple access: {three_point_six} {two_fifty} // 3.6 250");

    // let char_x = immutable_tuple[2]; // cannot use box brackets

    // mut tuple elements can be modified directly
    println!("{} {} // 1 7", mut_tuple.0, mut_tuple.1);
    mut_tuple.0 = 8;
    mut_tuple.1 = 3;
    println!("{} {} // 8 3", mut_tuple.0, mut_tuple.1);

    // ARRAYS
    let a = [1, 2, 3, 4, 5]; // every element must be the same type
    let b: [i32; 5] = [6, 7, 8, 9, 10]; // optional type annotation
    let c = [3, 5]; // initializes an array of length 5 with 3s: [3, 3, 3, 3, 3]

    // access via square brackets, as usual
    let one = a[0];
    let five = a[4];
    println!("{} {} // 1 5", one, five);
    let another_one = a[0];
    println!("{} // 1", another_one); // didn't need to use &?
}
