/*
 * This program finds the second largest element in an array.
 */

#include <iostream>
using namespace std;

int main(void)
{

    int values[10] = {3, 8, 12, 8, 0, 2, 18, 6, 9, 18};
    // int values[10] = {12, 8, 8, 8, 8, 8, 8, 8, 8, 18};
    // int values[10] =  {1, 1, 1, 1, 1, 1, 1, 1, 1, 0};
    // int values[10] =  {5, 5, 5, 5, 5, 5, 5, 5, 5, 5};

    int largest_element = INT32_MIN;

    for (int i = 0; i < 10; i++)
    {
        if (largest_element < values[i])
        {
            largest_element = values[i];
        }
    }

    int second_largest_element = INT32_MIN;

    for (int i = 0; i < 10; i++)
    {
        if (second_largest_element < values[i] && values[i] < largest_element)
        {
            second_largest_element = values[i];
        }
    }

    cout << "Second largest element is: " << second_largest_element << endl;
    return 0;
}