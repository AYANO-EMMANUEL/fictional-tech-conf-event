interface Session {
  id: number;
  time: string;
  title: string;
  speaker: string;
  location: string;
  category: 'keynote' | 'workshop' | 'panel' | 'break';
}

export const Schedule = () => {
  const sessions: Session[] = [
    {
      id: 1,
      time: '08:00 - 09:30',
      title: 'Registration & Breakfast',
      speaker: '',
      location: 'Main Lobby',
      category: 'break',
    },
    {
      id: 2,
      time: '09:30 - 10:30',
      title: 'Keynote: The Future of African Tech',
      speaker: 'Dr. Juliet Ehimuan (Google)',
      location: 'Eko Convention Center',
      category: 'keynote',
    },
    {
      id: 3,
      time: '10:45 - 12:00',
      title: 'Building Scalable Fintech Solutions',
      speaker: 'Olu Adegoke (Flutterwave)',
      location: 'Lagos Hall',
      category: 'workshop',
    },
    {
      id: 4,
      time: '10:45 - 12:00',
      title: 'AI & Machine Learning in Africa',
      speaker: 'Dr. Aisha Bello (Data Science Nigeria)',
      location: 'Abuja Hall',
      category: 'workshop',
    },
    {
      id: 5,
      time: '12:00 - 13:30',
      title: 'Networking Lunch & Exhibition',
      speaker: '',
      location: 'Eko Hotel Gardens',
      category: 'break',
    },
    {
      id: 6,
      time: '13:30 - 15:00',
      title: 'Panel: The Next Wave of Nigerian Unicorns',
      speaker: 'Featuring Andela, Paystack & Flutterwave',
      location: 'Eko Convention Center',
      category: 'panel',
    },
    {
      id: 7,
      time: '15:15 - 16:30',
      title: 'Blockchain & Web3 in Africa',
      speaker: 'Oluwaseun Williams (Cowrywise)',
      location: 'Lagos Hall',
      category: 'workshop',
    },
    {
      id: 8,
      time: '15:15 - 16:30',
      title: 'Building for the Next Billion Users',
      speaker: 'Ada Nduka (Google Devs Africa)',
      location: 'Abuja Hall',
      category: 'workshop',
    },
    {
      id: 9,
      time: '16:45 - 17:30',
      title: 'Closing Remarks & Networking',
      speaker: '',
      location: 'Eko Convention Center',
      category: 'break',
    },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'keynote':
        return 'bg-purple-100 text-purple-800';
      case 'workshop':
        return 'bg-blue-100 text-blue-800';
      case 'panel':
        return 'bg-green-100 text-green-800';
      case 'break':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-6xl mx-auto transition-all duration-300 hover:shadow-xl">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Conference Schedule</h2>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Time
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Session
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Speaker
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Location
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {sessions.map((session) => (
              <tr 
                key={session.id} 
                className={`hover:bg-gray-50 transition-all duration-200 transform hover:scale-[1.01] ${
                  session.category === 'keynote' ? 'ring-1 ring-purple-100' : ''
                }`}
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {session.time}
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{session.title}</div>
                      {session.category !== 'break' && (
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getCategoryColor(session.category)}`}>
                          {session.category.charAt(0).toUpperCase() + session.category.slice(1)}
                        </span>
                      )}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {session.speaker || '-'}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {session.location}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="flex items-center">
          <span className="w-3 h-3 rounded-full bg-purple-500 mr-2"></span>
          <span className="text-sm text-gray-600">Keynote</span>
        </div>
        <div className="flex items-center">
          <span className="w-3 h-3 rounded-full bg-blue-500 mr-2"></span>
          <span className="text-sm text-gray-600">Workshop</span>
        </div>
        <div className="flex items-center">
          <span className="w-3 h-3 rounded-full bg-green-500 mr-2"></span>
          <span className="text-sm text-gray-600">Panel</span>
        </div>
        <div className="flex items-center">
          <span className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></span>
          <span className="text-sm text-gray-600">Break</span>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
