#include <iostream>
using namespace std;

int main(void)
{

    int target;

    cout << "Enter the target value: ";

    cin >> target;

    int salaries[] = {4900, 100020, 89043, 7802, 3987420, 3831801, 32131};

    int result = -1;

    for (int i = 0; i < sizeof(salaries) / sizeof(salaries[0]); i++)
    {
        if (target == salaries[i])
        {
            result = i;
            break;
        }
    }

    cout << result;

    return 0;
}