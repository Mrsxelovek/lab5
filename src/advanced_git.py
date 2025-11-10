class AdvancedGitFeatures:
    def __init__(self, base_simulator):
        self.simulator = base_simulator
        self.branches = {'main': base_simulator.commits.copy()}
        self.current_branch = 'main'
    
    def checkout(self, branch_name):
        """Simulate git checkout"""
        if branch_name not in self.branches:
            self.branches[branch_name] = self.branches[self.current_branch].copy()
        
        self.current_branch = branch_name
        return f"Switched to branch '{branch_name}'"
    
    def merge(self, source_branch):
        """Simulate basic merge operation"""
        if source_branch not in self.branches:
            return f"Error: Branch '{source_branch}' doesn't exist"
        
        # Simple merge - just combine commits
        main_commits = set(str(c) for c in self.branches['main'])
        source_commits = set(str(c) for c in self.branches[source_branch])
        
        new_commits = main_commits.union(source_commits)
        return f"Merged {len(source_commits - main_commits)} commits from {source_branch}"
    
    def list_branches(self):
        """List all branches"""
        return list(self.branches.keys())

# Integration example
def create_advanced_simulator():
    from git_simulator import GitWorkflowSimulator
    base = GitWorkflowSimulator("Advanced Project")
    advanced = AdvancedGitFeatures(base)
    return advanced
