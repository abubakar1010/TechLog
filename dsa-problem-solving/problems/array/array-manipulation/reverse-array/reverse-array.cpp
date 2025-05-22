#include <iostream>
using namespace std;

int main(void)
{

    int arr[6] = {1, 2, 3, 4, 5, 6};

    int length = 6;

    for (int i = 0; i < length; i++)
    {
        if (i >= length - 1 - i)
            break;
        int temp = arr[i];
        arr[i] = arr[length - 1 - i];
        arr[length - 1 - i] = temp;
    }

    for (int element : arr)
        cout << element << " ";

    return 0;
}