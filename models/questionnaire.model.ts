export interface Questionnaire {
  id: string;
  title: string;
  createdAt: string; 
  updatedAt: string; 
  questions: Question[];
}

export interface Question {
  id: string;
  questionText: string;
  type: "RADIO" | "TEXTAREA" | "CHECKBOX" | "TOPIC_QUESTION"; 
  values: string[]; 
  info?: string;
  requiredRef: { id: string; value: string }; 
  answer?: string;
}


