use std::io::{self, Write};

fn main() {
    loop {
        let mut source_temperature = String::new();
        let mut source_units = String::new();

        print!("\nConvert from fahrenheit, or from celsius? ");

        io::stdout().flush().unwrap();

        io::stdin()
            .read_line(&mut source_units)
            .expect("should have received source units from user");

        source_units = source_units.trim().to_lowercase();

        print!("Input temperature in {source_units}: ");

        io::stdout().flush().unwrap();

        io::stdin()
            .read_line(&mut source_temperature)
            .expect("should have received temperature from user");

        let source_temperature: f64 = match source_temperature.trim().parse() {
            Ok(float) => float,
            Err(_) => continue,
        };

        let converted_units;
        let converted_temperature: f64;

        if source_units == "celsius" {
            source_units = String::from("°C");
            converted_units = "°F";
            converted_temperature = celsius_to_fahrenheit(source_temperature)
        } else if source_units == "fahrenheit" {
            source_units = String::from("°F");
            converted_units = "°C";
            converted_temperature = fahrenheit_to_celsius(source_temperature)
        } else {
            continue;
        }

        println!(
            "{:.2}{} is {:.2}{}",
            source_temperature, source_units, converted_temperature, converted_units
        );
        break;
    }
}

fn fahrenheit_to_celsius(temp_in_f: f64) -> f64 {
    (temp_in_f - 32.0) / 1.8
}

fn celsius_to_fahrenheit(temp_in_c: f64) -> f64 {
    (temp_in_c * 1.8) + 32.0
}
