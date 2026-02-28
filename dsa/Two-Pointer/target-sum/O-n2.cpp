#include <iostream>
#include <format>
using namespace std;

int main(void)
{

    int n;
    cout << "Enter the length of array: ";
    cin >> n;

    int target;
    cout << "Enter the target value: ";
    cin >> target;

    int arr[n];
    cout << "Enter the list of element: ";

    for (int i = 0; i < n; i++)
    {
        int element;
        cin >> element;
        arr[i] = element;
    }

    for (int i = 0; i < n; i++)
    {
        for (int j = i + 1; j < n; j++)
        {
            if (arr[i] + arr[j] == target)
            {
                cout << "The array has a pair(" << arr[i] << "," << arr[j] << ") with target sum " << target << endl;
                return 0;
            }
        }
    }

    return 0;
}