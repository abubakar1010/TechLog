#include <iostream>
using namespace std;

int main()
{

    int height;

    cout << "Enter Height: ";

    cin >> height;

    for (int i = 1; i <= height; i++)
    {
        for (int j = i; j <= height; j++)
        {
            cout<<j;
        }
        for (int j = 1; j <= i-1; j++)
        {
            cout<<j;
        }
        
        cout<<endl;
    }
    

    return 0;
}