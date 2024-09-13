use std::f64::consts::PI;

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
    // self (lowercase) is different from Self (uppercast),
    // see new() below.
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
    // Doesn't take self, because that refers to the instance.
    // But, can optionally use "Self", which refers to the type
    // referred to by the implementation block.
    // new() here will return a fresh-instance, so it can
    // optionally use Self:
    fn new(radius: f64) -> Circle {
        // Circle { radius }
        Self { radius } // works too
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
