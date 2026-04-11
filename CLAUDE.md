# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 언어 및 커뮤니케이션 규칙

- **기본 응답 언어**: 한국어
- **코드 주석**: 한국어로 작성
- **커밋 메시지**: 한국어로 작성
- **문서화**: 한국어로 작성
- **변수명/함수명**: 영어 (코드 표준 준수)

모든 코드, 주석, 문서, 커밋 메시지는 이 규칙을 따릅니다.

## 빠른 시작

### 주요 명령어

**로컬 개발 서버 실행 (Live Server)**

**방법 1: VS Code 확장 (권장)**
1. VS Code에서 "Live Server" 확장 설치
2. HTML 파일에서 우클릭 → "Open with Live Server"
3. 브라우저가 자동 실행됨 (기본값: `http://127.0.0.1:5500`)

**방법 2: npm으로 설치**
```bash
# 전역 설치
npm install -g live-server

# 프로젝트 디렉토리에서 실행
live-server
```
브라우저에서 `http://127.0.0.1:8080` (또는 표시된 포트)로 접속

**Tailwind CSS 설정** (향후 적용)
```bash
# Tailwind CSS 초기화 및 설정
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# 개발 모드에서 스타일 빌드
npm run dev

# 프로덕션 빌드
npm run build
```

---

**프로젝트별 CLAUDE.md 참조**: 각 프로젝트 디렉토리의 CLAUDE.md에서 프로젝트별 상세 가이드를 확인하세요.
