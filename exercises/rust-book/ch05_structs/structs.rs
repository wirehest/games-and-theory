#![allow(unused)]

fn main() {
    struct User {
        active: bool,
        username: String,
        email: String,
        sign_in_count: u64,
    }
    // do NOT terminate with semi-colon
    // but tuple structs and unit structs DO terminate with a semi-colon:
    struct Car(String, String);
    struct Unit;

    // no 'new' keyword
    let mut user1 = User {
        // fields do not need to follow the same order
        active: true,
        email: String::from("name@domain.com"),
        sign_in_count: 0,
        username: String::from("chandler"),
    };

    // read/write via dot notation
    println!(
        "username: {}\nemail: {}\nactive: {}\nsign-in count: {}\n",
        user1.username, user1.email, user1.active, user1.sign_in_count
    );

    user1.username = String::from("raymond");
    println!("new username: {}\n", user1.username);

    // field init syntax, for use with, e.g., factory funcs
    fn create_user(username: String, email: String) -> User {
        User {
            username,
            email,
            active: true,
            sign_in_count: 0,
        }
    };

    // struct update syntax
    // can define a "..base_struct" to pull fields from that
    // are not explicitly set; the base_struct must be the final field:
    let user2 = User {
        email: String::from("rchandler@sepulveda.com"),

        ..user1
    };

    println!(
        "username: {}\nemail: {}\nactive: {}\nsign-in count: {}\n",
        user2.username, user2.email, user2.active, user2.sign_in_count
    );

    // whether the struct update is a move or copy (and consequently,
    // whether the base struct remains accessible) depends on the types
    // of fields involved, i.e., are they primitives using Copy or not?

    // user2 above, updating off of user1 copied username, which is a String
    // Strings don't implement copy, therefore user1 is no longer available:
    // println!("{}", user1.username); // errors

    let user3 = User {
        username: String::from("william"),
        email: String::from("will@gibson.com"),

        ..user2
    };

    // both user2 and user3 are still available:
    println!(
        "user2 username: {}\nuser3 username: {}",
        user2.username, user3.username
    );
}
