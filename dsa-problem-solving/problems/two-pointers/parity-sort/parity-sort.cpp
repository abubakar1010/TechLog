#include <iostream>
#include <vector>
using namespace std;

void sort(vector<int> &array);

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

    sort(array);

    cout << "Sorted array: ";

    for (int element : array)
    {
        cout << element << " ";
    }

    cout << endl;

    return 0;
}

void sort(vector<int> &array)
{

    int left_pointer = 0, right_pointer = array.size() - 1;

    while (left_pointer < right_pointer)
    {
        if (array[left_pointer] % 2 != 0 && array[right_pointer] % 2 == 0)
        {
            int temp = array[left_pointer];
            array[left_pointer] = array[right_pointer];
            array[right_pointer] = temp;
            left_pointer++;
            right_pointer--;
        }
        else
        {
            if (array[left_pointer] % 2 == 0)
            {
                left_pointer++;
            }
            if (array[right_pointer] % 2 != 0)
            {
                right_pointer--;
            }
        }
    }
}