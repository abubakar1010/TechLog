#include <iostream>
using namespace std;

int main(void)
{

    int values[] = {1, 2, 3, 4, 5, 6};

    int result[6];

    int k = 16;

    // cin >> k;
    int length = sizeof(values) / sizeof(values[0]);

    if (k >= length)
    {
        k = k % length;
    }

    for (int j = k, i = 0, length = sizeof(values) / sizeof(values[0]); j > 0; j--, i++)
    {
        result[i] = values[length - j];
    }

    for (int j = 0, length = sizeof(values) / sizeof(values[0]); j < length - k; j++)
    {
        result[j + k] = values[j];
    }

    for (int element : result)
    {
        cout << element << " ";
    }

    cout << endl;

    return 0;
}