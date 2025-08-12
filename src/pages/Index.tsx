import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    direction: '',
    message: ''
  });

  const directions = [
    {
      id: 'robotics',
      title: 'Робототехника',
      description: 'Изучение основ программирования и конструирования роботов. Развитие логического мышления и технических навыков.',
      icon: 'Bot',
      color: 'bg-creative-blue',
      age: '6-16 лет'
    },
    {
      id: 'woodburning',
      title: 'Выжигание по дереву',
      description: 'Творческое направление для развития мелкой моторики и художественного вкуса. Создание уникальных изделий.',
      icon: 'Flame',
      color: 'bg-creative-coral',
      age: '8-99 лет'
    },
    {
      id: 'stonepainting',
      title: 'Рисование на камнях',
      description: 'Арт-терапия и развитие креативности через роспись камней. Медитативное и успокаивающее занятие.',
      icon: 'Palette',
      color: 'bg-creative-mint',
      age: '5-99 лет'
    },
    {
      id: 'psychology',
      title: 'Психологическое ведение',
      description: 'Индивидуальные и групповые консультации для родителей. Поддержка в вопросах воспитания и развития детей.',
      icon: 'Heart',
      color: 'bg-creative-purple',
      age: 'Взрослые'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Форма отправлена:', formData);
    alert('Спасибо за заявку! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '', direction: '', message: '' });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-creative-yellow/20 via-white to-creative-mint/20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-creative-coral via-creative-blue to-creative-mint py-20 px-4">
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <img 
              src="/img/5f7f58ed-9a1e-41c2-8192-80a037e80803.jpg" 
              alt="Центр Мой выбор" 
              className="mx-auto h-32 w-32 object-cover rounded-full border-4 border-white shadow-2xl"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            Центр "Мой выбор"
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Развитие детей и работа со взрослыми через творчество, технологии и психологическую поддержку
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-white text-creative-coral hover:bg-gray-100 text-lg px-8 py-6 rounded-full shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <Icon name="Calendar" size={20} className="mr-2" />
              Записаться на занятие
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-creative-coral text-lg px-8 py-6 rounded-full backdrop-blur-sm transform hover:scale-105 transition-all duration-300"
            >
              <Icon name="Phone" size={20} className="mr-2" />
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>

      {/* Directions Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Наши направления
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Выберите подходящее направление для развития и творческого роста
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {directions.map((direction, index) => (
              <Card 
                key={direction.id} 
                className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 overflow-hidden"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader className={`${direction.color} text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                  <div className="flex items-center gap-4 relative z-10">
                    <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
                      <Icon name={direction.icon as any} size={32} className="text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-bold">{direction.title}</CardTitle>
                      <div className="text-white/80 font-medium">{direction.age}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6 bg-white">
                  <CardDescription className="text-gray-700 text-lg leading-relaxed mb-6">
                    {direction.description}
                  </CardDescription>
                  <Button 
                    className="w-full bg-gradient-to-r from-creative-coral to-creative-blue hover:from-creative-blue hover:to-creative-coral text-white font-semibold py-3 rounded-full transform hover:scale-105 transition-all duration-300"
                    onClick={() => handleInputChange('direction', direction.title)}
                  >
                    <Icon name="ArrowRight" size={18} className="mr-2" />
                    Записаться на {direction.title.toLowerCase()}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-creative-lavender/30 to-creative-yellow/30">
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-2xl border-0 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-creative-coral to-creative-blue text-white text-center py-12">
              <CardTitle className="text-3xl md:text-4xl font-bold mb-4">
                <Icon name="Calendar" size={40} className="mx-auto mb-4" />
                Онлайн-запись на занятия
              </CardTitle>
              <CardDescription className="text-white/90 text-lg">
                Заполните форму, и мы свяжемся с вами для уточнения деталей
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8 md:p-12 bg-white">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-lg font-semibold text-gray-700">
                      Ваше имя *
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Введите ваше имя"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required
                      className="text-lg py-3 border-2 border-gray-200 focus:border-creative-coral rounded-xl"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-lg font-semibold text-gray-700">
                      Телефон *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      required
                      className="text-lg py-3 border-2 border-gray-200 focus:border-creative-coral rounded-xl"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="direction" className="text-lg font-semibold text-gray-700">
                    Выберите направление *
                  </Label>
                  <Select value={formData.direction} onValueChange={(value) => handleInputChange('direction', value)}>
                    <SelectTrigger className="text-lg py-3 border-2 border-gray-200 focus:border-creative-coral rounded-xl">
                      <SelectValue placeholder="Выберите интересующее направление" />
                    </SelectTrigger>
                    <SelectContent>
                      {directions.map((direction) => (
                        <SelectItem key={direction.id} value={direction.title}>
                          {direction.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-lg font-semibold text-gray-700">
                    Дополнительная информация
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Расскажите о возрасте ребенка, ваших пожеланиях или вопросах..."
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    rows={4}
                    className="text-lg border-2 border-gray-200 focus:border-creative-coral rounded-xl resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg"
                  className="w-full bg-gradient-to-r from-creative-coral to-creative-blue hover:from-creative-blue hover:to-creative-coral text-white font-bold text-lg py-4 rounded-xl transform hover:scale-105 transition-all duration-300 shadow-xl"
                >
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-8">Свяжитесь с нами</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="p-4 bg-creative-coral rounded-full mb-4">
                <Icon name="Phone" size={24} className="text-white" />
              </div>
              <h4 className="font-semibold text-lg mb-2">Телефон</h4>
              <p className="text-gray-600">+7 (___) ___-__-__</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="p-4 bg-creative-mint rounded-full mb-4">
                <Icon name="Mail" size={24} className="text-white" />
              </div>
              <h4 className="font-semibold text-lg mb-2">Email</h4>
              <p className="text-gray-600">info@moy-vybor.ru</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="p-4 bg-creative-blue rounded-full mb-4">
                <Icon name="MapPin" size={24} className="text-white" />
              </div>
              <h4 className="font-semibold text-lg mb-2">Адрес</h4>
              <p className="text-gray-600">г. Москва, ул. Примерная, 123</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}