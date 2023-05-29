import { Appointment } from "./appointment.model";
import { Doctor } from "./doctor.model";

export class DoctorService {
    private doctors: Doctor[] = [
        new Doctor('Siddhartha Mukherjee', 'sidmuk@gmail.com', 'sidmuk@1', ['MBBS', 'BAMS'], ['Cancer', 'Bone', 'Cartliage'], [], 'https://pbs.twimg.com/profile_images/755058035664584705/wjuk62nu_400x400.jpg', "I am currently serving as assistant professor of medicine at the Department of Medicine (Oncology) of Columbia University in New York City. We also a staff cancer physician at Columbia University Medical Center."),
        new Doctor('Naresh Trehan', 'natre@gmail.com', 'natre@1', ['BUMS', 'BHMS'], ['Kidney Stone', 'Diabetes', 'Vitiligo'], [], 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201512/nareshtrehan-story_647_121015090548.jpg', "Dr. Naresh Trehan is an Indian surgeon and medical administrator. He has served as personal surgeon to the President of India since 1991, has received numerous awards, including the Padma Shri and Padma Bhushan. Dr. Trehan was the founder, executive director and chief cardiovascular surgeon of Escorts Heart Institute and Research Center (EHIRC), which opened in New Delhi, India in 1988.Presently, Dr. Trehan is the Founder Chairman of Medanta - The Medicity one of the largest multisuper specialty hospital at Gurgaon. Dr. Trehan has been president of the International Society for Minimally Invasive Cardiac Surgery.")
    ];

    addDoctor(doctor: Doctor) {
        this.doctors.push(doctor);
    }

    getDoctors() {
        return this.doctors.slice();
    }

    getAppointments(email: string) {
        var appointments: Appointment[] = [];
        for (let doctor of this.doctors) {
            if (doctor.getEmail() === email) {
                appointments = doctor.getAppointments();
                break;
            }
        }
        return appointments;
    }
}