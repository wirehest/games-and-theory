fn main() {
    assert_eq!(square(1), 1);
    assert_eq!(square(2), 2);
    assert_eq!(square(4), 8);
    assert_eq!(square(64), 9_223_372_036_854_775_808);
    assert_eq!(total(), 18_446_744_073_709_551_615);
}

pub fn square(s: u32) -> u64 {
    if s == 1 {
        return 1;
    }

    2 * square(s - 1)
}

pub fn total() -> u64 {
    let mut sum: u64 = 0;

    for i in 1..=64 {
        sum += square(i);
    }

    sum
}
