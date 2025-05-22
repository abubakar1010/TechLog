#include <iostream>
using namespace std;

int main(void)
{

    // int arr1[5] = {1, 2, 3, 4, 5}, arr2[3] = {6, 7, 8}, lengthOne = 5, lengthTwo = 3, result[8];

    int lengthOne;

    cout << "Enter the length of first array: ";

    cin >> lengthOne;

    int lengthTwo;

    cout << "Enter the length of second array: ";

    cin >> lengthTwo;

    int arr_one[lengthOne];

    cout << "Enter the list of item of first array: " << endl;

    for (int i = 0; i < lengthOne; i++)
    {
        cin >> arr_one[i];
    }

    int arr_two[lengthTwo];

    cout << "Enter the list of item of second array: " << endl;

    for (int i = 0; i < lengthTwo; i++)
    {
        cin >> arr_two[i];
    }

    int result[lengthOne + lengthTwo];

    for (int i = 0; i < lengthOne + lengthTwo; i++)
    {
        if (i < lengthOne)
        {
            result[i] = arr_one[i];
        }
        else
        {
            result[i] = arr_two[i - lengthOne];
        }
    }

    for (int element : result)
    {
        cout << element << " ";
    }

    cout << endl;

    return 0;
}