// 스크롤 이펙트: 진행도 바, 섹션 애니메이션, 헤더 축소

document.addEventListener('DOMContentLoaded', () => {
    const progressBar = document.getElementById('progress-bar');
    const header = document.querySelector('header');
    const sectionContents = document.querySelectorAll('.section-content');

    // 1. 스크롤 진행도 바
    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        progressBar.style.width = `${Math.min(scrolled, 100)}%`;

        // 헤더 축소 효과
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 2. 섹션 진입 애니메이션 (IntersectionObserver)
    const animationOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // 지연 애니메이션 효과 (각 요소마다 약간의 딜레이)
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 50); // 50ms 간격

                // 한 번만 애니메이션 하도록 관찰 중지
                animationObserver.unobserve(entry.target);
            }
        });
    }, animationOptions);

    // 모든 섹션 콘텐츠 관찰
    sectionContents.forEach(content => {
        animationObserver.observe(content);
    });

    // 3. 스크롤 끝에 도달했을 때 감지
    window.addEventListener('scroll', () => {
        const isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;

        if (isAtBottom) {
            // 페이지 끝 도달 시 처리 (선택사항)
            // 예: 추가 콘텐츠 로드, 메시지 표시 등
        }
    });
});

// 페이지 로드 완료 후 초기 애니메이션
window.addEventListener('load', () => {
    // 스크롤 위치에 따라 이미 보이는 섹션 애니메이션 적용
    const sectionContents = document.querySelectorAll('.section-content');
    sectionContents.forEach((content) => {
        const rect = content.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            content.classList.add('visible');
        }
    });
});
