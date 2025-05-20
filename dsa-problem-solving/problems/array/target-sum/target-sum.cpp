#include <iostream>
using namespace std;

int main(void)
{

    int points[] = {1, 2, 3, 4, 5, 6, 7, 8, 9};

    int target;

    cout << "Enter the target value: ";

    cin >> target;

    int total_count = 0;

    for (int i = 0, length = sizeof(points) / sizeof(points[0]); i < length; i++)
    {
        for (int j = i + 1; j < length; j++)
        {
            if (points[i] + points[j] == target)
            {
                total_count++;
            }
        }
    }

    cout << "Total Number of pairs: " << total_count << endl;

    return 0;
}