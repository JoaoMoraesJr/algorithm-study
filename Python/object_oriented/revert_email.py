class EmailSystem:
    def __init__(self):
        self.inboxes = {}  # Stores the emails in user inboxes.
        self.sent_counts = {}  # Counts the sent emails by each user.
        self.sent_emails = {}  # Keeps a record of all sent emails for undo functionality.
        self.loggedout_users = {}

    def send_email(self, from_user: str, to_user: str, subject: str, body: str) -> bool:
        if to_user in self.loggedout_users or from_user in self.loggedout_users:
            return False
        if to_user not in self.inboxes:
            self.inboxes[to_user] = []
        # Add the email to the recipient's inbox
        self.inboxes[to_user].append({"from": from_user, "subject": subject, "body": body})
        # Increment sent email count
        self.sent_counts[from_user] = self.sent_counts.get(from_user, 0) + 1
        # Record the email in sent_emails for undo functionality
        if from_user not in self.sent_emails:
            self.sent_emails[from_user] = []
        self.sent_emails[from_user].append({"to_user": to_user, "subject": subject, "body": body})
        return True

    def query_inbox(self, user: str) -> list:
        return self.inboxes.get(user, [])

    def sent_emails_count(self) -> dict:
        return self.sent_counts

    def flag_email(self, user: str, subject: str) -> bool:
        if user in self.inboxes:
            for email in self.inboxes[user]:
                if email['subject'] == subject:
                    email['flagged'] = True  # Assuming the email dictionary has a flagged property
                    return True
        return False
        
    def undo_send(self, from_user: str, subject: str) -> bool:
        if from_user not in self.sent_emails:
            return False
        status = False
        sent_email = self.sent_emails[from_user].pop()
        self.sent_counts[from_user] = self.sent_counts.get(from_user, 0) - 1
        if self.sent_counts.get(from_user, 0) == 0:
            del self.sent_counts[from_user]
        for inbox_email in self.inboxes[sent_email['to_user']]:
            if inbox_email['from'] == from_user and inbox_email['subject'] == subject:
                self.inboxes[sent_email['to_user']].remove(inbox_email)
                status = True
                break
        return status
        
    def logout_user(self, user: str) -> bool:
        self.loggedout_users[user] = True
        return True
'''    
You are given a simplified email system that already supports basic functionalities such as sending emails, querying inboxes, and flagging emails. The following methods are already implemented:

send_email(self, from_user: str, to_user: str, subject: str, body: str) -> bool: — Sends an email from from_user to to_user with the specified subject and body. This method always returns True in this implementation.
query_inbox(self, user: str) -> list[dict]: — Returns a list of emails where user is the recipient, each email represented as a dictionary containing from, subject, and body.
sent_emails_count(self) -> dict: — Returns a dictionary listing the number of emails sent by each user.
flag_email(self, user: str, subject: str) -> bool: — Marks an email with the given subject in user's inbox as flagged. It returns True if successful and False otherwise.
Now, your task is to enhance this system by introducing the capability to undo sent emails and to log users out:

undo_send(self, from_user: str, subject: str) -> bool: — Reverses the last email sent by from_user with the specific subject, removing it from the recipient's inbox. Only the most recent email with that subject is affected. It returns True if successful and False otherwise.
logout_user(self, user: str) -> bool: — Deactivates user's account, preventing any further emails from being sent from or received by this user until reactivated. It returns True if successful and False otherwise.
Sending an email to a logged-out user should now result in send_email returning False
'''