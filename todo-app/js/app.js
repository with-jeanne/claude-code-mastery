// TODO 앱 핵심 로직

let todos = [];
let currentFilter = 'all'; // 'all', 'active', 'completed'

// DOM 요소들
const todoInput = document.getElementById('todo-input');
const prioritySelect = document.getElementById('priority-select');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');
const emptyState = document.getElementById('empty-state');
const clearCompletedBtn = document.getElementById('clear-completed-btn');
const tabBtns = document.querySelectorAll('.tab-btn');
const totalCount = document.getElementById('total-count');
const activeCount = document.getElementById('active-count');
const completedCount = document.getElementById('completed-count');

// 우선순위 이모지 매핑
const priorityEmoji = {
    high: '🔴',
    medium: '🟡',
    low: '🟢'
};

// 초기화
function init() {
    todos = loadTodos();
    renderTodos();
    updateStats();

    // 이벤트 리스너
    addBtn.addEventListener('click', addTodo);
    todoInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addTodo();
    });
    todoList.addEventListener('click', handleListClick);
    todoList.addEventListener('dblclick', handleListDblClick);
    clearCompletedBtn.addEventListener('click', clearCompleted);
    tabBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            tabBtns.forEach(b => b.classList.remove('active'));
            e.target.closest('.tab-btn').classList.add('active');
            currentFilter = e.target.closest('.tab-btn').dataset.filter;
            renderTodos();
        });
    });
}

// 할일 추가
function addTodo() {
    const text = todoInput.value.trim();
    if (!text) return;

    const priority = prioritySelect.value;
    const newTodo = createTodo(text, priority);
    todos.unshift(newTodo);

    saveTodos(todos);
    renderTodos();
    updateStats();

    // 입력창 초기화
    todoInput.value = '';
    todoInput.focus();
}

// 할일 목록 렌더링
function renderTodos() {
    // 필터링
    let filteredTodos = todos;
    if (currentFilter === 'active') {
        filteredTodos = todos.filter(t => !t.completed);
    } else if (currentFilter === 'completed') {
        filteredTodos = todos.filter(t => t.completed);
    }

    // 목록이 비었는지 확인
    if (filteredTodos.length === 0) {
        todoList.innerHTML = '';
        emptyState.style.display = 'block';
        return;
    }

    emptyState.style.display = 'none';
    todoList.innerHTML = filteredTodos.map(todo => `
        <li class="todo-item ${todo.completed ? 'completed' : ''}" data-id="${todo.id}">
            <div class="flex items-center gap-3 p-4">
                <input type="checkbox" class="checkbox" ${todo.completed ? 'checked' : ''}>
                <span class="todo-text flex-1 text-base">${escapeHtml(todo.text)}</span>
                <span class="priority-badge priority-${todo.priority} text-lg">${priorityEmoji[todo.priority]}</span>
                <button class="delete-btn text-red-500 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 transition">
                    <i class="fas fa-trash-alt"></i>
                </button>
            </div>
        </li>
    `).join('');
}

// 목록 클릭 이벤트 (체크박스, 삭제)
function handleListClick(e) {
    const todoItem = e.target.closest('.todo-item');
    if (!todoItem) return;

    const todoId = todoItem.dataset.id;
    const todo = todos.find(t => t.id === todoId);
    if (!todo) return;

    // 체크박스 클릭
    if (e.target.classList.contains('checkbox')) {
        todo.completed = e.target.checked;
        saveTodos(todos);
        renderTodos();
        updateStats();
    }

    // 삭제 버튼 클릭
    if (e.target.closest('.delete-btn')) {
        todoItem.classList.add('deleting');
        setTimeout(() => {
            todos = todos.filter(t => t.id !== todoId);
            saveTodos(todos);
            renderTodos();
            updateStats();
        }, 300);
    }
}

// 더블클릭 인라인 수정
function handleListDblClick(e) {
    // 텍스트 부분을 더블클릭했을 때만
    if (!e.target.classList.contains('todo-text')) return;

    const todoItem = e.target.closest('.todo-item');
    const todoId = todoItem.dataset.id;
    const todo = todos.find(t => t.id === todoId);
    if (!todo) return;

    // 입력창으로 변경
    const textSpan = todoItem.querySelector('.todo-text');
    const originalText = textSpan.textContent;

    const input = document.createElement('input');
    input.type = 'text';
    input.value = originalText;
    input.className = 'flex-1 px-2 py-1 bg-white dark:bg-gray-700 border border-blue-500 rounded';

    textSpan.replaceWith(input);
    input.focus();
    input.select();

    // 저장 함수
    function savEdit() {
        const newText = input.value.trim();
        if (newText && newText !== originalText) {
            todo.text = newText;
            saveTodos(todos);
        }
        renderTodos();
    }

    // blur 또는 enter로 저장
    input.addEventListener('blur', savEdit);
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            input.blur();
        }
    });

    // esc로 취소
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            renderTodos();
        }
    });
}

// 완료된 항목 일괄 삭제
function clearCompleted() {
    if (confirm('완료된 항목을 모두 삭제하시겠습니까?')) {
        todos = todos.filter(t => !t.completed);
        saveTodos(todos);
        renderTodos();
        updateStats();
    }
}

// 통계 업데이트
function updateStats() {
    totalCount.textContent = todos.length;
    activeCount.textContent = todos.filter(t => !t.completed).length;
    completedCount.textContent = todos.filter(t => t.completed).length;
}

// HTML 이스케이프 (XSS 방지)
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// 앱 시작
init();
