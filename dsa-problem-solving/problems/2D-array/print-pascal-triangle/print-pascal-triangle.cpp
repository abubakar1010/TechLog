#include <iostream>
#include <vector>
#include <iomanip>
using namespace std;

int getFactorialOf(int n)
{
    if (n == 0)
        return 1;
    return n * getFactorialOf(n - 1);
}

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
            int val = getFactorialOf(i) / (getFactorialOf(j) * getFactorialOf(i - j));
            row.push_back(val);
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
