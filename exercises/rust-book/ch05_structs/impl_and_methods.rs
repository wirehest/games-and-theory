use std::f64::consts::PI;

// TODO:
// [X] implement methods
// [X] include associated function (non-method) (maybe a constructor)
// [X] show how method calls are syntactic sugar over function calls

#[derive(Debug)]
struct Circle {
    radius: f64,
}

// methods are defined within impl (implementation) blocks
impl Circle {
    // First param for methods is always some sort of "self"
    // to refer to the instance calling the method.
    // Idiomatically, use &self most of the time because
    // it's rare for a method to take ownership—may be used
    // certain constructors.
    fn diameter(&self) -> f64 {
        2.0 * PI * self.radius
    }

    // All methods can go into one impl block,
    // although it is still correct syntax to have multiple
    // impl blocks.
    fn area(&self) -> f64 {
        (PI * self.radius).powf(2.0)
    }

    // constructor, idiomatically named "new"
    // Doesn't take self.
    fn new(radius: f64) -> Circle {
        Circle { radius }
    }
}

fn main() {
    //
    let circle1 = Circle { radius: 6.0 };

    println!("Circle with radius {} has:", &circle1.radius);
    println!("* diameter of {:.2}", circle1.diameter());
    println!("* area of {:.2}", circle1.area());

    // Use the constructor.
    let circle2 = Circle::new(6.0);

    // Method calls are sugar over function calls.
    println!("The following printed via function—not method—calls.");
    println!("Circle with radius {} has:", &circle2.radius);
    println!("* diameter of {:.2}", Circle::diameter(&circle2));
    println!("* area of {:.2}", Circle::area(&circle2));
}
