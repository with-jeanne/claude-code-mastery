// 다크/라이트 테마 전환 기능

document.addEventListener('DOMContentLoaded', () => {
    const htmlElement = document.documentElement;
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const STORAGE_KEY = 'theme-preference';

    // 저장된 테마 불러오기 또는 시스템 설정 사용
    function getThemePreference() {
        // localStorage에 저장된 값이 있으면 그 값을 사용
        const savedTheme = localStorage.getItem(STORAGE_KEY);
        if (savedTheme) {
            return savedTheme;
        }

        // 저장된 값이 없으면 시스템 다크모드 설정 확인
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }

        return 'light';
    }

    // 테마 적용 함수
    function applyTheme(theme) {
        if (theme === 'dark') {
            htmlElement.classList.add('dark');
            // 아이콘 토글: 달 → 태양
            if (themeIcon) {
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
            }
        } else {
            htmlElement.classList.remove('dark');
            // 아이콘 토글: 태양 → 달
            if (themeIcon) {
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
            }
        }
        localStorage.setItem(STORAGE_KEY, theme);
    }

    // 테마 토글 함수
    function toggleTheme() {
        const currentTheme = htmlElement.classList.contains('dark') ? 'dark' : 'light';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        applyTheme(newTheme);
    }

    // 초기 테마 설정
    const initialTheme = getThemePreference();
    applyTheme(initialTheme);

    // 테마 토글 버튼 이벤트 리스너
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', toggleTheme);
    }

    // 시스템 다크모드 설정 변경 감지
    if (window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            // localStorage에 저장된 값이 없을 때만 시스템 설정을 따름
            if (!localStorage.getItem(STORAGE_KEY)) {
                applyTheme(e.matches ? 'dark' : 'light');
            }
        });
    }

    // 현재 테마 상태 콘솔에 출력 (선택사항)
    console.log(`초기 테마: ${initialTheme}`);
});
