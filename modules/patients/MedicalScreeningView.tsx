"use client";

import { Questionnaire } from 'models/questionnaire.model';
import { FC, useState, useCallback } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

// interface Question {
//   id: string;
//   questionText: string;
//   type: QuestionType;
//   values?: string[]; 
//   info?: string | null | undefined; 
//   requiredRef?: { id: string; value: string } | null;
//   answer?: string | undefined;
// }

type QuestionType = "RADIO" | "TEXTAREA" | "CHECKBOX" | "TOPIC_QUESTION";

interface MedicalScreeningProps {
  date: string;
  status: string;
  result: string;
  summary: { color: string; count: number }[];
  actions: string[];
  sections: Questionnaire[];
}

const MedicalScreeningView: FC<MedicalScreeningProps> = ({
  date,
  status,
  result,
  summary,
  actions,
  sections,
}) => {
  const [expandedSection, setExpandedSection] = useState<number | null>(null);

  const toggleSection = useCallback(
    (idx: number) => {
      setExpandedSection(expandedSection === idx ? null : idx);
    },
    [expandedSection]
  );

  const renderAnswers = (type: QuestionType, answer?: string | null) => {

    switch (type) {
      case "RADIO":
        return (
          <div className="flex items-center space-x-4">
            <label>
              <input
                type="radio"
                value="Yes"
                checked={answer === "Yes"}
                className="mr-2 items-center appearance-none w-[13px] h-[13px] border-[1px] border-black rounded-full checked:bg-primary-color checked:border-primary-color"
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                value="No"
                checked={answer === "No"}
                className={`mr-2 items-center appearance-none w-[13px] h-[13px] border-[1px] border-black rounded-full checked:bg-primary-color checked:border-primary-color`}
              />
              No
            </label>
          </div>
        );
       
        case "TEXTAREA":
          return ( 
            <input
              className="w-[80%] p-2 border rounded"
              value={answer??""}
            />
          ) 

        case "CHECKBOX":
          return (
            <input
              type="checkbox"
              checked={answer === "true"}
              className="mr-2"
            />
          );
      default:
        return null;
    }
  };
  


  return (
    <div>
      <h1 className="text-xl font-semibold mb-4">Medical Screening nº 1:</h1>

      <div className="flex justify-start space-x-10 w-full mb-4">
        <div className="flex items-center space-x-2">
          <span className="text-gray-600">Date:</span>
          <span className="font-medium">{date}</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-gray-600">Status:</span>
          <span className="font-medium">{status}</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-gray-600">Result:</span>
          <span className="font-medium">
            {result}{" "}
            {result === "Red" ? "🚩" : result === "Green" ? "🟢" : "🟡"}
          </span>
        </div>
      </div>

      <div className="flex justify-between items-start mb-4">
        <div>
          <h4 className="text-lg font-semibold mb-2">Summary</h4>
          <div className="flex space-x-4">
            {summary.map((item, idx) => (
              <div key={idx} className="flex items-center space-x-2">
                <div
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: item.color }}
                ></div>
                <span className="text-gray-700">{item.count} answers</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-2">Course of Action</h4>
          <select className="p-2 border rounded">
            {actions.map((action, idx) => (
              <option key={idx} value={action}>
                {action}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button className="text-blue-500 mb-4">See all Results</button>

      <table className="w-full border-collapse border border-gray-200">
        <tbody>
          {sections.map((section, idx) => (
            <tr key={idx} className="border-b">
              <td className="font-semibold cursor-pointer border border-gray-200">
                <div
                  className={`flex justify-between items-center p-2 ${
                    expandedSection === idx
                      ? "bg-primary-color text-white"
                      : "bg-white text-black"
                  }`}
                  onClick={() => toggleSection(idx)}
                >
                  <span>{section.title}</span>
                  {expandedSection === idx ? (
                    <IoIosArrowUp />
                  ) : (
                    <IoIosArrowDown />
                  )}
                </div>
                {expandedSection === idx && (
                  <div className="border border-gray-200 p-2 bg-primary-color/10">
                    {section.questions.map((q, qIdx) => (
                      <div key={qIdx} className="mb-2 flex justify-between items-center p-1">
                        {q.requiredRef && q.requiredRef.value === "No" ? null : <div className="font-medium" dangerouslySetInnerHTML={{ __html: q.questionText }} />}
                        {q.requiredRef && q.requiredRef.value === "No" ? null : renderAnswers(q.type, q.answer)}
                      </div>
                    ))}
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MedicalScreeningView;
