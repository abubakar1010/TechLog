#include <iostream>
#include <limits.h>
using namespace std;

int main(void)
{

    int n;

    cin >> n;

    int arr[n];

    for (int i = 0; i < n; i++)
    {
        int v;
        cin >> v;
        arr[i] = v;
    }

    int ans = INT_MIN;

    for (int i = 0; i < n; i++)
    {
        if (arr[i] > ans)
        {
            ans = arr[i];
        }
    }

    cout << "ans: " << ans << endl;
    return 0;
}