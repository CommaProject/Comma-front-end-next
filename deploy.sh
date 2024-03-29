#!/bin/bash
REPOSITORY=/home/ec2-user/deploy/web-build # 배포된 프로젝트 경로.

cd $REPOSITORY # 이 경로로 이동해서 밑에 명령어들을 차례로 실행.

sudo yarn install # 의존성 파일 설치.

npx pm2 reload all # 프로젝트에서 변경된 내용을 반영하기 위해 pm2를 reload.