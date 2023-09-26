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

man ping is the manuel for ping command. -c is the option for count.
ping + ip address + -c 1 only pings the ip address once.


the grep command returns lines tha tmatch patterns. returning the first line with the ip address, in thise case "64 bytes is the first phrase in the line". 

Now I need to grab the 4th word of the line. quick search returned the command cut, removes sections from each line of files. cut by itself does not work, must specify a list of bytes, characters or fields. in this case, I would like to use white spaces to separate each word. cut + delimiter option + white space + field number returns the ip address.