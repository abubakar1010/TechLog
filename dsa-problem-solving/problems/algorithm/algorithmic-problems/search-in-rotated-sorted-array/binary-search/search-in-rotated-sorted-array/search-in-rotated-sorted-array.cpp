#include <iostream>
#include <vector>
using namespace std;
int binary_search(vector<int> &arr, int target)
{
    int start = 0, end = arr.size() - 1;

    // start = 0, end = 7;

    while (start <= end)
    {
        // middle 3
        int middle = start + ((end - start) / 2);

        if (arr[middle] == target)
            return middle;

        // check is left half are sorted

        if (arr[start] < arr[middle])
        {

            // let check is value exist in left half

            if (arr[start] <= target && target < arr[middle])
            {

                // then search in left half
                end = middle - 1;
            }
            else
            {
                // the target definitely exist on right half
                start = middle + 1;
            }
        }
        // then definitely right half are sorted
        else
        {

            // check is target exist in right half

            if (arr[middle] < target && target <= arr[end])
            {
                // then search in right half
                start = middle + 1;
            }
            else
            {
                // the value definitely exist in left half
                end = middle - 1;
            }
        }
    }

    return -1;
}
int main(void)
{
    // int length;
    // cout << "Enter the length of array: ";
    // cin >> length;
    // vector<int> array;
    // cout << "Enter the list of element: ";
    // for (int i = 0; i < length; i++)
    // {
    //     int element;
    //     cin >> element;
    //     array.push_back(element);
    // }

    // int target;
    // cout << "Enter the target value: ";
    // cin >> target;

    vector<int> array = {6, 7, 0, 1, 2, 3, 4, 5};

    int result = binary_search(array, 0);

    cout << result << " " << array[result] << endl;

    return 0;
}