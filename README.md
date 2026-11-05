# Android Feature Guide — 모바일 소프트웨어

Kotlin / Jetpack Compose 기반 모바일 소프트웨어 수업의 주요 주제를 **학생 개인·팀 프로젝트에서 필요할 때 찾아 쓸 수 있도록** 정리한 웹 참고서입니다.

**사이트 주소:** https://blue2com.github.io/Android_Feature_Guide_2026/

## 사용 방법

1. 위 사이트 주소로 접속합니다. 오프라인에서는 이 저장소를 내려받아 `index.html`을 Chrome, Edge 등에서 열면 됩니다(별도 서버·설치 불필요).
2. **첫 화면에 펼쳐진 전체 학습 목록**에서 필요한 기술을 선택합니다. 왼쪽 목차와 검색(`/` 키)은 보조 수단입니다.
3. 각 주제는 다음 순서로 구성됩니다.
   핵심 개념 → 준비·설정(Gradle·Manifest) → 직접 해보는 순서 → 핵심 코드 → 자주 하는 실수 → AI 요청 예시 → 검증 체크리스트 → 질문과 ‘답 확인’
4. 질문은 먼저 스스로 답해 본 뒤 ‘답 확인’을 펼쳐 비교합니다.

## 주제 구성 (29개)

| 영역 | 주제 |
|---|---|
| 시작하기 | 이 사이트 사용법 |
| 기초 복습 | Kotlin 핵심 문법, Compose UI 구성, 상태 관리·ViewModel, Scaffold·Edge-to-edge, Navigation |
| 데이터·아키텍처 | Room, Hilt, DataStore |
| 네트워크 | Retrofit·JSON API, Weather App 코드 읽기 |
| UI 기능 | AlertDialog, BottomSheet·Dropdown·날짜 선택, Toast·Snackbar·실행 취소 |
| 시스템 기능 | Notification, AlarmManager, WorkManager, 카메라·FileProvider·Photo Picker, 권한 |
| 확장 | Firebase, Room ↔ Firebase 동기화, Google Maps Compose |
| 프로젝트 사례 | Travel Diary & Planner 예시, 팀 프로젝트별 추천 기능 |
| 개발 도구·품질 | 디버깅·Logcat, 테스트(ViewModel·Compose UI), Git·GitHub와 비밀정보 관리 |
| AI 개발 워크플로 | AI 프롬프트·리뷰·검증 |
| 참고자료 | 공식 문서·자료 범위 |

## 파일 구성

- `index.html`: 홈과 학습 페이지의 화면 껍데기
- `style.css`: 화면 및 인쇄 스타일
- `app.js`: 검색, 목차, 문서 화면, 복사, 답 확인 등 동작
- `data.json`: 학습 내용 원본 데이터
- `lessons.js`: `data.json`과 동일한 내용(`window.GUIDE_DATA = …;`). 브라우저가 로컬 파일로 열 때도 데이터가 로드되도록 구성
- `README.md`: 이 문서

### 내용 수정 방법

1. `data.json`을 수정합니다. 주제마다 `concept`, `setup`(선택), `steps`, `code`, `pitfalls`(선택), `prompt`, `checks`, `questions`, `answers`(질문과 같은 순서·개수), `refs`를 가집니다.
2. `lessons.js`를 다시 만듭니다(Git Bash 기준).
   ```bash
   { printf 'window.GUIDE_DATA = '; cat data.json; printf ';\n'; } > lessons.js
   ```
3. 커밋하고 push하면 1~2분 뒤 GitHub Pages에 반영됩니다.
   ```bash
   git add . && git commit -m "수정 내용" && git push
   ```

## 자료 범위 및 출처

- **확인한 강의자료:** 네트워크·날씨 앱 강의 PDF 및 코드 읽기 자료, UI·알림·카메라 강의 PDF, `Travel_Diary_Planner_AI_기능확장_실습강의안.md`.
- **이전 학습 복습:** Kotlin, Compose 기초, 상태관리, Scaffold, Navigation, Room, Hilt, DataStore. 이 단원들은 수업의 알려진 흐름을 바탕으로 재구성했으며 원본 강의 PPT를 전부 대조하지 않았습니다.
- **보충 내용:** 준비·설정, 자주 하는 실수, 답 확인, WorkManager·디버깅·테스트·Git 주제는 Android·Firebase·Google Maps 공식 문서를 기준으로 작성한 학습용 정리입니다.
- **향후 확장:** Firebase와 Maps는 후속 수업/프로젝트 가이드이지 현재 구현 완료 사실을 나타내지 않습니다.
- **공식 참조:** 각 주제 하단 ‘자료 근거·공식 문서’에서 링크를 제공합니다.

코드 예시는 import와 라이브러리 버전(`<버전>`)을 생략한 학습용 코드입니다. 실제 프로젝트에서는 Android Studio 프로젝트의 Gradle·SDK·라이브러리 버전에 맞게 검증해야 합니다.

학생이 AI 코드를 사용할 때에는 개인정보, 실서비스 API 키, 비밀정보를 대화에 포함하지 않도록 안내하세요.
