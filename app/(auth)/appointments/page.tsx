import API from "constants/appointment";
import Appointments from "modules/appointments/Appointments";
import { notFound } from "next/navigation";
import { auth } from "utils/auth";
import request from "utils/request";

export default async function page() {
  try {
    const authRes = await auth();
    const appointments = await request(API.GET_APPOINTMENTS, {
      query: `doctorId=${authRes?.user.id}&limit=1`,
    });
    return <Appointments appointments={appointments?.data?.results} />;
  } catch (error) {
    console.log(error);
    notFound();
  }
}
