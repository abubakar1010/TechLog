#include <iostream>
#include <vector>
using namespace std;

int main(void)
{

    int length;
    cout << "Enter the length: ";
    cin >> length;

    vector<int> array(length + 1, 0);
    cout << "Enter the list of element: ";

    for (int i = 1, size = array.size(); i < size; i++)
    {

        cin >> array[i];
    }

    for (int i = 1; i <= length; i++)
    {
        array[i] += array[i - 1];
    }

    int q, l, r;

    cout << "Enter the number of query: ";

    cin >> q;

    while (q--)
    {
        cout << "Enter the value of l and r: ";
        cin >> l >> r;
        cout << "Sum of element from l to r: ";
        cout << array[r] - array[l - 1];
        cout << endl;
    }

    return 0;
}