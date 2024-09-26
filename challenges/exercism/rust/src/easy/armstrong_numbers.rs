pub fn is_armstrong_number(num: u32) -> bool {
    let armstrong = &num.to_string();
    let length = armstrong.len() as u32;
    let armstrong = armstrong
        .chars()
        .fold(0, |acc, x| acc + x.to_digit(10).unwrap().pow(length));

    armstrong == num
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn _0_is_armstrong() {
        assert!(is_armstrong_number(0));
    }

    #[test]
    fn _5_is_armstrong() {
        assert!(is_armstrong_number(5));
    }

    fn _153_is_armstrong() {
        assert!(is_armstrong_number(153));
    }

    #[test]
    fn _9_926_315_is_armstrong() {
        assert!(is_armstrong_number(9_926_315));
    }

    #[test]
    fn _10_not_armstrong() {
        assert!(!is_armstrong_number(10));
    }

    #[test]
    fn _100_not_armstrong() {
        assert!(!is_armstrong_number(100));
    }

    #[test]
    fn _9_475_not_armstrong() {
        assert!(!is_armstrong_number(9_475));
    }
}
