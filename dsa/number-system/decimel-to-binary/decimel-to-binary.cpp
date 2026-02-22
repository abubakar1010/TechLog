#include <iostream>
#include <cmath>
using namespace std;

int main(void){

    int decimal;

    cin >> decimal;

    int ans = 0, power = 0;

    while (decimal > 0)
    {
        int reminder = decimal % 2;
        int quotient = decimal / 2;
        decimal = quotient;
        ans += reminder * pow(10, power);
        // cout << ans << reminder;
        power++;
    }

    cout << "ans " << ans << endl;
    
    

    return 0;
}