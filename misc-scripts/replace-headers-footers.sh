
#for rootfile in $(ls *.html); do
#    echo $rootfile
#    python replace-headers-footers.py $rootfile rootheaders.txt rootfooters.txt
#done


#for chapterfile in $(find Grade* -name '*.html' -print); do
#    python misc-scripts/add-ie8-banner.py $chapterfile 
#done

for chapterfile in $(find * -name '*.html' -print); do
    echo $chapterfile
   python misc-scripts/add-ie8-banner.py $chapterfile 
done

