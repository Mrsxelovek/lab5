    def get_statistics(self):
        """Get project statistics"""
        total_files_committed = sum(len(commit['files']) for commit in self.commits)
        unique_files = set()
        for commit in self.commits:
            unique_files.update(commit['files'])
        
        return {
            'total_commits': len(self.commits),
            'total_files_committed': total_files_committed,
            'unique_files': len(unique_files),
            'project_duration': self._get_project_duration()
        }
    
    def search_commits(self, keyword):
        """Search commits by message keyword"""
        matching_commits = [
            commit for commit in self.commits 
            if keyword.lower() in commit['message'].lower()
        ]
        return matching_commits
    
    def _get_project_duration(self):
        """Calculate project duration"""
        if not self.commits:
            return "No commits"
        
        from datetime import datetime
        first_commit = self.commits[0]['timestamp']
        last_commit = self.commits[-1]['timestamp']
        
        # Simple duration calculation
        return f"From {first_commit} to {last_commit}"

    def branch(self, branch_name):
        """Simulate branch creation (basic implementation)"""
        return f"Created branch '{branch_name}' from current state"

# Update the demo section at the bottom
if __name__ == "__main__":
    project = GitWorkflowSimulator("Python Git Practice")
    print("🚀 Python Git Workflow Simulator Initialized!")
    
    # Quick demo
    project.create_file("demo.py")
    project.add("demo.py")
    project.commit("feat: initialize git simulator")
    
    print("📊 Project stats:", project.get_statistics())
