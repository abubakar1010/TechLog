#include <iostream>
using namespace std;

int main(void)
{

    int starting_point, ending_point;

    cout << "Enter The Starting Point: ";

    cin >> starting_point;

    cout << "Enter The Ending Point: ";

    cin >> ending_point;

    for (int i = starting_point; i <= ending_point; i++)
    {
        bool isPrime = true;
        for (int j = 2; j * j <= i; j++)
        {
            if (i % j == 0)
            {
                isPrime = false;
                break;
            }
        }
        if (isPrime && i > 1)
        {
            cout << i << " ";
        }
    }

    return 0;
}