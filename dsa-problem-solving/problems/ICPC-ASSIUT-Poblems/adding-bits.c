#include <stdio.h>

int main(void)

{

    int a, b;

    scanf("%i %i", &a, &b);

    printf("%u\n", a ^ b);

    return 0;
}