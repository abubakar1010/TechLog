#include <stdio.h>

int main(void)

{

    int number, sum = 0;

    printf("Enter the Number: ");

    scanf("%i", &number);

    while (number > 0)
    {
        sum += number % 10;
        number /= 10;
    }
    
    printf("%i", sum);

    return 0;
}