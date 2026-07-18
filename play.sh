#!/usr/bin/env bash
# Serves the game over http://localhost so YouTube allows embedded playback
# (label/Vevo videos refuse to play on file:// pages).
set -e
DIR="$(cd "$(dirname "$0")" && pwd)"
PORT=8123

if ! curl -s -o /dev/null "http://localhost:$PORT"; then
  python3 -m http.server "$PORT" -d "$DIR" --bind 127.0.0.1 &>/dev/null &
  sleep 0.5
fi

xdg-open "http://localhost:$PORT/"
echo "Music Jeopardy running at http://localhost:$PORT/"
echo "The server stops when you close this terminal (or: pkill -f 'http.server $PORT')"
wait
