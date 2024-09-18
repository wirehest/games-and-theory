// Using a hash map and vectors, create a text interface to allow a user to add
// employee names to a department in a company; for example, “Add Sally to
// Engineering” or “Add Amir to Sales.” Then let the user retrieve a list of
// all people in a department or all people in the company by department,
// sorted alphabetically.

#![allow(unused)]
use std::collections::HashMap;
use std::io::{self, Write};

fn main() {
    let mut company: HashMap<String, Vec<String>> = HashMap::new();

    println!("Enter instructions, or 'Quit.'");
    println!("1. Add records: 'Add <Name> to <Department>'");
    println!("   E.g., Add Amir to Sales");
    println!("2. Retrieve records: 'Retrieve <Department>'");
    println!("   E.g., Retrieve Engineering\n");

    loop {
        print!("> ");
        io::stdout().flush().unwrap();

        let mut instructions = String::new();
        io::stdin()
            .read_line(&mut instructions)
            .expect("User should have entered instructions.");
        let instructions = instructions.trim();

        if instructions.is_empty() {
            println!("Instructions not received.\nPlease try again.\n");
            continue;
        } else if instructions.starts_with("Quit") {
            break;
        } else {
            instruction_parser(instructions, &mut company);
        }
    }
}

/// Parses instructions and calls appropriate handler: add_record or retrieve_dept.
fn instruction_parser(instruction: &str, company: &mut HashMap<String, Vec<String>>) {
    let mut instr_vec: Vec<&str> = instruction.split_whitespace().collect();
    let dept_name = instr_vec.pop().unwrap().to_string();

    match instr_vec.get(0) {
        Some(valid_instruction) => {
            if valid_instruction == &"Add" {
                let empl_name = instr_vec.swap_remove(1).to_string();
                add_record(empl_name, dept_name, company);
            } else if valid_instruction == &"Retrieve" {
                retrieve_dept(&dept_name, company)
            }
        }
        _ => println!("Couldn't parse instructions.\nPlease try again.\n"),
    }
}

fn add_record(empl_name: String, dept_name: String, company: &mut HashMap<String, Vec<String>>) {
    let depts = company.entry(dept_name).or_insert(Vec::new());

    // Check if name exists first to prevent dupes.
    if !depts.contains(&empl_name) {
        println!("Adding {}.\n", &empl_name);
        depts.push(empl_name);
        depts.sort();
    } else {
        println!("{} already on roster.\n", empl_name);
    };
}

fn retrieve_dept(dept_name: &str, company: &HashMap<String, Vec<String>>) {
    match company.get(dept_name) {
        Some(dept_vec) => {
            let mut i = 1;

            println!("{} Roster:", dept_name);
            for name in dept_vec {
                println!("{}. {}", i, name);
                i += 1;
            }
            println!("");
        }
        None => {
            println!("{} department not found.\nPlease try again.\n", dept_name);
            return;
        }
    };
}
