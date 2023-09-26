# Day 79

## IP Sweep

learning material from the internet

this code is written in bash

the script runs in linux

## learn with me

please feel free to share this code, I put it together from youtube videos & google searches

##  Dependencies

on Linux install the following packages:
```
sudo apt install net-tools
```
```
sudo apt install nmap
```

### commands used
- cmmod
- ifconfig
- ping
- grep
- cut

### Objective

ping all devices on a network

### Bonus 

list all open ports


### Findings
ping continuously sends packages to a device. only one ping is neccessary.

    ping 192.168.0.1

man ping is the manuel for ping command. -c is the option for count.
ping + ip address + count + 1 only pings the ip address once.

    ping 192.168.0.1 -c 1


the grep command returns lines that match patterns. returning the first line with the ip address, in thise case "64 bytes is the first phrase in the line". 

    ping 192.168.0.1 -c 1 | grep "64 bytes"

Now I need to grab the 4th word of the line. quick search returned the command cut, removes sections from each line of files. cut by itself does not work, must specify a list of bytes, characters or fields. in this case, I would like to use white spaces to separate each word. cut + delimiter option + white space + field number returns the ip address.

    ping 192.168.0.1 -c 1 | grep "64 bytes" | -d " " -f 4

the only missing part is the colon.
quick google search returned tr command.
tr command translates or deletes characters to delete the colon from the ip address, using the translate + delete + colon

    ping 192.168.0.1 -c 1 | grep "64 bytes" | cut -d " " -f 4 | tr -d ":"

> Haha, Yes!

now that we have a the complete command, lets create a script.

ipsweep.sh is the script we are going to run. 
to run this scricp, change the permissions to execute it.
use the chmod + executable to start running the script.

    chmod +x ipsweep.sh

now the script is executable

this is great, but it only runs the hard coded ip address.
lets make the ip address a variable.

    ping $ip -c 1 | grep "64 bytes" | cut -d " " -f 4 | tr -d ":"

this doesn't work...

> destination address required.

translation: variable for ip address is not defined.
lets create a loop that goes from 1-254 to find all addresses in a network. searching for a loop. the for loop with a sequence of 1-254 will work.

    for ip in `seq 1 254` ; do

this get stuck searching for the ip address that doesn't respond.
search how to work run without waiting for response. found a stack [overflow](https://stackoverflow.com/questions/67466985/how-to-loop-run-an-executable-multiple-time-without-waiting-for-it-to-finish) on how to launch a process without waiting for it to end. enter an & at the end of the ping command.

> Haha, Yes!

success! we are getting closer.
this printed the devices on the our network.

Lets remove some hard coding so we can run on a desired ip address.
replacing hard coded ip address with an argument.

now run script with the argument

    ./script 192.168.0

Nice! Now lets catch any syntax errors when entering an IP address.
lets catch errors with an if statement. if argument is equal to nothing, echo the expected syntax.

    if [ "$1" == ""]
    then
    echo "error"

    else
    code runs here!!!
