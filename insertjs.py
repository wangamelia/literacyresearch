import os
import sys
import fileinput


rootdir = 'C:/xampp/htdocs/literacyresearch/www.adaa.org'

for subdir, dirs, files in os.walk(rootdir):
    for file in files:
        #print os.path.join(subdir, file)
        #filepath = subdir + os.sep + file

        if file.endswith(".html"):
         #  print file
            with open(file, "a") as f:
                 f.write("new line\n")
           #for line in fileinput.input(file, inplace=True):
                #line = line.replace("<!-- Created by HTTrack Website Copier/3.49-2 [XR&CO'2014] -->", "<HELLO!!!!!>")
                # sys.stdout is redirected to the file
                #sys.stdout.write(line)
                # sys.stdout.write(line)
                #for i, line in enumerate(fileinput.input(file, inplace=1)):
                    #sys.stdout.write(line.replace('sit', 'SIT'))  # replace 'sit' and write
                        #if i == 1: sys.stdout.write('hello!!!!!\n')
