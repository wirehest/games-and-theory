// Using a hash map and vectors, create a text interface to allow a user to add
// employee names to a department in a company; for example, “Add Sally to
// Engineering” or “Add Amir to Sales.” Then let the user retrieve a list of
// all people in a department or all people in the company by department,
// sorted alphabetically.

#![allow(unused)]
use std::collections::HashMap;
use std::hash::Hash;
// use std::{collections, io};

fn main() {
    let mut company: HashMap<String, Vec<String>> = HashMap::new();

    let (empl_name, dept_name) = instruction_parser("Add Amir to Sales");
    add_record(empl_name, dept_name, &mut company);
    println!("{:?}", &company);

    let (empl_name, dept_name) = instruction_parser("Add Sally to Engineering");
    add_record(empl_name, dept_name, &mut company);
    println!("{:?}", &company);

    let (empl_name, dept_name) = instruction_parser("Add Eddie to Engineering");
    add_record(empl_name, dept_name, &mut company);
    println!("{:?}", &company);
}

fn instruction_parser(instruction: &str) -> (String, String) {
    let mut instr_vec: Vec<&str> = instruction.split_whitespace().collect();
    let dept_name = instr_vec.pop().unwrap().to_string();
    let empl_name = instr_vec.swap_remove(1).to_string();

    (empl_name, dept_name)
}

fn add_record(empl_name: String, dept_name: String, company: &mut HashMap<String, Vec<String>>) {
    //
    let depts = company.entry(dept_name).or_insert(Vec::new());
    dbg!(&depts);
    if !depts.contains(&empl_name) {
        depts.push(empl_name)
    }
}

fn retrieve_dept() {
    //
}
