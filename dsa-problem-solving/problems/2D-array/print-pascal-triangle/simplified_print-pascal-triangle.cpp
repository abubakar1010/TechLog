#include <iostream>
#include <vector>
#include <iomanip>
using namespace std;

int main()
{
    int n;
    cout << "Enter the number of rows for Pascal's Triangle: ";
    cin >> n;

    vector<vector<int>> pascalTriangle;

    for (int i = 0; i < n; i++)
    {
        vector<int> row;
        for (int j = 0; j <= i; j++)
        {
            if (j == 0 || j == i)
            {
                int val = 1;
                row.push_back(val);
            }
            else
            {
                int val = pascalTriangle[i - 1][j] + pascalTriangle[i - 1][j - 1];
                row.push_back(val);
            }
        }
        pascalTriangle.push_back(row);
    }

    cout << "\nPascal's Triangle:\n\n";

    for (int i = 0; i < n; i++)
    {
        // Padding spaces
        cout << string((n - i - 1) * 2, ' ');

        for (int j = 0; j <= i; j++)
        {
            cout << setw(4) << pascalTriangle[i][j];
        }
        cout << endl;
    }

    return 0;
}
