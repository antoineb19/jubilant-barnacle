git add --all
comment=`curl -s 'http://whatthecommit.com/' | grep '<p>' | cut -c4-`
guillemet="'"
c=$guillemet$comment$guillemet

git commit
i
c
^C
:wq
git push