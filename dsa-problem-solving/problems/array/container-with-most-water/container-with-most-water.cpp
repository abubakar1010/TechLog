#include <iostream>
#include <vector>
using namespace std;

int maxArea(vector<int> &arr)
{
    int currentArea = 0;
    for (int i = 0, length = arr.size(); i < length; i++)
    {
        for (int j = i + 1; j < length; j++)
        {
            if (arr[i] < arr[j])
            {
                int area = arr[i] * (j - i);
                if (area > currentArea)
                {
                    currentArea = area;
                }
            }
            else
            {
                int area = arr[j] * (j - i);
                if (area > currentArea)
                {
                    currentArea = area;
                }
            }
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
