#!/usr/bin/env python3


# Add src to path for import
sys.path.append(os.path.join(os.path.dirname(__file__), '..', 'src'))

from git_simulator import GitWorkflowSimulator

def demonstrate_git_workflow():
    """Demonstrate complete Git workflow cycle"""
    print("🐍 Python Git Workflow Demonstration")
    print("=" * 50)
    
    # Initialize project
    project = GitWorkflowSimulator("Learning Git with Python")
    print(f"📁 Project '{project.project_name}' created\n")
    
    # Step 1: Create some files
    print("1. 📝 Creating project files...")
    project.create_file("main.py", "# Main application code")
    project.create_file("utils.py", "# Utility functions")
    project.create_file("README.md", "# Project documentation")
    
    # Step 2: Check status
    print("\n2. 📊 Checking project status:")
    status = project.status()
    print(f"   Staged files: {status['staged_files']}")
    print(f"   Untracked files: {status['untracked_files']}")
    print(f"   Total commits: {status['total_commits']}")
    
    # Step 3: Add files to staging
    print("\n3. ✅ Staging files (git add equivalent)...")
    print(f"   {project.add('main.py', 'utils.py')}")
    
    # Step 4: Check status after add
    print("\n4. 📊 Status after staging:")
    status = project.status()
    print(f"   Staged files: {status['staged_files']}")
    print(f"   Untracked files: {status['untracked_files']}")
    
    # Step 5: Make first commit
    print("\n5. 💾 Making first commit...")
    commit_result = project.commit("feat: add main application structure")
    print(f"   Commit: {commit_result['commit']['message']}")
    print(f"   Files: {commit_result['files_committed']}")
    
    # Step 6: Add more files and commit
    print("\n6. 🔄 Continuing workflow...")
    project.add("README.md")
    project.commit("docs: add project documentation")
    
    # Create and commit another file
    project.create_file("config.py", "# Configuration settings")
    project.add("config.py")
    project.commit("feat: add configuration module")
    
    # Step 7: Show final history
    print("\n7. 📜 Final commit history:")
    print(project.log())
    
    print("\n🎉 Git workflow demonstration completed!")

if __name__ == "__main__":
    demonstrate_git_workflow()
