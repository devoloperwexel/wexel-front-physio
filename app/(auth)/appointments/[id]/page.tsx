import API from "constants/appointment";
import AppointmentPageView from "modules/appointments/AppointmentPageView";
import { notFound } from "next/navigation";
import { auth } from "utils/auth";
import request from "utils/request";

export default async function page({ params }: { params: { id: string } }) {
  try {
    const authRes = await auth();

    const appointments = await request(API.GET_APPOINTMENTS, {
      query: `doctorUserId=${authRes?.user.id}&appointmentId=${params.id}&limit=1`,
    });

    return (
      <AppointmentPageView appointment={appointments?.data?.results?.[0]} />
    );
  } catch (e) {
    console.log(e);
    notFound();
  }
}
