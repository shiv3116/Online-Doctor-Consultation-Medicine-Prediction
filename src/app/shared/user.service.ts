import { Appointment } from "./appointment.model";
import { User } from "./user.model";

export class UserService {
    private users: User[] = [
        new User('Shivam Sharma', 'shiva.shar132001@gmail.com', 'Shivam@1', [new Appointment('2018-05-16', 'Bone Damage', 'Siddhartha Mukherjee', 'Shivam Sharma'), new Appointment('2019-06-17', 'Cough', 'Naresh Trehan', 'Shivam Sharma')]),
        new User('Parul Chandra', 'parul3108@gmail.com', 'Parul@1', [])
    ];

    addUser(user: User) {
        this.users.push(user);
    }

    getUsers() {
        return this.users.slice();
    }

    getAppointments(email: string) {
        var appointments: Appointment[] = [];
        for (let user of this.users) {
            if (user.getEmail() === email) {
                appointments = user.getAppointments();
                break;
            }
        }
        return appointments;
    }
}