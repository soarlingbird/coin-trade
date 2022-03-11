// package.json 파일
// {
//     "name": "test",
//     "version": "1.0.0",
//     "description": "coin을 위한 길",
//     "main": "app.js",
//
//     "scripts": {
//       "test": "echo \"Error: no test specified\" && exit 1",
//       "start": "node app",
//       "hongbeom": "node app"
//     },
//
//     "keywords": [],
//     "author": "",
//     "license": "ISC"
//   }
  
// npm: node package manager (library 관리자)
// npm ini -> package.json 이 생성됨


// cmd 창
// npm 입력 -> npm 명령어 확인,
// npm init --yes -> 기본적인 정보가 다 기입된 상태로 json 만들어짐
// npm init -> 순차적으로 npm 정보 기입 가능



// - npm init --yes: 기본 형식을 갖춘 package.json 파일이 만들어짐
// - npm ini: 세부 정보 (ex. name, version, description) 을 입력할 수 있음
// - If) "start": node app 을 작성하면, npm start만으로 code가 동작함
// - If) 별개의 명령어를 넣고 싶을 경우
//        : npm run hongbeom 이렇게 쳐야함

//licence
// - ISC, Apache 라이센스 등등 -> 재배포, 수정 가능여부 등등을 확인해야함
//        : spdx.org

//Patch
// - 1.0.0 -> Major, Minor, Patch
//          : Major: 대거 수정, 추가
//          : Minor: 사소한 기능들이 추가
//          : Patch: 버그 제거
// - ^4.16.3
// - ~4.16.3
// - 4.x
// - https://semver.npmjs.com/ 여기에 들어가서 확인해보자

// - npm i -h
// - npm i = install == add
// - npm list

//Library 추가 / 제거
// - npm i underscore -> underscore library 설치
// - npm un underscore -> underscore library 제거
// - npm outdated -> npm의 version 정보 및 outdated 된것 확인
// - npm update underscore -> underscore update

//개발할때 설치할 것
// - 제품을 만들때 필요한 거 외에 개발할 때 필요한 npm이 있음
// - nodemon은 저장할 때 자동으로 실행되는 것 (하지만, 제품 자체에 필요한 것이 아닌 개발할 때 필요)
// - npm i nodemon --save-dev
// - "start": "nodemon app",로 변경 필요
// - terminal -> npm start nodemon

console.log('dfdfhelloddfdfdfdㅇd')