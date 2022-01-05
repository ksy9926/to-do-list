# Tripbtoz Todo Project

트립비토즈 과제 - Todo 서비스 프로젝트

## 🗂 목차

- [프로젝트 소개](#프로젝트-소개)
- [기술 스택](#기술-스택)
- [주요 기능](#주요-기능)
- [프로젝트 구성도](#프로젝트-구성도)
- [개발 기간](#개발-기간)
- [실행 방법](#실행-방법)

### 프로젝트 소개

- 트립비토즈 프론트엔드 과제 : To Do 서비스 프로젝트
- UI 및 구성은 Microsoft To Do를 참조하여 제작하였습니다.

### 기술 스택

- react, redux, redux-saga, styled-components, typescript

### 주요 기능

- 일단위 할일 목록을 관리하는 서비스를 개발하시오.
- 각 할일은 할일 타이틀, 세부 내용, 작성일, 종료일 을 포함하고 있어햐 한다.
- 작성일은 글 생성 시점으로 자동으로 입력되어야 한다.
- 각 할일은 삭제 및 수정이 가능해야 한다.

### 프로젝트 구성도

```
tripbtoz-todo-project
ㄴ client
  ㄴ src
ㄴ server
ㄴ README.md
```

### 개발 기간

- 2022.01.03(월) ~ 2022.01.21(금)

### 실행 방법

1. 저장소 복제
2. 프로젝트 폴더로 이동후 node_modules 설치
3. 리액트 실행

### 참고

- [Microsoft To Do UI](https://to-do.live.com/tasks/today)
- [몽고db연결](https://poiemaweb.com/mongoose)
- Git Convention
  - Feat: 새로운 기능을 추가할 경우
  - Fix: 버그를 고친 경우
  - Design: CSS 등 사용자 UI 디자인 변경
  - Style: 코드 포맷 변경, 세미 콜론 누락, 코드 수정이 없는 경우
  - Comment: 필요한 주석 추가 및 변경
  - Docs: 문서를 수정한 경우
  - Test: 테스트 추가, 테스트 리팩토링(프로덕션 코드 변경 X)
  - Chore: 빌드 테스트 업데이트, 패키지 매니저를 설정하는 경우(프로덕션 코드 변경 X)
  - Rename: 파일 혹은 폴더명을 수정하거나 옮기는 작업만인 경우
  - Remove: 파일을 삭제하는 작업만 수행한 경우
