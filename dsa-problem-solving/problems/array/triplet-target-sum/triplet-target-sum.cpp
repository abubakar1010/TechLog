#include <iostream>
using namespace std;

int main(void)
{

    int values[] = {0, 1, 2, 3, 4, 6};

    int target;

    cout << "Enter the target value: ";

    cin >> target;

    int total_count = 0;

    for (int i = 0, length = sizeof(values) / sizeof(values[0]); i < length; i++)
    {
        for (int j = i + 1; j < length; j++)
        {
            for (int k = j + 1; k < length; k++)
            {
                if (values[i] + values[j] + values[k] == target)
                {
                    total_count++;
                }
            }
        }
    }

    cout << "Total Number of count: " << total_count << endl;

    return 0;
}