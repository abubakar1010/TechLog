#include <stdio.h>

int main()

{
    int height;
    printf("Enter the height of pyramid: ");
    scanf("%i", &height);

    for (int i = 1; i <= height; i++)
    {
        for (int j = i; j <= height - 1; j++)
        {
            printf(" ");
        }
        for (int j = 1; j <= 2*i - 1; j++)
        {
            printf("%i", j);
        }
        
        printf("\n");
    }
    
    return 0;
}