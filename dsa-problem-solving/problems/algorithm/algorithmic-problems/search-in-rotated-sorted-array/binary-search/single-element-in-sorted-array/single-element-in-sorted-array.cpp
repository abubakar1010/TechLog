#include <iostream>
#include <vector>
using namespace std;

int single_element_in_sorted_array(vector<int> arr)
{

    int length = arr.size();

    int start = 0, end = length - 1;

    while (start < end)
    {
        int middle = start + ((end - start) / 2);

        if (arr[middle - 1] != arr[middle] && arr[middle] != arr[middle + 1])
        {
            return middle;
        }
        else if (middle % 2 == 0)
        {
            if (arr[middle - 1] == arr[middle])
            {
                end = middle - 1;
            }
            else
            {
                start = middle + 1;
            }
        }
        else
        {
            if (arr[middle - 1] == arr[middle])
            {
                start = middle + 1;
            }
            else
            {
                end = middle - 1;
            }
        }
    }
    return -1;
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

    int result = single_element_in_sorted_array(array);

    cout << "ans: " << result << endl;

    return 0;
}