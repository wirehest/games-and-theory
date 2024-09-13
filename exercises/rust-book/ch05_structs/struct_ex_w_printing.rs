use std::f64::consts::PI;

// need to explicitly opt in to show Debug
#[derive(Debug)]
struct Circle {
    radius: f64,
    color: String,
}

fn main() {
    let red_circle = Circle {
        radius: 3.0,
        color: "Red".to_string(),
    };

    // :? uses Debug output format, :#? pretty prints
    println!("{:?}", red_circle);

    // can also append to var name within curly brackets
    println!("{red_circle:#?}");

    println!(
        "{} circle area: {}",
        &red_circle.color,
        circle_area(&red_circle)
    );
}

// using a tuple struct provides clarity
// via explicitly-named variables, e.g., "circle.radius"
fn circle_area(circle: &Circle) -> f64 {
    // accessing fields of borrowed struct does not move the values
    (circle.radius * PI).powf(2_f64)
}
