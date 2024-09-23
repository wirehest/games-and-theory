fn main() {
    assert_eq!(nth(0), 2);
    assert_eq!(nth(1), 3);
    assert_eq!(nth(5), 13);
    assert_eq!(nth(10_000), 104_743);
}

pub fn nth(n: u32) -> u32 {
    let mut count = n;
    let mut num = 2;
    if n == 0 {
        return num;
    };
    while count > 0 {
        num += 1;
        if is_prime(num as f64, None) {
            count -= 1;
        };
    }
    num
}

fn is_prime(num: f64, divisor: Option<f64>) -> bool {
    let div = if let Some(div) = divisor {
        div
    } else {
        num.sqrt().round()
    };

    if div < 2.0 {
        return true;
    };

    if num % div == 0.0 {
        return false;
    };

    is_prime(num, Some(div - 1.0))
}
