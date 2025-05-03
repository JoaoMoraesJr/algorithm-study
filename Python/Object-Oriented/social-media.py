from datetime import datetime

class SocialMedia:

    def __init__(self):
        self.posts = {}
        self.user_reactions = {}
        self.groups = {}

    def create_post(self, post_id: str, content: str) -> bool:
        if post_id in self.posts:
            return False
        self.posts[post_id] = {'content': content, 'reactions': {}}
        return True

    def delete_post(self, post_id: str) -> bool:
        if post_id not in self.posts:
            return False
        del self.posts[post_id]
        return True

    def react_to_post(self, user_id: str, post_id: str, reaction_type: str) -> bool:
        if post_id not in self.posts or user_id in self.user_reactions.get(post_id, {}):
            return False
        reactions = self.posts[post_id]['reactions']
        reactions[reaction_type] = reactions.get(reaction_type, 0) + 1
        self.user_reactions.setdefault(post_id, {})[user_id] = reaction_type
        return True

    def get_reaction_summary(self, post_id: str):
        if post_id not in self.posts:
            return None
        return self.posts[post_id]['reactions'].copy()

    def create_group(self, group_id: str, operator_id: str) -> bool:
        if group_id in self.groups:
            return False
        self.groups[group_id] = {"operator_id": operator_id, "members": [], "posts": []}
        return True
        
    def add_member(self, group_id: str, user_id: str, operator_id: str) -> bool:
        if group_id not in self.groups:
            return False
        if (self.groups[group_id]["operator_id"] == operator_id):
            self.groups[group_id]["members"].append(user_id)
            return True
        return False
        
    def share_post_to_group(self, post_id: str, group_id: str, user_id: str) -> bool:
        if group_id not in self.groups:
            return False
        if (user_id in self.groups[group_id]["members"] or self.groups[group_id]['operator_id'] == user_id):
            self.groups[group_id]["posts"].append({"id": post_id, "timestamp": datetime.now()})
            self.groups[group_id]["posts"].sort(key=lambda x: x['timestamp'])
            return True
        return False
        
    def get_group_posts(self, group_id: str) -> list[str] | None:
        if group_id not in self.groups:
            return None    
        if len(self.groups[group_id]["posts"]) > 0:
            return [post['id'] for post in self.groups[group_id]["posts"]]
        return None