#include <iostream>
using namespace std;

int main(){

int menu;


do {

    cout << "1. Print Valid Items Unsorted. \n2. Print invalid records from an error file. \n3. Exit program. \n";
    cin >> menu;
    switch(menu){
        case 1:
            cout << "Valid Item Records \n";
            break;
        case 2:
            cout << "Invalid Item Records \n";
            break;
        case 3:
            cout << "Quitting program \n";
            break;
            // When I enter a number, code returns default
            // When I enter a letter, code returns infinate loop ???
        default:
            cout << "Please select a vaild option \n";
            break;
    }
    } while (menu != 3);
    
    return 0;
}