import os
import sys
import fileinput


rootdir = 'C:/xampp/htdocs/literacyresearch/www.ashasexualhealth.org'

for subdir, dirs, files in os.walk(rootdir):
    for file in files:
        #print os.path.join(subdir, file)
        filepath = subdir + os.sep + file

        if file.endswith(".html"):
            f = open(filepath, "r")
            contents = f.readlines()
            #searchline = '<HEAD>'
            #lines = f.readlines() # f being the file handle
            for i in range(len(contents)):
                if contents[i].startswith(("<HEAD>", "<head>")):
                    contents.insert(i+1,"\n<script src=\"tracking.js\">\n</script>\n")
            #global i
            #i = lines.index(searchline) # Make sure searchline is actually in the file
            f.close()

            f = open(filepath, "w")
            contents = "".join(contents)
            f.write(contents)
            f.close()
         #  print file
         #   with open(file, "w") as f:
         #        f.write("new line\n")
         #    for line in fileinput.input(file, inplace=1):
         #            if fileinput.filelineno() == 1:
         #                sys.stdout.write('HELLO!!!!!' '\n')
