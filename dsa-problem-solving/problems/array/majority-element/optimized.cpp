#include <algorithm>
#include <iostream>
#include <vector>
using namespace std;

int majorityElement(vector<int> &arr)
{
    sort(arr.begin(), arr.end());

    int count = 0, result = arr[0];

    for (int i = 0, length = arr.size(); i < length; i++)
    {
        if (arr[i] == result)
        {
            count++;
        }
        else
        {
            result = arr[i];
            count = 1;
        }

        if (count > length / 2)
        {

            return arr[i];
        }
    }
    return 0;
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