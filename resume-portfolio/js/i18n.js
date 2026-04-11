// 다국어 지원 (한국어, 영어, 일본어)

const translations = {
    ko: {
        // 히어로 섹션
        'hero.title': '한국에서 온\n풀스택 개발자',
        'hero.description': '사용자 중심의 웹 애플리케이션을 개발하는 개발자입니다.\n매일 더 나은 코드를 만들기 위해 노력합니다,',

        // 네비게이션
        'nav.about': '자기소개',
        'nav.experience': '경력',
        'nav.skills': '기술',
        'nav.projects': '프로젝트',
        'nav.contact': '연락처',
        'btn.resume': '이력서 보기',

        // 자기소개 섹션
        'about.role': '풀스택 웹 개발자',
        'about.description': '사용자 중심의 웹 애플리케이션을 개발하는 개발자입니다.\n현대적이고 효율적인 기술 스택으로 문제를 해결하고,\n지속적인 성장을 추구합니다.',
        'about.nationality_label': '국적:',
        'about.nationality_value': '대한민국',
        'about.languages_label': '언어:',
        'about.languages_value': '한국어 (원어민), 영어 (비즈니스 레벨)',

        // 경력사항 섹션
        'experience.title': '경력사항',
        'experience.job1.title': '시니어 프론트엔드 개발자',
        'experience.job1.period': '2022 ~ 현재',
        'experience.job1.company': '테크스타트업',
        'experience.job1.description': 'React, TypeScript 기반 대규모 프로젝트 개발 및 팀 리드',
        'experience.job2.title': '풀스택 개발자',
        'experience.job2.period': '2020 ~ 2022',
        'experience.job2.company': '웹에이전시',
        'experience.job2.description': '프론트엔드 및 백엔드 개발, 클라이언트 요구사항 분석 및 구현',
        'experience.job3.title': '주니어 개발자',
        'experience.job3.period': '2018 ~ 2020',
        'experience.job3.company': '스타트업',
        'experience.job3.description': '웹 개발 기초 학습 및 단순 기능 개발',

        // 기술스택 섹션
        'skills.title': '기술스택',
        'skills.frontend': '프론트엔드',
        'skills.backend': '백엔드',
        'skills.other': '기타 도구',

        // 프로젝트 섹션
        'projects.title': '프로젝트',
        'projects.project1.title': '쇼핑몰 플랫폼',
        'projects.project1.description': 'React와 Node.js를 사용한 대규모 전자상거래 플랫폼. 사용자 인증, 상품 검색, 결제 시스템 등을 구현했습니다.',
        'projects.project2.title': '실시간 채팅 앱',
        'projects.project2.description': 'Socket.io를 이용한 실시간 메시징 애플리케이션. 사용자 관리, 채널 기능, 파일 공유 등의 기능을 포함합니다.',
        'projects.project3.title': '포트폴리오 이력서',
        'projects.project3.description': 'HTML5, Tailwind CSS, Vanilla JavaScript로 제작한 개인 포트폴리오. 반응형 디자인과 다크테마 지원이 특징입니다.',
        'projects.details': '자세히 보기',

        // 연락처 섹션
        'contact.title': '연락처',
        'contact.description': '프로젝트 제안이나 협업에 관심이 있으신가요? 언제든 연락 주세요!',

        // 푸터
        'footer.social': '소셜',
        'footer.links': '빠른 링크',
        'footer.info': '정보',
        'footer.info_text': '이 사이트는 HTML5, Tailwind CSS, 그리고 Vanilla JavaScript로 제작되었습니다.',
        'footer.copyright': '© 2024 김개발. All rights reserved.',
    },

    en: {
        // 히어로 섹션
        'hero.title': 'Developer\nfrom Korea',
        'hero.description': 'A developer who builds user-centric web applications.\nAlways striving for better code every day,',

        // 네비게이션
        'nav.about': 'About',
        'nav.experience': 'Experience',
        'nav.skills': 'Skills',
        'nav.projects': 'Projects',
        'nav.contact': 'Contact',
        'btn.resume': 'View Resume',

        // 자기소개 섹션
        'about.role': 'Full-Stack Web Developer',
        'about.description': 'A developer who builds user-centric web applications.\nSolving problems with modern and efficient tech stacks,\nalways striving for continuous growth.',
        'about.nationality_label': 'Nationality:',
        'about.nationality_value': 'South Korea',
        'about.languages_label': 'Languages:',
        'about.languages_value': 'Korean (Native), English (Business Level)',

        // 경력사항 섹션
        'experience.title': 'Experience',
        'experience.job1.title': 'Senior Frontend Developer',
        'experience.job1.period': '2022 ~ Present',
        'experience.job1.company': 'Tech Startup',
        'experience.job1.description': 'Led large-scale projects development and team lead based on React and TypeScript',
        'experience.job2.title': 'Full-Stack Developer',
        'experience.job2.period': '2020 ~ 2022',
        'experience.job2.company': 'Web Agency',
        'experience.job2.description': 'Frontend and backend development, client requirements analysis and implementation',
        'experience.job3.title': 'Junior Developer',
        'experience.job3.period': '2018 ~ 2020',
        'experience.job3.company': 'Startup',
        'experience.job3.description': 'Learning web development fundamentals and implementing basic features',

        // 기술스택 섹션
        'skills.title': 'Skills',
        'skills.frontend': 'Frontend',
        'skills.backend': 'Backend',
        'skills.other': 'Other Tools',

        // 프로젝트 섹션
        'projects.title': 'Projects',
        'projects.project1.title': 'E-Commerce Platform',
        'projects.project1.description': 'Large-scale e-commerce platform built with React and Node.js. Implemented user authentication, product search, and payment systems.',
        'projects.project2.title': 'Real-time Chat App',
        'projects.project2.description': 'Real-time messaging application using Socket.io. Includes user management, channel features, and file sharing.',
        'projects.project3.title': 'Portfolio Resume',
        'projects.project3.description': 'Personal portfolio built with HTML5, Tailwind CSS, and Vanilla JavaScript. Features responsive design and dark theme support.',
        'projects.details': 'View Details',

        // 연락처 섹션
        'contact.title': 'Contact',
        'contact.description': 'Interested in project proposals or collaboration? Feel free to reach out anytime!',

        // 푸터
        'footer.social': 'Social',
        'footer.links': 'Quick Links',
        'footer.info': 'About',
        'footer.info_text': 'This site is built with HTML5, Tailwind CSS, and Vanilla JavaScript.',
        'footer.copyright': '© 2024 Kim Dev. All rights reserved.',
    },

    ja: {
        // 히어로 섹션
        'hero.title': '韓国発の\nフルスタック開発者',
        'hero.description': 'ユーザー中心のWebアプリを開発するエンジニアです。\nより良いコードを目指して日々努力しています,',

        // 네비게이션
        'nav.about': '自己紹介',
        'nav.experience': '経歴',
        'nav.skills': 'スキル',
        'nav.projects': 'プロジェクト',
        'nav.contact': '連絡先',
        'btn.resume': '履歴書を表示',

        // 자기소개 섹션
        'about.role': 'フルスタック Webデベロッパー',
        'about.description': 'ユーザー中心のWebアプリケーションを開発するエンジニアです。\nモダンで効率的な技術スタックで問題を解決し、\n継続的な成長を追求しています。',
        'about.nationality_label': '国籍:',
        'about.nationality_value': '大韓民国',
        'about.languages_label': '言語:',
        'about.languages_value': '韓国語（ネイティブ）、英語（ビジネスレベル）',

        // 경력사항 섹션
        'experience.title': '職務経歴',
        'experience.job1.title': 'シニア フロントエンド開発者',
        'experience.job1.period': '2022 ~ 現在',
        'experience.job1.company': 'テックスタートアップ',
        'experience.job1.description': 'ReactとTypeScriptを用いた大規模プロジェクトの開発およびチームリード',
        'experience.job2.title': 'フルスタック開発者',
        'experience.job2.period': '2020 ~ 2022',
        'experience.job2.company': 'Webエージェンシー',
        'experience.job2.description': 'フロントエンド・バックエンド開発、クライアント要件の分析と実装',
        'experience.job3.title': 'ジュニア開発者',
        'experience.job3.period': '2018 ~ 2020',
        'experience.job3.company': 'スタートアップ',
        'experience.job3.description': 'Web開発の基礎学習と基本機能の実装',

        // 기술스택 섹션
        'skills.title': 'スキルセット',
        'skills.frontend': 'フロントエンド',
        'skills.backend': 'バックエンド',
        'skills.other': 'その他のツール',

        // 프로젝트 섹션
        'projects.title': 'プロジェクト',
        'projects.project1.title': 'ECプラットフォーム',
        'projects.project1.description': 'ReactとNode.jsで構築した大規模ECプラットフォーム。ユーザー認証、商品検索、決済システムなどを実装。',
        'projects.project2.title': 'リアルタイムチャットアプリ',
        'projects.project2.description': 'Socket.ioを使ったリアルタイムメッセージングアプリ。ユーザー管理、チャンネル機能、ファイル共有などを含む。',
        'projects.project3.title': 'ポートフォリオ履歴書',
        'projects.project3.description': 'HTML5、Tailwind CSS、Vanilla JavaScriptで制作した個人ポートフォリオ。レスポンシブデザインとダークテーマに対応。',
        'projects.details': '詳細を見る',

        // 연락처 섹션
        'contact.title': 'お問い合わせ',
        'contact.description': 'プロジェクトのご提案やコラボレーションに興味がありますか？いつでもご連絡ください！',

        // 푸터
        'footer.social': 'ソーシャル',
        'footer.links': 'クイックリンク',
        'footer.info': '情報',
        'footer.info_text': 'このサイトはHTML5、Tailwind CSS、Vanilla JavaScriptで制作されています。',
        'footer.copyright': '© 2024 キム・デブ. All rights reserved.',
    }
};

const LANG_KEY = 'lang-preference';

// 언어 적용 함수
function applyLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const text = translations[lang]?.[key];
        if (text) {
            // 줄바꿈 처리 (\n → <br>)
            el.innerHTML = text.replace(/\n/g, '<br>');
        }
    });

    // HTML lang 속성 업데이트
    document.documentElement.lang = lang;

    // localStorage 저장
    localStorage.setItem(LANG_KEY, lang);

    // 언어 선택 드롭다운 동기화
    const select = document.getElementById('language-select');
    if (select) select.value = lang;
}

// 언어 적용 시 모든 드롭다운 동기화
function syncSelects(lang) {
    document.querySelectorAll('select[id^="language-select"]').forEach(sel => {
        sel.value = lang;
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // 저장된 언어 또는 기본값(ko) 적용
    const savedLang = localStorage.getItem(LANG_KEY) || 'ko';
    applyLanguage(savedLang);
    syncSelects(savedLang);

    // 모든 언어 드롭다운에 이벤트 등록
    document.querySelectorAll('select[id^="language-select"]').forEach(sel => {
        sel.addEventListener('change', () => {
            applyLanguage(sel.value);
            syncSelects(sel.value);
        });
    });
});
