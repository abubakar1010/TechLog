#include <iostream>
#include <vector>
using namespace std;

int num_of_beneficiaries()
{

    int peoples, threshold;

    cout << "Enter the number of people and threshold: ";

    cin >> peoples >> threshold;

    vector<int> golds;
    cout << "Enter the list of element: ";

    for (int i = 0; i < peoples; i++)
    {
        int element;
        cin >> element;
        golds.push_back(element);
    }

    int beneficiaries = 0;
    int donetable = 0;

    for (int i = 0; i < peoples; i++)
    {
        if (golds[i] >= threshold)
        {
            donetable += golds[i];
            golds[i] = 0;
        }
        else if (golds[i] == 0 && donetable > 0)
        {
            golds[i]++;
            donetable--;
            beneficiaries++;
        }
    }

    return beneficiaries;
}

int main(void)
{

    int number_of_testCase;
    cout << "Enter the number of testcase: ";
    cin >> number_of_testCase;

    for (int i = 0; i < number_of_testCase; i++)
    {
        cout << num_of_beneficiaries() << endl;
    }

    cout << endl;

    return 0;
}

//Problem link: https://codeforces.com/problemset/problem/2014/A