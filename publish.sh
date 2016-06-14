git add --all
comment=`curl -s 'http://whatthecommit.com/' | grep '<p>' | cut -c4-`
guillemet="'"
c=$guillemet$comment$guillemet
total=""
for i in $(seq 1 ${#c}); do
	char=$(echo $c | cut -c$i)
	echo $char
	total=$total$(echo $c | cut -c$i)
done
echo $total
#git commit -m $c
#git push