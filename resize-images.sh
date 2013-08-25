rootdir=$(pwd);

for imagefolder in $(find Grade* -name 'images'); do
    echo $imagefolder
    cd $imagefolder
    # run mogrify on the images
    mogrify -verbose -resize '600x600>' *
    cd $rootdir
done
