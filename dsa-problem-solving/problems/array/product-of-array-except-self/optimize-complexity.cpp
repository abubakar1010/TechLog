#include <iostream>
#include <vector>
using namespace std;

vector<int> product(vector<int> &arr)
{

    int length = arr.size();

    vector<int> result(length);

    for (int i = length - 1; i >= 0; i--)
    {
        if (i != length - 1)
        {

            result[i] = result[i + 1] * arr[i + 1];
        }
        else
        {
            result[i] = 1;
        }
    }

    int prefix = 1;

    for (int i = 1; i <= length; i++)
    {
        result[i - 1] = (result[i - 1] * prefix);
        prefix *= arr[i - 1];
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

    vector<int> result = product(arr);

    for (int element : result)
    {
        cout << element << " ";
    }

    cout << endl;

    return 0;
}
