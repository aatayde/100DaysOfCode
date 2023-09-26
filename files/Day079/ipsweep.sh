#!/binbash

ping 192.168.0.1 -c 1 | grep "64 bytes" | cut -d " " -f 4 | tr -d ":"