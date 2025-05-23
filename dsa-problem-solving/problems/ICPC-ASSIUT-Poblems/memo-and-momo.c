#include <stdio.h>

int main(void)

{

    long long int a, b, k;

    scanf("%lli %lli %lli", &a, &b, &k);

    if (a % k == 0 && b % k == 0)
    {
        printf("Both\n");
    }
    else if (a % k == 0 && b % k != 0)
    {
        printf("Memo\n");
    }
    else if (a % k != 0 && b % k == 0)
    {
        printf("Momo\n");
    }
    else
    {
        printf("No One\n");
    }

    return 0;
}