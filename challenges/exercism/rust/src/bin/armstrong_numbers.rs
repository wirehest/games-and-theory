pub fn is_armstrong_number(num: u32) -> bool {
    let armstrong = &num.to_string();
    let length = armstrong.len() as u32;
    let armstrong = armstrong
        .chars()
        .fold(0, |acc, x| acc + x.to_digit(10).unwrap().pow(length));

    armstrong == num
}

fn main() {
    is_armstrong_number(153);

    assert!(is_armstrong_number(0));
    assert!(is_armstrong_number(5));
    assert!(!is_armstrong_number(10));
    assert!(is_armstrong_number(153));
    assert!(!is_armstrong_number(100));
    assert!(!is_armstrong_number(9_475));
    assert!(is_armstrong_number(9_926_315));
}
