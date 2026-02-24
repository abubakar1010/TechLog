#include <iostream>
#include <cmath>
using namespace std;

int main(void){

    int v;

    cin >> v;

    int ans = 0;

    for (int i = 0; v > 0 ; i++)
    {
        int quotient = v / 10;
        int reminder = v % 2;

        ans += reminder * pow(2, i); 
        
        v = quotient;
    }
    
    cout << "ans:" << ans << endl;
    

    return 0;
}