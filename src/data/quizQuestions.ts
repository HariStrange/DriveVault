import { QuizQuestion } from '@/types';

export const driverQuizQuestions: QuizQuestion[] = [
  {
    id: '1',
    question: 'What is the maximum speed limit for trucks on European highways?',
    options: ['80 km/h', '90 km/h', '100 km/h', '110 km/h'],
    correctAnswer: 1, // Index 1 = 90 km/h
    type: 'driver',
    createdBy: 'system',
    createdAt: new Date().toISOString(),
  },
  {
    id: '2',
    question: 'How many hours can a truck driver drive continuously without a break?',
    options: ['3 hours', '4.5 hours', '6 hours', '8 hours'],
    correctAnswer: 1, // Index 1 = 4.5 hours
    type: 'driver',
    createdBy: 'system',
    createdAt: new Date().toISOString(),
  },
  {
    id: '3',
    question: 'What is the minimum rest period required after 9 hours of driving?',
    options: ['9 hours', '11 hours', '12 hours', '15 hours'],
    correctAnswer: 1, // Index 1 = 11 hours
    type: 'driver',
    createdBy: 'system',
    createdAt: new Date().toISOString(),
  },
  {
    id: '4',
    question: 'Which document is required for international truck driving in Europe?',
    options: ['National driving license only', 'International driving permit', 'Passport only', 'Work visa only'],
    correctAnswer: 1, // Index 1 = International driving permit
    type: 'driver',
    createdBy: 'system',
    createdAt: new Date().toISOString(),
  },
  {
    id: '5',
    question: 'What is the maximum weight limit for a truck and trailer combination in most EU countries?',
    options: ['38 tons', '40 tons', '42 tons', '44 tons'],
    correctAnswer: 3, // Index 3 = 44 tons
    type: 'driver',
    createdBy: 'system',
    createdAt: new Date().toISOString(),
  },
  {
    id: '6',
    question: 'When must you use headlights while driving a truck in Europe?',
    options: ['Only at night', 'During rain and fog', 'Always during daytime', 'Only in tunnels'],
    correctAnswer: 2, // Index 2 = Always during daytime
    type: 'driver',
    createdBy: 'system',
    createdAt: new Date().toISOString(),
  },
  {
    id: '7',
    question: 'What is the minimum following distance for trucks on highways?',
    options: ['2 seconds', '3 seconds', '5 seconds', '7 seconds'],
    correctAnswer: 2, // Index 2 = 5 seconds
    type: 'driver',
    createdBy: 'system',
    createdAt: new Date().toISOString(),
  },
  {
    id: '8',
    question: 'Which side of the road do you drive on in most European countries?',
    options: ['Left side', 'Right side', 'Either side', 'Depends on the country'],
    correctAnswer: 1, // Index 1 = Right side
    type: 'driver',
    createdBy: 'system',
    createdAt: new Date().toISOString(),
  },
  {
    id: '9',
    question: 'What should you do if your truck breaks down on a highway?',
    options: ['Continue driving slowly', 'Stop on the hard shoulder and use warning triangle', 'Stop in the right lane', 'Call for help without warning signs'],
    correctAnswer: 1, // Index 1 = Stop on the hard shoulder and use warning triangle
    type: 'driver',
    createdBy: 'system',
    createdAt: new Date().toISOString(),
  },
  {
    id: '10',
    question: 'What is the blood alcohol limit for commercial truck drivers in most EU countries?',
    options: ['0.05%', '0.02%', '0.00%', '0.08%'],
    correctAnswer: 2, // Index 2 = 0.00%
    type: 'driver',
    createdBy: 'system',
    createdAt: new Date().toISOString(),
  }
];

export const welderQuizQuestions: QuizQuestion[] = [
  {
    id: 'w1',
    question: 'What is the most common welding process used in structural steel fabrication?',
    options: ['TIG Welding', 'MIG Welding', 'Stick Welding', 'Flux-Cored Welding'],
    correctAnswer: 2,
    type: 'welder',
    createdBy: 'system',
    createdAt: new Date().toISOString(),
  },
  {
    id: 'w2',
    question: 'What does AWS stand for in welding standards?',
    options: ['American Welding Society', 'Advanced Welding Systems', 'Automated Welding Standards', 'American Welding Standards'],
    correctAnswer: 0,
    type: 'welder',
    createdBy: 'system',
    createdAt: new Date().toISOString(),
  },
  {
    id: 'w3',
    question: 'Which gas is commonly used for TIG welding of stainless steel?',
    options: ['Carbon Dioxide', 'Oxygen', 'Argon', 'Nitrogen'],
    correctAnswer: 2,
    type: 'welder',
    createdBy: 'system',
    createdAt: new Date().toISOString(),
  },
  {
    id: 'w4',
    question: 'What is the ideal travel speed for most welding processes?',
    options: ['As fast as possible', 'Slow and steady', 'Depends on material thickness', 'Always the same speed'],
    correctAnswer: 2,
    type: 'welder',
    createdBy: 'system',
    createdAt: new Date().toISOString(),
  },
  {
    id: 'w5',
    question: 'Which welding defect is caused by insufficient penetration?',
    options: ['Porosity', 'Lack of fusion', 'Undercut', 'Spatter'],
    correctAnswer: 1,
    type: 'welder',
    createdBy: 'system',
    createdAt: new Date().toISOString(),
  },
  {
    id: 'w6',
    question: 'What is the primary safety concern when welding in confined spaces?',
    options: ['Fire hazard', 'Ventilation and fume extraction', 'Equipment malfunction', 'Material contamination'],
    correctAnswer: 1,
    type: 'welder',
    createdBy: 'system',
    createdAt: new Date().toISOString(),
  },
  {
    id: 'w7',
    question: 'Which electrode classification indicates a low hydrogen electrode?',
    options: ['E6010', 'E6011', 'E7018', 'E6013'],
    correctAnswer: 2,
    type: 'welder',
    createdBy: 'system',
    createdAt: new Date().toISOString(),
  },
  {
    id: 'w8',
    question: 'What is the recommended preheat temperature for welding thick carbon steel?',
    options: ['No preheat needed', '150-200°F', '300-400°F', '500-600°F'],
    correctAnswer: 1,
    type: 'welder',
    createdBy: 'system',
    createdAt: new Date().toISOString(),
  },
  {
    id: 'w9',
    question: 'Which welding position is considered the most difficult?',
    options: ['Flat', 'Horizontal', 'Vertical', 'Overhead'],
    correctAnswer: 3,
    type: 'welder',
    createdBy: 'system',
    createdAt: new Date().toISOString(),
  },
  {
    id: 'w10',
    question: 'What does the term "root pass" refer to in welding?',
    options: ['The final welding pass', 'The first welding pass', 'A backing strip', 'A welding technique'],
    correctAnswer: 1,
    type: 'welder',
    createdBy: 'system',
    createdAt: new Date().toISOString(),
  }
];

// Combined export for backward compatibility
export const quizQuestions = driverQuizQuestions;