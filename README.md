# 📝 저의 포트폴리오 입니다!
## 1. 💁 프로젝트 소개

- 주제 : 포트폴리오
- 내용 : React와 typescript 기반의 포트폴리오 사이트 입니다. 처음에는 가장 많이 사용하는 github의 디자인을 모티브로 작업 중 github와 너무 다를게 없어 구글을 모티브로 제작하게 되었습니다. 추후 내용 변경과 추가를 고려하여 데이터 값을 state에 따로 저장하여 사용하였습니다. 컴포넌트 재사용을 위해 컴포넌트를 작은 단위로 분리했습니다.

---

## 2. 🛠️ 기술 스택
---
<p align="center">
<img alt="JavaScript" src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" />
<img alt="TypeScript" src = "https://img.shields.io/badge/TypeScript-%231572B6.svg?style=for-the-badge&logo=TypeScript&logoColor=white" />
<img alt="React" src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" />
<img alt="styled" src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" />
 <img alt="Netlify" src="https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7" />

---


## 3. 🔗 배포 링크

[배포 링크 바로가기](https://condescending-ritchie-dfc6dc.netlify.app) 

---

## 4. 📄 프로젝트 구성

### 1. 홈화면

- 구글의 첫화면을 모티브로 만들었습니다.
- 상단 우측 아이콘 클릭 시 블로그,깃허브로의 새 창 이동과 제 연락처를 노출하도록 하였습니다.
- 라우터를 이용하여 카테고리의 아이콘 클릭 시 페이지 이동을 가능하게 했습니다.
- 테블릿, 모바일화면을 고려하여 레이아웃을 구성했습니다.

### 2) About(나에 관한 설명)

- 저에 관한 설명과 생각을 간략히 작성했습니다.
- 추후 내용 추가 및 수정을 위해 값들을 하나의 state에 저장 후 map을 사용하여 구현했습니다.
- 테블릿, 모바일화면을 고려하여 레이아웃을 구성했습니다.

### 3) Skills(사용 가능 기술들)

- 추후 내용 추가 및 수정을 위해 값들을 하나의 state에 저장 후 map을 사용하여 구현했습니다.
- sns 아이콘 클릭 시 새 창으로 이동
- 새 페이지 이동 시 display를 이용하여 팝업 노출
- 상단 네비게이션 메뉴 클릭 시 scrollintoview를 이용한 알맞은 위치로 이동
- 테블릿, 모바일화면을 고려하여 레이아웃을 구성했습니다.
  
### 4) Career(경력,교육 사항)
  
- 추후 내용 추가 및 수정을 위해 값들을 하나의 state에 저장 후 map을 사용하여 구현했습니다.
- 저의 경력, 교육 사항에 관한 내용을 작성했습니다.
- 개발과 관련 없는 내용들을 삭제했습니다.
  
### 5) Projects(작업물)
  
- 추후 내용 추가 및 수정을 위해 값들을 하나의 state에 저장 후 map을 사용하여 구현했습니다.
- 작업물의 이미지와 타이틀, 사용기술, 간략한 내용, 링크를 작성했습니다.

---

## 5. 💿 설치 및 실행 방법

Project Clone

`$ git clone` 

Project Setup

`$ npm install`

Project Start For Development

`$ npm start`

---

## 6. 🌲 프로젝트 구조
```
📦src
 ┣ 📂components
 ┃ ┣ 📜AboutContainer.tsx
 ┃ ┣ 📜CareerContainer.tsx
 ┃ ┣ 📜Cartagories.tsx
 ┃ ┣ 📜Contacts.tsx
 ┃ ┣ 📜Footer.tsx
 ┃ ┣ 📜HomeIcon.tsx
 ┃ ┣ 📜HomeMain.tsx
 ┃ ┣ 📜HomeTitle.tsx
 ┃ ┣ 📜MainNavigation.tsx
 ┃ ┣ 📜ProjectsContainer.tsx
 ┃ ┣ 📜SkillsContainer.tsx
 ┃ ┣ 📜SubSearchInput.tsx
 ┃ ┗ 📜SubTitle.tsx
 ┣ 📂image
 ┣ 📂pages
 ┃ ┣ 📜AboutPage.tsx
 ┃ ┣ 📜CareerPage.tsx
 ┃ ┣ 📜HomePage.tsx
 ┃ ┣ 📜ProjectsPage.tsx
 ┃ ┗ 📜SkillsPage.tsx
 ┣ 📂styles
 ┃ ┣ 📜GlobalStyle.ts
 ┃ ┣ 📜styled.d.ts
 ┃ ┗ 📜theme.ts
 ┣ 📂templates
 ┃ ┣ 📜NavigaionHomeIcon.tsx
 ┃ ┣ 📜NavigationBar.tsx
 ┃ ┗ 📜SubCartagories.tsx
 ┣ 📜index.tsx
 ┣ 📜react-app-env.d.ts
 ┗ 📜Router.tsx
 ```
