fn main() {
    let numbers = vec![34, 50, 25, 100, 65];
    // let largest_number = largest(&numbers);
    let largest_number = largest_generic(&numbers);

    // for number in &numbers {
    //     if number > largest {
    //         largest = number;
    //     }
    // }

    println!("largest number: {largest_number}");

    let numbers = vec![25, 30, 15, 85, 90, 150, 5];
    // let largest_number = largest(&numbers);
    let largest_number = largest_generic(&numbers);
    println!("largest number: {largest_number}");
    println!("slice still intact: {numbers:?}");

    let chars = vec!['a', 'x', 'c', 'z', 'p'];
    // let largest_character = largest_char(&chars);
    let largest_character = largest_generic(&chars);
    println!("largest character: {largest_character}");
}

fn largest(list: &[i32]) -> &i32 {
    let mut largest = &list[0];

    for item in list {
        if item > largest {
            largest = item;
        }
    }

    largest
}

fn largest_char(list: &[char]) -> &char {
    let mut largest = &list[0];

    for item in list {
        if item > largest {
            largest = item;
        }
    }

    largest
}

fn largest_generic<T: std::cmp::PartialOrd>(list: &[T]) -> &T {
    let mut largest = &list[0];

    for item in list {
        if item > largest {
            largest = item;
        }
    }

    largest
}
