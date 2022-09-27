#include <iostream>
#include <fstream> // file library: create, write, & read
#include <string>
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
string MyString;

// store file data in string
ifstream MyReadFile("filename.txt");

// read file using getline() function to read file line by line
while (getline (MyFile, MyString)) 
{
    // output the text from the file
    cout << MyString;
}
// Close File
MyFile.close();

}