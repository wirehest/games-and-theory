// Convert strings to pig latin. The first consonant of each word is moved to the end of the word
// and ay is added, so first becomes irst-fay. Words that start with a vowel have hay added to
// the end instead (apple becomes apple-hay). Keep in mind the details about UTF-8 encoding!

fn main() {
    to_pig_latin("test sentence please ignore");
}

fn to_pig_latin(string: &str) {
    const VOWELS: [&str; 5] = ["a", "e", "i", "o", "u"];
    let mut split = string.split_whitespace();
    let mut converted: Vec<String> = Vec::new();

    for word in &mut split {
        let first_character = &word.to_lowercase()[0..1];
        let pig_latinified: String = if VOWELS.contains(&first_character) {
            format!("{word}-hay")
        } else {
            let rest_of_word = &word[1..];
            format!("{rest_of_word}{first_character}ay")
        };

        converted.push(pig_latinified);
    }

    println!("\"{string}\" in pig latin is:");
    println!("\"{}\"", converted.join(" "));
}
