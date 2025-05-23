#include <stdio.h>

int main(void)

{

    float x, p;

    scanf("%f %f", &x, &p);

    printf("%0.2f", (p * 100) / (100 - x));

    return 0;
}