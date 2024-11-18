import PatientList from "@/components/ui/PatientList";
import PatientDetail from "modules/patients/PatientDetail";
import PatientsCardList from "modules/patients/PatientsCardList";

export default function page() {
  
  return (
    <div>
      <main>
          <PatientsCardList/>
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


