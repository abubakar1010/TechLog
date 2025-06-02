#include <iostream>
using namespace std;

int main(void)
{

    int dimension, row, column;

    cout << "Enter the number of dimension, row and column: ";

    cin >> dimension >> row >> column;

    int array[dimension][row][column];

    cout << "Enter the" << dimension << "dimensional array: ";

    for (int i = 0; i < dimension; i++)
    {
        for (int j = 0; j < row; j++)
        {
            for (int k = 0; k < column; k++)
            {
                cin >> array[i][j][k];
            }
        }
    }

    cout << "Three dimensional array:" << endl;

    for (int i = 0; i < dimension; i++)
    {
        for (int j = 0; j < row; j++)
        {
            for (int k = 0; k < column; k++)
            {
                cout << array[i][j][k] << " ";
            }
            cout << endl;
        }
    }

    return 0;
}