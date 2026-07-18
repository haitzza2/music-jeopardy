# Music Jeopardy

A "Guess the Song" Jeopardy-style party game (inspired by Madmartigan's Music Trivia).
11 boards, 275 songs from the 1960s to today. Clips play through hidden YouTube embeds.

**Play it:** open the GitHub Pages URL for this repo, pick a board, click a tile,
hit Play clip, guess the song, reveal, and award points to your teams.

To make your own boards, edit `boards.js` — each clue is
`{ song, artist, yt: <YouTube video id>, start: <seconds> }`.

To run locally, `./play.sh` (serves over localhost — YouTube won't play embeds from `file://` pages).
