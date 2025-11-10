class GitWorkflowSimulator:
    def __init__(self, project_name):
        self.project_name = project_name
        self.staged_files = []
        self.commits = []
        self.untracked_files = []
    
    def status(self):
        """Simulate git status - show current state"""
        status_info = {
            'project': self.project_name,
            'staged_files': self.staged_files.copy(),
            'untracked_files': self.untracked_files.copy(),
            'total_commits': len(self.commits)
        }
        return status_info
    
    def add(self, *files):
        """Simulate git add - stage files for commit"""
        for file in files:
            if file in self.untracked_files:
                self.untracked_files.remove(file)
            if file not in self.staged_files:
                self.staged_files.append(file)
        return f"Staged {len(files)} file(s) for commit"
    
    def commit(self, message):
        """Simulate git commit - save changes to history"""
        if not self.staged_files:
            return "Error: No files staged for commit"
        
        commit_data = {
            'id': len(self.commits) + 1,
            'message': message,
            'files': self.staged_files.copy(),
            'timestamp': self._get_current_time(),
            'hash': self._generate_hash()
        }
        
        self.commits.append(commit_data)
        committed_files = self.staged_files.copy()
        self.staged_files.clear()
        
        return {
            'commit': commit_data,
            'files_committed': committed_files
        }
    
    def create_file(self, filename, content=""):
        """Create a new file in the project"""
        self.untracked_files.append(filename)
        return f"Created file: {filename}"
    
    def log(self):
        """Show commit history"""
        if not self.commits:
            return "No commits yet"
        
        log_output = [f"Commit history for '{self.project_name}':"]
        for commit in self.commits:
            log_output.append(
                f"commit {commit['hash']}\n"
                f"Author: Python Developer\n"
                f"Date:   {commit['timestamp']}\n"
                f"\n    {commit['message']}\n"
            )
        return '\n'.join(log_output)
    
    def _get_current_time(self):
        """Get current timestamp"""
        from datetime import datetime
        return datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    
    def _generate_hash(self):
        """Generate simple commit hash"""
        import hashlib
        import random
        random_str = str(random.random()) + str(len(self.commits))
        return hashlib.sha1(random_str.encode()).hexdigest()[:8]

# Demo instance
if __name__ == "__main__":
    project = GitWorkflowSimulator("Python Git Practice")
    print("🚀 Python Git Workflow Simulator Initialized!")
