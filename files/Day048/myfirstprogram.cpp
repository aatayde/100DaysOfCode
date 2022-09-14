#include <iostream>
using namespace std;

int main(){
    // My first comment!
    cout << "Hello, World! \n";
    cout << "I'm learning C++" << endl;

    // Variables
    const int x = 3, y = 6, z = 9;
    float pi = 3.14;
    char myFavoriteChar = 'X';
    string myString = "this is a string of words";
    bool lightSwitch = false;


    cout << "What's your name? \n";
    // declare variable before requesting input
    string name;
    // request input
    cin >> name;
    cout << "Hello, " << name << "! \n";
    cout << "What's your age? \n";
    int age;
    cin >> age;
    cout << "You were born in year " << 2022 - age << "!\n";

    return 0;
}