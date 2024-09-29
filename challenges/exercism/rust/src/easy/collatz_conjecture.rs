pub fn collatz(n: u64) -> Option<u64> {
    if n == 0 {
        return None;
    }

    let mut n = n;
    let mut steps = 0_u64;

    while n != 1 {
        if n % 2 != 0 {
            n = 3 * n + 1;
        } else {
            n /= 2;
        }

        steps += 1;
    }

    Some(steps)
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn collatz_1_returns_0() {
        assert_eq!(collatz(1), Some(0));
    }

    #[test]
    fn collatz_16_returns_4() {
        assert_eq!(collatz(16), Some(4));
    }

    #[test]
    fn collatz_1000000_returns_152() {
        assert_eq!(collatz(1_000_000), Some(152));
    }

    #[test]
    fn collatz_0_returns_none() {
        assert_eq!(collatz(0), None);
    }
}
