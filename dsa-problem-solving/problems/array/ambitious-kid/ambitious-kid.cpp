#include <iostream>
#include <stdlib.h>
#include <vector>
using namespace std;

int main(void)
{

    int length;
    cout << "Enter the length of array: ";
    cin >> length;

    vector<int> nums;
    cout << "Enter the list of element: ";

    for (int i = 0; i < length; i++)
    {
        int element;
        cin >> element;
        nums.push_back(element);
    }

    int min = INT32_MAX;

    for (int i = 0; i < length; i++)
    {
        int value = abs(nums[i]);
        if (value < min)
        {
            min = value;
        }
    }

    cout << min << endl;

    return 0;
}