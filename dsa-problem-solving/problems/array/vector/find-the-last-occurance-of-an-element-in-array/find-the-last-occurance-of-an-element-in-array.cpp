#include <iostream>
#include <vector>
using namespace std;

int main(void)
{

    int target;

    cout << "Enter the target value:";

    cin >> target;

    cout << "Enter the list of element: " << endl;

    vector<int> marks;

    for (int i = 0; i < 5; i++)
    {
        int element;
        cin >> element;
        marks.push_back(element);
    }

    int result = -1;

    for (int i = 0, length = marks.size(); i < length; i++)
    {
        if (marks[i] == target)
        {
            result = i;
        }
    }

    cout << result << endl;

    return 0;
}