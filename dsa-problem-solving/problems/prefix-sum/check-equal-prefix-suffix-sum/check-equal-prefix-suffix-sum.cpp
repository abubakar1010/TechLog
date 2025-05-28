#include <iostream>
#include <vector>
using namespace std;

void check_equal_prefix_suffix_sum(vector<int> array);

int main(void)
{

    int length;
    cout << "Enter the the length: ";
    cin >> length;

    vector<int> array;
    cout << "Enter the list of element: ";

    for (int i = 0; i < length; i++)
    {
        int element;
        cin >> element;
        array.push_back(element);
    }

    check_equal_prefix_suffix_sum(array);

    cout << endl;

    return 0;
}

void check_equal_prefix_suffix_sum(vector<int> array)
{

    int totalSum = 0;

    bool result = false;

    for (int element : array)
    {
        totalSum += element;
    }
    int prefixSum = 0;

    for (int i = 0, length = array.size(); i = length; i++)
    {

        prefixSum += array[i];
        int suffixSum = totalSum - prefixSum;

        if (suffixSum == prefixSum)
        {
            result = true;
            break;
        }
    }

    cout << boolalpha << result;
}