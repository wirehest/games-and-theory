// Given a list of integers, use a vector and return the median (when sorted, the value in the
// middle position) and mode (the value that occurs most often; a hash map will be helpful here)
// of the list.

#![allow(unused)]
use std::collections::HashMap;
use std::io::{self, Write};

fn main() {
    let mut integer_list = loop {
        let integer_list = get_integer_vec();

        if !integer_list.is_empty() {
            break integer_list;
        };
    };

    find_median_mode(&integer_list);
}

fn get_integer_vec() -> Vec<u32> {
    println!("Enter a list of integers separated by spaces: ");

    let mut integer_list = String::new();

    io::stdin()
        .read_line(&mut integer_list)
        .expect("Input from user.");

    let integer_list: Vec<u32> = integer_list
        .split_whitespace()
        .filter_map(|x| x.parse::<u32>().ok())
        .collect();

    integer_list
}

fn find_median_mode(integer_vec: &Vec<u32>) {
    let length = &integer_vec.len();

    let median: f64 = if length % 2 == 0 {
        let mid = (length / 2);
        (integer_vec[mid] + integer_vec[mid - 1]) as f64 / 2f64
    } else {
        integer_vec[(length - 1) / 2] as f64
    };

    let mut count_map = HashMap::new();
    for x in integer_vec.iter() {
        count_map
            .entry(x)
            .and_modify(|count| *count += 1)
            .or_insert(1);
    }

    let mut mode_count = 0;
    let mut mode = &0;
    for (k, v) in count_map.drain() {
        if v > mode_count {
            mode_count = v;
            mode = k;
        } else {
            continue;
        }
    }

    println!("Median: {}, Mode: {}", median, mode);
}
