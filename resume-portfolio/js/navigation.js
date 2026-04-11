// 네비게이션 스무스 스크롤 및 활성 섹션 하이라이트

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');

    // 1. 스무스 스크롤 네비게이션
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // 앵커 링크가 아닌 경우만 처리
            if (link.getAttribute('href').startsWith('#')) {
                e.preventDefault();

                const targetId = link.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);

                if (targetSection) {
                    // 모바일 메뉴 닫기
                    mobileMenu.classList.add('hidden');

                    // 스크롤 애니메이션
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });

                    // 활성 링크 업데이트
                    updateActiveLink(targetId);
                }
            }
        });
    });

    // 2. 활성 섹션 하이라이트 (IntersectionObserver)
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '-80px 0px -50% 0px'
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.id;
                updateActiveLink(sectionId);
            }
        });
    }, observerOptions);

    // 모든 섹션 관찰
    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // 활성 링크 업데이트 함수
    function updateActiveLink(sectionId) {
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${sectionId}`) {
                link.classList.add('active');
            }
        });
    }

    // 3. 모바일 햄버거 메뉴 토글
    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');

        // 아이콘 변경
        const icon = menuToggle.querySelector('i');
        if (mobileMenu.classList.contains('hidden')) {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        } else {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        }
    });

    // 모바일 메뉴 항목 클릭 시 메뉴 닫기
    const mobileNavLinks = mobileMenu.querySelectorAll('a');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            menuToggle.querySelector('i').classList.remove('fa-times');
            menuToggle.querySelector('i').classList.add('fa-bars');
        });
    });

    // 4. 화면 크기 변경 시 모바일 메뉴 초기화
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768) {
            mobileMenu.classList.add('hidden');
            menuToggle.querySelector('i').classList.remove('fa-times');
            menuToggle.querySelector('i').classList.add('fa-bars');
        }
    });
});
