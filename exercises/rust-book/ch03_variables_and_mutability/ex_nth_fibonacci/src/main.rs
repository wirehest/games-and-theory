use std::io;

fn main() {
    loop {
        let mut n = String::new();

        println!("Which Fibonacci number to calculate? ");

        io::stdin()
            .read_line(&mut n)
            .expect("receive input from user");

        let n: usize = n.trim().parse().expect("input to be number");
        let suffix = get_suffix(n);

        println!("{n}{suffix} Fibonacci: {}", nth_fibonacci(n));
    }
}

fn nth_fibonacci(n: usize) -> u32 {
    let i = n - 1;
    let mut arr = [0, 1, 1];

    if i <= 2 {
        return arr[i];
    }

    for _ in 3..n {
        arr[0] = arr[1];
        arr[1] = arr[2];
        arr[2] = arr[0] + arr[1];
    }

    arr[2]
}

fn get_suffix<'a>(n: usize) -> &'a str {
    let n = n % 10;

    match n {
        1 => "st",
        2 => "nd",
        3 => "rd",
        _ => "th",
    }
}
