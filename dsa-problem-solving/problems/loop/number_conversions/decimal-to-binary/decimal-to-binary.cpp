#include <iostream>
#include <math.h>
using namespace std;

int main(void)
{

    int decimal, result = 0;

    cout << "Enter The Decimal Value: ";
    cin >> decimal;

    int exponent = 0;

    while (decimal > 0)
    {
        double exponential = pow(10, exponent);
        result += (decimal % 2) * exponential;
        decimal /= 2;
        exponent++;
    }

    cout << "Value in binary: " << result;
}



// #include <iostream>
// #include <math.h>
// using namespace std;

// int main(void)
// {

//     int decimal, result = 0;

//     cout << "Enter The Decimal Value: ";
//     cin >> decimal;

//     int exponent = 0;

//     while (decimal > 0)
//     {
//         //  if(result == 0){
//         //     cout<<result<<endl;
//         // }
//         // cout<<(decimal % 2)<<" "<< pow(10, exponent)<<endl;
//         cout<<result<<"+"<<(decimal % 2) * pow(10, exponent)<<endl;
//         int multipleBy = pow(10, exponent);
//         int r = decimal % 2;
//         int addition = (pow(10, exponent) * (decimal % 2));
//         cout<<addition<<" "<<(pow(10, exponent)) * (decimal % 2)<<endl;
//         result += addition;
//         cout<<result<<"+"<<(decimal % 2) * pow(10, exponent)<<endl;
//         decimal /= 2;
//         exponent++;
//     }

//     cout << "Value in binary: " << result;
// }