#include <iostream>
#include <vector>
using namespace std;

int main(void)
{

    int target;

    cout << "Enter the target value: ";

    cin >> target;

    vector<int> salary;

    cout << "Enter the list of element: " << endl;

    for (int i = 0; i < 10; i++)
    {
        int element;
        cin >> element;
        salary.push_back(element);
    }

    int total_count = 0;

    for (int element : salary)
    {
        if (element > target)
            total_count++;
    }

    cout << "Total Count: " << total_count << endl;

    return 0;
}