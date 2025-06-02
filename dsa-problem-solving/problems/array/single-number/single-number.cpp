#include <iostream>
#include <vector>
using namespace std;

int singleNumber(vector<int> &nums)
{
    int result = 0;
    for (int element : nums)
    {
        result ^= element;
    }

    return result;
}

int main(void)
{

    int length;
    cout << "Enter the length of array: ";
    cin >> length;

    vector<int> nums;
    cout << "Enter the list of element: ";

    for (int i = 0; i < length; i++)
    {
        int element;
        cin >> element;
        nums.push_back(element);
    }

    cout << singleNumber(nums) << endl;

    return 0;
}

/*

Problem link: https://leetcode.com/problems/single-number/description/

*/