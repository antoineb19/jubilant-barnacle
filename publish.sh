git add --all
comment=curl -s 'http://whatthecommit.com/' | grep '<p>' | cut -c4-
git commit -m 'comment'
git push