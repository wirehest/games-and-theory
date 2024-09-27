#![allow(unused)]

use std::fs::File;
use std::io::{self, ErrorKind, Read};

fn main() {
    // panic!("at the disco"); // can trigger panic intentionally

    let my_vec = vec![1, 2, 3];
    // v[99]; // out of bounds error

    // one way to handle errors is using match:
    // let file_open = File::open("dummy.txt");
    //
    // let file_contents = match file_open {
    //     Ok(file) => file,
    //     Err(error) => {
    //         panic!("Could not open file: {:?}", error)
    //     }
    // };

    // can have multiple matches too; done here to catch
    // different error types
    // let another_file_open = File::open("jester.txt");
    //
    // let another_file_contents = match another_file_open {
    //     Ok(file) => file,
    //     Err(error) => match error.kind() {
    //         // if file not found, tries to create it instead
    //         ErrorKind::NotFound => match File::create("jester.txt") {
    //             Ok(file_create) => file_create,
    //             Err(inner_error) => panic!("Problem creating file: {:?}", inner_error),
    //         },
    //         // catches every other error type
    //         other_error => {
    //             panic!("Problem opening file: {:?}", other_error)
    //         }
    //     },
    // };

    // same as above, but using unwrap_or_else: more concise
    // let third_file_open = File::open("third.txt").unwrap_or_else(|error| {
    //     if error.kind() == ErrorKind::NotFound {
    //         // if file not found, tries to create it
    //         File::create("third.txt").unwrap_or_else(|error| {
    //             panic!("Problem creating file: {:?}", error);
    //         })
    //     } else {
    //         // catches every other type
    //         panic!("Problem opening file: {:?}", error);
    //     }
    // });

    // unwrap alone can be more concise
    // in exchange for being able to respond with a closure, unwrap
    // just panics with the error instead:
    // let fourth_open = File::open("fourth.txt").unwrap();

    // expect is like unwrap, but it lets you control the message
    // but still less control than unwrap_or_else:
    // let fifth_open = File::open("fifth.txt").expect("fifth.txt to open");

    // propagating errors—instead of handling errors when they happen,
    // return the Result with the output or error and let the calling-function
    // handle it:
    fn read_file() -> Result<String, io::Error> {
        let file_open = File::open("my_file.txt");

        let mut file_contents = match file_open {
            Ok(contents) => contents,
            Err(error) => return Err(error), // return the error up to calling function
        };

        let mut contents_parsed = String::new();

        match file_contents.read_to_string(&mut contents_parsed) {
            Ok(_) => Ok(contents_parsed),
            Err(error) => Err(error), // return the error up to calling function
        }
    }

    // "?" shortcut for propagating
    // if the value of the Result is an Error, returns early from the whole
    // function with the Erro, if Result is OK, returns to the expression:
    fn read_or_propagate() -> Result<String, io::Error> {
        let mut file_contents = File::open("my_file.txt")?;
        let mut contents_parsed = String::new();
        file_contents.read_to_string(&mut contents_parsed)?;
        Ok(contents_parsed)
    }
}
