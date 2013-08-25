#
#   ThunderboltKids Website fixes
#
#   Run in website root


# Fix links for posters and downloads - make them relative
#
# replace 'src="/' with 'src="'
# ditto for href
find . -name "teachers-parents.html" -print | xargs sed -i 's/src=\"\//src=\"/g'
find . -name "teachers-parents.html" -print | xargs sed -i 's/href=\"\//href=\"/g'


##
## Replace 'http://thunder.beresponsive.net/' with ''
## in the root folder
#find . -maxdepth 1 -name "*.html" -print | xargs sed -i 's/href=\"http:\/\/thunder\.beresponsive\.net\//href=\"/g'
#find Grade* -name "*.html" -print | xargs sed -i 's/href=\"http:\/\/thunder\.beresponsive\.net\//href=\"\.\.\/\.\.\//g'
#
## fix paths in other links 
##
## replace 'href="/' with 'href="../../'
##
## in the root folder, change links that point to '/blah' to 'blah'
#find . -maxdepth 1 -name "*.html" -print | xargs sed -i 's/href=\"\//href=\"/g'
#
## for the contentpages change to relative 'href="../../' instead of 'href="/'
#find Grade* -name "*.html" -print | xargs sed -i 's/href=\"\//href=\"\.\.\/\.\.\//g'



