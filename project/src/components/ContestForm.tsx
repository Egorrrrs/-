import React, { useState } from 'react';
import { Upload } from 'lucide-react';

interface FormData {
  fullName: string;
  birthDate: string;
  email: string;
  work: File | null;
}

export default function ContestForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    birthDate: '',
    email: '',
    work: null,
  });
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    setSuccess(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        fullName: '',
        birthDate: '',
        email: '',
        work: null,
      });
      setSuccess(false);
    }, 3000);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, work: e.target.files[0] });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl w-full space-y-6">
      <div>
        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
          ФИО
        </label>
        <input
          type="text"
          id="fullName"
          required
          value={formData.fullName}
          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Иванов Иван Иванович"
        />
      </div>

      <div>
        <label htmlFor="birthDate" className="block text-sm font-medium text-gray-700 mb-1">
          Дата рождения
        </label>
        <input
          type="date"
          id="birthDate"
          required
          value={formData.birthDate}
          onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Электронная почта
        </label>
        <input
          type="email"
          id="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="example@mail.ru"
        />
      </div>

      <div>
        <label htmlFor="work" className="block text-sm font-medium text-gray-700 mb-1">
          Конкурсная работа
        </label>
        <div className="relative">
          <input
            type="file"
            id="work"
            required
            onChange={handleFileChange}
            className="hidden"
          />
          <label
            htmlFor="work"
            className="flex items-center justify-center w-full px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-500 transition-colors"
          >
            <Upload className="w-5 h-5 mr-2 text-gray-500" />
            <span className="text-gray-600">
              {formData.work ? formData.work.name : 'Выберите файл'}
            </span>
          </label>
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium"
      >
        Отправить заявку
      </button>

      {success && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg">
          Заявка успешно отправлена!
        </div>
      )}
    </form>
  );
}