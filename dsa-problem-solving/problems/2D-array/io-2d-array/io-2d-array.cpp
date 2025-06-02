#include <iostream>
using namespace std;

int main(void)
{

    int row, column;

    cout << "Enter the number of row and column: ";

    cin >> row >> column;

    int array[row][column];

    cout << "Enter the 2 dimensional array: ";

    for (int i = 0; i < row; i++)
    {
        for (int j = 0; j < column; j++)
        {
            cin >> array[i][j];
        }
    }

    cout << "Tow dimensional array:" << endl;

    for (int i = 0; i < row; i++)
    {
        for (int j = 0; j < column; j++)
        {
            cout << array[i][j] << " ";
        }
        cout << endl;
    }

    return 0;
}