
// 라이브러리 가져오기 
    const express = require("express");
const send = require("send");

// 서버 인스턴스 만들기
    const app = express();
    // express 라이브러리에서, 이렇게 하라고 하니까, 이런 문법을 따르는 것 임.

// 서버 대기 시키기 
    const PORT = 8080; 
    app.listen(PORT, () => {
        console.log("서버열림🙌🙌")
    });
        // [해석]
            // app 이라는 서버 인스턴스가 있어 
            // 그 안에 있는 listen 메소드가 있어. 그래서 듣고 있어. 
            // 어디에서? PORT 8080 에서 듣고 있어
            // 8080 포트에, 서버 띄워주세요
            // 8080 포트에 들어오면 > 콜백 함수를 실행해줘 
            // 어떤 콜백함수? 콘솔창(터미널) 에 "서버 열림🙌🙌"


// 누군가 /pet 경로에 GET 요청하면 > html 에, pet 관련 안내문 띄워주기
    app.get('/pet' , (req, res) => {
        res.send('펫 용품 관련 설명 입니다.')
    })
        // [해석]
            // app | app 이라는 서버 인스턴스가 있음. 
            // get | 그 인스턴스가 get 요청을 받았을 때, 이제 뭔가를 할 것 임 
            // '/pet' | 어떤 url 에 대해 get 요청을 받은건데? 해당 /pet url 에 대해 받았을 때, 어떤 함수를 실행해줘. 
            // (req,res) | 실행할 때, 요청받은 내용은 req, 요청 처리한 내용은 res 라는 점을 염두해줘. 
            // res.send | 보내는데 필요한 기능이 담긴 객체인 res 가 있네. 그 중 send 를 꺼내서 보낸다. 
        // [시사점]
            // 이렇게 중요 단어 하나 하나 씩을 해석해가며 읽어가는 방식이, 나에게, 우선, 맞는 것 같다.

// 누군가 /pet 경로에 GET 요청하면 > html 에, pet 관련 안내문 띄워주기
    app.get('/beauty' , (req, res) => {
        res.send('beauty 용품 관련 설명 입니다.')
    })

// 터미널 껐다, 켰다 귀찮으면 > npm install -g nodemon 설치 


// 누군가 / 경로로 방문해서, GET 요청하면 > 관련 html 파일 보내기 
    app.get('/' , (req, res) => {
        res.sendFile(__dirname + '/index.html')
    })
        // [해석]
            // res | 응답을 보낼 때 필요한 속성 및 메소드를 가져와서 쓸거야 
            // sendFile | 파일 자체를 보낼거야 
            // __dirname : absolute path of the directory where the current script is running. 