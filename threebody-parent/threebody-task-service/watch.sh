#!/bin/sh
#kill 
killSpringBoot()
{
  pid=`ps -ef|grep processon-image|grep java|awk '{print $2}'`
  echo "pid list: $pid"
  if [ "$pid" = "" ]
  then
    echo "no pid alive"
  else
    kill -9 $pid
  fi
}

if [[ $(curl --connect-timeout 30 -m 60 'http://localhost') =~ 'ProcessOn-image' ]]
  then
    echo ""
  else
    echo "The app is quit!!!"
    killSpringBoot
    nohup java -Xms1024m -Xmx7168m -jar /opt/processon-image-0.0.1-SNAPSHOT.jar > /opt/thumb.log 2>&1 &
fi
