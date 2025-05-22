#include <iostream>
using namespace std;

int main(void)
{

    int length;

    cout << "Enter the length of Array: ";

    cin >> length;

    int arr[length + 1];

    cout << "Enter the list of element: " << endl;

    for (int i = 0; i < length; i++)
    {
        cin >> arr[i];
    }

    int position;

    cout << "Enter the target position: ";
    cin >> position;

    int target;

    cout << "Enter the target value: ";
    cin >> target;

    // int length = 5, position = 3, target = 303, arr[6] = {1, 2, 3, 4, 5};

    for (int i = length; i >= position; i--)
    {
        arr[i] = arr[i - 1];
    }

    arr[position - 1] = target;

    for (int element : arr)
    {
        cout << element << " ";
    }

    return 0;
}