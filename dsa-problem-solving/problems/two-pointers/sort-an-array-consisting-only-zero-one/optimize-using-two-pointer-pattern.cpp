#include <iostream>
#include <vector>
using namespace std;

void sort(vector<int> &array);

int main(void)
{

    int length;

    cout << "Enter the length: ";

    cin >> length;

    vector<int> array;

    cout << "Enter the list of element:" << endl;

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
    int left_ptr = 0;
    int right_ptr = array.size() - 1;

    while (left_ptr < right_ptr)
    {
        if (array[left_ptr] == 1 && array[right_ptr] == 0)
        {
            array[left_ptr++] = 0;
            array[right_ptr--] = 1;
        }
        if (array[left_ptr] == 0)
        {
            left_ptr++;
        }
        if (array[right_ptr] == 1)
        {
            right_ptr--;
        }
    }
}