#include <iostream>
using namespace std;

int main(void)
{

    int n, result = 1;

    cout << "Enter the value of N: ";
    cin >> n;

    for (int i = 1; i <= n; i++)
    {
        result *= i;
    }

    cout << result << endl;

    return 0;
}