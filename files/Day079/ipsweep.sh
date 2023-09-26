#!/bin/bash

for ip in `seq 1 254` ; do
ping 192.168.0.$ip -c 1 | grep "64 bytes" | cut -d " " -f 4 | tr -d ":" &
done