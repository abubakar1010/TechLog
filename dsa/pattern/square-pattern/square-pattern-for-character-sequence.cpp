// #include <iostream>
// using namespace std;

// int main(void){

//     int n;

//     cin>>n;

//     int value = 0;
//     for (int i = 0; i < n; i++)
//     {

//         for (int j = 0; j < n; j++)
//         {
//             cout << value << " ";
//             value++;
//         }
//         cout << endl;
//     }
    

//     return 0;
// }

#include <iostream>
using namespace std;

int main(void){

    int n;

    cin>>n;

    for (int i = 0; i < n; i++)
    {

        for (int j = 0; j < n; j++)
        {
            cout << (char)((j+1) + (i * n) + 97 - 1) << " ";
            
        }
        cout << endl;
    }
    

    return 0;
}