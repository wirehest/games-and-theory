pub fn verse(n: u32) -> String {
    let mut first_sentence = String::new();
    let mut second_sentence = String::new();

    match n {
        2 => {
            first_sentence = "2 bottles of beer on the wall, \
                2 bottles of beer.\n"
                .to_string();
            second_sentence = "Take one down and pass it around, \
            1 bottle of beer on the wall."
                .to_string();
        }
        1 => {
            first_sentence = "1 bottle of beer on the wall, \
                1 bottle of beer.\n"
                .to_string();
            second_sentence = "Take it down and pass it around, \
            no more bottles of beer on the wall."
                .to_string();
        }
        0 => {
            first_sentence = "No more bottles of beer on the wall, \
                no more bottles of beer.\n"
                .to_string();
            second_sentence = "Go to the store and buy some more, \
                99 bottles of beer on the wall."
                .to_string();
        }
        other => {
            first_sentence = format!(
                "{} bottles of beer on the wall, \
                {} bottles of beer.\n",
                other, other
            );
            second_sentence = format!(
                "Take one down and pass it around, \
                {} bottles of beer on the wall.",
                other - 1
            );
        }
    };

    first_sentence + &second_sentence
}

pub fn sing(start: u32, end: u32) -> String {
    let mut verses = vec![];

    for verse_number in (end..=start).rev() {
        verses.push(verse(verse_number));
    }

    verses.join("\n\n")
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn first_verse() {
        assert_eq!(
            verse(99).trim(),
            "99 bottles of beer on the wall, 99 bottles of beer.\
                \nTake one down and pass it around, 98 bottles of beer on the wall.",
        );
    }

    #[test]
    fn verse_two() {
        assert_eq!(
            verse(2).trim(),
            "2 bottles of beer on the wall, 2 bottles of beer.\
                \nTake one down and pass it around, 1 bottle of beer on the wall.",
        );
    }

    #[test]
    fn verse_one() {
        assert_eq!(
            verse(1).trim(),
            "1 bottle of beer on the wall, 1 bottle of beer.\
                \nTake it down and pass it around, no more bottles of beer on the wall.",
        );
    }

    #[test]
    fn verse_zero() {
        assert_eq!(
            verse(0).trim(),
            "No more bottles of beer on the wall, no more bottles of beer.\
                \nGo to the store and buy some more, 99 bottles of beer on the wall.",
        );
    }

    #[test]
    fn last_three_verses() {
        assert_eq!(
            sing(2, 0).trim(),
            "2 bottles of beer on the wall, 2 bottles of beer.\
                \nTake one down and pass it around, 1 bottle of beer on the wall.\
                \n\n1 bottle of beer on the wall, 1 bottle of beer.\
                \nTake it down and pass it around, no more bottles of beer on the wall.\
                \n\nNo more bottles of beer on the wall, no more bottles of beer.\
                \nGo to the store and buy some more, 99 bottles of beer on the wall.",
        );
    }
}
