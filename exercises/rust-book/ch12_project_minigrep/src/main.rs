use ch12_project_minigrep::Config;
use std::env;
use std::process;

fn main() {
    // NOTE: original ch. 12 approach: collect values
    // of arguments iterator into a vec
    // let args: Vec<String> = env::args().collect();

    // NOTE: ch. 13: now pass iterator itself
    let config = Config::build(env::args()).unwrap_or_else(|error| {
        eprintln!("Problem parsing arguments: {error}");
        process::exit(1);
    });

    // NOTE: handling error with if let here because:
    // 1) don't need to unwrap success value (which is just ())
    // 2) using expect returns an error message that is too verbose
    if let Err(error) = ch12_project_minigrep::run(config) {
        eprintln!("Application error: {error}");
        process::exit(1);
    }
}
