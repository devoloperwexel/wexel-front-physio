import API from "constants/appointment";
import Dashboard from "modules/dashboard/Dashboard";
import { notFound } from "next/navigation";
import { auth } from "utils/auth";
import request from "utils/request";

export default async function page() {
  try {
    const authRes = await auth();
    const appointments = await request(API.GET_APPOINTMENTS, {
      query: `doctorId=${authRes?.user.id}&limit=1`,
    });
    console.log(appointments);

    return (
      <Dashboard
        appointment={appointments?.data?.results[0]}
        totalAppointment={appointments?.data?.totalResults || 0}
      />
    );
  } catch (e) {
    console.log(e);
    notFound();
  }
}
