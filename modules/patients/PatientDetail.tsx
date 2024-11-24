"use client";

import { FC, useState } from "react";
import MedicalScreeningView from "./MedicalScreeningView";
import { IoArrowBack } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { Questionnaire } from "models/questionnaire.model";

interface PatientDetailProps {
  screeningData: Questionnaire;
  name: string;
  age: number;
  gender: string;
  languages: string[];
  screeningResult: string;
  dateOfBirth: string;
  salutation: string;
  lastAppointment: string;
  nextAppointment: string;
  email: string;
  weight: string;
  height: string;
  activityLevel: string;
}

const PatientDetail: FC<PatientDetailProps> = ({
  name,
  age,
  gender,
  languages,
  screeningResult,
  dateOfBirth,
  salutation,
  lastAppointment,
  nextAppointment,
  email,
  weight,
  height,
  activityLevel,
  screeningData,
}) => {
  const [activeTab, setActiveTab] = useState<string>("Overview");
  const router = useRouter();
console.log(screeningData);

  const renderContent = () => {
    switch (activeTab) {
      case "Overview":
        return (
          <div className="w-full 2xl:w-[80%] xl:w-[70%]  border border-primary-color p-12 capitalize">
            <div className="flex items-center mb-2 gap-4">
              <div className="w-28 h-28 rounded-full bg-gray-300 flex items-center justify-center text-lg font-semibold mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l9-5-9-5-9 5 9 5z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l6.16-3.422A12.083 12.083 0 0112 21.5v-7.5z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14L5.84 10.578A12.083 12.083 0 0112 21.5v-7.5z"
                  />
                </svg>
              </div>
              <div className="flex flex-col space-y-1">
                <div className="font-semibold text-[22px]">{name}</div>
                <div className="text-gray-600">
                  {gender} - {age} Years
                </div>
                <div className="flex space-x-2 pt-2">
                  {languages.map((language) => (
                    <span
                      key={language}
                      className="bg-gray-200 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded"
                    >
                      {language}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex justify-between w-full pt-4">
              <div className="text-gray-600 mb-1 flex flex-col">
                <p className="font-bold text-gray-800">Screening result</p>
                <span
                  className={`font-semibold ${
                    screeningResult === "Green"
                      ? "text-green-600"
                      : screeningResult === "Red"
                      ? "text-red-600"
                      : "text-yellow-600"
                  }`}
                >
                  {screeningResult}
                </span>
              </div>
              <div className="text-gray-600 flex flex-col">
                <p className="font-bold text-gray-800">Date of Birth</p>
                <span>{dateOfBirth}</span>
              </div>
            </div>
            <div className="flex justify-between w-full pt-4">
              <div className="text-gray-600 mb-1 flex flex-col">
                <p className="font-bold text-gray-800">Salutation</p>
                <span>{salutation}</span>
              </div>
            </div>
            <div className="flex justify-between w-full pt-4">
              <div className="text-gray-600 mb-1 flex flex-col">
                <p className="font-bold text-gray-800">Last Appointment</p>
                <span>{lastAppointment}</span>
              </div>
              <div className="text-gray-600 flex flex-col">
                <p className="font-bold text-gray-800">Next Appointment</p>
                <span>{nextAppointment}</span>
              </div>
            </div>
            <div className="flex justify-between w-full pt-4">
              <div className="text-gray-600 mb-1 flex flex-col">
                <p className="font-bold text-gray-800">Contact Information</p>
                <span>{email}</span>
              </div>
            </div>
            <div className="pt-4">
              <p className="text-gray-800 font-semibold">Medical Information</p>
              <div className="flex justify-between w-full pt-2">
                <div className="text-gray-600 mb-1 flex flex-col">
                  <p className="font-bold text-gray-800">Weight</p>
                  <span>{weight}</span>
                </div>
                <div className="text-gray-600 flex flex-col">
                  <p className="font-bold text-gray-800">Height</p>
                  <span>{height}</span>
                </div>
                <div className="text-gray-600 flex flex-col">
                  <p className="font-bold text-gray-800">Activity Level</p>
                  <span>{activityLevel}</span>
                </div>
              </div>
            </div>
          </div>
        );
      case "Appointments":
        return (
          <div>
            <div className="text-gray-600">Last Appointment</div>
            <div className="font-semibold">{lastAppointment}</div>
            <div className="text-gray-600">Next Appointment</div>
            <div className="font-semibold">{nextAppointment}</div>
          </div>
        );
      case "Treatment":
        return <div>Treatment content goes here...</div>;
      case "Medical Screening":
        return (
          <div>
            <MedicalScreeningView
              date="2024-11-13"
              status="Completed"
              result="Green"
              summary={[
                { color: "red", count: 2 },
                { color: "green", count: 5 },
                { color: "yellow", count: 3 },
              ]}
              actions={[
                "Follow-up appointment",
                "Prescribe medication",
                "Schedule therapy",
              ]}
              sections={[
                {
                  title: "Treatment Goals",
                  questions: [
                    {
                      id: "a1f4d5e7-2b84-4a4b-9d3a-fc13f1f2766c",
                      questionText: "Do you smoke?",
                      type: "RADIO",
                      values: ["Yes", "No"],
                      answer: "Yes",
                    },
                    {
                      id: "b14c23e8-5a9b-486e-829c-df85a5c6b90a",
                      questionText: "Do you exercise regularly?",
                      type: "RADIO",
                      values: ["Yes", "No"],
                      answer: "No",
                    },
                    {
                      id: "c9e5b7a6-8e51-49a7-89e5-d4c3fe7b601f",
                      questionText: "<b>If yes</b>, write diagnose",
                      type: "TEXTAREA",
                      requiredRef: {
                        id: "b14c23e8-5a9b-486e-829c-df85a5c6b90a",
                        value: "Yes",
                      },
                      answer: "No I have not diagnose",
                    },
                  ],
                },
                {
                  title: "Current Condition",
                  questions: [
                    {
                      id: "d5f7c9b2-8c3e-4a3e-bbe4-3b0c3e07c48f",
                      questionText: "Are you currently suffering from pain?",
                      type: "RADIO",
                      values: ["Yes", "No"],
                      answer: "Yes"
                    },
                    {
                      id: "e71b32d5-3e5a-459e-9bda-6d15e2b4c29f",
                      questionText: "<b>If yes</b>: has it worsened massively in the last 2 weeks?",
                      type: "RADIO",
                      values: ["Yes", "No"],
                      requiredRef: { id: "d5f7c9b2-8c3e-4a3e-bbe4-3b0c3e07c48f", value: "Yes" },
                      answer: "No"
                    },
                    {
                      id: "f47e3b2a-5f7d-4b5d-9c8e-19e5f32b3a48",
                      questionText: "Have you been to the doctor for clarification?",
                      type: "RADIO",
                      values: ["Yes", "No"],
                      answer: "Yes"
                    },
                    {
                      id: "g65b23f4-1b4e-49f8-8c3e-4b1d5a2c30b9",
                      questionText: "<b>If yes</b>, write diagnose",
                      type: "TEXTAREA",
                      requiredRef: { id: "f47e3b2a-5f7d-4b5d-9c8e-19e5f32b3a48", value: "Yes" },
                      answer: "No, I Don;t write diagnose!"
                    },
                    {
                      id: "h28d5e9c-3e5b-48b5-9a3c-6c4d7e2b9a5f",
                      questionText: "If you are a woman:> Are you pregnant?",
                      type: "RADIO",
                      values: ["Yes", "No"],
                      answer: "Yes"
                    }
                  ]
                },
                {
                  title: "Mental and Cognitive Health",
                  questions: [
                    {
                      id: "i76b4a3c-1d5f-49e7-9a2e-5d9c4e1b6f3e",
                      questionText: "Do you notice any concentration, memory, or other brain performance problems in yourself?",
                      type: "RADIO",
                      values: ["Yes", "No"],
                      answer: "Yes"
                    },
                    {
                      id: "j94c8d3b-5a2e-4e9b-8f3d-1d5a4c9e6b1f",
                      questionText: "Do you suffer from unusual fatigue and/or irritability?",
                      type: "RADIO",
                      values: ["Yes", "No"],
                      answer: "Yes"
                    }
                  ]
                },
                {
                  title: "Mobility and Exercise",
                  questions: [
                    {
                      id: "k25e9d4b-3a5f-4b8d-9c3e-5f1d2b9c7e3f",
                      questionText: "Do you suffer from balance problems, gait problems, or do you sometimes fall?",
                      type: "RADIO",
                      values: ["Yes", "No"],
                      answer: "Yes"
                    },
                    {
                      id: "l84b7c5a-1e4d-49f3-9c5a-2e8d4f9c3b7a",
                      questionText: "Do you have chest pain under any physical exertion?",
                      type: "RADIO",
                      values: ["Yes", "No"],
                      answer: "No"
                    },
                    {
                      id: "m32f1b9c-7d5a-49e3-8b4c-5f9a7c3e1d2b",
                      questionText: "Do you get out of breath quickly with unreasonably low exertion?",
                      type: "RADIO",
                      values: ["Yes", "No"],
                      answer: "No"
                    },
                    {
                      id: "n47a8c2d-5f3b-4e7d-9c5a-1d9c4b2e7f8a",
                      questionText: "Is there a sudden progressive loss of strength in the arms or legs?",
                      type: "RADIO",
                      values: ["Yes", "No"],
                      answer: "No"
                    }
                  ]
                },
                {
                  title: "Medications",
                  questions: [
                    {
                      id: "97a5d866-1d8c-4972-9617-b29cbc44ed10",
                      questionText:
                        "Do you regularly take medication (e.g. blood thinning medication, birth control pills, etc.) ?",
                      type: "RADIO",
                      values: ["Yes", "No"],
                      answer: "Yes"
                    },
                    {
                      id: "f67f9a8c-6057-4130-8f47-8a2325a0d6d6",
                      questionText: "<b>If yes<b>, which ones ?",
                      values: ["Yes", "No"],
                      type: "TEXTAREA",
                      requiredRef: { id: "q15", value: "Yes" },
                      answer: "Yes,I can not answer for that"
                    },
                    {
                      id: "3897f7bf-f33c-4003-ba0b-c3be65f78f2b",
                      questionText:
                        "Have you taken cortisone for more than 12 weeks in the last 5 years?",
                      type: "RADIO",
                      values: ["Yes", "No"],
                      answer: "Yes"
                    },
                  ],
                },
                {
                  title: "Chronic Conditions",
                  questions: [
                    {
                      id: "506f6b3a-dbf8-4e28-8158-e5d519366fcb",
                      questionText:
                        "Do you regularly take medication (e.g. blood thinning medication, birth control pills, etc.) ?",
                      type: "RADIO",
                      values: ["Yes", "No"],
                      info: `<ul class="list-disc list-inside">
                  <li class="mb-1">First item with custom style</li>
                  <li class="mb-1">Second item styled</li>
                  <li class="mb-1">Third item styled</li>
                </ul>`,
                      answer: "Yes"
                    },
                    {
                      id: "90527a3f-0bb5-4250-a1be-35a20d9ed4d7",
                      questionText: "<b>If yes<b>, which ones ?",
                      values: ["Yes", "No"],
                      type: "TEXTAREA",
                      requiredRef: { id: "q18", value: "Yes" },
                      answer: "First item with custom style"
                    },
                    {
                      id: "c0e46884-1b8f-4dd4-b0e2-3b8a9a6ece74",
                      questionText: "<b>Do you suffer from:</b>",
                      values: [""],
                      type: "TOPIC_QUESTION",
                    },
                    {
                      id: "b78edfe2-37d7-4968-9d7a-bb4c91b77688",
                      questionText: "High blood pressure >140/95 mmHg?",
                      type: "RADIO",
                      values: ["Yes", "No"],
                      answer: "Yes"
                    },
                    {
                      id: "155538e0-43e1-4e31-8f13-7fe92550c1c7",
                      questionText: "Serious cardiovascular diseases?",
                      type: "RADIO",
                      values: ["Yes", "No"],
                      answer: "Yes"
                    },
                    {
                      id: "d5245e80-f88f-4525-868c-e0a38f0fe3a6",
                      questionText:
                        "Circulatory problems (e.g. PAVK, varicose veins or similar)?",
                      type: "RADIO",
                      values: ["Yes", "No"],
                      answer: "Yes"
                    },
                    {
                      id: "e42ba31a-c561-4ed0-81d2-6c4dfab9a0a1",
                      questionText: "Osteoporosis or Osteopenia?",
                      type: "RADIO",
                      values: ["Yes", "No"],
                      answer: "Yes"
                    },
                  ],
                },
                {
                  title: "Surgical History",
                  questions: [
                    {
                      id: "324fc790-c0f9-43cb-be9e-a89af535107f",
                      questionText: "Have you had any surgery in the last five years?",
                      type: "RADIO",
                      values: ["Yes", "No"],
                      answer: "Yes"
                    },
                    {
                      id: "778b616f-d4c5-4723-8426-12bf6b2c71a3",
                      questionText: "If yes, which ones ?",
                      values: ["Yes", "No"],
                      type: "TEXTAREA",
                      requiredRef: { id: "q25", value: "Yes" },
                      answer: "Yes of course I had a any surgery."
                    },
                    {
                      id: "81121e6b-e5a3-47b6-8f15-3ec70c8c8f73",
                      questionText:
                        "Do you have a pacemaker or other external items in your body?",
                      type: "RADIO",
                      values: ["Yes", "No"],
                      answer: "No"
                    },
                    {
                      id: "4732a8dc-4fb6-4385-8655-dee1145e711c",
                      questionText: "If yes, which ones ?",
                      values: ["Yes", "No"],
                      type: "TEXTAREA",
                      requiredRef: { id: "q27", value: "Yes" },
                      answer: ""
                    },
                  ],
                },
              ]}
            />
          </div>
        );
      default:
        return null;
    }
  };

  const goBack = () => {
    router.push("/patients");
  };

  return (
    <>
      <div className="flex justify-between items-center pr-8 sm:pr-10">
        <h1 className="text-[20px] sm:text-[32px] font-bold text-primary-color py-3 px-8 sm:px-10 sm:py-5">
          Patient&apos;s Name
        </h1>
        <button
          className="flex space-x-2 justify-center items-center px-3 py-2 text-[15px] font-medium bg-primary-color text-white rounded-sm"
          onClick={goBack}
        >
          <IoArrowBack />
          <p>Back</p>
        </button>
      </div>
      <div className="min-h-screen w-[80%]">
        <div className="px-8 sm:px-10 rounded-md ">
          {/* Top Navigation */}
          <div className="border-b border-gray-200 mb-4">
            <ul className="flex cursor-pointer no-text-cursor">
              {[
                "Overview",
                "Medical Screening",
                "Appointments",
                "Treatment",
              ].map((tab) => (
                <li
                  key={tab}
                  className={`px-3 py-2 cursor-pointer ${
                    activeTab === tab
                      ? "text-white bg-primary-color font-semibold"
                      : "text-white bg-primary-color/30 font-medium"
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </li>
              ))}
            </ul>
          </div>
          {/* Content */}
          <div className=" border border-red-600 p-4 bg-white ">
            {renderContent()}
          </div>
        </div>
      </div>
    </>
  );
};

export default PatientDetail;
