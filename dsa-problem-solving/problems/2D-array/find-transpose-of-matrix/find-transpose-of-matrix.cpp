#include <iostream>
using namespace std;

int main(void)
{

    int row, column;

    cout << "Enter the number of row and column: ";

    cin >> row >> column;

    int array[row][column];

    cout << "Enter value of matrix: ";

    for (int i = 0; i < row; i++)
    {
        for (int j = 0; j < column; j++)
        {
            cin >> array[i][j];
        }
    }

    cout << "Matrix:" << endl;

    for (int i = 0; i < row; i++)
    {
        for (int j = 0; j < column; j++)
        {
            cout << array[i][j] << " ";
        }
        cout << endl;
    }

    cout << "Transpose of matrix:" << endl;

    for (int i = 0; i < column; i++)
    {
        for (int j = 0; j < row; j++)
        {
            cout << array[j][i] << " ";
        }
        cout << endl;
    }

    return 0;
}