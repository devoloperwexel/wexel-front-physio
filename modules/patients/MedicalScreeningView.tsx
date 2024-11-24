'use client';

import { FC, useState, useCallback } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

interface Question {
  id: string;
  requiredRef?: { id: string; value: string };
  questionText: string;
  values?: string[];
  type: QuestionType;
  info?: string;
  answer: string;
}

type QuestionType = "RADIO" | "TEXTAREA" | "CHECKBOX" | "TOPIC_QUESTION";

interface MedicalScreeningProps {
  date: string;
  status: string;
  result: string;
  summary: { color: string; count: number }[];
  actions: string[];
  sections: {
    title: string;
    questions: Question[];
  }[];
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

  const renderAnswers = (type: QuestionType, answer: string) => {
    switch (type) {
      case "RADIO":
        return (
          <div className="flex items-center space-x-4">
            <label>
              <input
                type="radio"
                name="answer"
                value="yes"
                checked={answer === "yes"}
                className="mr-2"
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="answer"
                value="no"
                checked={answer === "no"}
                className="mr-2"
              />
              No
            </label>
          </div>
        );
      case "TEXTAREA":
        return (
          <textarea
            className="w-full p-2 border rounded"
            value={answer}
            rows={4}
            placeholder="Enter your answer"
          />
        );
      default:
        return null;
    }
  };
  

  return (
    <div >
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
            {result} {result === 'Red' ? '🚩' : result === 'Green' ? '🟢' : '🟡'}
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
                      ? 'bg-primary-color text-white'
                      : 'bg-white text-black'
                  }`}
                  onClick={() => toggleSection(idx)}
                >
                  <span>{section.title}</span>
                  {expandedSection === idx ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </div>
                {expandedSection === idx && (
                  <div className="border border-gray-200 p-2 bg-primary-color/10">
                    {section.questions.map((q, qIdx) => (
                      <div key={qIdx} className="mb-2 flex justify-between items-center p-1">
                        <div className="font-medium">{q.questionText}</div>
                        {renderAnswers(q.type, q.answer)}
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
