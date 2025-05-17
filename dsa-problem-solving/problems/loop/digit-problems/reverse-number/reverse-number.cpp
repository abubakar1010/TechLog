#include <iostream>
using namespace std;

int main(void){

    int number, result=0;

    cout<<"Enter the number: ";

    cin>>number;

    while (number>0)
    {
        result = (result * 10) + (number % 10);
        number /= 10;
    }

    cout<<result;

    return 0;
}