const colorMap = {
  blue: {
    bg: 'from-blue-100 to-blue-200',
    text: 'text-blue-700',
    border: 'border-blue-300',
    bar: 'bg-blue-400',
  },
  green: {
    bg: 'from-green-100 to-green-200',
    text: 'text-green-700',
    border: 'border-green-300',
    bar: 'bg-green-400',
  },
  red: {
    bg: 'from-red-100 to-red-200',
    text: 'text-red-700',
    border: 'border-red-300',
    bar: 'bg-red-700',
  },
  purple: {
    bg: 'from-purple-100 to-purple-200',
    text: 'text-purple-700',
    border: 'border-purple-300',
    bar: 'bg-purple-700',
  },
};

const StatCard = ({ label, value, color, icon }) => {
  const { bg, text, border, bar } = colorMap[color];

  return (
    <div
      className={`
        p-5 rounded-2xl 
        bg-gradient-to-br ${bg} ${text}
        flex items-center justify-between 
        transition-all duration-300 ease-in-out 
        transform hover:-translate-y-2
        border-2 ${border}
        hover:shadow-xl
        h-[150px]
        mt-4
        relative
        
      `}
    >
        <div className={`absolute top-0 left-0 w-[96%] h-[4px]  rounded-3xl ml-1 mt-1 bg-gradient-to-bar ${bar}`} />
      <div>
      


        <div className="text-sm font-medium mb-1">{label}</div>
        <div className="text-2xl font-bold">{value}</div>
      </div>
      <div className="text-3xl opacity-30">{icon}</div>
    </div>
  );
};

export default StatCard;
