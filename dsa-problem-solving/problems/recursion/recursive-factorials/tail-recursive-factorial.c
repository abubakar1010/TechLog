#include <stdio.h>

int factorial(int, int);

int main()

{
    int n;
    printf("Which number of factorial you want? ");
    scanf("%i", &n);
    printf("%i\n", factorial(n, 1));
    return 0;
}

int factorial(int n, int result)
{
    if (n == 1 || n <= 0)
    {
        return result;
    }
    return factorial(n - 1, result * n);
}