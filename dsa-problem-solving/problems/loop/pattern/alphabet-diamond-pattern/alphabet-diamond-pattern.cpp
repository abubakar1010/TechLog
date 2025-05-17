#include <iostream>
using namespace std;

int main(void)
{

    int length;

    cout<<"Enter the length of diamond: ";

    cin>>length;

    for (int i = 1; i <= length; i++)
    {
        for (int j = i; j <= length - 1; j++)
        {
            cout<<" ";
        }
        for (int j = 1; j <= (2 * i) - 1; j++)
        {
            cout<<(char) ((j - 1) + 'A');
        }
        cout<<endl;
    }
    
    
    for (int i = length - 1; i >= 1; i--)
    {
        for (int j = i ; j <= length - 1; j++)
        {
            cout<<" ";
        }
        for (int j = 1; j <= (2 * i) - 1; j++)
        {
            cout<<(char) ((j - 1) + 'A');
        }
        cout<<endl;
    }
    

    return 0;
}