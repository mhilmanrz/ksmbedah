import { Calendar, Users, Clock, Shield, Award, Microscope, Heart, Phone, ChevronRight, Star, CheckCircle2 } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

type Page = 'home' | 'profile' | 'services' | 'doctors' | 'contact';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

export function Home({ onNavigate }: HomeProps) {
  const quickMenu = [
    {
      icon: Microscope,
      title: 'Layanan Bedah',
      description: 'Berbagai jenis bedah spesialis',
      action: () => onNavigate('services'),
    },
    {
      icon: Calendar,
      title: 'Jadwal Operasi',
      description: 'Lihat jadwal & booking',
      action: () => onNavigate('contact'),
    },
    {
      icon: Users,
      title: 'Dokter Spesialis',
      description: 'Tim ahli bedah berpengalaman',
      action: () => onNavigate('doctors'),
    },
    {
      icon: Phone,
      title: 'Kontak IGD',
      description: 'Layanan darurat 24/7',
      action: () => onNavigate('contact'),
    },
  ];

  const highlights = [
    {
      icon: Shield,
      title: 'Alat Bedah Modern',
      description: 'Teknologi medis terkini dengan standar internasional',
    },
    {
      icon: Award,
      title: 'Tim Ahli Bersertifikat',
      description: 'Dokter spesialis bedah berpengalaman dan terlatih',
    },
    {
      icon: Clock,
      title: 'Layanan 24 Jam',
      description: 'Siap melayani kebutuhan bedah darurat kapan saja',
    },
    {
      icon: Heart,
      title: 'Perawatan Komprehensif',
      description: 'Dari konsultasi hingga pemulihan pasca operasi',
    },
  ];

  const testimonials = [
    {
      name: 'Budi Santoso',
      role: 'Pasien Bedah Digestif',
      content: 'Pelayanan yang sangat profesional dan penuh perhatian. Tim dokter menjelaskan setiap prosedur dengan detail. Terima kasih KSM Bedah!',
      rating: 5,
    },
    {
      name: 'Siti Nurhaliza',
      role: 'Pasien Bedah Onkologi',
      content: 'Fasilitas yang lengkap dan modern. Proses operasi berjalan lancar dan perawatan pasca operasi sangat baik.',
      rating: 5,
    },
    {
      name: 'Ahmad Hidayat',
      role: 'Pasien Bedah Vaskular',
      content: 'Dokter sangat kompeten dan ramah. Saya merasa aman dan nyaman selama proses perawatan di sini.',
      rating: 5,
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full">
                Surgical Excellence
              </div>
              <h1 className="text-gray-900">
                KSM Bedah – Layanan Bedah Terpadu & Profesional
              </h1>
              <p className="text-gray-600">
                Menyediakan layanan bedah berkualitas tinggi dengan teknologi modern, 
                didukung oleh tim dokter spesialis berpengalaman untuk kesembuhan optimal Anda.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                >
                  Daftar Konsultasi
                  <ChevronRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onNavigate('doctors')}
                  className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors flex items-center justify-center gap-2"
                >
                  Lihat Jadwal Dokter
                </button>
              </div>
              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="text-center">
                  <div className="text-blue-600">500+</div>
                  <div className="text-xs text-gray-500">Operasi/Tahun</div>
                </div>
                <div className="text-center">
                  <div className="text-blue-600">15+</div>
                  <div className="text-xs text-gray-500">Dokter Spesialis</div>
                </div>
                <div className="text-center">
                  <div className="text-blue-600">24/7</div>
                  <div className="text-xs text-gray-500">Layanan IGD</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1579684288452-b334934f845f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3NwaXRhbCUyMHN1cmdlcnl8ZW58MXx8fHwxNzY1NTEwMTQ3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Modern surgical facility"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent" />
              </div>
              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl hidden lg:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="text-gray-900">98% Success Rate</div>
                    <div className="text-xs text-gray-500">Tingkat Keberhasilan</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Menu */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickMenu.map((item, index) => {
            const Icon = item.icon;
            return (
              <button
                key={index}
                onClick={item.action}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all group border border-gray-100 hover:border-blue-200"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                  <Icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-gray-900 mb-2">{item.title}</h3>
                <p className="text-xs text-gray-500">{item.description}</p>
              </button>
            );
          })}
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-white mb-4">Keunggulan Kami</h2>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Komitmen kami adalah memberikan pelayanan bedah terbaik dengan standar medis tertinggi
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-colors"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white mb-2">{item.title}</h3>
                  <p className="text-xs text-blue-100">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Fasilitas Modern</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Dilengkapi dengan teknologi medis terkini untuk memberikan hasil terbaik
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758206523830-a5b8afb372a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdGVjaG5vbG9neSUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NjU0NzA1ODR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Medical equipment"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdGVhbSUyMGRvY3RvcnN8ZW58MXx8fHwxNzY1NDkyODc5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Medical team"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1643386106343-18d5d3c64d47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXJnaWNhbCUyMGluc3RydW1lbnRzJTIwY2xlYW58ZW58MXx8fHwxNzY1NTEwMjcyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Surgical instruments"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Testimoni Pasien</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kepercayaan pasien adalah prioritas kami
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 p-6 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-xs text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                <div className="border-t border-gray-100 pt-4">
                  <div className="text-gray-900">{testimonial.name}</div>
                  <div className="text-xs text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-4">Butuh Konsultasi Bedah?</h2>
          <p className="text-blue-100 mb-8">
            Tim kami siap membantu Anda dengan layanan konsultasi profesional
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Hubungi Kami
            </button>
            <button
              onClick={() => onNavigate('doctors')}
              className="px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors"
            >
              Lihat Profil Dokter
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
