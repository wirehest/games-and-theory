// Write your unrollPlaylist function and types here! ✨
// You'll need to export the function so the tests can run it.

export type Items = (Song | Album | Playlist)[];

export interface Song {
	artist: string | string[];
	length: number;
	name: string;
	type: 'song';
}

export interface Album {
	songs: Song[];
	type: 'album';
}

export interface Playlist {
	resolve(): Song[];
	type: 'playlist';
}

export interface Unrolled {
	artists: {
		[artist: string]: string[];
	};
	songs: string[];
	time: number;
}

export function unrollPlaylist(items: Items): Unrolled {
	let unrolled: Unrolled = { artists: {}, songs: [], time: 0 };

	items.forEach((item) => {
		switch (item.type) {
			case 'song':
				unrolled = addSong(item, unrolled);
				break;
			case 'album':
				item.songs.forEach((song) => (unrolled = addSong(song, unrolled)));
				break;
			case 'playlist':
				item.resolve().forEach((song) => (unrolled = addSong(song, unrolled)));
				break;
		}
	});

	return unrolled;
}

function addSong(song: Song, unrolled: Unrolled): Unrolled {
	let songArtists: string[];
	if (typeof song.artist === 'string') songArtists = [song.artist];
	else songArtists = song.artist;

	unrolled.songs.push(song.name);
	unrolled.time += song.length;

	songArtists.forEach((artist) => {
		if (unrolled.artists.hasOwnProperty(artist)) {
			unrolled.artists[artist].push(song.name);
		} else {
			unrolled.artists[artist] = [song.name];
		}
	});

	return unrolled;
}
