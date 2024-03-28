interface User {
  id: number;
  logged_in_timestamp: string;
  logged_out_timestamp: string | null;
  last_seen_timestamp: string;
}

const users: User[] = [
  {
    id: 1,
    logged_in_timestamp: "2024-03-28T08:30:00.000Z",
    logged_out_timestamp: null,
    last_seen_timestamp: "2024-03-28T13:20:00.000Z",
  },
  {
    id: 2,
    logged_in_timestamp: "2024-03-28T10:15:00.000Z",
    logged_out_timestamp: "2024-03-28T15:00:00.000Z",
    last_seen_timestamp: "2024-03-28T15:30:00.000Z",
  },
  {
    id: 3,
    logged_in_timestamp: "2024-03-28T11:45:00.000Z",
    logged_out_timestamp: "2024-03-28T17:20:00.000Z",
    last_seen_timestamp: "2024-03-28T17:45:00.000Z",
  },
  {
    id: 4,
    logged_in_timestamp: "2024-03-28T14:00:00.000Z",
    logged_out_timestamp: "2024-03-28T18:30:00.000Z",
    last_seen_timestamp: "2024-03-28T19:00:00.000Z",
  },
  {
    id: 5,
    logged_in_timestamp: "2024-02-28T16:30:00.000Z",
    logged_out_timestamp: "2024-02-28T21:15:00.000Z",
    last_seen_timestamp: "2024-02-28T21:45:00.000Z",
  },
];

let active_users: number = 0; // stores the number of active users this month
let logged_in_users: number = 0; //  stores the number of logged in users this month + previous months
let currentDate: Date = new Date();
console.log("Current Date:", currentDate);

// Loop to find out the number of active users this month
users.forEach((user) => {
  let lastSeenDate: Date = new Date(user.last_seen_timestamp);
  if (lastSeenDate.getMonth() === currentDate.getMonth()) {
    active_users++;
  }
});

console.log("Active users this month:", active_users);

users.forEach((user) => {
  if (user.logged_out_timestamp === null) {
    logged_in_users++;
  }
});

console.log("Logged in users monthly:", logged_in_users);
