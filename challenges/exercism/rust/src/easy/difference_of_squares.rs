pub fn square_of_sum(n: u32) -> u32 {
    (0..=n).sum::<u32>().pow(2)

    // fold:
    // (0..=n).fold(0, |acc, n| acc + n).pow(2)

    // formula:
    // ((n * (n + 1)) / 2).pow(2)
}

pub fn sum_of_squares(n: u32) -> u32 {
    (0..=n).map(|n| n.pow(2)).sum()

    // formula:
    // (n * (n + 1) * (2 * n + 1)) / 6
}

pub fn difference(n: u32) -> u32 {
    square_of_sum(n) - sum_of_squares(n)
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn square_of_sum_1() {
        assert_eq!(square_of_sum(1), 1);
    }

    #[test]
    fn square_of_sum_5() {
        assert_eq!(square_of_sum(5), 225);
    }

    #[test]
    fn sum_of_squares_1() {
        assert_eq!(sum_of_squares(1), 1);
    }

    #[test]
    fn sum_of_squares_5() {
        assert_eq!(sum_of_squares(5), 55);
    }

    #[test]
    fn difference_100() {
        assert_eq!(difference(100), 25_164_150);
    }
}
