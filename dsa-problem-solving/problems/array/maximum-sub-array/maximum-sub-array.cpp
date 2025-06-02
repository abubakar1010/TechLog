#include <iostream>
#include <vector>
using namespace std;

int main(void)
{

    int length;
    cout << "Enter the length of array: ";
    cin >> length;

    vector<int> arr;
    cout << "Enter the list of element: ";

    for (int i = 0; i < length; i++)
    {
        int element;
        cin >> element;
        arr.push_back(element);
    }

    int max_sum = INT32_MIN;

    for (int i = 0; i < length; i++)
    {
        int sum = 0;
        for (int j = i; j <= length; j++)
        {
            sum += arr[j];
            max_sum = max(sum, max_sum);
        }
    }

    cout << max_sum << endl;

    return 0;
}