#include <iostream>
using namespace std;

int main(void)
{

    int length;

    cout << "Enter the length: ";

    cin >> length;

    for (int i = 1; i <= length; i++)
    {
        for (int j = 1; j <= length; j++)
        {
            if (i == ((length / 2) + 1) || j == ((length / 2) + 1) )
            {
                cout << "*";
            }
            else{
                cout<<" ";
            }
        }

        cout << endl;
    }

    return 0;
}