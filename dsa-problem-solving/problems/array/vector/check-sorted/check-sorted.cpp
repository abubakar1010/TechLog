#include <iostream>
#include <vector>
using namespace std;

int main(void)
{

    vector<int> serial;

    cout << "Enter the list of Element: " << endl;

    for (int i = 0; i < 10; i++)
    {
        int element;
        cin >> element;
        serial.push_back(element);
    }

    bool isSorted = true;

    for (int i = 0, length = serial.size(); i < length; i++)
    {
        if (serial[i] > serial[i + 1])
        {
            isSorted = false;
            break;
        }
    }
    cout << "The array is sorted. Is it true? " << (isSorted? "True" : "False") << endl;

    return 0;
}