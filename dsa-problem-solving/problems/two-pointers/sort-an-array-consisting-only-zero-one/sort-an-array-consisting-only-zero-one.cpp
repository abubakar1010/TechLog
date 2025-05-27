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

    int countOfZero = 0;

    for (int element : array)
    {
        if (element == 0)
            countOfZero++;
    }

    for (int i = 0, length = array.size(); i < length; i++)
    {
        if (i < countOfZero)
        {
            array[i] = 0;
        }
        else
        {
            array[i] = 1;
        }
    }
}