pub fn reply(message: &str) -> &str {
    let sure = "Sure.";
    let chill = "Whoa, chill out!";
    let calm = "Calm down, I know what I'm doing!";
    let fine = "Fine. Be that way!";
    let whatever = "Whatever.";

    let message = message.trim();
    let is_silent = message.is_empty();
    let is_question = message.ends_with("?");
    let is_yelling = !message
        .chars()
        .filter(|c| c.is_alphabetic())
        .collect::<String>()
        .is_empty()
        && message
            .chars()
            .filter(|c| c.is_alphabetic())
            .all(|c| c.is_uppercase());

    match message {
        _ if is_silent => fine,
        _ if is_question && is_yelling => calm,
        _ if is_yelling => chill,
        _ if is_question => sure,
        _ => whatever,
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn numbers_only() {
        assert_eq!(reply("1, 2, 3"), "Whatever.");
    }

    #[test]
    fn no_words_question() {
        assert_eq!(reply(":) ?"), "Sure.");
    }

    #[test]
    fn number_question() {
        assert_eq!(reply("4?"), "Sure.");
    }

    #[test]
    fn standard_question() {
        assert_eq!(
            reply("Does this cryogenic chamber make me look fat?"),
            "Sure."
        );
    }
}
