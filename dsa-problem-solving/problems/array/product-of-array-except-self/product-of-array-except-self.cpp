#include <iostream>
#include <vector>
using namespace std;

vector<int> product(vector<int> &arr)
{

    int total_product = 1;

    for (int i = 0, length = arr.size(); i < length; i++)
    {
        total_product *= arr[i];
    }

    vector<int> result;

    for (int i = 0, length = arr.size(); i < length; i++)
    {
        result.push_back(total_product / arr[i]);
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
