#include <json/json.h>
#include <stdio.h>
#include <stdlib.h>

int main() {
   struct json_object *med_obj, *medi_array, *medi_array_obj,
      *medi_array_obj_CMDINDEX, *medi_array_obj_Argument,
      *medi_array_obj2;

   int arrayLen, i, j;
   char name[15] = {};
   static const char filename[] = "/var/www/html/emmc_0.1/test.json";
   med_obj = json_object_from_file (filename);
   medi_array = json_object_object_get(med_obj, "CMD");

   arrayLen = json_object_array_length(medi_array);

   for (i = 0; i < arrayLen; i++) {
      medi_array_obj = json_object_array_get_idx(medi_array, i);  //get i object
      medi_array_obj_CMDINDEX= json_object_object_get(medi_array_obj, "CMDINDEX"); //get object value
      medi_array_obj_Argument= json_object_object_get(medi_array_obj, "Argument"); //get object value
      int argumentLength = json_object_array_length(medi_array_obj_Argument);

      printf("%s ", json_object_get_string(medi_array_obj_CMDINDEX));
      for (j = 0; j < argumentLength; j++) {
        medi_array_obj2 = json_object_array_get_idx(medi_array_obj_Argument, j);  //get j object
        printf("%s ", json_object_get_string(medi_array_obj2)); 
      }

      printf("\n");

   }

   return 0;
}
