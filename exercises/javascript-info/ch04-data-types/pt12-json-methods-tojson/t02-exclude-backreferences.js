'use strict';

let room = {
  number: 23,
};

let meetup = {
  title: 'Conference',
  occupiedBy: [{ name: 'John' }, { name: 'Alice' }],
  place: room,
};

// circular references
room.occupiedBy = meetup;
meetup.self = meetup;

console.log(
  JSON.stringify(meetup, function replacer(key, value) {
    /**
     * A: Replacer to exclude circular references.
     * Need key !== '' to cover initial case where meetup itself
     * is passed into replacer as the value and there is no key yet.
     */
    return key !== '' && value === meetup ? undefined : value;
  })
);

/* result should be:
{
  "title":"Conference",
  "occupiedBy":[{"name":"John"},{"name":"Alice"}],
  "place":{"number":23}
}
*/
