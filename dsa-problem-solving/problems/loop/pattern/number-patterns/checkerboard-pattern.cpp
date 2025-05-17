#include <iostream>
using namespace std;

int main()
{

    int height, width;

    cout << "Enter Height: ";

    cin >> height;

    cout << "Enter Width: ";

    cin >> width;

    for (int i = 1; i <= height; i++)
    {
        for (int j = 1; j <= width; j++)
        {
            if( (i+j) % 2 ==0){
                cout<<1;
            }else{
                cout<<2;
            }
        }        
        cout<<endl;
    }
    

    return 0;
}