import API from "constants/appointment";
import Dashboard from "modules/dashboard/Dashboard";
import { notFound } from "next/navigation";
import { auth } from "utils/auth";
import request from "utils/request";

export default async function page() {
  try {
    const authRes = await auth();

    const currentDate = new Date();
    const formattedCurrentDate = currentDate.toISOString().split("T")[0];
    currentDate.setDate(currentDate.getDate() + 1);
    const formattedNextDate = currentDate.toISOString().split("T")[0];
console.log(authRes);

    const appointment = await request(API.GET_APPOINTMENTS, {
      query: `doctorUserId=${authRes?.user.id}&appointmentDateFrom=${formattedCurrentDate}&appointmentDateTo=${formattedNextDate}&limit=1&appointmentTime:desc`,
    });

    const appointments = await request(API.GET_APPOINTMENTS, {
      query: `doctorUserId=${authRes?.user.id}&limit=10&appointmentTime:desc`,
    });

    return (
      <Dashboard
        appointment={appointment?.data?.results[0]}
        appointments={appointments?.data?.results}
        totalAppointment={appointment?.data?.totalResults || 0}
      />
    );
  } catch (e) {
    console.log(e);
    notFound();
  }
}
