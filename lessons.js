window.GUIDE_DATA = {
  "lessons": [
    {
      "id": "start",
      "group": "시작하기",
      "title": "이 사이트 사용법",
      "desc": "개별 프로젝트에 필요한 기능을 선택해 개념을 읽고 AI로 구현한 뒤 직접 검증합니다.",
      "level": "공통",
      "uses": [
        "모든 프로젝트"
      ],
      "concept": [
        "이 사이트는 완성 앱을 따라 만드는 강의가 아니라 필요할 때 찾아 쓰는 기술 참고서입니다.",
        "각 주제는 핵심 개념 → 준비·설정(Gradle·Manifest) → 직접 해보는 순서 → 핵심 코드 → 자주 하는 실수 → AI 요청 예시 → 검증 체크리스트 → 질문과 답 확인 순서로 구성됩니다.",
        "코드 예시는 import와 라이브러리 버전(<버전>)을 생략한 학습용 코드입니다. 실제 버전은 Android Studio의 최신 안정 버전 또는 프로젝트의 libs.versions.toml을 기준으로 맞춥니다.",
        "네트워크·날씨 앱 및 UI·알림·카메라 단원은 제공된 강의자료를 바탕으로 정리했고, 복습 단원은 전체 교과 흐름에 맞춘 안내입니다(원본 슬라이드를 모두 대조하지는 않았습니다).",
        "‘코드를 읽고 대답하기’의 질문은 먼저 스스로 답해 본 뒤 ‘답 확인’을 펼쳐 비교하세요."
      ],
      "steps": [
        "전체 목차 또는 검색(/ 키)으로 자신의 프로젝트에 필요한 기능을 찾습니다.",
        "핵심 개념과 준비·설정을 읽고, 필요한 의존성과 Manifest 항목을 먼저 확인합니다.",
        "AI 프롬프트를 내 프로젝트 상황에 맞게 고쳐서 요청하고, AI가 수정할 파일과 계획을 먼저 검토합니다.",
        "기능 하나씩 구현·빌드하고, ‘자주 하는 실수’와 검증 체크리스트로 직접 확인합니다.",
        "질문에 자기 말로 답할 수 있는지 점검한 뒤 Git에 커밋합니다."
      ],
      "code": "사용자 요구 → 설계·파일 확인 → AI 구현 → Gradle 빌드 → 에뮬레이터/실기기 테스트 → Git 커밋\n\n테스트할 때 최소한 확인할 상황\n- 정상 경로 (데이터 있음)\n- 빈 데이터 / 잘못된 입력\n- 네트워크 끊김, 권한 거부\n- 화면 회전, 앱 종료 후 재실행\n- Android 버전 차이 (예: 13 미만 / 13 이상)",
      "pitfalls": [
        "AI에게 ‘앱 전체를 다시 만들어 줘’처럼 큰 단위로 요청해 기존 기능이 사라지는 경우",
        "빌드 성공만 보고 완료로 판단하고 실제 실행·실패 상황을 테스트하지 않는 경우",
        "변경 전에 Git 커밋을 남기지 않아 잘못된 수정을 되돌리지 못하는 경우"
      ],
      "prompt": "현재 Android Studio 프로젝트를 읽고 구조를 요약해 줘. 기존 코드를 먼저 분석하고, 필요한 최소 변경 계획과 수정 예상 파일을 제시해 줘. 내 승인 없이 다른 기능을 바꾸지 마. 구현 후 실제 수행한 검증과 미수행 검증을 구분해 보고해 줘.",
      "checks": [
        "기본 앱이 실행되는가?",
        "변경 전 Git 커밋을 남겼는가?",
        "AI가 변경한 파일과 이유를 파악했는가?"
      ],
      "questions": [
        "기능이 동작한 것과 코드가 올바른 것은 어떻게 다른가?",
        "빌드 성공으로 확인되지 않는 문제는 무엇인가?"
      ],
      "answers": [
        "‘동작했다’는 정상 경로를 한 번 확인한 것에 불과합니다. 올바른 코드는 빈 데이터·잘못된 입력·네트워크 실패·권한 거부·화면 회전 같은 다른 상황에서도 의도대로 동작하고, 책임이 분리되어 있어 수정하기 쉽습니다.",
        "빌드는 문법과 타입만 확인합니다. 실행 중 크래시(null, 권한 SecurityException, 메인 스레드 DB 접근), 로직 오류, UI 배치 문제, Android 버전별 동작 차이, 네트워크 실패 처리 누락 등은 실행해 봐야 드러납니다."
      ],
      "notes": "AI 결과가 테스트를 수행했다는 주장은 로그·기기 실행 화면으로 확인해야 합니다.",
      "refs": []
    },
    {
      "id": "kotlin",
      "group": "기초 복습",
      "title": "Kotlin 핵심 문법",
      "desc": "null 안전성, data class, sealed interface, 확장 함수, 람다, 코루틴(suspend·launch) 등 Compose 앱에서 반복 등장하는 표현.",
      "level": "복습",
      "uses": [
        "모든 프로젝트"
      ],
      "concept": [
        "val은 재할당하지 않는 참조, var는 재할당 가능한 참조입니다. 가능한 한 val을 기본으로 사용합니다.",
        "data class는 equals·hashCode·toString·copy를 자동 생성하므로 DTO·Entity·UI 모델에 자주 사용합니다.",
        "nullable 타입(String?)은 ?.(안전 호출), ?:(엘비스, 기본값), let 등으로 처리합니다. !!는 null이면 즉시 크래시를 내므로 거의 사용하지 않습니다.",
        "sealed interface/class는 가능한 경우의 수를 제한합니다. when으로 분기하면 컴파일러가 모든 경우를 처리했는지 확인해 줍니다(UiState에 자주 사용).",
        "확장 함수(fun Trip.hasNote())는 기존 클래스를 수정하지 않고 기능을 추가하는 방법입니다. Entity ↔ 도메인 모델 변환(toTrip, toEntity)에 자주 사용합니다.",
        "suspend 함수는 코루틴 안에서만 호출할 수 있는 ‘중단 가능한’ 함수입니다. suspend라고 해서 자동으로 백그라운드 스레드에서 실행되지는 않으며, 블로킹 작업은 withContext(Dispatchers.IO)로 스레드를 지정합니다.",
        "launch는 코루틴을 새로 시작하고 결과를 기다리지 않고 바로 반환합니다. ViewModel에서는 viewModelScope.launch를 사용해 화면이 사라질 때 자동 취소되도록 합니다.",
        "Flow는 시간에 따라 여러 값을 내보내는 비동기 스트림입니다. Room의 조회 결과, DataStore 설정값 등이 Flow로 제공됩니다."
      ],
      "steps": [
        "현재 프로젝트에서 data class 세 개를 찾고 각각 DTO·Entity·UI 모델 중 무엇인지 분류합니다.",
        "nullable 데이터가 화면까지 전달되는 과정을 확인하고 !! 사용 위치를 찾아 안전한 처리로 바꿉니다.",
        "UiState가 sealed interface로 정의되어 있는지, when에서 모든 경우를 처리하는지 확인합니다.",
        "suspend 함수의 호출 위치(viewModelScope.launch 등)와 실패 처리를 추적합니다."
      ],
      "code": "data class Trip(val id: String, val title: String, val note: String?)\n\n// null 안전 처리: 비어 있으면 기본 문구\nval displayNote = trip.note?.takeIf { it.isNotBlank() } ?: \"기록 없음\"\n\n// sealed interface + when: 컴파일러가 모든 경우를 처리했는지 확인\nsealed interface UiState {\n    data object Loading : UiState\n    data class Success(val trips: List<Trip>) : UiState\n    data class Error(val message: String) : UiState\n}\n\nfun UiState.label(): String = when (this) {\n    UiState.Loading -> \"불러오는 중\"\n    is UiState.Success -> \"${trips.size}개\"\n    is UiState.Error -> message\n}\n\n// 확장 함수\nfun Trip.hasNote(): Boolean = !note.isNullOrBlank()\n\n// suspend 함수: 블로킹 작업은 withContext로 스레드 지정\nsuspend fun readBackupFile(file: File): String = withContext(Dispatchers.IO) {\n    file.readText()\n}\n\n// launch: 코루틴을 시작하고 즉시 반환 (ViewModel 안)\nfun load() {\n    viewModelScope.launch {\n        val text = readBackupFile(file)   // 여기서 중단됐다가 결과를 받으면 재개\n        _state.value = UiState.Success(parse(text))\n    }\n}",
      "pitfalls": [
        "!!를 습관적으로 사용해 NullPointerException 크래시가 나는 경우 → ?., ?:, let으로 처리",
        "suspend 함수면 자동으로 백그라운드에서 실행된다고 착각하고 무거운 파일·DB 작업을 메인 스레드에서 수행하는 경우",
        "GlobalScope.launch를 사용해 화면이 사라진 뒤에도 작업이 계속 실행되는 경우 → viewModelScope 사용",
        "ViewModel이 MutableList/MutableStateFlow를 외부에 그대로 노출해 화면에서 상태를 직접 바꾸는 경우"
      ],
      "prompt": "이 프로젝트의 data class, nullable 처리, sealed UiState, suspend 함수를 찾아 역할을 설명해 줘. !! 사용 위치와 메인 스레드에서 실행될 위험이 있는 suspend 함수를 표로 정리해 줘. 코드를 임의 변경하지 말고 파일 경로와 함께 설명해 줘.",
      "checks": [
        "널 입력에서도 크래시 없이 기본값이 표시되는가?",
        "!! 사용이 꼭 필요한 곳에만 남아 있는가?",
        "when 분기가 모든 UiState를 처리하는가?",
        "반복되는 변환 코드가 확장 함수 등으로 정리되어 있는가?"
      ],
      "questions": [
        "suspend와 launch의 차이는?",
        "?.와 !!의 차이는?",
        "sealed interface로 UiState를 만들면 무엇이 좋은가?"
      ],
      "answers": [
        "suspend는 ‘중단될 수 있는 함수’라는 선언이고 코루틴 안에서만 호출할 수 있습니다. launch는 코루틴을 실제로 시작하는 빌더로, 새 코루틴을 만들고 결과를 기다리지 않고 바로 반환합니다. 즉 launch 블록 안에서 suspend 함수를 호출합니다.",
        "?.는 값이 null이면 호출하지 않고 null을 돌려주는 안전 호출입니다. !!는 ‘절대 null이 아니다’라고 단언하며, null이면 즉시 NullPointerException으로 크래시가 납니다.",
        "가능한 상태가 Loading/Success/Error처럼 정해지므로 when에서 하나라도 빠뜨리면 컴파일 오류가 납니다. 또 상태마다 필요한 데이터(Success의 목록, Error의 메시지)만 갖게 되어 잘못된 조합(로딩 중인데 오류 메시지도 있음)을 막을 수 있습니다."
      ],
      "notes": "",
      "refs": [
        "KOTLIN_DOCS",
        "COROUTINES"
      ]
    },
    {
      "id": "compose",
      "group": "기초 복습",
      "title": "Compose UI 구성",
      "desc": "Composable, Column/Row/Box, Material3, LazyColumn(key), Modifier 관례, Preview, 상태에 따른 재구성.",
      "level": "복습",
      "uses": [
        "일정",
        "커뮤니티",
        "분실물"
      ],
      "concept": [
        "@Composable 함수는 UI를 선언하며, 읽고 있는 상태가 바뀌면 필요한 부분만 다시 실행(재구성, recomposition)됩니다.",
        "재구성은 자주, 어떤 순서로든 일어날 수 있으므로 Composable 본문에서는 네트워크·DB 호출 같은 부수 효과를 직접 실행하지 않습니다. 필요하면 LaunchedEffect 등 Effect API를 사용합니다.",
        "LazyColumn은 화면에 보이는 항목만 구성합니다. items(key = { it.id })로 고유 키를 주면 항목이 추가·삭제·정렬될 때 상태가 다른 항목과 섞이지 않습니다.",
        "재사용 가능한 Composable은 modifier: Modifier = Modifier 매개변수를 받아 가장 바깥 요소에 적용하는 것이 관례입니다.",
        "Modifier는 적용 순서가 결과에 영향을 줍니다(예: padding 다음 clickable과 clickable 다음 padding은 클릭 영역이 다름).",
        "UI는 데이터(trips)와 이벤트 콜백(onOpen)만 받고, 데이터 변경 로직은 ViewModel에 둡니다(상태 호이스팅).",
        "@Preview로 빈 목록·긴 제목 등 여러 상태를 미리 확인할 수 있습니다."
      ],
      "steps": [
        "화면을 작은 Composable(목록, 항목, 빈 상태)로 나눕니다.",
        "목록 화면에 빈 상태·로딩 상태를 표현합니다.",
        "LazyColumn의 items에 고유 key를 지정합니다.",
        "Preview를 두 개 이상(빈 목록, 데이터 있음) 만들어 확인합니다.",
        "상태가 바뀔 때 UI가 갱신되는지 실행해서 확인합니다."
      ],
      "code": "@Composable\nfun TripList(\n    trips: List<Trip>,\n    onOpen: (String) -> Unit,\n    modifier: Modifier = Modifier\n) {\n    if (trips.isEmpty()) {\n        Box(modifier.fillMaxSize(), contentAlignment = Alignment.Center) {\n            Text(\"아직 등록된 여행이 없습니다\")\n        }\n    } else {\n        LazyColumn(modifier = modifier) {\n            items(trips, key = { it.id }) { trip ->\n                TripRow(title = trip.title, onOpen = { onOpen(trip.id) })\n            }\n        }\n    }\n}\n\n@Composable\nfun TripRow(title: String, onOpen: () -> Unit, modifier: Modifier = Modifier) {\n    ListItem(\n        headlineContent = { Text(title, maxLines = 1, overflow = TextOverflow.Ellipsis) },\n        modifier = modifier.clickable(onClick = onOpen)\n    )\n}\n\n@Preview(showBackground = true)\n@Composable\nprivate fun TripListPreview() {\n    TripList(trips = listOf(Trip(\"1\", \"제주 여행\", null)), onOpen = {})\n}\n\n@Preview(showBackground = true)\n@Composable\nprivate fun TripListEmptyPreview() {\n    TripList(trips = emptyList(), onOpen = {})\n}",
      "pitfalls": [
        "Composable 본문에서 Repository·DAO를 직접 호출해 재구성 때마다 요청이 반복되는 경우",
        "remember 없이 mutableStateOf를 만들어 재구성 때마다 값이 초기화되는 경우",
        "LazyColumn에 key를 주지 않아 삭제·정렬 후 체크 상태 등이 다른 항목으로 옮겨가는 경우",
        "mutableStateOf(mutableListOf())에 add만 해서 화면이 갱신되지 않는 경우 → 새 리스트를 대입하거나 mutableStateListOf 사용",
        "Composable 안에서 ViewModel을 직접 생성(TripViewModel())하는 경우 → viewModel()/hiltViewModel() 사용"
      ],
      "prompt": "현재 화면의 Compose 컴포넌트 구조를 분석하고, 목록 항목을 재사용 가능한 Composable로 추출해 줘. modifier 매개변수 관례, LazyColumn key, 빈 상태 표시를 적용하고 빈 목록/데이터 있음 Preview를 추가해 줘. 기존 기능을 유지하고 Preview 또는 실행 결과로 검증해 줘.",
      "checks": [
        "화면 크기가 달라도 읽기 쉬운가?",
        "빈 목록과 긴 목록(100개 이상)에서 정상인가?",
        "긴 제목이 레이아웃을 깨지 않는가?",
        "항목 삭제 후 다른 항목의 상태가 섞이지 않는가?"
      ],
      "questions": [
        "Compose의 재구성은 언제 발생하는가?",
        "UI에 DB 접근 코드를 직접 쓰면 왜 곤란한가?",
        "LazyColumn에 key를 지정하는 이유는?"
      ],
      "answers": [
        "Composable이 읽고 있는 State 값이 바뀌면 그 값을 읽는 범위가 다시 실행됩니다. 매개변수가 바뀌어도 해당 Composable이 재구성됩니다. 횟수나 순서를 예측할 수 없으므로 본문에 부수 효과를 두지 않습니다.",
        "재구성마다 DB 접근이 반복될 수 있고, 메인 스레드 접근으로 크래시가 날 수 있으며, UI와 데이터 로직이 섞여 테스트·재사용이 어렵습니다. ViewModel·Repository를 통해 상태로 받아야 합니다.",
        "key가 없으면 위치(인덱스)로 항목을 식별하기 때문에 중간 항목이 삭제되면 그 아래 항목들의 remember 상태가 엉뚱한 항목에 붙을 수 있습니다. 고유 ID를 key로 주면 데이터와 상태가 정확히 연결되고 불필요한 재구성도 줄어듭니다."
      ],
      "notes": "",
      "refs": [
        "COMPOSE_DOCS",
        "COMPOSE_LISTS"
      ]
    },
    {
      "id": "state",
      "group": "기초 복습",
      "title": "상태 관리·ViewModel",
      "desc": "remember, rememberSaveable, StateFlow, stateIn, collectAsStateWithLifecycle, 단방향 데이터 흐름.",
      "level": "복습",
      "uses": [
        "모든 프로젝트"
      ],
      "concept": [
        "화면 내부의 일시적 UI 상태(펼침 여부, 입력 중인 텍스트)는 remember, 화면 회전 후에도 유지해야 하면 rememberSaveable을 사용합니다.",
        "화면에 표시할 데이터와 비즈니스 로직 상태는 ViewModel이 소유합니다. ViewModel은 화면 회전(구성 변경)에도 유지됩니다.",
        "ViewModel은 private MutableStateFlow를 두고 외부에는 읽기 전용 StateFlow만 공개합니다.",
        "Repository의 Flow를 stateIn(viewModelScope, WhileSubscribed(5_000), 초기값)으로 StateFlow로 바꾸면 화면이 보일 때만 수집합니다.",
        "Compose에서는 collectAsStateWithLifecycle()로 수집해 앱이 백그라운드일 때 불필요한 수집을 멈춥니다.",
        "UI → 이벤트(함수 호출) → ViewModel이 상태 갱신 → UI 재구성의 단방향 흐름을 유지합니다."
      ],
      "setup": "// app/build.gradle.kts\ndependencies {\n    // collectAsStateWithLifecycle, LifecycleResumeEffect\n    implementation(\"androidx.lifecycle:lifecycle-runtime-compose:<버전>\")\n    // Compose에서 viewModel() 사용 (Hilt 사용 시 hiltViewModel())\n    implementation(\"androidx.lifecycle:lifecycle-viewmodel-compose:<버전>\")\n}",
      "steps": [
        "현재 화면에서 각 상태의 소유자(Composable인지 ViewModel인지)를 찾습니다.",
        "UiState를 sealed interface로 정의하고 loading/success/error를 구분해 표시합니다.",
        "ViewModel의 MutableStateFlow가 외부에 노출되지 않았는지 확인합니다.",
        "화면을 회전하거나 다크 모드를 바꿔 재생성 뒤 값이 유지되는지 관찰합니다."
      ],
      "code": "sealed interface TripUiState {\n    data object Loading : TripUiState\n    data class Success(val trips: List<Trip>) : TripUiState\n    data class Error(val message: String) : TripUiState\n}\n\nclass TripViewModel(private val repository: TripRepository) : ViewModel() {\n\n    // 1) 저장소의 Flow → 화면용 StateFlow\n    val uiState: StateFlow<TripUiState> = repository.observeTrips()\n        .map<List<Trip>, TripUiState> { TripUiState.Success(it) }\n        .catch { emit(TripUiState.Error(it.message ?: \"알 수 없는 오류\")) }\n        .stateIn(\n            scope = viewModelScope,\n            started = SharingStarted.WhileSubscribed(5_000),\n            initialValue = TripUiState.Loading\n        )\n\n    // 2) ViewModel이 직접 바꾸는 상태: 내부는 Mutable, 외부는 읽기 전용\n    private val _query = MutableStateFlow(\"\")\n    val query: StateFlow<String> = _query.asStateFlow()\n\n    fun onQueryChange(value: String) { _query.value = value }\n\n    fun deleteTrip(id: String) {\n        viewModelScope.launch { repository.delete(id) }\n    }\n}\n\n@Composable\nfun TripScreen(viewModel: TripViewModel) {\n    val uiState by viewModel.uiState.collectAsStateWithLifecycle()\n    var expanded by rememberSaveable { mutableStateOf(false) }   // 화면 전용 UI 상태\n\n    when (val state = uiState) {\n        TripUiState.Loading -> CircularProgressIndicator()\n        is TripUiState.Error -> Text(state.message)\n        is TripUiState.Success -> TripList(state.trips, onOpen = { /* 이동 */ })\n    }\n}",
      "pitfalls": [
        "ViewModel의 MutableStateFlow를 public으로 노출해 화면에서 값을 직접 바꾸는 경우",
        "collectAsState()를 사용해 앱이 백그라운드에서도 계속 수집하는 경우 → collectAsStateWithLifecycle()",
        "입력 폼 상태를 remember로만 두어 화면 회전 시 입력 내용이 사라지는 경우 → rememberSaveable 또는 ViewModel",
        "같은 데이터를 Composable과 ViewModel 양쪽에서 따로 관리해 값이 어긋나는 경우(단일 진실 공급원 위반)"
      ],
      "prompt": "현재 화면에서 상태 소유권을 분석해 줘. 각 상태가 Composable(remember/rememberSaveable)과 ViewModel 중 어디에 있어야 하는지 표로 정리하고, ViewModel의 StateFlow + stateIn + collectAsStateWithLifecycle 패턴으로 정리할 수 있는지 제안해 줘. 무조건 수정하지 말고 변경 사유를 먼저 알려 줘.",
      "checks": [
        "화면 회전 후 입력 중인 값과 목록이 유지되는가?",
        "오류·로딩·빈 상태가 모두 화면에 표현되는가?",
        "ViewModel 외부에서 상태를 직접 변경할 수 없는가?"
      ],
      "questions": [
        "rememberSaveable과 ViewModel의 차이는?",
        "StateFlow가 전달하는 값은 어디에서 갱신되는가?",
        "WhileSubscribed(5_000)의 5초는 왜 두는가?"
      ],
      "answers": [
        "rememberSaveable은 Composable에 속한 작은 UI 상태를 Bundle에 저장해 회전·프로세스 재생성 후 복원합니다(저장 가능한 타입만). ViewModel은 화면 단위의 데이터와 로직을 소유하며 회전에는 살아남지만 프로세스가 종료되면 사라집니다(필요하면 SavedStateHandle 사용).",
        "ViewModel 안에서만 갱신됩니다. MutableStateFlow의 value를 바꾸거나, Repository Flow가 새 값을 내보내면 stateIn을 통해 갱신됩니다. UI는 이벤트 함수(onQueryChange 등)를 호출할 뿐 직접 바꾸지 않습니다.",
        "화면 회전처럼 잠깐 구독이 끊겼다 다시 연결될 때 상위 Flow(DB 조회 등)를 재시작하지 않기 위해서입니다. 5초 넘게 구독자가 없으면(앱이 백그라운드 등) 수집을 멈춰 자원을 아낍니다."
      ],
      "notes": "",
      "refs": [
        "STATE_DOCS",
        "ARCH_GUIDE"
      ]
    },
    {
      "id": "scaffold",
      "group": "기초 복습",
      "title": "Scaffold·화면 구조·Edge-to-edge",
      "desc": "TopAppBar, FloatingActionButton, SnackbarHost, innerPadding, Android 15 edge-to-edge 대응.",
      "level": "복습",
      "uses": [
        "모든 프로젝트"
      ],
      "concept": [
        "Scaffold는 상단 바, 하단 바, FAB, SnackbarHost를 배치하는 기본 골격을 제공합니다.",
        "Scaffold가 content에 넘겨주는 innerPadding을 콘텐츠에 적용해야 상단 바·하단 바·시스템 바와 겹치지 않습니다.",
        "Android 15(targetSdk 35 이상)부터는 앱이 상태 바·내비게이션 바 뒤까지 그려지는 edge-to-edge가 기본(강제)입니다. Activity에서 enableEdgeToEdge()를 호출하고 Scaffold의 innerPadding 또는 WindowInsets로 여백을 처리합니다.",
        "TopAppBar 등 일부 Material3 컴포넌트는 실험적 API이므로 @OptIn(ExperimentalMaterial3Api::class)가 필요합니다.",
        "아이콘만 있는 버튼(FAB, IconButton)에는 화면 낭독기를 위한 contentDescription을 지정합니다.",
        "키보드가 올라오는 입력 화면은 Modifier.imePadding()으로 입력창이 가려지지 않게 합니다."
      ],
      "setup": "// Icons.Default.Add 등을 찾을 수 없다면 아이콘 의존성 추가\n// (또는 res/drawable 벡터 아이콘 + painterResource 사용)\nimplementation(\"androidx.compose.material:material-icons-core\")   // Compose BOM이 버전 관리",
      "steps": [
        "Activity의 onCreate에서 enableEdgeToEdge()를 호출합니다.",
        "Scaffold에 상단 바, FAB, SnackbarHost를 배치합니다.",
        "콘텐츠에 innerPadding을 적용합니다.",
        "FAB 이벤트를 ViewModel 또는 화면 콜백과 연결합니다.",
        "제스처 내비게이션/3버튼 내비게이션 기기에서 마지막 항목과 FAB가 가려지지 않는지 확인합니다."
      ],
      "code": "class MainActivity : ComponentActivity() {\n    override fun onCreate(savedInstanceState: Bundle?) {\n        super.onCreate(savedInstanceState)\n        enableEdgeToEdge()   // 시스템 바 뒤까지 그리기 (Android 15+ 기본 동작과 일치)\n        setContent { AppTheme { TripHomeScreen(onAdd = { /* 등록 화면 이동 */ }) } }\n    }\n}\n\n@OptIn(ExperimentalMaterial3Api::class)\n@Composable\nfun TripHomeScreen(onAdd: () -> Unit) {\n    val snackbarHostState = remember { SnackbarHostState() }\n\n    Scaffold(\n        topBar = { TopAppBar(title = { Text(\"내 여행\") }) },\n        floatingActionButton = {\n            FloatingActionButton(onClick = onAdd) {\n                Icon(Icons.Default.Add, contentDescription = \"여행 추가\")\n            }\n        },\n        snackbarHost = { SnackbarHost(snackbarHostState) }\n    ) { innerPadding ->\n        TripList(\n            trips = emptyList(),\n            onOpen = {},\n            modifier = Modifier.padding(innerPadding)   // 바·시스템 영역만큼 여백\n        )\n    }\n}",
      "pitfalls": [
        "innerPadding을 사용하지 않아 첫 항목이 상단 바 뒤에 가려지는 경우(린트 경고: UnusedMaterial3ScaffoldPaddingParameter)",
        "NavHost 바깥과 각 화면에 Scaffold를 중첩해 여백이 두 번 적용되는 경우",
        "targetSdk를 35로 올린 뒤 상태 바·내비게이션 바와 콘텐츠가 겹치는 경우 → insets 처리",
        "FAB에 Text(\"+\")만 넣고 contentDescription이 없어 접근성이 떨어지는 경우"
      ],
      "prompt": "현재 Compose 화면의 Scaffold 구성을 점검해 줘. enableEdgeToEdge 호출, innerPadding 적용 여부, Scaffold 중첩, FAB 이벤트 연결과 contentDescription을 확인하고 필요한 최소 수정만 제안해 줘.",
      "checks": [
        "콘텐츠가 상단 바·상태 바에 가려지지 않는가?",
        "목록 마지막 항목이 내비게이션 바·FAB에 가려지지 않는가?",
        "버튼이 올바른 이벤트를 호출하는가?",
        "TalkBack에서 FAB의 용도가 읽히는가?"
      ],
      "questions": [
        "innerPadding의 용도는?",
        "edge-to-edge가 적용되면 무엇을 추가로 신경 써야 하는가?"
      ],
      "answers": [
        "Scaffold가 배치한 상단 바·하단 바·시스템 바가 차지하는 영역의 크기입니다. 이 값을 콘텐츠의 padding으로 적용해야 콘텐츠가 바 뒤에 가려지지 않습니다.",
        "앱 화면이 상태 바와 내비게이션 바 뒤까지 확장되므로 중요한 콘텐츠·버튼이 시스템 바와 겹치지 않도록 innerPadding이나 WindowInsets(systemBars, ime 등) 여백을 적용해야 합니다. 상태 바 아이콘 색이 배경과 잘 대비되는지도 확인합니다."
      ],
      "notes": "",
      "refs": [
        "EDGE_TO_EDGE",
        "M3_COMPONENTS"
      ]
    },
    {
      "id": "navigation",
      "group": "기초 복습",
      "title": "Navigation·화면 간 전달",
      "desc": "타입 안전 경로(@Serializable), NavHost, 인자 전달과 SavedStateHandle, 잘못된 인자 처리, 백스택.",
      "level": "복습",
      "uses": [
        "여행",
        "분실물",
        "일정"
      ],
      "concept": [
        "Navigation Compose 2.8부터 문자열 경로 대신 @Serializable 클래스로 경로를 정의하는 타입 안전 방식을 사용할 수 있습니다. 인자 타입 오류를 컴파일 단계에서 잡을 수 있습니다.",
        "목록에서는 ID만 전달하고, 상세 화면의 ViewModel이 SavedStateHandle에서 ID를 꺼내 저장소에서 최신 데이터를 조회하는 패턴을 권장합니다.",
        "잘못된 숫자 인자를 0.0 등 임의 값으로 바꾸면 오류를 숨기게 됩니다. 존재하지 않는 ID는 ‘찾을 수 없음’ 화면으로 처리합니다.",
        "navigate()는 클릭 같은 이벤트에서만 호출합니다. Composable 본문에서 호출하면 재구성마다 이동이 반복됩니다.",
        "같은 화면이 백스택에 중복 쌓이지 않도록 launchSingleTop, 하단 탭 이동에는 popUpTo + saveState/restoreState를 사용합니다."
      ],
      "setup": "// app/build.gradle.kts\nplugins {\n    id(\"org.jetbrains.kotlin.plugin.serialization\")   // @Serializable 경로\n}\ndependencies {\n    implementation(\"androidx.navigation:navigation-compose:<2.8 이상>\")\n    implementation(\"org.jetbrains.kotlinx:kotlinx-serialization-json:<버전>\")\n}",
      "steps": [
        "앱의 화면 목록과 이동 경로(어떤 화면에서 어디로, 어떤 인자)를 표로 문서화합니다.",
        "경로를 @Serializable object/data class로 정의하고 NavHost에 등록합니다.",
        "상세 ViewModel에서 SavedStateHandle.toRoute()로 ID를 받아 조회합니다.",
        "존재하지 않는 ID로 접근해 오류 화면을 확인합니다.",
        "뒤로 이동, 같은 버튼 연속 클릭 시 백스택이 적절한지 확인합니다."
      ],
      "code": "// 1) 경로 정의\n@Serializable object TripListRoute\n@Serializable data class TripDetailRoute(val tripId: String)\n\n// 2) NavHost\n@Composable\nfun AppNav(navController: NavHostController = rememberNavController()) {\n    NavHost(navController = navController, startDestination = TripListRoute) {\n        composable<TripListRoute> {\n            TripListScreen(\n                onOpen = { id ->\n                    navController.navigate(TripDetailRoute(id)) { launchSingleTop = true }\n                }\n            )\n        }\n        composable<TripDetailRoute> {\n            TripDetailScreen(onBack = { navController.popBackStack() })\n        }\n    }\n}\n\n// 3) 상세 ViewModel: 인자는 SavedStateHandle에서 꺼내고 최신 데이터는 저장소에서 조회\n@HiltViewModel\nclass TripDetailViewModel @Inject constructor(\n    savedStateHandle: SavedStateHandle,\n    repository: TripRepository\n) : ViewModel() {\n    private val tripId = savedStateHandle.toRoute<TripDetailRoute>().tripId\n\n    // null이면 ‘찾을 수 없음’ 표시 (로딩과 구분하려면 UiState 사용)\n    val trip: StateFlow<Trip?> = repository.observeTrip(tripId)\n        .stateIn(viewModelScope, SharingStarted.WhileSubscribed(5_000), null)\n}",
      "pitfalls": [
        "전체 객체를 JSON 문자열로 직렬화해 경로에 넣는 경우 → ID만 전달",
        "Composable 본문에서 navigate()를 호출해 무한 이동·중복 화면이 생기는 경우",
        "문자열 경로에서 공백·한글·슬래시가 포함된 인자를 인코딩하지 않아 이동이 실패하는 경우(타입 안전 경로 권장)",
        "상세 화면에서 처음 받은 객체만 표시해 수정 후 돌아와도 예전 값이 보이는 경우"
      ],
      "prompt": "프로젝트의 Navigation 그래프를 읽고 목록→상세 이동에서 어떤 인자를 넘기는지 조사해 줘. 사용 중인 navigation-compose 버전을 확인하고, 가능하면 @Serializable 타입 안전 경로와 SavedStateHandle 방식으로 정리하는 계획을 제안해 줘. 잘못된 ID나 누락된 인자 처리도 함께 점검해 줘.",
      "checks": [
        "유효하지 않은 ID에서도 앱이 종료되지 않고 안내 화면이 나오는가?",
        "상세 화면에서 최신 데이터를 다시 조회하는가?",
        "같은 버튼을 빠르게 두 번 눌러도 화면이 두 번 쌓이지 않는가?",
        "뒤로 가기 동작이 사용자 예상과 일치하는가?"
      ],
      "questions": [
        "전체 객체 대신 ID 전달이 유리한 이유는?",
        "SavedStateHandle로 인자를 받으면 무엇이 좋은가?"
      ],
      "answers": [
        "경로 인자는 Bundle에 저장되므로 크기 제한이 있고, 객체를 넘기면 이동 이후 데이터가 바뀌어도 화면은 옛 값을 보여 줍니다. ID만 넘기고 상세 화면이 저장소에서 조회하면 항상 최신 데이터를 보여 주고 단일 진실 공급원을 유지할 수 있습니다.",
        "ViewModel이 Composable을 거치지 않고 직접 인자를 받을 수 있고, 프로세스가 종료됐다가 복원될 때도 인자가 유지됩니다. 테스트에서도 SavedStateHandle에 값을 넣어 쉽게 검증할 수 있습니다."
      ],
      "notes": "",
      "refs": [
        "NAVIGATION_DOCS"
      ]
    },
    {
      "id": "room",
      "group": "데이터·아키텍처",
      "title": "Room 로컬 저장",
      "desc": "Entity, DAO, Database, Repository, Flow 조회, 마이그레이션 그리고 변경 사항을 UI에 반영하는 흐름.",
      "level": "핵심",
      "uses": [
        "모든 프로젝트"
      ],
      "concept": [
        "Entity는 로컬 테이블 구조, DAO는 쿼리 접근, Database는 진입점입니다.",
        "Repository는 데이터 소스와 ViewModel 사이의 계약입니다. 인터페이스로 정의하면 테스트에서 가짜 구현으로 바꾸기 쉽습니다.",
        "DAO에서 Flow를 반환하면 테이블이 바뀔 때마다 새 결과가 자동으로 전달되어 UI가 갱신됩니다.",
        "suspend DAO 함수와 Flow 조회는 Room이 백그라운드 스레드에서 실행합니다. 일반 함수로 메인 스레드에서 조회하면 예외가 발생합니다.",
        "Entity 구조(필드)를 바꾸면 Database version을 올리고 Migration을 제공해야 합니다. fallbackToDestructiveMigration()은 기존 데이터를 모두 지우므로 개발 초기에만 사용합니다.",
        "UI에서 직접 DAO를 사용하지 않고, Entity를 화면 모델로 그대로 쓰지 않도록 변환 함수를 둡니다."
      ],
      "setup": "// app/build.gradle.kts\nplugins {\n    id(\"com.google.devtools.ksp\")   // 애너테이션 처리 (Kotlin 버전에 맞는 KSP 버전)\n}\ndependencies {\n    implementation(\"androidx.room:room-runtime:<버전>\")\n    implementation(\"androidx.room:room-ktx:<버전>\")   // Room 2.7+는 runtime에 포함되어 생략 가능\n    ksp(\"androidx.room:room-compiler:<버전>\")\n}\n\n// 스키마 파일을 저장해 마이그레이션 검증에 사용 (Room Gradle Plugin 사용 시)\n// room { schemaDirectory(\"$projectDir/schemas\") }",
      "steps": [
        "저장할 데이터와 고유 ID(UUID 또는 autoGenerate)를 정합니다.",
        "Entity·DAO·Database를 만들고 Repository 인터페이스와 구현을 분리합니다.",
        "ViewModel이 Repository의 Flow를 StateFlow로 바꿔 화면에 전달합니다.",
        "앱을 종료했다 재실행해도 데이터가 남는지 확인합니다.",
        "Android Studio의 App Inspection > Database Inspector로 실제 테이블 내용을 확인합니다."
      ],
      "code": "@Entity(tableName = \"trips\")\ndata class TripEntity(\n    @PrimaryKey val id: String = UUID.randomUUID().toString(),\n    val title: String,\n    val startDate: String          // ISO-8601 예: \"2026-11-05\"\n)\n\n@Dao\ninterface TripDao {\n    @Query(\"SELECT * FROM trips ORDER BY startDate DESC\")\n    fun observeAll(): Flow<List<TripEntity>>\n\n    @Query(\"SELECT * FROM trips WHERE id = :id\")\n    fun observeById(id: String): Flow<TripEntity?>\n\n    @Upsert\n    suspend fun upsert(trip: TripEntity)\n\n    @Query(\"DELETE FROM trips WHERE id = :id\")\n    suspend fun deleteById(id: String)\n}\n\n@Database(entities = [TripEntity::class], version = 1, exportSchema = true)\nabstract class AppDatabase : RoomDatabase() {\n    abstract fun tripDao(): TripDao\n}\n\n// Repository: 인터페이스(계약) + Room 구현\ninterface TripRepository {\n    fun observeTrips(): Flow<List<Trip>>\n    fun observeTrip(id: String): Flow<Trip?>\n    suspend fun save(trip: Trip)\n    suspend fun delete(id: String)\n}\n\nclass OfflineTripRepository @Inject constructor(\n    private val dao: TripDao\n) : TripRepository {\n    override fun observeTrips() = dao.observeAll().map { list -> list.map { it.toTrip() } }\n    override fun observeTrip(id: String) = dao.observeById(id).map { it?.toTrip() }\n    override suspend fun save(trip: Trip) = dao.upsert(trip.toEntity())\n    override suspend fun delete(id: String) = dao.deleteById(id)\n}\n\n// 필드 추가 시: version 1 → 2 마이그레이션\nval MIGRATION_1_2 = object : Migration(1, 2) {\n    override fun migrate(db: SupportSQLiteDatabase) {\n        db.execSQL(\"ALTER TABLE trips ADD COLUMN memo TEXT\")\n    }\n}\n// Room.databaseBuilder(context, AppDatabase::class.java, \"app.db\")\n//     .addMigrations(MIGRATION_1_2)\n//     .build()",
      "pitfalls": [
        "Entity에 필드를 추가하고 version을 올리지 않아 ‘Room cannot verify the data integrity’ 크래시가 나는 경우",
        "배포 후에도 fallbackToDestructiveMigration()을 남겨 사용자 데이터가 업데이트 때 삭제되는 경우",
        "suspend가 아닌 DAO 함수를 메인 스레드에서 호출해 IllegalStateException이 나는 경우",
        "Database를 여러 번 생성해 인스턴스가 중복되는 경우 → Hilt @Singleton으로 하나만 제공",
        "날짜를 \"11/5\" 같은 표시용 문자열로 저장해 정렬·비교가 틀어지는 경우 → ISO 형식 또는 epoch 값"
      ],
      "prompt": "현재 프로젝트의 Room Entity·DAO·Database·Repository를 찾아 데이터 흐름을 그려 줘. 새 기능에서 필요한 필드 추가 시 Database version 변경과 Migration 코드, 그리고 기존 데이터가 유지되는지 확인하는 테스트 계획을 먼저 설명해 줘. 승인 후 구현해 줘.",
      "checks": [
        "저장 후 앱 재시작 시 값이 남는가?",
        "Entity 변경 시 version과 Migration을 반영했는가?",
        "업데이트(기존 DB가 있는 상태에서 새 버전 설치) 후에도 데이터가 남는가?",
        "ID 중복을 방지하는가?",
        "저장·삭제 후 목록이 자동으로 갱신되는가?"
      ],
      "questions": [
        "DAO와 Repository의 책임 차이는?",
        "Flow로 조회했을 때 UI가 갱신되는 경로는?",
        "Migration 없이 version만 올리면 어떻게 되는가?"
      ],
      "answers": [
        "DAO는 특정 테이블에 대한 SQL 쿼리를 실행하는 저수준 접근 계층입니다. Repository는 앱이 필요로 하는 데이터 연산(목록 관찰, 저장, 삭제)을 제공하고, Room·네트워크 등 어떤 소스를 쓰는지와 모델 변환을 숨기는 계약입니다.",
        "DB 변경 → Room이 관련 쿼리의 Flow에 새 결과 방출 → Repository에서 도메인 모델로 변환 → ViewModel의 stateIn으로 StateFlow 갱신 → Compose의 collectAsStateWithLifecycle이 새 값을 받아 재구성.",
        "Room이 해당 버전 간 Migration을 찾지 못해 앱 실행 시 IllegalStateException으로 크래시가 납니다. fallbackToDestructiveMigration()을 설정했다면 크래시 대신 기존 데이터가 모두 삭제됩니다."
      ],
      "notes": "",
      "refs": [
        "ROOM_DOCS",
        "ARCH_GUIDE"
      ]
    },
    {
      "id": "hilt",
      "group": "데이터·아키텍처",
      "title": "Hilt 의존성 주입",
      "desc": "@HiltAndroidApp, @AndroidEntryPoint, @HiltViewModel, @Module/@Provides/@Binds, hiltViewModel()의 연결.",
      "level": "핵심",
      "uses": [
        "모든 프로젝트"
      ],
      "concept": [
        "객체를 화면에서 매번 생성하지 않고 필요한 의존성을 생성자로 주입받습니다. 테스트 시 가짜 구현으로 바꾸기 쉬워집니다.",
        "@HiltAndroidApp을 붙인 Application 클래스를 만들고 Manifest의 android:name에 등록해야 Hilt가 시작됩니다.",
        "의존성을 받는 Activity에는 @AndroidEntryPoint, ViewModel에는 @HiltViewModel + @Inject constructor를 붙입니다.",
        "내가 만든 클래스는 @Inject constructor로, 생성자를 직접 쓸 수 없는 외부 라이브러리 객체(Room, Retrofit)는 @Module의 @Provides로, 인터페이스↔구현 연결은 @Binds로 제공합니다.",
        "@InstallIn(SingletonComponent::class) + @Singleton은 앱 전체에서 하나의 인스턴스를 공유합니다. Database·Retrofit은 싱글턴으로 제공합니다.",
        "Compose에서는 hiltViewModel()로 ViewModel을 받습니다."
      ],
      "setup": "// 프로젝트 build.gradle.kts\nplugins {\n    id(\"com.google.dagger.hilt.android\") version \"<버전>\" apply false\n    id(\"com.google.devtools.ksp\") version \"<버전>\" apply false\n}\n\n// app/build.gradle.kts\nplugins {\n    id(\"com.google.dagger.hilt.android\")\n    id(\"com.google.devtools.ksp\")\n}\ndependencies {\n    implementation(\"com.google.dagger:hilt-android:<버전>\")\n    ksp(\"com.google.dagger:hilt-compiler:<버전>\")\n    // Compose의 hiltViewModel(): 사용하는 androidx.hilt 버전에 따라\n    // hilt-navigation-compose 또는 hilt-lifecycle-viewmodel-compose\n    implementation(\"androidx.hilt:hilt-navigation-compose:<버전>\")\n}\n\n<!-- AndroidManifest.xml -->\n<application android:name=\".TripApp\" ... >",
      "steps": [
        "Application 클래스와 Manifest의 android:name 등록을 확인합니다.",
        "Activity의 @AndroidEntryPoint, ViewModel의 @HiltViewModel을 확인합니다.",
        "Database·DAO·Retrofit을 제공하는 @Module을 찾고 @Singleton 여부를 확인합니다.",
        "ViewModel에 주입된 생성자 의존성을 Repository → DAO → Database 순으로 추적합니다.",
        "Repository가 인터페이스로 분리되어 테스트 대체 구현이 가능한지 검토합니다."
      ],
      "code": "@HiltAndroidApp\nclass TripApp : Application()          // Manifest: android:name=\".TripApp\"\n\n@AndroidEntryPoint\nclass MainActivity : ComponentActivity() { /* setContent { AppNav() } */ }\n\n// 외부 라이브러리 객체 제공: @Provides\n@Module\n@InstallIn(SingletonComponent::class)\nobject DatabaseModule {\n    @Provides\n    @Singleton\n    fun provideDatabase(@ApplicationContext context: Context): AppDatabase =\n        Room.databaseBuilder(context, AppDatabase::class.java, \"app.db\").build()\n\n    @Provides\n    fun provideTripDao(db: AppDatabase): TripDao = db.tripDao()\n}\n\n// 인터페이스 ↔ 구현 연결: @Binds\n@Module\n@InstallIn(SingletonComponent::class)\nabstract class RepositoryModule {\n    @Binds\n    @Singleton\n    abstract fun bindTripRepository(impl: OfflineTripRepository): TripRepository\n}\n\n@HiltViewModel\nclass TripViewModel @Inject constructor(\n    private val repository: TripRepository\n) : ViewModel()\n\n// Compose에서 사용\n@Composable\nfun TripRoute(viewModel: TripViewModel = hiltViewModel()) {\n    val uiState by viewModel.uiState.collectAsStateWithLifecycle()\n    // ...\n}",
      "pitfalls": [
        "Manifest에 android:name을 등록하지 않아 ‘Hilt Activity must be attached to an @HiltAndroidApp Application’ 크래시가 나는 경우",
        "Activity에 @AndroidEntryPoint를 빠뜨려 hiltViewModel()에서 크래시가 나는 경우",
        "Composable에서 viewModel()을 사용해 Hilt ViewModel 생성에 실패하는 경우 → hiltViewModel()",
        "Database 제공에 @Singleton을 빠뜨려 DB 인스턴스가 여러 개 생기는 경우",
        "ViewModel에 Activity Context를 주입해 메모리 누수가 생기는 경우 → @ApplicationContext 사용"
      ],
      "prompt": "현재 프로젝트의 Hilt 구성요소와 주입 그래프를 분석해 줘. Application, Activity, ViewModel, Module을 연결하는 표를 작성하고 Manifest 등록, @Singleton 누락으로 인한 중복 생성, @Provides와 @Binds 사용이 적절한지 검토해 줘.",
      "checks": [
        "Hilt 초기화가 정상이고 앱이 크래시 없이 시작되는가?",
        "Database·Retrofit이 하나의 인스턴스로 제공되는가?",
        "순환 의존성이 없는가?",
        "Repository를 가짜 구현으로 교체할 수 있는 구조인가?"
      ],
      "questions": [
        "@Inject constructor와 @Provides는 언제 구분하는가?",
        "@Binds는 @Provides와 무엇이 다른가?"
      ],
      "answers": [
        "생성자를 내가 작성할 수 있는 클래스(Repository, ViewModel)는 @Inject constructor로 충분합니다. Room.databaseBuilder, Retrofit.Builder처럼 빌더로 만들어야 하거나 외부 라이브러리라서 생성자에 애너테이션을 붙일 수 없는 객체는 @Module의 @Provides 함수로 만드는 방법을 알려 줍니다.",
        "@Binds는 ‘이 인터페이스를 요청하면 이 구현을 주라’는 연결만 선언하는 추상 함수로, 구현 클래스가 @Inject constructor를 가지고 있어야 합니다. 직접 객체를 생성하는 코드가 없어 더 간결하고 생성 코드도 적게 만들어집니다. @Provides는 객체를 직접 만드는 코드를 작성합니다."
      ],
      "notes": "",
      "refs": [
        "HILT_DOCS"
      ]
    },
    {
      "id": "datastore",
      "group": "데이터·아키텍처",
      "title": "DataStore 환경설정",
      "desc": "테마·정렬 방식·온보딩 완료 여부 같은 간단한 key-value 설정값을 읽고 쓰기.",
      "level": "복습",
      "uses": [
        "모든 프로젝트"
      ],
      "concept": [
        "Preferences DataStore는 간단한 환경설정이나 사용자 기본값 저장에 적합하며 SharedPreferences를 대체합니다.",
        "읽기는 Flow(data)로 제공되어 값이 바뀌면 자동으로 새 값이 전달되고, 쓰기는 suspend 함수 edit로 비동기 처리됩니다.",
        "같은 파일 이름으로 DataStore 인스턴스를 두 개 이상 만들면 오류가 나므로 최상위(top-level) 위임 프로퍼티로 한 번만 선언합니다.",
        "복잡한 관계형 기록이나 목록은 Room 같은 구조화된 DB에 둡니다.",
        "로그인 토큰 같은 민감 정보는 DataStore에 평문으로 저장하지 않습니다."
      ],
      "setup": "// app/build.gradle.kts\nimplementation(\"androidx.datastore:datastore-preferences:<버전>\")",
      "steps": [
        "저장할 값이 설정인지 도메인 기록인지 구분합니다.",
        "Context 확장으로 DataStore를 한 번만 선언하고 SettingsRepository로 감쌉니다.",
        "ViewModel에서 설정 Flow를 StateFlow로 바꿔 화면에 반영합니다.",
        "설정 변경 후 앱을 완전히 종료하고 재시작해 유지되는지 검증합니다."
      ],
      "code": "// 최상위(top-level)에 한 번만 선언 → 앱 전체에서 하나의 인스턴스\nval Context.dataStore: DataStore<Preferences> by preferencesDataStore(name = \"settings\")\n\nclass SettingsRepository @Inject constructor(\n    @ApplicationContext private val context: Context\n) {\n    private val darkModeKey = booleanPreferencesKey(\"dark_mode\")\n\n    // 읽기: Flow\n    val darkMode: Flow<Boolean> = context.dataStore.data\n        .catch { e -> if (e is IOException) emit(emptyPreferences()) else throw e }\n        .map { prefs -> prefs[darkModeKey] ?: false }\n\n    // 쓰기: suspend\n    suspend fun setDarkMode(enabled: Boolean) {\n        context.dataStore.edit { prefs -> prefs[darkModeKey] = enabled }\n    }\n}\n\n// ViewModel\nval darkMode: StateFlow<Boolean> = settingsRepository.darkMode\n    .stateIn(viewModelScope, SharingStarted.WhileSubscribed(5_000), false)\n\nfun onDarkModeChange(enabled: Boolean) {\n    viewModelScope.launch { settingsRepository.setDarkMode(enabled) }\n}",
      "pitfalls": [
        "여러 파일이나 함수 안에서 preferencesDataStore를 반복 선언해 ‘multiple DataStores active for the same file’ 오류가 나는 경우",
        "runBlocking으로 설정을 읽어 앱 시작이나 UI가 멈추는 경우",
        "목록·기록 데이터를 JSON 문자열로 DataStore에 저장하는 경우 → Room 사용",
        "토큰·비밀번호를 평문으로 저장하는 경우"
      ],
      "prompt": "현재 프로젝트에서 설정값을 저장할 필요가 있는지 검토해 줘. Room과 DataStore의 선택 기준을 설명하고, Preferences DataStore를 top-level에 한 번만 선언하는 SettingsRepository + ViewModel 연결 구조를 최소 단위로 제안해 줘.",
      "checks": [
        "설정 저장 후 앱 재시작 시 복원되는가?",
        "설정 변경 즉시 화면에 반영되는가?",
        "DataStore 인스턴스가 하나만 선언되어 있는가?"
      ],
      "questions": [
        "Room과 DataStore를 언제 구분하는가?",
        "DataStore 읽기가 Flow로 제공되면 무엇이 좋은가?"
      ],
      "answers": [
        "키 하나에 값 하나인 작은 설정(테마, 정렬 기준, 알림 사용 여부)은 DataStore에, 여러 개의 레코드가 있고 검색·정렬·관계가 필요한 데이터(여행 기록, 일정 목록)는 Room에 저장합니다.",
        "설정이 바뀌면 구독 중인 모든 화면이 자동으로 새 값을 받으므로 별도의 새로고침 코드가 필요 없고, 디스크 읽기가 메인 스레드를 막지 않습니다."
      ],
      "notes": "",
      "refs": [
        "DATASTORE_DOCS"
      ]
    },
    {
      "id": "retrofit",
      "group": "네트워크",
      "title": "Retrofit·JSON API",
      "desc": "INTERNET 권한, HTTP GET, API 인터페이스, DTO, kotlinx.serialization Converter, safeApiCall 오류 처리.",
      "level": "강의자료",
      "uses": [
        "날씨",
        "검색",
        "외부 API"
      ],
      "concept": [
        "네트워크 학습에서는 JSONPlaceholder로 GET 개념을 익히고 Open-Meteo Weather App으로 확장합니다.",
        "앱이 인터넷을 사용하려면 Manifest에 INTERNET 권한을 선언해야 합니다(설치 시 자동 허용되는 일반 권한이라 런타임 요청은 필요 없음).",
        "Retrofit은 HTTP API를 Kotlin 인터페이스로 선언하게 해 주며, suspend 함수로 선언하면 코루틴에서 바로 호출할 수 있습니다.",
        "DTO는 서버의 JSON 응답 구조를 표현하는 클래스입니다. JSON 이름이 Kotlin 이름과 다르면 @SerialName으로 연결합니다.",
        "Converter(kotlinx.serialization)는 JSON 문자열 ↔ DTO 객체 변환을 담당합니다. 서버가 DTO에 없는 필드를 보내도 실패하지 않도록 ignoreUnknownKeys = true를 설정합니다.",
        "baseUrl은 반드시 /로 끝나야 하며, Retrofit 인스턴스는 앱에서 하나만 만들어 재사용합니다(Hilt @Singleton).",
        "오류는 HTTP 오류(HttpException: 404, 500 등), 네트워크 오류(IOException: 연결 끊김, 타임아웃), 파싱 오류(SerializationException)로 구분해 사용자에게 다른 메시지를 보여 줍니다.",
        "CancellationException은 코루틴 취소 신호이므로 catch해서 삼키지 말고 다시 throw해야 합니다."
      ],
      "setup": "<!-- AndroidManifest.xml (application 바깥) -->\n<uses-permission android:name=\"android.permission.INTERNET\" />\n\n// app/build.gradle.kts\nplugins {\n    id(\"org.jetbrains.kotlin.plugin.serialization\")\n}\ndependencies {\n    implementation(\"com.squareup.retrofit2:retrofit:<버전>\")\n    implementation(\"com.squareup.retrofit2:converter-kotlinx-serialization:<버전>\")\n    implementation(\"org.jetbrains.kotlinx:kotlinx-serialization-json:<버전>\")\n    // (선택) 요청·응답 로그 확인\n    implementation(\"com.squareup.okhttp3:logging-interceptor:<버전>\")\n}",
      "steps": [
        "서버 API 문서의 URL과 JSON 응답 예시를 먼저 읽고 필요한 필드만 고릅니다.",
        "Manifest에 INTERNET 권한, Gradle에 Retrofit·serialization 의존성을 추가합니다.",
        "@Serializable DTO와 Retrofit 인터페이스를 정의합니다.",
        "Retrofit 인스턴스를 Hilt 모듈에서 싱글턴으로 제공합니다.",
        "Repository에서 safeApiCall로 오류를 구분하고 ViewModel에서 UiState로 전달합니다.",
        "비행기 모드로 네트워크를 끊고 실패 화면과 다시 시도 버튼을 테스트합니다."
      ],
      "code": "@Serializable\ndata class PostDto(\n    val id: Int,\n    val title: String,\n    @SerialName(\"body\") val content: String   // JSON 이름과 Kotlin 이름 연결\n)\n\ninterface PostApi {\n    @GET(\"posts\")\n    suspend fun getPosts(): List<PostDto>\n\n    @GET(\"posts/{id}\")\n    suspend fun getPost(@Path(\"id\") id: Int): PostDto\n}\n\n// Hilt 모듈에서 싱글턴으로 제공\n@Module\n@InstallIn(SingletonComponent::class)\nobject NetworkModule {\n    private val json = Json { ignoreUnknownKeys = true }\n\n    @Provides\n    @Singleton\n    fun provideRetrofit(): Retrofit = Retrofit.Builder()\n        .baseUrl(\"https://jsonplaceholder.typicode.com/\")   // 반드시 /로 끝남\n        .addConverterFactory(json.asConverterFactory(\"application/json\".toMediaType()))\n        .build()\n\n    @Provides\n    @Singleton\n    fun providePostApi(retrofit: Retrofit): PostApi = retrofit.create(PostApi::class.java)\n}\n\n// 오류를 구분해서 돌려주는 안전 호출\nsuspend fun <T> safeApiCall(block: suspend () -> T): Result<T> =\n    try {\n        Result.success(block())\n    } catch (e: CancellationException) {\n        throw e                                   // 취소는 삼키지 말고 다시 던짐\n    } catch (e: HttpException) {\n        Result.failure(Exception(\"서버 오류 (${e.code()})\"))\n    } catch (e: IOException) {\n        Result.failure(Exception(\"네트워크 연결을 확인하세요\"))\n    } catch (e: SerializationException) {\n        Result.failure(Exception(\"응답 형식이 올바르지 않습니다\"))\n    }\n\n// Repository → ViewModel\nclass PostRepository @Inject constructor(private val api: PostApi) {\n    suspend fun getPosts(): Result<List<PostDto>> = safeApiCall { api.getPosts() }\n}\n\nfun load() {\n    _uiState.value = UiState.Loading\n    viewModelScope.launch {\n        repository.getPosts()\n            .onSuccess { _uiState.value = UiState.Success(it) }\n            .onFailure { _uiState.value = UiState.Error(it.message ?: \"오류\") }\n    }\n}",
      "pitfalls": [
        "Manifest에 INTERNET 권한을 넣지 않아 모든 요청이 실패하는 경우(SecurityException 또는 socket failed: EPERM 로그)",
        "baseUrl이 /로 끝나지 않아 IllegalArgumentException이 나는 경우",
        "http:// 주소를 사용해 Android 9+의 평문 통신 차단에 걸리는 경우 → https 사용",
        "에뮬레이터에서 PC의 로컬 서버에 localhost로 접속하는 경우 → 10.0.2.2 사용",
        "catch (e: Exception)으로 CancellationException까지 삼켜 화면을 벗어난 뒤에도 오류 상태가 표시되는 경우",
        "API 키를 코드에 하드코딩해 GitHub에 올리는 경우 → local.properties + BuildConfig 사용"
      ],
      "prompt": "현재 프로젝트에 외부 GET API 연결 기능이 필요해. API 문서의 JSON 구조를 확인한 뒤 INTERNET 권한, kotlinx.serialization DTO, Retrofit 인터페이스, Hilt NetworkModule, Repository(safeApiCall), ViewModel(UiState), Compose UI로 분리해 구현해 줘. CancellationException은 재전파하고, HTTP 오류·네트워크 실패·파싱 오류를 구분해 테스트해 줘.",
      "checks": [
        "정상 응답이 표시되는가?",
        "인터넷 연결 끊김(비행기 모드)에서 오류 상태와 다시 시도 버튼이 표시되는가?",
        "잘못된 주소(404)에서 서버 오류 메시지가 표시되는가?",
        "취소된 코루틴이 예외 처리로 삼켜지지 않는가?",
        "API 키나 비밀 주소가 저장소에 노출되지 않는가?"
      ],
      "questions": [
        "DTO와 Entity의 차이는?",
        "Retrofit Converter가 필요한 이유는?",
        "CancellationException을 다시 throw해야 하는 이유는?"
      ],
      "answers": [
        "DTO는 서버 API의 JSON 구조를 그대로 표현하는 네트워크 계층 모델이고, Entity는 Room 테이블 구조를 표현하는 로컬 저장 모델입니다. 서버 형식과 DB 형식은 독립적으로 바뀔 수 있으므로 분리하고, 화면에는 둘 다 아닌 도메인/UI 모델로 변환해 전달합니다.",
        "HTTP 응답 본문은 단순한 바이트(문자열)입니다. Converter가 JSON 문자열을 DTO 객체로, 요청 시에는 객체를 JSON으로 변환해 줍니다. Converter를 등록하지 않으면 Retrofit이 반환 타입을 만드는 방법을 몰라 오류가 납니다.",
        "코루틴 취소(화면 종료, viewModelScope 취소)는 CancellationException을 던지는 방식으로 전파됩니다. 이를 catch해서 일반 오류로 처리하면 취소가 중단되어 이미 사라진 화면의 상태를 갱신하거나 작업이 계속 실행될 수 있습니다."
      ],
      "notes": "출처: 제공된 Retrofit·날씨 앱 강의자료와 코드 읽기 가이드. 샘플 코드는 이해용 발췌이며 import는 생략했습니다.",
      "refs": [
        "NETWORK_LESSON",
        "RETROFIT_DOCS",
        "ARCH_GUIDE"
      ]
    },
    {
      "id": "weather",
      "group": "네트워크",
      "title": "Weather App 코드 읽기",
      "desc": "Open-Meteo 호출 흐름: City → Navigation → Api → Repository → UiState → WeatherScreen.",
      "level": "강의자료",
      "uses": [
        "날씨 앱"
      ],
      "concept": [
        "날씨 API 호출은 화면에서 직접 하지 않고 Repository를 거칩니다.",
        "City에서 위도·경도를 선택하고 OpenMeteoApi가 https://api.open-meteo.com/v1/forecast 에 요청합니다. Open-Meteo는 비상업적 사용에 API 키가 필요 없습니다.",
        "요청 매개변수: latitude·longitude(좌표), current(현재 날씨 변수 목록, 예: temperature_2m,weather_code), hourly/daily(시간별·일별 변수), timezone.",
        "timezone=auto는 요청한 좌표의 현지 시간대로 응답의 시간(time) 값을 맞춰 줍니다. 지정하지 않으면 GMT(UTC) 기준 시간이 반환되어 날짜·시간이 어긋날 수 있습니다.",
        "weather_code는 WMO 날씨 코드(0 맑음, 1~3 구름, 61~65 비, 71~75 눈 등)이므로 화면에 표시할 때 문구·아이콘으로 변환합니다.",
        "safeApiCall은 네트워크 예외를 Result 등으로 감싸 ViewModel이 오류 상태를 표시하게 하되, CancellationException은 다시 throw해 코루틴 취소를 방해하지 않습니다.",
        "WeatherScreen은 collectAsStateWithLifecycle로 상태를 수집합니다."
      ],
      "steps": [
        "CityScreen에서 서울을 선택합니다.",
        "AppNav가 도시(또는 좌표) 인자를 넘기는 코드를 찾습니다.",
        "OpenMeteoApi의 @Query 매개변수와 DTO의 @SerialName을 실제 JSON 응답과 비교합니다.",
        "브라우저에서 같은 요청 URL을 열어 JSON을 직접 확인합니다.",
        "WeatherRepository의 safeApiCall과 WeatherViewModel의 UiState 전환을 추적합니다.",
        "WeatherScreen이 Loading/Success/Error를 어떻게 표시하는지 확인합니다."
      ],
      "code": "// 호출 흐름\n// CityScreen → AppNav → WeatherViewModel → WeatherRepository\n//        → OpenMeteoApi → Open-Meteo 서버 → DTO\n//        → UiState → WeatherScreen\n\n// 브라우저로 확인할 수 있는 요청 예시\n// https://api.open-meteo.com/v1/forecast?latitude=37.5665&longitude=126.978\n//     &current=temperature_2m,weather_code&timezone=auto\n\ninterface OpenMeteoApi {\n    @GET(\"v1/forecast\")\n    suspend fun getForecast(\n        @Query(\"latitude\") latitude: Double,\n        @Query(\"longitude\") longitude: Double,\n        @Query(\"current\") current: String = \"temperature_2m,weather_code\",\n        @Query(\"timezone\") timezone: String = \"auto\"\n    ): ForecastDto\n}\n\n@Serializable\ndata class ForecastDto(val current: CurrentDto)\n\n@Serializable\ndata class CurrentDto(\n    val time: String,                                   // 현지 시각 (timezone=auto)\n    @SerialName(\"temperature_2m\") val temperature: Double,\n    @SerialName(\"weather_code\") val weatherCode: Int\n)\n\n// WMO 코드 → 화면 문구\nfun weatherLabel(code: Int): String = when (code) {\n    0 -> \"맑음\"\n    1, 2, 3 -> \"구름\"\n    45, 48 -> \"안개\"\n    in 51..67 -> \"비\"\n    in 71..77 -> \"눈\"\n    in 80..82 -> \"소나기\"\n    in 95..99 -> \"뇌우\"\n    else -> \"알 수 없음\"\n}",
      "pitfalls": [
        "위도(latitude)와 경도(longitude)의 순서를 바꿔 엉뚱한 지역의 날씨가 나오는 경우",
        "timezone을 지정하지 않아 날짜가 하루 어긋나 보이는 경우",
        "weather_code 숫자를 그대로 화면에 표시하는 경우",
        "ignoreUnknownKeys 없이 DTO에 없는 필드가 응답에 포함되어 파싱이 실패하는 경우",
        "좌표 Double을 문자열 경로로 넘기다 소수점·형식 문제로 0.0이 들어가는 경우"
      ],
      "prompt": "Weather App의 실제 파일 구조를 탐색해서 도시 선택부터 날씨 표시까지 호출 흐름을 표로 정리해 줘. 각 단계의 파일 경로, 요청 URL의 매개변수(timezone 포함), DTO와 실제 JSON의 대응, safeApiCall의 예외 처리 범위와 한계를 보고해 줘. 코드 변경은 하지 마.",
      "checks": [
        "다른 도시의 데이터가 다르게 나오는가?",
        "날짜/시간대가 현지 기준으로 올바른가?",
        "날씨 코드가 사람이 읽을 수 있는 문구로 표시되는가?",
        "네트워크 실패 시 오류가 표시되는가?"
      ],
      "questions": [
        "safeApiCall에서 CancellationException을 왜 다시 throw해야 하는가?",
        "timezone=auto는 어떤 의미인가?",
        "브라우저로 API URL을 직접 열어 보는 것이 왜 도움이 되는가?"
      ],
      "answers": [
        "코루틴 취소는 CancellationException으로 전달됩니다. 이를 오류로 처리해 삼키면 사용자가 화면을 떠나 작업이 취소되어야 할 때도 코루틴이 정상 종료된 것처럼 이어져, 사라진 화면의 상태를 바꾸거나 불필요한 작업을 계속합니다.",
        "요청한 위도·경도의 현지 시간대를 자동으로 판단해 응답의 시간 값을 그 시간대로 반환하라는 뜻입니다. 서울 좌표라면 Asia/Seoul 기준 시간이 됩니다.",
        "앱 코드와 무관하게 서버가 실제로 어떤 JSON을 주는지 확인할 수 있어, 문제가 요청 매개변수·서버 응답 쪽인지 DTO·파싱·UI 쪽인지 범위를 좁힐 수 있습니다."
      ],
      "notes": "제공된 코드 읽기 가이드 기준이며, 실제 학생 프로젝트 파일과 차이가 있을 수 있습니다. 코드 블록의 API 정의는 이해를 돕기 위한 예시입니다.",
      "refs": [
        "NETWORK_LESSON",
        "OPEN_METEO"
      ]
    },
    {
      "id": "dialogs",
      "group": "UI 기능",
      "title": "AlertDialog·삭제 확인",
      "desc": "위험한 작업을 실행하기 전 확인받는 사용자 인터페이스와 삭제 대상 상태 관리.",
      "level": "강의자료",
      "uses": [
        "분실물",
        "게시글",
        "여행 기록"
      ],
      "concept": [
        "AlertDialog는 영구 삭제 등 되돌리기 어려운 작업을 확인하는 데 적합합니다. 되돌릴 수 있는 작업은 Snackbar의 실행 취소가 더 자연스럽습니다.",
        "다이얼로그 표시 여부는 화면 UI 상태이고, 실제 삭제는 ViewModel → Repository가 수행하도록 분리합니다.",
        "목록에서 삭제할 때는 ‘보이는지 여부(Boolean)’보다 ‘삭제 대상 ID(String?)’를 상태로 두면 어떤 항목을 지울지 정확히 유지할 수 있습니다.",
        "확인 버튼은 삭제 요청과 함께 다이얼로그를 닫아야 합니다. onDismissRequest는 바깥 터치·뒤로 가기 시 호출됩니다.",
        "다이얼로그 문구에는 무엇이 삭제되는지(항목 이름)와 되돌릴 수 없다는 점을 명확히 적습니다."
      ],
      "steps": [
        "삭제 대상 상태(pendingDelete)를 rememberSaveable 또는 ViewModel에 둡니다.",
        "삭제 버튼 클릭 때 대상을 지정해 다이얼로그를 엽니다.",
        "취소·바깥 터치·뒤로 가기 시 데이터는 그대로 두고 다이얼로그만 닫습니다.",
        "확인 시 다이얼로그를 닫고 ViewModel을 통해 실제 삭제를 수행합니다.",
        "다이얼로그가 열린 상태에서 화면을 회전해 상태가 유지되는지 확인합니다."
      ],
      "code": "@Composable\nfun TripListWithDelete(trips: List<Trip>, onDelete: (String) -> Unit) {\n    // 삭제할 항목의 ID (null이면 다이얼로그 닫힘). 회전해도 유지\n    var pendingDeleteId by rememberSaveable { mutableStateOf<String?>(null) }\n\n    LazyColumn {\n        items(trips, key = { it.id }) { trip ->\n            ListItem(\n                headlineContent = { Text(trip.title) },\n                trailingContent = {\n                    IconButton(onClick = { pendingDeleteId = trip.id }) {\n                        Icon(Icons.Default.Delete, contentDescription = \"${trip.title} 삭제\")\n                    }\n                }\n            )\n        }\n    }\n\n    val target = trips.find { it.id == pendingDeleteId }\n    if (target != null) {\n        AlertDialog(\n            onDismissRequest = { pendingDeleteId = null },\n            title = { Text(\"삭제 확인\") },\n            text = { Text(\"‘${target.title}’을(를) 삭제할까요? 되돌릴 수 없습니다.\") },\n            confirmButton = {\n                TextButton(onClick = {\n                    pendingDeleteId = null          // 먼저 닫고\n                    onDelete(target.id)             // ViewModel → Repository에서 실제 삭제\n                }) { Text(\"삭제\") }\n            },\n            dismissButton = {\n                TextButton(onClick = { pendingDeleteId = null }) { Text(\"취소\") }\n            }\n        )\n    }\n}",
      "pitfalls": [
        "확인 버튼에서 삭제만 호출하고 다이얼로그를 닫지 않아 다이얼로그가 남아 있는 경우",
        "목록 전체가 하나의 Boolean 상태를 공유해 어떤 항목을 삭제할지 잃어버리는 경우",
        "Composable에서 DAO를 직접 호출해 삭제하는 경우",
        "삭제 대상 객체 전체를 rememberSaveable에 넣어 저장 불가 타입 오류가 나는 경우 → ID 저장"
      ],
      "prompt": "현재 목록의 삭제 버튼에 AlertDialog를 추가해 줘. 삭제 대상 ID를 rememberSaveable로 관리하고, 취소·바깥 터치 시 데이터가 변경되지 않으며 확인 시에만 다이얼로그를 닫고 ViewModel → Repository를 통해 삭제하도록 해 줘. 기존 UI를 유지하고 검증 항목을 보고해 줘.",
      "checks": [
        "취소·바깥 터치·뒤로 가기 시 아무것도 삭제되지 않는가?",
        "확인 후 다이얼로그가 닫히고 목록이 갱신되는가?",
        "다이얼로그에 삭제할 항목 이름이 정확히 표시되는가?",
        "다이얼로그가 열린 상태에서 회전해도 유지되는가?"
      ],
      "questions": [
        "showDeleteDialog 상태는 어디에 두는 것이 좋은가?",
        "AlertDialog 대신 Snackbar ‘실행 취소’가 더 나은 경우는?"
      ],
      "answers": [
        "다이얼로그 표시는 화면 전용 UI 상태이므로 보통 Composable의 rememberSaveable에 둡니다(회전에도 유지). 다만 삭제 진행 중·실패 같은 상태가 함께 필요하거나 여러 화면에서 공유되면 ViewModel의 UiState에 둡니다. 실제 삭제 로직은 항상 ViewModel에 있습니다.",
        "삭제 후 복구가 가능한 경우(데이터를 잠시 보관하거나 soft delete)입니다. 매번 확인을 묻는 대신 즉시 삭제하고 짧은 시간 동안 되돌릴 기회를 주면 흐름이 끊기지 않습니다. 복구가 불가능하거나 영향이 큰 작업은 AlertDialog가 적합합니다."
      ],
      "notes": "",
      "refs": [
        "UI_SYSTEM_LESSON",
        "M3_DIALOG"
      ]
    },
    {
      "id": "selection",
      "group": "UI 기능",
      "title": "BottomSheet·Dropdown·날짜 선택",
      "desc": "메뉴, 카테고리, 날짜 입력을 위한 ModalBottomSheet, ExposedDropdownMenuBox, DatePickerDialog와 기간 검증.",
      "level": "강의자료",
      "uses": [
        "일정",
        "여행",
        "게시판"
      ],
      "concept": [
        "ModalBottomSheet는 공유·편집 같은 추가 동작을 제시할 때, ExposedDropdownMenuBox는 정해진 선택지 중 하나를 고를 때 사용합니다.",
        "DatePicker는 날짜 선택, TimePicker는 시간 선택을 보조합니다. 둘 다 Material3에서 @OptIn(ExperimentalMaterial3Api::class)가 필요합니다.",
        "Dropdown의 menuAnchor 매개변수는 Material3 버전에 따라 다릅니다(1.3: MenuAnchorType, 1.4+: ExposedDropdownMenuAnchorType). 읽기 전용 필드는 PrimaryNotEditable 유형을 사용합니다.",
        "DatePickerState.selectedDateMillis는 선택한 날짜의 ‘UTC 자정’ 밀리초입니다. 기기 시간대로 변환하면 날짜가 하루 밀릴 수 있으므로 ZoneOffset.UTC로 LocalDate로 바꿉니다.",
        "날짜는 LocalDate로 다루고 저장할 때는 ISO 문자열(\"2026-11-05\")이나 epochDay(Long)로 저장하면 정렬·비교가 쉽습니다.",
        "java.time(LocalDate)은 minSdk 26 이상에서 바로 사용할 수 있고, 그 미만이면 core library desugaring을 설정합니다.",
        "selectableDates로 선택 가능한 날짜 범위를 제한하고, 저장 전 종료일 ≥ 시작일을 다시 검증합니다."
      ],
      "steps": [
        "입력 모델을 정합니다(카테고리: enum/문자열, 날짜: LocalDate).",
        "카테고리 Dropdown을 읽기 전용 필드로 만듭니다.",
        "DatePickerDialog로 시작일·종료일을 선택하고 UTC 기준으로 LocalDate로 변환합니다.",
        "저장 버튼에서 기간을 검증하고 오류 메시지를 필드 아래에 표시합니다.",
        "기기 시간대를 바꿔(설정 > 날짜와 시간) 선택한 날짜가 그대로인지 확인합니다."
      ],
      "code": "// 1) 카테고리 Dropdown (읽기 전용)\n@OptIn(ExperimentalMaterial3Api::class)\n@Composable\nfun CategoryDropdown(options: List<String>, selected: String, onSelect: (String) -> Unit) {\n    var expanded by remember { mutableStateOf(false) }\n    ExposedDropdownMenuBox(expanded = expanded, onExpandedChange = { expanded = it }) {\n        OutlinedTextField(\n            value = selected,\n            onValueChange = {},\n            readOnly = true,\n            label = { Text(\"카테고리\") },\n            trailingIcon = { ExposedDropdownMenuDefaults.TrailingIcon(expanded) },\n            modifier = Modifier\n                // Material3 1.3이면 MenuAnchorType.PrimaryNotEditable\n                .menuAnchor(ExposedDropdownMenuAnchorType.PrimaryNotEditable)\n                .fillMaxWidth()\n        )\n        ExposedDropdownMenu(expanded = expanded, onDismissRequest = { expanded = false }) {\n            options.forEach { option ->\n                DropdownMenuItem(\n                    text = { Text(option) },\n                    onClick = { onSelect(option); expanded = false }\n                )\n            }\n        }\n    }\n}\n\n// 2) 날짜 선택 다이얼로그\n@OptIn(ExperimentalMaterial3Api::class)\n@Composable\nfun TripDatePicker(onConfirm: (LocalDate) -> Unit, onDismiss: () -> Unit) {\n    val state = rememberDatePickerState()\n    DatePickerDialog(\n        onDismissRequest = onDismiss,\n        confirmButton = {\n            TextButton(\n                enabled = state.selectedDateMillis != null,\n                onClick = {\n                    state.selectedDateMillis?.let { millis ->\n                        // DatePicker 값은 UTC 자정 기준 → UTC로 변환해야 날짜가 밀리지 않음\n                        val date = Instant.ofEpochMilli(millis).atZone(ZoneOffset.UTC).toLocalDate()\n                        onConfirm(date)\n                    }\n                }\n            ) { Text(\"확인\") }\n        },\n        dismissButton = { TextButton(onClick = onDismiss) { Text(\"취소\") } }\n    ) {\n        DatePicker(state = state)\n    }\n}\n\n// 3) 저장 전 기간 검증\nfun validatePeriod(start: LocalDate?, end: LocalDate?): String? = when {\n    start == null || end == null -> \"시작일과 종료일을 선택하세요\"\n    end.isBefore(start) -> \"종료일은 시작일 이후여야 합니다\"\n    else -> null\n}\n\n// 4) 추가 동작 메뉴: ModalBottomSheet\nif (showSheet) {\n    ModalBottomSheet(onDismissRequest = { showSheet = false }) {\n        ListItem(headlineContent = { Text(\"공유\") }, modifier = Modifier.clickable { onShare() })\n        ListItem(headlineContent = { Text(\"편집\") }, modifier = Modifier.clickable { onEdit() })\n    }\n}",
      "pitfalls": [
        "selectedDateMillis를 ZoneId.systemDefault()로 변환해 한국 시간 기준 하루 전 날짜가 저장되는 경우",
        "Material3 버전과 맞지 않는 menuAnchor 시그니처를 사용해 컴파일 오류가 나는 경우",
        "Dropdown 필드를 readOnly로 두지 않아 키보드가 올라오는 경우",
        "날짜를 \"11월 5일\" 같은 표시용 문자열로 저장해 정렬·비교가 불가능한 경우",
        "종료일 검증을 화면에서만 하고 저장 함수에서는 하지 않는 경우"
      ],
      "prompt": "현재 등록 화면에 카테고리 선택 Dropdown과 시작일·종료일 DatePicker를 추가해 줘. 프로젝트의 Material3 버전에 맞는 menuAnchor API를 확인하고, selectedDateMillis는 UTC 기준으로 LocalDate로 변환해 줘. 종료일이 시작일보다 빠르면 저장을 막고 오류 문구를 표시해 줘.",
      "checks": [
        "종료일이 시작일보다 빠르면 저장되지 않는가?",
        "기기 시간대를 바꿔도 선택한 날짜가 밀리지 않는가?",
        "Dropdown에서 선택한 값이 저장 후 다시 열었을 때 유지되는가?",
        "TalkBack에서 선택 필드의 이름이 읽히는가?"
      ],
      "questions": [
        "BottomSheet와 Dialog 중 어떤 상황에 무엇을 고르는가?",
        "DatePicker의 selectedDateMillis를 UTC로 변환해야 하는 이유는?"
      ],
      "answers": [
        "Dialog는 사용자의 결정(확인/취소)이 반드시 필요한 짧은 질문에 사용합니다. BottomSheet는 여러 개의 추가 동작이나 보조 콘텐츠를 화면 맥락을 유지한 채 보여 줄 때 적합합니다.",
        "DatePicker는 날짜를 시간대와 무관하게 ‘그 날짜의 UTC 00:00’ 밀리초로 표현합니다. 이를 한국(UTC+9)처럼 다른 시간대로 해석하면 시각이 이동하면서 날짜가 바뀔 수 있으므로, 같은 기준인 UTC로 해석해야 사용자가 고른 날짜가 그대로 나옵니다."
      ],
      "notes": "",
      "refs": [
        "UI_SYSTEM_LESSON",
        "M3_DATEPICKER"
      ]
    },
    {
      "id": "feedback",
      "group": "UI 기능",
      "title": "Toast·Snackbar·실행 취소",
      "desc": "사용자에게 일시적인 작업 결과를 안내하고, 삭제를 되돌리는 UI와 일회성 이벤트 처리.",
      "level": "강의자료",
      "uses": [
        "모든 프로젝트"
      ],
      "concept": [
        "Toast는 앱 밖에서도 보이는 짧은 시스템 안내이고, Snackbar는 화면(Scaffold) 안에 표시되며 ‘실행 취소’ 같은 액션 버튼을 제공할 수 있습니다.",
        "showSnackbar()는 suspend 함수입니다. 버튼 클릭에서는 rememberCoroutineScope().launch, ViewModel 이벤트 수집은 LaunchedEffect 안에서 호출합니다.",
        "showSnackbar()는 사용자가 액션을 누르면 SnackbarResult.ActionPerformed, 시간이 지나거나 닫히면 Dismissed를 반환합니다.",
        "‘저장했습니다’ 같은 메시지는 한 번만 보여야 하는 일회성 이벤트입니다. StateFlow에 넣으면 화면 회전 시 다시 표시될 수 있으므로 Channel 등 이벤트 스트림으로 전달하거나, 표시 후 상태를 소비(초기화)합니다.",
        "실행 취소는 UI만 복구하는 것이 아니라 저장소 데이터까지 복구해야 합니다. 삭제한 객체를 잠시 보관했다가 다시 저장하거나, deletedAt을 표시하는 soft delete를 사용합니다."
      ],
      "steps": [
        "Scaffold에 SnackbarHost를 연결합니다.",
        "ViewModel에서 삭제 후 Deleted 이벤트를 보냅니다.",
        "화면의 LaunchedEffect에서 이벤트를 수집해 Snackbar를 표시합니다.",
        "실행 취소를 누르면 ViewModel이 저장소에 항목을 복구합니다.",
        "연속 삭제, 화면 회전, 화면 이탈 시 메시지가 중복되거나 사라지지 않는지 확인합니다."
      ],
      "code": "// ViewModel: 한 번만 보여 줄 메시지는 이벤트로 전달\nsealed interface TripEvent {\n    data class Deleted(val trip: Trip) : TripEvent\n}\n\nprivate val _events = Channel<TripEvent>(Channel.BUFFERED)\nval events = _events.receiveAsFlow()\n\nfun delete(trip: Trip) {\n    viewModelScope.launch {\n        repository.delete(trip.id)\n        _events.send(TripEvent.Deleted(trip))      // 삭제한 객체를 이벤트에 보관\n    }\n}\n\nfun undoDelete(trip: Trip) {\n    viewModelScope.launch { repository.save(trip) }   // 저장소까지 복구\n}\n\n// 화면: 이벤트 수집 → Snackbar\n@Composable\nfun TripScreen(viewModel: TripViewModel = hiltViewModel()) {\n    val snackbarHostState = remember { SnackbarHostState() }\n\n    LaunchedEffect(Unit) {\n        viewModel.events.collect { event ->\n            when (event) {\n                is TripEvent.Deleted -> {\n                    val result = snackbarHostState.showSnackbar(   // suspend\n                        message = \"‘${event.trip.title}’을(를) 삭제했습니다\",\n                        actionLabel = \"실행 취소\",\n                        duration = SnackbarDuration.Short\n                    )\n                    if (result == SnackbarResult.ActionPerformed) {\n                        viewModel.undoDelete(event.trip)\n                    }\n                }\n            }\n        }\n    }\n\n    Scaffold(snackbarHost = { SnackbarHost(snackbarHostState) }) { innerPadding ->\n        /* 목록 */\n    }\n}\n\n// 버튼 클릭에서 바로 Snackbar를 띄울 때\nval scope = rememberCoroutineScope()\nButton(onClick = { scope.launch { snackbarHostState.showSnackbar(\"저장했습니다\") } }) {\n    Text(\"저장\")\n}\n\n// Toast: 짧은 시스템 안내 (Context 필요)\nval context = LocalContext.current\nToast.makeText(context, \"저장했습니다\", Toast.LENGTH_SHORT).show()",
      "pitfalls": [
        "onClick 안에서 showSnackbar()를 직접 호출해 ‘suspend function can only be called from a coroutine’ 컴파일 오류가 나는 경우",
        "SnackbarHostState를 만들고 Scaffold의 snackbarHost에 연결하지 않아 아무것도 표시되지 않는 경우",
        "메시지를 StateFlow 상태로 두어 화면 회전 때마다 같은 Snackbar가 다시 나타나는 경우",
        "실행 취소에서 화면 목록만 되돌리고 DB에는 복구하지 않아 재실행 시 사라지는 경우",
        "삭제와 함께 사진 파일까지 즉시 지워서 실행 취소 후 사진이 깨지는 경우 → Snackbar가 닫힌 뒤 정리"
      ],
      "prompt": "삭제 후 Snackbar에 실행 취소 액션을 추가해 줘. ViewModel은 Channel 이벤트로 삭제 결과를 보내고, 화면은 LaunchedEffect에서 수집해 showSnackbar를 호출해 줘. 실행 취소 시 저장소 데이터까지 복구하고, 연속 삭제·화면 회전·화면 이탈 시 동작을 정의해 줘. 중복 이벤트도 점검해 줘.",
      "checks": [
        "실행 취소를 누르면 앱을 재시작해도 항목이 남아 있는가(저장소 복구)?",
        "짧은 시간에 여러 번 삭제해도 일관성이 유지되는가?",
        "화면 회전 후 같은 Snackbar가 다시 나타나지 않는가?",
        "Snackbar가 FAB·하단 바에 가려지지 않는가?"
      ],
      "questions": [
        "Toast와 Snackbar를 구분하는 기준은?",
        "일회성 메시지를 StateFlow 상태로 두면 어떤 문제가 생기는가?"
      ],
      "answers": [
        "Toast는 화면과 무관하게 잠깐 보이는 시스템 안내로 액션을 넣을 수 없습니다. Snackbar는 현재 화면 안에서 Material 디자인에 맞게 표시되고 ‘실행 취소’ 같은 액션 버튼을 제공할 수 있어, 앱 내 작업 결과 안내에는 Snackbar를 우선 사용합니다.",
        "상태는 ‘현재 값’을 계속 유지하므로 화면 회전이나 다른 화면에서 돌아올 때 다시 수집되면서 같은 메시지가 반복 표시됩니다. 이벤트 스트림(Channel)으로 보내거나, 표시 후 ViewModel에 ‘메시지 소비됨’을 알려 상태를 초기화해야 합니다."
      ],
      "notes": "",
      "refs": [
        "UI_SYSTEM_LESSON",
        "M3_SNACKBAR"
      ]
    },
    {
      "id": "notification",
      "group": "시스템 기능",
      "title": "Notification·채널·권한",
      "desc": "NotificationChannel 생성, POST_NOTIFICATIONS 권한, NotificationCompat로 알림 표시, 탭 시 상세 화면 이동.",
      "level": "강의자료",
      "uses": [
        "일정",
        "분실물",
        "알림"
      ],
      "concept": [
        "Android 8.0(API 26)+는 모든 알림이 NotificationChannel에 속해야 합니다. 채널은 앱 시작 시(Application.onCreate) 만들며, 이미 있으면 다시 만들어도 무시됩니다.",
        "채널의 중요도·소리 등은 한 번 만들면 코드로 바꿀 수 없고 사용자 설정이 우선합니다. 바꾸려면 새 채널 ID를 사용합니다.",
        "Android 13(API 33)+에서는 일반 알림에 POST_NOTIFICATIONS 런타임 권한이 필요합니다. Manifest 선언 + 사용자 허용이 모두 있어야 표시됩니다.",
        "알림은 NotificationCompat.Builder로 만들고 setSmallIcon(단색 아이콘)은 필수입니다.",
        "PendingIntent는 ‘나중에 시스템이 내 앱 대신 실행할 Intent’입니다. Android 12+에서는 FLAG_IMMUTABLE 또는 FLAG_MUTABLE을 반드시 지정합니다.",
        "알림 ID가 같으면 기존 알림을 덮어쓰고, 다르면 새 알림이 추가됩니다. 항목 ID 기반으로 정하면 수정·취소가 쉽습니다.",
        "알림 탭으로 Activity가 열리면 Intent의 extra(tripId)를 읽어 해당 상세 화면으로 이동시킵니다."
      ],
      "setup": "<!-- AndroidManifest.xml (application 바깥) -->\n<uses-permission android:name=\"android.permission.POST_NOTIFICATIONS\" />\n\n<!-- 알림 탭으로 이미 실행 중인 화면에 Intent를 전달하려면 -->\n<activity android:name=\".MainActivity\" android:launchMode=\"singleTop\" ... />\n\n// 아이콘: res/drawable/ic_notification.xml (단색 벡터 아이콘)",
      "steps": [
        "Application.onCreate에서 채널을 생성합니다.",
        "알림이 필요한 이유를 설명하는 화면/버튼에서 권한을 요청합니다(앱 시작 직후 요청하지 않기).",
        "알림을 표시하기 직전에 권한 상태를 확인합니다.",
        "PendingIntent에 항목 ID를 담아 알림 탭 시 상세 화면으로 이동하도록 설정합니다.",
        "MainActivity에서 Intent extra를 읽어 Navigation으로 이동시킵니다.",
        "권한 거부, 설정에서 채널 끄기 상태에서도 앱이 크래시 없이 동작하는지 확인합니다."
      ],
      "code": "const val CHANNEL_ID = \"reminders\"\n\n// 1) 채널 생성: Application.onCreate()에서 호출\nfun createReminderChannel(context: Context) {\n    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {\n        val channel = NotificationChannel(\n            CHANNEL_ID, \"일정 알림\", NotificationManager.IMPORTANCE_DEFAULT\n        ).apply { description = \"여행 일정 리마인더\" }\n        context.getSystemService(NotificationManager::class.java)\n            .createNotificationChannel(channel)\n    }\n}\n\n// 2) 알림 표시\nfun showTripReminder(context: Context, tripId: String, title: String) {\n    // Android 13+ 권한이 없으면 표시하지 않음 (크래시 방지)\n    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU &&\n        ContextCompat.checkSelfPermission(context, Manifest.permission.POST_NOTIFICATIONS)\n        != PackageManager.PERMISSION_GRANTED\n    ) return\n\n    val intent = Intent(context, MainActivity::class.java).apply {\n        flags = Intent.FLAG_ACTIVITY_NEW_TASK or Intent.FLAG_ACTIVITY_CLEAR_TOP\n        putExtra(\"tripId\", tripId)\n    }\n    val pendingIntent = PendingIntent.getActivity(\n        context,\n        tripId.hashCode(),                                  // 항목별로 다른 requestCode\n        intent,\n        PendingIntent.FLAG_UPDATE_CURRENT or PendingIntent.FLAG_IMMUTABLE\n    )\n\n    val notification = NotificationCompat.Builder(context, CHANNEL_ID)\n        .setSmallIcon(R.drawable.ic_notification)          // 필수\n        .setContentTitle(\"여행 일정 알림\")\n        .setContentText(title)\n        .setContentIntent(pendingIntent)\n        .setAutoCancel(true)                               // 탭하면 알림 제거\n        .build()\n\n    NotificationManagerCompat.from(context).notify(tripId.hashCode(), notification)\n}\n\n// 3) 권한 요청 (사용자가 ‘알림 받기’를 눌렀을 때)\nval permissionLauncher = rememberLauncherForActivityResult(\n    ActivityResultContracts.RequestPermission()\n) { granted -> if (!granted) { /* 알림 없이도 앱 사용 가능하다고 안내 */ } }\n\nButton(onClick = {\n    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU) {\n        permissionLauncher.launch(Manifest.permission.POST_NOTIFICATIONS)\n    }\n}) { Text(\"알림 받기\") }\n\n// 4) 알림 탭 → 상세 화면 이동 (MainActivity)\n//    onCreate의 intent와 onNewIntent(singleTop)에서 tripId를 읽어\n//    navController.navigate(TripDetailRoute(tripId)) 실행",
      "pitfalls": [
        "Manifest에 POST_NOTIFICATIONS를 선언하지 않아 권한 요청 창이 뜨지 않고 바로 거부되는 경우",
        "setSmallIcon을 빠뜨리거나 컬러 PNG를 사용해 크래시·흰 사각형 아이콘이 나오는 경우",
        "PendingIntent에 FLAG_IMMUTABLE/MUTABLE을 지정하지 않아 Android 12+에서 IllegalArgumentException이 나는 경우",
        "모든 알림에 같은 requestCode·알림 ID를 사용해 마지막 알림만 남거나 다른 항목이 열리는 경우",
        "채널 중요도를 코드에서 바꿨는데 반영되지 않는다고 혼동하는 경우(앱 재설치 또는 새 채널 ID 필요)",
        "앱 첫 실행 직후 이유 설명 없이 권한을 요청해 사용자가 거부하는 경우"
      ],
      "prompt": "내 앱의 특정 이벤트에 대해 시스템 Notification을 추가해 줘. Android 8+ Channel(Application에서 생성), Android 13+ POST_NOTIFICATIONS(Manifest 선언 + 사용자 행동 시 요청), NotificationCompat 알림, 탭 시 해당 항목 상세 화면으로 이동하는 PendingIntent(FLAG_IMMUTABLE)를 반영해 줘. 권한 거부 시의 동작도 설계해 줘.",
      "checks": [
        "Android 13+에서 권한 거부 시 크래시가 없고 대체 안내가 있는가?",
        "알림 클릭으로 정확한 항목의 상세 화면이 열리는가?",
        "서로 다른 항목의 알림이 서로를 덮어쓰지 않는가?",
        "설정에서 채널을 끈 경우의 동작을 이해했는가?"
      ],
      "questions": [
        "채널이 필요한 이유는?",
        "PendingIntent와 일반 Intent의 차이는?",
        "FLAG_IMMUTABLE은 무엇을 의미하는가?"
      ],
      "answers": [
        "채널은 알림을 종류별로 묶어 사용자가 앱 전체가 아니라 종류별로 소리·중요도·표시 여부를 조절할 수 있게 해 줍니다. Android 8.0+에서는 채널 없이 알림을 표시할 수 없습니다.",
        "일반 Intent는 내 앱이 즉시 실행하는 요청입니다. PendingIntent는 그 Intent를 감싸 다른 주체(알림 시스템, AlarmManager)가 나중에 내 앱의 권한으로 대신 실행하도록 맡기는 토큰입니다.",
        "PendingIntent 안의 Intent를 받는 쪽(다른 앱·시스템)이 수정할 수 없게 고정한다는 뜻입니다. 보안을 위해 기본적으로 IMMUTABLE을 사용하고, 인라인 답장처럼 시스템이 내용을 채워야 하는 경우에만 MUTABLE을 사용합니다."
      ],
      "notes": "일반 알림은 사용자 허용이 필요합니다. 예외적 알림 유형/플랫폼 버전 차이는 공식 문서 확인.",
      "refs": [
        "UI_SYSTEM_LESSON",
        "ANDROID_NOTIFICATION",
        "NOTIFICATION_BUILD"
      ]
    },
    {
      "id": "alarms",
      "group": "시스템 기능",
      "title": "AlarmManager·BroadcastReceiver",
      "desc": "사용자가 지정한 시각에 리마인더를 예약하고, Receiver가 받아 알림을 표시. 정확한 알람 권한, 취소·재예약, 재부팅 처리.",
      "level": "강의자료",
      "uses": [
        "일정",
        "습관 관리",
        "여행"
      ],
      "concept": [
        "AlarmManager는 ‘특정 시각’에 실행할 작업을 예약하고, WorkManager는 시각보다 ‘반드시 실행’이 중요한 지연 가능한 백그라운드 작업에 적합합니다.",
        "setAndAllowWhileIdle()은 절전(Doze) 중에도 동작하지만 몇 분 늦을 수 있는 일반 알람이고, setExactAndAllowWhileIdle()은 정확한 시각을 보장하는 정확한 알람입니다.",
        "정확한 알람은 Android 12+에서 SCHEDULE_EXACT_ALARM 특별 권한이 필요하고, Android 14부터 대부분의 새로 설치된 앱에는 기본으로 허용되지 않습니다. canScheduleExactAlarms()로 확인하고, 불가하면 설정 화면 안내 또는 일반 알람으로 대체합니다.",
        "USE_EXACT_ALARM 권한은 알람 시계·캘린더 앱처럼 핵심 기능인 경우에만 Play 정책상 허용되므로 일반 과제 앱에는 사용하지 않습니다.",
        "예약은 PendingIntent로 식별합니다. 같은 requestCode와 같은 Intent(대상 클래스·action)로 만든 PendingIntent를 cancel하면 해당 예약이 취소됩니다. requestCode는 DB 항목 ID를 기준으로 정합니다.",
        "기기가 재부팅되면 모든 알람이 사라지므로 BOOT_COMPLETED를 받아 DB의 미래 일정을 다시 예약해야 합니다.",
        "BroadcastReceiver의 onReceive는 짧은 시간(약 10초) 안에 끝나야 하므로 무거운 작업은 goAsync()나 WorkManager로 넘깁니다."
      ],
      "setup": "<!-- AndroidManifest.xml -->\n<!-- 정확한 알람이 꼭 필요할 때만 선언 -->\n<uses-permission android:name=\"android.permission.SCHEDULE_EXACT_ALARM\" />\n<!-- 재부팅 후 재예약 -->\n<uses-permission android:name=\"android.permission.RECEIVE_BOOT_COMPLETED\" />\n\n<application ...>\n    <!-- 내 앱만 보내는 알람 → 외부 공개 불필요 -->\n    <receiver android:name=\".ReminderReceiver\" android:exported=\"false\" />\n\n    <!-- 시스템 부팅 방송 수신 -->\n    <receiver android:name=\".BootReceiver\" android:exported=\"true\">\n        <intent-filter>\n            <action android:name=\"android.intent.action.BOOT_COMPLETED\" />\n        </intent-filter>\n    </receiver>\n</application>",
      "steps": [
        "알림 예약 시점(예: 출발 하루 전 오전 9시)을 정의하고 LocalDateTime → epoch 밀리초로 변환합니다.",
        "정확한 시각이 반드시 필요한지 판단합니다(대부분의 리마인더는 일반 알람으로 충분).",
        "ReminderScheduler에서 항목 ID 기반 PendingIntent로 예약·취소 함수를 만듭니다.",
        "일정 저장 시 예약, 수정 시 기존 예약 취소 후 재예약, 삭제 시 취소합니다.",
        "Receiver에서 Notification 주제의 함수를 호출해 알림을 표시합니다.",
        "BootReceiver에서 미래 일정을 다시 예약합니다."
      ],
      "code": "class ReminderScheduler @Inject constructor(\n    @ApplicationContext private val context: Context\n) {\n    private val alarmManager = context.getSystemService(AlarmManager::class.java)\n\n    private fun pendingIntentFor(tripId: String, title: String? = null): PendingIntent {\n        val intent = Intent(context, ReminderReceiver::class.java).apply {\n            action = \"com.example.trip.REMINDER\"\n            putExtra(\"tripId\", tripId)\n            title?.let { putExtra(\"title\", it) }\n        }\n        return PendingIntent.getBroadcast(\n            context,\n            tripId.hashCode(),                     // requestCode = DB 항목 ID 기반\n            intent,\n            PendingIntent.FLAG_UPDATE_CURRENT or PendingIntent.FLAG_IMMUTABLE\n        )\n    }\n\n    fun schedule(tripId: String, title: String, at: LocalDateTime) {\n        val triggerAt = at.atZone(ZoneId.systemDefault()).toInstant().toEpochMilli()\n        if (triggerAt <= System.currentTimeMillis()) return   // 지난 시각은 예약하지 않음\n\n        val pi = pendingIntentFor(tripId, title)\n        val canExact = Build.VERSION.SDK_INT < Build.VERSION_CODES.S ||\n            alarmManager.canScheduleExactAlarms()\n        if (canExact) {\n            alarmManager.setExactAndAllowWhileIdle(AlarmManager.RTC_WAKEUP, triggerAt, pi)\n        } else {\n            // 정확한 알람 불가 → 몇 분 늦을 수 있는 일반 알람으로 대체\n            alarmManager.setAndAllowWhileIdle(AlarmManager.RTC_WAKEUP, triggerAt, pi)\n        }\n    }\n\n    // 같은 requestCode + 같은 Intent(클래스·action) → 같은 PendingIntent → 예약 취소\n    fun cancel(tripId: String) {\n        alarmManager.cancel(pendingIntentFor(tripId))\n    }\n}\n\nclass ReminderReceiver : BroadcastReceiver() {\n    override fun onReceive(context: Context, intent: Intent) {\n        val tripId = intent.getStringExtra(\"tripId\") ?: return\n        val title = intent.getStringExtra(\"title\") ?: \"여행 일정\"\n        showTripReminder(context, tripId, title)       // Notification 주제의 함수\n    }\n}\n\nclass BootReceiver : BroadcastReceiver() {\n    override fun onReceive(context: Context, intent: Intent) {\n        if (intent.action != Intent.ACTION_BOOT_COMPLETED) return\n        // DB 조회가 필요하므로 WorkManager 작업으로 넘겨 미래 일정을 다시 schedule()\n        WorkManager.getInstance(context)\n            .enqueue(OneTimeWorkRequestBuilder<RescheduleWorker>().build())\n    }\n}\n\n// 정확한 알람 권한 설정 화면 열기 (Android 12+, 사용자가 원할 때만)\nif (Build.VERSION.SDK_INT >= Build.VERSION_CODES.S) {\n    context.startActivity(Intent(Settings.ACTION_REQUEST_SCHEDULE_EXACT_ALARM))\n}",
      "pitfalls": [
        "canScheduleExactAlarms() 확인 없이 setExact…를 호출해 Android 12+에서 SecurityException이 나는 경우",
        "취소할 때 다른 requestCode나 다른 action으로 PendingIntent를 만들어 예약이 취소되지 않는 경우",
        "일정 수정 시 기존 예약을 취소하지 않아 옛 시각과 새 시각에 알림이 두 번 오는 경우",
        "지난 시각으로 예약해 즉시 알림이 울리는 경우",
        "재부팅 후 알람이 사라지는 것을 처리하지 않은 경우",
        "Receiver의 onReceive에서 DB·네트워크 작업을 직접 오래 수행하는 경우"
      ],
      "prompt": "사용자가 지정한 일정 알림을 예약해 줘. 일반 알람과 정확한 알람의 선택 이유를 먼저 설명하고, canScheduleExactAlarms 확인과 거부 시 대체 동작, DB ID 기반 PendingIntent, 수정·삭제 시 재예약/취소, 재부팅 후 재예약(BOOT_COMPLETED)까지 설계해 줘. Receiver는 exported=false로 두고 이유를 설명해 줘.",
      "checks": [
        "일정 수정 후 이전 알림이 남지 않는가?",
        "삭제 후 알림이 오지 않는가?",
        "정확한 알람 접근 거부 상태에서도 크래시 없이 일반 알람으로 동작하는가?",
        "기기 재부팅 후에도 예약한 알림이 오는가?",
        "알림을 탭하면 해당 일정이 열리는가?"
      ],
      "questions": [
        "AlarmManager와 WorkManager의 선택 기준은?",
        "Receiver를 exported=false로 설정할 수 있는 이유는?",
        "예약을 취소하려면 PendingIntent를 어떻게 만들어야 하는가?"
      ],
      "answers": [
        "사용자에게 보이는 ‘정해진 시각’이 중요하면(일정 리마인더) AlarmManager, 시각은 조금 늦어도 되지만 조건(네트워크 등)이 맞을 때 반드시 실행되고 재시도가 필요하면(동기화·업로드) WorkManager를 사용합니다.",
        "알람의 PendingIntent는 내 앱이 만든 것이고 시스템이 내 앱을 대신해 전달하므로, 외부 앱이 이 Receiver를 직접 호출할 필요가 없습니다. exported=false로 두면 다른 앱이 가짜 Intent를 보내는 것을 막을 수 있습니다.",
        "예약할 때와 같은 requestCode, 같은 대상 클래스·action을 가진 Intent로 PendingIntent를 만들어 alarmManager.cancel()에 넘깁니다. extra 값은 PendingIntent 동일성 판단에 포함되지 않습니다."
      ],
      "notes": "정확한 알람은 정책·권한 제약이 있으므로 필수 실습으로 강요하지 않습니다.",
      "refs": [
        "UI_SYSTEM_LESSON",
        "ANDROID_ALARM"
      ]
    },
    {
      "id": "workmanager",
      "group": "시스템 기능",
      "title": "WorkManager 백그라운드 작업",
      "desc": "앱을 종료하거나 재부팅해도 반드시 실행되어야 하는 업로드·동기화·정리 작업을 제약 조건과 재시도로 예약.",
      "level": "확장",
      "uses": [
        "동기화",
        "업로드",
        "정리 작업"
      ],
      "concept": [
        "WorkManager는 앱이 종료되거나 기기가 재부팅되어도 작업이 실행되도록 보장하는 Jetpack 라이브러리입니다. 정확한 시각은 보장하지 않습니다.",
        "Constraints로 실행 조건(네트워크 연결, 충전 중, 배터리 부족 아님 등)을 지정할 수 있습니다.",
        "CoroutineWorker의 doWork()는 Result.success(), Result.retry()(백오프 후 재시도), Result.failure()(중단)를 반환합니다.",
        "enqueueUniqueWork로 이름을 붙이면 같은 작업이 중복 등록되지 않습니다(KEEP: 기존 유지, REPLACE: 교체).",
        "주기 작업(PeriodicWorkRequest)의 최소 간격은 15분입니다.",
        "작업은 여러 번 실행될 수 있으므로 같은 항목을 두 번 업로드해도 문제없도록(멱등하게) 작성합니다.",
        "Hilt로 Worker에 의존성을 주입하려면 @HiltWorker와 HiltWorkerFactory 설정이 추가로 필요합니다."
      ],
      "setup": "// app/build.gradle.kts\nimplementation(\"androidx.work:work-runtime-ktx:<버전>\")\n\n// (선택) Hilt 주입: @HiltWorker 사용 시\nimplementation(\"androidx.hilt:hilt-work:<버전>\")\nksp(\"androidx.hilt:hilt-compiler:<버전>\")\n// + Application이 Configuration.Provider를 구현하고 HiltWorkerFactory 연결\n// + Manifest에서 기본 WorkManagerInitializer 제거 (공식 문서 참고)",
      "steps": [
        "작업이 ‘정확한 시각’이 필요한지(→ AlarmManager), ‘반드시 실행’이 필요한지(→ WorkManager) 판단합니다.",
        "CoroutineWorker를 만들고 성공·재시도·실패 조건을 정합니다.",
        "네트워크 등 제약 조건과 백오프 정책을 지정해 고유 이름으로 등록합니다.",
        "WorkInfo를 관찰해 진행 상태를 화면에 표시합니다.",
        "비행기 모드에서 등록 → 네트워크 연결 후 실행되는지, 앱 강제 종료 후에도 실행되는지 확인합니다."
      ],
      "code": "class SyncWorker(\n    context: Context,\n    params: WorkerParameters\n) : CoroutineWorker(context, params) {\n\n    override suspend fun doWork(): Result = try {\n        // 업로드·동기화 작업: 이미 처리된 항목은 건너뛰도록 멱등하게 작성\n        uploadPendingTrips()\n        Result.success()\n    } catch (e: IOException) {\n        if (runAttemptCount < 3) Result.retry() else Result.failure()\n    }\n}\n\n// 1회 작업: 네트워크 연결 시 실행, 같은 이름은 하나만 대기\nfun enqueueSync(context: Context) {\n    val request = OneTimeWorkRequestBuilder<SyncWorker>()\n        .setConstraints(\n            Constraints.Builder()\n                .setRequiredNetworkType(NetworkType.CONNECTED)\n                .build()\n        )\n        .setBackoffCriteria(BackoffPolicy.EXPONENTIAL, 30, TimeUnit.SECONDS)\n        .build()\n\n    WorkManager.getInstance(context)\n        .enqueueUniqueWork(\"trip-sync\", ExistingWorkPolicy.KEEP, request)\n}\n\n// 주기 작업: 최소 간격 15분 (예: 하루 한 번 임시 파일 정리)\nval cleanup = PeriodicWorkRequestBuilder<CleanupWorker>(1, TimeUnit.DAYS).build()\nWorkManager.getInstance(context)\n    .enqueueUniquePeriodicWork(\"cleanup\", ExistingPeriodicWorkPolicy.KEEP, cleanup)\n\n// 상태 관찰 → 화면에 ‘동기화 중’ 표시\nval syncState: Flow<List<WorkInfo>> =\n    WorkManager.getInstance(context).getWorkInfosForUniqueWorkFlow(\"trip-sync\")",
      "pitfalls": [
        "WorkManager로 ‘오전 9시 정각 알림’ 같은 정확한 시각 작업을 하려는 경우 → AlarmManager",
        "enqueue를 반복 호출해 같은 작업이 여러 개 쌓이는 경우 → enqueueUniqueWork",
        "주기 작업 간격을 15분 미만으로 설정하고 동작을 기대하는 경우",
        "Result.retry()를 무한 반복해 배터리·데이터를 낭비하는 경우 → runAttemptCount로 제한",
        "Hilt 설정 없이 Worker 생성자에 Repository를 추가해 생성 실패하는 경우"
      ],
      "prompt": "내 앱의 [업로드/동기화/정리] 작업을 WorkManager로 옮길지 먼저 판단해 줘. 필요하다면 CoroutineWorker, 네트워크 제약, 지수 백오프, enqueueUniqueWork 정책, 재시도 횟수 제한을 포함해 구현하고, 작업 상태를 화면에 표시하는 방법도 제안해 줘. Hilt 주입이 필요하면 설정 단계를 분리해서 알려 줘.",
      "checks": [
        "오프라인에서 등록한 작업이 네트워크 연결 후 실행되는가?",
        "앱을 강제 종료하거나 재부팅한 뒤에도 대기 중인 작업이 실행되는가?",
        "같은 작업이 중복 등록되지 않는가?",
        "실패 시 재시도 횟수가 제한되는가?"
      ],
      "questions": [
        "AlarmManager와 WorkManager를 어떻게 구분하는가?",
        "Result.retry()와 Result.failure()의 차이는?",
        "작업을 멱등하게 작성해야 하는 이유는?"
      ],
      "answers": [
        "‘정해진 시각’이 핵심이면 AlarmManager, ‘조건이 맞을 때 결국 반드시 실행’이 핵심이고 재시도가 필요하면 WorkManager입니다. 리마인더는 AlarmManager, 사진 업로드·동기화는 WorkManager가 적합합니다.",
        "retry()는 일시적 실패(네트워크 끊김 등)로 보고 백오프 정책에 따라 나중에 다시 실행합니다. failure()는 다시 해도 성공하지 못할 실패로 보고 작업을 종료하며, 연결된 후속 작업도 실행되지 않습니다.",
        "WorkManager는 프로세스 종료·재시도 등으로 같은 작업을 여러 번 실행할 수 있습니다. 멱등하게(여러 번 실행해도 결과가 같게) 작성하지 않으면 같은 사진이 중복 업로드되거나 데이터가 두 번 저장됩니다."
      ],
      "notes": "",
      "refs": [
        "WORKMANAGER_DOCS"
      ]
    },
    {
      "id": "camera",
      "group": "시스템 기능",
      "title": "카메라·FileProvider·Photo Picker",
      "desc": "시스템 카메라 촬영(TakePicture)과 Photo Picker 선택 이미지를 앱 저장소에 보관하고 Coil로 표시.",
      "level": "강의자료",
      "uses": [
        "여행",
        "분실물",
        "게시글"
      ],
      "concept": [
        "ActivityResultContracts.TakePicture는 시스템 카메라 앱에 촬영을 요청하는 방식으로, 앱이 직접 카메라 하드웨어를 제어하는 CameraX와 다릅니다.",
        "촬영 사진을 저장할 앱 전용 파일을 만들고 FileProvider의 content:// URI로 카메라 앱에 전달합니다. 이 방식은 CAMERA·저장소 권한 없이 동작합니다.",
        "단, Manifest에 CAMERA 권한을 선언(다른 라이브러리가 추가한 경우 포함)했는데 허용받지 않은 상태에서 TakePicture를 실행하면 SecurityException이 발생합니다.",
        "기존 사진 선택은 Photo Picker(PickVisualMedia)를 우선 사용합니다. 권한 요청이 필요 없고 사용자가 고른 사진만 앱에 전달됩니다.",
        "Photo Picker가 돌려준 URI는 임시 접근 권한이므로 앱 재시작 후 열리지 않을 수 있습니다. 앱 저장소(filesDir)로 복사해서 보관하는 것이 가장 안전합니다.",
        "DB에는 URI 문자열보다 앱 저장소 안의 파일 이름(상대 경로)을 저장하면 기기·버전 차이에 덜 민감합니다.",
        "큰 원본 이미지를 직접 Bitmap으로 디코딩하면 메모리 부족·UI 멈춤이 생깁니다. Coil의 AsyncImage가 크기 조절·캐시·백그라운드 로딩을 처리합니다."
      ],
      "setup": "<!-- AndroidManifest.xml (application 안) -->\n<provider\n    android:name=\"androidx.core.content.FileProvider\"\n    android:authorities=\"${applicationId}.fileprovider\"\n    android:exported=\"false\"\n    android:grantUriPermissions=\"true\">\n    <meta-data\n        android:name=\"android.support.FILE_PROVIDER_PATHS\"\n        android:resource=\"@xml/file_paths\" />\n</provider>\n\n<!-- res/xml/file_paths.xml -->\n<paths>\n    <files-path name=\"photos\" path=\"photos/\" />\n</paths>\n\n// app/build.gradle.kts : 이미지 로딩\nimplementation(\"io.coil-kt.coil3:coil-compose:<버전>\")",
      "steps": [
        "FileProvider를 Manifest와 file_paths.xml에 등록합니다.",
        "앱 전용 사진 파일과 content URI를 만들고, 촬영 대기 중인 URI를 rememberSaveable로 보관합니다.",
        "촬영 결과가 true인 경우에만 사진을 기록에 연결하고, 취소되면 빈 파일을 삭제합니다.",
        "Photo Picker로 고른 이미지는 앱 저장소로 복사해 보관합니다.",
        "DB에는 파일 이름을 저장하고, 화면에서는 Coil AsyncImage로 썸네일을 표시합니다.",
        "기록 삭제 시 사진 파일도 함께 정리합니다."
      ],
      "code": "private const val PHOTO_DIR = \"photos\"\n\nfun createPhotoFile(context: Context): File {\n    val dir = File(context.filesDir, PHOTO_DIR).apply { mkdirs() }\n    return File(dir, \"${UUID.randomUUID()}.jpg\")\n}\n\nfun File.toContentUri(context: Context): Uri =\n    FileProvider.getUriForFile(context, \"${context.packageName}.fileprovider\", this)\n\n// Photo Picker URI는 임시 권한 → 앱 저장소로 복사 (파일 작업은 IO 스레드)\nsuspend fun copyToAppStorage(context: Context, source: Uri): File = withContext(Dispatchers.IO) {\n    val target = createPhotoFile(context)\n    context.contentResolver.openInputStream(source)?.use { input ->\n        target.outputStream().use { output -> input.copyTo(output) }\n    }\n    target\n}\n\n@Composable\nfun PhotoInput(onPhotoSaved: (fileName: String) -> Unit) {\n    val context = LocalContext.current\n    val scope = rememberCoroutineScope()\n    // 카메라 앱으로 넘어간 사이 화면이 재생성되어도 경로 유지\n    var pendingPath by rememberSaveable { mutableStateOf<String?>(null) }\n\n    val takePicture = rememberLauncherForActivityResult(\n        ActivityResultContracts.TakePicture()\n    ) { success ->\n        val file = pendingPath?.let { File(it) }\n        if (success && file != null) onPhotoSaved(file.name)\n        else file?.delete()                          // 취소 시 빈 파일 정리\n        pendingPath = null\n    }\n\n    val pickMedia = rememberLauncherForActivityResult(\n        ActivityResultContracts.PickVisualMedia()\n    ) { uri ->\n        if (uri != null) scope.launch { onPhotoSaved(copyToAppStorage(context, uri).name) }\n    }\n\n    Row(horizontalArrangement = Arrangement.spacedBy(8.dp)) {\n        Button(onClick = {\n            val file = createPhotoFile(context)\n            pendingPath = file.absolutePath\n            takePicture.launch(file.toContentUri(context))\n        }) { Text(\"사진 촬영\") }\n\n        Button(onClick = {\n            pickMedia.launch(PickVisualMediaRequest(ActivityResultContracts.PickVisualMedia.ImageOnly))\n        }) { Text(\"앨범에서 선택\") }\n    }\n}\n\n// 표시: Coil이 크기 조절·캐시·백그라운드 로딩 처리\n@Composable\nfun TripPhoto(fileName: String) {\n    val context = LocalContext.current\n    AsyncImage(\n        model = File(File(context.filesDir, PHOTO_DIR), fileName),\n        contentDescription = \"여행 사진\",\n        contentScale = ContentScale.Crop,\n        modifier = Modifier.size(96.dp).clip(RoundedCornerShape(8.dp))\n    )\n}",
      "pitfalls": [
        "FileProvider authority 문자열이 Manifest와 코드에서 달라 IllegalArgumentException이 나는 경우",
        "Manifest에 CAMERA 권한이 선언된 상태에서 권한 없이 TakePicture를 실행해 SecurityException이 나는 경우",
        "Photo Picker URI를 그대로 DB에 저장해 앱 재시작 후 이미지가 보이지 않는 경우",
        "촬영 대기 URI를 remember로만 두어 카메라 앱에서 돌아왔을 때 값이 사라지는 경우 → rememberSaveable",
        "촬영 취소 시 빈 파일을 지우지 않아 저장 공간이 쌓이는 경우",
        "원본 사진을 BitmapFactory로 직접 디코딩해 OutOfMemoryError가 나는 경우"
      ],
      "prompt": "내 앱에 사진 촬영 및 기존 사진 선택 기능을 추가해 줘. 시스템 카메라 TakePicture + FileProvider(Manifest, file_paths.xml 포함)와 Photo Picker를 사용하고 불필요한 CAMERA/저장소 권한을 요청하지 않도록 해 줘. 선택한 사진은 앱 저장소로 복사하고 DB에는 파일 이름을 저장해 줘. Coil로 썸네일을 표시하고, 촬영 취소·앱 재시작·기록 삭제 시 파일 처리도 검토해 줘.",
      "checks": [
        "촬영 취소 시 빈 이미지·빈 파일이 남지 않는가?",
        "앱을 완전히 종료 후 재시작해도 이미지가 보이는가?",
        "대형 이미지(고해상도 사진 여러 장)에서 스크롤·UI 멈춤이 없는가?",
        "Manifest에 불필요한 CAMERA·저장소 권한이 없는가?",
        "기록을 삭제하면 사진 파일도 정리되는가?"
      ],
      "questions": [
        "FileProvider의 content URI가 필요한 이유는?",
        "TakePicture와 CameraX의 차이는?",
        "Photo Picker로 받은 URI를 그대로 저장하면 어떤 문제가 생기는가?"
      ],
      "answers": [
        "Android 7.0+에서는 다른 앱(카메라 앱)에 file:// 경로를 넘기면 FileUriExposedException이 발생합니다. FileProvider는 앱 전용 파일을 content:// URI로 감싸고 그 URI에 대해서만 임시 읽기·쓰기 권한을 부여해 안전하게 공유하게 해 줍니다.",
        "TakePicture는 시스템 카메라 앱에 촬영을 맡기므로 구현이 간단하고 권한이 필요 없지만 촬영 화면을 꾸밀 수 없습니다. CameraX는 앱 안에서 미리보기·촬영·이미지 분석을 직접 구현할 수 있지만 CAMERA 권한과 더 많은 코드가 필요합니다.",
        "Photo Picker URI의 읽기 권한은 임시라서 앱 프로세스가 종료되면 사라질 수 있습니다. 재시작 후 이미지를 열지 못해 빈 화면이 나오므로, 앱 저장소로 복사하거나(권장) 지원되는 경우 영구 권한을 받아야 합니다."
      ],
      "notes": "",
      "refs": [
        "UI_SYSTEM_LESSON",
        "PHOTO_PICKER",
        "FILEPROVIDER",
        "COIL"
      ]
    },
    {
      "id": "permissions",
      "group": "시스템 기능",
      "title": "권한·플랫폼 버전별 분기",
      "desc": "필요한 시점에 최소한의 권한을 요청하고, 거부·다시 묻지 않음·설정에서 복귀까지 정상 처리합니다.",
      "level": "강의자료",
      "uses": [
        "알림",
        "카메라",
        "위치"
      ],
      "concept": [
        "권한은 Manifest 선언과 (위험 권한이라면) 런타임 사용자 허용이 모두 필요합니다. INTERNET 같은 일반 권한은 선언만 하면 자동 허용됩니다.",
        "기능별 권한 예: 알림 POST_NOTIFICATIONS(Android 13+ 런타임), 정확한 알람 SCHEDULE_EXACT_ALARM(설정 화면에서 허용하는 특별 권한), 위치 ACCESS_COARSE/FINE_LOCATION(런타임), 앱 내 카메라 제어(CameraX) CAMERA(런타임), 시스템 카메라 촬영·Photo Picker는 권한 불필요.",
        "권한은 기능을 사용하려는 순간(버튼 클릭 등)에 요청하고, 요청 전에 왜 필요한지 화면에서 설명합니다.",
        "사용자가 거부한 뒤 shouldShowRequestPermissionRationale()이 true면 이유를 설명하고 다시 요청할 수 있습니다. 두 번 거부하면 시스템이 더 이상 요청 창을 띄우지 않으므로(사실상 영구 거부) 앱 설정 화면으로 안내합니다.",
        "사용자는 설정에서 언제든 권한을 바꿀 수 있으므로 기능을 실행할 때마다 권한 상태를 확인하고, 설정에서 돌아오면(ON_RESUME) 다시 확인합니다.",
        "Build.VERSION.SDK_INT로 버전을 분기합니다. 예: POST_NOTIFICATIONS는 Android 13 미만에서는 요청할 필요가 없습니다."
      ],
      "setup": "// LocalActivity: activity-compose 1.10 이상\nimplementation(\"androidx.activity:activity-compose:<버전>\")\n// LifecycleResumeEffect: lifecycle-runtime-compose 2.7 이상\nimplementation(\"androidx.lifecycle:lifecycle-runtime-compose:<버전>\")",
      "steps": [
        "앱 기능별로 실제 필요한 권한과 API 레벨을 표로 정리하고 불필요한 권한을 제거합니다.",
        "권한이 필요한 기능 화면에 이유 설명과 ‘허용’ 버튼을 둡니다.",
        "거부 시 대체 UI(권한 없이 가능한 기능 안내)를 제공합니다.",
        "다시 묻지 않음 상태에서는 설정 화면 열기 버튼을 제공합니다.",
        "설정에서 권한을 켜고 돌아왔을 때 화면이 갱신되는지 확인합니다."
      ],
      "code": "fun Context.hasPermission(permission: String): Boolean =\n    ContextCompat.checkSelfPermission(this, permission) == PackageManager.PERMISSION_GRANTED\n\n// 앱 설정 화면 열기 (다시 묻지 않음 상태에서 사용자가 직접 켜도록)\nfun Context.openAppSettings() {\n    startActivity(\n        Intent(\n            Settings.ACTION_APPLICATION_DETAILS_SETTINGS,\n            Uri.fromParts(\"package\", packageName, null)\n        ).addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)\n    )\n}\n\n@Composable\nfun NotificationPermissionSection() {\n    if (Build.VERSION.SDK_INT < Build.VERSION_CODES.TIRAMISU) return   // 13 미만은 권한 불필요\n\n    val context = LocalContext.current\n    val activity = LocalActivity.current\n    val permission = Manifest.permission.POST_NOTIFICATIONS\n    var granted by remember { mutableStateOf(context.hasPermission(permission)) }\n    var permanentlyDenied by rememberSaveable { mutableStateOf(false) }\n\n    // 설정 화면에서 돌아오면 권한 상태 다시 확인\n    LifecycleResumeEffect(Unit) {\n        granted = context.hasPermission(permission)\n        onPauseOrDispose { }\n    }\n\n    val launcher = rememberLauncherForActivityResult(\n        ActivityResultContracts.RequestPermission()\n    ) { isGranted ->\n        granted = isGranted\n        // 거부됐는데 이유 설명도 더 이상 표시할 수 없으면 → 시스템이 다시 묻지 않는 상태\n        permanentlyDenied = !isGranted && activity != null &&\n            !ActivityCompat.shouldShowRequestPermissionRationale(activity, permission)\n    }\n\n    when {\n        granted -> Text(\"알림이 켜져 있습니다\")\n        permanentlyDenied -> Column {\n            Text(\"알림 권한이 꺼져 있습니다. 설정에서 직접 허용할 수 있습니다.\")\n            TextButton(onClick = { context.openAppSettings() }) { Text(\"설정 열기\") }\n        }\n        else -> Column {\n            Text(\"일정 시작 전에 알려 드리려면 알림 권한이 필요합니다.\")   // 요청 전 이유 설명\n            Button(onClick = { launcher.launch(permission) }) { Text(\"알림 허용\") }\n        }\n    }\n}",
      "pitfalls": [
        "Manifest에 권한을 선언하지 않아 요청 창이 뜨지 않고 바로 거부 결과가 오는 경우",
        "앱 시작 직후 여러 권한을 한꺼번에 요청해 사용자가 모두 거부하는 경우",
        "권한이 거부되면 앱 전체 기능을 막아 버리는 경우 → 권한이 필요한 기능만 제한",
        "권한 상태를 앱 시작 시 한 번만 확인해 설정 변경을 반영하지 못하는 경우",
        "사진 선택에 READ_MEDIA_IMAGES 등 저장소 권한을 불필요하게 요청하는 경우 → Photo Picker",
        "Android 13 미만 기기에서 POST_NOTIFICATIONS를 요청하는 코드가 그대로 실행되는 경우"
      ],
      "prompt": "이 앱에서 실제로 필요한 권한을 Manifest와 코드에서 찾아 표로 정리해 줘. 권한별 API 레벨 차이, 일반/위험/특별 권한 구분, 요청하는 사용자 행동, 거부·다시 묻지 않음 시 대체 동작, 설정에서 복귀 시 재확인, 불필요한 권한 제거를 검토해 줘.",
      "checks": [
        "권한이 없어도 가능한 기능은 동작하는가?",
        "거부 후 이유 설명과 함께 다시 시도할 수 있는가?",
        "다시 묻지 않음 상태에서 설정 화면으로 안내하는가?",
        "설정에서 권한을 켜고 돌아오면 화면이 갱신되는가?",
        "Android 12 이하와 13 이상 기기(에뮬레이터)에서 모두 확인했는가?"
      ],
      "questions": [
        "최소 권한 원칙은 무엇인가?",
        "shouldShowRequestPermissionRationale()은 언제 true인가?"
      ],
      "answers": [
        "앱이 기능을 수행하는 데 꼭 필요한 권한만, 필요한 순간에 요청하는 원칙입니다. 권한이 적을수록 사용자 신뢰가 높고, 개인정보 노출 위험과 스토어 심사 문제가 줄어듭니다. 시스템 카메라·Photo Picker처럼 권한 없이 같은 목적을 이룰 수 있으면 그 방법을 우선합니다.",
        "사용자가 권한을 한 번 거부했고 아직 ‘다시 묻지 않음’ 상태가 아닐 때 true입니다. 이때 왜 필요한지 설명한 뒤 다시 요청합니다. 처음 요청하기 전이나, 반복 거부로 시스템이 더 이상 묻지 않는 상태에서는 false입니다."
      ],
      "notes": "",
      "refs": [
        "UI_SYSTEM_LESSON",
        "PERMISSIONS_DOCS"
      ]
    },
    {
      "id": "firebase",
      "group": "확장",
      "title": "Firebase Auth·Firestore·Storage",
      "desc": "기록 메타데이터와 사진 파일을 클라우드에 분리 저장하고 Security Rules로 사용자별 접근을 제한.",
      "level": "확장",
      "uses": [
        "여행",
        "커뮤니티",
        "공유"
      ],
      "concept": [
        "Auth는 사용자 식별, Firestore는 구조화 데이터(문서·컬렉션), Cloud Storage는 사진 같은 파일 저장을 맡습니다.",
        "사진 바이트를 Firestore에 저장하지 않고 Storage에 업로드한 뒤 그 경로를 Firestore 문서에 기록합니다.",
        "앱 코드에서 uid로 경로를 나누는 것만으로는 보안이 되지 않습니다. 서버에서 강제되는 Security Rules로 ‘본인 uid 경로만 읽기·쓰기’를 지정해야 합니다.",
        "콘솔에서 ‘테스트 모드’로 시작하면 기간 동안 누구나 읽고 쓸 수 있으므로 반드시 규칙을 작성하고 Emulator Suite 또는 Rules Playground로 검증합니다.",
        "Firebase Android SDK는 2025년부터 별도 KTX 모듈(-ktx)을 제공하지 않으며 메인 모듈에 Kotlin API가 포함됩니다. BoM으로 버전을 맞춥니다.",
        "Cloud Storage for Firebase의 새 기본 버킷은 종량제(Blaze) 요금제가 필요합니다. 결제 정보 등록 전 무료 사용량과 예산 알림을 확인합니다.",
        "Firebase Task는 kotlinx-coroutines-play-services의 await()로 코루틴에서 기다릴 수 있고, Firestore 실시간 변경은 snapshots() Flow로 받을 수 있습니다.",
        "google-services.json은 비밀번호는 아니지만 API 키가 포함되므로 공개 저장소라면 키 제한과 Security Rules로 보호합니다."
      ],
      "setup": "// 프로젝트 build.gradle.kts\nplugins {\n    id(\"com.google.gms.google-services\") version \"<버전>\" apply false\n}\n\n// app/build.gradle.kts\nplugins {\n    id(\"com.google.gms.google-services\")\n}\ndependencies {\n    implementation(platform(\"com.google.firebase:firebase-bom:<버전>\"))\n    implementation(\"com.google.firebase:firebase-auth\")        // -ktx 없이 메인 모듈\n    implementation(\"com.google.firebase:firebase-firestore\")\n    implementation(\"com.google.firebase:firebase-storage\")\n    implementation(\"org.jetbrains.kotlinx:kotlinx-coroutines-play-services:<버전>\")  // await()\n}\n\n// app/google-services.json : Firebase 콘솔에서 앱 등록 후 내려받아 app 폴더에 둠",
      "steps": [
        "Firebase 프로젝트를 만들고 Android 앱(패키지 이름)을 등록해 google-services.json을 추가합니다.",
        "Auth로 로그인(익명·이메일·Google 중 선택)을 구현하고 uid를 얻습니다.",
        "users/{uid}/trips/{tripId} 구조로 문서 경로를 설계합니다.",
        "Firestore·Storage Security Rules를 작성하고 Emulator Suite 또는 Rules Playground로 다른 사용자 접근이 거부되는지 테스트합니다.",
        "사진 업로드 → 경로를 문서에 저장 순서로 구현하고, 각 단계의 실패를 별도로 처리합니다.",
        "요금제·예산 알림을 설정합니다."
      ],
      "code": "// 데이터 구조\n// Firestore: users/{uid}/trips/{tripId}\n//              title, startDate, updatedAt, photoPath\n// Storage:   users/{uid}/trips/{tripId}/{photoId}.jpg\n\nclass FirebaseTripRepository @Inject constructor() {\n    private val uid: String\n        get() = Firebase.auth.currentUser?.uid ?: error(\"로그인이 필요합니다\")\n\n    private fun trips() = Firebase.firestore\n        .collection(\"users\").document(uid).collection(\"trips\")\n\n    // 실시간 목록\n    fun observeTrips(): Flow<List<Trip>> = trips().snapshots()\n        .map { snap -> snap.documents.mapNotNull { it.toTrip() } }\n\n    // 사진 업로드 → 성공하면 경로 반환\n    suspend fun uploadPhoto(tripId: String, photo: Uri): String {\n        val path = \"users/$uid/trips/$tripId/${UUID.randomUUID()}.jpg\"\n        Firebase.storage.reference.child(path).putFile(photo).await()\n        return path\n    }\n\n    // 메타데이터 저장 (업로드 성공 후)\n    suspend fun saveTrip(trip: Trip, photoPath: String?) {\n        trips().document(trip.id).set(\n            mapOf(\n                \"title\" to trip.title,\n                \"startDate\" to trip.startDate,\n                \"photoPath\" to photoPath,\n                \"updatedAt\" to FieldValue.serverTimestamp()\n            )\n        ).await()\n    }\n}\n\n/* Firestore Security Rules */\nrules_version = '2';\nservice cloud.firestore {\n  match /databases/{database}/documents {\n    match /users/{uid}/trips/{tripId} {\n      allow read, write: if request.auth != null && request.auth.uid == uid;\n    }\n  }\n}\n\n/* Storage Security Rules */\nrules_version = '2';\nservice firebase.storage {\n  match /b/{bucket}/o {\n    match /users/{uid}/{allPaths=**} {\n      allow read, delete: if request.auth != null && request.auth.uid == uid;\n      allow create, update: if request.auth != null && request.auth.uid == uid\n                            && request.resource.size < 5 * 1024 * 1024        // 5MB 제한\n                            && request.resource.contentType.matches('image/.*');\n    }\n  }\n}",
      "pitfalls": [
        "테스트 모드 규칙(누구나 읽기·쓰기)을 그대로 두어 다른 사람이 모든 데이터를 읽거나 지울 수 있는 경우",
        "앱 코드에서만 uid를 확인하고 Security Rules는 작성하지 않는 경우",
        "firebase-*-ktx 모듈을 최신 BoM과 함께 사용해 의존성을 찾지 못하는 경우",
        "사진 업로드는 성공했는데 문서 저장이 실패해 Storage에 고아 파일이 남는 경우(또는 반대)",
        "로그인 전(currentUser == null)에 Firestore를 호출하는 경우",
        "Storage 사용을 위해 요금제를 바꾸면서 예산 알림을 설정하지 않는 경우"
      ],
      "prompt": "이 프로젝트를 Firebase Auth·Firestore·Storage로 확장할 설계를 제안해 줘. users/{uid} 기반 데이터 경로, Firestore·Storage Security Rules 초안과 테스트 방법, 요금제/결제 요건, 업로드 실패 시 일관성, 최신 Firebase BoM과 메인 모듈(-ktx 없음) 의존성을 먼저 확인하고 최소 구현부터 수행해 줘.",
      "checks": [
        "로그아웃 상태나 다른 계정으로 남의 기록을 읽거나 쓸 수 없는가(Rules 테스트)?",
        "업로드 실패 시 기록이 깨지지 않고 재시도할 수 있는가?",
        "5MB 초과·이미지가 아닌 파일 업로드가 거부되는가?",
        "요금제·예산 알림과 보안 규칙을 점검했는가?"
      ],
      "questions": [
        "Firestore와 Storage에 무엇을 각각 저장하는가?",
        "Auth와 Rules는 어떤 관계인가?",
        "앱 코드에서 uid를 확인하는데도 Rules가 필요한 이유는?"
      ],
      "answers": [
        "Firestore에는 검색·정렬이 필요한 작은 구조화 데이터(제목, 날짜, 사진 경로 등)를, Storage에는 크기가 큰 바이너리 파일(사진, 동영상)을 저장합니다. Firestore 문서는 1MB 제한이 있고 읽기 비용이 문서 단위라 파일을 넣기에 적합하지 않습니다.",
        "Auth는 ‘이 요청을 보낸 사람이 누구인지’를 확인해 request.auth.uid를 제공하고, Rules는 그 정보를 이용해 ‘이 사람이 이 데이터에 접근해도 되는지’를 서버에서 판단합니다. 인증만 있고 규칙이 없으면 로그인한 누구나 모든 데이터에 접근할 수 있습니다.",
        "앱 코드는 사용자의 기기에서 실행되므로 수정·우회될 수 있습니다. 누군가 API를 직접 호출하면 앱의 검사를 거치지 않으므로, 서버에서 강제되는 Rules만이 실제 보안 경계입니다."
      ],
      "notes": "Cloud Storage 사용 전에 Firebase 요금제와 과금 조건을 반드시 확인하세요.",
      "refs": [
        "FIREBASE_SETUP",
        "FIREBASE_KTX",
        "FIRESTORE_RULES"
      ]
    },
    {
      "id": "sync",
      "group": "확장",
      "title": "Room ↔ Firebase 동기화 설계",
      "desc": "오프라인 데이터와 클라우드 기록을 모두 쓰는 경우에만 추가하는 심화 주제: 단일 진실 공급원, 충돌, 삭제 전파, 재시도.",
      "level": "확장",
      "uses": [
        "오프라인 앱"
      ],
      "concept": [
        "Firestore Android SDK는 오프라인 캐시가 기본으로 켜져 있어, 오프라인에서 쓴 내용도 연결되면 자동 전송됩니다. 별도 Room 복제가 정말 필요한지 먼저 판단합니다(대부분의 과제 앱은 둘 중 하나로 충분).",
        "Room과 Firestore를 함께 쓴다면 ‘UI는 Room만 읽는다(Room이 단일 진실 공급원)’로 정하고, 쓰기는 Room에 PENDING으로 저장 → WorkManager가 업로드 → SYNCED로 표시하는 흐름이 단순합니다.",
        "두 저장소를 연결하려면 같은 ID(UUID), 마지막 수정 시각(updatedAt), 삭제 표시(deletedAt, soft delete), 동기화 상태(syncStatus)가 필요합니다.",
        "충돌 해결 규칙을 미리 정합니다. 예: 최종 수정 우선(last-write-wins), 서버 우선, 필드별 병합.",
        "삭제를 실제 행 삭제로 처리하면 다른 기기에 삭제 사실을 전달할 수 없으므로 deletedAt을 기록해 전파한 뒤 나중에 정리합니다.",
        "업로드는 실패·중복 실행될 수 있으므로 같은 ID로 set(덮어쓰기)하는 등 멱등하게 작성합니다."
      ],
      "steps": [
        "Firestore 단독 사용으로 충분한지, Room이 꼭 필요한 이유가 있는지 정리합니다.",
        "로컬 우선(Room이 진실)인지 서버 우선(Firestore가 진실)인지 선택합니다.",
        "UUID 기반 ID와 updatedAt·deletedAt·syncStatus를 설계합니다.",
        "WorkManager로 PENDING 항목 업로드와 재시도를 구현합니다.",
        "기기 두 대의 동시 수정 및 삭제 충돌, 오프라인 수정 후 재연결을 실험합니다."
      ],
      "code": "@Entity(tableName = \"trips\")\ndata class TripEntity(\n    @PrimaryKey val id: String,          // UUID: 기기·서버에서 같은 ID 사용\n    val ownerId: String,\n    val title: String,\n    val updatedAt: Long,                 // 충돌 판단 기준 (예: 최종 수정 우선)\n    val deletedAt: Long? = null,         // 삭제도 ‘기록’으로 남겨 다른 기기에 전파\n    val syncStatus: SyncStatus = SyncStatus.PENDING\n)\n\nenum class SyncStatus { PENDING, SYNCED, FAILED }\n\n// 쓰기 흐름: Room에 먼저 저장 → 업로드 작업 예약\nsuspend fun saveTrip(trip: TripEntity) {\n    dao.upsert(trip.copy(updatedAt = System.currentTimeMillis(), syncStatus = SyncStatus.PENDING))\n    enqueueSync(context)                 // WorkManager 주제의 함수 (네트워크 연결 시 실행)\n}\n\n// SyncWorker.doWork() 안: PENDING 항목 업로드 (같은 ID로 set → 여러 번 실행돼도 안전)\nfor (trip in dao.getPending()) {\n    remote.document(trip.id).set(trip.toRemote()).await()\n    dao.markSynced(trip.id)\n}\n\n// 실제 동기화 정책(충돌·삭제 규칙)을 정의하기 전 단순 양방향 복사는 금지",
      "pitfalls": [
        "Firestore 오프라인 캐시로 충분한데 Room까지 추가해 복잡도만 늘리는 경우",
        "Room과 Firestore에서 서로 다른 ID 체계를 사용해 같은 항목을 연결하지 못하는 경우",
        "삭제를 실제 행 삭제로 처리해 다른 기기에 삭제가 전파되지 않거나 다시 살아나는 경우",
        "기기 시계 기반 updatedAt만 믿어 시계가 틀린 기기의 데이터가 항상 이기는 경우",
        "업로드 성공 후 상태 갱신 전에 앱이 종료되어 중복 업로드가 생기는 경우 → 멱등한 set"
      ],
      "prompt": "내 앱에서 Room과 Firestore를 모두 유지할 필요가 있는지 Firestore 오프라인 캐시와 비교해 먼저 판단해 줘. 필요하다면 단일 진실 공급원, ID·updatedAt·deletedAt·syncStatus 설계, 충돌 해결 규칙, 삭제 전파, WorkManager 재시도와 중복 업로드 방지 설계를 문서로 작성해 줘. 구현은 승인 후 진행해 줘.",
      "checks": [
        "오프라인 수정 후 네트워크 연결 시 동기화되는가?",
        "두 기기 동시 편집 충돌 규칙을 정의하고 테스트했는가?",
        "한 기기에서 삭제한 항목이 다른 기기에서도 사라지는가?",
        "업로드가 중복 실행돼도 데이터가 중복되지 않는가?"
      ],
      "questions": [
        "Firestore 기본 캐시와 Room의 차이는?",
        "삭제를 deletedAt으로 표시하는 이유는?"
      ],
      "answers": [
        "Firestore 캐시는 Firestore가 자동 관리하는 오프라인 사본으로, 별도 코드 없이 오프라인 읽기·쓰기와 재연결 시 전송을 처리하지만 복잡한 로컬 쿼리나 캐시 수명은 제어하기 어렵습니다. Room은 직접 설계하는 로컬 DB로 쿼리·스키마를 완전히 제어할 수 있지만 서버와의 동기화를 모두 직접 구현해야 합니다.",
        "행을 실제로 지우면 ‘이 항목이 삭제되었다’는 정보 자체가 사라져 다른 기기나 서버가 알 수 없고, 다음 동기화 때 다른 쪽 사본이 다시 복사되어 항목이 되살아날 수 있습니다. 삭제 시각을 기록해 전파한 뒤 모든 곳에 반영되면 정리합니다."
      ],
      "notes": "",
      "refs": [
        "FIRESTORE_OFFLINE",
        "WORKMANAGER_DOCS"
      ]
    },
    {
      "id": "maps",
      "group": "확장",
      "title": "Google Maps Compose·마커",
      "desc": "API 키를 안전하게 설정하고, 위도·경도를 저장한 항목을 지도에 마커로 표시해 탭하면 상세로 이동.",
      "level": "확장",
      "uses": [
        "여행",
        "지역 추천",
        "분실물"
      ],
      "concept": [
        "Maps Compose 라이브러리의 GoogleMap, Marker, rememberCameraPositionState 등을 사용합니다.",
        "Maps SDK for Android를 사용하려면 Google Cloud 프로젝트에서 API를 활성화하고 결제 계정을 연결해야 합니다(월 무료 사용량 범위 확인).",
        "API 키는 local.properties에 두고 Secrets Gradle Plugin으로 Manifest에 주입해 Git에 올라가지 않게 합니다.",
        "APK 안에는 결국 키가 포함되므로, 진짜 보호 수단은 Google Cloud Console의 키 제한입니다: 애플리케이션 제한(Android 앱: 패키지 이름 + SHA-1 인증서 지문)과 API 제한(Maps SDK for Android만).",
        "지도 표시와 마커만으로는 위치 권한이 필요하지 않습니다. ‘내 위치’ 표시는 별도 기능으로 분리하고 그때 위치 권한을 요청합니다.",
        "장소 좌표(latitude, longitude)를 데이터 모델에 nullable로 넣고, 좌표가 있는 항목만 마커로 표시합니다."
      ],
      "setup": "// 프로젝트 build.gradle.kts\nplugins {\n    id(\"com.google.android.libraries.mapsplatform.secrets-gradle-plugin\") version \"<버전>\" apply false\n}\n\n// app/build.gradle.kts\nplugins {\n    id(\"com.google.android.libraries.mapsplatform.secrets-gradle-plugin\")\n}\ndependencies {\n    implementation(\"com.google.maps.android:maps-compose:<버전>\")\n}\n\n# local.properties (Git에 올리지 않음 — .gitignore 확인)\nMAPS_API_KEY=발급받은_키\n\n<!-- AndroidManifest.xml (application 안) -->\n<meta-data\n    android:name=\"com.google.android.geo.API_KEY\"\n    android:value=\"${MAPS_API_KEY}\" />",
      "steps": [
        "Google Cloud에서 Maps SDK for Android를 활성화하고 API 키를 발급합니다.",
        "키에 패키지 이름 + SHA-1(디버그 키는 Gradle signingReport로 확인) 제한과 API 제한을 설정합니다.",
        "local.properties + Secrets Gradle Plugin으로 키를 Manifest에 주입합니다.",
        "고정된 좌표 2~3개를 먼저 지도에 표시합니다.",
        "저장된 항목의 좌표를 마커로 표시하고 정보 창 탭 시 상세로 이동합니다.",
        "사용자 현재 위치는 별도 선택 기능으로 분리합니다."
      ],
      "code": "@Composable\nfun TripMapScreen(trips: List<Trip>, onOpenTrip: (String) -> Unit) {\n    // 좌표가 있는 항목만 마커로 (!! 없이 안전하게)\n    val places = trips.mapNotNull { trip ->\n        val lat = trip.latitude\n        val lng = trip.longitude\n        if (lat != null && lng != null) trip to LatLng(lat, lng) else null\n    }\n\n    val cameraPositionState = rememberCameraPositionState {\n        position = CameraPosition.fromLatLngZoom(LatLng(37.5665, 126.9780), 10f)   // 서울\n    }\n\n    GoogleMap(\n        modifier = Modifier.fillMaxSize(),\n        cameraPositionState = cameraPositionState\n    ) {\n        places.forEach { (trip, latLng) ->\n            Marker(\n                state = rememberMarkerState(key = trip.id, position = latLng),\n                title = trip.title,\n                snippet = \"탭하여 상세 보기\",\n                onInfoWindowClick = { onOpenTrip(trip.id) }   // 마커 탭 → 정보 창 → 탭하면 상세\n            )\n        }\n    }\n}",
      "pitfalls": [
        "API 키를 Manifest나 코드에 직접 적어 공개 GitHub 저장소에 올리는 경우(올렸다면 키를 즉시 삭제·재발급)",
        "지도가 회색으로만 보이는 경우: API 미활성화, 결제 미연결, 키 제한의 패키지 이름·SHA-1 불일치 → Logcat의 ‘Authorization failure’ 확인",
        "디버그 키의 SHA-1만 등록해 릴리스 빌드에서 지도가 안 나오는 경우",
        "위도·경도 순서를 바꿔 마커가 엉뚱한 곳(바다 등)에 찍히는 경우",
        "MarkerState를 remember 없이 매번 새로 만들어 재구성마다 마커가 깜빡이는 경우"
      ],
      "prompt": "내 앱에 Google Maps Compose 화면을 추가해 줘. API 키는 local.properties + Secrets Gradle Plugin으로 주입하고 키 제한(패키지 이름·SHA-1, Maps SDK for Android만) 설정 방법을 안내해 줘. 저장된 위도·경도를 Marker로 표시하고 정보 창 클릭 시 해당 항목의 상세 화면으로 이동해 줘. 현재 위치 권한 없이 먼저 구현해 줘.",
      "checks": [
        "두 장소 이상의 마커가 올바른 위치에 구분되어 표시되는가?",
        "마커(정보 창) 탭 시 해당 기록을 여는가?",
        "API 키가 공개 저장소(커밋 기록 포함)에 노출되지 않는가?",
        "Cloud Console에서 키 제한을 설정했는가?"
      ],
      "questions": [
        "지도 마커와 지오코딩은 어떤 차이가 있는가?",
        "API 키를 local.properties에 숨겨도 키 제한이 필요한 이유는?"
      ],
      "answers": [
        "마커는 이미 알고 있는 좌표(위도·경도)를 지도 위에 표시하는 것이고, 지오코딩은 ‘서울역’ 같은 주소·장소 이름을 좌표로 바꾸는(역지오코딩은 반대) 별도의 변환 작업입니다. 지오코딩은 Geocoding API나 Places API 같은 추가 서비스·비용이 필요할 수 있습니다.",
        "local.properties는 키가 Git 저장소에 올라가는 것만 막아 줍니다. 빌드된 APK에는 키가 그대로 들어 있어 누구나 추출할 수 있으므로, 키 제한으로 ‘내 앱(패키지 이름 + 서명)에서 Maps SDK 용도로만’ 쓰이도록 해야 도용과 과금을 막을 수 있습니다."
      ],
      "notes": "",
      "refs": [
        "MAPS",
        "MAPS_KEY",
        "MAPS_SECRETS"
      ]
    },
    {
      "id": "firebase_extension",
      "group": "프로젝트 사례",
      "title": "Travel Diary & Planner 예시",
      "desc": "UI·알림·카메라 기능들을 한 앱에서 연결하는 참조 시나리오이며 필수 과제는 아닙니다.",
      "level": "사례",
      "uses": [
        "여행"
      ],
      "concept": [
        "여행 목록·등록·다이어리·사진·알림·지도·클라우드의 기능을 자연스럽게 연결할 수 있는 예시 앱입니다.",
        "학생은 자신의 프로젝트에서 필요한 기능만 골라 가져갈 수 있습니다.",
        "권장 구현 순서는 ‘로컬에서 완결되는 기능 → 시스템 기능 → 클라우드 확장’입니다. 앞 단계가 안정적으로 동작한 뒤 다음 단계로 넘어갑니다.",
        "기능마다 이 참고서의 해당 주제(Room, 날짜 선택, 카메라, 알림, 알람, Maps, Firebase)를 함께 읽습니다."
      ],
      "steps": [
        "1단계 여행 등록/조회: Compose + ViewModel + Room (주제: Compose UI, 상태 관리, Room, Hilt)",
        "2단계 입력 개선: DatePicker + Dropdown + 삭제 확인·실행 취소 (주제: 날짜 선택, AlertDialog, Snackbar)",
        "3단계 사진: TakePicture + Photo Picker + Coil (주제: 카메라·FileProvider)",
        "4단계 리마인더: AlarmManager + Notification (주제: 알림, AlarmManager, 권한)",
        "5단계 확장(선택): Maps 마커, Firestore + Storage 백업 (주제: Maps, Firebase)"
      ],
      "code": "Compose → ViewModel → Repository → Room / Firebase\n                                ↘ AlarmManager → Receiver → Notification\nCompose → Camera/Photo Picker → 앱 저장소 파일 → Room에 파일 이름 저장\nCompose → Maps Compose ← 좌표가 있는 기록\n\n데이터 모델 예시\nTrip(id, title, startDate, endDate, category, note,\n     photoFileName?, latitude?, longitude?, remindAt?)",
      "pitfalls": [
        "모든 기능을 한꺼번에 AI에게 요청해 어떤 변경이 문제를 일으켰는지 추적할 수 없는 경우",
        "1단계 데이터 모델이 정리되지 않은 상태에서 사진·지도 필드를 계속 추가해 Room 마이그레이션이 꼬이는 경우",
        "필수 기능이 완성되기 전에 Firebase·Maps 같은 확장 기능부터 시작하는 경우"
      ],
      "prompt": "Travel Diary & Planner 사례를 참고하되 내 프로젝트는 [프로젝트 설명]이야. 현재 기능과 필요한 Android 기술을 매핑하고 우선순위 3개만 추천해 줘. 각 기능의 구현 단계와 검증 기준을 제시하고, 데이터 모델과 기존 기능은 보존해 줘.",
      "checks": [
        "기존 기능과 새 기능이 충돌하지 않는가?",
        "불필요하게 많은 기능을 추가하지 않았는가?",
        "각 단계가 끝날 때마다 커밋과 동작 확인을 했는가?"
      ],
      "questions": [
        "우리 팀 앱에서 즉시 가치가 높은 기능은 무엇인가?",
        "왜 로컬 기능을 클라우드 기능보다 먼저 구현하는가?"
      ],
      "answers": [
        "정답은 팀마다 다릅니다. 사용자가 앱을 여는 가장 큰 이유(핵심 행동)를 한 문장으로 쓰고, 그 행동을 직접 돕는 기능을 고릅니다. 예: 여행 기록 앱이라면 ‘빠르게 기록하고 다시 찾기’ → 등록·목록·사진이 알림·지도보다 우선입니다.",
        "로컬 기능은 외부 서비스·계정·요금 없이 빠르게 만들고 테스트할 수 있으며, 데이터 모델과 화면 흐름을 먼저 안정시켜 줍니다. 클라우드는 인증·보안 규칙·동기화·비용 문제가 추가되므로 기본 기능이 안정된 뒤 붙이는 것이 실패 위험이 적습니다."
      ],
      "notes": "",
      "refs": []
    },
    {
      "id": "project",
      "group": "프로젝트 사례",
      "title": "팀 프로젝트별 추천 기능",
      "desc": "분실물·예산·일정·보드게임·커뮤니티·습관 등 프로젝트 유형별로 필요한 기능 선택.",
      "level": "사례",
      "uses": [
        "팀 프로젝트"
      ],
      "concept": [
        "분실물 앱: 사진 첨부(카메라·Photo Picker)·카테고리 Dropdown·등록 알림·지도 마커(선택).",
        "개인 예산 앱: Room·StateFlow·날짜 선택·월별 합계 쿼리·차트(선택, 별도 라이브러리).",
        "일정 취합 앱: 공유 입력·알림·권한·네트워크·Firebase(선택)·AlarmManager 리마인더.",
        "게임형 앱: Compose 상태·Navigation·DataStore(최고 점수·설정)·효과음/애니메이션(별도 학습).",
        "커뮤니티·게시판 앱: Firebase Auth·Firestore·Security Rules·이미지 업로드·신고/삭제 확인.",
        "습관·건강 기록 앱: Room·DataStore·주기 알림(AlarmManager)·WorkManager 정리 작업·통계 화면."
      ],
      "steps": [
        "앱의 핵심 사용자 행동을 한 문장으로 정의합니다.",
        "필수 기능 2개와 선택 기능 2개를 구분합니다.",
        "필수 기능의 데이터 모델과 화면 흐름을 먼저 그립니다.",
        "필수 기능부터 구현하고 결과를 검증한 뒤 선택 기능으로 넘어갑니다."
      ],
      "code": "앱 목적 → 사용자 행동 → 필요한 Android 기능 → 데이터 모델 → 검증 기준\n\n예) 분실물 앱\n목적: 잃어버린 물건을 빨리 찾게 한다\n행동: 습득물 사진과 위치를 1분 안에 등록한다\n기능: 카메라 + 카테고리 Dropdown + Room (필수) / 지도 마커, 알림 (선택)\n모델: Item(id, title, category, photoFileName, foundAt, latitude?, longitude?)\n검증: 사진 없이도 등록 가능? 재시작 후 목록 유지? 카테고리 필터 동작?",
      "pitfalls": [
        "사용자 가치보다 ‘써 보고 싶은 기술’ 위주로 기능을 고르는 경우",
        "팀원마다 다른 데이터 모델을 가정하고 각자 화면을 만들어 통합 단계에서 충돌하는 경우",
        "선택 기능을 구현하느라 필수 기능의 예외 처리·검증을 놓치는 경우"
      ],
      "prompt": "우리 팀 프로젝트의 목적은 [설명]이야. 이 참고서의 Android 기능 중 꼭 필요한 것 3개와 제외할 기능 3개를 이유와 함께 제시해 줘. 필요한 기능만 작은 단위로 나눠 구현 계획과 팀원별 역할 분담, 공통 데이터 모델 초안을 짜 줘.",
      "checks": [
        "기술 자체가 목적이 되지 않는가?",
        "사용자 가치가 분명한가?",
        "팀원 모두가 같은 데이터 모델을 기준으로 작업하는가?"
      ],
      "questions": [
        "선택한 기능이 해결하는 사용자 불편은 무엇인가?"
      ],
      "answers": [
        "팀마다 답이 다릅니다. ‘이 기능이 없으면 사용자가 무엇을 못 하거나 불편한가?’를 한 문장으로 답할 수 있어야 합니다. 답하기 어렵다면 그 기능은 선택 기능으로 미루는 것이 좋습니다."
      ],
      "notes": "",
      "refs": []
    },
    {
      "id": "debugging",
      "group": "개발 도구·품질",
      "title": "디버깅·Logcat·크래시 분석",
      "desc": "Logcat 필터, 스택트레이스 읽기, 중단점, Database/Network Inspector로 문제 원인을 찾고 AI에게 정확히 전달하기.",
      "level": "공통",
      "uses": [
        "모든 프로젝트"
      ],
      "concept": [
        "Logcat은 앱과 시스템의 로그를 보여 줍니다. ‘package:mine level:error’처럼 필터를 사용하면 내 앱의 오류만 볼 수 있고, 앱이 재시작되어도 계속 추적됩니다.",
        "크래시가 나면 ‘FATAL EXCEPTION’ 아래에 예외 종류와 메시지, 스택트레이스가 출력됩니다. 내 패키지 이름이 처음 나오는 줄이 문제 코드 위치이고, ‘Caused by:’가 있으면 가장 아래쪽 Caused by가 근본 원인입니다.",
        "Log.d/i/w/e(TAG, 메시지)로 흐름을 기록하고, 예외는 Log.e(TAG, 메시지, e)처럼 객체를 함께 넘겨 스택트레이스를 남깁니다.",
        "중단점(breakpoint)을 걸고 Debug 실행하면 해당 줄에서 멈춰 변수 값을 확인하고 한 줄씩 실행할 수 있습니다.",
        "App Inspection의 Database Inspector로 Room 테이블을 실시간으로 보고, Network Inspector로 요청·응답을 확인합니다. Layout Inspector는 Compose 재구성 횟수를 보여 줍니다.",
        "AI에게 도움을 요청할 때는 전체 스택트레이스, 재현 순서, 기대 결과와 실제 결과, 관련 파일을 함께 전달해야 정확한 답을 얻습니다."
      ],
      "steps": [
        "문제를 재현하는 순서를 적습니다(어떤 화면에서 무엇을 누르면 발생하는지).",
        "Logcat 필터를 package:mine level:error로 설정하고 다시 재현합니다.",
        "FATAL EXCEPTION의 예외 종류·메시지·Caused by·내 코드 첫 줄을 찾습니다.",
        "해당 줄에 중단점을 걸고 Debug 실행으로 변수 값을 확인합니다.",
        "원인과 수정 내용을 기록하고, 같은 순서로 재현해 해결을 확인합니다."
      ],
      "code": "private const val TAG = \"TripViewModel\"\n\nLog.d(TAG, \"loadTrips 시작: cityId=$cityId\")\ntry {\n    // ...\n} catch (e: IOException) {\n    Log.e(TAG, \"loadTrips 실패\", e)     // 예외 객체를 넘기면 스택트레이스까지 출력\n}\n\n/* Logcat 필터 예시\n   package:mine level:error          내 앱의 오류만\n   package:mine tag:TripViewModel    특정 TAG만\n*/\n\n/* 스택트레이스 읽는 법 (예시)\nFATAL EXCEPTION: main\nProcess: com.example.trip, PID: 12345\njava.lang.IllegalStateException: Cannot access database on the main thread ...   ← 예외 종류 + 메시지\n    at androidx.room.RoomDatabase.assertNotMainThread(...)\n    at com.example.trip.data.TripDao_Impl.getAll(TripDao_Impl.kt:58)\n    at com.example.trip.ui.TripViewModel.load(TripViewModel.kt:31)                ← 내 코드 첫 줄\n    ...\nCaused by: ...                                                                   ← 있다면 근본 원인\n*/",
      "pitfalls": [
        "스택트레이스 첫 줄(라이브러리 내부)만 보고 원인을 판단하는 경우 → 내 패키지 줄과 Caused by 확인",
        "AI에게 ‘앱이 꺼져요’만 전달하고 로그를 주지 않는 경우",
        "로그에 비밀번호·토큰·개인정보를 출력하는 경우",
        "Logcat 필터를 프로세스 ID로 걸어 앱 재시작 후 로그가 안 보이는 경우 → package:mine",
        "증상만 고치는 수정(try-catch로 예외 삼키기)으로 근본 원인을 숨기는 경우"
      ],
      "prompt": "앱이 [재현 순서]에서 크래시가 나. 아래는 Logcat의 전체 스택트레이스야. [스택트레이스 붙여넣기] 기대 결과는 [기대], 실제 결과는 [실제]야. 원인이 되는 코드 위치와 근본 원인을 먼저 설명하고, 예외를 삼키는 방식이 아닌 최소 수정안을 제안해 줘. 수정 후 확인할 재현 절차도 알려 줘.",
      "checks": [
        "같은 재현 순서로 문제가 더 이상 발생하지 않는가?",
        "수정이 예외를 숨기는 것이 아니라 원인을 해결했는가?",
        "로그에 개인정보·비밀정보가 출력되지 않는가?"
      ],
      "questions": [
        "스택트레이스에서 가장 먼저 봐야 할 곳은?",
        "try-catch로 예외를 잡아 크래시를 없애는 것이 항상 좋은 해결인가?"
      ],
      "answers": [
        "예외 종류와 메시지(무슨 일이 일어났는지), 내 앱 패키지 이름이 처음 나오는 줄(어디서), 그리고 Caused by가 있으면 가장 아래쪽 Caused by(근본 원인)입니다.",
        "아닙니다. 예외를 삼키면 크래시는 사라지지만 데이터가 저장되지 않거나 화면이 비는 등 문제가 조용히 숨어 버립니다. 원인을 고치고, 정말 예상 가능한 실패(네트워크 끊김 등)만 잡아서 사용자에게 오류 상태로 보여 줘야 합니다."
      ],
      "notes": "",
      "refs": [
        "LOGCAT_DOCS"
      ]
    },
    {
      "id": "testing",
      "group": "개발 도구·품질",
      "title": "테스트: ViewModel 단위·Compose UI",
      "desc": "가짜 Repository로 ViewModel 로직을 검증하는 단위 테스트와 화면 표시를 검증하는 Compose UI 테스트의 기초.",
      "level": "공통",
      "uses": [
        "모든 프로젝트"
      ],
      "concept": [
        "단위 테스트(test/ 폴더)는 PC의 JVM에서 빠르게 실행되며 ViewModel·변환 함수 같은 로직을 검증합니다.",
        "계측·UI 테스트(androidTest/ 폴더)는 에뮬레이터·기기에서 실행되며 실제 화면 표시와 상호작용을 검증합니다.",
        "Repository를 인터페이스로 분리하면 테스트에서 FakeRepository로 바꿔 네트워크·DB 없이 ViewModel을 테스트할 수 있습니다(Hilt @Binds 구조와 연결).",
        "viewModelScope는 Dispatchers.Main을 사용하므로 단위 테스트에서는 MainDispatcherRule로 테스트용 Dispatcher로 바꿉니다.",
        "코루틴 테스트는 runTest를 사용하고, stateIn(WhileSubscribed)으로 만든 StateFlow는 구독자가 있어야 값이 갱신되므로 backgroundScope에서 collect합니다.",
        "Compose UI 테스트는 createComposeRule()로 Composable을 띄우고 onNodeWithText 등으로 찾아 assert합니다.",
        "AI가 만든 코드에도 테스트를 함께 요청하면, ‘동작한다’는 주장을 반복 실행 가능한 근거로 바꿀 수 있습니다."
      ],
      "setup": "// app/build.gradle.kts\ndependencies {\n    testImplementation(\"junit:junit:4.13.2\")\n    testImplementation(\"org.jetbrains.kotlinx:kotlinx-coroutines-test:<버전>\")\n\n    androidTestImplementation(platform(\"androidx.compose:compose-bom:<버전>\"))\n    androidTestImplementation(\"androidx.compose.ui:ui-test-junit4\")\n    debugImplementation(\"androidx.compose.ui:ui-test-manifest\")\n}",
      "steps": [
        "Repository가 인터페이스인지 확인하고, 테스트용 FakeRepository를 만듭니다.",
        "MainDispatcherRule을 추가합니다.",
        "ViewModel의 핵심 동작(목록 표시, 삭제, 오류 상태) 테스트를 작성합니다.",
        "빈 목록 안내 문구 같은 화면 표시를 Compose UI 테스트로 작성합니다.",
        "Android Studio에서 테스트를 실행하고(초록색 실행 아이콘 또는 ./gradlew test) 결과를 기록합니다."
      ],
      "code": "// test/ : 테스트용 Main Dispatcher 교체 규칙\nclass MainDispatcherRule(\n    private val dispatcher: TestDispatcher = UnconfinedTestDispatcher()\n) : TestWatcher() {\n    override fun starting(description: Description) = Dispatchers.setMain(dispatcher)\n    override fun finished(description: Description) = Dispatchers.resetMain()\n}\n\n// test/ : 가짜 저장소 (네트워크·DB 없이)\nclass FakeTripRepository : TripRepository {\n    val trips = MutableStateFlow<List<Trip>>(emptyList())\n    override fun observeTrips(): Flow<List<Trip>> = trips\n    override fun observeTrip(id: String) = trips.map { list -> list.find { it.id == id } }\n    override suspend fun save(trip: Trip) { trips.update { it + trip } }\n    override suspend fun delete(id: String) { trips.update { list -> list.filterNot { it.id == id } } }\n}\n\n// test/ : ViewModel 단위 테스트\nclass TripViewModelTest {\n    @get:Rule val mainDispatcherRule = MainDispatcherRule()\n\n    @Test\n    fun `삭제하면 목록에서 사라진다`() = runTest {\n        val repo = FakeTripRepository().apply { trips.value = listOf(Trip(\"1\", \"제주\", null)) }\n        val viewModel = TripViewModel(repo)\n        // WhileSubscribed StateFlow는 구독자가 있어야 갱신됨\n        backgroundScope.launch(UnconfinedTestDispatcher(testScheduler)) { viewModel.uiState.collect() }\n\n        viewModel.deleteTrip(\"1\")\n        advanceUntilIdle()\n\n        val state = viewModel.uiState.value as TripUiState.Success\n        assertTrue(state.trips.isEmpty())\n    }\n}\n\n// androidTest/ : Compose UI 테스트\nclass TripListTest {\n    @get:Rule val composeRule = createComposeRule()\n\n    @Test\n    fun emptyList_showsGuideText() {\n        composeRule.setContent { TripList(trips = emptyList(), onOpen = {}) }\n        composeRule.onNodeWithText(\"아직 등록된 여행이 없습니다\").assertIsDisplayed()\n    }\n}",
      "pitfalls": [
        "Repository가 구체 클래스라 테스트에서 실제 DB·네트워크를 사용하게 되는 경우",
        "MainDispatcherRule 없이 viewModelScope를 사용하는 ViewModel을 테스트해 ‘Module with the Main dispatcher is missing’ 오류가 나는 경우",
        "stateIn(WhileSubscribed) StateFlow를 구독하지 않고 value만 확인해 초기값(Loading)만 보이는 경우",
        "UI 테스트를 test/ 폴더에 두거나 단위 테스트를 androidTest/에 두어 실행 환경이 맞지 않는 경우",
        "테스트가 실패하자 assert를 지워 통과시키는 경우"
      ],
      "prompt": "현재 프로젝트의 [ViewModel 이름]에 대한 단위 테스트를 작성해 줘. Repository가 인터페이스가 아니면 먼저 분리 계획을 알려 주고, FakeRepository와 MainDispatcherRule을 사용해 정상·빈 목록·오류 상태를 검증해 줘. 실제로 테스트를 실행한 결과(통과/실패 수)를 보고해 줘.",
      "checks": [
        "./gradlew test로 단위 테스트가 모두 통과하는가?",
        "테스트가 실제 버그를 잡을 수 있는가(코드를 일부러 틀리게 바꾸면 실패하는가)?",
        "UI 테스트가 에뮬레이터에서 통과하는가?"
      ],
      "questions": [
        "단위 테스트와 UI(계측) 테스트는 무엇이 다른가?",
        "FakeRepository를 쓰면 무엇이 좋은가?"
      ],
      "answers": [
        "단위 테스트는 PC의 JVM에서 빠르게 실행되어 로직(ViewModel, 변환·검증 함수)을 확인합니다. UI·계측 테스트는 에뮬레이터나 기기에서 실행되어 실제 화면 표시, 클릭, Android 프레임워크와의 상호작용을 확인하지만 느립니다. 로직은 단위 테스트로 많이, 핵심 화면은 UI 테스트로 적게 작성합니다.",
        "네트워크·DB 상태와 무관하게 원하는 데이터를 즉시 넣을 수 있어 테스트가 빠르고 결과가 항상 같습니다. 오류 상황도 쉽게 흉내 낼 수 있어 ViewModel의 로직만 정확히 검증할 수 있습니다."
      ],
      "notes": "",
      "refs": [
        "TESTING_DOCS",
        "COROUTINES_TEST",
        "COMPOSE_TEST"
      ]
    },
    {
      "id": "git",
      "group": "개발 도구·품질",
      "title": "Git·GitHub 협업과 비밀정보 관리",
      "desc": ".gitignore, local.properties, API 키·키스토어 보호, 기능 브랜치와 Pull Request, AI 변경 전 커밋 습관.",
      "level": "공통",
      "uses": [
        "모든 프로젝트",
        "팀 프로젝트"
      ],
      "concept": [
        "Android Studio 프로젝트에는 Git에 올리면 안 되는 파일이 있습니다: build/ 폴더, .gradle/, local.properties(SDK 경로·개인 키), 서명 키스토어(.jks, .keystore).",
        "API 키는 local.properties에 두고 BuildConfig나 Secrets Gradle Plugin으로 주입합니다. 코드·Manifest에 직접 적지 않습니다.",
        "키를 한 번이라도 커밋해 push했다면 이후 커밋에서 지워도 기록에 남습니다. 키를 즉시 폐기·재발급하는 것이 유일하게 확실한 조치입니다.",
        "AI에게 코드 변경을 요청하기 전에 커밋해 두면 결과가 마음에 들지 않을 때 쉽게 되돌릴 수 있습니다.",
        "팀 작업은 기능별 브랜치 → Pull Request → 팀원 리뷰 → main 병합 흐름을 사용하면 서로의 작업을 덮어쓰지 않습니다.",
        "커밋은 ‘하나의 의미 있는 변경’ 단위로 작게 나누고, 메시지에 무엇을 왜 바꿨는지 적습니다."
      ],
      "setup": "# .gitignore (Android Studio 기본 + 추가 확인)\n*.iml\n.gradle/\n/local.properties\n/.idea/\n.DS_Store\nbuild/\n/captures\n.externalNativeBuild/\n.cxx/\n*.jks\n*.keystore\n# 공개 저장소라면 검토\n# app/google-services.json",
      "steps": [
        ".gitignore에 local.properties, build/, 키스토어가 포함되어 있는지 확인합니다.",
        "git status로 올라갈 파일 목록을 확인하고 비밀정보가 없는지 검토합니다.",
        "기능별 브랜치를 만들어 작업하고 작은 단위로 커밋합니다.",
        "GitHub에 push한 뒤 Pull Request를 만들어 팀원에게 리뷰를 요청합니다.",
        "충돌이 나면 양쪽 변경을 이해한 뒤 해결하고, 빌드·실행을 다시 확인합니다."
      ],
      "code": "# 작업 시작 전 최신 main 받기\ngit switch main\ngit pull\n\n# 기능별 브랜치\ngit switch -c feature/photo-picker\n\n# AI에게 변경 요청하기 전 현재 상태 저장\ngit add -A\ngit commit -m \"사진 기능 작업 전 상태\"\n\n# 변경 내용 확인 후 커밋\ngit status\ngit diff\ngit add app/src/main/java/.../PhotoInput.kt\ngit commit -m \"사진 선택: Photo Picker로 고른 이미지를 앱 저장소에 복사\"\n\n# 결과가 마음에 들지 않으면 마지막 커밋 상태로 되돌리기 (커밋 안 한 변경 삭제됨, 주의)\ngit restore .\n\n# GitHub에 올리고 Pull Request 생성\ngit push -u origin feature/photo-picker\n# → GitHub에서 Pull Request → 팀원 리뷰 → main에 병합\n\n# 실수로 키를 커밋·push했다면: 커밋을 지워도 기록에 남음 → 키를 즉시 폐기·재발급",
      "pitfalls": [
        "build/ 폴더와 .idea/를 커밋해 저장소가 커지고 팀원 간 충돌이 계속 나는 경우",
        "API 키·google-services.json·키스토어를 공개 저장소에 올리는 경우",
        "AI가 수십 개 파일을 바꾼 결과를 하나의 커밋으로 올려 문제 원인을 찾기 어려운 경우",
        "팀원 모두가 main에 직접 push해 서로의 변경을 덮어쓰는 경우",
        "git restore/reset을 커밋 없이 실행해 작업 내용을 잃는 경우"
      ],
      "prompt": "현재 저장소의 .gitignore와 git status를 점검해 줘. local.properties, build 폴더, 키스토어, API 키, google-services.json 등 올라가면 안 되는 파일이 추적되고 있는지 확인하고, 하드코딩된 키가 있으면 local.properties로 옮기는 방법을 제안해 줘. 커밋·push는 내가 확인한 뒤 직접 할게.",
      "checks": [
        "git status에 build/, local.properties, 키스토어가 나타나지 않는가?",
        "코드·Manifest에 API 키가 직접 적혀 있지 않은가?",
        "기능별 브랜치와 Pull Request로 팀 작업을 병합하는가?",
        "AI 변경 전후로 커밋을 남겼는가?"
      ],
      "questions": [
        "키를 커밋한 뒤 다음 커밋에서 지우면 안전한가?",
        "기능별 브랜치와 Pull Request를 사용하는 이유는?"
      ],
      "answers": [
        "아닙니다. Git은 모든 이전 커밋을 보관하므로 기록에서 키를 찾을 수 있고, 공개 저장소라면 자동 수집 봇이 몇 분 안에 가져갈 수 있습니다. 키를 즉시 폐기·재발급해야 합니다(기록 정리는 그다음 문제입니다).",
        "각자 독립된 브랜치에서 작업하므로 main이 항상 동작하는 상태로 유지되고, Pull Request에서 변경 내용을 팀원이 검토·질문할 수 있습니다. 문제가 생기면 어떤 변경 때문인지 추적하고 되돌리기도 쉽습니다."
      ],
      "notes": "",
      "refs": [
        "GIT_IGNORE",
        "MAPS_SECRETS"
      ]
    },
    {
      "id": "review",
      "group": "AI 개발 워크플로",
      "title": "AI 프롬프트·리뷰·검증",
      "desc": "AI를 코드 생성기가 아니라 변경 계획·설명·테스트를 수행하는 개발 보조자로 활용.",
      "level": "공통",
      "uses": [
        "모든 프로젝트"
      ],
      "concept": [
        "한 번에 전체 앱을 다시 작성하도록 요청하지 않습니다. ‘분석 → 계획 승인 → 한 기능 구현 → 검증’의 작은 단위로 진행합니다.",
        "분석과 구현을 분리하고 변경 전후를 Git으로 관리합니다.",
        "AI가 수행하지 않은 테스트를 수행했다고 주장하지 않도록 ‘실제 수행한 검증 / 수행하지 않은 검증’을 구분해 보고하게 합니다.",
        "AI 코드에서 자주 생기는 문제: 존재하지 않거나 오래된 API(버전 불일치), 불필요한 권한 추가, 예외를 삼키는 try-catch, 요청하지 않은 파일 변경, 하드코딩된 키.",
        "API 키·개인정보·서비스 비밀을 프롬프트에 그대로 넣지 않습니다.",
        "오류가 나면 전체 스택트레이스와 재현 순서를 함께 전달합니다(디버깅 주제 참고)."
      ],
      "steps": [
        "요구사항과 완료 기준을 작성합니다.",
        "AI에게 파일 조사와 수정 계획을 먼저 요청하고 검토·승인합니다.",
        "한 기능씩 구현·빌드하고 커밋합니다.",
        "에뮬레이터에서 성공·실패·권한 거부·회전 상황을 테스트합니다.",
        "변경 이유를 자신의 말로 설명할 수 있는지 확인합니다."
      ],
      "code": "요구사항: [구체적으로 — 누가, 무엇을, 어떤 화면에서]\n변경 범위: [화면·모듈·파일]\n보존할 동작: [기존 기능]\n제약: [사용할 라이브러리·버전, 추가 금지 권한]\n완료 조건: [테스트 시나리오]\n보고: 수정 파일, 빌드 로그, 실제 수행한 검증 / 미검증 항목\n\nAI 코드 리뷰 체크리스트\n□ 요청하지 않은 파일·기능이 바뀌지 않았는가 (git diff)\n□ 프로젝트 버전에 존재하는 API인가 (빌드 + 공식 문서)\n□ 새로 추가된 권한·의존성이 꼭 필요한가\n□ 예외를 삼키거나 !!로 넘기는 코드가 없는가\n□ 키·비밀정보가 하드코딩되지 않았는가\n□ 내가 설명할 수 없는 코드가 없는가",
      "pitfalls": [
        "AI가 ‘테스트 완료’라고 보고했지만 실제로는 실행하지 않은 경우를 그대로 믿는 경우",
        "빌드 오류가 날 때마다 AI가 의존성 버전을 마구 바꾸게 두어 프로젝트가 불안정해지는 경우",
        "AI가 제안한 코드를 이해하지 못한 채 제출해 질문에 답하지 못하는 경우",
        "프롬프트에 API 키·실제 사용자 데이터를 붙여 넣는 경우"
      ],
      "prompt": "현재 프로젝트를 변경하기 전 분석 보고서부터 작성해 줘. 변경 파일과 위험을 먼저 알려 주고, 기능 구현은 작은 단계로 진행해 줘. 각 단계의 실제 검증 로그와 남은 문제를 IMPLEMENTATION_STATUS.md에 업데이트해 줘. 새 권한·의존성을 추가할 때는 이유를 먼저 설명하고 승인을 받아 줘.",
      "checks": [
        "git diff로 변경된 파일 목록을 확인했는가?",
        "실패/거부 시나리오를 직접 테스트했는가?",
        "새로 추가된 권한·의존성의 이유를 알고 있는가?",
        "자기 말로 설명할 수 있는가?"
      ],
      "questions": [
        "AI가 낸 코드를 검토할 때 가장 먼저 볼 세 가지는?",
        "AI가 ‘테스트를 통과했다’고 할 때 무엇을 확인해야 하는가?"
      ],
      "answers": [
        "① 변경 범위: git diff로 요청한 파일·기능만 바뀌었는지. ② 실패 처리: 예외를 삼키거나 !!·하드코딩으로 넘긴 곳이 없는지, 권한 거부·네트워크 실패를 처리하는지. ③ 설정 변화: 새 권한·의존성·버전 변경이 꼭 필요한지. 그다음 내가 설명할 수 있는지 확인합니다.",
        "실제로 어떤 명령(./gradlew test 등)을 실행했는지, 그 출력(통과·실패 수)이 있는지, 테스트가 무엇을 검증하는지 확인합니다. 그리고 직접 같은 테스트를 실행하고 에뮬레이터에서 핵심 시나리오를 재현해 봅니다."
      ],
      "notes": "",
      "refs": []
    },
    {
      "id": "resources",
      "group": "참고자료",
      "title": "공식 문서·자료 범위",
      "desc": "확인된 강의자료와 공식 Android·Kotlin·Firebase·Maps 문서 연결.",
      "level": "공통",
      "uses": [
        "모든 프로젝트"
      ],
      "concept": [
        "자료 기반: 제공된 Retrofit·Weather App, UI·알림·카메라 강의자료와 Travel Diary AI 실습 강의안.",
        "복습 단원: 이전 수업의 흐름을 바탕으로 재구성한 참고 설명. 모든 이전 수업의 PPT 원문을 대조한 것은 아닙니다.",
        "보충 내용(설정, 자주 하는 실수, 답 확인, WorkManager·디버깅·테스트·Git 주제)은 공식 문서를 기준으로 작성한 학습용 정리입니다.",
        "버전이 바뀌는 Android API는 공식 문서를 우선 확인합니다. 라이브러리 버전은 Android Studio의 최신 안정 버전 안내나 공식 릴리스 노트를 따릅니다."
      ],
      "steps": [
        "강의 원본과 자신의 프로젝트 버전을 대조합니다.",
        "공식 문서의 API 수준과 라이브러리 버전을 확인합니다.",
        "결과를 학생 본인의 구현에 맞게 수정합니다."
      ],
      "code": "공식 문서 링크는 아래 ‘자료 근거·공식 문서’ 영역에서 확인하세요.\n\n버전 확인 위치\n- gradle/libs.versions.toml (버전 카탈로그)\n- app/build.gradle.kts (compileSdk, minSdk, targetSdk)\n- Android Studio: File > Project Structure > Dependencies",
      "prompt": "현재 프로젝트의 AGP/Kotlin/Compose BOM/Room/Hilt/Navigation 버전과 compileSdk·minSdk·targetSdk를 분석하고, 내가 선택한 기능에 필요한 공식 Android 문서 링크와 버전 호환성을 정리해 줘.",
      "checks": [
        "사용한 출처가 공식 문서인가?",
        "현재 SDK와 API가 호환되는가?"
      ],
      "questions": [
        "문서의 코드가 지금 프로젝트에서 그대로 컴파일된다고 보장할 수 있는가?"
      ],
      "answers": [
        "보장할 수 없습니다. 문서·예제는 특정 라이브러리 버전을 기준으로 작성되며, 프로젝트의 Kotlin·Compose BOM·minSdk 버전에 따라 API 이름이나 시그니처가 다를 수 있습니다. 빌드와 실행으로 확인하고 필요하면 버전에 맞게 수정해야 합니다."
      ],
      "notes": "",
      "refs": [
        "NETWORK_LESSON",
        "UI_SYSTEM_LESSON",
        "KOTLIN_DOCS",
        "COMPOSE_DOCS",
        "ARCH_GUIDE",
        "ROOM_DOCS",
        "HILT_DOCS",
        "ANDROID_NOTIFICATION",
        "ANDROID_ALARM",
        "WORKMANAGER_DOCS",
        "PHOTO_PICKER",
        "PERMISSIONS_DOCS",
        "FIREBASE_KTX",
        "MAPS",
        "TESTING_DOCS"
      ]
    }
  ],
  "refs": {
    "NETWORK_LESSON": {
      "label": "수업자료: Retrofit / Weather App",
      "url": "",
      "detail": "제공된 네트워크·날씨 앱 강의자료와 코드 읽기 가이드 기준"
    },
    "UI_SYSTEM_LESSON": {
      "label": "수업자료: UI·알림·권한·카메라",
      "url": "",
      "detail": "제공된 UI·알림·권한·카메라 강의자료 기준"
    },
    "KOTLIN_DOCS": {
      "label": "Kotlin 공식 문서",
      "url": "https://kotlinlang.org/docs/home.html",
      "detail": "기본 문법, null 안전성, sealed class"
    },
    "COROUTINES": {
      "label": "Android 공식: Kotlin 코루틴",
      "url": "https://developer.android.com/kotlin/coroutines",
      "detail": "suspend, launch, Dispatchers, viewModelScope"
    },
    "COMPOSE_DOCS": {
      "label": "Android 공식: Jetpack Compose",
      "url": "https://developer.android.com/develop/ui/compose/documentation",
      "detail": "Compose 개념과 컴포넌트"
    },
    "COMPOSE_LISTS": {
      "label": "Android 공식: 목록과 그리드",
      "url": "https://developer.android.com/develop/ui/compose/lists",
      "detail": "LazyColumn, item key"
    },
    "STATE_DOCS": {
      "label": "Android 공식: 상태와 Jetpack Compose",
      "url": "https://developer.android.com/develop/ui/compose/state",
      "detail": "remember, rememberSaveable, 상태 호이스팅"
    },
    "ARCH_GUIDE": {
      "label": "Android 공식: 앱 아키텍처 가이드",
      "url": "https://developer.android.com/topic/architecture",
      "detail": "UI·데이터 계층, 단방향 데이터 흐름"
    },
    "EDGE_TO_EDGE": {
      "label": "Android 공식: Compose의 창 인셋",
      "url": "https://developer.android.com/develop/ui/compose/system/insets",
      "detail": "edge-to-edge, WindowInsets"
    },
    "M3_COMPONENTS": {
      "label": "Android 공식: Material 3 컴포넌트",
      "url": "https://developer.android.com/develop/ui/compose/components",
      "detail": "Scaffold, AppBar, FAB 등"
    },
    "NAVIGATION_DOCS": {
      "label": "Android 공식: 타입 안전 Navigation",
      "url": "https://developer.android.com/guide/navigation/design/type-safety",
      "detail": "@Serializable 경로, toRoute"
    },
    "ROOM_DOCS": {
      "label": "Android 공식: Room",
      "url": "https://developer.android.com/training/data-storage/room",
      "detail": "Entity, DAO, Database, 마이그레이션"
    },
    "HILT_DOCS": {
      "label": "Android 공식: Hilt",
      "url": "https://developer.android.com/training/dependency-injection/hilt-android",
      "detail": "@HiltAndroidApp, @Module, @Binds"
    },
    "DATASTORE_DOCS": {
      "label": "Android 공식: DataStore",
      "url": "https://developer.android.com/topic/libraries/architecture/datastore",
      "detail": "Preferences DataStore 읽기·쓰기"
    },
    "RETROFIT_DOCS": {
      "label": "Retrofit 공식 저장소(GitHub)",
      "url": "https://github.com/square/retrofit",
      "detail": "인터페이스 선언, Converter"
    },
    "OPEN_METEO": {
      "label": "Open-Meteo API 문서",
      "url": "https://open-meteo.com/en/docs",
      "detail": "forecast 매개변수, timezone, WMO weather code"
    },
    "M3_DIALOG": {
      "label": "Android 공식: Compose Dialog",
      "url": "https://developer.android.com/develop/ui/compose/components/dialog",
      "detail": "AlertDialog"
    },
    "M3_DATEPICKER": {
      "label": "Android 공식: Compose Date picker",
      "url": "https://developer.android.com/develop/ui/compose/components/datepickers",
      "detail": "DatePicker, DatePickerDialog"
    },
    "M3_SNACKBAR": {
      "label": "Android 공식: Compose Snackbar",
      "url": "https://developer.android.com/develop/ui/compose/components/snackbar",
      "detail": "SnackbarHost, showSnackbar"
    },
    "ANDROID_NOTIFICATION": {
      "label": "Android 공식: 알림 런타임 권한",
      "url": "https://developer.android.com/develop/ui/compose/notifications/notification-permission",
      "detail": "Android 13+ POST_NOTIFICATIONS"
    },
    "NOTIFICATION_BUILD": {
      "label": "Android 공식: 알림 만들기",
      "url": "https://developer.android.com/develop/ui/views/notifications/build-notification",
      "detail": "NotificationCompat, 채널, PendingIntent"
    },
    "ANDROID_ALARM": {
      "label": "Android 공식: AlarmManager/정확한 알람",
      "url": "https://developer.android.com/develop/background-work/services/alarms",
      "detail": "정확한 알람 정책과 권한"
    },
    "WORKMANAGER_DOCS": {
      "label": "Android 공식: WorkManager",
      "url": "https://developer.android.com/develop/background-work/background-tasks/persistent",
      "detail": "지속적 작업, 제약 조건, 재시도"
    },
    "PHOTO_PICKER": {
      "label": "Android 공식: Photo Picker",
      "url": "https://developer.android.com/training/data-storage/shared/photopicker",
      "detail": "PickVisualMedia, URI 접근 권한"
    },
    "FILEPROVIDER": {
      "label": "Android 공식: 파일 공유 설정(FileProvider)",
      "url": "https://developer.android.com/training/secure-file-sharing/setup-sharing",
      "detail": "content URI, file_paths.xml"
    },
    "COIL": {
      "label": "Coil 공식 문서: Compose",
      "url": "https://coil-kt.github.io/coil/compose/",
      "detail": "AsyncImage"
    },
    "PERMISSIONS_DOCS": {
      "label": "Android 공식: 런타임 권한 요청",
      "url": "https://developer.android.com/training/permissions/requesting",
      "detail": "요청 흐름, 이유 설명, 거부 처리"
    },
    "FIREBASE_SETUP": {
      "label": "Firebase 공식: Android 프로젝트에 추가",
      "url": "https://firebase.google.com/docs/android/setup",
      "detail": "google-services.json, BoM"
    },
    "FIREBASE_KTX": {
      "label": "Firebase 공식: Kotlin 메인 모듈 이전",
      "url": "https://firebase.google.com/docs/android/kotlin-migration",
      "detail": "2025년 KTX 모듈 중단"
    },
    "FIRESTORE_RULES": {
      "label": "Firebase 공식: Security Rules 시작하기",
      "url": "https://firebase.google.com/docs/firestore/security/get-started",
      "detail": "사용자별 접근 제한, 테스트"
    },
    "FIRESTORE_OFFLINE": {
      "label": "Firebase 공식: Firestore 오프라인 데이터",
      "url": "https://firebase.google.com/docs/firestore/manage-data/enable-offline",
      "detail": "오프라인 캐시 동작"
    },
    "MAPS": {
      "label": "Google Maps 공식: Maps Compose",
      "url": "https://developers.google.com/maps/documentation/android-sdk/maps-compose",
      "detail": "GoogleMap 및 Marker"
    },
    "MAPS_KEY": {
      "label": "Google Maps 공식: API 키 발급과 제한",
      "url": "https://developers.google.com/maps/documentation/android-sdk/get-api-key",
      "detail": "패키지 이름·SHA-1 제한"
    },
    "MAPS_SECRETS": {
      "label": "Google Maps 공식: Secrets Gradle Plugin",
      "url": "https://developers.google.com/maps/documentation/android-sdk/secrets-gradle-plugin",
      "detail": "local.properties로 키 숨기기"
    },
    "LOGCAT_DOCS": {
      "label": "Android 공식: Logcat",
      "url": "https://developer.android.com/studio/debug/logcat",
      "detail": "로그 필터, 크래시 확인"
    },
    "TESTING_DOCS": {
      "label": "Android 공식: 테스트 기본사항",
      "url": "https://developer.android.com/training/testing/fundamentals",
      "detail": "단위 테스트와 계측 테스트"
    },
    "COROUTINES_TEST": {
      "label": "Android 공식: 코루틴 테스트",
      "url": "https://developer.android.com/kotlin/coroutines/test",
      "detail": "runTest, Main Dispatcher 교체"
    },
    "COMPOSE_TEST": {
      "label": "Android 공식: Compose 레이아웃 테스트",
      "url": "https://developer.android.com/develop/ui/compose/testing",
      "detail": "createComposeRule, onNodeWithText"
    },
    "GIT_IGNORE": {
      "label": "GitHub Docs: 파일 무시하기",
      "url": "https://docs.github.com/ko/get-started/git-basics/ignoring-files",
      "detail": ".gitignore 작성"
    }
  }
}
;
