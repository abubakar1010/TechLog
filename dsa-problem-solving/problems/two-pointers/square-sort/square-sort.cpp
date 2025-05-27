#include <iostream>
#include <stdlib.h>
#include <vector>
#include <math.h>
using namespace std;

vector<int> sortedSquares(vector<int> &array);

int main(void)
{

    int length;

    cout << "Enter the length of array: ";

    cin >> length;

    vector<int> array;

    cout << "Enter the list of item: ";

    for (int i = 0; i < length; i++)
    {
        int element;
        cin >> element;
        array.push_back(element);
    }

    vector<int> result = sortedSquares(array);

    cout << "SortedSquaresed array: ";

    for (int element : result)
    {
        cout << element << " ";
    }

    cout << endl;

    return 0;
}

vector<int> sortedSquares(vector<int> &array)
{

    int n = array.size();
    vector<int> result(n);

    int left_pointer = 0, right_pointer = n - 1, pos = n - 1;

    while (pos >= 0)
    {
        if (abs(array[left_pointer]) > abs(array[right_pointer]))
        {
            result[pos] = abs(array[left_pointer]) * abs(array[left_pointer]);
            left_pointer++;
            pos--;
        }
        else
        {
            result[pos] = abs(array[right_pointer]) * abs(array[right_pointer]);
            right_pointer--;
            pos--;
        }
    }

    return result;
}