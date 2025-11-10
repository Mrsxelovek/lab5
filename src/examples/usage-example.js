// Пример использования ProjectManager
const ProjectManager = require('../src/main');

// Создаем проект
const project = new ProjectManager("My Awesome Project");

// Симулируем рабочий цикл Git
console.log("🔄 Starting Git workflow simulation...");

// Статус: изменены файлы
console.log("1. 📊 Status: Files modified - ready for staging");

// Добавление в staging area (Add)
console.log("2. ✅ Add: Staging files for commit");

// Создание коммитов (Commit)
project.addCommit("feat: add initial project structure", ["src/main.js", "README.md"]);
project.addCommit("docs: add usage examples", ["examples/usage-example.js"]);
project.addCommit("fix: improve error handling in main module", ["src/main.js"]);

// Показываем историю
console.log("3. 💾 Commit: Changes saved to history");
console.log("\n📜 Commit History:");
console.log(project.getCommitHistory().join('\n'));

console.log("\n🎉 Git workflow completed successfully!");
