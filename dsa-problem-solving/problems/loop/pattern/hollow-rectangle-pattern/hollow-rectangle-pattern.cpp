#include <iostream>
using namespace std;

int main(void)
{
    int row, column;
    cout << "row: ";
    cin >> row;
    cout << "column: ";
    cin >> column;

    for (int i = 0; i < column; i++)
    {
        for (int j = 0; j < row; j++)
        {
            if (j == 0 || j == row - 1 || i == 0 || i == column - 1)
            {
                cout << "*";
            }else{
                cout << " ";
            }
        }
        cout << endl;
    }

    return 0;
}