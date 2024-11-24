import DoctorDetail from "./doctor-detail.model";

export default interface Appointment {
  id: string;
  videoCallUrl: string;
  appointmentTime: string;
  doctorDetail: DoctorDetail;
  patientDetail: any;
  note?: string;
  sessionTime:number;
  createdAt: string;
  updatedAt: string;
}
