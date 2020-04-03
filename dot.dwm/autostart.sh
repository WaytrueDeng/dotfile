#!/bin/bash
./dwm-status.sh &
picom -b &
killall ibus-daemon  &
nitrogen --restore &
variety &
ibus-daemon -d &
