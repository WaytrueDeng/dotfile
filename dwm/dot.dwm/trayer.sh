#!/bin/bash
result=$(ps -a |grep trayer)
if [ "$result" == "" ];then
	eval "trayer --edge top --width 10 --height 17 --align right --transparent true --tint 0x22222222 &"
else
	eval "killall trayer"
fi	


