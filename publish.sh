git add --all
comment=`curl -s 'http://whatthecommit.com/' | grep '<p>' | cut -c4-`
guillemet="'"
c=$guillemet$comment$guillemet
echo $c
git commit -m $c
git push