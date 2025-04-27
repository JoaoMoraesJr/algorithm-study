class FitnessTrackingSystem:
    def __init__(self):
        self.users = {}

    def add_activity(self, user_id: str, activity_type: str, distance: int) -> bool:
        if user_id not in self.users:
            self.users[user_id] = {}
        if activity_type in self.users[user_id] or distance < 0:
            return False
            
        scheduled_distance = 0
        scheduled_activities = self.users[user_id].get('scheduled_activities', [])
        for activity in scheduled_activities:
            if (activity["activity_type"] == activity_type):
                scheduled_distance += activity['distance']
                
        self.users[user_id][activity_type] = distance + scheduled_distance
        return True

    def update_activity(self, user_id: str, activity_type: str, distance: int) -> bool:
        if user_id in self.users and activity_type in self.users[user_id]:
            self.users[user_id][activity_type] += distance
            return True
        return False

    def get_activity(self, user_id: str, activity_type: str) -> int:
        if user_id not in self.users:
            return None
        total_distance = 0
        if activity_type in self.users[user_id]:
            total_distance += self.users[user_id][activity_type]
        return total_distance

    def activity_summary(self, user_id: str) -> dict:
        if user_id in self.users:
            return self.users[user_id]
        return None
        
    def schedule_event(self, timestamp: int, user_id: str, activity_type: str, distance: int, event_time: int) -> bool:
        if distance <= 0 or event_time <= 0:
            return False
        activity = {"activity_type": activity_type, "distance": distance, "event_time": event_time}
        if user_id not in self.users:
            self.users[user_id] = {}
        if 'scheduled_activities' not in self.users[user_id]:
            self.users[user_id]['scheduled_activities'] = []
        self.users[user_id]['scheduled_activities'].append(activity)
        self.users[user_id]['scheduled_activities'].sort(key=lambda activity: activity['event_time'])
        return True
        
    def get_agenda(self, user_id: str, from_time: int, to_time: int) -> list:
        if (user_id not in self.users) or (from_time < 0) or (to_time < 0):
            return []
        agenda = []
        for activity in self.users[user_id]['scheduled_activities']:
            if activity['event_time'] >= from_time and activity['event_time'] <= to_time:
                agenda.append(activity)
        return agenda
            