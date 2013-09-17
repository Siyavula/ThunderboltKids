
#for rootfile in $(ls *.html); do
#    echo $rootfile
#    python replace-headers-footers.py $rootfile rootheaders.txt rootfooters.txt
#done


for chapterfile in $(find Grade* -name '*.html' -print); do
    echo $chapterfile
    python misc-scripts/replace-headers-footers.py $chapterfile misc-scripts/chapterheaders.txt misc-scripts/chapterfooters.txt
    python misc-scripts/replace-toc.py $chapterfile misc-fixes/ToCfixed.html
done

