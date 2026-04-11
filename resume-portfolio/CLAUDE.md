# CLAUDE.md (resume-portfolio)

프로젝트별 상세 가이드. 공통 규칙은 최상단 `CLAUDE.md`를 참고하세요.

## 프로젝트 구조

### 프로젝트 개요
개인 포트폴리오용 반응형 웹 이력서 페이지입니다. 모던한 디자인으로 개발자의 경력, 기술스택, 프로젝트 경험을 효과적으로 전시하는 원페이지 이력서입니다.

### 기술 스택
| 분야 | 기술 |
|------|------|
| 마크업 | HTML5 (시맨틱 요소) |
| 스타일 | Tailwind CSS + CSS3 |
| 인터랙션 | Vanilla JavaScript |
| 아이콘 | Font Awesome / SVG |

### 계획된 프로젝트 구조
```
.
├── index.html              # 메인 HTML (HTML5 시맨틱 구조)
├── styles/
│   └── tailwind.css        # Tailwind CSS 커스터마이징
├── js/
│   ├── navigation.js       # 네비게이션 기능 (스무스 스크롤)
│   ├── scroll.js           # 스크롤 이펙트 (진행도 표시)
│   └── theme.js            # 다크/라이트 테마 전환
├── assets/
│   ├── images/             # 프로필, 프로젝트 이미지
│   └── icons/              # SVG 아이콘
├── CLAUDE.md               # 이 파일
└── README.md               # 배포 및 사용 설명서
```

## 핵심 개념

### 원페이지 아키텍처
이력서는 단일 HTML 페이지로 구성되며, JavaScript로 섹션 간 네비게이션을 구현합니다. 즉:
- **모든 콘텐츠가 한 페이지**에 로드됨
- **스크롤 네비게이션**으로 섹션 이동
- **클라이언트 사이드**에서만 동작 (백엔드 불필요)

### 반응형 설계 원칙
- **모바일 우선**: CSS를 모바일 화면 기준으로 작성한 후 `@media` 쿼리로 확대
- **Tailwind CSS**: 유틸리티 클래스 기반의 빠른 개발
- **접근성**: ARIA 레이블과 시맨틱 HTML로 스크린 리더 지원

### 시맨틱 구조
HTML5 시맨틱 요소(`<header>`, `<section>`, `<article>`, `<nav>`, `<footer>`)를 사용하여 문서 구조를 명확히 합니다. 이는 SEO와 접근성 향상에 기여합니다.

## 주요 파일

- **index.html**: 메인 페이지 구조. 변경 시 전체 레이아웃에 영향을 줌. 시맨틱 HTML5 요소 준수 필수.
- **styles/tailwind.css**: Tailwind 커스터마이징. 디자인 시스템 변경 시 참조.
- **js/navigation.js**: 네비게이션 로직. 섹션 ID와 링크 연결이 중요.

## 개발 워크플로우

### 개발 단계별 진행 (ROADMAP.md 참조)

**Phase 1: 기초 개발**
1. HTML 시맨틱 구조 작성 (header, nav, main 섹션들)
2. 기본 Tailwind CSS 설정
3. 반응형 그리드 레이아웃 구현

**Phase 2: 스타일링 및 인터랙션**
1. Tailwind CSS로 전체 스타일링
2. JavaScript로 이벤트 처리 (스크롤, 호버 등)
3. 스크롤 애니메이션 (섹션 진입 시 나타나기 효과)
4. 다크테마 토글 기능

**Phase 3: 콘텐츠 및 최적화**
1. 실제 이력서 콘텐츠 입력
2. 이미지 최적화 (WebP 포맷, 반응형 이미지)
3. SEO 메타태그 추가 (`og:` 태그, 구조화된 데이터)
4. 크로스 브라우저 테스트

**Phase 4: 배포**
1. GitHub Pages / Vercel 배포
2. 최종 성능 최적화
3. 프로덕션 환경에서 테스트

### 일반적인 패턴

**섹션 마크업 패턴**
```html
<section id="section-name" class="py-12 md:py-20">
    <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-8">섹션 제목</h2>
        <!-- 섹션 콘텐츠 -->
    </div>
</section>
```

**JavaScript 이벤트 처리**
- 모든 DOM 쿼리는 `querySelector`/`querySelectorAll` 사용
- 이벤트 리스너는 페이지 로드 후 등록 (DOMContentLoaded 이벤트)
- 애니메이션은 가능한 CSS 트랜지션으로 구현

### 테스트 요구사항

- **반응형 테스트**: 모바일(375px), 태블릿(768px), 데스크톱(1024px+)에서 확인
- **브라우저 호환성**: Chrome, Firefox, Safari, Edge 최신 버전
- **성능**: Lighthouse 성능 점수 80점 이상 목표
- **접근성**: WCAG 2.1 AA 레벨 준수

### 커밋 메시지 규칙

기능별로 커밋하되, 의미 있는 단위로 나눕니다:
- 기초 구조 작성 → `feat: HTML 기본 레이아웃 구성`
- 스타일 추가 → `style: 헤더 섹션 디자인 적용`
- 기능 구현 → `feat: 스무스 스크롤 네비게이션 구현`
- 버그 수정 → `fix: 모바일 반응형 레이아웃 버그`

## 향후 작업 노트

### 배포 전 체크리스트
- [ ] 모든 외부 링크(GitHub, LinkedIn 등) 동작 확인
- [ ] 이미지 최적화 완료
- [ ] 모바일 UX 최종 점검 (터치 대상 최소 44x44px)
- [ ] 성능 프로파일링 완료

### 향후 확장 기능 (옵션)
- 다국어 지원 (한/영)
- PDF 이력서 다운로드 기능
- 연락 폼 (또는 외부 서비스 연동)
- 프로젝트 필터링 UI

### 주의사항
1. **접근성**: 모든 인터랙티브 요소에 적절한 `role`, `aria-label` 추가
2. **성능**: 이미지 최적화 필수. JavaScript 번들 최소화.
3. **유지보수**: 컴포넌트별로 JS 파일 분리하여 가독성 확보

---

**참고**: ROADMAP.md에서 전체 프로젝트 계획을 확인할 수 있습니다.
