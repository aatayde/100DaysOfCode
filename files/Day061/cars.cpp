#include <iostream>
#include <fstream> // file library: create, write, & read
using namespace std;

// Objective: Creating random records
int main(){

// Create & open a text file
ofstream MyFile("filename.txt");

// Write to the file
MyFile << "Hello, World!";

// Close the file
MyFile.close();

// set string
string myString;

// store file data in string
ifstream MyReadFile("filename.txt");

}