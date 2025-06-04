#include <iostream>
#include <vector>
using namespace std;

vector<int> product(vector<int> &arr)
{

    vector<int> result;

    for (int i = 0, length = arr.size(); i < length; i++)
    {
        int product = 1;
        for (int j = 0; j < length; j++)
        {
            if (arr[i] == arr[j])
                continue;
            product *= arr[j];
        }

        result.push_back(product);
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
