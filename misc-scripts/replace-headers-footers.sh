
for rootfile in $(ls *.html); do
    echo $rootfile
    python replace-headers-footers.py $rootfile rootheaders.txt rootfooters.txt
done


for chapterfile in $(find Grade* -name '*.html' -print); do
    echo $chapterfile
    python replace-headers-footers.py $chapterfile chapterheaders.txt chapterfooters.txt
done

