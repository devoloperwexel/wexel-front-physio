import API from "constants/users";
import QUESTIONNAIRES_API from "constants/questionnaires";
import ANSWERS_API from "constants/answers";
import PatientDetail from "modules/patients/PatientDetail";
import request from "utils/request";

export default async function page({ params }: { params: { id: string } }) {
  const patient = await request(API.GET_USER, {
    userId: params.id,
  });

  const questionnaireResults = await request(
    QUESTIONNAIRES_API.GET_QUESTIONNAIRES,
    {
      query: "limit=10",
    }
  );

  const answerResults = await request(ANSWERS_API.GET_ANSWERS, {
    userId: params.id,
  });
  const answers = answerResults?.data?.results;

  const questionnaires = questionnaireResults?.data?.results;

  questionnaires.forEach((questionnaire: any) => {
    const questions = questionnaire.questions;

    questions.forEach((question: any) => {
      const answer = answers.find((ans: any) => ans.questionId === question.id);

      if (answer) {
        question.answer = answer?.value;
      } else {
        question.answer = null;
      }
    });
  });

  return (
    <div>
      <main>
        <PatientDetail
          screeningData={questionnaires}
          name={patient?.data.name}
          age={30}
          gender={patient?.data.gender}
          languages={["English", "Spanish"]}
          screeningResult="Normal"
          dateOfBirth="1994-05-14"
          salutation="Mr."
          lastAppointment="2024-10-15"
          nextAppointment="2024-11-10"
          email={patient?.data.email}
          weight="75 kg"
          height="180 cm"
          activityLevel="Moderate"
        />
      </main>
    </div>
  );
}
