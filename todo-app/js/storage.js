// localStorage 관련 함수들

const STORAGE_KEY = 'todo-app-todos';

// 모든 할일 로드
function loadTodos() {
    try {
        const data = localStorage.getItem(STORAGE_KEY);
        return data ? JSON.parse(data) : [];
    } catch (error) {
        console.error('할일 로드 실패:', error);
        return [];
    }
}

// 할일 저장
function saveTodos(todos) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    } catch (error) {
        console.error('할일 저장 실패:', error);
    }
}

// 새로운 할일 생성
function createTodo(text, priority = 'medium') {
    return {
        id: `todo-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        text: text,
        completed: false,
        priority: priority,
        createdAt: Date.now()
    };
}
