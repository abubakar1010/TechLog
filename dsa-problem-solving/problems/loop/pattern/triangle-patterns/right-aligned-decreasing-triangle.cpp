#include<iostream>
using namespace std;

int main(void){

    int height;

    cout << "Enter height: ";

    cin>> height;

    
    for (int i = 1; i <= height; i++)
    {
        for (int j = i; j <= height; j++)
        {
            cout << "*";
        }
        cout<<endl;
    }
    
    
    return 0;
}