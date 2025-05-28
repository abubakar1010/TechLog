#include <iostream>
#include <stdlib.h>
#include <vector>
using namespace std;

int main(void)
{

    int length;
    cout << "Enter the the length of array: ";
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
    cout << "Enter the value of target: ";
    cin >> target;

    int left_pointer = 0, right_pointer = 1;

    while (left_pointer < length and right_pointer < length)
    {
        if (abs(array[left_pointer] - array[right_pointer]) == target)
        {
            cout << boolalpha << true << endl;
            return 0;
        }

        if (abs(array[left_pointer] - array[right_pointer]) < target)
        {
            right_pointer++;
        }
        else if (abs(array[left_pointer] - array[right_pointer]) > target)
        {
            left_pointer++;
        }
    }

    cout << boolalpha << false;

    cout << endl;

    return 0;
}