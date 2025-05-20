#include <iostream>
#include <vector>
using namespace std;

int main(void)
{

    int target;

    cout << "Enter the target value: ";

    cin >> target;
//occurrence
    cout << "Enter the list of element: " << endl;

    vector<int> prices;

    for (int i = 0; i < 10; i++)
    {
        int element;
        cin >> element;
        prices.push_back(element);
    }

    int total_count = 0;

    for (int element : prices)
    {
        if (target == element)
            total_count++;
    }

    cout << "Total Count: " << total_count << endl;

    return 0;
}