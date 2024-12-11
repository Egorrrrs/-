import React from 'react';
import ContestForm from './components/ContestForm';
import { Trophy } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <Trophy className="w-16 h-16 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Конкурсная заявка
            </h1>
            <p className="text-lg text-gray-600">
              Заполните форму ниже, чтобы принять участие в конкурсе
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <ContestForm />
          </div>

          <div className="mt-8 text-center text-sm text-gray-500">
            <p>
              Отправляя форму, вы соглашаетесь с правилами конкурса и обработкой персональных данных
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;