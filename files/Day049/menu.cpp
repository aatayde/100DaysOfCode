#include <iostream>
using namespace std;

int main(){

int menu;

cout << "1. Print Valid Items Unsorted. \n 2. Print invalid records from an error file. \n 3. Exit program. \n";

cin >> menu;

    switch(menu){
        case 1:
            cout << "Valid Item Records";
            break;
        case 2:
            cout << "Invalid Item Records";
            break;
        case 3:
            cout << "Quiting program";
            break;
    }
    
    return 0;
}