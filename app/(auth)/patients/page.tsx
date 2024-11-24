import PatientList from "@/components/ui/PatientList";
import API from "constants/users";
import PatientDetail from "modules/patients/PatientDetail";
import PatientsCardList from "modules/patients/PatientsCardList";
import { auth } from "utils/auth";
import request from "utils/request";

export default async function page() {
  const authRes = await auth();
  const patients = await request(API.GET_USERS, {
    query: `doctorId=${authRes?.user.id}&limit=10&role=user`,
  });

  return (
    <div>
      <main>
        <PatientsCardList patients={patients?.data?.results} />
        {/* <PatientDetail
            name="John Doe"
            age={30}
            gender="Male"
            languages={['English', 'Spanish']}
            screeningResult="Normal"
            dateOfBirth="1994-05-14"
            salutation="Mr."
            lastAppointment="2024-10-15"
            nextAppointment="2024-11-10"
            email="johndoe@example.com"
            weight="75 kg"
            height="180 cm"
            activityLevel="Moderate"
            /> */}
      </main>
    </div>
  );
}
