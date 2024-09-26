fn main() {
    assert!(!is_leap_year(1970));
    assert!(!is_leap_year(2015));
    assert!(is_leap_year(2000));
    assert!(is_leap_year(2400));
}

pub fn is_leap_year(year: u64) -> bool {
    if year % 400 == 0 {
        return true;
    }
    if year % 4 == 0 && !(year % 100 == 0) {
        return true;
    }
    false
}
