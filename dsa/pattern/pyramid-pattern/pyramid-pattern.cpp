#include <iostream>
using namespace std;

int main(void)
{

    int n = 0;

    cin >> n;
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < n - i - 1; j++)
        {
            cout << " ";
        }

        for (int j = 0; j <= i; j++)
        {
            cout << j + 1;
        }

        for (int j = i; j > 0; j--)
        {
            cout << j;
        }

        cout << endl;
    }

    return 0;
}