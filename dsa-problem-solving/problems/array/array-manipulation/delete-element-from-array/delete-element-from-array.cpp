#include <iostream>
using namespace std;

int main(void)
{

    int length;

    cout << "Enter the length of Array: ";

    cin >> length;

    int arr[length];

    cout << "Enter the list of element: " << endl;

    for (int i = 0; i < length; i++)
    {
        cin >> arr[i];
    }

    int position;

    cout << "Enter the target position: ";
    cin >> position;

    // int length = 5, position = 3, arr[5] = {1, 2, 3, 4, 5};

    for (int i = position; i < length; i++)
    {
        arr[i - 1] = arr[i];
    }

    for (int i = 0; i < length - 1; i++)
    {
        cout << arr[i] << " ";
    }

    return 0;
}