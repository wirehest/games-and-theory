use time::{Duration, PrimitiveDateTime as DateTime};

/// Adds one billions seconds to DateTime passed in
pub fn after(start: DateTime) -> DateTime {
    let gigasecond = Duration::seconds(1_000_000_000);
    start.checked_add(gigasecond).unwrap()
}
