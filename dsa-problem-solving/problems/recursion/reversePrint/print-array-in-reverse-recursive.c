#include <stdio.h>

void printReverse(int[], int, int);
int main()

{
    int arr[] = {1, 2, 3, 4};
    printReverse(arr, 4, 0);
    return 0;
}

void printReverse(int arr[], int length, int index){
    if(index >= length){
        return;
    }

    printReverse(arr, length, index + 1);
    printf("%i\n", arr[index]);
}