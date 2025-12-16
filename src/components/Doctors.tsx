import { Calendar, Award, GraduationCap, MapPin, Clock, Phone } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Doctors() {
  const [selectedDoctor, setSelectedDoctor] = useState<number | null>(null);

  const doctors = [
    {
      name: 'Prof. dr. Chaula L. Sukasah, SpB, SpBP-RE(K)',
      specialty: 'Spesialis Bedah Onkologi',
      subspecialty: 'Bedah Kanker & Tumor',
      education: 'FK Universitas Indonesia',
      experience: '25 Tahun',
      certifications: ['IDI', 'IKABI', 'Onkologi Bedah'],
      schedule: [
        { day: 'Senin', time: '08:00 - 12:00' },
        { day: 'Rabu', time: '13:00 - 16:00' },
        { day: 'Jumat', time: '08:00 - 12:00' },
      ],
      image: 'https://images.unsplash.com/photo-1755189118414-14c8dacdb082?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjBwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjU0NjA2ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Prof. Dr. dr. Theddeus O. H. Prasetyono, Sp.B.P.R.E., Subsp.T.(K)',
      specialty: 'Spesialis Bedah Digestif',
      subspecialty: 'Bedah Saluran Cerna',
      education: 'FK Universitas Gadjah Mada',
      experience: '18 Tahun',
      certifications: ['IDI', 'IKABI', 'Digestive Surgery'],
      schedule: [
        { day: 'Selasa', time: '08:00 - 12:00' },
        { day: 'Kamis', time: '13:00 - 16:00' },
        { day: 'Sabtu', time: '08:00 - 11:00' },
      ],
      image: 'https://images.unsplash.com/photo-1755189118414-14c8dacdb082?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjBwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjU0NjA2ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Dr. dr. Kristaninta Bangun, Sp.B.P.R.E., Subsp.K.M. (K)',
      specialty: 'Spesialis Bedah Umum',
      subspecialty: 'Bedah Umum & Trauma',
      education: 'FK Universitas Airlangga',
      experience: '15 Tahun',
      certifications: ['IDI', 'IKABI', 'ATLS'],
      schedule: [
        { day: 'Senin', time: '13:00 - 16:00' },
        { day: 'Rabu', time: '08:00 - 12:00' },
        { day: 'Jumat', time: '13:00 - 16:00' },
      ],
      image: 'https://images.unsplash.com/photo-1755189118414-14c8dacdb082?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjBwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjU0NjA2ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Dr. dr. Parintosa Atmodiwiryo, Sp.B.P.R.E., Subsp.M.O. (K)',
      specialty: 'Spesialis Bedah Vaskular',
      subspecialty: 'Bedah Pembuluh Darah',
      education: 'FK Universitas Padjadjaran',
      experience: '20 Tahun',
      certifications: ['IDI', 'IKABI', 'Vascular Surgery'],
      schedule: [
        { day: 'Selasa', time: '13:00 - 16:00' },
        { day: 'Kamis', time: '08:00 - 12:00' },
      ],
      image: 'https://images.unsplash.com/photo-1755189118414-14c8dacdb082?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjBwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjU0NjA2ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'dr. Rr. Prasetyanugraheni Kreshanti, Sp.B.P.R.E, Subsp.K.M. (K)',
      specialty: 'Spesialis Bedah Anak',
      subspecialty: 'Pediatric Surgery',
      education: 'FK Universitas Indonesia',
      experience: '12 Tahun',
      certifications: ['IDI', 'IKABI', 'Pediatric Surgery'],
      schedule: [
        { day: 'Senin', time: '08:00 - 12:00' },
        { day: 'Rabu', time: '13:00 - 16:00' },
        { day: 'Jumat', time: '08:00 - 12:00' },
      ],
      image: 'https://images.unsplash.com/photo-1755189118414-14c8dacdb082?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjBwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjU0NjA2ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Dr. dr. Nandita Melati Putri, Sp.B.P.R.E., Subsp.L.B.L. (K)',
      specialty: 'Spesialis Bedah Umum',
      subspecialty: 'Minimal Invasive Surgery',
      education: 'FK Universitas Diponegoro',
      experience: '10 Tahun',
      certifications: ['IDI', 'IKABI', 'Laparoscopy'],
      schedule: [
        { day: 'Selasa', time: '08:00 - 12:00' },
        { day: 'Kamis', time: '13:00 - 16:00' },
        { day: 'Sabtu', time: '08:00 - 11:00' },
      ],
      image: 'https://images.unsplash.com/photo-1755189118414-14c8dacdb082?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjBwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjU0NjA2ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'dr. Akhmad Noviandi Syarif, Sp.B.P.R.E., Subsp.L.B.L. (K)',
      specialty: 'Spesialis Bedah Umum',
      subspecialty: 'Minimal Invasive Surgery',
      education: 'FK Universitas Diponegoro',
      experience: '10 Tahun',
      certifications: ['IDI', 'IKABI', 'Laparoscopy'],
      schedule: [
        { day: 'Selasa', time: '08:00 - 12:00' },
        { day: 'Kamis', time: '13:00 - 16:00' },
        { day: 'Sabtu', time: '08:00 - 11:00' },
      ],
      image: 'https://images.unsplash.com/photo-1755189118414-14c8dacdb082?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjBwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjU0NjA2ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'dr. Indri Aulia, Sp. B.P.R.E., Subsp.G.E. (K), MPd. Ked',
      specialty: 'Spesialis Bedah Umum',
      subspecialty: 'Minimal Invasive Surgery',
      education: 'FK Universitas Diponegoro',
      experience: '10 Tahun',
      certifications: ['IDI', 'IKABI', 'Laparoscopy'],
      schedule: [
        { day: 'Selasa', time: '08:00 - 12:00' },
        { day: 'Kamis', time: '13:00 - 16:00' },
        { day: 'Sabtu', time: '08:00 - 11:00' },
      ],
      image: 'https://images.unsplash.com/photo-1755189118414-14c8dacdb082?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjBwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjU0NjA2ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'dr. Vika Tania, Sp.B.P.R.E., Subsp.K.M. (K)',
      specialty: 'Spesialis Bedah Umum',
      subspecialty: 'Minimal Invasive Surgery',
      education: 'FK Universitas Diponegoro',
      experience: '10 Tahun',
      certifications: ['IDI', 'IKABI', 'Laparoscopy'],
      schedule: [
        { day: 'Selasa', time: '08:00 - 12:00' },
        { day: 'Kamis', time: '13:00 - 16:00' },
        { day: 'Sabtu', time: '08:00 - 11:00' },
      ],
      image: 'https://images.unsplash.com/photo-1755189118414-14c8dacdb082?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjBwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjU0NjA2ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'dr. Mochamad Rachadian Ramadan, BSc.Med, Sp.B.P.R.E., Subsp.M.O. (K), MRBS',
      specialty: 'Spesialis Bedah Umum',
      subspecialty: 'Minimal Invasive Surgery',
      education: 'FK Universitas Diponegoro',
      experience: '10 Tahun',
      certifications: ['IDI', 'IKABI', 'Laparoscopy'],
      schedule: [
        { day: 'Selasa', time: '08:00 - 12:00' },
        { day: 'Kamis', time: '13:00 - 16:00' },
        { day: 'Sabtu', time: '08:00 - 11:00' },
      ],
      image: 'https://images.unsplash.com/photo-1755189118414-14c8dacdb082?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjBwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjU0NjA2ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-white mb-4">Profil Dokter Spesialis</h1>
            <p className="text-blue-100">
              Tim dokter spesialis bedah yang berpengalaman, terlatih, dan bersertifikat 
              siap memberikan pelayanan terbaik untuk Anda
            </p>
          </div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Tim Dokter Bedah</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Dipimpin oleh ahli bedah terbaik dengan berbagai subspesialisasi
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {doctors.map((doctor, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-100 rounded-2xl overflow-hidden hover:border-blue-300 hover:shadow-xl transition-all"
              >
                {/* Doctor Image */}
                <div className="relative h-64 bg-gradient-to-br from-blue-100 to-blue-50">
                  <ImageWithFallback
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs">
                    {doctor.experience}
                  </div>
                </div>

                {/* Doctor Info */}
                <div className="p-6">
                  <h3 className="text-gray-900 mb-1">{doctor.name}</h3>
                  <p className="text-xs text-blue-600 mb-1">{doctor.specialty}</p>
                  <p className="text-xs text-gray-500 mb-4">{doctor.subspecialty}</p>

                  {/* Education & Certifications */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-start gap-2">
                      <GraduationCap className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                      <span className="text-xs text-gray-600">{doctor.education}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Award className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                      <span className="text-xs text-gray-600">
                        {doctor.certifications.join(', ')}
                      </span>
                    </div>
                  </div>

                  {/* Schedule Preview */}
                  <div className="bg-gray-50 rounded-lg p-3 mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="w-4 h-4 text-blue-600" />
                      <span className="text-xs text-gray-900">Jadwal Praktik</span>
                    </div>
                    <div className="space-y-1">
                      {doctor.schedule.slice(0, 2).map((schedule, idx) => (
                        <div key={idx} className="flex justify-between text-xs text-gray-600">
                          <span>{schedule.day}</span>
                          <span>{schedule.time}</span>
                        </div>
                      ))}
                      {doctor.schedule.length > 2 && (
                        <button
                          onClick={() => setSelectedDoctor(selectedDoctor === index ? null : index)}
                          className="text-xs text-blue-600 hover:text-blue-700"
                        >
                          {selectedDoctor === index ? 'Tutup' : 'Lihat Semua'}
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Expanded Schedule */}
                  {selectedDoctor === index && doctor.schedule.length > 2 && (
                    <div className="bg-blue-50 rounded-lg p-3 mb-4 border border-blue-200">
                      <div className="space-y-1">
                        {doctor.schedule.map((schedule, idx) => (
                          <div key={idx} className="flex justify-between text-xs text-gray-700">
                            <span>{schedule.day}</span>
                            <span>{schedule.time}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* CTA Button */}
                  <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span className="text-xs">Buat Janji Temu</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Book */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Cara Membuat Janji</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Mudah dan cepat untuk berkonsultasi dengan dokter spesialis kami
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-gray-900 mb-2">1. Hubungi Kami</h3>
              <p className="text-xs text-gray-600">
                Telepon ke bagian pendaftaran atau gunakan aplikasi
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8" />
              </div>
              <h3 className="text-gray-900 mb-2">2. Pilih Jadwal</h3>
              <p className="text-xs text-gray-600">
                Pilih dokter dan waktu yang sesuai dengan kebutuhan Anda
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-gray-900 mb-2">3. Datang Konsultasi</h3>
              <p className="text-xs text-gray-600">
                Datang sesuai jadwal dan konsultasikan keluhan Anda
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-4">Butuh Konsultasi Segera?</h2>
          <p className="text-blue-100 mb-8">
            Hubungi layanan konsultasi kami atau kunjungi IGD untuk kasus darurat
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+62123456789"
              className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Telepon Pendaftaran</span>
            </a>
            <a
              href="tel:112"
              className="px-8 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>IGD 112</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
