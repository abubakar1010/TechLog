#include <iostream>
using namespace std;

int main(void)
{

    int row_one, column_one;

    cout << "Enter the value of row one and column one: ";

    cin >> row_one >> column_one;

    int matrix_one[row_one][column_one];

    cout << "Enter the matrix one: ";

    for (int i = 0; i < row_one; i++)
    {
        for (int j = 0; j < column_one; j++)
        {
            cin >> matrix_one[i][j];
        }
    }

    int row_two, column_two;

    cout << "Enter the value of row two and column two: ";

    cin >> row_two >> column_two;

    int matrix_two[row_two][column_two];

    cout << "Enter the matrix two: ";

    for (int i = 0; i < row_two; i++)
    {
        for (int j = 0; j < column_two; j++)
        {
            cin >> matrix_two[i][j];
        }
    }

    cout << "Matrix One:" << endl;

    for (int i = 0; i < row_one; i++)
    {
        for (int j = 0; j < column_one; j++)
        {
            cout << matrix_one[i][j] << " ";
        }
        cout << endl;
    }

    cout << "Matrix two:" << endl;

    for (int i = 0; i < row_two; i++)
    {
        for (int j = 0; j < column_two; j++)
        {
            cout << matrix_two[i][j] << " ";
        }
        cout << endl;
    }

    int multiplied_matrix[row_one][column_two];

    for (int i = 0; i < row_one; i++)
    {
        for (int j = 0; j < column_two; j++)
        {
            int result = 0;
            for (int k = 0; k < row_two; k++)
            {
                result += matrix_one[i][k] * matrix_two[k][j];
            }
            multiplied_matrix[i][j] = result;
        }
    }

    cout << "Multiplied Matrix: " << endl;

    for (int i = 0; i < column_one; i++)
    {
        for (int j = 0; j < row_two; j++)
        {
            cout << multiplied_matrix[i][j] << " ";
        }
        cout << endl;
    }
    

    return 0;
}