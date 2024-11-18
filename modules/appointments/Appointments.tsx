import { Grid } from "@mui/material";
import { AppointmentCard } from "./AppointmentCard";
import Appointment from "models/appointment.model";

type Props = {
  appointments: Appointment[];
};
const Appointments = ({ appointments }: Props) => {
  return (
    <div className="min-h-screen ">
       <div>
        <h1 className="text-[20px] sm:text-[32px] font-bold text-primary-color py-3 px-8 sm:px-10 sm:py-10">
          My Appointments
        </h1>
      </div>
      <div className="px-8 sm:px-10">
        <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {appointments.map((appointment) => (
        <Grid key={appointment.id} item xs={2} sm={43} md={3}>
          <AppointmentCard appointment={appointment} />
        </Grid>
      ))}
    </Grid>
    </div>
    </div>
    
  );
};


export default Appointments;
