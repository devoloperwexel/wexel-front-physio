"use client";

import Calender from "@/components/ui/Calender";
import EventCard from "@/components/ui/EventCard";
import InformationSection from "@/components/ui/InformationSection";
import PatientList from "@/components/ui/PatientList";
import Appointment from "models/appointment.model";
import { formatDashboardDateTime } from "utils/time";

type Props = {
  appointment: Appointment;
  appointments: Appointment[];
  totalAppointment: number;
};
export default function Dashboard({
  appointment,
  appointments,
  totalAppointment,
}: Props) {


  return (
    <>
      <div>
        <h1 className="text-[20px] sm:text-[32px] font-bold text-primary-color py-3 px-8 sm:px-10 sm:py-5">
          Dashboard
        </h1>
      </div>

      <div className="flex flex-col gap-10 sm:gap-12 px-8 sm:px-10">
        <div className="flex-1 w-full 2xl:w-[80%] xl:w-[80%]">
          <InformationSection totalAppointment={totalAppointment} />
        </div>
        <div className="flex flex-col md:flex-col lg:flex-row gap-10 md:gap-20 w-full 2xl:w-[80%] xl:w-[80%]">
          <div className="flex-1">
            <EventCard
              appointmentId={appointment?.id}
              title="Upcoming Appointment"
              physioName={"Patient's name"}
              eventTitle={appointment?.patientDetail.name}
              eventDateTime={formatDashboardDateTime(
                appointment?.appointmentTime
              )}
              duration={"30 Min"}
            />
          </div>
          <div className="flex-1">
            <Calender />
          </div>
        </div>

        <div className="flex w-full 2xl:w-[80%] xl:w-[80%]">
          <PatientList result={"Red"} appointments={appointments} />
        </div>
      </div>
    </>
  );
}
