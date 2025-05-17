#include <iostream>
using namespace std;

int main(void){

    int number, digit=0;

    cout<<"Enter The Number: ";

    cin>>number;

    // for (int i = number;;)
    // {
    //     i /= 10;
    //     digit += 1;
    //     if(i==0){
    //         break;
    //     }
    // }

    while (true)
    {
        number /= 10;
        digit++;
        if(number == 0){
            break;
        }
    }
    

    cout<<digit;

    return 0;
}