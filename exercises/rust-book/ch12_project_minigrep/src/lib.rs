use std::env;
use std::error::Error;
// use std::fmt::Arguments;
use std::fs;

pub struct Config {
    pub query: String,
    pub file_path: String,
    pub ignore_case: bool,
}

impl Config {
    // NOTE: associated functions: don't take &self (like a static method)

    // NOTE: ch. 12: original signature
    // pub fn build(args: &[String]) -> Result<Config, &'static str> {

    // NOTE: ch. 13: updating method signature
    pub fn build(mut args: impl Iterator<Item = String>) -> Result<Config, &'static str> {
        args.next();

        // NOTE: original ch. 12 code:
        // if args.len() < 3 {
        //     return Err("arguments not long enough");
        // }
        // let args_length = &args.len();
        // let mut ignore_case = env::var("IGNORE_CASE").is_ok();
        // NOTE: adding support for  command line arg. here
        // letting it take precedence over environment var above
        // if args.len() > 3 {
        //     ignore_case = &args[1] == "-i";
        // }
        // let query = args[args_length - 2].clone();
        // let file_path = args[args_length - 1].clone();

        let query = match args.next() {
            Some(arg) => arg,
            None => return Err("Didn't get a query string"),
        };

        let file_path = match args.next() {
            Some(arg) => arg,
            None => return Err("Didn't get a file path"),
        };

        let ignore_case = env::var("IGNORE_CASE").is_ok();

        Ok(Config {
            query,
            file_path,
            ignore_case,
        })
    }
}

pub fn run(config: Config) -> Result<(), Box<dyn Error>> {
    let contents = fs::read_to_string(config.file_path)?;

    let results = if config.ignore_case {
        search_case_insensitive(&config.query, &contents)
    } else {
        search(&config.query, &contents)
    };

    for line in results {
        println!("{line}");
    }

    Ok(())
}

pub fn search<'a>(query: &str, contents: &'a str) -> Vec<&'a str> {
    // NOTE:ch. 12: code
    // let mut results = vec![];
    // for line in contents.lines() {
    //     if line.contains(query) {
    //         results.push(line);
    //     }
    // }
    // results

    contents
        .lines()
        .filter(|line| line.contains(query))
        .collect()
}

pub fn search_case_insensitive<'a>(query: &str, contents: &'a str) -> Vec<&'a str> {
    let query = query.to_lowercase();
    let mut results = vec![];

    for line in contents.lines() {
        if line.to_lowercase().contains(&query) {
            results.push(line);
        }
    }

    results
}

#[cfg(test)]
mod test {
    use super::*;

    #[test]
    fn case_sensitive() {
        let query = "duct";

        // NOTE: Rust includes tabs in the string results,
        // so need to remove contents indents
        let contents = "\
Rust:
safe, fast, productive.
Pick three.
Duct tape.";

        assert_eq!(vec!["safe, fast, productive."], search(query, contents));
    }

    #[test]
    fn case_insensitive() {
        let query = "rUsT";
        let contents = "\
Rust:
safe, fast, productive.
Pick three.
Trust me.";

        assert_eq!(
            vec!["Rust:", "Trust me."],
            search_case_insensitive(query, contents)
        );
    }
}
