# Tripbtoz Todo Project

Todo 서비스 프로젝트

## 🗂 목차

- [**프로젝트 소개**](#1)
- [**기술 스택**](#2)
- [**주요 기능**](#3)
- [**웹서비스 소개**](#4)
- [**개발 기간**](#5)
- [**실행 방법**](#6)
- [**참고 사이트**](#7)

<div id='1'></div>
<br />

### 💁‍♂️ 프로젝트 소개

- Microsoft To Do 클론 코딩

<div id='2'></div>
<br />

### 🛠 기술 스택

- react, redux, redux-saga, styled-components, typescript
- node, express, mongoose

<div id='3'></div>
<br />

### 💡 주요 기능

- 할 일 타이틀을 입력하여 할 일 등록. 등록시 자동으로 등록일 입력
- 각 할 일의 완료 여부, 타이틀 및 세부 내용을 수정
- 할 일 삭제
- 할 일을 타이틀로 검색
- 중요한 할 일만 따로 보기

<div id='4'></div>
<br />

### ⭐️ 웹서비스 소개

|                    To Do 등록                     |
| :-----------------------------------------------: |
| <img src='./images/create_todo.gif' alt='todo' /> |

|                  To Do 진행중/완료                  |
| :-------------------------------------------------: |
| <img src='./images/complete_todo.gif' alt='todo' /> |

|                    To Do 수정                     |
| :-----------------------------------------------: |
| <img src='./images/update_todo.gif' alt='todo' /> |

|                    To Do 삭제                     |
| :-----------------------------------------------: |
| <img src='./images/delete_todo.gif' alt='todo' /> |

|                    To Do 검색                     |
| :-----------------------------------------------: |
| <img src='./images/search_todo.gif' alt='todo' /> |

|                   To Do 중요한 일                    |
| :--------------------------------------------------: |
| <img src='./images/important_todo.gif' alt='todo' /> |

<div id='5'></div>
<br />

### 🗓 개발 기간

`2022.01.03(월) ~ 2022.01.21(금)`

<div id='6'></div>
<br />

### 🖥 실행 방법

- 로컬에 mongodb가 실행되고 있어야 원활하게 서비스 이용이 가능합니다.

1. 저장소 복제
2. frontend 이동 후 설치

```bash
$ cd frontend
$ yarn install
$ yarn start
```

3. 새로운 터미널 열기
4. backend 이동 후 설치

```bash
$ cd backend
$ yarn install
$ nodemon src
```

<div id='7'></div>
<br />

### 📌 참고 사이트

- [Microsoft To Do UI](https://to-do.live.com/tasks/today)
- [몽고db연결](https://poiemaweb.com/mongoose)
- [Swagger 연동](https://any-ting.tistory.com/105)
- [파일시스템 사용](https://smilehugo.tistory.com/entry/nodejs-json-create-store-read-update)
