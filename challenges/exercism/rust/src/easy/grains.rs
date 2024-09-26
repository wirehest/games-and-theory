/// Starts at 1 and doubles it the inputted number of times.
pub fn square(s: u32) -> u64 {
    if s == 1 {
        return 1;
    }

    2 * square(s - 1)
}

/// Gets the total of the doubling operation of square().
pub fn total() -> u64 {
    let mut sum: u64 = 0;

    for i in 1..=64 {
        sum += square(i);
    }

    sum
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn first_square() {
        assert_eq!(square(1), 1);
    }

    #[test]
    fn second_square() {
        assert_eq!(square(2), 2);
    }

    #[test]
    fn fourth_square() {
        assert_eq!(square(4), 8);
    }

    #[test]
    fn sixty_fourth_square() {
        assert_eq!(square(64), 9_223_372_036_854_775_808);
    }

    #[test]
    fn total_function() {
        assert_eq!(total(), 18_446_744_073_709_551_615);
    }
}
