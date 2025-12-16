import { Target, Eye, Award, Users, Building2, Heart, Shield, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Profile() {
  const teamStructure = [
    {
      position: 'Kepala KSM BEDAH PLASTIK',
      name: 'Prof. Dr. dr. Ahmad Surya, Sp.B(K)Onk',
      specialty: 'Spesialis Bedah Onkologi',
    },
    {
      position: 'Wakil Kepala KSM',
      name: 'Dr. dr. Siti Rahma, Sp.B(K)Digest',
      specialty: 'Spesialis Bedah Digestif',
    },
    {
      position: 'Koordinator Pelayanan',
      name: 'dr. Budi Hartono, Sp.B',
      specialty: 'Spesialis Bedah Umum',
    },
  ];

  const standards = [
    {
      icon: Shield,
      title: 'Standar Keselamatan',
      description: 'Menerapkan protokol keselamatan pasien sesuai standar WHO dan KARS',
    },
    {
      icon: Award,
      title: 'Akreditasi Internasional',
      description: 'Tersertifikasi dan terakreditasi oleh berbagai badan kesehatan',
    },
    {
      icon: Heart,
      title: 'Patient-Centered Care',
      description: 'Fokus pada kebutuhan dan kenyamanan pasien',
    },
    {
      icon: TrendingUp,
      title: 'Continuous Improvement',
      description: 'Peningkatan kualitas pelayanan berkelanjutan',
    },
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-white mb-4">Profil KSM BEDAH PLASTIK</h1>
            <p className="text-blue-100">
              Kelompok Staf Medis Bedah yang berdedikasi memberikan pelayanan bedah terpadu, 
              profesional, dan berkualitas tinggi untuk kesembuhan optimal pasien
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-gray-900 mb-6">Tentang KSM BEDAH PLASTIK</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  KSM BEDAH PLASTIK merupakan unit pelayanan bedah terpadu yang menangani berbagai 
                  kasus bedah mulai dari bedah umum, bedah digestif, bedah onkologi, bedah 
                  vaskular, hingga bedah anak dengan pendekatan holistik dan komprehensif.
                </p>
                <p>
                  Didukung oleh tim dokter spesialis bedah yang berpengalaman, perawat terlatih, 
                  dan teknologi medis modern, kami berkomitmen memberikan hasil terbaik untuk 
                  setiap pasien yang kami layani.
                </p>
                <p>
                  Sejak didirikan, KSM BEDAH PLASTIK telah menangani ribuan kasus bedah dengan tingkat 
                  keberhasilan yang tinggi dan kepuasan pasien yang optimal.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <div className="text-blue-600 mb-1">15+</div>
                  <div className="text-xs text-gray-600">Dokter Spesialis</div>
                </div>
                <div className="bg-blue-50 p-6 rounded-xl">
                  <div className="text-blue-600 mb-1">500+</div>
                  <div className="text-xs text-gray-600">Operasi/Tahun</div>
                </div>
                <div className="bg-blue-50 p-6 rounded-xl">
                  <div className="text-blue-600 mb-1">10+</div>
                  <div className="text-xs text-gray-600">Tahun Pengalaman</div>
                </div>
                <div className="bg-blue-50 p-6 rounded-xl">
                  <div className="text-blue-600 mb-1">98%</div>
                  <div className="text-xs text-gray-600">Tingkat Keberhasilan</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <ImageWithFallback
                  src="https://scontent.fdps17-1.fna.fbcdn.net/v/t39.30808-6/472716483_1259041472210397_5230570006002178571_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=5cGMqNytj_IQ7kNvwGl9PD6&_nc_oc=AdmkZKrHZ664x0s7qN7EWOW9MNHsnRNAw5il4FLH952L5bGAFxXFzcegYMCXFQw1S1Q&_nc_zt=23&_nc_ht=scontent.fdps17-1.fna&_nc_gid=HSyv9wQv6EHES4Ok0e8YVA&oh=00_AfmBhECmvTdwZ2M29Fa4w8iY-aQfONV7aQAuIcBUAETzgA&oe=694699BF"
                  alt="Hospital building"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-gray-900 mb-4">Visi</h3>
              <p className="text-gray-600">
                Menjadi pusat layanan bedah unggulan yang diakui secara nasional dan regional, 
                dengan mengedepankan kualitas, keselamatan pasien, dan inovasi dalam pelayanan 
                bedah yang komprehensif dan terintegrasi.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-gray-900 mb-4">Misi</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-xs">Memberikan pelayanan bedah berkualitas tinggi dengan standar internasional</span>
                </li>
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-xs">Mengembangkan kompetensi SDM melalui pendidikan dan pelatihan berkelanjutan</span>
                </li>
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-xs">Menerapkan teknologi medis terkini untuk hasil optimal</span>
                </li>
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-xs">Mengutamakan keselamatan dan kepuasan pasien</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Organizational Structure */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Building2 className="w-8 h-8 text-blue-600" />
              <h2 className="text-gray-900">Struktur Organisasi</h2>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Dipimpin oleh para ahli bedah berpengalaman dan bersertifikat
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {teamStructure.map((member, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-blue-50 to-white p-6 rounded-xl border border-blue-100 hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-xs text-blue-600 mb-1">{member.position}</div>
                      <div className="text-gray-900">{member.name}</div>
                      <div className="text-xs text-gray-500">{member.specialty}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Photo */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Tim Dokter Spesialis Bedah</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tim profesional yang berdedikasi untuk kesembuhan Anda
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdGVhbSUyMGRvY3RvcnN8ZW58MXx8fHwxNzY1NDkyODc5fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Surgical team"
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Standards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Standar Pelayanan</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Berkomitmen pada standar tertinggi dalam setiap aspek pelayanan
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {standards.map((standard, index) => {
              const Icon = standard.icon;
              return (
                <div
                  key={index}
                  className="bg-white border border-gray-200 p-6 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-gray-900 mb-2">{standard.title}</h3>
                  <p className="text-xs text-gray-600">{standard.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
