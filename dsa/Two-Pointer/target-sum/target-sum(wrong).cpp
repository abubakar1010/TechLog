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

    int start = 0, end = 1;

    while (end < n)
    {
        if (arr[start] + arr[end] == target)
        {
            cout << "The array has a pair(" << arr[start] << "," << arr[end] <<") with target sum "<< target << endl;
            break;
        }
        end++;
    }

    return 0;
}