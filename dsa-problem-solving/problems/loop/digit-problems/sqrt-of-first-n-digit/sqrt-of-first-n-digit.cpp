#include <math.h>
#include <iostream>
using namespace std;

int main(void){

    int n;

    cout<<"Enter the value of N: ";
    cin>>n;

    for (int i = 1; i <= n; i++)
    {
        cout<<sqrt(i)<<" ";
    }
    

    

    return 0;
}