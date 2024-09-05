fn main() {
    let mut i = 0;

    let loop_return = loop {
        if i < 10 {
            i += 1;
        } else {
            // can return from loops by placing value/expressions after break
            // semi-colon is technically optional but rust-analyzer inserts it automatically
            break i * 2;
        }
    };

    println!("{loop_return} // 20");

    i = 0;

    // loop labels start with a single quote
    'outer_loop: loop {
        println!("outer loop count: {i}");
        let mut counter = 0;

        if i == 3 {
            break;
        }

        loop {
            println!("inner loop: {counter}");
            counter += 1;

            if counter == 5 {
                i += 1;
                continue 'outer_loop;
            }
        }
    }

    let a = [1, 3, 5, 7, 9];

    i = 0;
    // WHILE LOOPS
    while i < 5 {
        println!("while i < 5 loop: {i}");
        i += 1;
    }

    i = 0;
    // while loop over array elements
    while i < a.len() {
        println!("array a, index {i}: {}", a[i]);
        i += 1;
    }

    // FOR LOOPS
    // safer, and may have fewer runtime checks than while loops
    // e.g., accessing all elements in an array with a while loop vs. a for loop
    for element in a {
        println!("for loop over array a: {element}");
    }

    // for loop over a range
    for count in 1..=10 {
        println!("for loop count: {count}");
    }

    // ... in reverse
    for count in (1..=10).rev() {
        println!("for loop count in reverse: {count}");
    }
}
