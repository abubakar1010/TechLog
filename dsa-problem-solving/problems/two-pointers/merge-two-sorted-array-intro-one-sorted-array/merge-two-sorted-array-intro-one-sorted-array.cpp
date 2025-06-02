#include <iostream>
#include <vector>
using namespace std;

int main(void)
{

    int length_one, length_two;
    cout << "Enter the the length of two vector: ";
    cin >> length_one >> length_two;

    vector<int> vector_one;
    cout << "Enter the list of element of first vector: ";

    for (int i = 0; i < length_one; i++)
    {
        int element;
        cin >> element;
        vector_one.push_back(element);
    }

    vector<int> vector_two;
    cout << "Enter the list of element of second vector: ";

    for (int i = 0; i < length_two; i++)
    {
        int element;
        cin >> element;
        vector_two.push_back(element);
    }

    vector<int> result(length_one + length_two, 0);

    int v1 = 0, v2 = 0;

    for (int i = 0; i < length_one + length_two; i++)
    {
        if (v1 >= length_one)
        {
            result[i] = vector_two[v2];
            v2++;
        }
        else if (v2 >= length_two)
        {
            result[i] = vector_one[v1];
            v1++;
        }
        else
        {
            if (vector_one[v1] < vector_two[v2])
            {
                result[i] = vector_one[v1];
                v1++;
            }
            else
            {
                result[i] = vector_two[v2];
                v2++;
            }
        }
    }

    cout << "Merged and sorted vector: ";
    for (int element : result)
    {
        cout << element << " ";
    }

    cout << endl;

    return 0;
}