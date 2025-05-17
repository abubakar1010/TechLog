#include <iostream>
using namespace std;

int main(void)
{

    int n, sum = 0;

    cout << "Enter The Value of N: ";
    cin >> n;

    for (int i = 1; i <= n; i++)
    {
        if (i % 2 == 0)
        {
            sum -= i;
        }
        else
        {
            sum += i;
        }
    }

    cout << sum;

    return 0;
}