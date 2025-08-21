#include <iostream>
#include <vector>
using namespace std;

bool isValid(vector<int> &arr, int n, int m, int maxAllowed)
{
    int painters = 1, units = 0;

    for (int i = 0; i < n; i++)
    {
        if (arr[i] > maxAllowed)
            return false;

        if (arr[i] + units <= maxAllowed)
        {
            units += arr[i];
        }
        else
        {
            units = arr[i];
            painters++;
        }
    }

    return painters > m ? false : true;
}

int minimum_time_to_paint(vector<int> arr, int n, int m)
{

    int sum = 0, maximum = INT32_MIN;

    for (int element : arr)
    {
        sum += element;
        maximum = max(element, maximum);
    }

    int start = maximum, end = sum, result = -1;

    while (start <= end)
    {
        int middle = start + ((end - start) / 2);

        if (isValid(arr, n, m, middle))
        {
            result = middle;
            end = middle - 1;
        }
        else
        {
            start = middle + 1;
        }
    }
    return result;
}

int main(void)
{

    int length;
    cout << "Enter the length of array: ";
    cin >> length;

    vector<int> array;
    cout << "Enter the list of element: ";

    for (int i = 0; i < length; i++)
    {
        int element;
        cin >> element;
        array.push_back(element);
    }

    int m;
    cout << "Enter the number of painterss: ";
    cin >> m;

    int result = minimum_time_to_paint(array, length, m);

    cout << "ans: " << result << endl;

    return 0;
}