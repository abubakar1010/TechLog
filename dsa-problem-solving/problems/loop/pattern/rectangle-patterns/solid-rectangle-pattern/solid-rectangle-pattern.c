#include <stdio.h>

int main()

{
    int r, c;
    printf("Enter number of row: ");
    scanf("%i", &r);
    printf("Enter number of column: ");
    scanf("%i", &c);

    for (int i = 0; i < r; i++)
    {
        for (int j = 0; j < c; j++)
        {
            printf("#");
        }
        printf("\n");
    }
    
    return 0;
}