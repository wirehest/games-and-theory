#![allow(unused)]

pub fn add(left: u64, right: u64) -> u64 {
    left + right
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn it_works() {
        let result = add(2, 2);
        assert_eq!(result, 4);
    }
}

// declare modules with mod keyword
mod front_of_house {
    // may have child modules too
    pub mod hosting {
        pub fn add_to_waitlist() {}

        // fn seat_at_table() {}
    }

    mod serving {
        fn take_order() {}

        fn serve_order() {}

        fn take_payment() {}
    }
}

mod back_of_house {
    pub struct Breakfast {
        pub toast: String,
        seasonal_fruit: String,
    }

    impl Breakfast {
        pub fn summer(toast: &str) -> Breakfast {
            Breakfast {
                toast: String::from(toast),
                seasonal_fruit: String::from("peaches"),
            }
        }
    }

    pub enum Appetizer {
        Soup,
        Salad,
    }

    fn fix_wrong_order() {
        cook_order();

        // can use super to refer to parent module
        super::deliver_order();

        // won't work because hosting not brought
        // into scope here:
        // hosting::add_to_waitlist();
    }

    fn cook_order() {}
}

// brings the hosting module into scope via use
use crate::front_of_house::hosting;
// it is only brought into the scope where 'use' is
// it doesn't cascade down child *modules*

pub fn eat_at_restaurant() {
    // absolute path
    crate::front_of_house::hosting::add_to_waitlist();

    // relative path
    front_of_house::hosting::add_to_waitlist();

    // can also use super, see fix_wrong_order()

    // in-scope call
    // note: convention is to bring the parent module
    // into scope and use it with the call,
    // this gives context and reminder that the function
    // isn't locally-defined
    hosting::add_to_waitlist();
    // however, convention for bringing in types and other items, e.g.,
    // from the std module is to use the full path all the way out
    // to the item, e.g., use std::collections::HashMap;

    let mut meal = back_of_house::Breakfast::summer("rye");
    println!("I'd like {} toast, please.", meal.toast);

    // can change toast field because we've assigned meal is a mutable var
    // AND the toast field is public
    meal.toast = String::from("wheat");
    println!("On second thought, make it {}.", meal.toast);

    // this won't work though, because the field isn't public:
    // meal.seasonal_fruit = String::from("strawberries")

    // also: needed public-facing function, summer(), because can't
    // access the complete struct directly from this function due to
    // the private seasonal_fruit field:
    // let mut meal2 = back_of_house::Breakfast {
    //     toast: String::from("white"),
    //     seasonal_fruit: String::from("pears"),
    // };

    // in contrast: a public enum's variants are all automatically public
    // because the enum wouldn't be very useful otherwise:
    let zuppe = back_of_house::Appetizer::Soup;
    let salad = back_of_house::Appetizer::Salad;
}

fn deliver_order() {}

// Consider this module and use statement:
//
// pub mod parent {
//   pub fn a() {}
//   fn b() {}
//   pub mod child {
//     pub fn c() {}
//   }
// }
//
// fn main() {
//   use parent::{*, child as alias};
//   // ...
// }
//
// Inside main, what is the total number of paths that can refer to a, b, or c
// (not including those that use self, super, or crate)? Write your answer as a
// digit such as 0 or 1. For example, if the only two valid paths were a and
// parent::b, then the answer would be 2.
//
// A: 5
// a(), parent::a()
// c(), parent::child::c(), alias::c()
