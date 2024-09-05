#![allow(unused)]

fn main() {
    let number = 25;

    if number < 5 {
        println!("condition was true")
    } else {
        println!("condition was false")
    }

    if number < 10 {
        println!("{number} < 10");
    } else if number < 20 {
        println!("{number} < 20");
    } else if number < 30 {
        println!("{number} < 30");
    }

    // can use if to assign a value, but the types must match
    let statement = if number < 10 { "less" } else { "greater" };
    println!("{} is {statement} than 10", number);

    // let x = if true { 5 } else { 'c' }; // errors with incompatible types
}
