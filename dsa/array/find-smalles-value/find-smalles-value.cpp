#include <iostream>
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

    int ans = __INT32_MAX__;

    for (int i = 0; i < n; i++)
    {
        if (arr[i] < ans)
        {
            ans = arr[i];
        }
    }

    cout << "ans: " << ans << endl;
    return 0;
}