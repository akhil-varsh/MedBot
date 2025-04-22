import { useNavigate } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

export default function BackButton() {
  const navigate = useNavigate();
  
  const goBack = () => {
    navigate(-1);
  };
  
  return (
    <button 
      onClick={goBack}
      className="inline-flex items-center gap-1 text-medical-600 hover:text-medical-700 transition-colors p-2 rounded-lg hover:bg-gray-100"
      aria-label="Go back"
    >
      <ArrowLeftIcon className="w-5 h-5" />
      <span className="text-sm font-medium">Back</span>
    </button>
  );
}