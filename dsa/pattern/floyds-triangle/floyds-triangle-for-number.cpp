#include <iostream>
using namespace std;

int main(void)
{

    int n;

    cin >> n;

    int s = 0;
    for (int i = 0; i < n; i++)
    {
        int v = s;
        for (int j = 0; j <= i; j++)
        {
            cout << v + 1 ;
            v++;
            if(j == i){
                s = v;
            }
        }
        cout << endl;
    }
    

        return 0;
}