#include <iostream>
#include <vector>
using namespace std;
int binary_search(vector<int> &arr, int target)
{
    int start = 0, end = arr.size() - 1;

    while (start <= end)
    {
        int middle = start + ((end - start) / 2);
        if (arr[middle] < target)
        {
            start = middle + 1;
        }
        else if (arr[middle] > target)
        {
            end = middle - 1;
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

    int result = binary_search(array, target);

    cout << result << " " << array[result]  << endl ;

    return 0;
}