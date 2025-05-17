#include <iostream>
using namespace std;

int main(){

    int height;

    cout<<"Height of pyramid: ";
    cin>>height;

    for (int i = 1; i <= height; i++)
    {
        for (int j = i; j <= height - 1; j++)
        {
            cout<<" ";
        }
        for (int j = 0; j < i+(i -1); j++)
        {
            cout<<"*";
        }
        
        cout<<endl;
    }
    

    return 0;
}