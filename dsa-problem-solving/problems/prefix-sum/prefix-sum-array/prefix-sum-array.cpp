#include <iostream>
#include <vector>
using namespace std;

void prefixSumArray(vector<int> &array);

int main(void)
{

    int length;
    cout << "Enter the length of vector: ";
    cin >> length;

    vector<int> array;
    cout << "Enter the list of element: ";

    for (int i = 0; i < length; i++)
    {
        int element;
        cin >> element;
        array.push_back(element);
    }

    prefixSumArray(array);

    cout << "Result: ";
    for (int element : array)
    {
        cout << element << " ";
    }

    return 0;
}

void prefixSumArray(vector<int> &array)
{

    for (int i = 1, length = array.size(); i < length; i++)
    {
        array[i] += array[i - 1];
    }

    cout << endl;
}