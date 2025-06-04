#include <iostream>
#include <vector>
using namespace std;

int maxArea(vector<int> &arr)
{
    int currentArea = 0;

    int length = arr.size();
    int left_pointer = 0, right_pointer = length - 1;

    while (left_pointer < right_pointer)
    {
        int area = (right_pointer - left_pointer) * min(arr[left_pointer], arr[right_pointer]);

        currentArea = max(currentArea, area);

        if (arr[left_pointer] < arr[right_pointer])
        {
            left_pointer++;
        }
        else
        {
            right_pointer--;
        }
    }

    return currentArea;
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


    cout << maxArea(arr);

    cout << endl;

    return 0;
}
