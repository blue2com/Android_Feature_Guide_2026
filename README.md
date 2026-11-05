# Android Feature Guide — 모바일 소프트웨어

Kotlin / Jetpack Compose 기반 모바일 소프트웨어 수업의 주요 주제를 **학생 개인·팀 프로젝트에서 필요할 때 찾아 쓸 수 있도록** 정리한 오프라인 웹 참고서입니다.

## 실행 방법

1. 압축파일을 풉니다.
2. `index.html`을 Chrome, Edge 등에서 엽니다. 별도 서버나 설치가 필요하지 않습니다.
3. **첫 화면에 펼쳐진 전체 학습 목록**에서 필요한 기술을 선택합니다. 왼쪽 목차·검색은 보조 수단입니다.
4. 개념 → 적용 순서 → 핵심 코드 → AI 요청 예시 → 검증 체크리스트를 사용합니다.

## GitHub Pages 배포

이 폴더의 파일을 GitHub 저장소 루트(또는 docs 폴더)에 복사한 다음 GitHub Pages의 배포 소스를 해당 브랜치/폴더로 설정합니다. 외부 JS 라이브러리가 없는 정적 사이트이며 API 키도 포함하지 않습니다.

## 파일 구성

- `index.html`: 홈과 학습 페이지의 화면 껍데기
- `style.css`: 화면 및 인쇄 스타일
- `app.js`: 검색, 목차, 문서 화면, 복사 등 동작
- `lessons.js`: 25개 주제의 데이터. `data.json`과 동일 내용으로 브라우저가 로컬 파일로 열 때도 로드되게 구성
- `data.json`: 검색·가공 가능한 원본 데이터
- `README.md`: 이 문서

## 자료 범위 및 출처

- **확인한 강의자료:** 네트워크·날씨 앱 강의 PDF 및 코드 읽기 자료, UI·알림·카메라 강의 PDF, `Travel_Diary_Planner_AI_기능확장_실습강의안.md`.
- **이전 학습 복습:** Kotlin, Compose 기초, 상태관리, Scaffold, Navigation, Room, Hilt, DataStore. 이 단원들은 수업의 알려진 흐름을 바탕으로 재구성했으며 원본 강의 PPT를 전부 대조하지 않았습니다.
- **향후 확장:** Firebase와 Maps는 후속 수업/프로젝트 가이드이지 현재 구현 완료 사실을 나타내지 않습니다.
- **공식 참조:** Android Notifications, AlarmManager, Firebase Kotlin Migration, Google Maps Compose 문서. 각 주제 하단에서 링크 제공.

코드 예시는 일부 import와 버전 설정을 생략한 학습용 단편입니다. 운영 환경에서 사용하려면 Android Studio 프로젝트의 실제 Gradle·SDK·라이브러리 버전에 맞게 검증해야 합니다.

학생이 AI 코드를 사용할 때에는 개인정보, 실서비스 API 키, 비밀정보를 대화에 포함하지 않도록 안내하세요.
