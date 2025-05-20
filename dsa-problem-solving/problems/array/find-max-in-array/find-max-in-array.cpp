#include <iostream>
using namespace std;

int main(void)
{

    int stipends[] = {400, 200, 900, 3000, 300, 5000, 1000};

    int max = 0;

    for (int stipend : stipends)
    {
        if (stipend > max)
        {
            max = stipend;
        }
    }

    cout << max << endl;

    return 0;
}