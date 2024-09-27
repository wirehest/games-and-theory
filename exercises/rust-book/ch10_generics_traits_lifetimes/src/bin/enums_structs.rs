#![allow(unused)]
// run with "cargo run --bin enums_structs"

fn main() {
    let integers = OneGeneric { x: 1, y: 3 };
    let floats = OneGeneric { x: 1.5, y: 2.3 };

    // let mixed = OneGeneric { x: 2, y: 3.5 }; // won't compile, mismatched types
    let mixed = TwoGenerics { x: 2, y: 3.5 };

    // works with enums too
    let enum_with_generic = MyEnum::Some(3.5);

    // type-specific methods:
    // integers.secret_float_method(); // errors
    floats.secret_float_method(); // works
}

struct OneGeneric<T> {
    x: T,
    y: T,
}

impl<T> OneGeneric<T> {
    fn x(&self) -> &T {
        &self.x
    }
}
// NOTE: book says you need to have <T> after impl so that Rust knows the <T>
// after the type name is a generic—i.e., "impl<T> MyType<T>", not just
// "impl MyType<T>".
// to clarify: if, for some reason, a custom type is defined with the name "T"
// e.g., "enum T {...}" or "struct T" (despite T, U, etc. being commonly-used
// to name generics), Rust will interpret "impl MyType<T>" as
// being an implementation for "struct T"
// the other part about "choosing a different name for the generic parameter"
// is straightforward—"U" can replace all the Ts in the method definition for
// example, and it will still work.

// Can implement methods for specific types only
impl OneGeneric<f32> {
    fn secret_float_method(&self) {
        println!("I am OneGeneric with floats!");
    }
}

struct TwoGenerics<T, U> {
    x: T,
    y: U,
}

enum MyEnum<T> {
    Some(T),
    None,
}
