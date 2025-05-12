from collections import defaultdict
from typing import List, Optional

class TaskTrackingSystem:
    def __init__(self):
        self.tasks = {}
        self.task_attributes = defaultdict(dict)

    def add_task(self, task_id: str, title: str, description: str, status: str, priority: int) -> bool:
        if task_id in self.tasks:
            return False
        self.tasks[task_id] = True
        self.task_attributes[task_id] = {
            'title': title,
            'description': description,
            'status': status,
            'priority': priority,
            'dependencies': []
        }
        return True

    def update_task(self, task_id: str, title: Optional[str] = None, description: Optional[str] = None, status: Optional[str] = None, priority: Optional[int] = None) -> bool:
        if task_id not in self.tasks:
            return False
        if title is not None:
            self.task_attributes[task_id]['title'] = title
        if description is not None:
            self.task_attributes[task_id]['description'] = description
        if status is not None:
            self.task_attributes[task_id]['status'] = status
            for task_attributes_id in self.task_attributes:
                if task_id in self.task_attributes[task_attributes_id]['dependencies']:
                    canOpen = True
                    for dependent_task in self.task_attributes[task_attributes_id]['dependencies']:
                        if self.task_attributes[dependent_task]['status'] != 'Closed':
                            canOpen = False
                    if canOpen == True:
                        self.task_attributes[task_attributes_id]['status'] = 'Open'
        if priority is not None:
            self.task_attributes[task_id]['priority'] = priority
        return True

    def remove_task(self, task_id: str) -> bool:
        if task_id in self.tasks:
            for task_attributes_id in self.task_attributes:
                if task_id in self.task_attributes[task_attributes_id]['dependencies']:
                    self.task_attributes[task_attributes_id]['dependencies'].remove(task_id)
            del self.tasks[task_id]
            del self.task_attributes[task_id]
            return True
        return False

    def get_tasks_by_status(self, status: str) -> List[str]:
        return sorted([task_id for task_id, attrs in self.task_attributes.items() if attrs['status'] == status])

    def get_tasks_by_priority(self, priority: int) -> List[str]:
        return sorted([task_id for task_id, attrs in self.task_attributes.items() if attrs['priority'] == priority])
        
    def add_dependency(self, task_id: str, dependency_task_id: str) -> bool:
        if task_id == dependency_task_id or task_id not in self.tasks or dependency_task_id not in self.tasks:
            return False
        if task_id in self.task_attributes[dependency_task_id]['dependencies']:
            return False
        self.task_attributes[task_id]['dependencies'].append(dependency_task_id)
        return True
        
    def remove_dependency(self, task_id: str, dependency_task_id: str) -> bool:
        if task_id in self.tasks and dependency_task_id in self.tasks[task_id]['dependencies']:
            self.task_attributes[task_id]['dependencies'].remove(dependency_task_id)
        else:
            return False
            
    def get_dependent_tasks(self, task_id: str) -> List[str]:
        result = []
        for task_attributes_id in self.task_attributes:
            if task_id in self.task_attributes[task_attributes_id]['dependencies']:
                result.append(task_attributes_id)
        return result
        
'''
CodeSignal URL: https://codesignal.com/learn/course/138/unit/1/practice/5

In this task, you are tasked with enhancing an existing task-tracking system by introducing new features for managing task dependencies. The system works with tasks, each having unique attributes: task_id, title, description, status, and priority.

The existing system supports the following operations:

add_task(self, task_id: str, title: str, description: str, status: str, priority: int) -> bool: Adds a new task to the system.
update_task(self, task_id: str, title: Optional[str], description: Optional[str], status: Optional[str], priority: Optional[int]) -> bool: Updates an existing task's attributes.
remove_task(self, task_id: str) -> bool: Removes a task from the system.
get_tasks_by_status(self, status: str) -> List[str]: Returns a list of task IDs filtered by status.
get_tasks_by_priority(self, priority: int) -> List[str]: Returns a list of task IDs filtered by priority.
The upgraded system should support additional operations. These operations include:

add_dependency(self, task_id: str, dependency_task_id: str) -> bool: Adds a dependency for a task task on another task dependency_task_id. This method ensures that circular dependencies are not allowed to prevent tasks from being indefinitely blocked by each other.
remove_dependency(self, task_id: str, dependency_task_id: str) -> bool: Removes an existing dependency of a task on another task.
get_dependent_tasks(self, task_id: str) -> List[str]: Retrieves a list of tasks that are dependent on a given task.
Dependencies are described as follows: a task's status can automatically change to 'Open' once all tasks it depends on have been completed ('Closed'). Note, however, that when a task is removed from the system, the statuses of tasks that depend on the removed task are not automatically updated based on the removal action. Instead, automatic status updates occur in response to the completion of dependency tasks. This may necessitate manual status adjustments for some tasks when their dependency tasks are removed instead of completed.

When remove_task is called on a task with dependencies, it not only removes that task and its attributes but also updates the dependencies and dependents data structures to remove any references to the deleted task. However, the status of tasks that were dependent on the removed task is not automatically adjusted and may require manual intervention.
'''