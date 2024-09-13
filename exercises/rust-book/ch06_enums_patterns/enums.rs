#![allow(unused)]

// enums created with the enum keyword
#[derive(Debug)]
enum Dessert {
    Cake,
    Pie,
    // each enum variant becomes a function (like a constructor),
    // taking data associated with each variant as arguments:
    Fruit(String),
    // variant can also be struct-like:
    IceCream { flavor: String, toppings: String },
}

// enums may have their own implementation blocks:
impl Dessert {
    fn sample_method(&self) {
        println!("Printing from a sample Dessert method.\nI am {:?}", &self);
    }
}

// Rust doesn't have null values, but there is a built-in enum
// called Option that allows for the absence of a value like null:
enum Option<T> {
    Some(T),
    None,
}

fn identify_dessert(dessert: &Dessert) -> String {
    // Some and None are paired with match expressions
    // similar to using conditional logic with null in other langs
    // but match allows Rust to exhaustively account for all
    // possible values at compile-time
    match dessert {
        Dessert::Pie => String::from("This is pie"), // terminate arms with comma
        Dessert::Cake => String::from("This is cake"),
        Dessert::Fruit(name) => format!("This is {name}"),
        Dessert::IceCream { flavor, toppings } => {
            // match arm can be multi-line with {...},
            // can omit the comma if so
            format!("{flavor} ice cream with {toppings}")
        }
    }
}

fn main() {
    // instantiate enum like any other variable; variants are
    // namespaced under the enum
    let _after_meal_treat = Dessert::Pie;
    let _birthday_treat = Dessert::Cake;
    let _special_treat = Dessert::IceCream {
        flavor: String::from("vanilla"),
        toppings: String::from("sprinkles"),
    };

    _special_treat.sample_method(); // prints message from above

    println!("{}", identify_dessert(&_special_treat));

    // won't work because cannot access fields directly like this
    // either need to use match, if-let, if-else, or a method
    // println!("{:?}", _special_treat.flavor);

    // Option is included in the prelude so Some and None can be
    // used without the Option:: namespace
    let _some_char = Some('x');
    let _some_int = Some(5);

    let a_number = 5;
    let the_number = match a_number {
        3 => "number is three".to_string(),
        9 => "number is nine".to_string(),
        5 => "number is five".to_string(),
        // matches must be exhaustive, catch-alls can be created with:
        // #1 a variable name, but the variable must be used in the code block:
        // everything_else => format!("{}", everything_else),

        // #2 "_" as a catch-all, but not used in the code block:
        _ => "it's a number".to_string(),
        // #3 "_" as a catch-all, and do nothing by using the unit struct
        // but all the code block return types must be the same, so this
        // treatment can only be used when the other code blocks are
        // function/macro calls:
        // _ => (),
    };

    println!("{}", the_number);
}
