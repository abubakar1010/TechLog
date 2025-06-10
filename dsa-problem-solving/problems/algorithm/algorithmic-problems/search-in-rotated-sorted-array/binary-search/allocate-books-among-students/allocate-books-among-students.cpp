#include <iostream>
#include <vector>
using namespace std;

bool isValid(vector<int> &arr, int n, int m, int maxAllowed)
{
    int student = 1, pages = 0;

    for (int i = 0; i < n; i++)
    {
        if (arr[i] > maxAllowed)
            return false;

        if (arr[i] + pages <= maxAllowed)
        {
            pages += arr[i];
        }
        else
        {
            pages = arr[i];
            student++;
        }
    }

    return student > m ? false : true;
}

int allocate_books(vector<int> arr, int n, int m)
{

    int sum = 0;

    for (int element : arr)
    {
        sum += element;
    }

    int start = 0, end = sum, result = -1;

    while (start <= end)
    {
        int middle = start + ((end - start) / 2);

        if (isValid(arr, n, m, middle))
        {
            result = middle;
            end = middle - 1;
        }
        else
        {
            start = middle + 1;
        }
    }
    return result;
}

int main(void)
{

    int length;
    cout << "Enter the length of array: ";
    cin >> length;

    vector<int> array;
    cout << "Enter the list of element: ";

    for (int i = 0; i < length; i++)
    {
        int element;
        cin >> element;
        array.push_back(element);
    }

    int m;
    cout << "Enter the number of students: ";
    cin >> m;

    int result = allocate_books(array, length, m);

    cout << "ans: " << result << endl;

    return 0;
}