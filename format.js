/* 본문 강조(rich)와 코드 색상(highlight). 외부 라이브러리 없이 오프라인에서도 동작합니다.
   data.json 본문에서 직접 쓸 수 있는 표시:
     **굵게**   ==형광 강조==   ^^경고 강조^^   `인라인 코드`
   표시가 없어도 API 이름·어노테이션·상수·파일명·‘따옴표 용어’·경고 단어는 자동으로 강조됩니다. */
(()=>{'use strict';
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const notCode=new Set(['GitHub','JetBrains','YouTube','iOS','macOS','iPhone','iPad','JavaScript','TypeScript','PowerShell','OpenWeatherMap','ChatGPT','OAuth','PDFs','IntelliJ']);
const kw='val|var|fun|suspend|lateinit|null|data class|sealed interface|sealed class|object|companion object|private|internal|override|by lazy|when|try|catch';

/* ---------- 본문 강조 ---------- */
const inlineRe=new RegExp([
 '`([^`]+)`',                                   // 1 수동 코드
 '\\*\\*([^*]+)\\*\\*',                         // 2 수동 굵게
 '==([^=]+)==',                                 // 3 수동 형광
 '\\^\\^([^^]+)\\^\\^',                         // 4 수동 경고 ^^…^^
 '‘([^’]{1,40})’',                              // 5 따옴표 용어
 '(@[A-Z][A-Za-z]*)',                           // 6 어노테이션
 '(\\b[A-Za-z][\\w-]*\\.(?:kts|kt|xml|toml|json|properties|gradle|jks|md|html|js|css)\\b)', // 7 파일명
 '(\\b[A-Za-z_]\\w*(?:\\.[A-Za-z_]\\w*)*\\((?:\\.\\.\\.|…)?\\))',     // 8 함수 호출 foo() foo(...)
 '(\\b[A-Za-z_]\\w*(?:\\.[A-Za-z_]\\w*)+\\b)',  // 9 점 표기 Dispatchers.IO
 '(\\b[A-Z][A-Z0-9]*_[A-Z0-9_]+\\b)',           // 10 상수 POST_NOTIFICATIONS
 '(\\b[a-z]+[A-Z][A-Za-z0-9]*\\b)',             // 11 lowerCamel
 '(\\b[A-Z][a-z0-9]+[A-Z][A-Za-z0-9]*\\b)',     // 12 UpperCamel
 '(\\b[A-Z][a-z]+\\?(?![\\w?]))',               // 13 nullable 타입 String?
 '(\\?\\.|\\?:|!!(?![!\\w]))',                // 14 연산자
 '(\\b(?:'+kw+')\\b)',                          // 15 키워드
 '(반드시|절대|금지|주의|필수|위험|크래시|노출|유출|하면 안 됩니다|안 됩니다|하지 마세요)', // 16 경고어
 '(권장|기본으로|가능한 한)',                    // 17 권장어
 '(→)'                                          // 18 화살표
].join('|'),'g');
function inline(s){
 s=String(s??'');let out='',last=0,m;const re=new RegExp(inlineRe.source,'g');
 while((m=re.exec(s))){
  out+=esc(s.slice(last,m.index));last=re.lastIndex;const t=m[0];
  if(m[1])out+=`<code class="ic">${esc(m[1])}</code>`;
  else if(m[2])out+=`<strong>${inline(m[2])}</strong>`;
  else if(m[3])out+=`<mark>${inline(m[3])}</mark>`;
  else if(m[4])out+=`<strong class="warn">${inline(m[4])}</strong>`;
  else if(m[5])out+=`<strong class="term">‘${inline(m[5])}’</strong>`;
  else if(m[6])out+=`<code class="ic ic-ann">${esc(t)}</code>`;
  else if(m[7])out+=`<code class="ic ic-file">${esc(t)}</code>`;
  else if(m[8]||m[9])out+=`<code class="ic">${esc(t)}</code>`;
  else if(m[10])out+=`<code class="ic ic-const">${esc(t)}</code>`;
  else if(m[11]||m[12])out+=notCode.has(t)?esc(t):`<code class="ic">${esc(t)}</code>`;
  else if(m[13]||m[14]||m[15])out+=`<code class="ic ic-kw">${esc(t)}</code>`;
  else if(m[16])out+=`<strong class="warn">${esc(t)}</strong>`;
  else if(m[17])out+=`<strong class="good">${esc(t)}</strong>`;
  else if(m[18])out+=`<span class="arrow">→</span>`;
  else out+=esc(t);
 }
 return out+esc(s.slice(last));
}
/* lead: 'label' = "용어: 설명"의 용어를 굵게, 'sentence' = 첫 문장을 굵게 */
function rich(s,lead){
 s=String(s??'');
 if(lead!=='none'){
  const lm=s.match(/^([^:：。.?!]{2,28})[:：]\s+/);
  if(lm&&!/[`(]/.test(lm[1]))return `<strong class="lead">${inline(lm[1])}</strong>: `+inline(s.slice(lm[0].length));
 }
 if(lead==='sentence'){
  const sm=s.match(/^(.{8,}?(?:다|요|니다|함|음)\.)(\s+)([\s\S]+)$/);
  if(sm)return `<strong class="lead">${inline(sm[1])}</strong>${sm[2]}${inline(sm[3])}`;
 }
 return inline(s);
}

/* ---------- 코드 색상 ---------- */
const kotlinKw=new Set('package import class interface object fun val var return if else when for while do in is as by get set this super null true false try catch finally throw suspend override private public protected internal open abstract sealed data enum companion inline reified lateinit const typealias operator infix vararg init constructor where out annotation crossinline noinline tailrec external value break continue it'.split(' '));
const tokRe=new RegExp([
 '(/\\*[\\s\\S]*?\\*/|//[^\\n]*|<!--[\\s\\S]*?-->|(?:^|(?<=\\n))[ \\t]*#[^\\n]*)', // 1 주석 (//, /* */, <!-- -->, 줄 시작 #)
 '("""[\\s\\S]*?"""|"(?:\\\\.|[^"\\\\\\n])*"|\'(?:\\\\.|[^\'\\\\\\n])\')',            // 2 문자열
 '(<[가-힣][^<>\\n]*>)',                                                              // 3 <버전> 자리표시
 '(</?[a-z][\\w:.-]*|/>)',                                                            // 4 XML 태그
 '(\\b[a-z]+:[A-Za-z_]+(?==))',                                                       // 5 XML 속성 android:name=
 '(@[A-Za-z][\\w]*(?:[:/][\\w.]+)?)',                                                 // 6 어노테이션·리소스
 '(\\b(?:0x[0-9a-fA-F]+|\\d+(?:\\.\\d+)*(?:dp|sp|ms|[LlFf])?)\\b)',                              // 7 숫자
 '(\\b[A-Z][A-Z0-9_]{2,}\\b)',                                                        // 8 상수
 '(\\b[A-Z]\\w*)',                                                                    // 9 타입·컴포저블
 '(\\b[a-z_]\\w*(?=\\s*[({]))',                                                       // 10 함수 호출
 '(\\b[a-z_]\\w*\\b)',                                                                // 11 식별자/키워드
 '(->|=>|\\?:|\\?\\.|!!|::|==|!=|&&|\\|\\||[-+*/%]?=|→)',                             // 12 연산자
 '(\\[[\\w.-]+\\])'                                                                   // 13 toml 섹션
].join('|'),'g');
const span=(c,t)=>`<span class="tk-${c}">${esc(t)}</span>`;
function strTok(t){
 // 문자열 안의 $변수, ${식}, <버전> 자리표시를 따로 표시
 return '<span class="tk-str">'+t.split(/(\$\{[^}]*\}|\$[A-Za-z_]\w*|<[가-힣][^<>]*>)/).map((p,i)=>i%2?(p[0]==='<'?span('ph',p):span('tpl',p)):esc(p)).join('')+'</span>';
}
function highlight(src){
 src=String(src??'');let out='',last=0,m;tokRe.lastIndex=0;
 while((m=tokRe.exec(src))){
  if(!m[0]){tokRe.lastIndex++;continue}
  out+=esc(src.slice(last,m.index));last=tokRe.lastIndex;const t=m[0];
  if(m[1])out+=span('com',t);
  else if(m[2])out+=strTok(t);
  else if(m[3])out+=span('ph',t);
  else if(m[4])out+=span('tag',t);
  else if(m[5])out+=span('attr',t);
  else if(m[6])out+=span('ann',t);
  else if(m[7])out+=span('num',t);
  else if(m[8])out+=span('const',t);
  else if(m[9])out+=span('type',t);
  else if(m[10])out+=kotlinKw.has(t)?span('kw',t):span('fn',t);
  else if(m[11])out+=kotlinKw.has(t)?span('kw',t):esc(t);
  else if(m[12])out+=span('op',t);
  else if(m[13])out+=span('kw',t);
  else out+=esc(t);
 }
 return out+esc(src.slice(last));
}
window.GuideFormat={esc,rich,inline,highlight};
})();
