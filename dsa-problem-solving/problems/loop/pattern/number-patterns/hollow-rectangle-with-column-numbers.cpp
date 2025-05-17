#include <iostream>
using namespace std;

int main()
{

    int height, width;

    cout << "Enter Height: ";

    cin >> height;

    cout << "Enter Width: ";

    cin >> width;

    for (int i = 1; i <= height; i++)
    {
        for (int j = 1; j <= width; j++)
        {
            if (j == 1 || i == 1 || j == width || i == height)
            {
                cout << j;
            }else{
                cout<<" ";
            }
        }

        cout << endl;
    }

    return 0;
}