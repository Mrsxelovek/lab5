// Основной модуль проекта
class ProjectManager {
    constructor(name) {
        this.projectName = name;
        this.commits = [];
    }

    // Добавление коммита в историю
    addCommit(message, files = []) {
        const commit = {
            id: this.commits.length + 1,
            message: message,
            files: files,
            timestamp: new Date().toISOString()
        };
        this.commits.push(commit);
        return commit;
    }

    // Получение истории коммитов
    getCommitHistory() {
        return this.commits.map(commit => 
            `#${commit.id}: ${commit.message} (${new Date(commit.timestamp).toLocaleString()})`
        );
    }
}

// Создание экземпляра проекта
const myProject = new ProjectManager("Git Workflow Practice");

// Пример использования
console.log("🚀 Git Workflow Project Started!");
module.exports = ProjectManager;
