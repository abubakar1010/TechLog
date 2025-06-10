#include <iostream>
#include <vector>
using namespace std;

int peak_index_in_mountain_array(vector<int> arr)
{

    int length = arr.size();

    int start = 1, end = length - 2;

    while (start < end)
    {
        int middle = start + ((end - start) / 2);

        if (arr[middle - 1] < arr[middle] && arr[middle] > arr[middle + 1])
        {
            return middle;
        }
        else if (arr[middle - 1] < arr[middle])
        {
            start = middle + 1;
        }
        else
        {
            end = middle - 1;
        }

        return -1;
    }
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

    int result = peak_index_in_mountain_array(array);

    cout << "ans: " << result << endl;

    return 0;
}