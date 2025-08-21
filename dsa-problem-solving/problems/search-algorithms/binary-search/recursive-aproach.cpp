#include <iostream>
#include <vector>
using namespace std;
int binary_search(vector<int> &arr, int target, int start, int end)
{

    if(start <= end)
    {
        int middle = start + ((end - start) / 2);
        if (arr[middle] < target)
        {
            return binary_search(arr, target, middle + 1, end);
        }
        else if (arr[middle] > target)
        {
            return binary_search(arr, target, start, middle - 1);
        }
        else
        {
            return middle;
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

    int target;
    cout << "Enter the target value: ";
    cin >> target;

    int start = 0, end = array.size() - 1;

    int result = binary_search(array, target, start, end);

    cout << result << " " << array[result] << endl;

    return 0;
}