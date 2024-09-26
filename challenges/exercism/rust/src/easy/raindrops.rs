pub fn raindrops(n: u32) -> String {
    let mut result = String::new();
    if n % 3 == 0 {
        result.push_str("Pling")
    };
    if n % 5 == 0 {
        result.push_str("Plang")
    };
    if n % 7 == 0 {
        result.push_str("Plong")
    };
    if n % 3 != 0 && n % 5 != 0 && n % 7 != 0 {
        result.push_str(&n.to_string())
    };

    result
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn raindrops_15() {
        assert!(raindrops(15) == "PlingPlang");
    }

    #[test]
    fn raindrops_6() {
        assert!(raindrops(6) == "Pling");
    }

    #[test]
    fn raindrops_8() {
        assert!(raindrops(8) == "8");
    }

    #[test]
    fn raindrops_105() {
        assert!(raindrops(105) == "PlingPlangPlong");
    }

    #[test]
    fn raindrops_3125() {
        assert!(raindrops(3125) == "Plang");
    }
}
