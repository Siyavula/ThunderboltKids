#
#  ThundeboltKids Website fixes
#
#


# Fix links for posters
#
# replace 'src="/' with 'src="/ThunderboltKids'
#
find . -name "*.html" -print | xargs sed -i 's/src=\"\//src=\"\/ThunderboltKids\//g'

# fix paths in other links 
#
# replace 'href="/' with 'href="/ThunderboltKids'
#
find . -name "*.html" -print | xargs sed -i 's/href=\"\//href=\"\/ThunderboltKids\//g'



