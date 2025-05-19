#include <iostream>
#include <math.h>
using namespace std;


int main(void){
    
    int binary, result=0;

    cout<<"Enter The Binary Value: ";
    cin>>binary;

    int exponent= 0;

    while (binary > 0)
    {
        result += (binary % 10) *  pow(2, exponent);
        binary /= 10;
        exponent++;
    }
    
    cout<<"Value in decimal: "<<result;

}