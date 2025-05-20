
/*
 * This program finds the unique element in an array where every other element appears twice.
 */

#include <iostream>
#include <vector>
using namespace std;

int main(void)
{

    // test cases that I have used

    // {1, 2, 1, 2, 3, 4, 3, 4, 5}
    // {7, 3, 7, 3, 9, 5, 5, 6, 6, 4}
    // {4, 4, 5, 6, 5, 6, 7}
    // {0, 4, 91, 0, 2, 6, 3, 2, 4, 9, 91, 21, 3, 9, 6};

    vector<int> values = {2, 3, 1, 3, 2, 4, 4, 5, 1};

    int unique = values[0];

    for (int i = 0; i < values.size(); i++)
    {
        for (int j = i + 1; j < values.size(); j++)
        {
            if (values[j] == unique)
            {
                values.erase(values.begin() + j);
                unique = values[i + 1];
                break;
            }
        }
        if (unique == values[i])
        {
            break;
        };
    }

    cout << "The unique element is: " << unique << endl;

    return 0;
}