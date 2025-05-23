#include <stdio.h>
#include <string.h>

int main(void)

{

    char a[101], b[101];

    scanf("%s %s", a, b);

    int i = 0;

    while (1)
    {

        if (a[i] == '\0' && b[i] == '\0')
        {
            printf("Equal");
            break;
        }
        else if (a[i] == '\0')
        {
            printf("a less than than b\n");
            break;
        }
        else if ('\0' == b[i])
        {
            printf("a greater than b\n");
            break;
        }

        if (a[i] == b[i])
        {
            i++;
        }
        else if (a[i] < b[i])
        {
            printf("a less than b\n");
            break;
        }
        else
        {
            printf("a greater than b\n");
            break;
        }
    }

    return 0;
}

// #include <stdio.h>
// #include <string.h>

// int main(void)

// {

//     int n;
//     scanf("%i", &n);
//     char str[n];

//     fgets(str, n, stdin);

//     printf("%s", str);

//     return 0;
// }