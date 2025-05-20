#include <iostream>
using namespace std;

int main(void)
{

    int fees[] = {70, 40, 90, 100, 120};

    int sum = 0;

    for (int element : fees)
    {
        sum += element;
    }
    cout << sum << endl;

    return 0;
}