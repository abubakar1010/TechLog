#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main(void)
{

    vector<int> values = {1, 2, 3, 4, 5, 6};

    int k = 4;

    k = k % values.size();

    reverse(values.begin(), values.end());
    reverse(values.begin(), values.begin() + k);
    reverse(values.begin() + k, values.end());

    for (int element : values)
    {
        cout << element << " ";
    }

    cout << endl;
    return 0;
}