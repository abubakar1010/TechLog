#include <algorithm>
#include <iostream>
#include <vector>
using namespace std;

int majorityElement(vector<int> &arr)
{

    int frequency = 0, result = 0;

    for (int i = 0, length = arr.size(); i < length; i++)
    {
        if (frequency == 0)
        {
            result = arr[i];
        }

        if (arr[i] == result)
            frequency++;
        else
            frequency--;
    }

    return result;
}

int main(void)
{

    int length;
    cout << "Enter the  length of array: ";
    cin >> length;

    vector<int> arr;
    cout << "Enter the list of element: ";

    for (int i = 0; i < length; i++)
    {
        int element;
        cin >> element;
        arr.push_back(element);
    }

    cout << majorityElement(arr);

    cout << endl;

    return 0;
}