# Day 79

## IP Sweep

learning material from the internet

this code is written in bash

the script runs in linux

### learn with me

please feel free to share this code, I put it together from youtube videos & google searches

####  Dependencies

on Linux install the following packages:
```
sudo apt install net-tools
```
```
sudo apt install nmap
```

#### commands used
- cmmod +x
- ifconfig
- ping
- grep
- cut

#### Objective

ping all devices on a network

#### Bonus 

list all open ports


#### Findings
ping continuously sends packages to a device. only one ping is neccessary.

    ping 192.168.0.1

man ping is the manuel for ping command. -c is the option for count.
ping + ip address + -c 1 only pings the ip address once.

    ping 192.168.0.1 -c 1


the grep command returns lines tha tmatch patterns. returning the first line with the ip address, in thise case "64 bytes is the first phrase in the line". 

    ping 192.168.0.1 -c 1 | grep "64 bytes"

Now I need to grab the 4th word of the line. quick search returned the command cut, removes sections from each line of files. cut by itself does not work, must specify a list of bytes, characters or fields. in this case, I would like to use white spaces to separate each word. cut + delimiter option + white space + field number returns the ip address.

    ping 192.168.0.1 -c 1 | grep "64 bytes" | -d " " -f 4

the only missing part is the colon.
quick google search returned tr command.
tr command translates or deletes characters to delete the colon from the ip address, using the translate + delete + colon

    ping 192.168.0.1 -c 1 | grep "64 bytes" | cut -d " " -f 4 | tr -d ":"

> Haha, Yes!

now that I have a the complete command, lets create a script.

ipsweep.sh is the script we are going to run. 
to run this scricp, change the permissions to execute it.
use the chmod + executable to start running the script.

    chmod +x ipsweep.sh

now the script is executable

this is great, but it only runs the hard coded ip address.
lets make the ip address a variable.