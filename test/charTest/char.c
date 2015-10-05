#include <stdlib.h>
#include <stdio.h>


int main(void) {
   char label[] = "Seven";
   char label2[10] = "Eleven";
   char *labelPtr;

   labelPtr = label;

   printf("label %s\n", labelPtr);




   return 0;
}
