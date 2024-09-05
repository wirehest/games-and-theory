fn main() {
    println!("Hello, world!");

    another_function(5);

    println!("via function return: {} // 73", function_that_returns(73));
}

fn another_function(x: i32) {
    // declaration line also the function's "signature"

    println!("Printed from another_function");
    println!("Printing argument: {x} // 5");
}

fn function_that_returns(x: i32) -> i32 {
    // final line implicitly returns; do not need return keyword
    // do not use semi-colon, doing so will turn it into a statement
    x
}
